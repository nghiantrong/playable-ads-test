var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2570 = root || request.c( 'UnityEngine.JointSpring' )
  var i2571 = data
  i2570.spring = i2571[0]
  i2570.damper = i2571[1]
  i2570.targetPosition = i2571[2]
  return i2570
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2572 = root || request.c( 'UnityEngine.JointMotor' )
  var i2573 = data
  i2572.m_TargetVelocity = i2573[0]
  i2572.m_Force = i2573[1]
  i2572.m_FreeSpin = i2573[2]
  return i2572
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2574 = root || request.c( 'UnityEngine.JointLimits' )
  var i2575 = data
  i2574.m_Min = i2575[0]
  i2574.m_Max = i2575[1]
  i2574.m_Bounciness = i2575[2]
  i2574.m_BounceMinVelocity = i2575[3]
  i2574.m_ContactDistance = i2575[4]
  i2574.minBounce = i2575[5]
  i2574.maxBounce = i2575[6]
  return i2574
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2576 = root || request.c( 'UnityEngine.JointDrive' )
  var i2577 = data
  i2576.m_PositionSpring = i2577[0]
  i2576.m_PositionDamper = i2577[1]
  i2576.m_MaximumForce = i2577[2]
  i2576.m_UseAcceleration = i2577[3]
  return i2576
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2578 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2579 = data
  i2578.m_Spring = i2579[0]
  i2578.m_Damper = i2579[1]
  return i2578
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2580 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2581 = data
  i2580.m_Limit = i2581[0]
  i2580.m_Bounciness = i2581[1]
  i2580.m_ContactDistance = i2581[2]
  return i2580
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2582 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2583 = data
  i2582.m_ExtremumSlip = i2583[0]
  i2582.m_ExtremumValue = i2583[1]
  i2582.m_AsymptoteSlip = i2583[2]
  i2582.m_AsymptoteValue = i2583[3]
  i2582.m_Stiffness = i2583[4]
  return i2582
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2584 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2585 = data
  i2584.m_LowerAngle = i2585[0]
  i2584.m_UpperAngle = i2585[1]
  return i2584
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2586 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2587 = data
  i2586.m_MotorSpeed = i2587[0]
  i2586.m_MaximumMotorTorque = i2587[1]
  return i2586
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2588 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2589 = data
  i2588.m_DampingRatio = i2589[0]
  i2588.m_Frequency = i2589[1]
  i2588.m_Angle = i2589[2]
  return i2588
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2590 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2591 = data
  i2590.m_LowerTranslation = i2591[0]
  i2590.m_UpperTranslation = i2591[1]
  return i2590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2592 = root || new pc.UnityMaterial()
  var i2593 = data
  i2592.name = i2593[0]
  request.r(i2593[1], i2593[2], 0, i2592, 'shader')
  i2592.renderQueue = i2593[3]
  i2592.enableInstancing = !!i2593[4]
  var i2595 = i2593[5]
  var i2594 = []
  for(var i = 0; i < i2595.length; i += 1) {
    i2594.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2595[i + 0]) );
  }
  i2592.floatParameters = i2594
  var i2597 = i2593[6]
  var i2596 = []
  for(var i = 0; i < i2597.length; i += 1) {
    i2596.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2597[i + 0]) );
  }
  i2592.colorParameters = i2596
  var i2599 = i2593[7]
  var i2598 = []
  for(var i = 0; i < i2599.length; i += 1) {
    i2598.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2599[i + 0]) );
  }
  i2592.vectorParameters = i2598
  var i2601 = i2593[8]
  var i2600 = []
  for(var i = 0; i < i2601.length; i += 1) {
    i2600.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2601[i + 0]) );
  }
  i2592.textureParameters = i2600
  var i2603 = i2593[9]
  var i2602 = []
  for(var i = 0; i < i2603.length; i += 1) {
    i2602.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2603[i + 0]) );
  }
  i2592.materialFlags = i2602
  return i2592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2607 = data
  i2606.name = i2607[0]
  i2606.value = i2607[1]
  return i2606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2611 = data
  i2610.name = i2611[0]
  i2610.value = new pc.Color(i2611[1], i2611[2], i2611[3], i2611[4])
  return i2610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2615 = data
  i2614.name = i2615[0]
  i2614.value = new pc.Vec4( i2615[1], i2615[2], i2615[3], i2615[4] )
  return i2614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2619 = data
  i2618.name = i2619[0]
  request.r(i2619[1], i2619[2], 0, i2618, 'value')
  return i2618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2623 = data
  i2622.name = i2623[0]
  i2622.enabled = !!i2623[1]
  return i2622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2625 = data
  i2624.name = i2625[0]
  i2624.halfPrecision = !!i2625[1]
  i2624.useUInt32IndexFormat = !!i2625[2]
  i2624.vertexCount = i2625[3]
  i2624.aabb = i2625[4]
  var i2627 = i2625[5]
  var i2626 = []
  for(var i = 0; i < i2627.length; i += 1) {
    i2626.push( !!i2627[i + 0] );
  }
  i2624.streams = i2626
  i2624.vertices = i2625[6]
  var i2629 = i2625[7]
  var i2628 = []
  for(var i = 0; i < i2629.length; i += 1) {
    i2628.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2629[i + 0]) );
  }
  i2624.subMeshes = i2628
  var i2631 = i2625[8]
  var i2630 = []
  for(var i = 0; i < i2631.length; i += 16) {
    i2630.push( new pc.Mat4().setData(i2631[i + 0], i2631[i + 1], i2631[i + 2], i2631[i + 3],  i2631[i + 4], i2631[i + 5], i2631[i + 6], i2631[i + 7],  i2631[i + 8], i2631[i + 9], i2631[i + 10], i2631[i + 11],  i2631[i + 12], i2631[i + 13], i2631[i + 14], i2631[i + 15]) );
  }
  i2624.bindposes = i2630
  var i2633 = i2625[9]
  var i2632 = []
  for(var i = 0; i < i2633.length; i += 1) {
    i2632.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2633[i + 0]) );
  }
  i2624.blendShapes = i2632
  return i2624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2639 = data
  i2638.triangles = i2639[0]
  return i2638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2645 = data
  i2644.name = i2645[0]
  var i2647 = i2645[1]
  var i2646 = []
  for(var i = 0; i < i2647.length; i += 1) {
    i2646.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2647[i + 0]) );
  }
  i2644.frames = i2646
  return i2644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2649 = data
  i2648.name = i2649[0]
  i2648.width = i2649[1]
  i2648.height = i2649[2]
  i2648.mipmapCount = i2649[3]
  i2648.anisoLevel = i2649[4]
  i2648.filterMode = i2649[5]
  i2648.hdr = !!i2649[6]
  i2648.format = i2649[7]
  i2648.wrapMode = i2649[8]
  i2648.alphaIsTransparency = !!i2649[9]
  i2648.alphaSource = i2649[10]
  i2648.graphicsFormat = i2649[11]
  i2648.sRGBTexture = !!i2649[12]
  i2648.desiredColorSpace = i2649[13]
  i2648.wrapU = i2649[14]
  i2648.wrapV = i2649[15]
  return i2648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2651 = data
  i2650.position = new pc.Vec3( i2651[0], i2651[1], i2651[2] )
  i2650.scale = new pc.Vec3( i2651[3], i2651[4], i2651[5] )
  i2650.rotation = new pc.Quat(i2651[6], i2651[7], i2651[8], i2651[9])
  return i2650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2653 = data
  request.r(i2653[0], i2653[1], 0, i2652, 'sharedMesh')
  return i2652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2655 = data
  request.r(i2655[0], i2655[1], 0, i2654, 'additionalVertexStreams')
  i2654.enabled = !!i2655[2]
  request.r(i2655[3], i2655[4], 0, i2654, 'sharedMaterial')
  var i2657 = i2655[5]
  var i2656 = []
  for(var i = 0; i < i2657.length; i += 2) {
  request.r(i2657[i + 0], i2657[i + 1], 2, i2656, '')
  }
  i2654.sharedMaterials = i2656
  i2654.receiveShadows = !!i2655[6]
  i2654.shadowCastingMode = i2655[7]
  i2654.sortingLayerID = i2655[8]
  i2654.sortingOrder = i2655[9]
  i2654.lightmapIndex = i2655[10]
  i2654.lightmapSceneIndex = i2655[11]
  i2654.lightmapScaleOffset = new pc.Vec4( i2655[12], i2655[13], i2655[14], i2655[15] )
  i2654.lightProbeUsage = i2655[16]
  i2654.reflectionProbeUsage = i2655[17]
  return i2654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2661 = data
  i2660.name = i2661[0]
  i2660.tagId = i2661[1]
  i2660.enabled = !!i2661[2]
  i2660.isStatic = !!i2661[3]
  i2660.layer = i2661[4]
  return i2660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2663 = data
  i2662.name = i2663[0]
  i2662.atlasId = i2663[1]
  i2662.mipmapCount = i2663[2]
  i2662.hdr = !!i2663[3]
  i2662.size = i2663[4]
  i2662.anisoLevel = i2663[5]
  i2662.filterMode = i2663[6]
  var i2665 = i2663[7]
  var i2664 = []
  for(var i = 0; i < i2665.length; i += 4) {
    i2664.push( UnityEngine.Rect.MinMaxRect(i2665[i + 0], i2665[i + 1], i2665[i + 2], i2665[i + 3]) );
  }
  i2662.rects = i2664
  i2662.wrapU = i2663[8]
  i2662.wrapV = i2663[9]
  return i2662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2669 = data
  i2668.name = i2669[0]
  i2668.index = i2669[1]
  i2668.startup = !!i2669[2]
  return i2668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i2670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i2671 = data
  i2670.center = new pc.Vec3( i2671[0], i2671[1], i2671[2] )
  i2670.size = new pc.Vec3( i2671[3], i2671[4], i2671[5] )
  i2670.enabled = !!i2671[6]
  i2670.isTrigger = !!i2671[7]
  request.r(i2671[8], i2671[9], 0, i2670, 'material')
  return i2670
}

