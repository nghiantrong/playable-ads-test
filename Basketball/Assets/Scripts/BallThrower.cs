using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BallThrower : MonoBehaviour
{
    private Rigidbody rb;
    private Camera cam;

    private bool isHolding = false;
    private Vector3 initialScreenTouchPos;
    private Vector3 currentScreenTouchPos;

    [Header("Throw Settings")]
    public float throwForceMultiplier = 100f;
    public float maxForce = 100f;
    public float dragPlaneZ = 30f;
    public float forwardZ = 100f;

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

    bool IsTouchBegin() =>
        Input.GetMouseButtonDown(0) || (Input.touchCount > 0 && Input.GetTouch(0).phase == TouchPhase.Began);

    bool IsTouching() =>
        Input.GetMouseButton(0) || (Input.touchCount > 0 && (Input.GetTouch(0).phase == TouchPhase.Moved || Input.GetTouch(0).phase == TouchPhase.Stationary));

    bool IsTouchEnd() =>
        Input.GetMouseButtonUp(0) || (Input.touchCount > 0 && Input.GetTouch(0).phase == TouchPhase.Ended);

    Vector3 GetTouchPosition() =>
        (Input.touchCount > 0) ? Input.GetTouch(0).position : Input.mousePosition;

    void TryPickUpThisBall(Vector3 screenTouchPos)
    {
        Ray ray = cam.ScreenPointToRay(screenTouchPos);
        RaycastHit[] hits = Physics.RaycastAll(ray, 100f);

        foreach (RaycastHit hit in hits)
        {
            if (hit.collider == GetComponent<Collider>())
            {
                isHolding = true;
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

    void ReleaseAndThrow(Vector3 releaseTouchPos)
    {
        Vector3 dragVector = releaseTouchPos - initialScreenTouchPos;

        Vector3 throwDir = new Vector3(1f, dragVector.y, forwardZ);
        Vector3 force = cam.transform.TransformDirection(throwDir.normalized) * (dragVector.magnitude / 100f) * throwForceMultiplier;
        force = Vector3.ClampMagnitude(force, maxForce);

        rb.isKinematic = false;
        rb.useGravity = true;
        rb.AddForce(force, ForceMode.Impulse);

        isHolding = false;
    }
}
