if ( TRACE ) { TRACE( JSON.parse( '["AudioManager#Awake","AudioManager#Start","AudioManager#PlayBasketPerfectSound","AudioManager#PlayButtonSound","AudioManager#PlayBallCollision","AudioManager#PlayThrowBallSound","AudioManager#PlayMusic","BallSelectionController#init","BallSelectionController#Start","BallSelectionController#Update","BallSelectionController#SnapToRing","BallSelectionController#GetNearestSnapAngle","BallSelectionController#SelectBall","BallSelectionController#Back","BallThrower#init","BallThrower#Start","BallThrower#Update","BallThrower#TryPickUpThisBall","BallThrower#HoldToPosition","BallThrower#ReleaseAndThrow","CameraController#Update","CameraController#SwitchToCamera1","CameraController#SwitchToCamera2","CollisionHandler#init","CollisionHandler#OnCollisionEnter","DunkTrigger#Start","DunkTrigger#OnTriggerExit","GameManager#init","GameManager#Awake","GameManager#UpdateScore","GameManager#UpdateUI","GameManager#AppearText","InputHelper#IsTouchBegin","InputHelper#IsTouching","InputHelper#IsTouchEnd","InputHelper#GetTouchPosition","RecordDunkTrigger#init","RecordDunkTrigger#NotifyDunkTrigger","RecordDunkTrigger.BallState#init"]' ) ); }
/**
 * @version 1.0.9349.39661
 * @copyright anton
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*AudioManager start.*/
    Bridge.define("AudioManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Instance: null
            }
        },
        fields: {
            soundAudioSource: null,
            collisionAudioSource: null,
            throwAudioSource: null,
            musicAudioSource: null,
            basketPerfectSound: null,
            buttonSound: null,
            ballCollisionSounds: null,
            throwBallSound: null,
            musicSound: null
        },
        methods: {
            /*AudioManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "AudioManager#Awake", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(AudioManager.Instance, null)) {
                    AudioManager.Instance = this;
                    UnityEngine.Object.DontDestroyOnLoad(this.gameObject);
                } else {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                }
            },
            /*AudioManager.Awake end.*/

            /*AudioManager.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "AudioManager#Start", this ); }

                this.PlayMusic();
            },
            /*AudioManager.Start end.*/

            /*AudioManager.PlayBasketPerfectSound start.*/
            PlayBasketPerfectSound: function () {
if ( TRACE ) { TRACE( "AudioManager#PlayBasketPerfectSound", this ); }

                this.soundAudioSource.clip = this.basketPerfectSound;
                this.soundAudioSource.Play();
            },
            /*AudioManager.PlayBasketPerfectSound end.*/

            /*AudioManager.PlayButtonSound start.*/
            PlayButtonSound: function () {
if ( TRACE ) { TRACE( "AudioManager#PlayButtonSound", this ); }

                this.soundAudioSource.clip = this.buttonSound;
                this.soundAudioSource.Play();
            },
            /*AudioManager.PlayButtonSound end.*/

            /*AudioManager.PlayBallCollision start.*/
            PlayBallCollision: function (collisionIndex) {
if ( TRACE ) { TRACE( "AudioManager#PlayBallCollision", this ); }

                this.collisionAudioSource.clip = this.ballCollisionSounds[collisionIndex];
                this.collisionAudioSource.Play();
            },
            /*AudioManager.PlayBallCollision end.*/

            /*AudioManager.PlayThrowBallSound start.*/
            PlayThrowBallSound: function () {
if ( TRACE ) { TRACE( "AudioManager#PlayThrowBallSound", this ); }

                this.throwAudioSource.clip = this.throwBallSound;
                this.throwAudioSource.Play();
            },
            /*AudioManager.PlayThrowBallSound end.*/

            /*AudioManager.PlayMusic start.*/
            PlayMusic: function () {
if ( TRACE ) { TRACE( "AudioManager#PlayMusic", this ); }

                this.musicAudioSource.clip = this.musicSound;
                this.musicAudioSource.Play();
            },
            /*AudioManager.PlayMusic end.*/


        }
    });
    /*AudioManager end.*/

    /*BallSelectionController start.*/
    Bridge.define("BallSelectionController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            isHolding: false,
            previousTouchPos: null,
            currentTouchPos: null,
            rotationSpeed: 0,
            ballSelectionRing: null,
            snapDuration: 0,
            snapToRingCoroutine: null,
            currentBallIndex: 0,
            selectionBalls: null,
            balls: null,
            cameraController: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "BallSelectionController#init", this ); }

                this.previousTouchPos = new UnityEngine.Vector3();
                this.currentTouchPos = new UnityEngine.Vector3();
                this.isHolding = false;
                this.rotationSpeed = 0.5;
                this.snapDuration = 0.2;
                this.currentBallIndex = 0;
            }
        },
        methods: {
            /*BallSelectionController.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "BallSelectionController#Start", this ); }

                this.cameraController = UnityEngine.Object.FindObjectOfType(CameraController);
            },
            /*BallSelectionController.Start end.*/

            /*BallSelectionController.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "BallSelectionController#Update", this ); }

                if (InputHelper.IsTouchBegin()) {
                    this.isHolding = true;
                    this.previousTouchPos = InputHelper.GetTouchPosition();
                    this.ballSelectionRing.SetActive(false);

                    if (this.snapToRingCoroutine != null) {
                        this.StopCoroutine$2(this.snapToRingCoroutine);
                        this.snapToRingCoroutine = null;
                    }
                }

                if (this.isHolding && InputHelper.IsTouching()) {
                    this.currentTouchPos = InputHelper.GetTouchPosition();
                    var deltaX = this.currentTouchPos.x - this.previousTouchPos.x;

                    this.transform.Rotate(0, -deltaX * this.rotationSpeed, 0, UnityEngine.Space.World);

                    this.previousTouchPos = this.currentTouchPos.$clone();
                }

                if (InputHelper.IsTouchEnd()) {
                    this.isHolding = false;
                    this.ballSelectionRing.SetActive(true);

                    this.snapToRingCoroutine = this.StartCoroutine$1(this.SnapToRing());
                }
            },
            /*BallSelectionController.Update end.*/

            /*BallSelectionController.SnapToRing start.*/
            SnapToRing: function () {
if ( TRACE ) { TRACE( "BallSelectionController#SnapToRing", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    startY,
                    targetY,
                    elapsedTime,
                    startRot,
                    endRot,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    startY = this.transform.rotation.getPositiveEulerAngles().y;
                                        targetY = this.GetNearestSnapAngle(startY);
                                        elapsedTime = 0.0;

                                        startRot = this.transform.rotation.$clone();
                                        endRot = new pc.Quat().setFromEulerAngles_Unity( 0, targetY, 0 );
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( elapsedTime < this.snapDuration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    elapsedTime += UnityEngine.Time.deltaTime;
                                        this.transform.rotation = new pc.Quat().slerpUnclamped( startRot, endRot, pc.math.clamp( elapsedTime / this.snapDuration, 0, 1 ) );
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    this.transform.rotation = endRot.$clone();
                                        this.snapToRingCoroutine = null;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*BallSelectionController.SnapToRing end.*/

            /*BallSelectionController.GetNearestSnapAngle start.*/
            GetNearestSnapAngle: function (currentY) {
if ( TRACE ) { TRACE( "BallSelectionController#GetNearestSnapAngle", this ); }

                var normalized = UnityEngine.Mathf.DeltaAngle(0, currentY);

                var snapAngles = System.Array.init([
                    0, 
                    -45, 
                    -90, 
                    -135, 
                    180, 
                    135, 
                    90, 
                    45
                ], System.Single);
                var closest = snapAngles[0];
                var minDiff = Math.abs(normalized - closest);

                for (var i = 0; i < snapAngles.length; i = (i + 1) | 0) {
                    var diff = Math.abs(normalized - snapAngles[i]);
                    if (diff <= minDiff) {
                        closest = snapAngles[i];
                        minDiff = diff;
                        this.currentBallIndex = i;
                    }
                }
                UnityEngine.Debug.Log$1(System.String.format("Selected ball index: {0}, angle: {1}", Bridge.box(this.currentBallIndex, System.Int32), Bridge.box(closest, System.Single, System.Single.format, System.Single.getHashCode)));

                return closest;
            },
            /*BallSelectionController.GetNearestSnapAngle end.*/

            /*BallSelectionController.SelectBall start.*/
            SelectBall: function () {
if ( TRACE ) { TRACE( "BallSelectionController#SelectBall", this ); }

                var $t;
                if (this.selectionBalls.length === 0 || this.currentBallIndex < 0 || this.currentBallIndex >= this.selectionBalls.length) {
                    UnityEngine.Debug.LogWarning$1("No balls available for selection.");
                    return;
                }

                var selectedBall = this.selectionBalls[this.currentBallIndex];
                $t = Bridge.getEnumerator(this.balls);
                try {
                    while ($t.moveNext()) {
                        var ball = $t.Current;
                        ball.GetComponentInChildren(UnityEngine.MeshRenderer).material = selectedBall.GetComponentInChildren(UnityEngine.MeshRenderer).material;
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                this.Back();
            },
            /*BallSelectionController.SelectBall end.*/

            /*BallSelectionController.Back start.*/
            Back: function () {
if ( TRACE ) { TRACE( "BallSelectionController#Back", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.cameraController, null)) {
                    this.cameraController.SwitchToCamera1();
                } else {
                    UnityEngine.Debug.LogWarning$1("CameraController not found in the scene.");
                }
            },
            /*BallSelectionController.Back end.*/


        }
    });
    /*BallSelectionController end.*/

    /*BallThrower start.*/
    Bridge.define("BallThrower", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                currentlyHeldBall: null
            }
        },
        fields: {
            rb: null,
            cam: null,
            isHolding: false,
            initialScreenTouchPos: null,
            currentScreenTouchPos: null,
            throwForceMultiplier: 0,
            maxForce: 0,
            forwardZ: 0,
            verticalBoost: 0,
            spinMultiplier: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "BallThrower#init", this ); }

                this.initialScreenTouchPos = new UnityEngine.Vector3();
                this.currentScreenTouchPos = new UnityEngine.Vector3();
                this.isHolding = false;
                this.throwForceMultiplier = 290.0;
                this.maxForce = 290.0;
                this.forwardZ = 120.0;
                this.verticalBoost = 1.0;
                this.spinMultiplier = 30.0;
            }
        },
        methods: {
            /*BallThrower.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "BallThrower#Start", this ); }

                this.rb = this.GetComponent(UnityEngine.Rigidbody);
                this.cam = UnityEngine.Camera.main;
            },
            /*BallThrower.Start end.*/

            /*BallThrower.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "BallThrower#Update", this ); }

                if (InputHelper.IsTouchBegin()) {
                    this.TryPickUpThisBall(InputHelper.GetTouchPosition());
                }

                if (this.isHolding && InputHelper.IsTouching()) {
                    this.currentScreenTouchPos = InputHelper.GetTouchPosition();
                    this.HoldToPosition(this.currentScreenTouchPos.$clone());
                }

                if (this.isHolding && InputHelper.IsTouchEnd()) {
                    this.ReleaseAndThrow(this.currentScreenTouchPos);
                }
            },
            /*BallThrower.Update end.*/

            /*BallThrower.TryPickUpThisBall start.*/
            TryPickUpThisBall: function (screenTouchPos) {
if ( TRACE ) { TRACE( "BallThrower#TryPickUpThisBall", this ); }

                var $t;
                if (UnityEngine.MonoBehaviour.op_Inequality(BallThrower.currentlyHeldBall, null)) {
                    return;
                }

                var ray = this.cam.ScreenPointToRay(screenTouchPos);
                var hits = UnityEngine.Physics.RaycastAll$1(ray, 100.0);

                $t = Bridge.getEnumerator(hits);
                try {
                    while ($t.moveNext()) {
                        var hit = $t.Current.$clone();
                        if (UnityEngine.Component.op_Equality(hit.collider, this.GetComponent(UnityEngine.Collider))) {
                            this.isHolding = true;
                            BallThrower.currentlyHeldBall = this;
                            this.rb.isKinematic = true;
                            this.rb.useGravity = false;
                            this.initialScreenTouchPos = screenTouchPos.$clone();
                            break;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*BallThrower.TryPickUpThisBall end.*/

            /*BallThrower.HoldToPosition start.*/
            HoldToPosition: function (screenTouchPos) {
if ( TRACE ) { TRACE( "BallThrower#HoldToPosition", this ); }

                var ballZ = this.cam.WorldToScreenPoint(this.transform.position).z;
                screenTouchPos.z = ballZ;
                var worldPos = this.cam.ScreenToWorldPoint(screenTouchPos);
                this.transform.position = worldPos.$clone();
            },
            /*BallThrower.HoldToPosition end.*/

            /*BallThrower.ReleaseAndThrow start.*/
            ReleaseAndThrow: function (releaseTouchPos) {
if ( TRACE ) { TRACE( "BallThrower#ReleaseAndThrow", this ); }

                var dragVector = releaseTouchPos.$clone().sub( this.initialScreenTouchPos );

                var dragFactor = dragVector.length() / UnityEngine.Screen.height;

                var throwDir = new pc.Vec3( 1.0, dragVector.y * this.verticalBoost, this.forwardZ );
                var force = this.cam.transform.TransformDirection$1(throwDir.clone().normalize().$clone()).clone().scale( dragFactor ).clone().scale( this.throwForceMultiplier );
                force = pc.Vec3.clampMagnitude( force, this.maxForce );

                this.rb.isKinematic = false;
                this.rb.useGravity = true;
                this.rb.AddForce$1(force, UnityEngine.ForceMode.Impulse);

                var spinDirection = new pc.Vec3( -dragVector.y, dragVector.x, 0.0 ).clone().normalize().$clone();
                this.rb.AddTorque$1(spinDirection.$clone().clone().scale( this.spinMultiplier ), UnityEngine.ForceMode.Impulse);

                AudioManager.Instance.PlayThrowBallSound();

                this.isHolding = false;
                BallThrower.currentlyHeldBall = null;
            },
            /*BallThrower.ReleaseAndThrow end.*/


        }
    });
    /*BallThrower end.*/

    /*CameraController start.*/
    Bridge.define("CameraController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            camera1: null,
            camera2: null,
            mainCanvas: null,
            selectionCanvas: null,
            ballSelection: null
        },
        methods: {
            /*CameraController.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "CameraController#Update", this ); }

                //Testing
                if (UnityEngine.Input.GetKeyDown(UnityEngine.KeyCode.C)) {
                    this.SwitchToCamera1();
                } else if (UnityEngine.Input.GetKeyDown(UnityEngine.KeyCode.X)) {
                    this.SwitchToCamera2();
                }
            },
            /*CameraController.Update end.*/

            /*CameraController.SwitchToCamera1 start.*/
            SwitchToCamera1: function () {
if ( TRACE ) { TRACE( "CameraController#SwitchToCamera1", this ); }

                UnityEngine.Debug.Log$1("Switching to camera 1");
                this.camera1.SetActive(true);
                this.camera2.SetActive(false);
                this.mainCanvas.SetActive(true);
                this.selectionCanvas.SetActive(false);
                this.ballSelection.SetActive(false);
            },
            /*CameraController.SwitchToCamera1 end.*/

            /*CameraController.SwitchToCamera2 start.*/
            SwitchToCamera2: function () {
if ( TRACE ) { TRACE( "CameraController#SwitchToCamera2", this ); }

                UnityEngine.Debug.Log$1("Switching to camera 2");
                this.camera1.SetActive(false);
                this.camera2.SetActive(true);
                this.mainCanvas.SetActive(false);
                this.selectionCanvas.SetActive(true);
                this.ballSelection.SetActive(true);
            },
            /*CameraController.SwitchToCamera2 end.*/


        }
    });
    /*CameraController end.*/

    /*CollisionHandler start.*/
    Bridge.define("CollisionHandler", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            collisionIndex: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "CollisionHandler#init", this ); }

                this.collisionIndex = 0;
            }
        },
        methods: {
            /*CollisionHandler.OnCollisionEnter start.*/
            OnCollisionEnter: function (collision) {
if ( TRACE ) { TRACE( "CollisionHandler#OnCollisionEnter", this ); }

                if (collision.gameObject.CompareTag("ballTag")) {
                    AudioManager.Instance.PlayBallCollision(this.collisionIndex);
                }
            },
            /*CollisionHandler.OnCollisionEnter end.*/


        }
    });
    /*CollisionHandler end.*/

    /*DunkTrigger start.*/
    Bridge.define("DunkTrigger", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            triggerName: null,
            recordDunkTrigger: null
        },
        methods: {
            /*DunkTrigger.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "DunkTrigger#Start", this ); }

                this.recordDunkTrigger = this.GetComponentInParent(RecordDunkTrigger);
            },
            /*DunkTrigger.Start end.*/

            /*DunkTrigger.OnTriggerExit start.*/
            OnTriggerExit: function (other) {
if ( TRACE ) { TRACE( "DunkTrigger#OnTriggerExit", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.recordDunkTrigger, null)) {
                    this.recordDunkTrigger.NotifyDunkTrigger(other.gameObject, this.triggerName);
                } else {
                    UnityEngine.Debug.LogWarning$1("RecordDunkTrigger component not found in parent.");
                }
            },
            /*DunkTrigger.OnTriggerExit end.*/


        }
    });
    /*DunkTrigger end.*/

    /*GameManager start.*/
    Bridge.define("GameManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Instance: null
            }
        },
        fields: {
            currentScoreText: null,
            currentScore: 0,
            highScoreText: null,
            highScore: 0,
            boardText: null,
            perfectParticle: null,
            fireParticle: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "GameManager#init", this ); }

                this.currentScore = 0;
                this.highScore = 0;
            }
        },
        methods: {
            /*GameManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "GameManager#Awake", this ); }

                GameManager.Instance = this;
                this.highScore = UnityEngine.PlayerPrefs.GetInt("HighScore", 0);
                this.UpdateUI();
            },
            /*GameManager.Awake end.*/

            /*GameManager.UpdateScore start.*/
            UpdateScore: function () {
if ( TRACE ) { TRACE( "GameManager#UpdateScore", this ); }

                this.currentScore = (this.currentScore + 1) | 0;
                if (this.currentScore > this.highScore) {
                    this.highScore = this.currentScore;
                    UnityEngine.PlayerPrefs.SetInt("HighScore", this.highScore);
                    UnityEngine.PlayerPrefs.Save();
                    this.fireParticle.Play();
                }
                this.UpdateUI();
                this.perfectParticle.Play();
                this.StartCoroutine$1(this.AppearText("GREAT SHOT"));
            },
            /*GameManager.UpdateScore end.*/

            /*GameManager.UpdateUI start.*/
            UpdateUI: function () {
if ( TRACE ) { TRACE( "GameManager#UpdateUI", this ); }

                this.currentScoreText.text = Bridge.toString(this.currentScore);
                this.highScoreText.text = Bridge.toString(this.highScore);
            },
            /*GameManager.UpdateUI end.*/

            /*GameManager.AppearText start.*/
            AppearText: function (text) {
if ( TRACE ) { TRACE( "GameManager#AppearText", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.boardText.text = text;
                                        this.boardText.gameObject.SetActive(true);
                                        $enumerator.current = new UnityEngine.WaitForSeconds(1.5);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.boardText.gameObject.SetActive(false);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*GameManager.AppearText end.*/


        }
    });
    /*GameManager end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    Bridge.define("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*InputHelper start.*/
    Bridge.define("InputHelper", {
        statics: {
            methods: {
                /*InputHelper.IsTouchBegin:static start.*/
                IsTouchBegin: function () {
if ( TRACE ) { TRACE( "InputHelper#IsTouchBegin", this ); }

                    return UnityEngine.Input.GetMouseButtonDown(0) || (UnityEngine.Input.touchCount > 0 && UnityEngine.Input.GetTouch(0).phase === UnityEngine.TouchPhase.Began);
                },
                /*InputHelper.IsTouchBegin:static end.*/

                /*InputHelper.IsTouching:static start.*/
                IsTouching: function () {
if ( TRACE ) { TRACE( "InputHelper#IsTouching", this ); }

                    return UnityEngine.Input.GetMouseButton(0) || (UnityEngine.Input.touchCount > 0 && (UnityEngine.Input.GetTouch(0).phase === UnityEngine.TouchPhase.Moved || UnityEngine.Input.GetTouch(0).phase === UnityEngine.TouchPhase.Stationary));
                },
                /*InputHelper.IsTouching:static end.*/

                /*InputHelper.IsTouchEnd:static start.*/
                IsTouchEnd: function () {
if ( TRACE ) { TRACE( "InputHelper#IsTouchEnd", this ); }

                    return UnityEngine.Input.GetMouseButtonUp(0) || (UnityEngine.Input.touchCount > 0 && UnityEngine.Input.GetTouch(0).phase === UnityEngine.TouchPhase.Ended);
                },
                /*InputHelper.IsTouchEnd:static end.*/

                /*InputHelper.GetTouchPosition:static start.*/
                GetTouchPosition: function () {
if ( TRACE ) { TRACE( "InputHelper#GetTouchPosition", this ); }

                    if (UnityEngine.Input.touchCount > 0) {
                        var touchPos = UnityEngine.Input.GetTouch(0).position.$clone();
                        return new pc.Vec3( touchPos.x, touchPos.y, 0.0 );
                    } else {
                        return UnityEngine.Input.mousePosition.$clone();
                    }
                },
                /*InputHelper.GetTouchPosition:static end.*/


            }
        }
    });
    /*InputHelper end.*/

    /*RecordDunkTrigger start.*/
    Bridge.define("RecordDunkTrigger", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            ballStates: null,
            ballTag: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "RecordDunkTrigger#init", this ); }

                this.ballStates = new (System.Collections.Generic.Dictionary$2(UnityEngine.GameObject,RecordDunkTrigger.BallState)).ctor();
                this.ballTag = "ballTag";
            }
        },
        methods: {
            /*RecordDunkTrigger.NotifyDunkTrigger start.*/
            NotifyDunkTrigger: function (ball, triggerName) {
if ( TRACE ) { TRACE( "RecordDunkTrigger#NotifyDunkTrigger", this ); }

                if (!ball.CompareTag(this.ballTag)) {
                    return;
                }

                if (!this.ballStates.containsKey(ball)) {
                    this.ballStates.setItem(ball, new RecordDunkTrigger.BallState());
                }

                var state = this.ballStates.getItem(ball);

                if (Bridge.referenceEquals(triggerName, "DunkTriggerTop")) {
                    state.dunkTriggerTop = true;
                } else if (Bridge.referenceEquals(triggerName, "DunkTriggerBottom")) {
                    state.dunkTriggerBottom = true;
                }

                if (state.dunkTriggerTop && state.dunkTriggerBottom) {
                    GameManager.Instance.UpdateScore();
                    AudioManager.Instance.PlayBasketPerfectSound();
                    this.ballStates.remove(ball);
                }
            },
            /*RecordDunkTrigger.NotifyDunkTrigger end.*/


        }
    });
    /*RecordDunkTrigger end.*/

    /*RecordDunkTrigger+BallState start.*/
    Bridge.define("RecordDunkTrigger.BallState", {
        $kind: 1002,
        fields: {
            dunkTriggerTop: false,
            dunkTriggerBottom: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "RecordDunkTrigger.BallState#init", this ); }

                this.dunkTriggerTop = false;
                this.dunkTriggerBottom = false;
            }
        }
    });
    /*RecordDunkTrigger+BallState end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["System","UnityEngine","System.Collections","UnityEngine.UI","System.Collections.Generic"];

    /*AudioManager start.*/
    $m("AudioManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"PlayBallCollision","t":8,"pi":[{"n":"collisionIndex","pt":$n[0].Int32,"ps":0}],"sn":"PlayBallCollision","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"PlayBasketPerfectSound","t":8,"sn":"PlayBasketPerfectSound","rt":$n[0].Void},{"a":2,"n":"PlayButtonSound","t":8,"sn":"PlayButtonSound","rt":$n[0].Void},{"a":2,"n":"PlayMusic","t":8,"sn":"PlayMusic","rt":$n[0].Void},{"a":2,"n":"PlayThrowBallSound","t":8,"sn":"PlayThrowBallSound","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"Instance","is":true,"t":4,"rt":AudioManager,"sn":"Instance"},{"a":2,"n":"ballCollisionSounds","t":4,"rt":System.Array.type(UnityEngine.AudioClip),"sn":"ballCollisionSounds"},{"at":[new UnityEngine.HeaderAttribute("Audio Clips")],"a":2,"n":"basketPerfectSound","t":4,"rt":$n[1].AudioClip,"sn":"basketPerfectSound"},{"a":2,"n":"buttonSound","t":4,"rt":$n[1].AudioClip,"sn":"buttonSound"},{"a":2,"n":"collisionAudioSource","t":4,"rt":$n[1].AudioSource,"sn":"collisionAudioSource"},{"a":2,"n":"musicAudioSource","t":4,"rt":$n[1].AudioSource,"sn":"musicAudioSource"},{"a":2,"n":"musicSound","t":4,"rt":$n[1].AudioClip,"sn":"musicSound"},{"at":[new UnityEngine.HeaderAttribute("Audio Sources")],"a":2,"n":"soundAudioSource","t":4,"rt":$n[1].AudioSource,"sn":"soundAudioSource"},{"a":2,"n":"throwAudioSource","t":4,"rt":$n[1].AudioSource,"sn":"throwAudioSource"},{"a":2,"n":"throwBallSound","t":4,"rt":$n[1].AudioClip,"sn":"throwBallSound"}]}; }, $n);
    /*AudioManager end.*/

    /*BallSelectionController start.*/
    $m("BallSelectionController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Back","t":8,"sn":"Back","rt":$n[0].Void},{"a":1,"n":"GetNearestSnapAngle","t":8,"pi":[{"n":"currentY","pt":$n[0].Single,"ps":0}],"sn":"GetNearestSnapAngle","rt":$n[0].Single,"p":[$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"SelectBall","t":8,"sn":"SelectBall","rt":$n[0].Void},{"a":1,"n":"SnapToRing","t":8,"sn":"SnapToRing","rt":$n[2].IEnumerator},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"ballSelectionRing","t":4,"rt":$n[1].GameObject,"sn":"ballSelectionRing"},{"a":2,"n":"balls","t":4,"rt":System.Array.type(UnityEngine.GameObject),"sn":"balls"},{"a":1,"n":"cameraController","t":4,"rt":CameraController,"sn":"cameraController"},{"a":1,"n":"currentBallIndex","t":4,"rt":$n[0].Int32,"sn":"currentBallIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"currentTouchPos","t":4,"rt":$n[1].Vector3,"sn":"currentTouchPos"},{"a":1,"n":"isHolding","t":4,"rt":$n[0].Boolean,"sn":"isHolding","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"previousTouchPos","t":4,"rt":$n[1].Vector3,"sn":"previousTouchPos"},{"a":2,"n":"rotationSpeed","t":4,"rt":$n[0].Single,"sn":"rotationSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"selectionBalls","t":4,"rt":System.Array.type(UnityEngine.GameObject),"sn":"selectionBalls"},{"a":2,"n":"snapDuration","t":4,"rt":$n[0].Single,"sn":"snapDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"snapToRingCoroutine","t":4,"rt":$n[1].Coroutine,"sn":"snapToRingCoroutine"}]}; }, $n);
    /*BallSelectionController end.*/

    /*BallThrower start.*/
    $m("BallThrower", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"HoldToPosition","t":8,"pi":[{"n":"screenTouchPos","pt":$n[1].Vector3,"ps":0}],"sn":"HoldToPosition","rt":$n[0].Void,"p":[$n[1].Vector3]},{"a":1,"n":"ReleaseAndThrow","t":8,"pi":[{"n":"releaseTouchPos","pt":$n[1].Vector3,"ps":0}],"sn":"ReleaseAndThrow","rt":$n[0].Void,"p":[$n[1].Vector3]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"TryPickUpThisBall","t":8,"pi":[{"n":"screenTouchPos","pt":$n[1].Vector3,"ps":0}],"sn":"TryPickUpThisBall","rt":$n[0].Void,"p":[$n[1].Vector3]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"cam","t":4,"rt":$n[1].Camera,"sn":"cam"},{"a":1,"n":"currentScreenTouchPos","t":4,"rt":$n[1].Vector3,"sn":"currentScreenTouchPos"},{"a":1,"n":"currentlyHeldBall","is":true,"t":4,"rt":BallThrower,"sn":"currentlyHeldBall"},{"a":2,"n":"forwardZ","t":4,"rt":$n[0].Single,"sn":"forwardZ","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"initialScreenTouchPos","t":4,"rt":$n[1].Vector3,"sn":"initialScreenTouchPos"},{"a":1,"n":"isHolding","t":4,"rt":$n[0].Boolean,"sn":"isHolding","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"maxForce","t":4,"rt":$n[0].Single,"sn":"maxForce","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"rb","t":4,"rt":$n[1].Rigidbody,"sn":"rb"},{"a":2,"n":"spinMultiplier","t":4,"rt":$n[0].Single,"sn":"spinMultiplier","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Throw Settings")],"a":2,"n":"throwForceMultiplier","t":4,"rt":$n[0].Single,"sn":"throwForceMultiplier","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"verticalBoost","t":4,"rt":$n[0].Single,"sn":"verticalBoost","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*BallThrower end.*/

    /*CameraController start.*/
    $m("CameraController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"SwitchToCamera1","t":8,"sn":"SwitchToCamera1","rt":$n[0].Void},{"a":2,"n":"SwitchToCamera2","t":8,"sn":"SwitchToCamera2","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"ballSelection","t":4,"rt":$n[1].GameObject,"sn":"ballSelection"},{"a":2,"n":"camera1","t":4,"rt":$n[1].GameObject,"sn":"camera1"},{"a":2,"n":"camera2","t":4,"rt":$n[1].GameObject,"sn":"camera2"},{"a":2,"n":"mainCanvas","t":4,"rt":$n[1].GameObject,"sn":"mainCanvas"},{"a":2,"n":"selectionCanvas","t":4,"rt":$n[1].GameObject,"sn":"selectionCanvas"}]}; }, $n);
    /*CameraController end.*/

    /*CollisionHandler start.*/
    $m("CollisionHandler", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnCollisionEnter","t":8,"pi":[{"n":"collision","pt":$n[1].Collision,"ps":0}],"sn":"OnCollisionEnter","rt":$n[0].Void,"p":[$n[1].Collision]},{"a":2,"n":"collisionIndex","t":4,"rt":$n[0].Int32,"sn":"collisionIndex","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*CollisionHandler end.*/

    /*DunkTrigger start.*/
    $m("DunkTrigger", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnTriggerExit","t":8,"pi":[{"n":"other","pt":$n[1].Collider,"ps":0}],"sn":"OnTriggerExit","rt":$n[0].Void,"p":[$n[1].Collider]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"recordDunkTrigger","t":4,"rt":RecordDunkTrigger,"sn":"recordDunkTrigger"},{"a":2,"n":"triggerName","t":4,"rt":$n[0].String,"sn":"triggerName"}]}; }, $n);
    /*DunkTrigger end.*/

    /*GameManager start.*/
    $m("GameManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AppearText","t":8,"pi":[{"n":"text","pt":$n[0].String,"ps":0}],"sn":"AppearText","rt":$n[2].IEnumerator,"p":[$n[0].String]},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"UpdateScore","t":8,"sn":"UpdateScore","rt":$n[0].Void},{"a":1,"n":"UpdateUI","t":8,"sn":"UpdateUI","rt":$n[0].Void},{"a":2,"n":"Instance","is":true,"t":4,"rt":GameManager,"sn":"Instance"},{"a":2,"n":"boardText","t":4,"rt":$n[3].Text,"sn":"boardText"},{"a":1,"n":"currentScore","t":4,"rt":$n[0].Int32,"sn":"currentScore","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"currentScoreText","t":4,"rt":$n[3].Text,"sn":"currentScoreText"},{"a":2,"n":"fireParticle","t":4,"rt":$n[1].ParticleSystem,"sn":"fireParticle"},{"a":1,"n":"highScore","t":4,"rt":$n[0].Int32,"sn":"highScore","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"highScoreText","t":4,"rt":$n[3].Text,"sn":"highScoreText"},{"a":2,"n":"perfectParticle","t":4,"rt":$n[1].ParticleSystem,"sn":"perfectParticle"}]}; }, $n);
    /*GameManager end.*/

    /*InputHelper start.*/
    $m("InputHelper", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"GetTouchPosition","is":true,"t":8,"sn":"GetTouchPosition","rt":$n[1].Vector3},{"a":2,"n":"IsTouchBegin","is":true,"t":8,"sn":"IsTouchBegin","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"IsTouchEnd","is":true,"t":8,"sn":"IsTouchEnd","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"IsTouching","is":true,"t":8,"sn":"IsTouching","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*InputHelper end.*/

    /*RecordDunkTrigger start.*/
    $m("RecordDunkTrigger", function () { return {"nested":[RecordDunkTrigger.BallState],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"NotifyDunkTrigger","t":8,"pi":[{"n":"ball","pt":$n[1].GameObject,"ps":0},{"n":"triggerName","pt":$n[0].String,"ps":1}],"sn":"NotifyDunkTrigger","rt":$n[0].Void,"p":[$n[1].GameObject,$n[0].String]},{"a":1,"n":"ballStates","t":4,"rt":$n[4].Dictionary$2(UnityEngine.GameObject,RecordDunkTrigger.BallState),"sn":"ballStates"},{"a":1,"n":"ballTag","t":4,"rt":$n[0].String,"sn":"ballTag"}]}; }, $n);
    /*RecordDunkTrigger end.*/

    /*RecordDunkTrigger+BallState start.*/
    $m("RecordDunkTrigger.BallState", function () { return {"td":RecordDunkTrigger,"att":1048579,"a":1,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"dunkTriggerBottom","t":4,"rt":$n[0].Boolean,"sn":"dunkTriggerBottom","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"dunkTriggerTop","t":4,"rt":$n[0].Boolean,"sn":"dunkTriggerTop","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*RecordDunkTrigger+BallState end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    }});