Deserializers["CollisionHandler"] = function (request, data, root) {
  var i2672 = root || request.c( 'CollisionHandler' )
  var i2673 = data
  i2672.collisionIndex = i2673[0]
  return i2672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i2674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i2675 = data
  i2674.enabled = !!i2675[0]
  i2674.type = i2675[1]
  i2674.color = new pc.Color(i2675[2], i2675[3], i2675[4], i2675[5])
  i2674.cullingMask = i2675[6]
  i2674.intensity = i2675[7]
  i2674.range = i2675[8]
  i2674.spotAngle = i2675[9]
  i2674.shadows = i2675[10]
  i2674.shadowNormalBias = i2675[11]
  i2674.shadowBias = i2675[12]
  i2674.shadowStrength = i2675[13]
  i2674.shadowResolution = i2675[14]
  i2674.lightmapBakeType = i2675[15]
  i2674.renderMode = i2675[16]
  request.r(i2675[17], i2675[18], 0, i2674, 'cookie')
  i2674.cookieSize = i2675[19]
  return i2674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2677 = data
  i2676.enabled = !!i2677[0]
  i2676.aspect = i2677[1]
  i2676.orthographic = !!i2677[2]
  i2676.orthographicSize = i2677[3]
  i2676.backgroundColor = new pc.Color(i2677[4], i2677[5], i2677[6], i2677[7])
  i2676.nearClipPlane = i2677[8]
  i2676.farClipPlane = i2677[9]
  i2676.fieldOfView = i2677[10]
  i2676.depth = i2677[11]
  i2676.clearFlags = i2677[12]
  i2676.cullingMask = i2677[13]
  i2676.rect = i2677[14]
  request.r(i2677[15], i2677[16], 0, i2676, 'targetTexture')
  i2676.usePhysicalProperties = !!i2677[17]
  i2676.focalLength = i2677[18]
  i2676.sensorSize = new pc.Vec2( i2677[19], i2677[20] )
  i2676.lensShift = new pc.Vec2( i2677[21], i2677[22] )
  i2676.gateFit = i2677[23]
  i2676.commandBufferCount = i2677[24]
  i2676.cameraType = i2677[25]
  return i2676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i2678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i2679 = data
  i2678.enabled = !!i2679[0]
  i2678.isTrigger = !!i2679[1]
  request.r(i2679[2], i2679[3], 0, i2678, 'material')
  i2678.center = new pc.Vec3( i2679[4], i2679[5], i2679[6] )
  i2678.radius = i2679[7]
  return i2678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i2680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i2681 = data
  i2680.mass = i2681[0]
  i2680.drag = i2681[1]
  i2680.angularDrag = i2681[2]
  i2680.useGravity = !!i2681[3]
  i2680.isKinematic = !!i2681[4]
  i2680.constraints = i2681[5]
  i2680.maxAngularVelocity = i2681[6]
  i2680.collisionDetectionMode = i2681[7]
  i2680.interpolation = i2681[8]
  return i2680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i2682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i2683 = data
  i2682.enabled = !!i2683[0]
  request.r(i2683[1], i2683[2], 0, i2682, 'sharedMaterial')
  var i2685 = i2683[3]
  var i2684 = []
  for(var i = 0; i < i2685.length; i += 2) {
  request.r(i2685[i + 0], i2685[i + 1], 2, i2684, '')
  }
  i2682.sharedMaterials = i2684
  i2682.receiveShadows = !!i2683[4]
  i2682.shadowCastingMode = i2683[5]
  i2682.sortingLayerID = i2683[6]
  i2682.sortingOrder = i2683[7]
  i2682.lightmapIndex = i2683[8]
  i2682.lightmapSceneIndex = i2683[9]
  i2682.lightmapScaleOffset = new pc.Vec4( i2683[10], i2683[11], i2683[12], i2683[13] )
  i2682.lightProbeUsage = i2683[14]
  i2682.reflectionProbeUsage = i2683[15]
  var i2687 = i2683[16]
  var i2686 = []
  for(var i = 0; i < i2687.length; i += 3) {
    i2686.push( new pc.Vec3( i2687[i + 0], i2687[i + 1], i2687[i + 2] ) );
  }
  i2682.positions = i2686
  i2682.positionCount = i2683[17]
  i2682.time = i2683[18]
  i2682.startWidth = i2683[19]
  i2682.endWidth = i2683[20]
  i2682.widthMultiplier = i2683[21]
  i2682.autodestruct = !!i2683[22]
  i2682.emitting = !!i2683[23]
  i2682.numCornerVertices = i2683[24]
  i2682.numCapVertices = i2683[25]
  i2682.minVertexDistance = i2683[26]
  i2682.colorGradient = i2683[27] ? new pc.ColorGradient(i2683[27][0], i2683[27][1], i2683[27][2]) : null
  i2682.startColor = new pc.Color(i2683[28], i2683[29], i2683[30], i2683[31])
  i2682.endColor = new pc.Color(i2683[32], i2683[33], i2683[34], i2683[35])
  i2682.generateLightingData = !!i2683[36]
  i2682.textureMode = i2683[37]
  i2682.alignment = i2683[38]
  i2682.widthCurve = new pc.AnimationCurve( { keys_flow: i2683[39] } )
  return i2682
}

