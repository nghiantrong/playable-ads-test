var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i514 = root || request.c( 'UnityEngine.JointSpring' )
  var i515 = data
  i514.spring = i515[0]
  i514.damper = i515[1]
  i514.targetPosition = i515[2]
  return i514
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i516 = root || request.c( 'UnityEngine.JointMotor' )
  var i517 = data
  i516.m_TargetVelocity = i517[0]
  i516.m_Force = i517[1]
  i516.m_FreeSpin = i517[2]
  return i516
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i518 = root || request.c( 'UnityEngine.JointLimits' )
  var i519 = data
  i518.m_Min = i519[0]
  i518.m_Max = i519[1]
  i518.m_Bounciness = i519[2]
  i518.m_BounceMinVelocity = i519[3]
  i518.m_ContactDistance = i519[4]
  i518.minBounce = i519[5]
  i518.maxBounce = i519[6]
  return i518
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i520 = root || request.c( 'UnityEngine.JointDrive' )
  var i521 = data
  i520.m_PositionSpring = i521[0]
  i520.m_PositionDamper = i521[1]
  i520.m_MaximumForce = i521[2]
  i520.m_UseAcceleration = i521[3]
  return i520
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i522 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i523 = data
  i522.m_Spring = i523[0]
  i522.m_Damper = i523[1]
  return i522
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i524 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i525 = data
  i524.m_Limit = i525[0]
  i524.m_Bounciness = i525[1]
  i524.m_ContactDistance = i525[2]
  return i524
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i526 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i527 = data
  i526.m_ExtremumSlip = i527[0]
  i526.m_ExtremumValue = i527[1]
  i526.m_AsymptoteSlip = i527[2]
  i526.m_AsymptoteValue = i527[3]
  i526.m_Stiffness = i527[4]
  return i526
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i528 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i529 = data
  i528.m_LowerAngle = i529[0]
  i528.m_UpperAngle = i529[1]
  return i528
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i530 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i531 = data
  i530.m_MotorSpeed = i531[0]
  i530.m_MaximumMotorTorque = i531[1]
  return i530
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i532 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i533 = data
  i532.m_DampingRatio = i533[0]
  i532.m_Frequency = i533[1]
  i532.m_Angle = i533[2]
  return i532
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i534 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i535 = data
  i534.m_LowerTranslation = i535[0]
  i534.m_UpperTranslation = i535[1]
  return i534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i536 = root || new pc.UnityMaterial()
  var i537 = data
  i536.name = i537[0]
  request.r(i537[1], i537[2], 0, i536, 'shader')
  i536.renderQueue = i537[3]
  i536.enableInstancing = !!i537[4]
  var i539 = i537[5]
  var i538 = []
  for(var i = 0; i < i539.length; i += 1) {
    i538.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i539[i + 0]) );
  }
  i536.floatParameters = i538
  var i541 = i537[6]
  var i540 = []
  for(var i = 0; i < i541.length; i += 1) {
    i540.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i541[i + 0]) );
  }
  i536.colorParameters = i540
  var i543 = i537[7]
  var i542 = []
  for(var i = 0; i < i543.length; i += 1) {
    i542.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i543[i + 0]) );
  }
  i536.vectorParameters = i542
  var i545 = i537[8]
  var i544 = []
  for(var i = 0; i < i545.length; i += 1) {
    i544.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i545[i + 0]) );
  }
  i536.textureParameters = i544
  var i547 = i537[9]
  var i546 = []
  for(var i = 0; i < i547.length; i += 1) {
    i546.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i547[i + 0]) );
  }
  i536.materialFlags = i546
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i551 = data
  i550.name = i551[0]
  i550.value = i551[1]
  return i550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i555 = data
  i554.name = i555[0]
  i554.value = new pc.Color(i555[1], i555[2], i555[3], i555[4])
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i559 = data
  i558.name = i559[0]
  i558.value = new pc.Vec4( i559[1], i559[2], i559[3], i559[4] )
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i563 = data
  i562.name = i563[0]
  request.r(i563[1], i563[2], 0, i562, 'value')
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i567 = data
  i566.name = i567[0]
  i566.enabled = !!i567[1]
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i569 = data
  i568.name = i569[0]
  i568.halfPrecision = !!i569[1]
  i568.useUInt32IndexFormat = !!i569[2]
  i568.vertexCount = i569[3]
  i568.aabb = i569[4]
  var i571 = i569[5]
  var i570 = []
  for(var i = 0; i < i571.length; i += 1) {
    i570.push( !!i571[i + 0] );
  }
  i568.streams = i570
  i568.vertices = i569[6]
  var i573 = i569[7]
  var i572 = []
  for(var i = 0; i < i573.length; i += 1) {
    i572.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i573[i + 0]) );
  }
  i568.subMeshes = i572
  var i575 = i569[8]
  var i574 = []
  for(var i = 0; i < i575.length; i += 16) {
    i574.push( new pc.Mat4().setData(i575[i + 0], i575[i + 1], i575[i + 2], i575[i + 3],  i575[i + 4], i575[i + 5], i575[i + 6], i575[i + 7],  i575[i + 8], i575[i + 9], i575[i + 10], i575[i + 11],  i575[i + 12], i575[i + 13], i575[i + 14], i575[i + 15]) );
  }
  i568.bindposes = i574
  var i577 = i569[9]
  var i576 = []
  for(var i = 0; i < i577.length; i += 1) {
    i576.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i577[i + 0]) );
  }
  i568.blendShapes = i576
  return i568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i583 = data
  i582.triangles = i583[0]
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i589 = data
  i588.name = i589[0]
  var i591 = i589[1]
  var i590 = []
  for(var i = 0; i < i591.length; i += 1) {
    i590.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i591[i + 0]) );
  }
  i588.frames = i590
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i593 = data
  i592.name = i593[0]
  i592.width = i593[1]
  i592.height = i593[2]
  i592.mipmapCount = i593[3]
  i592.anisoLevel = i593[4]
  i592.filterMode = i593[5]
  i592.hdr = !!i593[6]
  i592.format = i593[7]
  i592.wrapMode = i593[8]
  i592.alphaIsTransparency = !!i593[9]
  i592.alphaSource = i593[10]
  i592.graphicsFormat = i593[11]
  i592.sRGBTexture = !!i593[12]
  i592.desiredColorSpace = i593[13]
  i592.wrapU = i593[14]
  i592.wrapV = i593[15]
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i595 = data
  i594.position = new pc.Vec3( i595[0], i595[1], i595[2] )
  i594.scale = new pc.Vec3( i595[3], i595[4], i595[5] )
  i594.rotation = new pc.Quat(i595[6], i595[7], i595[8], i595[9])
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i597 = data
  request.r(i597[0], i597[1], 0, i596, 'sharedMesh')
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i599 = data
  request.r(i599[0], i599[1], 0, i598, 'additionalVertexStreams')
  i598.enabled = !!i599[2]
  request.r(i599[3], i599[4], 0, i598, 'sharedMaterial')
  var i601 = i599[5]
  var i600 = []
  for(var i = 0; i < i601.length; i += 2) {
  request.r(i601[i + 0], i601[i + 1], 2, i600, '')
  }
  i598.sharedMaterials = i600
  i598.receiveShadows = !!i599[6]
  i598.shadowCastingMode = i599[7]
  i598.sortingLayerID = i599[8]
  i598.sortingOrder = i599[9]
  i598.lightmapIndex = i599[10]
  i598.lightmapSceneIndex = i599[11]
  i598.lightmapScaleOffset = new pc.Vec4( i599[12], i599[13], i599[14], i599[15] )
  i598.lightProbeUsage = i599[16]
  i598.reflectionProbeUsage = i599[17]
  return i598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i605 = data
  i604.name = i605[0]
  i604.tagId = i605[1]
  i604.enabled = !!i605[2]
  i604.isStatic = !!i605[3]
  i604.layer = i605[4]
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i607 = data
  i606.name = i607[0]
  i606.atlasId = i607[1]
  i606.mipmapCount = i607[2]
  i606.hdr = !!i607[3]
  i606.size = i607[4]
  i606.anisoLevel = i607[5]
  i606.filterMode = i607[6]
  var i609 = i607[7]
  var i608 = []
  for(var i = 0; i < i609.length; i += 4) {
    i608.push( UnityEngine.Rect.MinMaxRect(i609[i + 0], i609[i + 1], i609[i + 2], i609[i + 3]) );
  }
  i606.rects = i608
  i606.wrapU = i607[8]
  i606.wrapV = i607[9]
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i613 = data
  i612.name = i613[0]
  i612.index = i613[1]
  i612.startup = !!i613[2]
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i615 = data
  i614.center = new pc.Vec3( i615[0], i615[1], i615[2] )
  i614.size = new pc.Vec3( i615[3], i615[4], i615[5] )
  i614.enabled = !!i615[6]
  i614.isTrigger = !!i615[7]
  request.r(i615[8], i615[9], 0, i614, 'material')
  return i614
}

