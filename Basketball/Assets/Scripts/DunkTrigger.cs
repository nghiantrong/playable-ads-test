using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class DunkTrigger : MonoBehaviour
{
    public string triggerName;
    private RecordDunkTrigger recordDunkTrigger;

    private void Start()
    {
        recordDunkTrigger = GetComponentInParent<RecordDunkTrigger>();
    }

    private void OnTriggerExit(Collider other)
    {
        if (recordDunkTrigger != null)
        {
            recordDunkTrigger.NotifyDunkTrigger(other.gameObject, triggerName);
        }
        else
        {
            Debug.LogWarning("RecordDunkTrigger component not found in parent.");
        }
    }
}