Deserializers["BallThrower"] = function (request, data, root) {
  var i2690 = root || request.c( 'BallThrower' )
  var i2691 = data
  i2690.throwForceMultiplier = i2691[0]
  i2690.maxForce = i2691[1]
  i2690.forwardZ = i2691[2]
  i2690.verticalBoost = i2691[3]
  i2690.spinMultiplier = i2691[4]
  return i2690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2693 = data
  i2692.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2693[0], i2692.main)
  i2692.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2693[1], i2692.colorBySpeed)
  i2692.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2693[2], i2692.colorOverLifetime)
  i2692.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2693[3], i2692.emission)
  i2692.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2693[4], i2692.rotationBySpeed)
  i2692.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2693[5], i2692.rotationOverLifetime)
  i2692.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2693[6], i2692.shape)
  i2692.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2693[7], i2692.sizeBySpeed)
  i2692.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2693[8], i2692.sizeOverLifetime)
  i2692.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2693[9], i2692.textureSheetAnimation)
  i2692.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2693[10], i2692.velocityOverLifetime)
  i2692.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2693[11], i2692.noise)
  i2692.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2693[12], i2692.inheritVelocity)
  i2692.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2693[13], i2692.forceOverLifetime)
  i2692.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2693[14], i2692.limitVelocityOverLifetime)
  i2692.useAutoRandomSeed = !!i2693[15]
  i2692.randomSeed = i2693[16]
  return i2692
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2694 = root || new pc.ParticleSystemMain()
  var i2695 = data
  i2694.duration = i2695[0]
  i2694.loop = !!i2695[1]
  i2694.prewarm = !!i2695[2]
  i2694.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2695[3], i2694.startDelay)
  i2694.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2695[4], i2694.startLifetime)
  i2694.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2695[5], i2694.startSpeed)
  i2694.startSize3D = !!i2695[6]
  i2694.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2695[7], i2694.startSizeX)
  i2694.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2695[8], i2694.startSizeY)
  i2694.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2695[9], i2694.startSizeZ)
  i2694.startRotation3D = !!i2695[10]
  i2694.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2695[11], i2694.startRotationX)
  i2694.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2695[12], i2694.startRotationY)
  i2694.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2695[13], i2694.startRotationZ)
  i2694.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2695[14], i2694.startColor)
  i2694.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2695[15], i2694.gravityModifier)
  i2694.simulationSpace = i2695[16]
  request.r(i2695[17], i2695[18], 0, i2694, 'customSimulationSpace')
  i2694.simulationSpeed = i2695[19]
  i2694.useUnscaledTime = !!i2695[20]
  i2694.scalingMode = i2695[21]
  i2694.playOnAwake = !!i2695[22]
  i2694.maxParticles = i2695[23]
  i2694.emitterVelocityMode = i2695[24]
  i2694.stopAction = i2695[25]
  return i2694
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2696 = root || new pc.MinMaxCurve()
  var i2697 = data
  i2696.mode = i2697[0]
  i2696.curveMin = new pc.AnimationCurve( { keys_flow: i2697[1] } )
  i2696.curveMax = new pc.AnimationCurve( { keys_flow: i2697[2] } )
  i2696.curveMultiplier = i2697[3]
  i2696.constantMin = i2697[4]
  i2696.constantMax = i2697[5]
  return i2696
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2698 = root || new pc.MinMaxGradient()
  var i2699 = data
  i2698.mode = i2699[0]
  i2698.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2699[1], i2698.gradientMin)
  i2698.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2699[2], i2698.gradientMax)
  i2698.colorMin = new pc.Color(i2699[3], i2699[4], i2699[5], i2699[6])
  i2698.colorMax = new pc.Color(i2699[7], i2699[8], i2699[9], i2699[10])
  return i2698
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2701 = data
  i2700.mode = i2701[0]
  var i2703 = i2701[1]
  var i2702 = []
  for(var i = 0; i < i2703.length; i += 1) {
    i2702.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2703[i + 0]) );
  }
  i2700.colorKeys = i2702
  var i2705 = i2701[2]
  var i2704 = []
  for(var i = 0; i < i2705.length; i += 1) {
    i2704.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2705[i + 0]) );
  }
  i2700.alphaKeys = i2704
  return i2700
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2706 = root || new pc.ParticleSystemColorBySpeed()
  var i2707 = data
  i2706.enabled = !!i2707[0]
  i2706.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2707[1], i2706.color)
  i2706.range = new pc.Vec2( i2707[2], i2707[3] )
  return i2706
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2711 = data
  i2710.color = new pc.Color(i2711[0], i2711[1], i2711[2], i2711[3])
  i2710.time = i2711[4]
  return i2710
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2715 = data
  i2714.alpha = i2715[0]
  i2714.time = i2715[1]
  return i2714
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2716 = root || new pc.ParticleSystemColorOverLifetime()
  var i2717 = data
  i2716.enabled = !!i2717[0]
  i2716.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2717[1], i2716.color)
  return i2716
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2718 = root || new pc.ParticleSystemEmitter()
  var i2719 = data
  i2718.enabled = !!i2719[0]
  i2718.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2719[1], i2718.rateOverTime)
  i2718.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2719[2], i2718.rateOverDistance)
  var i2721 = i2719[3]
  var i2720 = []
  for(var i = 0; i < i2721.length; i += 1) {
    i2720.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2721[i + 0]) );
  }
  i2718.bursts = i2720
  return i2718
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2724 = root || new pc.ParticleSystemBurst()
  var i2725 = data
  i2724.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2725[0], i2724.count)
  i2724.cycleCount = i2725[1]
  i2724.minCount = i2725[2]
  i2724.maxCount = i2725[3]
  i2724.repeatInterval = i2725[4]
  i2724.time = i2725[5]
  return i2724
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2726 = root || new pc.ParticleSystemRotationBySpeed()
  var i2727 = data
  i2726.enabled = !!i2727[0]
  i2726.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2727[1], i2726.x)
  i2726.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2727[2], i2726.y)
  i2726.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2727[3], i2726.z)
  i2726.separateAxes = !!i2727[4]
  i2726.range = new pc.Vec2( i2727[5], i2727[6] )
  return i2726
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2728 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2729 = data
  i2728.enabled = !!i2729[0]
  i2728.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2729[1], i2728.x)
  i2728.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2729[2], i2728.y)
  i2728.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2729[3], i2728.z)
  i2728.separateAxes = !!i2729[4]
  return i2728
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2730 = root || new pc.ParticleSystemShape()
  var i2731 = data
  i2730.enabled = !!i2731[0]
  i2730.shapeType = i2731[1]
  i2730.randomDirectionAmount = i2731[2]
  i2730.sphericalDirectionAmount = i2731[3]
  i2730.randomPositionAmount = i2731[4]
  i2730.alignToDirection = !!i2731[5]
  i2730.radius = i2731[6]
  i2730.radiusMode = i2731[7]
  i2730.radiusSpread = i2731[8]
  i2730.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2731[9], i2730.radiusSpeed)
  i2730.radiusThickness = i2731[10]
  i2730.angle = i2731[11]
  i2730.length = i2731[12]
  i2730.boxThickness = new pc.Vec3( i2731[13], i2731[14], i2731[15] )
  i2730.meshShapeType = i2731[16]
  request.r(i2731[17], i2731[18], 0, i2730, 'mesh')
  request.r(i2731[19], i2731[20], 0, i2730, 'meshRenderer')
  request.r(i2731[21], i2731[22], 0, i2730, 'skinnedMeshRenderer')
  i2730.useMeshMaterialIndex = !!i2731[23]
  i2730.meshMaterialIndex = i2731[24]
  i2730.useMeshColors = !!i2731[25]
  i2730.normalOffset = i2731[26]
  i2730.arc = i2731[27]
  i2730.arcMode = i2731[28]
  i2730.arcSpread = i2731[29]
  i2730.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2731[30], i2730.arcSpeed)
  i2730.donutRadius = i2731[31]
  i2730.position = new pc.Vec3( i2731[32], i2731[33], i2731[34] )
  i2730.rotation = new pc.Vec3( i2731[35], i2731[36], i2731[37] )
  i2730.scale = new pc.Vec3( i2731[38], i2731[39], i2731[40] )
  return i2730
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2732 = root || new pc.ParticleSystemSizeBySpeed()
  var i2733 = data
  i2732.enabled = !!i2733[0]
  i2732.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2733[1], i2732.x)
  i2732.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2733[2], i2732.y)
  i2732.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2733[3], i2732.z)
  i2732.separateAxes = !!i2733[4]
  i2732.range = new pc.Vec2( i2733[5], i2733[6] )
  return i2732
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2734 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2735 = data
  i2734.enabled = !!i2735[0]
  i2734.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2735[1], i2734.x)
  i2734.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2735[2], i2734.y)
  i2734.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2735[3], i2734.z)
  i2734.separateAxes = !!i2735[4]
  return i2734
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2736 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2737 = data
  i2736.enabled = !!i2737[0]
  i2736.mode = i2737[1]
  i2736.animation = i2737[2]
  i2736.numTilesX = i2737[3]
  i2736.numTilesY = i2737[4]
  i2736.useRandomRow = !!i2737[5]
  i2736.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2737[6], i2736.frameOverTime)
  i2736.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2737[7], i2736.startFrame)
  i2736.cycleCount = i2737[8]
  i2736.rowIndex = i2737[9]
  i2736.flipU = i2737[10]
  i2736.flipV = i2737[11]
  i2736.spriteCount = i2737[12]
  var i2739 = i2737[13]
  var i2738 = []
  for(var i = 0; i < i2739.length; i += 2) {
  request.r(i2739[i + 0], i2739[i + 1], 2, i2738, '')
  }
  i2736.sprites = i2738
  return i2736
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2742 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2743 = data
  i2742.enabled = !!i2743[0]
  i2742.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2743[1], i2742.x)
  i2742.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2743[2], i2742.y)
  i2742.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2743[3], i2742.z)
  i2742.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2743[4], i2742.radial)
  i2742.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2743[5], i2742.speedModifier)
  i2742.space = i2743[6]
  i2742.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2743[7], i2742.orbitalX)
  i2742.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2743[8], i2742.orbitalY)
  i2742.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2743[9], i2742.orbitalZ)
  i2742.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2743[10], i2742.orbitalOffsetX)
  i2742.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2743[11], i2742.orbitalOffsetY)
  i2742.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2743[12], i2742.orbitalOffsetZ)
  return i2742
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2744 = root || new pc.ParticleSystemNoise()
  var i2745 = data
  i2744.enabled = !!i2745[0]
  i2744.separateAxes = !!i2745[1]
  i2744.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2745[2], i2744.strengthX)
  i2744.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2745[3], i2744.strengthY)
  i2744.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2745[4], i2744.strengthZ)
  i2744.frequency = i2745[5]
  i2744.damping = !!i2745[6]
  i2744.octaveCount = i2745[7]
  i2744.octaveMultiplier = i2745[8]
  i2744.octaveScale = i2745[9]
  i2744.quality = i2745[10]
  i2744.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2745[11], i2744.scrollSpeed)
  i2744.scrollSpeedMultiplier = i2745[12]
  i2744.remapEnabled = !!i2745[13]
  i2744.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2745[14], i2744.remapX)
  i2744.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2745[15], i2744.remapY)
  i2744.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2745[16], i2744.remapZ)
  i2744.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2745[17], i2744.positionAmount)
  i2744.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2745[18], i2744.rotationAmount)
  i2744.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2745[19], i2744.sizeAmount)
  return i2744
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2746 = root || new pc.ParticleSystemInheritVelocity()
  var i2747 = data
  i2746.enabled = !!i2747[0]
  i2746.mode = i2747[1]
  i2746.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2747[2], i2746.curve)
  return i2746
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2748 = root || new pc.ParticleSystemForceOverLifetime()
  var i2749 = data
  i2748.enabled = !!i2749[0]
  i2748.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2749[1], i2748.x)
  i2748.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2749[2], i2748.y)
  i2748.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2749[3], i2748.z)
  i2748.space = i2749[4]
  i2748.randomized = !!i2749[5]
  return i2748
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2750 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2751 = data
  i2750.enabled = !!i2751[0]
  i2750.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2751[1], i2750.limit)
  i2750.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2751[2], i2750.limitX)
  i2750.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2751[3], i2750.limitY)
  i2750.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2751[4], i2750.limitZ)
  i2750.dampen = i2751[5]
  i2750.separateAxes = !!i2751[6]
  i2750.space = i2751[7]
  i2750.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2751[8], i2750.drag)
  i2750.multiplyDragByParticleSize = !!i2751[9]
  i2750.multiplyDragByParticleVelocity = !!i2751[10]
  return i2750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2753 = data
  i2752.enabled = !!i2753[0]
  request.r(i2753[1], i2753[2], 0, i2752, 'sharedMaterial')
  var i2755 = i2753[3]
  var i2754 = []
  for(var i = 0; i < i2755.length; i += 2) {
  request.r(i2755[i + 0], i2755[i + 1], 2, i2754, '')
  }
  i2752.sharedMaterials = i2754
  i2752.receiveShadows = !!i2753[4]
  i2752.shadowCastingMode = i2753[5]
  i2752.sortingLayerID = i2753[6]
  i2752.sortingOrder = i2753[7]
  i2752.lightmapIndex = i2753[8]
  i2752.lightmapSceneIndex = i2753[9]
  i2752.lightmapScaleOffset = new pc.Vec4( i2753[10], i2753[11], i2753[12], i2753[13] )
  i2752.lightProbeUsage = i2753[14]
  i2752.reflectionProbeUsage = i2753[15]
  request.r(i2753[16], i2753[17], 0, i2752, 'mesh')
  i2752.meshCount = i2753[18]
  i2752.activeVertexStreamsCount = i2753[19]
  i2752.alignment = i2753[20]
  i2752.renderMode = i2753[21]
  i2752.sortMode = i2753[22]
  i2752.lengthScale = i2753[23]
  i2752.velocityScale = i2753[24]
  i2752.cameraVelocityScale = i2753[25]
  i2752.normalDirection = i2753[26]
  i2752.sortingFudge = i2753[27]
  i2752.minParticleSize = i2753[28]
  i2752.maxParticleSize = i2753[29]
  i2752.pivot = new pc.Vec3( i2753[30], i2753[31], i2753[32] )
  request.r(i2753[33], i2753[34], 0, i2752, 'trailMaterial')
  return i2752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint"] = function (request, data, root) {
  var i2756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint' )
  var i2757 = data
  i2756.useMotor = !!i2757[0]
  i2756.useLimits = !!i2757[1]
  i2756.useSpring = !!i2757[2]
  i2756.limits = request.d('UnityEngine.JointLimits', i2757[3], i2756.limits)
  i2756.motor = request.d('UnityEngine.JointMotor', i2757[4], i2756.motor)
  i2756.spring = request.d('UnityEngine.JointSpring', i2757[5], i2756.spring)
  request.r(i2757[6], i2757[7], 0, i2756, 'connectedBody')
  i2756.axis = new pc.Vec3( i2757[8], i2757[9], i2757[10] )
  i2756.anchor = new pc.Vec3( i2757[11], i2757[12], i2757[13] )
  i2756.connectedAnchor = new pc.Vec3( i2757[14], i2757[15], i2757[16] )
  i2756.autoConfigureConnectedAnchor = !!i2757[17]
  i2756.massScale = i2757[18]
  i2756.connectedMassScale = i2757[19]
  i2756.enableCollision = !!i2757[20]
  i2756.breakForce = i2757[21]
  i2756.breakTorque = i2757[22]
  return i2756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i2758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i2759 = data
  i2758.center = new pc.Vec3( i2759[0], i2759[1], i2759[2] )
  i2758.radius = i2759[3]
  i2758.height = i2759[4]
  i2758.direction = i2759[5]
  i2758.enabled = !!i2759[6]
  i2758.isTrigger = !!i2759[7]
  request.r(i2759[8], i2759[9], 0, i2758, 'material')
  return i2758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i2760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i2761 = data
  i2760.enabled = !!i2761[0]
  request.r(i2761[1], i2761[2], 0, i2760, 'sharedMaterial')
  var i2763 = i2761[3]
  var i2762 = []
  for(var i = 0; i < i2763.length; i += 2) {
  request.r(i2763[i + 0], i2763[i + 1], 2, i2762, '')
  }
  i2760.sharedMaterials = i2762
  i2760.receiveShadows = !!i2761[4]
  i2760.shadowCastingMode = i2761[5]
  i2760.sortingLayerID = i2761[6]
  i2760.sortingOrder = i2761[7]
  i2760.lightmapIndex = i2761[8]
  i2760.lightmapSceneIndex = i2761[9]
  i2760.lightmapScaleOffset = new pc.Vec4( i2761[10], i2761[11], i2761[12], i2761[13] )
  i2760.lightProbeUsage = i2761[14]
  i2760.reflectionProbeUsage = i2761[15]
  request.r(i2761[16], i2761[17], 0, i2760, 'sharedMesh')
  var i2765 = i2761[18]
  var i2764 = []
  for(var i = 0; i < i2765.length; i += 2) {
  request.r(i2765[i + 0], i2765[i + 1], 2, i2764, '')
  }
  i2760.bones = i2764
  i2760.updateWhenOffscreen = !!i2761[19]
  i2760.localBounds = i2761[20]
  request.r(i2761[21], i2761[22], 0, i2760, 'rootBone')
  var i2767 = i2761[23]
  var i2766 = []
  for(var i = 0; i < i2767.length; i += 1) {
    i2766.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i2767[i + 0]) );
  }
  i2760.blendShapesWeights = i2766
  return i2760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i2772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i2773 = data
  i2772.weight = i2773[0]
  return i2772
}