Deserializers["CollisionHandler"] = function (request, data, root) {
  var i616 = root || request.c( 'CollisionHandler' )
  var i617 = data
  i616.collisionIndex = i617[0]
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i619 = data
  i618.enabled = !!i619[0]
  i618.type = i619[1]
  i618.color = new pc.Color(i619[2], i619[3], i619[4], i619[5])
  i618.cullingMask = i619[6]
  i618.intensity = i619[7]
  i618.range = i619[8]
  i618.spotAngle = i619[9]
  i618.shadows = i619[10]
  i618.shadowNormalBias = i619[11]
  i618.shadowBias = i619[12]
  i618.shadowStrength = i619[13]
  i618.shadowResolution = i619[14]
  i618.lightmapBakeType = i619[15]
  i618.renderMode = i619[16]
  request.r(i619[17], i619[18], 0, i618, 'cookie')
  i618.cookieSize = i619[19]
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i621 = data
  i620.enabled = !!i621[0]
  i620.aspect = i621[1]
  i620.orthographic = !!i621[2]
  i620.orthographicSize = i621[3]
  i620.backgroundColor = new pc.Color(i621[4], i621[5], i621[6], i621[7])
  i620.nearClipPlane = i621[8]
  i620.farClipPlane = i621[9]
  i620.fieldOfView = i621[10]
  i620.depth = i621[11]
  i620.clearFlags = i621[12]
  i620.cullingMask = i621[13]
  i620.rect = i621[14]
  request.r(i621[15], i621[16], 0, i620, 'targetTexture')
  i620.usePhysicalProperties = !!i621[17]
  i620.focalLength = i621[18]
  i620.sensorSize = new pc.Vec2( i621[19], i621[20] )
  i620.lensShift = new pc.Vec2( i621[21], i621[22] )
  i620.gateFit = i621[23]
  i620.commandBufferCount = i621[24]
  i620.cameraType = i621[25]
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i623 = data
  i622.enabled = !!i623[0]
  i622.isTrigger = !!i623[1]
  request.r(i623[2], i623[3], 0, i622, 'material')
  i622.center = new pc.Vec3( i623[4], i623[5], i623[6] )
  i622.radius = i623[7]
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i625 = data
  i624.mass = i625[0]
  i624.drag = i625[1]
  i624.angularDrag = i625[2]
  i624.useGravity = !!i625[3]
  i624.isKinematic = !!i625[4]
  i624.constraints = i625[5]
  i624.maxAngularVelocity = i625[6]
  i624.collisionDetectionMode = i625[7]
  i624.interpolation = i625[8]
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i627 = data
  i626.enabled = !!i627[0]
  request.r(i627[1], i627[2], 0, i626, 'sharedMaterial')
  var i629 = i627[3]
  var i628 = []
  for(var i = 0; i < i629.length; i += 2) {
  request.r(i629[i + 0], i629[i + 1], 2, i628, '')
  }
  i626.sharedMaterials = i628
  i626.receiveShadows = !!i627[4]
  i626.shadowCastingMode = i627[5]
  i626.sortingLayerID = i627[6]
  i626.sortingOrder = i627[7]
  i626.lightmapIndex = i627[8]
  i626.lightmapSceneIndex = i627[9]
  i626.lightmapScaleOffset = new pc.Vec4( i627[10], i627[11], i627[12], i627[13] )
  i626.lightProbeUsage = i627[14]
  i626.reflectionProbeUsage = i627[15]
  var i631 = i627[16]
  var i630 = []
  for(var i = 0; i < i631.length; i += 3) {
    i630.push( new pc.Vec3( i631[i + 0], i631[i + 1], i631[i + 2] ) );
  }
  i626.positions = i630
  i626.positionCount = i627[17]
  i626.time = i627[18]
  i626.startWidth = i627[19]
  i626.endWidth = i627[20]
  i626.widthMultiplier = i627[21]
  i626.autodestruct = !!i627[22]
  i626.emitting = !!i627[23]
  i626.numCornerVertices = i627[24]
  i626.numCapVertices = i627[25]
  i626.minVertexDistance = i627[26]
  i626.colorGradient = i627[27] ? new pc.ColorGradient(i627[27][0], i627[27][1], i627[27][2]) : null
  i626.startColor = new pc.Color(i627[28], i627[29], i627[30], i627[31])
  i626.endColor = new pc.Color(i627[32], i627[33], i627[34], i627[35])
  i626.generateLightingData = !!i627[36]
  i626.textureMode = i627[37]
  i626.alignment = i627[38]
  i626.widthCurve = new pc.AnimationCurve( { keys_flow: i627[39] } )
  return i626
}

