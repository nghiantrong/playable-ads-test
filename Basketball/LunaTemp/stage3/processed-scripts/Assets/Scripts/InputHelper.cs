using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public static class InputHelper
{
    public static bool IsTouchBegin() =>
        Input.GetMouseButtonDown(0) || (Input.touchCount > 0 && Input.GetTouch(0).phase == TouchPhase.Began);

    public static bool IsTouching() =>
        Input.GetMouseButton(0) || (Input.touchCount > 0 &&
            (Input.GetTouch(0).phase == TouchPhase.Moved || Input.GetTouch(0).phase == TouchPhase.Stationary));

    public static bool IsTouchEnd() =>
        Input.GetMouseButtonUp(0) || (Input.touchCount > 0 && Input.GetTouch(0).phase == TouchPhase.Ended);

    public static Vector3 GetTouchPosition()
    {
        if (Input.touchCount > 0)
        {
            Vector2 touchPos = Input.GetTouch(0).position;
            return new Vector3(touchPos.x, touchPos.y, 0f);
        }
        else
        {
            return Input.mousePosition;
        }
    }
}