Deserializers["RecordDunkTrigger"] = function (request, data, root) {
  var i2774 = root || request.c( 'RecordDunkTrigger' )
  var i2775 = data
  return i2774
}

Deserializers["DunkTrigger"] = function (request, data, root) {
  var i2776 = root || request.c( 'DunkTrigger' )
  var i2777 = data
  i2776.triggerName = i2777[0]
  return i2776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2779 = data
  i2778.pivot = new pc.Vec2( i2779[0], i2779[1] )
  i2778.anchorMin = new pc.Vec2( i2779[2], i2779[3] )
  i2778.anchorMax = new pc.Vec2( i2779[4], i2779[5] )
  i2778.sizeDelta = new pc.Vec2( i2779[6], i2779[7] )
  i2778.anchoredPosition3D = new pc.Vec3( i2779[8], i2779[9], i2779[10] )
  i2778.rotation = new pc.Quat(i2779[11], i2779[12], i2779[13], i2779[14])
  i2778.scale = new pc.Vec3( i2779[15], i2779[16], i2779[17] )
  return i2778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2781 = data
  i2780.cullTransparentMesh = !!i2781[0]
  return i2780
}

Deserializers["BallSelectionController"] = function (request, data, root) {
  var i2782 = root || request.c( 'BallSelectionController' )
  var i2783 = data
  i2782.rotationSpeed = i2783[0]
  request.r(i2783[1], i2783[2], 0, i2782, 'ballSelectionRing')
  i2782.snapDuration = i2783[3]
  var i2785 = i2783[4]
  var i2784 = []
  for(var i = 0; i < i2785.length; i += 2) {
  request.r(i2785[i + 0], i2785[i + 1], 2, i2784, '')
  }
  i2782.selectionBalls = i2784
  var i2787 = i2783[5]
  var i2786 = []
  for(var i = 0; i < i2787.length; i += 2) {
  request.r(i2787[i + 0], i2787[i + 1], 2, i2786, '')
  }
  i2782.balls = i2786
  return i2782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2791 = data
  i2790.enabled = !!i2791[0]
  request.r(i2791[1], i2791[2], 0, i2790, 'sharedMaterial')
  var i2793 = i2791[3]
  var i2792 = []
  for(var i = 0; i < i2793.length; i += 2) {
  request.r(i2793[i + 0], i2793[i + 1], 2, i2792, '')
  }
  i2790.sharedMaterials = i2792
  i2790.receiveShadows = !!i2791[4]
  i2790.shadowCastingMode = i2791[5]
  i2790.sortingLayerID = i2791[6]
  i2790.sortingOrder = i2791[7]
  i2790.lightmapIndex = i2791[8]
  i2790.lightmapSceneIndex = i2791[9]
  i2790.lightmapScaleOffset = new pc.Vec4( i2791[10], i2791[11], i2791[12], i2791[13] )
  i2790.lightProbeUsage = i2791[14]
  i2790.reflectionProbeUsage = i2791[15]
  i2790.color = new pc.Color(i2791[16], i2791[17], i2791[18], i2791[19])
  request.r(i2791[20], i2791[21], 0, i2790, 'sprite')
  i2790.flipX = !!i2791[22]
  i2790.flipY = !!i2791[23]
  i2790.drawMode = i2791[24]
  i2790.size = new pc.Vec2( i2791[25], i2791[26] )
  i2790.tileMode = i2791[27]
  i2790.adaptiveModeThreshold = i2791[28]
  i2790.maskInteraction = i2791[29]
  i2790.spriteSortPoint = i2791[30]
  return i2790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2795 = data
  request.r(i2795[0], i2795[1], 0, i2794, 'animatorController')
  request.r(i2795[2], i2795[3], 0, i2794, 'avatar')
  i2794.updateMode = i2795[4]
  i2794.hasTransformHierarchy = !!i2795[5]
  i2794.applyRootMotion = !!i2795[6]
  var i2797 = i2795[7]
  var i2796 = []
  for(var i = 0; i < i2797.length; i += 2) {
  request.r(i2797[i + 0], i2797[i + 1], 2, i2796, '')
  }
  i2794.humanBones = i2796
  i2794.enabled = !!i2795[8]
  return i2794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2799 = data
  i2798.enabled = !!i2799[0]
  i2798.planeDistance = i2799[1]
  i2798.referencePixelsPerUnit = i2799[2]
  i2798.isFallbackOverlay = !!i2799[3]
  i2798.renderMode = i2799[4]
  i2798.renderOrder = i2799[5]
  i2798.sortingLayerName = i2799[6]
  i2798.sortingOrder = i2799[7]
  i2798.scaleFactor = i2799[8]
  request.r(i2799[9], i2799[10], 0, i2798, 'worldCamera')
  i2798.overrideSorting = !!i2799[11]
  i2798.pixelPerfect = !!i2799[12]
  i2798.targetDisplay = i2799[13]
  i2798.overridePixelPerfect = !!i2799[14]
  return i2798
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2800 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2801 = data
  i2800.m_UiScaleMode = i2801[0]
  i2800.m_ReferencePixelsPerUnit = i2801[1]
  i2800.m_ScaleFactor = i2801[2]
  i2800.m_ReferenceResolution = new pc.Vec2( i2801[3], i2801[4] )
  i2800.m_ScreenMatchMode = i2801[5]
  i2800.m_MatchWidthOrHeight = i2801[6]
  i2800.m_PhysicalUnit = i2801[7]
  i2800.m_FallbackScreenDPI = i2801[8]
  i2800.m_DefaultSpriteDPI = i2801[9]
  i2800.m_DynamicPixelsPerUnit = i2801[10]
  i2800.m_PresetInfoIsWorld = !!i2801[11]
  return i2800
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2802 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2803 = data
  i2802.m_IgnoreReversedGraphics = !!i2803[0]
  i2802.m_BlockingObjects = i2803[1]
  i2802.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2803[2] )
  return i2802
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2804 = root || request.c( 'UnityEngine.UI.Image' )
  var i2805 = data
  request.r(i2805[0], i2805[1], 0, i2804, 'm_Sprite')
  i2804.m_Type = i2805[2]
  i2804.m_PreserveAspect = !!i2805[3]
  i2804.m_FillCenter = !!i2805[4]
  i2804.m_FillMethod = i2805[5]
  i2804.m_FillAmount = i2805[6]
  i2804.m_FillClockwise = !!i2805[7]
  i2804.m_FillOrigin = i2805[8]
  i2804.m_UseSpriteMesh = !!i2805[9]
  i2804.m_PixelsPerUnitMultiplier = i2805[10]
  request.r(i2805[11], i2805[12], 0, i2804, 'm_Material')
  i2804.m_Maskable = !!i2805[13]
  i2804.m_Color = new pc.Color(i2805[14], i2805[15], i2805[16], i2805[17])
  i2804.m_RaycastTarget = !!i2805[18]
  i2804.m_RaycastPadding = new pc.Vec4( i2805[19], i2805[20], i2805[21], i2805[22] )
  return i2804
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2806 = root || request.c( 'UnityEngine.UI.Button' )
  var i2807 = data
  i2806.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2807[0], i2806.m_OnClick)
  i2806.m_Navigation = request.d('UnityEngine.UI.Navigation', i2807[1], i2806.m_Navigation)
  i2806.m_Transition = i2807[2]
  i2806.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2807[3], i2806.m_Colors)
  i2806.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2807[4], i2806.m_SpriteState)
  i2806.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2807[5], i2806.m_AnimationTriggers)
  i2806.m_Interactable = !!i2807[6]
  request.r(i2807[7], i2807[8], 0, i2806, 'm_TargetGraphic')
  return i2806
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2808 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2809 = data
  i2808.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2809[0], i2808.m_PersistentCalls)
  return i2808
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2810 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2811 = data
  var i2813 = i2811[0]
  var i2812 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2813.length; i += 1) {
    i2812.add(request.d('UnityEngine.Events.PersistentCall', i2813[i + 0]));
  }
  i2810.m_Calls = i2812
  return i2810
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2816 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2817 = data
  request.r(i2817[0], i2817[1], 0, i2816, 'm_Target')
  i2816.m_TargetAssemblyTypeName = i2817[2]
  i2816.m_MethodName = i2817[3]
  i2816.m_Mode = i2817[4]
  i2816.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2817[5], i2816.m_Arguments)
  i2816.m_CallState = i2817[6]
  return i2816
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2818 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2819 = data
  request.r(i2819[0], i2819[1], 0, i2818, 'm_ObjectArgument')
  i2818.m_ObjectArgumentAssemblyTypeName = i2819[2]
  i2818.m_IntArgument = i2819[3]
  i2818.m_FloatArgument = i2819[4]
  i2818.m_StringArgument = i2819[5]
  i2818.m_BoolArgument = !!i2819[6]
  return i2818
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2820 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2821 = data
  i2820.m_Mode = i2821[0]
  i2820.m_WrapAround = !!i2821[1]
  request.r(i2821[2], i2821[3], 0, i2820, 'm_SelectOnUp')
  request.r(i2821[4], i2821[5], 0, i2820, 'm_SelectOnDown')
  request.r(i2821[6], i2821[7], 0, i2820, 'm_SelectOnLeft')
  request.r(i2821[8], i2821[9], 0, i2820, 'm_SelectOnRight')
  return i2820
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2822 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2823 = data
  i2822.m_NormalColor = new pc.Color(i2823[0], i2823[1], i2823[2], i2823[3])
  i2822.m_HighlightedColor = new pc.Color(i2823[4], i2823[5], i2823[6], i2823[7])
  i2822.m_PressedColor = new pc.Color(i2823[8], i2823[9], i2823[10], i2823[11])
  i2822.m_SelectedColor = new pc.Color(i2823[12], i2823[13], i2823[14], i2823[15])
  i2822.m_DisabledColor = new pc.Color(i2823[16], i2823[17], i2823[18], i2823[19])
  i2822.m_ColorMultiplier = i2823[20]
  i2822.m_FadeDuration = i2823[21]
  return i2822
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2824 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2825 = data
  request.r(i2825[0], i2825[1], 0, i2824, 'm_HighlightedSprite')
  request.r(i2825[2], i2825[3], 0, i2824, 'm_PressedSprite')
  request.r(i2825[4], i2825[5], 0, i2824, 'm_SelectedSprite')
  request.r(i2825[6], i2825[7], 0, i2824, 'm_DisabledSprite')
  return i2824
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2826 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2827 = data
  i2826.m_NormalTrigger = i2827[0]
  i2826.m_HighlightedTrigger = i2827[1]
  i2826.m_PressedTrigger = i2827[2]
  i2826.m_SelectedTrigger = i2827[3]
  i2826.m_DisabledTrigger = i2827[4]
  return i2826
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i2828 = root || request.c( 'UnityEngine.UI.Text' )
  var i2829 = data
  i2828.m_FontData = request.d('UnityEngine.UI.FontData', i2829[0], i2828.m_FontData)
  i2828.m_Text = i2829[1]
  request.r(i2829[2], i2829[3], 0, i2828, 'm_Material')
  i2828.m_Maskable = !!i2829[4]
  i2828.m_Color = new pc.Color(i2829[5], i2829[6], i2829[7], i2829[8])
  i2828.m_RaycastTarget = !!i2829[9]
  i2828.m_RaycastPadding = new pc.Vec4( i2829[10], i2829[11], i2829[12], i2829[13] )
  return i2828
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i2830 = root || request.c( 'UnityEngine.UI.FontData' )
  var i2831 = data
  request.r(i2831[0], i2831[1], 0, i2830, 'm_Font')
  i2830.m_FontSize = i2831[2]
  i2830.m_FontStyle = i2831[3]
  i2830.m_BestFit = !!i2831[4]
  i2830.m_MinSize = i2831[5]
  i2830.m_MaxSize = i2831[6]
  i2830.m_Alignment = i2831[7]
  i2830.m_AlignByGeometry = !!i2831[8]
  i2830.m_RichText = !!i2831[9]
  i2830.m_HorizontalOverflow = i2831[10]
  i2830.m_VerticalOverflow = i2831[11]
  i2830.m_LineSpacing = i2831[12]
  return i2830
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2832 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2833 = data
  request.r(i2833[0], i2833[1], 0, i2832, 'm_FirstSelected')
  i2832.m_sendNavigationEvents = !!i2833[2]
  i2832.m_DragThreshold = i2833[3]
  return i2832
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2834 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2835 = data
  i2834.m_HorizontalAxis = i2835[0]
  i2834.m_VerticalAxis = i2835[1]
  i2834.m_SubmitButton = i2835[2]
  i2834.m_CancelButton = i2835[3]
  i2834.m_InputActionsPerSecond = i2835[4]
  i2834.m_RepeatDelay = i2835[5]
  i2834.m_ForceModuleActive = !!i2835[6]
  i2834.m_SendPointerHoverToParent = !!i2835[7]
  return i2834
}