Deserializers["BallThrower"] = function (request, data, root) {
  var i634 = root || request.c( 'BallThrower' )
  var i635 = data
  i634.throwForceMultiplier = i635[0]
  i634.maxForce = i635[1]
  i634.forwardZ = i635[2]
  i634.verticalBoost = i635[3]
  i634.spinMultiplier = i635[4]
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i637 = data
  i636.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i637[0], i636.main)
  i636.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i637[1], i636.colorBySpeed)
  i636.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i637[2], i636.colorOverLifetime)
  i636.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i637[3], i636.emission)
  i636.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i637[4], i636.rotationBySpeed)
  i636.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i637[5], i636.rotationOverLifetime)
  i636.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i637[6], i636.shape)
  i636.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i637[7], i636.sizeBySpeed)
  i636.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i637[8], i636.sizeOverLifetime)
  i636.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i637[9], i636.textureSheetAnimation)
  i636.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i637[10], i636.velocityOverLifetime)
  i636.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i637[11], i636.noise)
  i636.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i637[12], i636.inheritVelocity)
  i636.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i637[13], i636.forceOverLifetime)
  i636.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i637[14], i636.limitVelocityOverLifetime)
  i636.useAutoRandomSeed = !!i637[15]
  i636.randomSeed = i637[16]
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i638 = root || new pc.ParticleSystemMain()
  var i639 = data
  i638.duration = i639[0]
  i638.loop = !!i639[1]
  i638.prewarm = !!i639[2]
  i638.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[3], i638.startDelay)
  i638.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[4], i638.startLifetime)
  i638.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[5], i638.startSpeed)
  i638.startSize3D = !!i639[6]
  i638.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[7], i638.startSizeX)
  i638.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[8], i638.startSizeY)
  i638.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[9], i638.startSizeZ)
  i638.startRotation3D = !!i639[10]
  i638.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[11], i638.startRotationX)
  i638.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[12], i638.startRotationY)
  i638.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[13], i638.startRotationZ)
  i638.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i639[14], i638.startColor)
  i638.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[15], i638.gravityModifier)
  i638.simulationSpace = i639[16]
  request.r(i639[17], i639[18], 0, i638, 'customSimulationSpace')
  i638.simulationSpeed = i639[19]
  i638.useUnscaledTime = !!i639[20]
  i638.scalingMode = i639[21]
  i638.playOnAwake = !!i639[22]
  i638.maxParticles = i639[23]
  i638.emitterVelocityMode = i639[24]
  i638.stopAction = i639[25]
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i640 = root || new pc.MinMaxCurve()
  var i641 = data
  i640.mode = i641[0]
  i640.curveMin = new pc.AnimationCurve( { keys_flow: i641[1] } )
  i640.curveMax = new pc.AnimationCurve( { keys_flow: i641[2] } )
  i640.curveMultiplier = i641[3]
  i640.constantMin = i641[4]
  i640.constantMax = i641[5]
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i642 = root || new pc.MinMaxGradient()
  var i643 = data
  i642.mode = i643[0]
  i642.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i643[1], i642.gradientMin)
  i642.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i643[2], i642.gradientMax)
  i642.colorMin = new pc.Color(i643[3], i643[4], i643[5], i643[6])
  i642.colorMax = new pc.Color(i643[7], i643[8], i643[9], i643[10])
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i645 = data
  i644.mode = i645[0]
  var i647 = i645[1]
  var i646 = []
  for(var i = 0; i < i647.length; i += 1) {
    i646.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i647[i + 0]) );
  }
  i644.colorKeys = i646
  var i649 = i645[2]
  var i648 = []
  for(var i = 0; i < i649.length; i += 1) {
    i648.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i649[i + 0]) );
  }
  i644.alphaKeys = i648
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i650 = root || new pc.ParticleSystemColorBySpeed()
  var i651 = data
  i650.enabled = !!i651[0]
  i650.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i651[1], i650.color)
  i650.range = new pc.Vec2( i651[2], i651[3] )
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i655 = data
  i654.color = new pc.Color(i655[0], i655[1], i655[2], i655[3])
  i654.time = i655[4]
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i659 = data
  i658.alpha = i659[0]
  i658.time = i659[1]
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i660 = root || new pc.ParticleSystemColorOverLifetime()
  var i661 = data
  i660.enabled = !!i661[0]
  i660.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i661[1], i660.color)
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i662 = root || new pc.ParticleSystemEmitter()
  var i663 = data
  i662.enabled = !!i663[0]
  i662.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i663[1], i662.rateOverTime)
  i662.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i663[2], i662.rateOverDistance)
  var i665 = i663[3]
  var i664 = []
  for(var i = 0; i < i665.length; i += 1) {
    i664.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i665[i + 0]) );
  }
  i662.bursts = i664
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i668 = root || new pc.ParticleSystemBurst()
  var i669 = data
  i668.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i669[0], i668.count)
  i668.cycleCount = i669[1]
  i668.minCount = i669[2]
  i668.maxCount = i669[3]
  i668.repeatInterval = i669[4]
  i668.time = i669[5]
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i670 = root || new pc.ParticleSystemRotationBySpeed()
  var i671 = data
  i670.enabled = !!i671[0]
  i670.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i671[1], i670.x)
  i670.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i671[2], i670.y)
  i670.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i671[3], i670.z)
  i670.separateAxes = !!i671[4]
  i670.range = new pc.Vec2( i671[5], i671[6] )
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i672 = root || new pc.ParticleSystemRotationOverLifetime()
  var i673 = data
  i672.enabled = !!i673[0]
  i672.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i673[1], i672.x)
  i672.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i673[2], i672.y)
  i672.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i673[3], i672.z)
  i672.separateAxes = !!i673[4]
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i674 = root || new pc.ParticleSystemShape()
  var i675 = data
  i674.enabled = !!i675[0]
  i674.shapeType = i675[1]
  i674.randomDirectionAmount = i675[2]
  i674.sphericalDirectionAmount = i675[3]
  i674.randomPositionAmount = i675[4]
  i674.alignToDirection = !!i675[5]
  i674.radius = i675[6]
  i674.radiusMode = i675[7]
  i674.radiusSpread = i675[8]
  i674.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[9], i674.radiusSpeed)
  i674.radiusThickness = i675[10]
  i674.angle = i675[11]
  i674.length = i675[12]
  i674.boxThickness = new pc.Vec3( i675[13], i675[14], i675[15] )
  i674.meshShapeType = i675[16]
  request.r(i675[17], i675[18], 0, i674, 'mesh')
  request.r(i675[19], i675[20], 0, i674, 'meshRenderer')
  request.r(i675[21], i675[22], 0, i674, 'skinnedMeshRenderer')
  i674.useMeshMaterialIndex = !!i675[23]
  i674.meshMaterialIndex = i675[24]
  i674.useMeshColors = !!i675[25]
  i674.normalOffset = i675[26]
  i674.arc = i675[27]
  i674.arcMode = i675[28]
  i674.arcSpread = i675[29]
  i674.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[30], i674.arcSpeed)
  i674.donutRadius = i675[31]
  i674.position = new pc.Vec3( i675[32], i675[33], i675[34] )
  i674.rotation = new pc.Vec3( i675[35], i675[36], i675[37] )
  i674.scale = new pc.Vec3( i675[38], i675[39], i675[40] )
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i676 = root || new pc.ParticleSystemSizeBySpeed()
  var i677 = data
  i676.enabled = !!i677[0]
  i676.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i677[1], i676.x)
  i676.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i677[2], i676.y)
  i676.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i677[3], i676.z)
  i676.separateAxes = !!i677[4]
  i676.range = new pc.Vec2( i677[5], i677[6] )
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i678 = root || new pc.ParticleSystemSizeOverLifetime()
  var i679 = data
  i678.enabled = !!i679[0]
  i678.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i679[1], i678.x)
  i678.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i679[2], i678.y)
  i678.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i679[3], i678.z)
  i678.separateAxes = !!i679[4]
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i680 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i681 = data
  i680.enabled = !!i681[0]
  i680.mode = i681[1]
  i680.animation = i681[2]
  i680.numTilesX = i681[3]
  i680.numTilesY = i681[4]
  i680.useRandomRow = !!i681[5]
  i680.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i681[6], i680.frameOverTime)
  i680.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i681[7], i680.startFrame)
  i680.cycleCount = i681[8]
  i680.rowIndex = i681[9]
  i680.flipU = i681[10]
  i680.flipV = i681[11]
  i680.spriteCount = i681[12]
  var i683 = i681[13]
  var i682 = []
  for(var i = 0; i < i683.length; i += 2) {
  request.r(i683[i + 0], i683[i + 1], 2, i682, '')
  }
  i680.sprites = i682
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i686 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i687 = data
  i686.enabled = !!i687[0]
  i686.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[1], i686.x)
  i686.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[2], i686.y)
  i686.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[3], i686.z)
  i686.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[4], i686.radial)
  i686.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[5], i686.speedModifier)
  i686.space = i687[6]
  i686.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[7], i686.orbitalX)
  i686.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[8], i686.orbitalY)
  i686.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[9], i686.orbitalZ)
  i686.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[10], i686.orbitalOffsetX)
  i686.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[11], i686.orbitalOffsetY)
  i686.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[12], i686.orbitalOffsetZ)
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i688 = root || new pc.ParticleSystemNoise()
  var i689 = data
  i688.enabled = !!i689[0]
  i688.separateAxes = !!i689[1]
  i688.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[2], i688.strengthX)
  i688.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[3], i688.strengthY)
  i688.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[4], i688.strengthZ)
  i688.frequency = i689[5]
  i688.damping = !!i689[6]
  i688.octaveCount = i689[7]
  i688.octaveMultiplier = i689[8]
  i688.octaveScale = i689[9]
  i688.quality = i689[10]
  i688.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[11], i688.scrollSpeed)
  i688.scrollSpeedMultiplier = i689[12]
  i688.remapEnabled = !!i689[13]
  i688.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[14], i688.remapX)
  i688.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[15], i688.remapY)
  i688.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[16], i688.remapZ)
  i688.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[17], i688.positionAmount)
  i688.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[18], i688.rotationAmount)
  i688.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[19], i688.sizeAmount)
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i690 = root || new pc.ParticleSystemInheritVelocity()
  var i691 = data
  i690.enabled = !!i691[0]
  i690.mode = i691[1]
  i690.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[2], i690.curve)
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i692 = root || new pc.ParticleSystemForceOverLifetime()
  var i693 = data
  i692.enabled = !!i693[0]
  i692.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[1], i692.x)
  i692.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[2], i692.y)
  i692.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[3], i692.z)
  i692.space = i693[4]
  i692.randomized = !!i693[5]
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i694 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i695 = data
  i694.enabled = !!i695[0]
  i694.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i695[1], i694.limit)
  i694.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i695[2], i694.limitX)
  i694.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i695[3], i694.limitY)
  i694.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i695[4], i694.limitZ)
  i694.dampen = i695[5]
  i694.separateAxes = !!i695[6]
  i694.space = i695[7]
  i694.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i695[8], i694.drag)
  i694.multiplyDragByParticleSize = !!i695[9]
  i694.multiplyDragByParticleVelocity = !!i695[10]
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i697 = data
  i696.enabled = !!i697[0]
  request.r(i697[1], i697[2], 0, i696, 'sharedMaterial')
  var i699 = i697[3]
  var i698 = []
  for(var i = 0; i < i699.length; i += 2) {
  request.r(i699[i + 0], i699[i + 1], 2, i698, '')
  }
  i696.sharedMaterials = i698
  i696.receiveShadows = !!i697[4]
  i696.shadowCastingMode = i697[5]
  i696.sortingLayerID = i697[6]
  i696.sortingOrder = i697[7]
  i696.lightmapIndex = i697[8]
  i696.lightmapSceneIndex = i697[9]
  i696.lightmapScaleOffset = new pc.Vec4( i697[10], i697[11], i697[12], i697[13] )
  i696.lightProbeUsage = i697[14]
  i696.reflectionProbeUsage = i697[15]
  request.r(i697[16], i697[17], 0, i696, 'mesh')
  i696.meshCount = i697[18]
  i696.activeVertexStreamsCount = i697[19]
  i696.alignment = i697[20]
  i696.renderMode = i697[21]
  i696.sortMode = i697[22]
  i696.lengthScale = i697[23]
  i696.velocityScale = i697[24]
  i696.cameraVelocityScale = i697[25]
  i696.normalDirection = i697[26]
  i696.sortingFudge = i697[27]
  i696.minParticleSize = i697[28]
  i696.maxParticleSize = i697[29]
  i696.pivot = new pc.Vec3( i697[30], i697[31], i697[32] )
  request.r(i697[33], i697[34], 0, i696, 'trailMaterial')
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint"] = function (request, data, root) {
  var i700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint' )
  var i701 = data
  i700.useMotor = !!i701[0]
  i700.useLimits = !!i701[1]
  i700.useSpring = !!i701[2]
  i700.limits = request.d('UnityEngine.JointLimits', i701[3], i700.limits)
  i700.motor = request.d('UnityEngine.JointMotor', i701[4], i700.motor)
  i700.spring = request.d('UnityEngine.JointSpring', i701[5], i700.spring)
  request.r(i701[6], i701[7], 0, i700, 'connectedBody')
  i700.axis = new pc.Vec3( i701[8], i701[9], i701[10] )
  i700.anchor = new pc.Vec3( i701[11], i701[12], i701[13] )
  i700.connectedAnchor = new pc.Vec3( i701[14], i701[15], i701[16] )
  i700.autoConfigureConnectedAnchor = !!i701[17]
  i700.massScale = i701[18]
  i700.connectedMassScale = i701[19]
  i700.enableCollision = !!i701[20]
  i700.breakForce = i701[21]
  i700.breakTorque = i701[22]
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i703 = data
  i702.center = new pc.Vec3( i703[0], i703[1], i703[2] )
  i702.radius = i703[3]
  i702.height = i703[4]
  i702.direction = i703[5]
  i702.enabled = !!i703[6]
  i702.isTrigger = !!i703[7]
  request.r(i703[8], i703[9], 0, i702, 'material')
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i705 = data
  i704.enabled = !!i705[0]
  request.r(i705[1], i705[2], 0, i704, 'sharedMaterial')
  var i707 = i705[3]
  var i706 = []
  for(var i = 0; i < i707.length; i += 2) {
  request.r(i707[i + 0], i707[i + 1], 2, i706, '')
  }
  i704.sharedMaterials = i706
  i704.receiveShadows = !!i705[4]
  i704.shadowCastingMode = i705[5]
  i704.sortingLayerID = i705[6]
  i704.sortingOrder = i705[7]
  i704.lightmapIndex = i705[8]
  i704.lightmapSceneIndex = i705[9]
  i704.lightmapScaleOffset = new pc.Vec4( i705[10], i705[11], i705[12], i705[13] )
  i704.lightProbeUsage = i705[14]
  i704.reflectionProbeUsage = i705[15]
  request.r(i705[16], i705[17], 0, i704, 'sharedMesh')
  var i709 = i705[18]
  var i708 = []
  for(var i = 0; i < i709.length; i += 2) {
  request.r(i709[i + 0], i709[i + 1], 2, i708, '')
  }
  i704.bones = i708
  i704.updateWhenOffscreen = !!i705[19]
  i704.localBounds = i705[20]
  request.r(i705[21], i705[22], 0, i704, 'rootBone')
  var i711 = i705[23]
  var i710 = []
  for(var i = 0; i < i711.length; i += 1) {
    i710.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i711[i + 0]) );
  }
  i704.blendShapesWeights = i710
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i717 = data
  i716.weight = i717[0]
  return i716
}

