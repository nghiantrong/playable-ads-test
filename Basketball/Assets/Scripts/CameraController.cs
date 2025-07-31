using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CameraController : MonoBehaviour
{
    public GameObject camera1;
    public GameObject camera2;
    public GameObject blurredBG;

    void Update()
    {
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
        blurredBG.SetActive(false);
    }

    public void SwitchToCamera2()
    {
        Debug.Log("Switching to camera 2");
        camera1.SetActive(false);
        camera2.SetActive(true);
        blurredBG.SetActive(true);
    }
}