Deserializers["CameraController"] = function (request, data, root) {
  var i2836 = root || request.c( 'CameraController' )
  var i2837 = data
  request.r(i2837[0], i2837[1], 0, i2836, 'camera1')
  request.r(i2837[2], i2837[3], 0, i2836, 'camera2')
  request.r(i2837[4], i2837[5], 0, i2836, 'mainCanvas')
  request.r(i2837[6], i2837[7], 0, i2836, 'selectionCanvas')
  request.r(i2837[8], i2837[9], 0, i2836, 'ballSelection')
  return i2836
}

Deserializers["GameManager"] = function (request, data, root) {
  var i2838 = root || request.c( 'GameManager' )
  var i2839 = data
  request.r(i2839[0], i2839[1], 0, i2838, 'currentScoreText')
  request.r(i2839[2], i2839[3], 0, i2838, 'highScoreText')
  request.r(i2839[4], i2839[5], 0, i2838, 'boardText')
  request.r(i2839[6], i2839[7], 0, i2838, 'perfectParticle')
  request.r(i2839[8], i2839[9], 0, i2838, 'fireParticle')
  return i2838
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i2840 = root || request.c( 'AudioManager' )
  var i2841 = data
  request.r(i2841[0], i2841[1], 0, i2840, 'soundAudioSource')
  request.r(i2841[2], i2841[3], 0, i2840, 'collisionAudioSource')
  request.r(i2841[4], i2841[5], 0, i2840, 'throwAudioSource')
  request.r(i2841[6], i2841[7], 0, i2840, 'musicAudioSource')
  request.r(i2841[8], i2841[9], 0, i2840, 'basketPerfectSound')
  request.r(i2841[10], i2841[11], 0, i2840, 'buttonSound')
  var i2843 = i2841[12]
  var i2842 = []
  for(var i = 0; i < i2843.length; i += 2) {
  request.r(i2843[i + 0], i2843[i + 1], 2, i2842, '')
  }
  i2840.ballCollisionSounds = i2842
  request.r(i2841[13], i2841[14], 0, i2840, 'throwBallSound')
  request.r(i2841[15], i2841[16], 0, i2840, 'musicSound')
  return i2840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2847 = data
  request.r(i2847[0], i2847[1], 0, i2846, 'clip')
  request.r(i2847[2], i2847[3], 0, i2846, 'outputAudioMixerGroup')
  i2846.playOnAwake = !!i2847[4]
  i2846.loop = !!i2847[5]
  i2846.time = i2847[6]
  i2846.volume = i2847[7]
  i2846.pitch = i2847[8]
  i2846.enabled = !!i2847[9]
  return i2846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2849 = data
  i2848.ambientIntensity = i2849[0]
  i2848.reflectionIntensity = i2849[1]
  i2848.ambientMode = i2849[2]
  i2848.ambientLight = new pc.Color(i2849[3], i2849[4], i2849[5], i2849[6])
  i2848.ambientSkyColor = new pc.Color(i2849[7], i2849[8], i2849[9], i2849[10])
  i2848.ambientGroundColor = new pc.Color(i2849[11], i2849[12], i2849[13], i2849[14])
  i2848.ambientEquatorColor = new pc.Color(i2849[15], i2849[16], i2849[17], i2849[18])
  i2848.fogColor = new pc.Color(i2849[19], i2849[20], i2849[21], i2849[22])
  i2848.fogEndDistance = i2849[23]
  i2848.fogStartDistance = i2849[24]
  i2848.fogDensity = i2849[25]
  i2848.fog = !!i2849[26]
  request.r(i2849[27], i2849[28], 0, i2848, 'skybox')
  i2848.fogMode = i2849[29]
  var i2851 = i2849[30]
  var i2850 = []
  for(var i = 0; i < i2851.length; i += 1) {
    i2850.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2851[i + 0]) );
  }
  i2848.lightmaps = i2850
  i2848.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2849[31], i2848.lightProbes)
  i2848.lightmapsMode = i2849[32]
  i2848.mixedBakeMode = i2849[33]
  i2848.environmentLightingMode = i2849[34]
  i2848.ambientProbe = new pc.SphericalHarmonicsL2(i2849[35])
  i2848.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2849[36])
  i2848.useReferenceAmbientProbe = !!i2849[37]
  request.r(i2849[38], i2849[39], 0, i2848, 'customReflection')
  request.r(i2849[40], i2849[41], 0, i2848, 'defaultReflection')
  i2848.defaultReflectionMode = i2849[42]
  i2848.defaultReflectionResolution = i2849[43]
  i2848.sunLightObjectId = i2849[44]
  i2848.pixelLightCount = i2849[45]
  i2848.defaultReflectionHDR = !!i2849[46]
  i2848.hasLightDataAsset = !!i2849[47]
  i2848.hasManualGenerate = !!i2849[48]
  return i2848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2855 = data
  request.r(i2855[0], i2855[1], 0, i2854, 'lightmapColor')
  request.r(i2855[2], i2855[3], 0, i2854, 'lightmapDirection')
  return i2854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2856 = root || new UnityEngine.LightProbes()
  var i2857 = data
  return i2856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial"] = function (request, data, root) {
  var i2862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial' )
  var i2863 = data
  i2862.name = i2863[0]
  i2862.bounciness = i2863[1]
  i2862.dynamicFriction = i2863[2]
  i2862.staticFriction = i2863[3]
  i2862.frictionCombine = i2863[4]
  i2862.bounceCombine = i2863[5]
  return i2862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2865 = data
  var i2867 = i2865[0]
  var i2866 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2867.length; i += 1) {
    i2866.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2867[i + 0]));
  }
  i2864.ShaderCompilationErrors = i2866
  i2864.name = i2865[1]
  i2864.guid = i2865[2]
  var i2869 = i2865[3]
  var i2868 = []
  for(var i = 0; i < i2869.length; i += 1) {
    i2868.push( i2869[i + 0] );
  }
  i2864.shaderDefinedKeywords = i2868
  var i2871 = i2865[4]
  var i2870 = []
  for(var i = 0; i < i2871.length; i += 1) {
    i2870.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2871[i + 0]) );
  }
  i2864.passes = i2870
  var i2873 = i2865[5]
  var i2872 = []
  for(var i = 0; i < i2873.length; i += 1) {
    i2872.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2873[i + 0]) );
  }
  i2864.usePasses = i2872
  var i2875 = i2865[6]
  var i2874 = []
  for(var i = 0; i < i2875.length; i += 1) {
    i2874.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2875[i + 0]) );
  }
  i2864.defaultParameterValues = i2874
  request.r(i2865[7], i2865[8], 0, i2864, 'unityFallbackShader')
  i2864.readDepth = !!i2865[9]
  i2864.isCreatedByShaderGraph = !!i2865[10]
  i2864.compiled = !!i2865[11]
  return i2864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2879 = data
  i2878.shaderName = i2879[0]
  i2878.errorMessage = i2879[1]
  return i2878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2884 = root || new pc.UnityShaderPass()
  var i2885 = data
  i2884.id = i2885[0]
  i2884.subShaderIndex = i2885[1]
  i2884.name = i2885[2]
  i2884.passType = i2885[3]
  i2884.grabPassTextureName = i2885[4]
  i2884.usePass = !!i2885[5]
  i2884.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2885[6], i2884.zTest)
  i2884.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2885[7], i2884.zWrite)
  i2884.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2885[8], i2884.culling)
  i2884.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2885[9], i2884.blending)
  i2884.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2885[10], i2884.alphaBlending)
  i2884.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2885[11], i2884.colorWriteMask)
  i2884.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2885[12], i2884.offsetUnits)
  i2884.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2885[13], i2884.offsetFactor)
  i2884.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2885[14], i2884.stencilRef)
  i2884.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2885[15], i2884.stencilReadMask)
  i2884.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2885[16], i2884.stencilWriteMask)
  i2884.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2885[17], i2884.stencilOp)
  i2884.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2885[18], i2884.stencilOpFront)
  i2884.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2885[19], i2884.stencilOpBack)
  var i2887 = i2885[20]
  var i2886 = []
  for(var i = 0; i < i2887.length; i += 1) {
    i2886.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2887[i + 0]) );
  }
  i2884.tags = i2886
  var i2889 = i2885[21]
  var i2888 = []
  for(var i = 0; i < i2889.length; i += 1) {
    i2888.push( i2889[i + 0] );
  }
  i2884.passDefinedKeywords = i2888
  var i2891 = i2885[22]
  var i2890 = []
  for(var i = 0; i < i2891.length; i += 1) {
    i2890.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2891[i + 0]) );
  }
  i2884.passDefinedKeywordGroups = i2890
  var i2893 = i2885[23]
  var i2892 = []
  for(var i = 0; i < i2893.length; i += 1) {
    i2892.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2893[i + 0]) );
  }
  i2884.variants = i2892
  var i2895 = i2885[24]
  var i2894 = []
  for(var i = 0; i < i2895.length; i += 1) {
    i2894.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2895[i + 0]) );
  }
  i2884.excludedVariants = i2894
  i2884.hasDepthReader = !!i2885[25]
  return i2884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2897 = data
  i2896.val = i2897[0]
  i2896.name = i2897[1]
  return i2896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2899 = data
  i2898.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2899[0], i2898.src)
  i2898.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2899[1], i2898.dst)
  i2898.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2899[2], i2898.op)
  return i2898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2901 = data
  i2900.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2901[0], i2900.pass)
  i2900.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2901[1], i2900.fail)
  i2900.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2901[2], i2900.zFail)
  i2900.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2901[3], i2900.comp)
  return i2900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2905 = data
  i2904.name = i2905[0]
  i2904.value = i2905[1]
  return i2904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2909 = data
  var i2911 = i2909[0]
  var i2910 = []
  for(var i = 0; i < i2911.length; i += 1) {
    i2910.push( i2911[i + 0] );
  }
  i2908.keywords = i2910
  i2908.hasDiscard = !!i2909[1]
  return i2908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2915 = data
  i2914.passId = i2915[0]
  i2914.subShaderIndex = i2915[1]
  var i2917 = i2915[2]
  var i2916 = []
  for(var i = 0; i < i2917.length; i += 1) {
    i2916.push( i2917[i + 0] );
  }
  i2914.keywords = i2916
  i2914.vertexProgram = i2915[3]
  i2914.fragmentProgram = i2915[4]
  i2914.exportedForWebGl2 = !!i2915[5]
  i2914.readDepth = !!i2915[6]
  return i2914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2921 = data
  request.r(i2921[0], i2921[1], 0, i2920, 'shader')
  i2920.pass = i2921[2]
  return i2920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2925 = data
  i2924.name = i2925[0]
  i2924.type = i2925[1]
  i2924.value = new pc.Vec4( i2925[2], i2925[3], i2925[4], i2925[5] )
  i2924.textureValue = i2925[6]
  i2924.shaderPropertyFlag = i2925[7]
  return i2924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2927 = data
  i2926.name = i2927[0]
  request.r(i2927[1], i2927[2], 0, i2926, 'texture')
  i2926.aabb = i2927[3]
  i2926.vertices = i2927[4]
  i2926.triangles = i2927[5]
  i2926.textureRect = UnityEngine.Rect.MinMaxRect(i2927[6], i2927[7], i2927[8], i2927[9])
  i2926.packedRect = UnityEngine.Rect.MinMaxRect(i2927[10], i2927[11], i2927[12], i2927[13])
  i2926.border = new pc.Vec4( i2927[14], i2927[15], i2927[16], i2927[17] )
  i2926.transparency = i2927[18]
  i2926.bounds = i2927[19]
  i2926.pixelsPerUnit = i2927[20]
  i2926.textureWidth = i2927[21]
  i2926.textureHeight = i2927[22]
  i2926.nativeSize = new pc.Vec2( i2927[23], i2927[24] )
  i2926.pivot = new pc.Vec2( i2927[25], i2927[26] )
  i2926.textureRectOffset = new pc.Vec2( i2927[27], i2927[28] )
  return i2926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2929 = data
  i2928.name = i2929[0]
  return i2928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2931 = data
  i2930.name = i2931[0]
  i2930.wrapMode = i2931[1]
  i2930.isLooping = !!i2931[2]
  i2930.length = i2931[3]
  var i2933 = i2931[4]
  var i2932 = []
  for(var i = 0; i < i2933.length; i += 1) {
    i2932.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2933[i + 0]) );
  }
  i2930.curves = i2932
  var i2935 = i2931[5]
  var i2934 = []
  for(var i = 0; i < i2935.length; i += 1) {
    i2934.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2935[i + 0]) );
  }
  i2930.events = i2934
  i2930.halfPrecision = !!i2931[6]
  i2930._frameRate = i2931[7]
  i2930.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2931[8], i2930.localBounds)
  i2930.hasMuscleCurves = !!i2931[9]
  var i2937 = i2931[10]
  var i2936 = []
  for(var i = 0; i < i2937.length; i += 1) {
    i2936.push( i2937[i + 0] );
  }
  i2930.clipMuscleConstant = i2936
  i2930.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2931[11], i2930.clipBindingConstant)
  return i2930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2941 = data
  i2940.path = i2941[0]
  i2940.hash = i2941[1]
  i2940.componentType = i2941[2]
  i2940.property = i2941[3]
  i2940.keys = i2941[4]
  var i2943 = i2941[5]
  var i2942 = []
  for(var i = 0; i < i2943.length; i += 1) {
    i2942.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2943[i + 0]) );
  }
  i2940.objectReferenceKeys = i2942
  return i2940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2947 = data
  i2946.time = i2947[0]
  request.r(i2947[1], i2947[2], 0, i2946, 'value')
  return i2946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2951 = data
  i2950.functionName = i2951[0]
  i2950.floatParameter = i2951[1]
  i2950.intParameter = i2951[2]
  i2950.stringParameter = i2951[3]
  request.r(i2951[4], i2951[5], 0, i2950, 'objectReferenceParameter')
  i2950.time = i2951[6]
  return i2950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2953 = data
  i2952.center = new pc.Vec3( i2953[0], i2953[1], i2953[2] )
  i2952.extends = new pc.Vec3( i2953[3], i2953[4], i2953[5] )
  return i2952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2957 = data
  var i2959 = i2957[0]
  var i2958 = []
  for(var i = 0; i < i2959.length; i += 1) {
    i2958.push( i2959[i + 0] );
  }
  i2956.genericBindings = i2958
  var i2961 = i2957[1]
  var i2960 = []
  for(var i = 0; i < i2961.length; i += 1) {
    i2960.push( i2961[i + 0] );
  }
  i2956.pptrCurveMapping = i2960
  return i2956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2963 = data
  i2962.name = i2963[0]
  i2962.ascent = i2963[1]
  i2962.originalLineHeight = i2963[2]
  i2962.fontSize = i2963[3]
  var i2965 = i2963[4]
  var i2964 = []
  for(var i = 0; i < i2965.length; i += 1) {
    i2964.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2965[i + 0]) );
  }
  i2962.characterInfo = i2964
  request.r(i2963[5], i2963[6], 0, i2962, 'texture')
  i2962.originalFontSize = i2963[7]
  return i2962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2969 = data
  i2968.index = i2969[0]
  i2968.advance = i2969[1]
  i2968.bearing = i2969[2]
  i2968.glyphWidth = i2969[3]
  i2968.glyphHeight = i2969[4]
  i2968.minX = i2969[5]
  i2968.maxX = i2969[6]
  i2968.minY = i2969[7]
  i2968.maxY = i2969[8]
  i2968.uvBottomLeftX = i2969[9]
  i2968.uvBottomLeftY = i2969[10]
  i2968.uvBottomRightX = i2969[11]
  i2968.uvBottomRightY = i2969[12]
  i2968.uvTopLeftX = i2969[13]
  i2968.uvTopLeftY = i2969[14]
  i2968.uvTopRightX = i2969[15]
  i2968.uvTopRightY = i2969[16]
  return i2968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2971 = data
  i2970.name = i2971[0]
  var i2973 = i2971[1]
  var i2972 = []
  for(var i = 0; i < i2973.length; i += 1) {
    i2972.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2973[i + 0]) );
  }
  i2970.layers = i2972
  var i2975 = i2971[2]
  var i2974 = []
  for(var i = 0; i < i2975.length; i += 1) {
    i2974.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2975[i + 0]) );
  }
  i2970.parameters = i2974
  i2970.animationClips = i2971[3]
  i2970.avatarUnsupported = i2971[4]
  return i2970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2979 = data
  i2978.name = i2979[0]
  i2978.defaultWeight = i2979[1]
  i2978.blendingMode = i2979[2]
  i2978.avatarMask = i2979[3]
  i2978.syncedLayerIndex = i2979[4]
  i2978.syncedLayerAffectsTiming = !!i2979[5]
  i2978.syncedLayers = i2979[6]
  i2978.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2979[7], i2978.stateMachine)
  return i2978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2981 = data
  i2980.id = i2981[0]
  i2980.name = i2981[1]
  i2980.path = i2981[2]
  var i2983 = i2981[3]
  var i2982 = []
  for(var i = 0; i < i2983.length; i += 1) {
    i2982.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2983[i + 0]) );
  }
  i2980.states = i2982
  var i2985 = i2981[4]
  var i2984 = []
  for(var i = 0; i < i2985.length; i += 1) {
    i2984.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2985[i + 0]) );
  }
  i2980.machines = i2984
  var i2987 = i2981[5]
  var i2986 = []
  for(var i = 0; i < i2987.length; i += 1) {
    i2986.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2987[i + 0]) );
  }
  i2980.entryStateTransitions = i2986
  var i2989 = i2981[6]
  var i2988 = []
  for(var i = 0; i < i2989.length; i += 1) {
    i2988.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2989[i + 0]) );
  }
  i2980.exitStateTransitions = i2988
  var i2991 = i2981[7]
  var i2990 = []
  for(var i = 0; i < i2991.length; i += 1) {
    i2990.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2991[i + 0]) );
  }
  i2980.anyStateTransitions = i2990
  i2980.defaultStateId = i2981[8]
  return i2980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2995 = data
  i2994.id = i2995[0]
  i2994.name = i2995[1]
  i2994.cycleOffset = i2995[2]
  i2994.cycleOffsetParameter = i2995[3]
  i2994.cycleOffsetParameterActive = !!i2995[4]
  i2994.mirror = !!i2995[5]
  i2994.mirrorParameter = i2995[6]
  i2994.mirrorParameterActive = !!i2995[7]
  i2994.motionId = i2995[8]
  i2994.nameHash = i2995[9]
  i2994.fullPathHash = i2995[10]
  i2994.speed = i2995[11]
  i2994.speedParameter = i2995[12]
  i2994.speedParameterActive = !!i2995[13]
  i2994.tag = i2995[14]
  i2994.tagHash = i2995[15]
  i2994.writeDefaultValues = !!i2995[16]
  var i2997 = i2995[17]
  var i2996 = []
  for(var i = 0; i < i2997.length; i += 2) {
  request.r(i2997[i + 0], i2997[i + 1], 2, i2996, '')
  }
  i2994.behaviours = i2996
  var i2999 = i2995[18]
  var i2998 = []
  for(var i = 0; i < i2999.length; i += 1) {
    i2998.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2999[i + 0]) );
  }
  i2994.transitions = i2998
  return i2994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i3004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i3005 = data
  i3004.fullPath = i3005[0]
  i3004.canTransitionToSelf = !!i3005[1]
  i3004.duration = i3005[2]
  i3004.exitTime = i3005[3]
  i3004.hasExitTime = !!i3005[4]
  i3004.hasFixedDuration = !!i3005[5]
  i3004.interruptionSource = i3005[6]
  i3004.offset = i3005[7]
  i3004.orderedInterruption = !!i3005[8]
  i3004.destinationStateId = i3005[9]
  i3004.isExit = !!i3005[10]
  i3004.mute = !!i3005[11]
  i3004.solo = !!i3005[12]
  var i3007 = i3005[13]
  var i3006 = []
  for(var i = 0; i < i3007.length; i += 1) {
    i3006.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3007[i + 0]) );
  }
  i3004.conditions = i3006
  return i3004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i3012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i3013 = data
  i3012.destinationStateId = i3013[0]
  i3012.isExit = !!i3013[1]
  i3012.mute = !!i3013[2]
  i3012.solo = !!i3013[3]
  var i3015 = i3013[4]
  var i3014 = []
  for(var i = 0; i < i3015.length; i += 1) {
    i3014.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3015[i + 0]) );
  }
  i3012.conditions = i3014
  return i3012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i3018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i3019 = data
  i3018.defaultBool = !!i3019[0]
  i3018.defaultFloat = i3019[1]
  i3018.defaultInt = i3019[2]
  i3018.name = i3019[3]
  i3018.nameHash = i3019[4]
  i3018.type = i3019[5]
  return i3018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3021 = data
  var i3023 = i3021[0]
  var i3022 = []
  for(var i = 0; i < i3023.length; i += 1) {
    i3022.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3023[i + 0]) );
  }
  i3020.files = i3022
  i3020.componentToPrefabIds = i3021[1]
  return i3020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i3026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i3027 = data
  i3026.path = i3027[0]
  request.r(i3027[1], i3027[2], 0, i3026, 'unityObject')
  return i3026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i3028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i3029 = data
  var i3031 = i3029[0]
  var i3030 = []
  for(var i = 0; i < i3031.length; i += 1) {
    i3030.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i3031[i + 0]) );
  }
  i3028.scriptsExecutionOrder = i3030
  var i3033 = i3029[1]
  var i3032 = []
  for(var i = 0; i < i3033.length; i += 1) {
    i3032.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i3033[i + 0]) );
  }
  i3028.sortingLayers = i3032
  var i3035 = i3029[2]
  var i3034 = []
  for(var i = 0; i < i3035.length; i += 1) {
    i3034.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i3035[i + 0]) );
  }
  i3028.cullingLayers = i3034
  i3028.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i3029[3], i3028.timeSettings)
  i3028.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i3029[4], i3028.physicsSettings)
  i3028.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i3029[5], i3028.physics2DSettings)
  i3028.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3029[6], i3028.qualitySettings)
  i3028.enableRealtimeShadows = !!i3029[7]
  i3028.enableAutoInstancing = !!i3029[8]
  i3028.enableDynamicBatching = !!i3029[9]
  i3028.lightmapEncodingQuality = i3029[10]
  i3028.desiredColorSpace = i3029[11]
  var i3037 = i3029[12]
  var i3036 = []
  for(var i = 0; i < i3037.length; i += 1) {
    i3036.push( i3037[i + 0] );
  }
  i3028.allTags = i3036
  return i3028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i3040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i3041 = data
  i3040.name = i3041[0]
  i3040.value = i3041[1]
  return i3040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3045 = data
  i3044.id = i3045[0]
  i3044.name = i3045[1]
  i3044.value = i3045[2]
  return i3044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3049 = data
  i3048.id = i3049[0]
  i3048.name = i3049[1]
  return i3048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3051 = data
  i3050.fixedDeltaTime = i3051[0]
  i3050.maximumDeltaTime = i3051[1]
  i3050.timeScale = i3051[2]
  i3050.maximumParticleTimestep = i3051[3]
  return i3050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3053 = data
  i3052.gravity = new pc.Vec3( i3053[0], i3053[1], i3053[2] )
  i3052.defaultSolverIterations = i3053[3]
  i3052.bounceThreshold = i3053[4]
  i3052.autoSyncTransforms = !!i3053[5]
  i3052.autoSimulation = !!i3053[6]
  var i3055 = i3053[7]
  var i3054 = []
  for(var i = 0; i < i3055.length; i += 1) {
    i3054.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3055[i + 0]) );
  }
  i3052.collisionMatrix = i3054
  return i3052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3059 = data
  i3058.enabled = !!i3059[0]
  i3058.layerId = i3059[1]
  i3058.otherLayerId = i3059[2]
  return i3058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3061 = data
  request.r(i3061[0], i3061[1], 0, i3060, 'material')
  i3060.gravity = new pc.Vec2( i3061[2], i3061[3] )
  i3060.positionIterations = i3061[4]
  i3060.velocityIterations = i3061[5]
  i3060.velocityThreshold = i3061[6]
  i3060.maxLinearCorrection = i3061[7]
  i3060.maxAngularCorrection = i3061[8]
  i3060.maxTranslationSpeed = i3061[9]
  i3060.maxRotationSpeed = i3061[10]
  i3060.baumgarteScale = i3061[11]
  i3060.baumgarteTOIScale = i3061[12]
  i3060.timeToSleep = i3061[13]
  i3060.linearSleepTolerance = i3061[14]
  i3060.angularSleepTolerance = i3061[15]
  i3060.defaultContactOffset = i3061[16]
  i3060.autoSimulation = !!i3061[17]
  i3060.queriesHitTriggers = !!i3061[18]
  i3060.queriesStartInColliders = !!i3061[19]
  i3060.callbacksOnDisable = !!i3061[20]
  i3060.reuseCollisionCallbacks = !!i3061[21]
  i3060.autoSyncTransforms = !!i3061[22]
  var i3063 = i3061[23]
  var i3062 = []
  for(var i = 0; i < i3063.length; i += 1) {
    i3062.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3063[i + 0]) );
  }
  i3060.collisionMatrix = i3062
  return i3060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3067 = data
  i3066.enabled = !!i3067[0]
  i3066.layerId = i3067[1]
  i3066.otherLayerId = i3067[2]
  return i3066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3069 = data
  var i3071 = i3069[0]
  var i3070 = []
  for(var i = 0; i < i3071.length; i += 1) {
    i3070.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3071[i + 0]) );
  }
  i3068.qualityLevels = i3070
  var i3073 = i3069[1]
  var i3072 = []
  for(var i = 0; i < i3073.length; i += 1) {
    i3072.push( i3073[i + 0] );
  }
  i3068.names = i3072
  i3068.shadows = i3069[2]
  i3068.anisotropicFiltering = i3069[3]
  i3068.antiAliasing = i3069[4]
  i3068.lodBias = i3069[5]
  i3068.shadowCascades = i3069[6]
  i3068.shadowDistance = i3069[7]
  i3068.shadowmaskMode = i3069[8]
  i3068.shadowProjection = i3069[9]
  i3068.shadowResolution = i3069[10]
  i3068.softParticles = !!i3069[11]
  i3068.softVegetation = !!i3069[12]
  i3068.activeColorSpace = i3069[13]
  i3068.desiredColorSpace = i3069[14]
  i3068.masterTextureLimit = i3069[15]
  i3068.maxQueuedFrames = i3069[16]
  i3068.particleRaycastBudget = i3069[17]
  i3068.pixelLightCount = i3069[18]
  i3068.realtimeReflectionProbes = !!i3069[19]
  i3068.shadowCascade2Split = i3069[20]
  i3068.shadowCascade4Split = new pc.Vec3( i3069[21], i3069[22], i3069[23] )
  i3068.streamingMipmapsActive = !!i3069[24]
  i3068.vSyncCount = i3069[25]
  i3068.asyncUploadBufferSize = i3069[26]
  i3068.asyncUploadTimeSlice = i3069[27]
  i3068.billboardsFaceCameraPosition = !!i3069[28]
  i3068.shadowNearPlaneOffset = i3069[29]
  i3068.streamingMipmapsMemoryBudget = i3069[30]
  i3068.maximumLODLevel = i3069[31]
  i3068.streamingMipmapsAddAllCameras = !!i3069[32]
  i3068.streamingMipmapsMaxLevelReduction = i3069[33]
  i3068.streamingMipmapsRenderersPerFrame = i3069[34]
  i3068.resolutionScalingFixedDPIFactor = i3069[35]
  i3068.streamingMipmapsMaxFileIORequests = i3069[36]
  i3068.currentQualityLevel = i3069[37]
  return i3068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i3078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i3079 = data
  i3078.weight = i3079[0]
  i3078.vertices = i3079[1]
  i3078.normals = i3079[2]
  i3078.tangents = i3079[3]
  return i3078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i3082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i3083 = data
  i3082.mode = i3083[0]
  i3082.parameter = i3083[1]
  i3082.threshold = i3083[2]
  return i3082
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"enabled":0,"isTrigger":1,"material":2,"center":4,"radius":7},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"positions":16,"positionCount":17,"time":18,"startWidth":19,"endWidth":20,"widthMultiplier":21,"autodestruct":22,"emitting":23,"numCornerVertices":24,"numCapVertices":25,"minVertexDistance":26,"colorGradient":27,"startColor":28,"endColor":32,"generateLightingData":36,"textureMode":37,"alignment":38,"widthCurve":39},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.HingeJoint":{"useMotor":0,"useLimits":1,"useSpring":2,"limits":3,"motor":4,"spring":5,"connectedBody":6,"axis":8,"anchor":11,"connectedAnchor":14,"autoConfigureConnectedAnchor":17,"massScale":18,"connectedMassScale":19,"enableCollision":20,"breakForce":21,"breakTorque":22},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial":{"name":0,"bounciness":1,"dynamicFriction":2,"staticFriction":3,"frictionCombine":4,"bounceCombine":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"50":[51],"52":[51],"53":[51],"54":[51],"55":[51],"56":[51],"22":[23],"57":[12],"58":[15],"59":[15],"20":[15],"60":[15],"61":[15],"62":[15],"63":[15],"64":[65],"66":[65],"67":[65],"68":[65],"69":[65],"70":[65],"71":[65],"72":[65],"73":[65],"74":[65],"75":[65],"76":[65],"77":[65],"78":[12],"79":[5],"80":[81],"82":[81],"34":[26],"83":[26],"84":[5,26],"85":[26,27],"86":[26],"87":[27,26],"88":[5],"89":[27,26],"90":[26],"91":[26],"92":[26],"37":[34],"38":[27,26],"93":[26],"36":[34],"94":[26],"95":[26],"96":[26],"97":[26],"98":[26],"99":[26],"100":[26],"101":[26],"102":[26],"103":[27,26],"104":[26],"105":[26],"106":[26],"107":[26],"42":[27,26],"108":[26],"109":[44],"110":[44],"45":[44],"111":[44],"112":[12],"113":[12]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.BoxCollider","UnityEngine.PhysicMaterial","UnityEngine.MonoBehaviour","CollisionHandler","UnityEngine.Light","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.SphereCollider","UnityEngine.Rigidbody","UnityEngine.TrailRenderer","BallThrower","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.HingeJoint","UnityEngine.CapsuleCollider","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","RecordDunkTrigger","DunkTrigger","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","BallSelectionController","UnityEngine.GameObject","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Image","UnityEngine.UI.Button","CameraController","AudioManager","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","GameManager","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Cubemap","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2022.3.14f1";

Deserializers.productName = "Basketball 3";

Deserializers.lunaInitializationTime = "08/05/2025 12:01:17";

Deserializers.lunaDaysRunning = "1.1";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "31969";

Deserializers.projectId = "09c3f673d9d244568b2c082fb6ba654c";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.9\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1688";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3716";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, reflection, prefabs";

Deserializers.isRuntimeAnalysisEnabledForShaders = "False";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.Basketball-3";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "3e72f66c-5dff-4a39-b7b4-1b2495be5170";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