Deserializers["RecordDunkTrigger"] = function (request, data, root) {
  var i718 = root || request.c( 'RecordDunkTrigger' )
  var i719 = data
  return i718
}

Deserializers["DunkTrigger"] = function (request, data, root) {
  var i720 = root || request.c( 'DunkTrigger' )
  var i721 = data
  i720.triggerName = i721[0]
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i723 = data
  i722.pivot = new pc.Vec2( i723[0], i723[1] )
  i722.anchorMin = new pc.Vec2( i723[2], i723[3] )
  i722.anchorMax = new pc.Vec2( i723[4], i723[5] )
  i722.sizeDelta = new pc.Vec2( i723[6], i723[7] )
  i722.anchoredPosition3D = new pc.Vec3( i723[8], i723[9], i723[10] )
  i722.rotation = new pc.Quat(i723[11], i723[12], i723[13], i723[14])
  i722.scale = new pc.Vec3( i723[15], i723[16], i723[17] )
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i725 = data
  i724.cullTransparentMesh = !!i725[0]
  return i724
}

Deserializers["BallSelectionController"] = function (request, data, root) {
  var i726 = root || request.c( 'BallSelectionController' )
  var i727 = data
  i726.rotationSpeed = i727[0]
  request.r(i727[1], i727[2], 0, i726, 'ballSelectionRing')
  i726.snapDuration = i727[3]
  var i729 = i727[4]
  var i728 = []
  for(var i = 0; i < i729.length; i += 2) {
  request.r(i729[i + 0], i729[i + 1], 2, i728, '')
  }
  i726.selectionBalls = i728
  var i731 = i727[5]
  var i730 = []
  for(var i = 0; i < i731.length; i += 2) {
  request.r(i731[i + 0], i731[i + 1], 2, i730, '')
  }
  i726.balls = i730
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i735 = data
  i734.enabled = !!i735[0]
  request.r(i735[1], i735[2], 0, i734, 'sharedMaterial')
  var i737 = i735[3]
  var i736 = []
  for(var i = 0; i < i737.length; i += 2) {
  request.r(i737[i + 0], i737[i + 1], 2, i736, '')
  }
  i734.sharedMaterials = i736
  i734.receiveShadows = !!i735[4]
  i734.shadowCastingMode = i735[5]
  i734.sortingLayerID = i735[6]
  i734.sortingOrder = i735[7]
  i734.lightmapIndex = i735[8]
  i734.lightmapSceneIndex = i735[9]
  i734.lightmapScaleOffset = new pc.Vec4( i735[10], i735[11], i735[12], i735[13] )
  i734.lightProbeUsage = i735[14]
  i734.reflectionProbeUsage = i735[15]
  i734.color = new pc.Color(i735[16], i735[17], i735[18], i735[19])
  request.r(i735[20], i735[21], 0, i734, 'sprite')
  i734.flipX = !!i735[22]
  i734.flipY = !!i735[23]
  i734.drawMode = i735[24]
  i734.size = new pc.Vec2( i735[25], i735[26] )
  i734.tileMode = i735[27]
  i734.adaptiveModeThreshold = i735[28]
  i734.maskInteraction = i735[29]
  i734.spriteSortPoint = i735[30]
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i739 = data
  request.r(i739[0], i739[1], 0, i738, 'animatorController')
  request.r(i739[2], i739[3], 0, i738, 'avatar')
  i738.updateMode = i739[4]
  i738.hasTransformHierarchy = !!i739[5]
  i738.applyRootMotion = !!i739[6]
  var i741 = i739[7]
  var i740 = []
  for(var i = 0; i < i741.length; i += 2) {
  request.r(i741[i + 0], i741[i + 1], 2, i740, '')
  }
  i738.humanBones = i740
  i738.enabled = !!i739[8]
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i743 = data
  i742.enabled = !!i743[0]
  i742.planeDistance = i743[1]
  i742.referencePixelsPerUnit = i743[2]
  i742.isFallbackOverlay = !!i743[3]
  i742.renderMode = i743[4]
  i742.renderOrder = i743[5]
  i742.sortingLayerName = i743[6]
  i742.sortingOrder = i743[7]
  i742.scaleFactor = i743[8]
  request.r(i743[9], i743[10], 0, i742, 'worldCamera')
  i742.overrideSorting = !!i743[11]
  i742.pixelPerfect = !!i743[12]
  i742.targetDisplay = i743[13]
  i742.overridePixelPerfect = !!i743[14]
  return i742
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i744 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i745 = data
  i744.m_UiScaleMode = i745[0]
  i744.m_ReferencePixelsPerUnit = i745[1]
  i744.m_ScaleFactor = i745[2]
  i744.m_ReferenceResolution = new pc.Vec2( i745[3], i745[4] )
  i744.m_ScreenMatchMode = i745[5]
  i744.m_MatchWidthOrHeight = i745[6]
  i744.m_PhysicalUnit = i745[7]
  i744.m_FallbackScreenDPI = i745[8]
  i744.m_DefaultSpriteDPI = i745[9]
  i744.m_DynamicPixelsPerUnit = i745[10]
  i744.m_PresetInfoIsWorld = !!i745[11]
  return i744
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i746 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i747 = data
  i746.m_IgnoreReversedGraphics = !!i747[0]
  i746.m_BlockingObjects = i747[1]
  i746.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i747[2] )
  return i746
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i748 = root || request.c( 'UnityEngine.UI.Image' )
  var i749 = data
  request.r(i749[0], i749[1], 0, i748, 'm_Sprite')
  i748.m_Type = i749[2]
  i748.m_PreserveAspect = !!i749[3]
  i748.m_FillCenter = !!i749[4]
  i748.m_FillMethod = i749[5]
  i748.m_FillAmount = i749[6]
  i748.m_FillClockwise = !!i749[7]
  i748.m_FillOrigin = i749[8]
  i748.m_UseSpriteMesh = !!i749[9]
  i748.m_PixelsPerUnitMultiplier = i749[10]
  request.r(i749[11], i749[12], 0, i748, 'm_Material')
  i748.m_Maskable = !!i749[13]
  i748.m_Color = new pc.Color(i749[14], i749[15], i749[16], i749[17])
  i748.m_RaycastTarget = !!i749[18]
  i748.m_RaycastPadding = new pc.Vec4( i749[19], i749[20], i749[21], i749[22] )
  return i748
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i750 = root || request.c( 'UnityEngine.UI.Button' )
  var i751 = data
  i750.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i751[0], i750.m_OnClick)
  i750.m_Navigation = request.d('UnityEngine.UI.Navigation', i751[1], i750.m_Navigation)
  i750.m_Transition = i751[2]
  i750.m_Colors = request.d('UnityEngine.UI.ColorBlock', i751[3], i750.m_Colors)
  i750.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i751[4], i750.m_SpriteState)
  i750.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i751[5], i750.m_AnimationTriggers)
  i750.m_Interactable = !!i751[6]
  request.r(i751[7], i751[8], 0, i750, 'm_TargetGraphic')
  return i750
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i752 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i753 = data
  i752.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i753[0], i752.m_PersistentCalls)
  return i752
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i754 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i755 = data
  var i757 = i755[0]
  var i756 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i757.length; i += 1) {
    i756.add(request.d('UnityEngine.Events.PersistentCall', i757[i + 0]));
  }
  i754.m_Calls = i756
  return i754
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i760 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i761 = data
  request.r(i761[0], i761[1], 0, i760, 'm_Target')
  i760.m_TargetAssemblyTypeName = i761[2]
  i760.m_MethodName = i761[3]
  i760.m_Mode = i761[4]
  i760.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i761[5], i760.m_Arguments)
  i760.m_CallState = i761[6]
  return i760
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i762 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i763 = data
  request.r(i763[0], i763[1], 0, i762, 'm_ObjectArgument')
  i762.m_ObjectArgumentAssemblyTypeName = i763[2]
  i762.m_IntArgument = i763[3]
  i762.m_FloatArgument = i763[4]
  i762.m_StringArgument = i763[5]
  i762.m_BoolArgument = !!i763[6]
  return i762
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i764 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i765 = data
  i764.m_Mode = i765[0]
  i764.m_WrapAround = !!i765[1]
  request.r(i765[2], i765[3], 0, i764, 'm_SelectOnUp')
  request.r(i765[4], i765[5], 0, i764, 'm_SelectOnDown')
  request.r(i765[6], i765[7], 0, i764, 'm_SelectOnLeft')
  request.r(i765[8], i765[9], 0, i764, 'm_SelectOnRight')
  return i764
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i766 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i767 = data
  i766.m_NormalColor = new pc.Color(i767[0], i767[1], i767[2], i767[3])
  i766.m_HighlightedColor = new pc.Color(i767[4], i767[5], i767[6], i767[7])
  i766.m_PressedColor = new pc.Color(i767[8], i767[9], i767[10], i767[11])
  i766.m_SelectedColor = new pc.Color(i767[12], i767[13], i767[14], i767[15])
  i766.m_DisabledColor = new pc.Color(i767[16], i767[17], i767[18], i767[19])
  i766.m_ColorMultiplier = i767[20]
  i766.m_FadeDuration = i767[21]
  return i766
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i768 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i769 = data
  request.r(i769[0], i769[1], 0, i768, 'm_HighlightedSprite')
  request.r(i769[2], i769[3], 0, i768, 'm_PressedSprite')
  request.r(i769[4], i769[5], 0, i768, 'm_SelectedSprite')
  request.r(i769[6], i769[7], 0, i768, 'm_DisabledSprite')
  return i768
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i770 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i771 = data
  i770.m_NormalTrigger = i771[0]
  i770.m_HighlightedTrigger = i771[1]
  i770.m_PressedTrigger = i771[2]
  i770.m_SelectedTrigger = i771[3]
  i770.m_DisabledTrigger = i771[4]
  return i770
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i772 = root || request.c( 'UnityEngine.UI.Text' )
  var i773 = data
  i772.m_FontData = request.d('UnityEngine.UI.FontData', i773[0], i772.m_FontData)
  i772.m_Text = i773[1]
  request.r(i773[2], i773[3], 0, i772, 'm_Material')
  i772.m_Maskable = !!i773[4]
  i772.m_Color = new pc.Color(i773[5], i773[6], i773[7], i773[8])
  i772.m_RaycastTarget = !!i773[9]
  i772.m_RaycastPadding = new pc.Vec4( i773[10], i773[11], i773[12], i773[13] )
  return i772
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i774 = root || request.c( 'UnityEngine.UI.FontData' )
  var i775 = data
  request.r(i775[0], i775[1], 0, i774, 'm_Font')
  i774.m_FontSize = i775[2]
  i774.m_FontStyle = i775[3]
  i774.m_BestFit = !!i775[4]
  i774.m_MinSize = i775[5]
  i774.m_MaxSize = i775[6]
  i774.m_Alignment = i775[7]
  i774.m_AlignByGeometry = !!i775[8]
  i774.m_RichText = !!i775[9]
  i774.m_HorizontalOverflow = i775[10]
  i774.m_VerticalOverflow = i775[11]
  i774.m_LineSpacing = i775[12]
  return i774
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i776 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i777 = data
  request.r(i777[0], i777[1], 0, i776, 'm_FirstSelected')
  i776.m_sendNavigationEvents = !!i777[2]
  i776.m_DragThreshold = i777[3]
  return i776
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i778 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i779 = data
  i778.m_HorizontalAxis = i779[0]
  i778.m_VerticalAxis = i779[1]
  i778.m_SubmitButton = i779[2]
  i778.m_CancelButton = i779[3]
  i778.m_InputActionsPerSecond = i779[4]
  i778.m_RepeatDelay = i779[5]
  i778.m_ForceModuleActive = !!i779[6]
  i778.m_SendPointerHoverToParent = !!i779[7]
  return i778
}

