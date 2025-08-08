using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using static InputHelper;

public class BallSelectionController : MonoBehaviour
{
    private bool isHolding = false;
    private Vector3 previousTouchPos;
    private Vector3 currentTouchPos;

    public float rotationSpeed = 0.5f;
    public GameObject ballSelectionRing;

    public float snapDuration = 0.2f;
    private Coroutine snapToRingCoroutine;
    private int currentBallIndex = 0;

    public float spinAnimDuration = 0.65f;

    public GameObject[] selectionBalls;
    public GameObject[] balls;

    private CameraController cameraController;


    private void Start()
    {
        cameraController = FindObjectOfType<CameraController>();
    }

    private void OnEnable()
    {
        StartCoroutine(SpinAnimation());
    }

    private void Update()
    {
        BallSelectionScroll();
    }

    private void BallSelectionScroll()
    {
        if (IsTouchBegin())
        {
            isHolding = true;
            previousTouchPos = GetTouchPosition();
            ballSelectionRing.SetActive(false);

            if (snapToRingCoroutine != null)
            {
                StopCoroutine(snapToRingCoroutine);
                snapToRingCoroutine = null;
            }
        }

        if (isHolding && IsTouching())
        {
            currentTouchPos = GetTouchPosition();
            float deltaX = currentTouchPos.x - previousTouchPos.x;

            transform.Rotate(0, -deltaX * rotationSpeed, 0, Space.World);

            previousTouchPos = currentTouchPos;
        }

        if (IsTouchEnd())
        {
            isHolding = false;
            ballSelectionRing.SetActive(true);

            snapToRingCoroutine = StartCoroutine(SnapToRing());
            StartCoroutine(SpinForeverAnim());
        }
    }

    private IEnumerator SpinForeverAnim()
    {
        while (true)
        {
            GameObject selectedBall = selectionBalls[currentBallIndex];
            selectedBall.transform.Rotate((60f * Time.deltaTime), -(60f * Time.deltaTime), 0);
            yield return null;
        }
    }

    private IEnumerator SpinAnimation()
    {
        if (snapToRingCoroutine != null)
        {
            StopCoroutine(snapToRingCoroutine);
            snapToRingCoroutine = null;
        }

        float startY = transform.eulerAngles.y;
        float endY = startY + 360f;

        float elapsed = 0f;

        while (elapsed < spinAnimDuration)
        {
            elapsed += Time.deltaTime;
            float t = Mathf.Clamp01(elapsed / spinAnimDuration);

            float currentY = Mathf.Lerp(startY, endY, t);
            transform.rotation = Quaternion.Euler(0f, currentY, 0f);

            yield return null;
        }

        transform.rotation = Quaternion.Euler(0f, endY, 0f);
    }

    private IEnumerator SnapToRing()
    {
        float startY = transform.rotation.eulerAngles.y;
        float targetY = GetNearestSnapAngle(startY);
        float elapsedTime = 0f;

        Quaternion startRot = transform.rotation;
        Quaternion endRot = Quaternion.Euler(0, targetY, 0);

        while (elapsedTime < snapDuration)
        {
            elapsedTime += Time.deltaTime;
            transform.rotation = Quaternion.Slerp(startRot, endRot, elapsedTime / snapDuration);
            yield return null;
        }

        transform.rotation = endRot;
        snapToRingCoroutine = null;
    }

    private float GetNearestSnapAngle(float currentY)
    {
        float normalized = Mathf.DeltaAngle(0, currentY);

        float[] snapAngles = { 0, -45, -90, -135, 180, 135, 90, 45 };
        float closest = snapAngles[0];
        float minDiff = Mathf.Abs(normalized - closest);

        for (int i = 0; i < snapAngles.Length; i++)
        {
            float diff = Mathf.Abs(normalized - snapAngles[i]);
            if (diff <= minDiff)
            {
                closest = snapAngles[i];
                minDiff = diff;
                currentBallIndex = i;
            }
        }
        Debug.Log($"Selected ball index: {currentBallIndex}, angle: {closest}");

        return closest;
    }

    public void SelectBall()
    {
        if (selectionBalls.Length == 0 || currentBallIndex < 0 || currentBallIndex >= selectionBalls.Length)
        {
            Debug.LogWarning("No balls available for selection.");
            return;
        }

        GameObject selectedBall = selectionBalls[currentBallIndex];
        foreach (GameObject ball in balls)
        {
            ball.GetComponentInChildren<MeshRenderer>().material = selectedBall.GetComponentInChildren<MeshRenderer>().material;
        }

        Back();
    }

    public void Back()
    {
        if (cameraController != null)
        {
            cameraController.SwitchToCamera1();
        }
        else
        {
            Debug.LogWarning("CameraController not found in the scene.");
        }
    }

}
