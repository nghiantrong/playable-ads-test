using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class AudioManager : MonoBehaviour
{
    public static AudioManager Instance;

    [Header("Audio Sources")]
    public AudioSource soundAudioSource;
    public AudioSource collisionAudioSource;
    public AudioSource throwAudioSource;
    public AudioSource musicAudioSource;

    [Header("Audio Clips")]
    public AudioClip basketPerfectSound;
    public AudioClip buttonSound;
    public AudioClip[] ballCollisionSounds;
    public AudioClip throwBallSound;
    public AudioClip musicSound;

    private void Awake()
    {
        if (Instance == null)
        {
            Instance = this;
            DontDestroyOnLoad(gameObject);
        }
        else
        {
            Destroy(gameObject);
        }
    }

    private void Start()
    {
        PlayMusic();
    }

    public void PlayBasketPerfectSound()
    {
        soundAudioSource.clip = basketPerfectSound;
        soundAudioSource.Play();
    }

    public void PlayButtonSound()
    {
        soundAudioSource.clip = buttonSound;
        soundAudioSource.Play();
    }

    public void PlayBallCollision(int collisionIndex)
    {
        collisionAudioSource.clip = ballCollisionSounds[collisionIndex];
        collisionAudioSource.Play();
    }

    public void PlayThrowBallSound()
    {
        throwAudioSource.clip = throwBallSound;
        throwAudioSource.Play();
    }

    public void PlayMusic()
    {
        musicAudioSource.clip = musicSound;
        musicAudioSource.Play();
    }
}
