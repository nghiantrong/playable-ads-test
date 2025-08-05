using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class GameManager : MonoBehaviour
{
    public static GameManager Instance;
    public Text currentScoreText;
    private int currentScore = 0;
    public Text highScoreText;
    private int highScore = 0;
    public Text boardText;

    public ParticleSystem perfectParticle;
    public ParticleSystem fireParticle;

    private void Awake()
    {
        Instance = this;
        highScore = PlayerPrefs.GetInt("HighScore", 0);
        UpdateUI();
    }

    public void UpdateScore()
    {
        currentScore++;
        if (currentScore > highScore)
        {
            highScore = currentScore;
            PlayerPrefs.SetInt("HighScore", highScore);
            PlayerPrefs.Save();
            fireParticle.Play();
        }
        UpdateUI();
        perfectParticle.Play();
        StartCoroutine(AppearText("GREAT SHOT"));
    }

    private void UpdateUI()
    {
        currentScoreText.text = currentScore.ToString();
        highScoreText.text = highScore.ToString();
    }

    private IEnumerator AppearText(string text)
    {
        boardText.text = text;
        boardText.gameObject.SetActive(true);
        yield return new WaitForSeconds(1.5f);
        boardText.gameObject.SetActive(false);
    }
}
