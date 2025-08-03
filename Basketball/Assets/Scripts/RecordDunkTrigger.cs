using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class RecordDunkTrigger : MonoBehaviour
{
    private class BallState
    {
        public bool dunkTriggerTop = false;
        public bool dunkTriggerBottom = false;
    }

    private Dictionary<GameObject, BallState> ballStates = new();
    private string ballTag = "ballTag";

    public void NotifyDunkTrigger(GameObject ball, string triggerName)
    {
        if (!ball.CompareTag(ballTag))
        {
            return;
        }

        if (!ballStates.ContainsKey(ball))
        {
            ballStates[ball] = new BallState();
        }

        BallState state = ballStates[ball];

        if (triggerName == "DunkTriggerTop")
        {
            state.dunkTriggerTop = true;
        }
        else if (triggerName == "DunkTriggerBottom")
        {
            state.dunkTriggerBottom = true;
        }

        if (state.dunkTriggerTop && state.dunkTriggerBottom)
        {
            GameManager.instance.UpdateScore();
            ballStates.Remove(ball);
        }
    }
}
