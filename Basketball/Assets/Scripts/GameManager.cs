using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class GameManager : MonoBehaviour
{
    public static GameManager instance;
    public Text currentScoreText;
    private int currentScore = 0;

    private void Awake()
    {
        instance = this;
    }

    public void UpdateScore()
    {
        currentScore++;
        currentScoreText.text = currentScore.ToString();
    }
}
