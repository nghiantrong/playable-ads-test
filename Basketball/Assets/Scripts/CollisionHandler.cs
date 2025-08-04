using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CollisionHandler : MonoBehaviour
{
    public int collisionIndex = 0;
    private void OnCollisionEnter(Collision collision)
    {
        if (collision.gameObject.CompareTag("ballTag"))
        {
            AudioManager.Instance.PlayBallCollision(collisionIndex);
        }
    }
}
