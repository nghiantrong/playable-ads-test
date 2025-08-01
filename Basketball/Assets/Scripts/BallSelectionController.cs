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

    private void Update()
    {
        if (IsTouchBegin())
        {
            isHolding = true;
            previousTouchPos = GetTouchPosition();
            ballSelectionRing.SetActive(false);
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
        }
    }
}
