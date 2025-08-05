using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using static InputHelper;

public class BallThrower : MonoBehaviour
{
    private static BallThrower currentlyHeldBall = null;

    private Rigidbody rb;
    private Camera cam;

    private bool isHolding = false;
    private Vector3 initialScreenTouchPos;
    private Vector3 currentScreenTouchPos;

    [Header("Throw Settings")]
    public float throwForceMultiplier = 80f;
    public float maxForce = 90f;
    public float forwardZ = 75f;

    public float spinMultiplier = 30f;

    void Start()
    {
        rb = GetComponent<Rigidbody>();
        cam = Camera.main;
    }

    void Update()
    {
        if (IsTouchBegin())
        {
            TryPickUpThisBall(GetTouchPosition());
        }

        if (isHolding && IsTouching())
        {
            currentScreenTouchPos = GetTouchPosition();
            HoldToPosition(currentScreenTouchPos);
        }

        if (isHolding && IsTouchEnd())
        {
            ReleaseAndThrow(currentScreenTouchPos);
        }
    }

    void TryPickUpThisBall([Bridge.Ref] Vector3 screenTouchPos)
    {
        if (currentlyHeldBall != null) { return; }

        Ray ray = cam.ScreenPointToRay(screenTouchPos);
        RaycastHit[] hits = Physics.RaycastAll(ray, 100f);

        foreach (RaycastHit hit in hits)
        {
            if (hit.collider == GetComponent<Collider>())
            {
                isHolding = true;
                currentlyHeldBall = this;
                rb.isKinematic = true;
                rb.useGravity = false;
                initialScreenTouchPos = screenTouchPos;
                break;
            }
        }
    }

    void HoldToPosition(Vector3 screenTouchPos)
    {
        float ballZ = cam.WorldToScreenPoint(transform.position).z;
        screenTouchPos.z = ballZ;
        Vector3 worldPos = cam.ScreenToWorldPoint(screenTouchPos);
        transform.position = worldPos;
    }

    void ReleaseAndThrow([Bridge.Ref] Vector3 releaseTouchPos)
    {
        Vector3 dragVector = releaseTouchPos - initialScreenTouchPos;

        Vector3 throwDir = new Vector3(1f, dragVector.y, forwardZ);
        Vector3 force = cam.transform.TransformDirection(throwDir.normalized) * (dragVector.magnitude / 100f) * throwForceMultiplier;
        force = Vector3.ClampMagnitude(force, maxForce);

        rb.isKinematic = false;
        rb.useGravity = true;
        rb.AddForce(force, ForceMode.Impulse);

        Vector3 spinDirection = new Vector3(-dragVector.y, dragVector.x, 0f).normalized;
        rb.AddTorque(spinDirection * spinMultiplier, ForceMode.Impulse);

        AudioManager.Instance.PlayThrowBallSound();

        isHolding = false;
        currentlyHeldBall = null;
    }
}
