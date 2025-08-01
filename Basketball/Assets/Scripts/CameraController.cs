using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CameraController : MonoBehaviour
{
    public GameObject camera1;
    public GameObject camera2;
    public Canvas canvas;

    void Update()
    {
        //Testing
        if (Input.GetKeyDown(KeyCode.C))
        {
            SwitchToCamera1();
        }
        else if (Input.GetKeyDown(KeyCode.X))
        {
            SwitchToCamera2();
        }
    }

    public void SwitchToCamera1()
    {
        Debug.Log("Switching to camera 1");
        camera1.SetActive(true);
        camera2.SetActive(false);
        canvas.enabled = true;
    }

    public void SwitchToCamera2()
    {
        Debug.Log("Switching to camera 2");
        camera1.SetActive(false);
        camera2.SetActive(true);
        canvas.enabled = false;

    }
}