Deserializers["CameraController"] = function (request, data, root) {
  var i780 = root || request.c( 'CameraController' )
  var i781 = data
  request.r(i781[0], i781[1], 0, i780, 'camera1')
  request.r(i781[2], i781[3], 0, i780, 'camera2')
  request.r(i781[4], i781[5], 0, i780, 'mainCanvas')
  request.r(i781[6], i781[7], 0, i780, 'selectionCanvas')
  request.r(i781[8], i781[9], 0, i780, 'ballSelection')
  return i780
}

Deserializers["GameManager"] = function (request, data, root) {
  var i782 = root || request.c( 'GameManager' )
  var i783 = data
  request.r(i783[0], i783[1], 0, i782, 'currentScoreText')
  request.r(i783[2], i783[3], 0, i782, 'highScoreText')
  request.r(i783[4], i783[5], 0, i782, 'boardText')
  request.r(i783[6], i783[7], 0, i782, 'perfectParticle')
  request.r(i783[8], i783[9], 0, i782, 'fireParticle')
  return i782
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i784 = root || request.c( 'AudioManager' )
  var i785 = data
  request.r(i785[0], i785[1], 0, i784, 'soundAudioSource')
  request.r(i785[2], i785[3], 0, i784, 'collisionAudioSource')
  request.r(i785[4], i785[5], 0, i784, 'throwAudioSource')
  request.r(i785[6], i785[7], 0, i784, 'musicAudioSource')
  request.r(i785[8], i785[9], 0, i784, 'basketPerfectSound')
  request.r(i785[10], i785[11], 0, i784, 'buttonSound')
  var i787 = i785[12]
  var i786 = []
  for(var i = 0; i < i787.length; i += 2) {
  request.r(i787[i + 0], i787[i + 1], 2, i786, '')
  }
  i784.ballCollisionSounds = i786
  request.r(i785[13], i785[14], 0, i784, 'throwBallSound')
  request.r(i785[15], i785[16], 0, i784, 'musicSound')
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i791 = data
  request.r(i791[0], i791[1], 0, i790, 'clip')
  request.r(i791[2], i791[3], 0, i790, 'outputAudioMixerGroup')
  i790.playOnAwake = !!i791[4]
  i790.loop = !!i791[5]
  i790.time = i791[6]
  i790.volume = i791[7]
  i790.pitch = i791[8]
  i790.enabled = !!i791[9]
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i793 = data
  i792.ambientIntensity = i793[0]
  i792.reflectionIntensity = i793[1]
  i792.ambientMode = i793[2]
  i792.ambientLight = new pc.Color(i793[3], i793[4], i793[5], i793[6])
  i792.ambientSkyColor = new pc.Color(i793[7], i793[8], i793[9], i793[10])
  i792.ambientGroundColor = new pc.Color(i793[11], i793[12], i793[13], i793[14])
  i792.ambientEquatorColor = new pc.Color(i793[15], i793[16], i793[17], i793[18])
  i792.fogColor = new pc.Color(i793[19], i793[20], i793[21], i793[22])
  i792.fogEndDistance = i793[23]
  i792.fogStartDistance = i793[24]
  i792.fogDensity = i793[25]
  i792.fog = !!i793[26]
  request.r(i793[27], i793[28], 0, i792, 'skybox')
  i792.fogMode = i793[29]
  var i795 = i793[30]
  var i794 = []
  for(var i = 0; i < i795.length; i += 1) {
    i794.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i795[i + 0]) );
  }
  i792.lightmaps = i794
  i792.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i793[31], i792.lightProbes)
  i792.lightmapsMode = i793[32]
  i792.mixedBakeMode = i793[33]
  i792.environmentLightingMode = i793[34]
  i792.ambientProbe = new pc.SphericalHarmonicsL2(i793[35])
  i792.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i793[36])
  i792.useReferenceAmbientProbe = !!i793[37]
  request.r(i793[38], i793[39], 0, i792, 'customReflection')
  request.r(i793[40], i793[41], 0, i792, 'defaultReflection')
  i792.defaultReflectionMode = i793[42]
  i792.defaultReflectionResolution = i793[43]
  i792.sunLightObjectId = i793[44]
  i792.pixelLightCount = i793[45]
  i792.defaultReflectionHDR = !!i793[46]
  i792.hasLightDataAsset = !!i793[47]
  i792.hasManualGenerate = !!i793[48]
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i799 = data
  request.r(i799[0], i799[1], 0, i798, 'lightmapColor')
  request.r(i799[2], i799[3], 0, i798, 'lightmapDirection')
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i800 = root || new UnityEngine.LightProbes()
  var i801 = data
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial' )
  var i807 = data
  i806.name = i807[0]
  i806.bounciness = i807[1]
  i806.dynamicFriction = i807[2]
  i806.staticFriction = i807[3]
  i806.frictionCombine = i807[4]
  i806.bounceCombine = i807[5]
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i809 = data
  var i811 = i809[0]
  var i810 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i811.length; i += 1) {
    i810.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i811[i + 0]));
  }
  i808.ShaderCompilationErrors = i810
  i808.name = i809[1]
  i808.guid = i809[2]
  var i813 = i809[3]
  var i812 = []
  for(var i = 0; i < i813.length; i += 1) {
    i812.push( i813[i + 0] );
  }
  i808.shaderDefinedKeywords = i812
  var i815 = i809[4]
  var i814 = []
  for(var i = 0; i < i815.length; i += 1) {
    i814.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i815[i + 0]) );
  }
  i808.passes = i814
  var i817 = i809[5]
  var i816 = []
  for(var i = 0; i < i817.length; i += 1) {
    i816.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i817[i + 0]) );
  }
  i808.usePasses = i816
  var i819 = i809[6]
  var i818 = []
  for(var i = 0; i < i819.length; i += 1) {
    i818.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i819[i + 0]) );
  }
  i808.defaultParameterValues = i818
  request.r(i809[7], i809[8], 0, i808, 'unityFallbackShader')
  i808.readDepth = !!i809[9]
  i808.isCreatedByShaderGraph = !!i809[10]
  i808.compiled = !!i809[11]
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i823 = data
  i822.shaderName = i823[0]
  i822.errorMessage = i823[1]
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i828 = root || new pc.UnityShaderPass()
  var i829 = data
  i828.id = i829[0]
  i828.subShaderIndex = i829[1]
  i828.name = i829[2]
  i828.passType = i829[3]
  i828.grabPassTextureName = i829[4]
  i828.usePass = !!i829[5]
  i828.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i829[6], i828.zTest)
  i828.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i829[7], i828.zWrite)
  i828.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i829[8], i828.culling)
  i828.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i829[9], i828.blending)
  i828.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i829[10], i828.alphaBlending)
  i828.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i829[11], i828.colorWriteMask)
  i828.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i829[12], i828.offsetUnits)
  i828.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i829[13], i828.offsetFactor)
  i828.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i829[14], i828.stencilRef)
  i828.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i829[15], i828.stencilReadMask)
  i828.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i829[16], i828.stencilWriteMask)
  i828.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i829[17], i828.stencilOp)
  i828.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i829[18], i828.stencilOpFront)
  i828.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i829[19], i828.stencilOpBack)
  var i831 = i829[20]
  var i830 = []
  for(var i = 0; i < i831.length; i += 1) {
    i830.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i831[i + 0]) );
  }
  i828.tags = i830
  var i833 = i829[21]
  var i832 = []
  for(var i = 0; i < i833.length; i += 1) {
    i832.push( i833[i + 0] );
  }
  i828.passDefinedKeywords = i832
  var i835 = i829[22]
  var i834 = []
  for(var i = 0; i < i835.length; i += 1) {
    i834.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i835[i + 0]) );
  }
  i828.passDefinedKeywordGroups = i834
  var i837 = i829[23]
  var i836 = []
  for(var i = 0; i < i837.length; i += 1) {
    i836.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i837[i + 0]) );
  }
  i828.variants = i836
  var i839 = i829[24]
  var i838 = []
  for(var i = 0; i < i839.length; i += 1) {
    i838.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i839[i + 0]) );
  }
  i828.excludedVariants = i838
  i828.hasDepthReader = !!i829[25]
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i841 = data
  i840.val = i841[0]
  i840.name = i841[1]
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i843 = data
  i842.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i843[0], i842.src)
  i842.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i843[1], i842.dst)
  i842.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i843[2], i842.op)
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i845 = data
  i844.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i845[0], i844.pass)
  i844.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i845[1], i844.fail)
  i844.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i845[2], i844.zFail)
  i844.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i845[3], i844.comp)
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i849 = data
  i848.name = i849[0]
  i848.value = i849[1]
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i853 = data
  var i855 = i853[0]
  var i854 = []
  for(var i = 0; i < i855.length; i += 1) {
    i854.push( i855[i + 0] );
  }
  i852.keywords = i854
  i852.hasDiscard = !!i853[1]
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i859 = data
  i858.passId = i859[0]
  i858.subShaderIndex = i859[1]
  var i861 = i859[2]
  var i860 = []
  for(var i = 0; i < i861.length; i += 1) {
    i860.push( i861[i + 0] );
  }
  i858.keywords = i860
  i858.vertexProgram = i859[3]
  i858.fragmentProgram = i859[4]
  i858.exportedForWebGl2 = !!i859[5]
  i858.readDepth = !!i859[6]
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i865 = data
  request.r(i865[0], i865[1], 0, i864, 'shader')
  i864.pass = i865[2]
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i869 = data
  i868.name = i869[0]
  i868.type = i869[1]
  i868.value = new pc.Vec4( i869[2], i869[3], i869[4], i869[5] )
  i868.textureValue = i869[6]
  i868.shaderPropertyFlag = i869[7]
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i871 = data
  i870.name = i871[0]
  request.r(i871[1], i871[2], 0, i870, 'texture')
  i870.aabb = i871[3]
  i870.vertices = i871[4]
  i870.triangles = i871[5]
  i870.textureRect = UnityEngine.Rect.MinMaxRect(i871[6], i871[7], i871[8], i871[9])
  i870.packedRect = UnityEngine.Rect.MinMaxRect(i871[10], i871[11], i871[12], i871[13])
  i870.border = new pc.Vec4( i871[14], i871[15], i871[16], i871[17] )
  i870.transparency = i871[18]
  i870.bounds = i871[19]
  i870.pixelsPerUnit = i871[20]
  i870.textureWidth = i871[21]
  i870.textureHeight = i871[22]
  i870.nativeSize = new pc.Vec2( i871[23], i871[24] )
  i870.pivot = new pc.Vec2( i871[25], i871[26] )
  i870.textureRectOffset = new pc.Vec2( i871[27], i871[28] )
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i873 = data
  i872.name = i873[0]
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i875 = data
  i874.name = i875[0]
  i874.wrapMode = i875[1]
  i874.isLooping = !!i875[2]
  i874.length = i875[3]
  var i877 = i875[4]
  var i876 = []
  for(var i = 0; i < i877.length; i += 1) {
    i876.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i877[i + 0]) );
  }
  i874.curves = i876
  var i879 = i875[5]
  var i878 = []
  for(var i = 0; i < i879.length; i += 1) {
    i878.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i879[i + 0]) );
  }
  i874.events = i878
  i874.halfPrecision = !!i875[6]
  i874._frameRate = i875[7]
  i874.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i875[8], i874.localBounds)
  i874.hasMuscleCurves = !!i875[9]
  var i881 = i875[10]
  var i880 = []
  for(var i = 0; i < i881.length; i += 1) {
    i880.push( i881[i + 0] );
  }
  i874.clipMuscleConstant = i880
  i874.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i875[11], i874.clipBindingConstant)
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i885 = data
  i884.path = i885[0]
  i884.hash = i885[1]
  i884.componentType = i885[2]
  i884.property = i885[3]
  i884.keys = i885[4]
  var i887 = i885[5]
  var i886 = []
  for(var i = 0; i < i887.length; i += 1) {
    i886.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i887[i + 0]) );
  }
  i884.objectReferenceKeys = i886
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i891 = data
  i890.time = i891[0]
  request.r(i891[1], i891[2], 0, i890, 'value')
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i895 = data
  i894.functionName = i895[0]
  i894.floatParameter = i895[1]
  i894.intParameter = i895[2]
  i894.stringParameter = i895[3]
  request.r(i895[4], i895[5], 0, i894, 'objectReferenceParameter')
  i894.time = i895[6]
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i897 = data
  i896.center = new pc.Vec3( i897[0], i897[1], i897[2] )
  i896.extends = new pc.Vec3( i897[3], i897[4], i897[5] )
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i901 = data
  var i903 = i901[0]
  var i902 = []
  for(var i = 0; i < i903.length; i += 1) {
    i902.push( i903[i + 0] );
  }
  i900.genericBindings = i902
  var i905 = i901[1]
  var i904 = []
  for(var i = 0; i < i905.length; i += 1) {
    i904.push( i905[i + 0] );
  }
  i900.pptrCurveMapping = i904
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i907 = data
  i906.name = i907[0]
  i906.ascent = i907[1]
  i906.originalLineHeight = i907[2]
  i906.fontSize = i907[3]
  var i909 = i907[4]
  var i908 = []
  for(var i = 0; i < i909.length; i += 1) {
    i908.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i909[i + 0]) );
  }
  i906.characterInfo = i908
  request.r(i907[5], i907[6], 0, i906, 'texture')
  i906.originalFontSize = i907[7]
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i913 = data
  i912.index = i913[0]
  i912.advance = i913[1]
  i912.bearing = i913[2]
  i912.glyphWidth = i913[3]
  i912.glyphHeight = i913[4]
  i912.minX = i913[5]
  i912.maxX = i913[6]
  i912.minY = i913[7]
  i912.maxY = i913[8]
  i912.uvBottomLeftX = i913[9]
  i912.uvBottomLeftY = i913[10]
  i912.uvBottomRightX = i913[11]
  i912.uvBottomRightY = i913[12]
  i912.uvTopLeftX = i913[13]
  i912.uvTopLeftY = i913[14]
  i912.uvTopRightX = i913[15]
  i912.uvTopRightY = i913[16]
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i915 = data
  i914.name = i915[0]
  var i917 = i915[1]
  var i916 = []
  for(var i = 0; i < i917.length; i += 1) {
    i916.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i917[i + 0]) );
  }
  i914.layers = i916
  var i919 = i915[2]
  var i918 = []
  for(var i = 0; i < i919.length; i += 1) {
    i918.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i919[i + 0]) );
  }
  i914.parameters = i918
  i914.animationClips = i915[3]
  i914.avatarUnsupported = i915[4]
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i923 = data
  i922.name = i923[0]
  i922.defaultWeight = i923[1]
  i922.blendingMode = i923[2]
  i922.avatarMask = i923[3]
  i922.syncedLayerIndex = i923[4]
  i922.syncedLayerAffectsTiming = !!i923[5]
  i922.syncedLayers = i923[6]
  i922.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i923[7], i922.stateMachine)
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i925 = data
  i924.id = i925[0]
  i924.name = i925[1]
  i924.path = i925[2]
  var i927 = i925[3]
  var i926 = []
  for(var i = 0; i < i927.length; i += 1) {
    i926.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i927[i + 0]) );
  }
  i924.states = i926
  var i929 = i925[4]
  var i928 = []
  for(var i = 0; i < i929.length; i += 1) {
    i928.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i929[i + 0]) );
  }
  i924.machines = i928
  var i931 = i925[5]
  var i930 = []
  for(var i = 0; i < i931.length; i += 1) {
    i930.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i931[i + 0]) );
  }
  i924.entryStateTransitions = i930
  var i933 = i925[6]
  var i932 = []
  for(var i = 0; i < i933.length; i += 1) {
    i932.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i933[i + 0]) );
  }
  i924.exitStateTransitions = i932
  var i935 = i925[7]
  var i934 = []
  for(var i = 0; i < i935.length; i += 1) {
    i934.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i935[i + 0]) );
  }
  i924.anyStateTransitions = i934
  i924.defaultStateId = i925[8]
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i939 = data
  i938.id = i939[0]
  i938.name = i939[1]
  i938.cycleOffset = i939[2]
  i938.cycleOffsetParameter = i939[3]
  i938.cycleOffsetParameterActive = !!i939[4]
  i938.mirror = !!i939[5]
  i938.mirrorParameter = i939[6]
  i938.mirrorParameterActive = !!i939[7]
  i938.motionId = i939[8]
  i938.nameHash = i939[9]
  i938.fullPathHash = i939[10]
  i938.speed = i939[11]
  i938.speedParameter = i939[12]
  i938.speedParameterActive = !!i939[13]
  i938.tag = i939[14]
  i938.tagHash = i939[15]
  i938.writeDefaultValues = !!i939[16]
  var i941 = i939[17]
  var i940 = []
  for(var i = 0; i < i941.length; i += 2) {
  request.r(i941[i + 0], i941[i + 1], 2, i940, '')
  }
  i938.behaviours = i940
  var i943 = i939[18]
  var i942 = []
  for(var i = 0; i < i943.length; i += 1) {
    i942.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i943[i + 0]) );
  }
  i938.transitions = i942
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i949 = data
  i948.fullPath = i949[0]
  i948.canTransitionToSelf = !!i949[1]
  i948.duration = i949[2]
  i948.exitTime = i949[3]
  i948.hasExitTime = !!i949[4]
  i948.hasFixedDuration = !!i949[5]
  i948.interruptionSource = i949[6]
  i948.offset = i949[7]
  i948.orderedInterruption = !!i949[8]
  i948.destinationStateId = i949[9]
  i948.isExit = !!i949[10]
  i948.mute = !!i949[11]
  i948.solo = !!i949[12]
  var i951 = i949[13]
  var i950 = []
  for(var i = 0; i < i951.length; i += 1) {
    i950.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i951[i + 0]) );
  }
  i948.conditions = i950
  return i948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i957 = data
  i956.destinationStateId = i957[0]
  i956.isExit = !!i957[1]
  i956.mute = !!i957[2]
  i956.solo = !!i957[3]
  var i959 = i957[4]
  var i958 = []
  for(var i = 0; i < i959.length; i += 1) {
    i958.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i959[i + 0]) );
  }
  i956.conditions = i958
  return i956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i963 = data
  i962.defaultBool = !!i963[0]
  i962.defaultFloat = i963[1]
  i962.defaultInt = i963[2]
  i962.name = i963[3]
  i962.nameHash = i963[4]
  i962.type = i963[5]
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i965 = data
  var i967 = i965[0]
  var i966 = []
  for(var i = 0; i < i967.length; i += 1) {
    i966.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i967[i + 0]) );
  }
  i964.files = i966
  i964.componentToPrefabIds = i965[1]
  return i964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i971 = data
  i970.path = i971[0]
  request.r(i971[1], i971[2], 0, i970, 'unityObject')
  return i970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i973 = data
  var i975 = i973[0]
  var i974 = []
  for(var i = 0; i < i975.length; i += 1) {
    i974.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i975[i + 0]) );
  }
  i972.scriptsExecutionOrder = i974
  var i977 = i973[1]
  var i976 = []
  for(var i = 0; i < i977.length; i += 1) {
    i976.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i977[i + 0]) );
  }
  i972.sortingLayers = i976
  var i979 = i973[2]
  var i978 = []
  for(var i = 0; i < i979.length; i += 1) {
    i978.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i979[i + 0]) );
  }
  i972.cullingLayers = i978
  i972.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i973[3], i972.timeSettings)
  i972.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i973[4], i972.physicsSettings)
  i972.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i973[5], i972.physics2DSettings)
  i972.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i973[6], i972.qualitySettings)
  i972.enableRealtimeShadows = !!i973[7]
  i972.enableAutoInstancing = !!i973[8]
  i972.enableDynamicBatching = !!i973[9]
  i972.lightmapEncodingQuality = i973[10]
  i972.desiredColorSpace = i973[11]
  var i981 = i973[12]
  var i980 = []
  for(var i = 0; i < i981.length; i += 1) {
    i980.push( i981[i + 0] );
  }
  i972.allTags = i980
  return i972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i985 = data
  i984.name = i985[0]
  i984.value = i985[1]
  return i984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i989 = data
  i988.id = i989[0]
  i988.name = i989[1]
  i988.value = i989[2]
  return i988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i993 = data
  i992.id = i993[0]
  i992.name = i993[1]
  return i992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i995 = data
  i994.fixedDeltaTime = i995[0]
  i994.maximumDeltaTime = i995[1]
  i994.timeScale = i995[2]
  i994.maximumParticleTimestep = i995[3]
  return i994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i997 = data
  i996.gravity = new pc.Vec3( i997[0], i997[1], i997[2] )
  i996.defaultSolverIterations = i997[3]
  i996.bounceThreshold = i997[4]
  i996.autoSyncTransforms = !!i997[5]
  i996.autoSimulation = !!i997[6]
  var i999 = i997[7]
  var i998 = []
  for(var i = 0; i < i999.length; i += 1) {
    i998.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i999[i + 0]) );
  }
  i996.collisionMatrix = i998
  return i996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1003 = data
  i1002.enabled = !!i1003[0]
  i1002.layerId = i1003[1]
  i1002.otherLayerId = i1003[2]
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1005 = data
  request.r(i1005[0], i1005[1], 0, i1004, 'material')
  i1004.gravity = new pc.Vec2( i1005[2], i1005[3] )
  i1004.positionIterations = i1005[4]
  i1004.velocityIterations = i1005[5]
  i1004.velocityThreshold = i1005[6]
  i1004.maxLinearCorrection = i1005[7]
  i1004.maxAngularCorrection = i1005[8]
  i1004.maxTranslationSpeed = i1005[9]
  i1004.maxRotationSpeed = i1005[10]
  i1004.baumgarteScale = i1005[11]
  i1004.baumgarteTOIScale = i1005[12]
  i1004.timeToSleep = i1005[13]
  i1004.linearSleepTolerance = i1005[14]
  i1004.angularSleepTolerance = i1005[15]
  i1004.defaultContactOffset = i1005[16]
  i1004.autoSimulation = !!i1005[17]
  i1004.queriesHitTriggers = !!i1005[18]
  i1004.queriesStartInColliders = !!i1005[19]
  i1004.callbacksOnDisable = !!i1005[20]
  i1004.reuseCollisionCallbacks = !!i1005[21]
  i1004.autoSyncTransforms = !!i1005[22]
  var i1007 = i1005[23]
  var i1006 = []
  for(var i = 0; i < i1007.length; i += 1) {
    i1006.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1007[i + 0]) );
  }
  i1004.collisionMatrix = i1006
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1011 = data
  i1010.enabled = !!i1011[0]
  i1010.layerId = i1011[1]
  i1010.otherLayerId = i1011[2]
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1013 = data
  var i1015 = i1013[0]
  var i1014 = []
  for(var i = 0; i < i1015.length; i += 1) {
    i1014.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1015[i + 0]) );
  }
  i1012.qualityLevels = i1014
  var i1017 = i1013[1]
  var i1016 = []
  for(var i = 0; i < i1017.length; i += 1) {
    i1016.push( i1017[i + 0] );
  }
  i1012.names = i1016
  i1012.shadows = i1013[2]
  i1012.anisotropicFiltering = i1013[3]
  i1012.antiAliasing = i1013[4]
  i1012.lodBias = i1013[5]
  i1012.shadowCascades = i1013[6]
  i1012.shadowDistance = i1013[7]
  i1012.shadowmaskMode = i1013[8]
  i1012.shadowProjection = i1013[9]
  i1012.shadowResolution = i1013[10]
  i1012.softParticles = !!i1013[11]
  i1012.softVegetation = !!i1013[12]
  i1012.activeColorSpace = i1013[13]
  i1012.desiredColorSpace = i1013[14]
  i1012.masterTextureLimit = i1013[15]
  i1012.maxQueuedFrames = i1013[16]
  i1012.particleRaycastBudget = i1013[17]
  i1012.pixelLightCount = i1013[18]
  i1012.realtimeReflectionProbes = !!i1013[19]
  i1012.shadowCascade2Split = i1013[20]
  i1012.shadowCascade4Split = new pc.Vec3( i1013[21], i1013[22], i1013[23] )
  i1012.streamingMipmapsActive = !!i1013[24]
  i1012.vSyncCount = i1013[25]
  i1012.asyncUploadBufferSize = i1013[26]
  i1012.asyncUploadTimeSlice = i1013[27]
  i1012.billboardsFaceCameraPosition = !!i1013[28]
  i1012.shadowNearPlaneOffset = i1013[29]
  i1012.streamingMipmapsMemoryBudget = i1013[30]
  i1012.maximumLODLevel = i1013[31]
  i1012.streamingMipmapsAddAllCameras = !!i1013[32]
  i1012.streamingMipmapsMaxLevelReduction = i1013[33]
  i1012.streamingMipmapsRenderersPerFrame = i1013[34]
  i1012.resolutionScalingFixedDPIFactor = i1013[35]
  i1012.streamingMipmapsMaxFileIORequests = i1013[36]
  i1012.currentQualityLevel = i1013[37]
  return i1012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1023 = data
  i1022.weight = i1023[0]
  i1022.vertices = i1023[1]
  i1022.normals = i1023[2]
  i1022.tangents = i1023[3]
  return i1022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1027 = data
  i1026.mode = i1027[0]
  i1026.parameter = i1027[1]
  i1026.threshold = i1027[2]
  return i1026
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"enabled":0,"isTrigger":1,"material":2,"center":4,"radius":7},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"positions":16,"positionCount":17,"time":18,"startWidth":19,"endWidth":20,"widthMultiplier":21,"autodestruct":22,"emitting":23,"numCornerVertices":24,"numCapVertices":25,"minVertexDistance":26,"colorGradient":27,"startColor":28,"endColor":32,"generateLightingData":36,"textureMode":37,"alignment":38,"widthCurve":39},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.HingeJoint":{"useMotor":0,"useLimits":1,"useSpring":2,"limits":3,"motor":4,"spring":5,"connectedBody":6,"axis":8,"anchor":11,"connectedAnchor":14,"autoConfigureConnectedAnchor":17,"massScale":18,"connectedMassScale":19,"enableCollision":20,"breakForce":21,"breakTorque":22},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial":{"name":0,"bounciness":1,"dynamicFriction":2,"staticFriction":3,"frictionCombine":4,"bounceCombine":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"50":[51],"52":[51],"53":[51],"54":[51],"55":[51],"56":[51],"22":[23],"57":[12],"58":[15],"59":[15],"20":[15],"60":[15],"61":[15],"62":[15],"63":[15],"64":[65],"66":[65],"67":[65],"68":[65],"69":[65],"70":[65],"71":[65],"72":[65],"73":[65],"74":[65],"75":[65],"76":[65],"77":[65],"78":[12],"79":[5],"80":[81],"82":[81],"34":[26],"83":[26],"84":[5,26],"85":[26,27],"86":[26],"87":[27,26],"88":[5],"89":[27,26],"90":[26],"91":[26],"92":[26],"37":[34],"38":[27,26],"93":[26],"36":[34],"94":[26],"95":[26],"96":[26],"97":[26],"98":[26],"99":[26],"100":[26],"101":[26],"102":[26],"103":[27,26],"104":[26],"105":[26],"106":[26],"107":[26],"42":[27,26],"108":[26],"109":[44],"110":[44],"45":[44],"111":[44],"112":[12],"113":[12]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.BoxCollider","UnityEngine.PhysicMaterial","UnityEngine.MonoBehaviour","CollisionHandler","UnityEngine.Light","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.SphereCollider","UnityEngine.Rigidbody","UnityEngine.TrailRenderer","BallThrower","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.HingeJoint","UnityEngine.CapsuleCollider","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","RecordDunkTrigger","DunkTrigger","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","BallSelectionController","UnityEngine.GameObject","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Image","UnityEngine.UI.Button","CameraController","AudioManager","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","GameManager","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Cubemap","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2022.3.14f1";

Deserializers.productName = "Basketball 3";

Deserializers.lunaInitializationTime = "";

Deserializers.lunaDaysRunning = "1.8";

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

Deserializers.runtimeAnalysisExcludedModules = "physics2d, reflection";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.Basketball-3";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "cad8d751-5035-4088-aab0-6e0cde24bd2c";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

