const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/RacingScreen-DK_zkued.js","assets/components-BLYXEVDR.js","assets/index-DAMiY7pQ.js","assets/constants-B4WsaW4p.js","assets/index-D17hYsCh.js","assets/CustomEase-BoqpfgTW.js","assets/SoundToggle-BdGWOSTp.js","assets/ConsoleArt-CuYY2TOE.js","assets/ResultsScreen-DELw3N0z.js","assets/index-CktnqYum.js","assets/client-Bn7rGMAc.js"])))=>i.map(i=>d[i]);
var _u=Object.defineProperty;var bu=(t,e,n)=>e in t?_u(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var At=(t,e,n)=>bu(t,typeof e!="symbol"?e+"":e,n);import{r as S,j as b,B as Pu,x as gs,G as Tu}from"./components-BLYXEVDR.js";import{s as en,Q as le,V as M,w as tt,ay as Ft,az as Ke,G as tn,aA as z,a8 as $e,aB as di,e as re,o as G,aC as vs,aD as sc,d as Jt,ab as Iu,_ as Au,m as Ve,aE as gt,aF as wr,aG as fi,a9 as oc,aH as Fn,aq as Eu,a2 as Cu,a3 as Ct,F as bn,ah as Ot,ai as Lt,aI as xu,aJ as Ru,av as mi,aK as ac,as as Qi,aj as Zi,aL as Nn,at as ku,au as Mu,aM as Du,P as Ou,a7 as Un,i as cc,a6 as Oe,a4 as lc,aN as uc,K as kt,k as xt,I as Lu,aO as Fu,L as Nu,aP as $o,aQ as Uu,h as ju,ad as Vu,aR as ys,t as Bu,c as ge,aS as zu,aT as hc,aU as $u,aV as Gu,aW as Wu,C as Hu,B as qu}from"./index-DAMiY7pQ.js";import{N as Ku,E as Xu,u as Ju,d as Yu,g as Qu,A as Zu}from"./ConsoleArt-CuYY2TOE.js";import{c as nn,_ as ws}from"./constants-B4WsaW4p.js";var at=(t=>(t[t.notColliding=-1]="notColliding",t[t.collidingOnTheRight=0]="collidingOnTheRight",t[t.collidingOnTheLeft=1]="collidingOnTheLeft",t))(at||{}),je=(t=>(t[t.notJumping=-1]="notJumping",t[t.ramp=0]="ramp",t[t.moon=1]="moon",t))(je||{}),Et=(t=>(t[t.Beach=0]="Beach",t[t.Underwater=1]="Underwater",t[t.Moon=2]="Moon",t[t.None=3]="None",t))(Et||{}),nt=(t=>(t[t.SplashScreen=0]="SplashScreen",t[t.RacingScreen=1]="RacingScreen",t[t.ResultsScreen=2]="ResultsScreen",t))(nt||{});const Y=nn(en(t=>({prevPosition:new M(0,0,0),position:new M(0,1,0),velocity:new M(0,0,0),prevVelocity:new M(0,0,0),orientation:new le,prevOrientation:new le,forward:new M(-1,0,0),up:new M(0,1,0),right:new M(0,0,1),speed:0,segmentIndex:0,collisionState:at.notColliding,normalizedProgress:0,rightFrontTireTrailTarget:null,leftFrontTireTrailTarget:null,rightBackTireTrailTarget:null,leftBackTireTrailTarget:null,rightTailLightTrailTarget:null,leftTailLightTrailTarget:null,velocityAlignedQuaternion:new le,shadowCameraTarget:null,isInJump:!1,isBraking:!1,currentJumpType:je.notJumping,lastCollisionEvent:null,isDrifting:!1,setPosition:(e,n,r)=>{t(s=>({prevPosition:s.position.clone(),position:new M(e,n,r)}))},debugSegment:0,setVelocity:(e,n,r)=>{const s=new M(e,n,r),o=s.length()*3.6;t(c=>({prevVelocity:c.velocity.clone(),velocity:s,speed:o}))},setOrientation:e=>{t(n=>({prevOrientation:n.orientation.clone(),orientation:e,forward:new M(0,0,1).applyQuaternion(e),up:new M(0,1,0).applyQuaternion(e),right:new M(1,0,0).applyQuaternion(e)}))},setSegmentIndex:e=>t({segmentIndex:e}),setCollisionState:e=>t({collisionState:e}),setNormalizedProgress:e=>t({normalizedProgress:e}),setRightFrontTireTrailTarget:e=>t({rightFrontTireTrailTarget:e}),setLeftFrontTireTrailTarget:e=>t({leftFrontTireTrailTarget:e}),setRightBackTireTrailTarget:e=>t({rightBackTireTrailTarget:e}),setLeftBackTireTrailTarget:e=>t({leftBackTireTrailTarget:e}),setRightTailLightTrailTarget:e=>t({rightTailLightTrailTarget:e}),setLeftTailLightTrailTarget:e=>t({leftTailLightTrailTarget:e}),setVelocityAlignedQuaternion:e=>t({velocityAlignedQuaternion:e}),setShadowCameraTarget:e=>t({shadowCameraTarget:e}),setDebugSegment:e=>t({debugSegment:e}),setCurrentJumpType:e=>t({currentJumpType:e,isInJump:e!==je.notJumping}),setLastCollisionEvent:e=>t({lastCollisionEvent:e}),setIsDrifting:e=>t({isDrifting:e}),setIsBraking:e=>t({isBraking:e})})));new M;const Go=(t,e,n)=>{const r=new tt;return r.makeBasis(n,e,t),new le().setFromRotationMatrix(r)},eh=(t,e,n,r)=>{const s=Ft(t),o=Ft(e),c=n*o,u=(Math.random()*2-1)*s,h=Math.sin(u),d=Math.sin(c),v=Math.sqrt(Math.max(0,1-h*h-d*d));r.set(h,d,v),r.normalize()};function th(t){return t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2}const nh=`uniform float time;
const float duration = 0.15;
const float speed = 10.0;

attribute float startTime;
attribute vec3 spawnPosition;
attribute vec3 direction;
attribute float scaleX;
attribute float scaleY;

varying vec2 vUv;
varying float vLifetime;

void main() {
  vUv = uv;
  vLifetime = clamp((time - startTime) / duration, 0.0, 1.0);

  if(vLifetime <= 0.0 || vLifetime >= 1.0) {
    gl_Position = vec4(0.0);
    return;
  }

  vec3 particlePosition = spawnPosition;
  // Move the particle along the direction vector
  particlePosition += direction * vLifetime * speed;

  vec3 forward = normalize(direction);
  vec3 toCameraVector = normalize(cameraPosition - particlePosition);
  vec3 right = normalize(cross(forward, toCameraVector));
  // Orient the particle along the direction vector while at the same time making it face the camera
  vec3 orientedPosition = position.x * right * scaleX +
    position.y * forward * scaleY;

  gl_Position = projectionMatrix * viewMatrix * vec4(particlePosition + orientedPosition, 1.0);
}
`,rh=`const vec3 color = vec3(1.0, 0.5921619230803884, 0.1411817510240882);
const float bloomIntensity = 8.0;
const float alphaBloomIntensity = 5.4;
const float sparkWidthInUVSpace = 0.05;

varying vec2 vUv;
varying float vLifetime;

void main() {
  if(vLifetime <= 0.0 || vLifetime >= 1.0) {
    discard;
  }

  // Create a thin rectangle with rounded edges at top and bottom
  float cornerRadius = sparkWidthInUVSpace * 0.5;

  float horizontalDistanceFromCenter = abs(vUv.x - 0.5) / (sparkWidthInUVSpace * 0.5);
  bool inTopEnd = vUv.y < cornerRadius;
  bool inBottomEnd = vUv.y > (1.0 - cornerRadius);

  if(inTopEnd || inBottomEnd) {
    float circleCenter = inTopEnd ? cornerRadius : (1.0 - cornerRadius);
    float distanceToCircleCenter = length(vec2(vUv.x - 0.5, vUv.y - circleCenter));
    if(distanceToCircleCenter > cornerRadius) {
      // Outside the rounded edge
      discard;
    }
  } else if(horizontalDistanceFromCenter > 1.0) {
    // Outside the rectangle
    discard;
  }

  gl_FragColor = vec4(color * bloomIntensity, 1.0 * alphaBloomIntensity);
}
`,ih=new M,Wo=new M,sh=new M,oh=new M,ah=new M,ch=new M,lh=new M,uh=new M,hh=new M,dh=new M,fh=new le;function mh(){const n=S.useMemo(()=>[-.7995,.418,.6825],[]),r=25,s=150,o=!1,c=2,u=.15,h=.1,d=3.45,v=10,T=.04,E=.3,A=1.94,C=80,I=12.5,x=12.5,L=S.useMemo(()=>{const U=new Ke(new Float32Array(4500),9),y=new tn(.01,.01);return y.setAttribute("startTime",new z(U,1,0)),y.setAttribute("spawnPosition",new z(U,3,1)),y.setAttribute("direction",new z(U,3,4)),y.setAttribute("scaleX",new z(U,1,7)),y.setAttribute("scaleY",new z(U,1,8)),y},[]),k=S.useMemo(()=>new $e({uniforms:{time:{value:0}},vertexShader:nh,fragmentShader:rh,transparent:!0,blending:di}),[]),D=S.useMemo(()=>Array.from({length:500},()=>({t:1,startTime:0})),[]),N=S.useCallback((U,y)=>{const p=L.attributes.startTime.data,f=p.array,_=y.length;let g=0;for(let P=0;P<_;P++){for(;g<500;){const V=D[g];if(V.t=(U-V.startTime)/u,V.t>=1)break;g++}if(g>=500)break;const w=y[P];f[g*9+0]=w.startTime,f[g*9+1]=w.spawnPosition[0],f[g*9+2]=w.spawnPosition[1],f[g*9+3]=w.spawnPosition[2],f[g*9+4]=w.direction[0],f[g*9+5]=w.direction[1],f[g*9+6]=w.direction[2],f[g*9+7]=A+Math.random()*I,f[g*9+8]=C+Math.random()*x,D[g].t=0,D[g].startTime=w.startTime,g++}p.needsUpdate=!0},[D,L]),F=S.useCallback((U,y,p)=>{const{position:f,orientation:_,velocity:g,speed:P,velocityAlignedQuaternion:w}=Y.getState(),V=ih;V.copy(f),U===at.collidingOnTheRight&&!o?V.add(Wo.set(n[0],n[1],n[2]).applyQuaternion(_)):(U===at.collidingOnTheLeft||o)&&V.add(Wo.set(n[0]*-1,n[1],n[2]).applyQuaternion(_));const K=sh.set(1,0,0).applyQuaternion(w).normalize(),B=oh.set(0,1,0).applyQuaternion(w).normalize(),$=fh.setFromUnitVectors(ah.set(0,0,1),ch.copy(g).normalize().multiplyScalar(-1));let ee=(Math.min(Math.max(P,r),s)-r)/(s-r);const he=Math.floor(p*1e3*c*ee),ae=[];for(let ne=0;ne<he;ne++){const ce=(Math.random()*2-1)*T,fe=(Math.random()*2-1)*E,Q=lh.copy(V).add(uh.copy(K).multiplyScalar(ce)).add(hh.copy(B).multiplyScalar(fe)),Z=fe/E,W=dh;eh(d,v,Z,W),W.applyQuaternion($),W.normalize(),ae.push({startTime:y+Math.random()*h,spawnPosition:[Q.x,Q.y,Q.z],direction:[W.x,W.y,W.z]})}N(y,ae)},[n,o,N]);return re((U,y)=>{const p=U.clock.elapsedTime,{collisionState:f,isInJump:_}=Y.getState();(f!==at.notColliding&&!_||o)&&F(f,p,Math.min(y,.1)),k.uniforms.time.value=p}),b.jsx("instancedMesh",{args:[L,k,500],frustumCulled:!1})}var Se=(t=>(t[t.Collision=0]="Collision",t[t.Drift=1]="Drift",t[t.Crash=2]="Crash",t[t.Splash=3]="Splash",t[t.SplashOut=4]="SplashOut",t[t.Launch=5]="Launch",t[t.Landing=6]="Landing",t[t.Cheer=7]="Cheer",t[t.Sparkle=8]="Sparkle",t[t.CarEngine=9]="CarEngine",t[t.EngineStart=10]="EngineStart",t[t.Music=11]="Music",t[t.ChaChing=12]="ChaChing",t[t.KonamiCode=13]="KonamiCode",t[t.Underwater=14]="Underwater",t))(Se||{});const dt={0:{url:"/cdn.shopify.com/s/files/1/0921/8919/6588/files/crashing_rail_loop_02.mp3?v=1747680790",volume:1.25},10:{url:"/cdn.shopify.com/s/files/1/0921/8919/6588/files/carstart.mp3?v=1747716452",volume:.5},1:{url:"/cdn.shopify.com/s/files/1/0921/8919/6588/files/tire_drift_loop_01.mp3?v=1747159547",volume:.5},2:{url:"/cdn.shopify.com/s/files/1/0921/8919/6588/files/ramp_02.mp3?v=1747773614",volume:.75},3:{url:"/cdn.shopify.com/s/files/1/0921/8919/6588/files/splash_01.mp3?v=1747178566",volume:.6},4:{url:"/cdn.shopify.com/s/files/1/0921/8919/6588/files/splash_out_01.mp3?v=1747660269",volume:.7},5:{url:"/cdn.shopify.com/s/files/1/0921/8919/6588/files/boost_02.mp3?v=1747774009",volume:.6},6:{url:"/cdn.shopify.com/s/files/1/0921/8919/6588/files/landing_01.mp3?v=1747660262"},7:{url:"/cdn.shopify.com/s/files/1/0921/8919/6588/files/crowd_cheers_01.mp3?v=1747173507",volume:.6},8:{url:"/cdn.shopify.com/s/files/1/0921/8919/6588/files/crystal_cave_01.mp3?v=1747170749",volume:.2},9:{url:"/cdn.shopify.com/s/files/1/0884/4086/5047/files/carengine3.mp3?v=1747546320",volume:.3},11:{url:"/cdn.shopify.com/s/files/1/0921/8919/6588/files/beach_song.mp3?v=1747718397",volume:.3},12:{url:"/cdn.shopify.com/s/files/1/0921/8919/6588/files/trophy_win_03.mp3?v=1747773614",volume:.7},13:{url:"/cdn.shopify.com/s/files/1/0921/8919/6588/files/trophy_win_02.mp3?v=1747750259",volume:.7},14:{url:"/cdn.shopify.com/s/files/1/0921/8919/6588/files/underwater_loop_01.mp3?v=1747774589",volume:2}},ar=nn(en(t=>({addSoundToQueue:()=>{},isAudioEnabled:!1,setAddSoundToQueue:e=>t({addSoundToQueue:e}),setIsAudioEnabled:e=>t({isAudioEnabled:e}),isMuted:!1,setIsMuted:e=>t({isMuted:e})}))),ft=8,ph=15,gh=3,vh=Ft(40),yh=.2,wh=3,Sh=3,dc=250,Ho=.2,qo=600,xn=1/60,Sr={inputs:-5,car:-4,otherCar:-3,camera:-2,audio:-1},te={firstJump:.223,signBreak:.234,secondJump:.49,firstShark:.435,secondShark:.452,fadeOutSpeedLines:.478,fadeInMoonshotSpeedLines:.4955,exitTheWater:.54,moonApex:.57,loadMoon:.59,spaceRollStart:.58,spaceRollEnd:.635,fadeInNormalSpeedLines:.65,moon:.68,turnOnFinishLineEffects:.8,moveEarthToCinematicLocation:.9,finishLine:.9764},fr={ramp:{start:.229,end:.262},moon:{start:.492,end:.68}},_h=new M(0,-1,0),fc=new G(15701092),es=new G(92550),mc=new G("#11192a").convertLinearToSRGB(),bh=15,Ph=100,Ui={skip:{startPos:[0,0,0],endPos:[0,0,0],rotation:[0,0,0]},1:{startPos:[1,.6,0],endPos:[0,0,0],rotation:[0,0,0]},2:{startPos:[43,26.8,-39.2],endPos:[43,27.3,-39.2],rotation:[0,2.2,0]},3:{startPos:[34.6,27,-33.8],endPos:[36,27,-33.8],rotation:[0,-.9,0]},4:{startPos:[42.5,27,-35.8],endPos:[42.5,27,-36.5],rotation:[0,1.514,0]}},Th=1e3/20,ts=240*1e3,Ih=[{position:.2312,sound:Se.Crash},{position:.252,sound:Se.Splash},{position:.495,sound:Se.Launch},{position:.655,sound:Se.Landing},{position:te.exitTheWater,sound:Se.SplashOut}],Ah=15,Ko=6,Xo=10,ji=(t,e,n)=>{const r=t.segments,s=Math.max(0,(n??0)-Xo),o=Math.min(r.length-2,(n??0)+Xo);let c;for(let u=s;u<=o;u++){const h=r[u],d=r[u+1],v=h.tangent,T=e.clone().sub(h.position).dot(v)/h.length,E=h.normal.clone().lerp(d.normal,T).normalize(),A=new M().crossVectors(v,E).normalize(),C=e.clone().sub(h.position).dot(A)/A.lengthSq(),I=h.position.clone().add(v.clone().multiplyScalar(T*h.length)).add(A.clone().multiplyScalar(C)),x=r[r.length-1].cumulativeLength,L=r[u].length,k=(r[u].cumulativeLength+T*L)/x;if(c={segmentIndex:u,nearestTrackPosition:I,distanceAlongSegment:T,distanceToCenterLine:C,normal:E,binormal:A,tangent:v,normalizedDistanceOfPoint:k},T<1)break}return c},Eh=(t,e)=>{const r=t.segments.findIndex(s=>s.cumulativeLength>e*t.trackLength);return Math.max(0,r-1)},Ch=t=>{const e=t;let n=0;return{segments:e.map((s,o)=>{let c;o<e.length-1?c=new M(-e[o+1][0][0]+s[0][0],e[o+1][0][2]-s[0][2],e[o+1][0][1]-s[0][1]):c=new M(-s[0][0]+e[o-1][0][0],s[0][2]-e[o-1][0][2],s[0][1]-e[o-1][0][1]);const u=c.length(),h=n;n+=u,c.normalize();const d=new M(-s[1][0],s[1][2],s[1][1]).normalize(),v=new M().crossVectors(c,d).normalize();return{position:new M(-s[0][0],s[0][2],s[0][1]),normal:d,tangent:c,binormal:v,length:u,cumulativeLength:h}}),width:t.width??ph,trackLength:n,startSegment:t.start_point??0}},q=nn(en(t=>({track:{segments:[],width:0,startSegment:0,trackLength:0,jumps:[fr.ramp,fr.moon]},countdownNumber:3,raceStartTime:null,raceEndTime:null,isCameraUnderwater:!1,isCameraInMoonArea:!1,gameScreen:nt.SplashScreen,raceCount:0,rainbowMode:!1,setIsCameraUnderwater:e=>{t({isCameraUnderwater:e})},setIsCameraInMoonArea:e=>{t({isCameraInMoonArea:e})},loadedScene:Et.Beach,setLoadedScene:e=>{t({loadedScene:e})},setTrack:e=>{t(n=>{var r;return{track:{...e,jumps:((r=n.track)==null?void 0:r.jumps)||[]}}})},setTrackWidth:e=>{t(n=>({track:{...n.track,width:e}}))},startRace:()=>t({raceStartTime:performance.now(),raceEndTime:null}),endRace:()=>t({raceEndTime:performance.now()}),resetRace:()=>t(e=>({raceStartTime:null,raceEndTime:null,raceCount:e.raceCount+1})),setGameScreen:e=>{e===nt.SplashScreen?t(n=>(n.resetRace(),{gameScreen:e})):t({gameScreen:e})},incrementRaceCount:()=>t(e=>({raceCount:e.raceCount+1})),setCountdownNumber:e=>t({countdownNumber:e}),setRainbowMode:e=>t({rainbowMode:e}),hasShadersCompiled:!1,setHasShadersCompiled:e=>{t({hasShadersCompiled:e})}}))),pi=t=>q(e=>e.gameScreen===t),xh=()=>q(t=>t.raceCount),pc="/cdn.shopify.com/s/files/1/0921/8919/6588/files/track_data_39_condensed_2.json?v=1747537577";function Rh(){const t=vs(sc,pc);return S.useEffect(()=>{if(t)try{const e=Ch(JSON.parse(t));q.getState().setTrack(e)}catch(e){console.error("Error parsing track:",e)}},[t]),null}var xe=(t=>(t.Left="Left",t.Right="Right",t.Up="Up",t.Down="Down",t.A="A",t.B="B",t.Y="Y",t.X="X",t.Start="Start",t))(xe||{});const We=nn(en(t=>({Left:!1,Right:!1,Up:!1,Down:!1,A:!1,B:!1,Y:!1,X:!1,Start:!1,joystick:{x:0,y:0},triggers:{left:0,right:0},setState:e=>t(e),setButtonDown:e=>t(n=>({...n,[e]:!0})),setButtonUp:e=>t(n=>({...n,[e]:!1})),setJoystick:(e,n)=>t(r=>({...r,joystick:{x:Math.max(-1,Math.min(1,e)),y:Math.max(-1,Math.min(1,n))}})),resetInputs:()=>t(e=>({...e,Left:!1,Right:!1,Up:!1,Down:!1,A:!1,B:!1,Y:!1,X:!1,Start:!1,joystick:{x:0,y:0},triggers:{left:0,right:0}})),setTriggers:(e,n)=>t(r=>({...r,triggers:{left:e,right:n}}))}))),kh=t=>We(t),Zr=nn(en((t,e)=>({accumulator:0,physicsStep:0,progressToNextStep:0,processSteps:(n,r)=>{let o=e().accumulator;const c=Math.min(.25,n);for(o+=c;o>=xn;)r(xn),o-=xn,t(h=>({physicsStep:h.physicsStep+1}));const u=o/xn;return t({accumulator:o,progressToNextStep:u}),u}}))),Mh=t=>typeof t=="function",ns=S.forwardRef(({envMap:t,resolution:e=256,frames:n=1/0,makeDefault:r,children:s,...o},c)=>{const u=Jt(({set:x})=>x),h=Jt(({camera:x})=>x),d=Jt(({size:x})=>x),v=S.useRef(null);S.useImperativeHandle(c,()=>v.current,[]);const T=S.useRef(null),E=Iu(e);S.useLayoutEffect(()=>{o.manual||(v.current.aspect=d.width/d.height)},[d,o]),S.useLayoutEffect(()=>{v.current.updateProjectionMatrix()});let A=0,C=null;const I=Mh(s);return re(x=>{I&&(n===1/0||A<n)&&(T.current.visible=!1,x.gl.setRenderTarget(E),C=x.scene.background,t&&(x.scene.background=t),x.gl.render(x.scene,v.current),x.scene.background=C,x.gl.setRenderTarget(null),T.current.visible=!0,A++)}),S.useLayoutEffect(()=>{if(r){const x=h;return u(()=>({camera:v.current})),()=>u(()=>({camera:x}))}},[v,r,u]),S.createElement(S.Fragment,null,S.createElement("perspectiveCamera",Au({ref:v},o),!I&&s),S.createElement("group",{ref:T},I&&s(E.texture)))}),ei=nn(en(t=>({active:!1,shadowCameraTarget:null,setShadowCameraTarget:e=>t({shadowCameraTarget:e}),setActive:e=>t({active:e})}))),gc="/cdn.shopify.com/3d/models/f8a9f3a5bf9c4615/racing_game_car_18.glb",Ss=S.forwardRef((t,e)=>{const n=S.useRef(null),r=S.useRef(null),s=S.useRef(null),o=S.useRef(null),c=S.useRef(null),u=S.useRef(null),h=S.useRef(null),d=S.useRef(null),v=S.useRef(null),T=S.useRef(null),E=S.useRef(null),A=S.useRef(null),{nodes:C,materials:I}=Ve(gc),x=I["palette car"].clone();x.depthWrite=!0,x.transparent=!1,x.emissive.set("#0033ff"),x.emissiveIntensity=.2,x.transparent=!0,x.opacity=.4,I["palette car"].transparent=!1,I["palette car"].depthWrite=!0;const L=6,k=8,D=8,N=8;return S.useImperativeHandle(e,()=>({updateVisuals:(F,U,y,p,f,_,g,P,w,V)=>{if(!n.current||!r.current||!c.current||!h.current||!o.current||!u.current||!T.current||!E.current||!s.current)return;if(n.current.position.copy(U),n.current.quaternion.copy(y),V>fr.moon.start&&V<fr.moon.end){const ne=wr(fi(te.spaceRollStart,te.spaceRollEnd,V),0,1);s.current.rotation.z=th(ne)*2*Math.PI}else s.current.rotation.z=0;c.current.rotation.y=gt(c.current.rotation.y,vh*-_,gh,F),h.current.rotation.y=c.current.rotation.y;const X=Math.abs(p)*F/yh*Math.sign(p);c.current.rotation.x+=X,h.current.rotation.x+=X,o.current.rotation.x+=X,u.current.rotation.x+=X,T.current.visible=P,E.current.visible=!P;const ee=Math.min(Math.max(-L,g*k*(1-w)),L);r.current.rotation.x=gt(r.current.rotation.x,-Ft(ee),wh,F);const he=Math.min(1,Math.abs(f)/10)*N,ae=Math.min(Math.max(-D,-_*he),D);r.current.rotation.z=gt(r.current.rotation.z,Ft(ae),Sh,F)}})),S.useEffect(()=>{A.current&&(t.ghostCar?ei.getState():Y.getState()).setShadowCameraTarget(A.current)},[t.ghostCar]),S.useEffect(()=>{if(!t.ghostCar&&h.current&&c.current&&u.current&&o.current){const F=Y.getState();F.setRightFrontTireTrailTarget(h.current),F.setLeftFrontTireTrailTarget(c.current),F.setRightBackTireTrailTarget(u.current),F.setLeftBackTireTrailTarget(o.current),F.setRightTailLightTrailTarget(d.current),F.setLeftTailLightTrailTarget(v.current)}},[t.ghostCar]),b.jsx(b.Fragment,{children:b.jsx("group",{ref:n,children:b.jsxs("group",{dispose:null,ref:s,position:[0,0,0],scale:1,children:[b.jsxs("group",{position:[-.67,.252,-.718],ref:u,"rotation-order":"YXZ",children:[b.jsx("mesh",{geometry:C.right_tire_rear_1.geometry,material:I["palette car"]}),b.jsx("mesh",{geometry:C.right_tire_rear_2.geometry,material:I["headlight neon yellow"]})]}),b.jsxs("group",{position:[-.645,.252,1.085],ref:h,"rotation-order":"YXZ",children:[b.jsx("mesh",{geometry:C.right_tire_front_1.geometry,material:I["palette car"]}),b.jsx("mesh",{geometry:C.right_tire_front_2.geometry,material:I["headlight neon yellow"]})]}),b.jsxs("group",{position:[.67,.252,-.718],ref:o,"rotation-order":"YXZ",children:[b.jsx("mesh",{geometry:C.left_tire_rear_1.geometry,material:I["palette car"]}),b.jsx("mesh",{geometry:C.left_tire_rear_2.geometry,material:I["headlight neon yellow"]})]}),b.jsxs("group",{position:[.645,.252,1.085],ref:c,"rotation-order":"YXZ",children:[b.jsx("mesh",{geometry:C.left_tire_front_1.geometry,material:I["palette car"]}),b.jsx("mesh",{geometry:C.left_tire_front_2.geometry,material:I["headlight neon yellow"]})]}),b.jsxs("group",{ref:r,children:[b.jsxs("group",{position:[0,.425,.201],children:[b.jsx("mesh",{geometry:C.body_1.geometry,material:t.ghostCar?x:I["palette car"]}),b.jsx("mesh",{geometry:C.body_3.geometry,material:I["headlight neon yellow"]}),b.jsx("mesh",{geometry:C.body_2.geometry,ref:T,children:b.jsx("meshStandardMaterial",{color:[5.9,.1,0],emissive:[2,.05,0],emissiveIntensity:7})}),b.jsx("mesh",{geometry:C.body_2.geometry,ref:E,children:b.jsx("meshStandardMaterial",{color:[1.5,.1,0],emissive:[.7,.02,0],emissiveIntensity:5})})]}),b.jsx("group",{ref:d,position:[-.3995,.518,-1.3175]}),b.jsx("group",{ref:v,position:[.396,.518,-1.3175]}),b.jsx("group",{ref:A,position:[0,1,.3],rotation:[-Math.PI*.5,0,0]})]})]})})})});Ss.displayName="CarModel";Ve.preload(gc);function Dh(){const t=S.useRef(null),e=q(A=>A.track),n=xh(),r=30,s=1,o=.8,c=2.5,u=250,h=1.5,d=4,v=.45,T=S.useCallback(A=>{const C=q.getState(),I=Y.getState();if(!C.track||!I)return;let x;A?x=Eh(C.track,A):x=C.track.startSegment||25;const L=C.track.segments[x];I.setOrientation(Go(L.tangent,L.normal,L.binormal).multiply(new le().setFromEuler(new oc(0,-Math.PI,0)))),I.setPosition(L.position.x,L.position.y,L.position.z),I.setSegmentIndex(x),I.setVelocity(0,0,0)},[]);S.useEffect(()=>{n>0&&T()},[n,T]),S.useEffect(()=>{T()},[T,e==null?void 0:e.segments]),S.useEffect(()=>{const A=()=>{if(document.hidden)return;const C=Y.getState(),I=We.getState();C&&!C.isInJump&&C.setVelocity(0,0,0),I&&I.resetInputs&&I.resetInputs()};return window.addEventListener("focus",A),document.addEventListener("visibilitychange",A),()=>{document.removeEventListener("visibilitychange",A),window.removeEventListener("focus",A)}},[]);const E=A=>{var qn;if(!e||e.segments.length===0)return;const C=We.getState(),I=Y.getState(),{position:x,velocity:L,forward:k,up:D,collisionState:N,normalizedProgress:F}=I,y=q.getState().raceStartTime!==null,p=q.getState().raceEndTime!==null,f=L.clone(),_=k.clone(),g=x.clone(),P=(qn=e.jumps)==null?void 0:qn.findIndex(be=>F>=be.start&&F<=be.end),w=P!==je.notJumping,V=C.triggers.left>0,K=new M;let B=0;if(y&&!p)if(w)B=1;else if(V){const be=C.triggers.right>0?.12:1;B=-C.triggers.left*be}else B=C.triggers.right;const $=k.clone().multiplyScalar(B*r);K.add($);const ee=f.clone().projectOnVector(k).multiplyScalar(-.4*(N!==at.notColliding?c:1)*(w?.25:1));K.add(ee);const he=f.clone().projectOnVector(k),ne=f.clone().sub(he).clone().multiplyScalar(-.25);K.add(ne),f.add(K.multiplyScalar(A));const ce=f.length(),fe=u/3.6,Q=ce/fe;let Z=fe;switch(P){case je.ramp:Z=fe*h;break;case je.moon:Z=fe*d;break;default:Z=fe}if(ce>Z){const be=f.length(),on=Fn(be,Z,.05);f.normalize().multiplyScalar(on)}if(V){const be=f.dot(k);be<0&&f.sub(k.clone().multiplyScalar(be))}g.add(f.clone().multiplyScalar(A));const W=s*Eu(Q,0,.2),J=y&&!p?-C.joystick.x*A*W*(w?0:1):0,Ce=I.segmentIndex,ye=e.segments[Ce].tangent;if(_.applyAxisAngle(D,J),w)_.copy(ye);else{const be=_.dot(ye);be<v&&_.add(ye.clone().multiplyScalar(v-be)).normalize()}const{segmentIndex:ve,nearestTrackPosition:Pe,normal:ke,normalizedDistanceOfPoint:we}=ji(e,g,I.segmentIndex);g.copy(Pe);const Me=new M().crossVectors(ke,_).normalize();_.crossVectors(Me,ke).normalize();const ht=g.clone().add(_.clone().multiplyScalar(1)),Fe=g.clone().add(_.clone().multiplyScalar(-1)),_e=ji(e,ht,I.segmentIndex),Te=ji(e,Fe,I.segmentIndex);if(_.copy(_e.nearestTrackPosition.clone().sub(Te.nearestTrackPosition.clone()).normalize()),P===je.ramp){const be=Math.max(0,_h.dot(_)+.3);_.copy(I.forward.clone().lerp(_.applyQuaternion(new le().setFromAxisAngle(I.right.clone(),Ft(6*be))),.15))}const Xe=new M().crossVectors(ke,_).normalize(),rt=new M().crossVectors(_,Xe).normalize(),Je=Go(_,rt,Xe);f.lerp(k.clone().multiplyScalar(f.length()),.045);const Ye=Math.abs(_e.distanceToCenterLine)+o-e.width*.5,Qe=Math.abs(Te.distanceToCenterLine)+o-e.width*.5;if(Ye>0||Qe>0){if(f.length()>1){const Ze=f.clone().clampLength(0,60).length()/60;Y.getState().setLastCollisionEvent({intensity:Ze,timestamp:performance.now()})}const be=new M(0,0,0);if(Ye>0){const Ze=-Math.sign(_e.distanceToCenterLine),on=_e.binormal.clone().multiplyScalar(Ye*Ze*qo*A);be.add(on);const Pt=f.dot(_e.binormal.clone().multiplyScalar(Ze));Pt<0&&f.sub(_e.binormal.clone().multiplyScalar(Pt*Ze))}if(Qe>0){const Ze=-Math.sign(Te.distanceToCenterLine),on=Te.binormal.clone().multiplyScalar(Qe*Ze*qo*A);be.add(on);const Pt=f.dot(Te.binormal.clone().multiplyScalar(Ze));Pt<0&&f.sub(Te.binormal.clone().multiplyScalar(Pt*Ze))}f.add(be)}I.setSegmentIndex(ve),I.setNormalizedProgress(we),Ye>0||Qe>0?I.setCollisionState(_e.distanceToCenterLine>0||Te.distanceToCenterLine>0?at.collidingOnTheRight:at.collidingOnTheLeft):I.setCollisionState(at.notColliding),I.setPosition(g.x,g.y,g.z),I.setVelocity(f.x,f.y,f.z),I.setOrientation(Je);const rn=new M(0,1,0).applyQuaternion(Je),Ie=new M(0,0,1).applyQuaternion(Je),De=f.clone().normalize().projectOnPlane(rn),sn=De.angleTo(Ie),Er=sn*Math.sign(new M().crossVectors(Ie,De).dot(rn)),Cr=new le().setFromAxisAngle(new M(0,1,0),Er);I.setVelocityAlignedQuaternion(Je.clone().multiply(Cr)),I.setCurrentJumpType(P);const _i=sn*180/Math.PI,xr=f.length()*3.6>=Ph&&_i>=bh;I.setIsDrifting(xr),I.setIsBraking(V)};return re((A,C)=>{if(!t.current||!e)return;const I=Zr.getState().processSteps(C,E),{position:x,prevPosition:L,orientation:k,prevOrientation:D,velocity:N,prevVelocity:F,forward:U,right:y,speed:p,normalizedProgress:f}=Y.getState(),_=We.getState(),g=_.triggers.left>0,P=p/u,w=L.clone().lerp(x,I),V=D.clone().slerp(k,I),K=N.dot(U),B=N.dot(y),$=K-F.dot(U);t.current.updateVisuals(C,w,V,K,B,_.joystick.x,$,g,P,f)},Sr.car),b.jsx(b.Fragment,{children:b.jsx(Ss,{ref:t})})}const Oh=()=>{const t=S.useRef(null),e=()=>{const s=t.current;if(!s)return;const o=s.id.includes("Nintendo")||s.id.includes("057e"),c={[xe.Left]:s.axes[0]<-.1,[xe.Right]:s.axes[0]>.1,[xe.Up]:s.axes[1]<-.1,[xe.Down]:s.axes[1]>.1,[xe.A]:!!s.buttons[o?1:0],[xe.B]:!!s.buttons[o?0:1],[xe.X]:!!s.buttons[o?3:2],[xe.Y]:!!s.buttons[o?2:3],[xe.Start]:!!s.buttons[9],joystick:{x:s.axes[0],y:s.axes[1]},triggers:{left:s.buttons[6],right:s.buttons[7]}};We.getState().setState(c)},n=s=>{const{Up:o,Down:c,triggers:u}=We.getState();let h=u.right+ft*s*(o?1:-1),d=u.left+ft*s*(c?1:-1);h=Math.max(0,Math.min(1,h)),d=Math.max(0,Math.min(1,d)),We.getState().setTriggers(d,h)},r=s=>{const{Left:o,Right:c,Up:u,Down:h,joystick:d}=We.getState();let v=d.x,T=d.y;c&&!o?v+=ft*s:o&&!c?v-=ft*s:v=v>0?Math.max(0,v-ft*s):Math.min(0,v+ft*s),h&&!u?T+=ft*s:u&&!h?T-=ft*s:T=T>0?Math.max(0,T-ft*s):Math.min(0,T+ft*s),v=Math.max(-1,Math.min(1,v)),T=Math.max(-1,Math.min(1,T)),We.getState().setJoystick(v,T)};return re((s,o)=>{const u=navigator.getGamepads()[0];u?(t.current={id:u.id,axes:[...u.axes],buttons:u.buttons.map(h=>h.value)},e()):(r(o),n(o))},Sr.inputs),S.useEffect(()=>{const s=u=>{switch(u){case"ArrowLeft":case"a":case"A":return xe.Left;case"ArrowRight":case"d":case"D":return xe.Right;case"ArrowUp":case"w":case"W":return xe.Up;case"ArrowDown":case"s":case"S":case" ":return xe.Down;case"Escape":return xe.Start;case"Delete":case"Backspace":case"Enter":return xe.Y;default:return null}},o=u=>{if(u.repeat)return;const h=s(u.key);h&&We.getState().setButtonDown(h)},c=u=>{const h=s(u.key);h&&We.getState().setButtonUp(h)};return window.addEventListener("keydown",o),window.addEventListener("keyup",c),()=>{window.removeEventListener("keydown",o),window.removeEventListener("keyup",c)}},[]),null};function Lh(){return re(()=>{const t=q.getState(),e=Y.getState(),{normalizedProgress:n}=e,r=t.track;!t.raceStartTime||!r||!e||t.raceEndTime||n>=te.finishLine&&q.getState().endRace()}),null}const Fh=`attribute float side;
attribute float width;

varying vec2 vUv;

const float lineWidth = 0.2;

void main() {
  vUv = uv;
  vec3 offset = normal * (lineWidth * width * 0.5 * side);
  gl_Position = projectionMatrix * viewMatrix * vec4(position + offset, 1.0);
}
`,Nh=`uniform float time;
uniform bool rainbowMode;
const vec3 color = vec3(0.0, 0.0, 0.0);
const float globalOpacity = 0.5;

varying vec2 vUv;

vec3 pal(in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d) {
  return a + b * cos(6.28318 * (c * t + d));
}

void main() {
  if(rainbowMode) {
    float lerpFactor = mod(((1.0 - vUv.x) - time * 1.5) * 2.0, 1.0);
    vec3 rainbowColor = pal(lerpFactor, vec3(0.5, 0.5, 0.5), vec3(0.5, 0.5, 0.5), vec3(1.0, 1.0, 1.0), vec3(0.0, 0.33, 0.67));
    gl_FragColor = vec4(rainbowColor * 5.0, globalOpacity);
  } else {
    gl_FragColor = vec4(color, globalOpacity);
  }
}
`;class Uh extends Cu{constructor(){super();At(this,"positions",[]);At(this,"normals",[]);At(this,"side",[]);At(this,"width",[]);At(this,"uvs",[]);At(this,"indicesArray",[]);At(this,"widthCallback");At(this,"_attributes")}setPointsAndNormals(n,r,s){this.widthCallback=s!==void 0?s:void 0,this.positions=[],this.normals=[];for(let o=0;o<n.length;o+=3)this.positions.push(n[o],n[o+1],n[o+2]),this.positions.push(n[o],n[o+1],n[o+2]),this.normals.push(r[o],r[o+1],r[o+2]),this.normals.push(r[o],r[o+1],r[o+2]);this.process()}process(){const n=this.positions.length/6;this.side=[],this.width=[],this.indicesArray=[],this.uvs=[];let r;for(let s=0;s<n;s++)if(this.side.push(1),this.side.push(-1),this.widthCallback!==void 0?r=this.widthCallback(s/(n-1)):r=1,this.width.push(r),this.width.push(r),this.uvs.push(s/(n-1),0),this.uvs.push(s/(n-1),1),s<n-1){const o=s*2;this.indicesArray.push(o,o+1,o+2),this.indicesArray.push(o+2,o+1,o+3)}this._attributes?(this._attributes.position.copyArray(new Float32Array(this.positions)),this._attributes.position.needsUpdate=!0,this._attributes.side.copyArray(new Float32Array(this.side)),this._attributes.side.needsUpdate=!0,this._attributes.width.copyArray(new Float32Array(this.width)),this._attributes.width.needsUpdate=!0,this._attributes.uv.copyArray(new Float32Array(this.uvs)),this._attributes.uv.needsUpdate=!0,this._attributes.index.copyArray(new Uint16Array(this.indicesArray)),this._attributes.index.needsUpdate=!0,this._attributes.normal.copyArray(new Float32Array(this.normals)),this._attributes.normal.needsUpdate=!0):this._attributes={position:new Ct(new Float32Array(this.positions),3),side:new Ct(new Float32Array(this.side),1),width:new Ct(new Float32Array(this.width),1),uv:new Ct(new Float32Array(this.uvs),2),index:new Ct(new Uint16Array(this.indicesArray),1),normal:new Ct(new Float32Array(this.normals),3)},this.setAttribute("position",this._attributes.position),this.setAttribute("side",this._attributes.side),this.setAttribute("width",this._attributes.width),this.setAttribute("uv",this._attributes.uv),this.setAttribute("normal",this._attributes.normal),this.setIndex(this._attributes.index),this.computeBoundingSphere(),this.computeBoundingBox()}}const Jo=(t,e=1)=>(t.set(t.subarray(e)),t.fill(-1/0,-e),t),or=S.forwardRef((t,e)=>{const{target:n,verticalOffset:r=0,attenuation:s,length:o=1,decay:c=1,stride:u=0,interval:h=1}={...t},d=S.useRef(null),v=S.useRef(null),T=S.useRef(new M),E=S.useRef(new le),A=S.useRef(new M(1,0,0)),C=S.useRef(new M),I=S.useRef(0),x=S.useMemo(()=>new Uh,[]),L=S.useMemo(()=>new $e({uniforms:{time:{value:0},rainbowMode:{value:!1}},vertexShader:Fh,fragmentShader:Nh,transparent:!0}),[]),k=S.useRef(!0),D=S.useCallback(()=>{if(n){const{up:F,velocityAlignedQuaternion:U}=Y.getState();n.getWorldPosition(T.current),T.current.addScaledVector(F,r),E.current.copy(U),A.current.set(1,0,0).applyQuaternion(E.current),d.current=Float32Array.from({length:o*10*3},(y,p)=>T.current.getComponent(p%3)),v.current=Float32Array.from({length:o*10*3},(y,p)=>A.current.getComponent(p%3)),x.setPointsAndNormals(d.current,v.current,s)}},[o,s,x,n,r]),N=S.useCallback(F=>{k.current=F},[]);return S.useLayoutEffect(()=>{D()},[D]),re(({clock:F})=>{if(!(!n||!d.current||!v.current||k.current)){if(I.current===0){const{up:U,velocityAlignedQuaternion:y}=Y.getState();n.getWorldPosition(T.current),T.current.addScaledVector(U,r),E.current.copy(y),A.current.set(1,0,0).applyQuaternion(E.current);const p=1*c;if(T.current.distanceTo(C.current)>=u)for(let f=0;f<p;f++)Jo(d.current,3),Jo(v.current,3),d.current.set(T.current.toArray(),d.current.length-3),v.current.set(A.current.toArray(),v.current.length-3);C.current.copy(T.current)}I.current++,I.current=I.current%h,x.setPointsAndNormals(d.current,v.current,s),L.uniforms.time.value=F.elapsedTime}}),S.useImperativeHandle(e,()=>({resetTrail:D,setFreeze:N})),S.useEffect(()=>{const F=q.subscribe(U=>U.rainbowMode,U=>{L.uniforms.rainbowMode.value=U},{fireImmediately:!0});return()=>{F()}},[L]),b.jsx("mesh",{geometry:x,material:L})});or.displayName="Trail";function jh(){const n=Y(T=>T.rightFrontTireTrailTarget),r=Y(T=>T.leftFrontTireTrailTarget),s=Y(T=>T.rightBackTireTrailTarget),o=Y(T=>T.leftBackTireTrailTarget),c=S.useRef(!1),u=S.useRef(null),h=S.useRef(null),d=S.useRef(null),v=S.useRef(null);return re(()=>{var E,A,C,I,x,L,k,D,N,F,U,y;const{isDrifting:T}=Y.getState();T&&!c.current?((E=u.current)==null||E.resetTrail(),(A=h.current)==null||A.resetTrail(),(C=d.current)==null||C.resetTrail(),(I=v.current)==null||I.resetTrail(),(x=u.current)==null||x.setFreeze(!1),(L=h.current)==null||L.setFreeze(!1),(k=d.current)==null||k.setFreeze(!1),(D=v.current)==null||D.setFreeze(!1),c.current=!0):!T&&c.current&&((N=u.current)==null||N.setFreeze(!0),(F=h.current)==null||F.setFreeze(!0),(U=d.current)==null||U.setFreeze(!0),(y=v.current)==null||y.setFreeze(!0),c.current=!1)}),b.jsxs(b.Fragment,{children:[b.jsx(or,{ref:u,target:n,verticalOffset:-.2,length:2,decay:1,stride:0,interval:1}),b.jsx(or,{ref:h,target:r,verticalOffset:-.2,length:2,decay:1,stride:0,interval:1}),b.jsx(or,{ref:d,target:s,verticalOffset:-.2,length:2,decay:1,stride:0,interval:1}),b.jsx(or,{ref:v,target:o,verticalOffset:-.2,length:2,decay:1,stride:0,interval:1})]})}const Vh=`uniform vec3 startPos;
uniform vec3 midCoord1;
uniform vec3 midCoord2;
uniform vec3 endPos;
const float trailWidth = 2.0;
const float trailHeight = 1.13;

varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vUv;

vec3 cubicBezier(vec3 p0, vec3 p1, vec3 p2, vec3 p3, float t) {
  float t1 = 1.0 - t;
  float t1Squared = t1 * t1;
  float t1Cubed = t1Squared * t1;
  float tSquared = t * t;
  float tCubed = tSquared * t;
  return t1Cubed * p0 + 3.0 * t1Squared * t * p1 + 3.0 * t1 * tSquared * p2 + tCubed * p3;
}

void main() {
  vec3 currPoint = cubicBezier(startPos, midCoord1, midCoord2, endPos, uv.y);

  vec3 modelRight = normalize(vec3(modelMatrix[0].x, modelMatrix[0].y, modelMatrix[0].z));
  vec3 modelUp = normalize(vec3(modelMatrix[1].x, modelMatrix[1].y, modelMatrix[1].z));

  vec3 transformedPosition = currPoint +
    position.x * modelRight * trailWidth +
    position.y * modelUp * trailHeight;

  vec4 transformedNormal = modelMatrix * vec4(normal, 0.0);

  gl_Position = projectionMatrix * viewMatrix * vec4(transformedPosition, 1.0);

  vPosition = transformedPosition;
  vNormal = transformedNormal.xyz;
  vUv = uv;
}
`,Bh=`uniform float time;
uniform vec3 color;
const float pulseSpeed = 1.0;
const float pulseDensity = 12.56;
const float pulseExponent = 0.25;
uniform float fadeProgress;
const float noiseScaleX = 80.0;
const float noiseScaleY = 0.001;
const float fireSpeed = 1000.0;
const float fireLength = 0.9;
uniform bool rainbowMode;

varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vUv;

float rand(vec2 n) {
  return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
}

float noise(vec2 n) {
  const vec2 d = vec2(0.0, 1.0);
  vec2 b = floor(n), f = smoothstep(vec2(0.0), vec2(1.0), fract(n));
  return mix(mix(rand(b), rand(b + d.yx), f.x), mix(rand(b + d.xy), rand(b + d.yy), f.x), f.y);
}

float ramp(float t) {
  float v = step(0.0, t) * (1.0 - step(1.0, t));
  return smoothstep(0.0, 1.0, (1.0 - t)) * v;
}

vec3 pal(in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d) {
  return a + b * cos(6.28318 * (c * t + d));
}

void main() {
  vec2 adjustedUV = vUv;
  adjustedUV.y = 1.0 - adjustedUV.y;

  // Normal
  vec3 normal = normalize(vNormal);
  if(!gl_FrontFacing) {
    normal *= -1.0;
  }

  // Pulse effect
  float pulsePhase = (adjustedUV.y + time * pulseSpeed);
  float pulse = abs(sin(pulsePhase * pulseDensity) * 0.5 + 1.0);
  pulse = pow(pulse, pulseExponent);

  // Fresnel
  vec3 viewDirection = normalize(vPosition - cameraPosition);
  float fresnel = dot(viewDirection, normal) + 1.0;
  fresnel = pow(fresnel, 1.0);

  // Falloff
  float falloff = smoothstep(fadeProgress, 0.0, vUv.y);

  // When the trail is close to finish contracting, speed up the falloff
  if(fadeProgress < 0.05) {
    float finalFadeProgress = (0.05 - fadeProgress) / 0.05;
    falloff *= pow(1.0 - finalFadeProgress, 2.0);
  }

  // Fire
  float rampValue = ramp(1.0 - vUv.y);
  vec2 noiseUVs = vUv * vec2(noiseScaleX, noiseScaleY);
  noiseUVs.y -= time * fireSpeed;
  float noise = noise(noiseUVs) * fireLength;
  float fireMask = 1.0 - step(1.0 - rampValue, noise);

  // Holographic
  float holographic = pulse;
  holographic *= fresnel;
  holographic *= falloff * fireMask;

  if(rainbowMode) {
    float lerpFactor = mod(((1.0 - vUv.y) + time * 1.5), 1.0);
    vec3 rainbowColor = pal(lerpFactor, vec3(0.5, 0.5, 0.5), vec3(0.5, 0.5, 0.5), vec3(1.0, 1.0, 1.0), vec3(0.0, 0.33, 0.67));
    gl_FragColor = vec4(rainbowColor * 2.0, holographic);
  } else {
    gl_FragColor = vec4(color, holographic);
  }
}
`,vc="/cdn.shopify.com/3d/models/2c2f4c6e2f46bc37/trail.glb",zh=new M,$h=new M,Gh=new M,Wh=new M,Hh=new M,qh=new le,Kh=new G("#a36200").convertLinearToSRGB(),Yo=new G("#ff3000").convertLinearToSRGB(),Qo=({tailLightTarget:t})=>{const{nodes:e}=Ve(vc),n=S.useMemo(()=>new $e({uniforms:{startPos:{value:new M(0,0,0)},midCoord1:{value:new M(0,0,0)},midCoord2:{value:new M(0,0,0)},endPos:{value:new M(0,0,0)},time:{value:0},color:{value:Yo},fadeProgress:{value:0},rainbowMode:{value:!1}},vertexShader:Vh,fragmentShader:Bh,transparent:!0,side:bn,depthWrite:!1,blending:di}),[]),r=3,s=-.75,o=[5.4,4.2,3],c=[30,37.5,45],u=S.useRef(new M),h=S.useRef(new le),d=S.useRef(Array(r).fill(null).map(()=>new M)),v=S.useRef(null),T=S.useRef(Array(r).fill(null).map(()=>S.createRef())),E=S.useRef(!1),A=S.useRef(!1),C=S.useRef(!1);re((k,D)=>{if(!t||!v.current||!C.current&&!E.current)return;const N=zh,F=qh;t.getWorldPosition(N),t.getWorldQuaternion(F),v.current.position.copy(N),v.current.quaternion.copy(F);for(let y=0;y<r;y++){const p=$h.set(0,0,s*(y+1)).applyQuaternion(F).add(N),f=Gh.set(0,0,0);if(u.current.lengthSq()>0){const V=Wh.set(0,0,s*(y+1)).applyQuaternion(h.current).add(N),K=Hh.copy(p).sub(V),B=c[y]*-1;f.add(K.multiplyScalar(B))}const _=Math.min(D,.1),g=gt(d.current[y].x,f.x,o[y],_),P=gt(d.current[y].y,f.y,o[y],_),w=gt(d.current[y].z,f.z,o[y],_);d.current[y].set(g,P,w),T.current[y].current&&T.current[y].current.position.copy(p).add(d.current[y])}u.current.copy(N),h.current.copy(F),n.uniforms.startPos.value.copy(N),n.uniforms.midCoord1.value.copy(T.current[0].current.position),n.uniforms.midCoord2.value.copy(T.current[1].current.position),n.uniforms.endPos.value.copy(T.current[2].current.position),n.uniforms.time.value=k.clock.getElapsedTime();const{normalizedProgress:U}=Y.getState();U>=te.exitTheWater&&!A.current?(n.uniforms.color.value=Kh,A.current=!0):U<te.exitTheWater&&A.current&&(n.uniforms.color.value=Yo,A.current=!1),C.current&&(n.uniforms.fadeProgress.value=wr((Y.getState().speed-50)/170,0,1))});const[I,x]=Ot(()=>({from:{progress:0},onChange:()=>{const k=I.progress.get();n.uniforms.fadeProgress.value=k},onRest:()=>{v.current&&I.progress.get()===0&&(v.current.visible=!1,E.current=!1)}}),[n]),L=S.useRef(!1);return S.useEffect(()=>{const k=Y.subscribe(D=>D.currentJumpType,D=>{C.current||(D===je.moon?(v.current&&(v.current.visible=!0),x.start({to:{progress:1},delay:250,config:{easing:Lt.easeOutSine,duration:4e3}}),L.current=!0,E.current=!0):D===je.notJumping&&L.current&&(x.start({to:{progress:0},config:{easing:Lt.linear,duration:5e3}}),L.current=!1))});return()=>{k()}},[n,x]),S.useEffect(()=>{const k=q.subscribe(D=>D.rainbowMode,D=>{v.current&&(v.current.visible=D),n.uniforms.rainbowMode.value=D,C.current=D},{fireImmediately:!0});return()=>{k()}},[n]),b.jsxs(b.Fragment,{children:[b.jsx("group",{ref:v,visible:!1,children:b.jsx("mesh",{geometry:e.Trail.geometry,material:n,renderOrder:1})}),Array.from({length:r},(k,D)=>b.jsxs("mesh",{ref:T.current[D],visible:!1,renderOrder:1,children:[b.jsx("sphereGeometry",{args:[.015,32,16]}),b.jsx("meshBasicMaterial",{color:"red",depthTest:!1,transparent:!0})]},`lerped-sphere-${D}`))]})};Ve.preload(vc);function Xh(){const t=Y(n=>n.rightTailLightTrailTarget),e=Y(n=>n.leftTailLightTrailTarget);return b.jsxs(b.Fragment,{children:[b.jsx(Qo,{tailLightTarget:t}),b.jsx(Qo,{tailLightTarget:e})]})}const Jh=xu(Ru),Yh=`uniform highp sampler2D lut;
uniform bool screenBlend;

void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
    vec4 lutColor = vec4(texture(lut, vec2(inputColor.r, 0.5)).r, 
                        texture(lut, vec2(inputColor.g, 0.5)).g, 
                        texture(lut, vec2(inputColor.b, 0.5)).b, 
                        inputColor.a);
    
    if (screenBlend) {
      outputColor = 1.0 - (1.0 - inputColor) * (1.0 - lutColor);
      outputColor.a = inputColor.a; // Preserve original alpha
    } else {
      outputColor = lutColor;
    }
}
`;class Qh extends ac{constructor(e,n,r){super("LUTEffect",Yh,{blendFunction:e,uniforms:new Map([["lut",new Qi(n)],["screenBlend",new Qi(r)]])})}}const Zh=S.forwardRef(function(e,n){const r=S.useMemo(()=>new Qh(mi.NORMAL,e.lut,!1),[]);return S.useEffect(()=>{r.uniforms.get("screenBlend").value=e.screenBlend},[r,e.screenBlend]),S.useEffect(()=>{r.uniforms.get("lut").value=e.lut},[r,e.lut]),b.jsx("primitive",{ref:n,object:r})}),ed=`uniform float factor;

void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
    outputColor = inputColor;
}

void mainUv(inout vec2 uv) {
  if (factor > 0.0) {
    vec2 distortedUV = uv;
    float frequency = 6.0 * factor;
    float amplitude = 0.015 * factor;  
    float x = distortedUV.y * frequency + time * 0.7; 
    float y = distortedUV.x * frequency + time * 0.3;  
    distortedUV.x += cos(x + y) * amplitude * cos(y);
    distortedUV.y += sin(x - y) * amplitude * cos(y); 
    uv = distortedUV;
  }
}`;class td extends ac{constructor({blendFunction:e=mi.NORMAL,factor:n=0}={}){super("WaterEffect",ed,{blendFunction:e,uniforms:new Map([["factor",new Qi(n)]])})}}const nd=()=>{const t=S.useMemo(()=>new td({blendFunction:mi.NORMAL,factor:0}),[]),e=t.uniforms.get("factor"),[,n]=Ot(()=>({from:{factor:0},config:{tension:40,friction:25},onChange:({value:r})=>{e&&(e.value=r.factor)},onRest:()=>{e&&(e.value=0)}}));return S.useEffect(()=>q.subscribe(r=>r.isCameraUnderwater,r=>{r&&n.start({from:{factor:3.8},to:{factor:0}})}),[n]),b.jsx("primitive",{object:t})};function rd(){const t=Zi("/cdn.shopify.com/s/files/1/0921/8919/6588/files/LUT_05_128_2.png?v=1747662787");t.colorSpace=Nn;const e=Zi("/cdn.shopify.com/s/files/1/0921/8919/6588/files/waterLUT_03_128_2.png?v=1747662579");e.colorSpace=Nn;const n=q(c=>c.isCameraUnderwater),r=q(c=>c.isCameraInMoonArea);let s=t;n?s=e:r&&(s=t);const o=S.useRef(null);return re(({scene:c,camera:u})=>{if(!q.getState().hasShadersCompiled&&o.current){const d=new Ou(40,1,.1,1e4);d.position.set(500,100,0),d.rotation.set(0,Math.PI/2,0);const v=[];c.traverse(T=>{T.visible===!1&&(v.push(T),T.visible=!0)}),o.current.setMainCamera(d),o.current.render(0),o.current.setMainCamera(u),q.getState().setHasShadersCompiled(!0),v.forEach(T=>T.visible=!1)}}),b.jsx(b.Fragment,{children:b.jsxs(ku,{stencilBuffer:!1,multisampling:0,ref:o,children:[b.jsx(nd,{}),b.jsx(Zh,{lut:s,screenBlend:n}),b.jsx(Mu,{luminanceThreshold:.3,luminanceSmoothing:1,intensity:.55,kernelSize:Du.VERY_SMALL,mipmapBlur:!0,radius:.7,blendFunction:mi.SCREEN,levels:8}),b.jsx(Jh,{contrast:.32})]})})}const id=`attribute vec2 uv1;

varying vec3 vLocalPosition;
varying vec2 vUv;
varying vec2 vUv1;

void main() {
  vLocalPosition = position;
  // Regular icosphere UVs
  vUv = uv;
  // Special icosphere UVs (icosphere is split into 6 rounded planes)
  vUv1 = uv1;

  mat4 rotationMatrix = modelViewMatrix;
  // Remove the translation component
  rotationMatrix[3].xyz = vec3(0.0);

  gl_Position = projectionMatrix * rotationMatrix * vec4(position, 1.0);
}
`,sd=`uniform float time;
uniform float beachToMoonLerpFactor;
// Beach gradient uniforms
uniform sampler2D beachGradientMap;
const float beachGradientBloomIntensity = 0.95;
const float beachGradientHorizonHeight = 0.01;
const float beachStarThreshold = 0.375;
const float beachStarColorWeight = 5.0;

// Transition gradient uniforms
const vec3 transitionGradientBottomColor = vec3(0.1058871939374596, 0.0, 0.3843198835185181);
const vec3 transitionGradientTopColor = vec3(0.0, 0.0, 0.0);
const float transitionGradientBloomIntensity = 1.0;
// Space gradient uniforms
const float spaceGradientBottomColorIntensity = 0.35;
const vec3 spaceGradientBottomColor = vec3(0, 1.0, 1.0);
const vec3 spaceGradientTopColor = vec3(0.0470626377157257, 0.0274509803904, 0.1803978064860461);
const float spaceGradientTopColorHeight = 0.075;
const float spaceGradientColorWeight = 0.5;
const float noiseScale = 25.0;
const float noiseAmplitude = 0.1;
// Star uniforms
const vec3 starColor = vec3(1.0, 1.0, 1.0);
const float starColorWeight = 1.0;
const float zoomLevel = 150.0;
const float innerFadeRadius = 0.0;
const float outerFadeRadius = 0.04;
const float minStarSize = 0.0;
const float starSeed = 10.0;
uniform float dprScalingFactor;
uniform float screenAreaScalingFactor;

varying vec3 vLocalPosition;
// Regular icosphere UVs
varying vec2 vUv;
// Special icosphere UVs (icosphere is split into 6 rounded planes)
varying vec2 vUv1;

float Hash21(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float Star(vec2 uv, float size, float n) {
  // Distance from center of grid cell
  float d = length(uv);
  // Scale the radii based on the star size
  float innerRadius = innerFadeRadius * size;
  float outerRadius = outerFadeRadius * size;
  // Smooth transition between inner solid part and outer fade
  float shape = smoothstep(outerRadius, innerRadius, d);
  return shape;
}

vec3 StarLayer(vec2 screenUVs) {
  // Grid UVs
  vec2 gv = fract(screenUVs) - 0.5;
  // ID of grid cell
  vec2 id = floor(screenUVs);
  // Compute the shape of the star
  float n = Hash21(id);
  float size = max(fract(n * 345.32), minStarSize);
  float starShape = Star(gv - vec2(n, fract(n * 34.)) + .5, size, n);
  return starColor * starShape * size;
}

vec3 screenSpaceDither(vec2 screenPos) {
  vec3 dither = vec3(dot(vec2(171.0, 231.0), screenPos + time));
  dither = fract(dither / vec3(103.0, 71.0, 97.0)) - 0.5;
  return dither / 255.0;
}

float noise(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);

  // Four corners in 2D of a tile
  float a = Hash21(i);
  float b = Hash21(i + vec2(1.0, 0.0));
  float c = Hash21(i + vec2(0.0, 1.0));
  float d = Hash21(i + vec2(1.0, 1.0));

  // Smooth interpolation
  vec2 u = f * f * (3.0 - 2.0 * f);

  // Mix 4 corners
  return mix(a, b, u.x) +
    (c - a) * u.y * (1.0 - u.x) +
    (d - b) * u.x * u.y;
}

vec3 computeGradientColor(float dotProduct) {
  float lerpFactor = clamp(dotProduct, beachGradientHorizonHeight, 1.0);
  vec3 gradientColor = texture(beachGradientMap, vec2(0.5, lerpFactor)).rgb * beachGradientBloomIntensity;
  gradientColor += screenSpaceDither(gl_FragCoord.xy);
  return gradientColor;
}

vec3 computeSpaceGradient(float dotProduct) {
  float noise = noise(vUv * noiseScale) * noiseAmplitude;
  float topColorPos = spaceGradientTopColorHeight + noise;
  float lerpFactor = clamp(dotProduct / topColorPos, 0.0, 1.0);
  vec3 gradientColor = mix(spaceGradientBottomColor * spaceGradientBottomColorIntensity, spaceGradientTopColor, lerpFactor);
  return gradientColor;
}

void main() {
  float dotProduct = dot(normalize(abs(vLocalPosition)), vec3(0.0, 1.0, 0.0));

  if(beachToMoonLerpFactor == 0.0) {
    vec3 gradientColor = computeGradientColor(dotProduct);
    vec3 starColor = StarLayer((vUv1 * zoomLevel * dprScalingFactor * screenAreaScalingFactor) + starSeed);
    float fadeStrength = smoothstep(beachStarThreshold, 1.0, vUv.y);
    gl_FragColor.rgb = gradientColor + starColor * beachStarColorWeight * pow(fadeStrength, 3.0);
  } else if(beachToMoonLerpFactor > 0.0 && beachToMoonLerpFactor < 1.0) {
    vec3 transitionGradientColor = mix(transitionGradientBottomColor, transitionGradientTopColor, dotProduct) * transitionGradientBloomIntensity;
    vec3 starColor = StarLayer((vUv1 * zoomLevel * dprScalingFactor * screenAreaScalingFactor) + starSeed);
    vec3 spaceColor = computeSpaceGradient(dotProduct) * spaceGradientColorWeight + starColor * starColorWeight;
    gl_FragColor.rgb = mix(transitionGradientColor, spaceColor, beachToMoonLerpFactor);
  } else {
    vec3 starColor = StarLayer((vUv1 * zoomLevel * dprScalingFactor * screenAreaScalingFactor) + starSeed);
    vec3 spaceColor = computeSpaceGradient(dotProduct) * spaceGradientColorWeight + starColor * starColorWeight;
    gl_FragColor.rgb = spaceColor;
  }

  gl_FragColor.a = 1.0;
}
`,yc="/cdn.shopify.com/3d/models/6a4c02f8702e5b91/sky_icosphere.glb",od="/cdn.shopify.com/s/files/1/0921/8919/6588/files/sky-gradient-17-skinny.webp?v=1747691933";function ad(){const t=Jt(u=>u.gl),e=Jt(u=>u.size),{nodes:n}=Ve(yc),r=Zi(od);r.wrapS=r.wrapT=Un,r.colorSpace=Nn;const s=S.useCallback(()=>wr(e.width*e.height/1045440,0,1),[e]),o=S.useMemo(()=>new $e({uniforms:{time:{value:0},beachToMoonLerpFactor:{value:0},beachGradientMap:{value:r},dprScalingFactor:{value:t.getPixelRatio()>=2?1:.5},screenAreaScalingFactor:{value:s()}},vertexShader:id,fragmentShader:sd,side:cc}),[r,t,s]);S.useEffect(()=>{const u=()=>{o.uniforms.screenAreaScalingFactor.value=s()};return u(),window.addEventListener("resize",u),()=>{window.removeEventListener("resize",u)}},[s,o]),re(({clock:u})=>{o.uniforms.time.value=u.getElapsedTime();const{normalizedProgress:h}=Y.getState();h>=te.exitTheWater&&h<=te.moonApex?o.uniforms.beachToMoonLerpFactor.value=fi(te.exitTheWater,te.moonApex,h):h>te.moonApex?o.uniforms.beachToMoonLerpFactor.value=1:o.uniforms.beachToMoonLerpFactor.value=0});const c=q(u=>u.isCameraUnderwater);return b.jsx("mesh",{geometry:n.Mesh_0.geometry,material:o,scale:3e3,visible:!c})}Ve.preload(yc);const cd=`const float uvScalingFactor = 4000.0;

varying vec2 vUv;
varying vec3 vViewPosition;
varying mat3 vNormalMatrix;

void main() {
  vUv = uv * uvScalingFactor;
  vec4 viewPosition = modelViewMatrix * vec4(position, 1.0);
  vViewPosition = -viewPosition.xyz;
  vNormalMatrix = normalMatrix;
  gl_Position = projectionMatrix * viewPosition;
}
`,ld=`uniform float time;
uniform sampler2D waterNormalMap;
const float distortionIntensity = 10.0;
const vec3 underWaterFogColor = vec3(0.00030352698352941176, 0.14126329113044458, 0.23839757380151394);
const vec3 aboveWaterFogColor = vec3(0.8631572134510892, 0.29613827078752575, 0.12743768042608497);
const vec3 aboveWaterColor1 = vec3(0.20863687013464577, 0.1844749944900301, 0.22696587349938613);
const vec3 aboveWaterColor2 = vec3(0.05126945836711539, 0.031896033067374104, 0.174647403645279);
uniform bool isCameraUnderwater;
uniform bool isExitingWater;

varying vec2 vUv;
varying vec3 vViewPosition;
varying mat3 vNormalMatrix;

vec4 getNoise(vec2 uv) {
  vec2 uv0 = (uv / 103.0) + vec2(time / 17.0, time / 29.0);
  vec2 uv1 = uv / 107.0 - vec2(time / -19.0, time / 31.0);
  vec2 uv2 = uv / vec2(8907.0, 9803.0) + vec2(time / 101.0, time / 97.0);
  vec2 uv3 = uv / vec2(1091.0, 1027.0) - vec2(time / 109.0, time / -113.0);
  vec4 noise = texture2D(waterNormalMap, uv0) +
    texture2D(waterNormalMap, uv1) +
    texture2D(waterNormalMap, uv2) +
    texture2D(waterNormalMap, uv3);
  return noise * 0.5 - 1.0;
}

vec3 inverseTransformDirection(in vec3 dir, in mat4 matrix) {
  return normalize((vec4(dir, 0.0) * matrix).xyz);
}

void main() {
  vec4 noise = getNoise(vUv);
  vec3 geometryNormal = normalize(noise.xzy * vec3(1.5, distortionIntensity, 1.5));
  geometryNormal = normalize(vNormalMatrix * geometryNormal);

  vec3 geometryViewDir = normalize(vViewPosition);
  vec3 reflectVec = normalize(reflect(-geometryViewDir, geometryNormal));
  reflectVec = inverseTransformDirection(reflectVec, viewMatrix);
  float dotProduct = dot(reflectVec, vec3(0.0, 1.0, 0.0));

  if(isCameraUnderwater) {
    vec3 underwaterColor = underWaterFogColor;
    underwaterColor.g *= 2.0;

    if(isExitingWater) {
      underwaterColor.g *= 1.25;
      underwaterColor *= (-dotProduct * 0.5) * (1.0 + step(0.5, -dotProduct));
    } else {
      underwaterColor *= -dotProduct * 8.0;
    }
    gl_FragColor = vec4(underwaterColor, 1.0);
    float fogFactor = smoothstep(1.0, 300.0, vViewPosition.z);
    gl_FragColor.rgb = mix(gl_FragColor.rgb, underWaterFogColor, fogFactor);
  } else {
    dotProduct = abs(dotProduct) * 3.0;
    vec3 gradientColor = mix(aboveWaterColor1, aboveWaterColor2, dotProduct);
    gl_FragColor = vec4(gradientColor, 1.0);
    float fogFactor = smoothstep(1.0, 300.0, vViewPosition.z) * 0.3;
    gl_FragColor.rgb = mix(gl_FragColor.rgb, aboveWaterFogColor, fogFactor);
  }
}
`,wc="/cdn.shopify.com/s/files/1/0921/8919/6588/files/waternormals_512-min.jpg?v=1747657859";function ud(){const t=Oe(wc,s=>{s.wrapS=s.wrapT=Un}),e=S.useRef(null),n=S.useMemo(()=>new $e({uniforms:{time:{value:0},waterNormalMap:{value:t},isCameraUnderwater:{value:!1},isExitingWater:{value:!1}},vertexShader:cd,fragmentShader:ld,side:bn}),[t]);re(s=>{const{normalizedProgress:o}=Y.getState(),c=o<te.exitTheWater;e.current&&(e.current.visible=c),c&&(n.uniforms.time.value=s.clock.elapsedTime*.5,n.uniforms.isExitingWater.value=o>fr.moon.start)}),S.useEffect(()=>{const s=q.subscribe(o=>o.isCameraUnderwater,o=>{n.uniforms.isCameraUnderwater.value=o});return()=>{s()}},[n]);const r=S.useMemo(()=>{const s=new tn(1,1);return s.applyMatrix4(new tt().makeRotationX(Math.PI*-.5)),s},[]);return b.jsx("mesh",{ref:e,geometry:r,material:n,position:[-1366.0765370667104,0,0],scale:5e3})}Oe.preload(wc);const hd=`uniform mat4 textureProjectionMatrix;

varying vec3 vWorldPosition;
varying vec3 vViewPosition;
varying vec2 vUv;
varying vec4 vTextureProjectionUv;

#ifdef USE_PLAYER2_SHADOW
uniform mat4 player2TextureProjectionMatrix;
varying vec4 vPlayer2TextureProjectionUv;
#endif

void main() {
  vUv = uv;
  vTextureProjectionUv = textureProjectionMatrix * modelMatrix * vec4(position, 1.0);
  #ifdef USE_PLAYER2_SHADOW
  vPlayer2TextureProjectionUv = player2TextureProjectionMatrix * modelMatrix * vec4(position, 1.0); 
  #endif

  vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
  vec4 viewPosition = modelViewMatrix * vec4(position, 1.0);
  vViewPosition = -viewPosition.xyz;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,dd=`uniform vec3 color1;
uniform vec3 color2;
uniform sampler2D carShadowTexture;
const vec3 shadowColor = vec3(0.0, 0.0, 0.0);
const float shadowOpacity = 0.95;
uniform bool enableCaustics;
uniform vec3 fogColor;
uniform float fogDistance;

varying vec2 vUv;
varying vec4 vTextureProjectionUv;

#ifdef USE_PLAYER2_SHADOW
varying vec4 vPlayer2TextureProjectionUv;
uniform sampler2D player2ShadowTexture;
#endif

uniform sampler2D causticsMap;
uniform float time;
varying vec3 vWorldPosition;
varying vec3 vViewPosition;

const float causticsSpeed = 0.04;
const float causticsStrength = 0.035;
const float caustics1Scale = 0.02;
const float caustics2Scale = 0.018;

vec3 sampleCaustics(sampler2D tex, vec3 worldPos, float scale, float speed, float time) {
  vec2 xzCoords = worldPos.xz;
  vec2 causticsUv = xzCoords * scale + speed * time;
  return texture2D(tex, causticsUv).rgb;
}

vec3 applyShadow(vec3 baseColor, vec4 projectionUv, sampler2D shadowTexture) {
  vec2 uv = projectionUv.xy * 0.5 + 0.5;
  if(uv.x >= 0.0 && uv.x <= 1.0 && uv.y >= 0.0 && uv.y <= 1.0) {
    float shadowAlpha = texture(shadowTexture, uv).a;
    return mix(baseColor, shadowColor, shadowAlpha * shadowOpacity);
  }
  return baseColor;
}

void main() {
  float v = mod(vUv.x * 1000.0, 2.0);
  vec3 baseColor = v < 1.0 ? color1 : color2;

  float normalizedY = (vUv.y * 2.0) - 1.0;
  float edgeFactor = normalizedY * normalizedY;
  // Apply darkening based on distance from center
  float darkenAmount = 0.6 * edgeFactor;
  vec3 color = baseColor * (1.0 - darkenAmount);

  if(enableCaustics) {
    vec3 caustics1 = sampleCaustics(causticsMap, vWorldPosition, caustics1Scale, causticsSpeed, time);
    vec3 caustics2 = sampleCaustics(causticsMap, vWorldPosition, caustics2Scale, -causticsSpeed * 0.5, time);

    vec3 caustics = min(caustics1, caustics2);
    // Tint towards green and fade off towards edges
    caustics.g *= 4.5;
    color += caustics * causticsStrength * max(0.0, (1.0 - darkenAmount * 2.0));
  }

  // Apply player 1 shadow
  color = applyShadow(color, vTextureProjectionUv, carShadowTexture);

  // Apply player 2 shadow if enabled
  #ifdef USE_PLAYER2_SHADOW
  color = applyShadow(color, vPlayer2TextureProjectionUv, player2ShadowTexture);
  #endif

  gl_FragColor = vec4(color, 1.0);

  if(fogDistance > 0.0) {
    float fogFactor = smoothstep(1.0, fogDistance, vViewPosition.z);
    gl_FragColor.rgb = mix(gl_FragColor.rgb, fogColor, fogFactor);
  }
}
`,Sc="/cdn.shopify.com/s/files/1/0921/8919/6588/files/car_shadow_128_256_compressed.png?v=1747659396",_c="/cdn.shopify.com/s/files/1/0921/8919/6588/files/caustics-texture_128.jpg?v=1747660972";function _s({roadGeometry:t,color1:e=new G(.02,.02,.02),color2:n=new G(.025,.025,.025),fogDistance:r=-1,fogColor:s=new G(0,0,0),enableCaustics:o=!1}){const c=Oe(Sc,A=>{A.generateMipmaps=!1}),u=ei(A=>A.active),h=Oe(_c,A=>{A.wrapS=Un,A.wrapT=Un}),d=S.useMemo(()=>new $e({uniforms:{color1:{value:e},color2:{value:n},textureProjectionMatrix:{value:new tt},player2TextureProjectionMatrix:{value:new tt},carShadowTexture:{value:c},time:{value:0},causticsMap:{value:h},enableCaustics:{value:o},fogColor:{value:s},fogDistance:{value:r}},defines:{USE_PLAYER2_SHADOW:u?"1":"0"},vertexShader:hd,fragmentShader:dd,side:bn}),[c,h,o,e,n,r,s,u]),v=S.useRef(new M(1.2,1.75,1)),T=Y(A=>A.shadowCameraTarget),E=ei(A=>A.shadowCameraTarget);return re(({clock:A})=>{d.uniforms.time.value=A.getElapsedTime()}),re(()=>{T&&(T.updateWorldMatrix(!0,!1),d.uniforms.textureProjectionMatrix.value.copy(T.matrixWorld).scale(v.current).invert()),E&&(E.updateWorldMatrix(!0,!1),d.uniforms.player2TextureProjectionMatrix.value.copy(E.matrixWorld).scale(v.current).invert())},1),b.jsx(b.Fragment,{children:t&&b.jsx("mesh",{geometry:t,material:d})})}Oe.preload(Sc);Oe.preload(_c);const fd=`uniform float time;
const float speed = 25.0;
const float flapAmplitude = 5.0;
const float flapSpeed = 5.0;
const float flapFrequency = 1.0;

attribute vec3 circleCenter;
attribute float circleRadius;
attribute vec2 positionOffset;
attribute float scale;
attribute float timeOffset;
attribute float randomNumber;
attribute float rotationDirection;

const vec3 worldUp = vec3(0.0, 1.0, 0.0);

vec3 computeParticlePosition(float currentTime) {
  // Compute the position of the particle along the circular path
  float particleTime = currentTime + timeOffset;
  // Adjust speed based on radius to maintain constant linear velocity
  // This makes the parameter "speed" represent units per second regardless of circle size
  float angle = particleTime * speed / circleRadius * rotationDirection;
  vec3 radiusVector = vec3(cos(angle) * circleRadius, 0.0, sin(angle) * circleRadius);
  vec3 particlePosition = circleCenter + radiusVector;

  // Offset the particle along the radius vector and the up vector
  // Here we combine the constant offsets we receive as attributes with sinusoidal offsets
  float randomizedParticleTime = currentTime + randomNumber;
  float xOffset = positionOffset.x + cos(randomizedParticleTime * 2.5);
  float yOffset = positionOffset.y + sin(randomizedParticleTime * 2.5);
  particlePosition += xOffset * normalize(radiusVector) + yOffset * worldUp;

  return particlePosition;
}
`,md=`// Compute the current position of the particle and the next one
vec3 particlePosition = computeParticlePosition(time);
vec3 nextParticlePosition = computeParticlePosition(time + 0.01);

// Compute the coordinate frame of the particle
vec3 direction = normalize(nextParticlePosition - particlePosition);
vec3 right = normalize(cross(direction, worldUp));
vec3 up = normalize(cross(right, direction));

// Orient the particle so it faces its movement direction
// Here we also make it flap to make it look like a bird that's flying
vec3 deformedPosition = position;
deformedPosition.y += cos((time + randomNumber) * flapSpeed + uv.y * flapFrequency) * flapAmplitude * (1.0 - uv.y);
vec3 orientedPosition = deformedPosition.x * right * scale + deformedPosition.y * up * scale + deformedPosition.z * direction * scale * - 1.0;

vec3 transformed = particlePosition + orientedPosition;
`;function pd({circleCenters:t,circleRadii:e,seagullMesh:n}){const s=t.length,o=7*s,c=S.useMemo(()=>{const x=new Float32Array(o*10);let L=0;for(let N=0;N<s;N++){const F=t[N],U=e[N],y=5+Math.random()*1,p=2+Math.random()*1,f=Math.random()>.5?1:-1;for(let _=0;_<7;_++){const g=Math.random()*Math.PI*2,P=y*Math.random(),w=Math.cos(g)*P,V=Math.sin(g)*P;x[L*10+0]=F.x,x[L*10+1]=F.y,x[L*10+2]=F.z,x[L*10+3]=U,x[L*10+4]=w,x[L*10+5]=V,x[L*10+6]=.25+Math.random()*.1,x[L*10+7]=Math.random()*p,x[L*10+8]=Math.random()*100,x[L*10+9]=f,L++}}const k=new Ke(x,10),D=n.geometry;return D.setAttribute("circleCenter",new z(k,3,0)),D.setAttribute("circleRadius",new z(k,1,3)),D.setAttribute("positionOffset",new z(k,2,4)),D.setAttribute("scale",new z(k,1,6)),D.setAttribute("timeOffset",new z(k,1,7)),D.setAttribute("randomNumber",new z(k,1,8)),D.setAttribute("rotationDirection",new z(k,1,9)),D},[t,e,s,o,n]),u=S.useRef(null),h=S.useMemo(()=>{const d=n.material.clone();return d.onBeforeCompile=v=>{u.current=v,v.uniforms.time={value:0},v.vertexShader=v.vertexShader.replace("#include <common>",`
        #include <common>
        ${fd}`),v.vertexShader=v.vertexShader.replace("#include <begin_vertex>",`
        ${md}`)},d},[n]);return re(d=>{u.current&&(u.current.uniforms.time.value=d.clock.elapsedTime)}),b.jsx("instancedMesh",{args:[c,h,o],frustumCulled:!1})}const gd=`uniform float time;
const float branchSwayAmplitude = 0.05;
const float branchSwaySpeed = 5.0;
const float branchSwayFrequency = 100.0;
const float trunkSwayAmplitude = 0.025;
const float trunkSwaySpeed = 0.5;

attribute float globalTimeOffset;
attribute vec2 uv1;
attribute float _timeoffset;
`,vd=`vec3 transformed = position;

// Make the branches sway vertically
float branchTime = time * branchSwaySpeed + globalTimeOffset + _timeoffset * 100.0 + uv1.y * branchSwayFrequency;
float branchAmplitude = (1.0 - uv1.y) * branchSwayAmplitude;
transformed.y += cos(branchTime) * branchAmplitude;

// Make the trunk sway in the XZ plane
float trunkTime = time * trunkSwaySpeed + globalTimeOffset;
float trunkAmplitude = position.y * trunkSwayAmplitude;
transformed.x += cos(trunkTime) * trunkAmplitude;
transformed.z += sin(trunkTime) * trunkAmplitude;
`;function yd({palmTreePositions:t,leftStartingLinePalmTreePosition:e,rightStartingLinePalmTreePosition:n,palmTreeMesh:r}){const s=t.length+2,o=S.useMemo(()=>{const v=new Float32Array(s*1);for(let A=0;A<s;A++)v[A*1+0]=Math.random()*100;const T=new Ke(v,1),E=r.geometry;return E.setAttribute("globalTimeOffset",new z(T,1,0)),E},[r,s]),c=S.useRef(null);S.useEffect(()=>{if(c.current){const E=t.length;for(let A=0;A<E;A++){const C=.75+Math.random()*.5;c.current.setMatrixAt(A,new tt().compose(t[A],new le().setFromAxisAngle(new M(0,1,0),2*Math.PI*Math.random()).multiply(new le().setFromAxisAngle(new M(1,0,0),10*Math.PI/180)),new M(C,C,C)))}c.current.setMatrixAt(E,new tt().compose(e,new le().setFromAxisAngle(new M(0,1,0),Math.PI),new M(.9,.9,.9))),c.current.setMatrixAt(E+1,new tt().compose(n.clone().add(new M(0,2.5,0)),new le().setFromAxisAngle(new M(0,1,0),.5*Math.PI).multiply(new le().setFromAxisAngle(new M(0,0,1),-7.5*Math.PI/180)),new M(.9,.9,.9))),c.current.instanceMatrix.needsUpdate=!0}},[t,e,n]);const u=S.useRef(null),h=S.useMemo(()=>{const d=r.material.clone();return d.onBeforeCompile=v=>{u.current=v,v.uniforms.time={value:0},v.vertexShader=v.vertexShader.replace("#include <common>",`
        #include <common>
        ${gd}`),v.vertexShader=v.vertexShader.replace("#include <begin_vertex>",`
        ${vd}`)},d},[r]);return re(d=>{u.current&&(u.current.uniforms.time.value=d.clock.elapsedTime)}),b.jsx("instancedMesh",{ref:c,args:[o,h,s],frustumCulled:!1})}const wd=`uniform float time;
const float floatSpeed = 2.0;
const float rotationAmplitude = 0.5;
const float verticalFloatAmplitude = 0.75;

attribute float timeOffset;
`,Sd=`float floatTime = time * floatSpeed + timeOffset;
float oneQuarterFloatTime = floatTime * 0.25;
float oneEighthAmplitude = 0.125 * rotationAmplitude;
float sinOneQuarterFloatTime = sin(oneQuarterFloatTime);

float rotX = cos(oneQuarterFloatTime) * oneEighthAmplitude;
float rotY = sinOneQuarterFloatTime * oneEighthAmplitude;
float rotZ = sinOneQuarterFloatTime * 0.05 * rotationAmplitude;

vec3 transformed = position;

// Approximate rotation
transformed.x += rotZ * transformed.y - rotY * transformed.z;
transformed.y += - rotZ * transformed.x + rotX * transformed.z;
transformed.z += rotY * transformed.x - rotX * transformed.y;

// Float vertically
transformed.y += sinOneQuarterFloatTime * verticalFloatAmplitude;
`;function _d({sailboatPositions:t,sailboatMesh:e}){const n=t.length,r=S.useMemo(()=>{const h=new Float32Array(n*1);for(let T=0;T<n;T++)h[T*1+0]=Math.random()*100;const d=new Ke(h,1),v=e.geometry;return v.setAttribute("timeOffset",new z(d,1,0)),v},[e,n]),s=S.useRef(null);S.useEffect(()=>{if(s.current){for(let d=0;d<n;d++){const v=.75+Math.random()*.5;s.current.setMatrixAt(d,new tt().compose(t[d],new le().setFromAxisAngle(new M(0,1,0),2*Math.PI*Math.random()),new M(v,v,v)))}s.current.instanceMatrix.needsUpdate=!0}},[n,t]);const o=S.useRef(null),c=S.useMemo(()=>{const u=e.material.clone();return u.onBeforeCompile=h=>{o.current=h,h.uniforms.time={value:0},h.vertexShader=h.vertexShader.replace("#include <common>",`
        #include <common>
        ${wd}`),h.vertexShader=h.vertexShader.replace("#include <begin_vertex>",`
        ${Sd}`)},u},[e]);return re(u=>{o.current&&(o.current.uniforms.time.value=u.clock.elapsedTime)}),b.jsx("instancedMesh",{ref:s,args:[r,c,n],frustumCulled:!1})}const bd=`uniform float time;
const float floatAmplitude = 2.5;
const float floatSpeed = 0.15;

attribute float timeOffset;
attribute float balloonID;

varying float vBalloonID;
`,Pd=`float t = time * floatSpeed + timeOffset;
vec3 transformed = position;
transformed.y += cos(t) * floatAmplitude;
vBalloonID = balloonID;
`,Td=`varying float vBalloonID;
`,Id=`vec2 adjustedUV = vMapUv;
adjustedUV.x += vBalloonID * 0.125;
diffuseColor *= texture2D(map, adjustedUV);
`;function Ad({balloonPositions:t,balloonMesh:e}){const n=t.length,r=S.useMemo(()=>{const h=new Float32Array(n*2);for(let T=0;T<n;T++)h[T*2+0]=Math.random()*100,h[T*2+1]=Math.floor(Math.random()*8);const d=new Ke(h,2),v=e.geometry;return v.setAttribute("timeOffset",new z(d,1,0)),v.setAttribute("balloonID",new z(d,1,1)),v},[e,n]),s=S.useRef(null);S.useEffect(()=>{if(s.current){for(let d=0;d<n;d++){const v=7.5+Math.random()*0;s.current.setMatrixAt(d,new tt().compose(t[d],new le().setFromAxisAngle(new M(0,1,0),2*Math.PI*Math.random()),new M(v,v,v)))}s.current.instanceMatrix.needsUpdate=!0}},[t,n]);const o=S.useRef(null),c=S.useMemo(()=>{const u=e.material.clone();return u.side=bn,u.onBeforeCompile=h=>{o.current=h,h.uniforms.time={value:0},h.vertexShader=h.vertexShader.replace("#include <common>",`
        #include <common>
        ${bd}`),h.vertexShader=h.vertexShader.replace("#include <begin_vertex>",`
        ${Pd}`),h.fragmentShader=h.fragmentShader.replace("#include <common>",`
        #include <common>
        ${Td}`),h.fragmentShader=h.fragmentShader.replace("#include <map_fragment>",`
        ${Id}`)},u},[e]);return re(u=>{o.current&&(o.current.uniforms.time.value=u.clock.elapsedTime)}),b.jsx("instancedMesh",{ref:s,args:[r,c,n],frustumCulled:!1})}const bc="/cdn.shopify.com/3d/models/054d73793e9e364e/racing_game_sign_break_12.glb",Ed="ArmatureAction.001";function Cd(t){const{animations:e,scene:n,nodes:r}=Ve(bc),{actions:s}=lc(e,n),o=S.useMemo(()=>s==null?void 0:s[Ed],[s]);return S.useEffect(()=>{r.road_ramp020.frustumCulled=!1,r.road_ramp020_1.frustumCulled=!1},[r]),S.useEffect(()=>{o&&(o.loop=uc,o.clampWhenFinished=!0)},[o]),re(()=>{const{normalizedProgress:c}=Y.getState();o&&(c>=te.signBreak?o.isRunning()||o.play():(o.isRunning()||o.paused)&&(o.stop(),o.reset()))}),b.jsxs(b.Fragment,{children:[b.jsx("group",{dispose:null,position:t.position,rotation:t.rotation,scale:t.scale,children:b.jsx("mesh",{geometry:t.geometry,material:t.material})}),b.jsx("primitive",{object:n})]})}Ve.preload(bc);const bs="/cdn.shopify.com/3d/models/43dd348f4b006010/racing_game_track_69_beach.glb";function xd({visible:t=!1}){const{nodes:e,materials:n,scene:r}=Ve(bs),[s,o]=S.useState(null),[c,u]=S.useState({centers:[],radii:[],mesh:null}),[h,d]=S.useState({positions:[],leftStartingLinePalmTreePosition:new M,rightStartingLinePalmTreePosition:new M,mesh:null}),[v,T]=S.useState({positions:[],mesh:null}),[E,A]=S.useState({positions:[],mesh:null});return S.useLayoutEffect(()=>{o(e.road_mesh_beach.geometry.clone()),r.remove(e.road_mesh_beach);const C=[],I=[];let x=null;const L=[],k=new M,D=new M;let N=null;const F=[];let U=null;const y=[];let p=null,f=null,_=null;r.traverse(g=>{if(g.name.startsWith("birdcircle")&&g instanceof kt){const P=new M;g.getWorldPosition(P);const w=g.name.match(/birdcircle(\d+)m/);if(w&&w[1]){const V=parseInt(w[1],10);C.push(P),I.push(V)}}else if(g.name==="seagull"&&g instanceof xt)x=g;else if(g.name.startsWith("palmempty")&&g instanceof kt){const P=new M;g.getWorldPosition(P),g.name==="palmemptystartleft"?k.copy(P):g.name==="palmemptystartright"?D.copy(P):L.push(P)}else if(g.name==="palm_tree"&&g instanceof xt)N=g;else if(g.name.startsWith("sailboatempty")&&g instanceof kt){const P=new M;g.getWorldPosition(P),F.push(P)}else if(g.name==="sailboat"&&g instanceof xt)U=g;else if(g.name.startsWith("balloonempty")&&g instanceof kt){const P=new M;g.getWorldPosition(P),y.push(P)}else g.name==="balloon"&&g instanceof xt?p=g:g.name==="the_sun"&&g instanceof xt?f=g:g.name==="road_ramp"&&g instanceof xt&&(_=g)}),_&&r.remove(_),f&&r.remove(f),x&&r.remove(x),N&&r.remove(N),U&&r.remove(U),p&&r.remove(p),u({centers:C,radii:I,mesh:x}),d({positions:L,leftStartingLinePalmTreePosition:k,rightStartingLinePalmTreePosition:D,mesh:N}),T({positions:F,mesh:U}),A({positions:y,mesh:p})},[n,e,r]),b.jsx(b.Fragment,{children:b.jsxs("group",{visible:t,children:[b.jsxs("group",{rotation:[0,Math.PI,0],children:[b.jsx("primitive",{object:r}),b.jsx(_s,{roadGeometry:s,fogColor:fc,fogDistance:800,color1:new G(.036,.025,.025),color2:new G(.04,.038,.035)}),b.jsx(Cd,{position:[801.542,14.749,-15.648],scale:[1,1,1.47],geometry:e.road_ramp.geometry,material:n.wood}),b.jsx("mesh",{geometry:e.the_sun.geometry,position:[694.571,140.316,1338.42],rotation:[Math.PI/2,0,2.6],scale:250,children:b.jsx("meshBasicMaterial",{color:[26,6.3,1.2],transparent:!0,onBeforeCompile:C=>{C.vertexShader=C.vertexShader.replace("#include <uv_pars_vertex>",`#include <uv_pars_vertex>
                  varying float vPositionY;
                  `),C.vertexShader=C.vertexShader.replace("#include <fog_vertex>",`#include <fog_vertex>
                  vPositionY = position.z;
                  `),C.fragmentShader=C.fragmentShader.replace("#include <uv_pars_fragment>",`#include <uv_pars_fragment>
                  varying float vPositionY;
                  `),C.fragmentShader=C.fragmentShader.replace("#include <fog_fragment>",`#include <fog_fragment>
                  float fade = clamp((1.0 - vPositionY * 2.0) * 0.2, 0.0, 1.0);
                  gl_FragColor.rgb *= 12.0;
                  gl_FragColor.a = fade;`)}})})]}),c.centers.length>0&&c.radii.length>0&&c.mesh&&b.jsx(pd,{circleCenters:c.centers,circleRadii:c.radii,seagullMesh:c.mesh}),h.positions.length>0&&h.mesh&&b.jsx(yd,{palmTreePositions:h.positions,leftStartingLinePalmTreePosition:h.leftStartingLinePalmTreePosition,rightStartingLinePalmTreePosition:h.rightStartingLinePalmTreePosition,palmTreeMesh:h.mesh}),v.positions.length>0&&v.mesh&&b.jsx(_d,{sailboatPositions:v.positions,sailboatMesh:v.mesh}),E.positions.length>0&&E.mesh&&b.jsx(Ad,{balloonPositions:E.positions,balloonMesh:E.mesh})]})})}Ve.preload(bs);const Rd=`uniform float time;
const float jumpAmplitude = 2.5;
const float jumpSpeed = 4.0;
const float jumpFrequency = 1.0;

attribute float timeOffset;
attribute float pauseBetweenJumps;
attribute vec3 humanColor;

varying vec3 vHumanColor;
`,kd=`float t = time * jumpSpeed + timeOffset;
float cycleDuration = 1.0 / jumpFrequency + pauseBetweenJumps;
float cyclePosition = mod(t, cycleDuration);
float jumpDuration = 1.0 / jumpFrequency;

vec3 transformed = position;
float jumpProgress = cyclePosition / jumpDuration;
float jumpActive = step(cyclePosition, jumpDuration);
jumpProgress = clamp(jumpProgress, 0.0, 1.0);
transformed.y += sin(jumpProgress * PI) * jumpAmplitude * jumpActive;

vHumanColor = humanColor;
`,Md=`varying vec3 vHumanColor;
`,Dd=`diffuseColor.rgb *= vHumanColor;
`;function Od({crowdPositions:t,crowdQuaternions:e,isBigGrandstand:n,crowdMesh:r}){const s=n.filter(F=>F).length,o=n.filter(F=>!F).length,c=s+o,u=81,h=82,d=32,v=33,T=15,E=Math.floor(T/2),A=T-E,C=u*E+h*A,I=d*E+v*A,x=C*s+I*o,L=S.useMemo(()=>{const y=new Float32Array(x*5),p=[new G("#1c5ed1"),new G("#38b6fa"),new G("#17ac54"),new G("#0a3c3f"),new G("#fede57"),new G("#e59c01"),new G("#dd4979"),new G("#75022d"),new G("#8340d0"),new G("#2a0164"),new G("#a3638d"),new G("#dd8865"),new G("#ce6658"),new G("#fe3500"),new G("#ad2b1f"),new G("#ff7900"),new G("#b1e81b")];for(let g=0;g<x;g++){const P=p[Math.floor(Math.random()*p.length)];y[g*5+0]=Math.random()*100,y[g*5+1]=Math.random()*2.5,y[g*5+2]=P.r,y[g*5+3]=P.g,y[g*5+4]=P.b}const f=new Ke(y,5),_=r.geometry;return _.setAttribute("timeOffset",new z(f,1,0)),_.setAttribute("pauseBetweenJumps",new z(f,1,1)),_.setAttribute("humanColor",new z(f,3,2)),_},[r,x]),k=S.useRef(null);S.useEffect(()=>{if(!k.current)return;const F=.4,U=.75;let y=0;for(let p=0;p<c;p++){const f=n[p],_=t[p],g=e[p],P=new M(1,0,0).applyQuaternion(g),w=new M(0,0,1).applyQuaternion(g.clone().multiply(new le().setFromAxisAngle(new M(1,0,0),Math.PI*.25)));for(let V=0;V<T;V++){const K=V%2===0,B=f?K?u:h:K?d:v,$=K?0:-2.5*.5;for(let X=0;X<B;X++){const ee=(Math.random()*2-1)*F;k.current.setMatrixAt(y,new tt().compose(new M().copy(_).addScaledVector(P,X*2.5+$+ee).addScaledVector(w,V*-2.5),g,new M(U,U,U))),y++}}}k.current.instanceMatrix.needsUpdate=!0},[r,x,t,e,n,c,u,h,d,v,T]);const D=S.useRef(null),N=S.useMemo(()=>{const F=r.material.clone();return F.onBeforeCompile=U=>{D.current=U,U.uniforms.time={value:0},U.vertexShader=U.vertexShader.replace("#include <common>",`
        #include <common>
        ${Rd}`),U.vertexShader=U.vertexShader.replace("#include <begin_vertex>",`
        ${kd}`),U.fragmentShader=U.fragmentShader.replace("#include <common>",`
        #include <common>
        ${Md}`),U.fragmentShader=U.fragmentShader.replace("#include <color_fragment>",`
        ${Dd}`)},F},[r]);return re(F=>{if(D.current&&(D.current.uniforms.time.value=F.clock.elapsedTime),!k.current)return;const{normalizedProgress:U}=Y.getState();U>=te.turnOnFinishLineEffects&&!k.current.visible?k.current.visible=!0:U<te.turnOnFinishLineEffects&&k.current.visible&&(k.current.visible=!1)}),b.jsx("instancedMesh",{ref:k,args:[L,N,x],frustumCulled:!1,visible:!1})}const Ld=`uniform float time;
const float flashSpeed = 6.0;
const float flashFrequency = 0.5;

attribute float timeOffset;
attribute float pauseBetweenFlashes;
attribute float cameraFlashID;

varying vec2 vUv;
varying float vCameraFlashID;

float easeInCubic(float x) {
  return x * x * x;
}

void main() {
  float t = time * flashSpeed + timeOffset;
  float cycleDuration = 1.0 / flashFrequency + pauseBetweenFlashes;
  float cyclePosition = mod(t, cycleDuration);
  float flashDuration = 1.0 / flashFrequency;

  float scale = 0.0;
  if(cyclePosition < flashDuration) {
    float flashProgress = cyclePosition / flashDuration;
    if(flashProgress <= 0.5) {
      // Grow
      float currProgress = flashProgress / 0.5;
      scale = easeInCubic(currProgress);
    } else {
      // Shrink
      float currProgress = (flashProgress - 0.5) / 0.5;
      scale = 1.0 - easeInCubic(currProgress);
    }
  }

  vUv = uv;
  vCameraFlashID = cameraFlashID;
  gl_Position = projectionMatrix * viewMatrix * instanceMatrix * vec4(position * scale, 1.0);
}
`,Fd=`uniform sampler2D cameraFlashAtlasTexture;
const vec3 centerColor = vec3(1.0, 1.0, 1.0);
const vec3 edgeColor = vec3(0.18824100442308295, 0.7254939595907695, 1.0);
const float centerBloomIntensity = 5.0;
const float edgeBloomIntensity = 1.0;
const float edge0 = 0.0;
const float edge1 = 0.3;

varying vec2 vUv;
varying float vCameraFlashID;

void main() {
  // Calculate the row and column based on vCameraFlashID, which ranges from 0 to 3
  // Column: 0 or 1
  float column = mod(vCameraFlashID, 2.0);
  // Row: 0 or 1
  float row = floor(vCameraFlashID / 2.0);

  // Calculate the UV coordinates for the specific camera flash
  vec2 cameraFlashUv = vec2((1.0 - vUv.x) * 0.5 + column * 0.5, // 0.5 (half of texture width)
  vUv.y * 0.5 + row * 0.5 // 0.5 (half of texture height)
  );

  vec4 cameraFlashShape = texture2D(cameraFlashAtlasTexture, cameraFlashUv);
  if(cameraFlashShape.a < 0.1) {
    discard;
  }

  float distanceFromCenter = length(vUv - 0.5) * 2.0;
  float colorLerpFactor = smoothstep(edge0, edge1, distanceFromCenter);
  vec3 color = mix(centerColor * centerBloomIntensity, edgeColor * edgeBloomIntensity, colorLerpFactor);

  gl_FragColor = vec4(color * cameraFlashShape.rgb, 1.0);
}
`,Pc="/cdn.shopify.com/s/files/1/0921/8919/6588/files/camera_flashes_atlas_256.png?v=1747659851";function Nd({crowdPositions:t,crowdQuaternions:e,isBigGrandstand:n}){const r=Oe(Pc,y=>{y.colorSpace=Nn}),s=n.filter(y=>y).length,o=n.filter(y=>!y).length,c=s+o,u=81,h=82,d=32,v=33,T=15,E=Math.floor(T/2),A=T-E,C=u*E+h*A,I=d*E+v*A,x=.15,L=Math.floor(C*x),k=Math.floor(I*x),D=L*s+k*o,N=S.useMemo(()=>{const f=new Float32Array(D*3);for(let P=0;P<D;P++)f[P*3+0]=Math.random()*100,f[P*3+1]=Math.random()*5,f[P*3+2]=Math.floor(Math.random()*4);const _=new Ke(f,3),g=new tn(1,1);return g.setAttribute("timeOffset",new z(_,1,0)),g.setAttribute("pauseBetweenFlashes",new z(_,1,1)),g.setAttribute("cameraFlashID",new z(_,1,2)),g},[D]),F=S.useRef(null);S.useEffect(()=>{if(!F.current)return;const y=.4,p=10,f=2;let _=0;for(let g=0;g<c;g++){const P=n[g],w=t[g],V=e[g],K=new M(1,0,0).applyQuaternion(V),B=new M(0,1,0),$=new M(0,0,1).applyQuaternion(V),X=new M(0,0,1).applyQuaternion(V.clone().multiply(new le().setFromAxisAngle(new M(1,0,0),Math.PI*.25))),ee=[];for(let fe=0;fe<T;fe++){const Q=fe%2===0,Z=P?Q?u:h:Q?d:v,W=Q?0:-2.5*.5;for(let J=0;J<Z;J++)ee.push({rowIndex:fe,seatIndex:J,rowOffset:W})}const he=[],ae=[...ee],ne=P?L:k;for(let fe=0;fe<ne&&ae.length>0;fe++){const Q=Math.floor(Math.random()*ae.length);he.push(ae[Q]),ae.splice(Q,1)}let ce=0;for(const{rowIndex:fe,seatIndex:Q,rowOffset:Z}of he){const W=p+Math.random()*f,J=(Math.random()*2-1)*y;F.current.setMatrixAt(_,new tt().compose(new M().copy(w).addScaledVector(B,2).addScaledVector($,1+ce/(ne-1)*.25).addScaledVector(K,Q*2.5+Z+J).addScaledVector(X,fe*-2.5),V.clone().multiply(new le().setFromAxisAngle(new M(0,0,1),Math.random()*Math.PI*2)),new M(W,W,W))),_++,ce++}}F.current.instanceMatrix.needsUpdate=!0},[D,t,e,n,c,L,k,u,h,d,v,T]);const U=S.useMemo(()=>new $e({uniforms:{time:{value:0},cameraFlashAtlasTexture:{value:r}},vertexShader:Ld,fragmentShader:Fd,transparent:!1,blending:di}),[r]);return re(y=>{if(U.uniforms.time.value=y.clock.elapsedTime,!F.current)return;const{normalizedProgress:p}=Y.getState();p>=te.turnOnFinishLineEffects&&!F.current.visible?F.current.visible=!0:p<te.turnOnFinishLineEffects&&F.current.visible&&(F.current.visible=!1)}),b.jsx("instancedMesh",{ref:F,args:[N,U,D],frustumCulled:!1,visible:!1})}Oe.preload(Pc);const Ud=`const vec3 sunPosition = vec3(1.0, 1.0, 1.0);
const float sunDistance = 47.45;

varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vUv;
varying vec3 vLightPosition;
varying vec3 vViewDir;

void main() {
  vec4 worldPosition = modelMatrix * vec4(position, 1.0);

  vPosition = worldPosition.xyz;
  vNormal = normalize(modelMatrix * vec4(normal, 0.0)).xyz;
  vUv = uv;
  vLightPosition = (modelMatrix * vec4(normalize(sunPosition) * sunDistance, 1.0)).xyz;
  vViewDir = normalize(cameraPosition - worldPosition.xyz);

  gl_Position = projectionMatrix * viewMatrix * worldPosition;
}
`,jd=`uniform sampler2D mapTexture;
const vec3 fadeColor = vec3(0.0470626377157257, 0.0274509803904, 0.1803978064860461);
const float fadeColorWeight = 0.5;
const float fresnelStrength = 7.3;
const vec3 fresnelColor = vec3(0.0, 0.2588296174556353, 0.37255519841982493);
const float fresnelBloomIntensity = 7.72;

varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vUv;
varying vec3 vLightPosition;
varying vec3 vViewDir;

void main() {
  // Lighting
  vec3 lightDir = normalize(vLightPosition - vPosition);
  float lightIntensity = clamp(dot(vNormal, lightDir), 0.0, 1.0);

  // Fresnel
  float viewDotNormal = clamp(dot(vViewDir, vNormal), 0.0, 1.0);
  float fresnelIntensity = (clamp(pow(1.0 - viewDotNormal, fresnelStrength), 0.0, 1.0));
  vec3 fresnel = fresnelIntensity * fresnelColor * fresnelBloomIntensity;

  // Mix
  vec3 baseColor = texture2D(mapTexture, vUv).rgb;
  vec3 finalColor = mix(baseColor + fresnel, fadeColor * fadeColorWeight, 1.0 - lightIntensity);

  gl_FragColor = vec4(finalColor, 1.0);
}
`,Vd=`const vec3 sunPosition = vec3(1.0, 1.0, 1.0);
const float shiftTowardsSunAmount = 0.14;

varying vec3 vNormal;
varying vec3 vViewDir;

void main() {
  // Move the atmosphere towards the sun
  // This hides the atmosphere in the dark side of the planet
  vec3 localPosition = position + normalize(sunPosition) * shiftTowardsSunAmount;
  vec4 worldPosition = modelMatrix * vec4(localPosition, 1.0);

  vNormal = normalize(modelMatrix * vec4(normal * -1.0, 0.0)).xyz;
  vViewDir = normalize(cameraPosition - worldPosition.xyz);

  gl_Position = projectionMatrix * viewMatrix * worldPosition;
}
`,Bd=`const float fresnelStrength = 1.52;
const vec3 fresnelColor = vec3(0.0, 1.0, 0.9254913451083487);
const float fresnelBloomIntensity = 1.0;
const float atmosphereOpacity = 1.0;

varying vec3 vNormal;
varying vec3 vViewDir;

void main() {
  // Fresnel
  float viewDotNormal = clamp(dot(vViewDir, vNormal), 0.0, 1.0);
  float fresnelIntensity = (1.0 - clamp(pow(1.0 - viewDotNormal, fresnelStrength), 0.0, 1.0));

  gl_FragColor = vec4(fresnelIntensity * fresnelColor * fresnelBloomIntensity, fresnelIntensity * atmosphereOpacity);
}
`,zd=`const vec3 color = vec3(0.6653872982754769, 1.0, 0.33245153633549385);
const float bloomIntensity = 2.0;

varying float vAge;
varying vec2 vUv;

float ramp(float t) {
  float v = step(0.0, t) * (1.0 - step(1.0, t));
  return smoothstep(0.0, 1.0, (1.0 - t)) * v;
}

void main() {
  if(vAge <= 0.0 || vAge >= 2.0) {
    discard;
  }

  // AdjustedAge corresponds to the age of each vertex since the time the arc started
  float adjustedAge = vAge - vUv.y;

  float r = ramp(adjustedAge);

  float alpha = step(1.0 - r, 0.9);
  alpha *= pow(1.0 - adjustedAge, 8.0);
  alpha = clamp(alpha, 0.0, 1.0);

  gl_FragColor = vec4(color * bloomIntensity, alpha);
}
`,$d=`uniform float time;
const float duration = 2.0;
const float repetitionPeriod = 2.0;
const float thickness = 1.1;

attribute vec3 startPos;
attribute vec3 midCoord1;
attribute vec3 midCoord2;
attribute vec3 endPos;
attribute float startTime;

varying float vAge;
varying vec2 vUv;

vec3 cubicBezier(vec3 startPoint, vec3 controlPoint1, vec3 controlPoint2, vec3 endPoint, float t) {
  float u = 1.0 - t;
  float tt = t * t;
  float uu = u * u;
  float uuu = uu * u;
  float ttt = tt * t;

  vec3 p = uuu * startPoint;
  p += 3.0 * uu * t * controlPoint1;
  p += 3.0 * u * tt * controlPoint2;
  p += ttt * endPoint;

  return p;
}

vec3 cubicBezierTangent(vec3 startPoint, vec3 controlPoint1, vec3 controlPoint2, vec3 endPoint, float t) {
  float u = 1.0 - t;
  float tt = t * t;
  float uu = u * u;

  vec3 p = -3.0 * uu * startPoint;
  p += 3.0 * (3.0 * tt - 4.0 * t + 1.0) * controlPoint1;
  p += 3.0 * (2.0 * t - 3.0 * tt) * controlPoint2;
  p += 3.0 * tt * endPoint;

  return normalize(p);
}

void main() {
  // Calculate the age and use the modulo operation to reset it after the repetition period
  vAge = mod((time - startTime) / duration, repetitionPeriod);

  // Normalize age to be between 0 and 2
  vAge = clamp(vAge, 0.0, 2.0);

  if(vAge <= 0.0 || vAge >= 2.0) {
    return;
  }

  vUv = uv;

  vec3 originalPosition = (modelMatrix * vec4(cubicBezier(startPos, midCoord1, midCoord2, endPos, uv.y), 1.0)).xyz;
  vec3 direction = (modelMatrix * vec4(cubicBezierTangent(startPos, midCoord1, midCoord2, endPos, uv.y), 0.0)).xyz;
  vec3 look = normalize(originalPosition - cameraPosition);
  float side = 2.0 * uv.x - 1.0;
  vec3 offset = cross(look, direction * side);

  gl_Position = projectionMatrix * viewMatrix * vec4(originalPosition + normalize(offset) * thickness, 1.0);
}
`;function Zo(t,e,n){const r=Ft(t),s=Ft(-e);return[Math.cos(r)*Math.cos(s)*n,Math.sin(r)*n,Math.cos(r)*Math.sin(s)*n]}function ea(t){const e=Math.sin(t*.5);return e*e}function Gd(t,e){const n=Math.PI/180,r=e[0]*n,s=e[1]*n,o=t[0]*n,c=t[1]*n,u=Math.cos(s),h=Math.sin(s),d=Math.cos(c),v=Math.sin(c),T=u*Math.cos(r),E=u*Math.sin(r),A=d*Math.cos(o),C=d*Math.sin(o),I=2*Math.asin(Math.sqrt(ea(c-s)+u*d*ea(o-r))),x=Math.sin(I),L=I?function(k){const D=k*I,N=Math.sin(D)/x,F=Math.sin(I-D)/x,U=F*T+N*A,y=F*E+N*C,p=F*h+N*v;return[U,p,-y]}:function(){return[T,h,-E]};return L.distance=I,L}const Wd=new M,Hd=new M,qd=new M,Kd=new M,Xd=new M,Jd=new M;function Yd(t,e,n,r,s,o,c){const h=Wd.set(...Zo(t,e,1)),d=Hd.set(...Zo(n,r,1)),v=h.distanceTo(d),T=Fn(s,o,Lt.easeInQuad(v/(1*2))),E=Gd([r,n],[e,t]),A=qd.set(...E(.25)).multiplyScalar(1+T),C=Kd.set(...E(.75)).multiplyScalar(1+T),I=Xd.set(...E(.25)).multiplyScalar(1);I.sub(A),I.cross(Jd.copy(C).sub(A));const x=Fn(0,c,v/(1*2));return I.normalize().multiplyScalar(Math.random()*x-x*.5),Math.random()>.5,A.add(I),C.add(I),{start:h,midCoord1:A,midCoord2:C,end:d}}function ta({ordersURL:t,numSegmentsPerArc:e}){const[n,r]=S.useState([]),s=vs(sc,t);S.useLayoutEffect(()=>{const u=JSON.parse(s);r(u)},[s,r]);const o=S.useMemo(()=>{if(n.length===0)return null;const u=13,h=n.length,d=new Float32Array(h*u),v=0,T=1,E=.55,A=new Uint16Array(e*6),C=new Float32Array((e+1)*2*3),I=new Float32Array((e+1)*2*2);for(let k=0,D=0;D<e*6;k+=2,D+=6)A[D+0]=k+0,A[D+1]=k+1,A[D+2]=k+2,A[D+3]=k+2,A[D+4]=k+1,A[D+5]=k+3;for(let k=0;k<=e;k++){const D=k/e;I[k*4+0]=0,I[k*4+1]=D,I[k*4+2]=1,I[k*4+3]=D}for(let k=0;k<h;k++){const{fromLat:D,fromLng:N,toLat:F,toLng:U}={fromLat:n[k][2],fromLng:n[k][3],toLat:n[k][0],toLng:n[k][1]},{start:y,midCoord1:p,midCoord2:f,end:_}=Yd(D,N,F,U,v,T,E);d[k*u+0]=y.x,d[k*u+1]=y.y,d[k*u+2]=y.z,d[k*u+3]=p.x,d[k*u+4]=p.y,d[k*u+5]=p.z,d[k*u+6]=f.x,d[k*u+7]=f.y,d[k*u+8]=f.z,d[k*u+9]=_.x,d[k*u+10]=_.y,d[k*u+11]=_.z,d[k*u+12]=10-(k+1)/h*10}const x=new Ke(d,u),L=new Lu;return L.setIndex(new Ct(A,1)),L.setAttribute("position",new Ct(C,3)),L.setAttribute("uv",new Ct(I,2)),L.setAttribute("startPos",new z(x,3,0)),L.setAttribute("midCoord1",new z(x,3,3)),L.setAttribute("midCoord2",new z(x,3,6)),L.setAttribute("endPos",new z(x,3,9)),L.setAttribute("startTime",new z(x,1,12)),L},[n,e]),c=S.useMemo(()=>new $e({uniforms:{time:{value:0}},vertexShader:$d,fragmentShader:zd,transparent:!0,depthWrite:!1}),[]);return re(({clock:u})=>{c.uniforms.time.value=u.elapsedTime}),n.length===0||!o?null:b.jsx("instancedMesh",{args:[o,c,n.length],frustumCulled:!1,renderOrder:1})}const Tc="/cdn.shopify.com/s/files/1/0921/8919/6588/files/earth_512_256.png?v=1747658988";function Qd(){const t=Oe(Tc,o=>{o.minFilter=Fu,o.magFilter=Nu,o.colorSpace=Nn}),e=S.useMemo(()=>new $e({uniforms:{mapTexture:{value:t}},vertexShader:Ud,fragmentShader:jd}),[t]),n=S.useMemo(()=>new $e({vertexShader:Vd,fragmentShader:Bd,transparent:!0,side:cc,depthWrite:!1}),[]),r=S.useRef(null),s=S.useRef(!1);return re(()=>{if(!r.current)return;const{normalizedProgress:o}=Y.getState();o>=te.moveEarthToCinematicLocation&&!s.current?(r.current.position.set(3,-.7,0),r.current.scale.set(.75,.75,.75),s.current=!0):o<te.moveEarthToCinematicLocation&&s.current&&(r.current.position.set(-1.5,1,0),r.current.scale.set(1,1,1),s.current=!1)}),b.jsxs("group",{ref:r,position:[-1.5,1,0],rotation:[Math.PI*.15,Math.PI*.2,0],children:[b.jsxs("group",{children:[b.jsx("mesh",{material:e,children:b.jsx("sphereGeometry",{args:[1,32,16]})}),b.jsx(ta,{ordersURL:"/cdn.shopify.com/s/files/1/0921/8919/6588/files/short_orders_final.json?v=1747171987",numSegmentsPerArc:15}),b.jsx(ta,{ordersURL:"/cdn.shopify.com/s/files/1/0921/8919/6588/files/long_orders_final.json?v=1747171987",numSegmentsPerArc:40})]}),b.jsx("mesh",{material:n,renderOrder:0,scale:1.08,children:b.jsx("sphereGeometry",{args:[1,32,16]})})]})}Oe.preload(Tc);const Zd=`attribute vec2 uv1;

varying vec2 vUv;
varying vec3 vViewDir;
`,ef=`vUv = uv1;
vViewDir = normalize(cameraPosition - (modelMatrix * vec4(position, 1.0)).xyz);
`,tf=`const vec3 bloomColor = vec3(0.0, 0.32549640471294256, 1.0);
const float bloomIntensity = 35.48;
const float bloomVerticalFalloff = 3.58;
const float fresnelStrength = 3.4;

varying vec2 vUv;
varying vec3 vViewDir;
`,nf=`float viewDotNormal = clamp(dot(normalize(vViewDir), normalize(vNormal)), 0.0, 1.0);
float fresnelIntensity = clamp(pow(clamp(1.0 - viewDotNormal, 0.0, 1.0), fresnelStrength), 0.0, 1.0);
// Bottom to top bloom that's also masked by the fresnel effect
diffuseColor.rgb += bloomColor * bloomIntensity * pow(clamp(vUv.y, 0.0, 1.0), bloomVerticalFalloff) * fresnelIntensity;
`;function rf({crystalsMesh:t}){const e=S.useMemo(()=>{const n=t.material.clone();return n.onBeforeCompile=r=>{r.vertexShader=r.vertexShader.replace("#include <common>",`
        #include <common>
        ${Zd}`),r.vertexShader=r.vertexShader.replace("#include <begin_vertex>",`
        #include <begin_vertex>
        ${ef}`),r.fragmentShader=r.fragmentShader.replace("#include <common>",`
        #include <common>
        ${tf}`),r.fragmentShader=r.fragmentShader.replace("#include <map_fragment>",`
        #include <map_fragment>
        ${nf}
        `)},n},[t]);return b.jsx(b.Fragment,{children:b.jsx("mesh",{geometry:t.geometry,material:e,position:t.position,quaternion:t.quaternion,scale:t.scale})})}const sf=`uniform float time;
const float speed = 0.12;
const float twinkleSpeed = 4.5;

attribute vec3 spawnPosition;
attribute vec3 direction;
attribute float scale;
attribute float timeOffset;

varying vec2 vUv;
varying vec3 vViewPosition;

void main() {
  vUv = uv;

  float particleTime = time + timeOffset;

  vec3 particlePosition = (modelMatrix * vec4(spawnPosition, 1.0)).xyz;
  // Move back and forth along random direction vector
  particlePosition += direction * sin(particleTime * speed) * 2.0;

  vec3 toCameraVector = normalize(cameraPosition - particlePosition);
  vec3 up = vec3(0.0, 1.0, 0.0);
  vec3 right = normalize(cross(up, toCameraVector));
  up = normalize(cross(toCameraVector, right));

  // Twinkle
  float adjustedScale = scale + sin(particleTime * twinkleSpeed) * scale;

  // Orient the particle to face the camera
  vec3 orientedPosition = position.x * right * adjustedScale +
    position.y * up * adjustedScale;

  vec4 viewPosition = viewMatrix * vec4(particlePosition + orientedPosition, 1.0);
  vViewPosition = -viewPosition.xyz;

  gl_Position = projectionMatrix * viewPosition;
}
`,of=`uniform sampler2D sparklesTexture;
const vec3 particleColor = vec3(1.0, 0.8588256298682079, 0.2392216976529254);
const float particleBloomIntensity = 10.0;

varying vec2 vUv;
varying vec3 vViewPosition;

void main() {
  vec4 sparklesColor = texture2D(sparklesTexture, vUv);
  if(sparklesColor.a < 0.1) {
    discard;
  }

  gl_FragColor = vec4(sparklesColor.rgb * particleColor * particleBloomIntensity, 1.0);
}
`,Ic="/cdn.shopify.com/s/files/1/0921/8919/6588/files/star_64.png?v=1747352177";function af({crystalsPosition:t}){const n=Oe(Ic),r=S.useMemo(()=>{const v=new Float32Array(4e3);for(let A=0;A<500;A++){const C=75*Math.cbrt(Math.random()),I=Math.random()*Math.PI,x=Math.acos(2*Math.random()-1),L=C*Math.sin(x)*Math.cos(I)*.5,k=C*Math.sin(x)*Math.sin(I)*.5,D=C*Math.cos(x)*1.25,N=new M(Math.random()*2-1,Math.random()*2-1,Math.random()*2-1).normalize();v[A*8+0]=L,v[A*8+1]=k,v[A*8+2]=D,v[A*8+3]=N.x,v[A*8+4]=N.y,v[A*8+5]=N.z,v[A*8+6]=30+Math.random()*20,v[A*8+7]=Math.random()*100}const T=new Ke(v,8),E=new tn(.01,.01);return E.setAttribute("spawnPosition",new z(T,3,0)),E.setAttribute("direction",new z(T,3,3)),E.setAttribute("scale",new z(T,1,6)),E.setAttribute("timeOffset",new z(T,1,7)),E},[500]),s=S.useMemo(()=>new $e({uniforms:{time:{value:0},sparklesTexture:{value:n}},vertexShader:sf,fragmentShader:of}),[n]),o=S.useRef(null);return re(c=>{if(s.uniforms.time.value=c.clock.elapsedTime,!o.current)return;const{normalizedProgress:u}=Y.getState();u>=te.turnOnFinishLineEffects&&!o.current.visible?o.current.visible=!0:u<te.turnOnFinishLineEffects&&o.current.visible&&(o.current.visible=!1)}),b.jsx("instancedMesh",{ref:o,args:[r,s,500],frustumCulled:!1,visible:!1,position:t,rotation:[Math.PI*-.05,Math.PI*.35,0]})}Oe.preload(Ic);const cf=`uniform float time;
const float duration = 10.0;
const float speed = 60.0;

attribute vec3 spawnPosition;
attribute float scale;
attribute vec3 direction;
attribute float timeOffset;
attribute vec3 color;
attribute float rotationDirection;

varying float vLifetime;
varying vec3 vColor;

void main() {
  // Calculate looping particle time and lifetime
  float particleTime = mod(time + timeOffset, duration);
  vLifetime = particleTime / duration;

  if(vLifetime <= 0.0 || vLifetime >= 1.0) {
    gl_Position = vec4(0.0);
    return;
  }

  vec3 particlePosition = spawnPosition;
  // Velocity starts fast and gradually decelerates
  float velocityFactor = exp(-20.0 * vLifetime);
  // Distance traveled always increases but at decreasing rate
  float distanceTraveled = speed * (1.0 - velocityFactor) * 1.25;
  particlePosition += direction * distanceTraveled;
  // Gravity takes over as horizontal speed decreases
  particlePosition.y -= 9.8 * 0.5 * vLifetime * vLifetime * 15.0;
  // Particles oscillate down as gravity takes over
  float floatTime = time * 0.5 + timeOffset * 1000.0;
  float floatAmplitude = 10.0 * vLifetime;
  particlePosition.x += sin(floatTime) * floatAmplitude;
  particlePosition.z += cos(floatTime) * floatAmplitude;

  // Construct billboarded coordinate frame
  vec3 toCameraVector = normalize(cameraPosition - particlePosition);
  vec3 up = vec3(0.0, 1.0, 0.0);
  vec3 right = normalize(cross(up, toCameraVector));
  up = normalize(cross(toCameraVector, right));

  // Add rotation around the forward vector (camera-facing)
  float rotationAngle = 20.0 * rotationDirection * floatTime;
  float cosAngle = cos(rotationAngle);
  float sinAngle = sin(rotationAngle);
  vec3 rotatedUp = cosAngle * up + sinAngle * cross(toCameraVector, up);
  vec3 rotatedRight = cosAngle * right + sinAngle * cross(toCameraVector, right);
  // Rotate the up vector (already rotated around forward) around the right vector
  vec3 finalUp = cosAngle * rotatedUp + sinAngle * cross(rotatedRight, rotatedUp);

  vec3 orientedPosition = position.x * rotatedRight * scale +
    position.y * finalUp * scale;

  vColor = color;

  gl_Position = projectionMatrix * viewMatrix * vec4(particlePosition + orientedPosition, 1.0);
}
`,lf=`varying float vLifetime;
varying vec3 vColor;

void main() {
  if(vLifetime <= 0.0 || vLifetime >= 1.0) {
    discard;
  }

  gl_FragColor = vec4(vColor, 1.0);
}
`;function uf(){const{confettiEmitterPositions:s,confettiEmitterForwardVectors:o}=S.useMemo(()=>{const d=[new M(-2868.418649274429,332.00128173828125,-151.26460133596436),new M(-2914.6054824268967,332.00128173828125,-174.18768685244925),new M(-2959.6726347756685,332.00128173828125,-196.55506120489815),new M(-3004.7397871244407,332.00128173828125,-218.92243555734706),new M(-3049.8069394732124,332.00128173828125,-241.28980990979593),new M(-2989.8520651648887,333.0174255371094,-294.5401036876995),new M(-2938.641449867131,333.0174255371094,-288.526428681926),new M(-2888.672304031137,333.0174255371094,-282.65853973689855),new M(-2838.7031581951433,333.0174255371094,-276.7906507918711),new M(-2788.7340123591493,333.0174255371094,-270.9227618468436),new M(-2758.1878538748315,323.4066162109375,-182.8829572267196),new M(-2798.190391028749,323.4066162109375,-175.798633247015),new M(-2836.9620808856234,323.4066162109375,-168.93228846668592)],v=[new M(.26131106140371435,.8090169943749472,-.526505490950086),new M(.26131106140371435,.8090169943749472,-.526505490950086),new M(.26131106140371435,.8090169943749472,-.526505490950086),new M(.26131106140371435,.8090169943749472,-.526505490950086),new M(.26131106140371435,.8090169943749472,-.526505490950086),new M(-.06855271719706194,.8090169943749473,.5837739526369998),new M(-.06855271719706194,.8090169943749473,.5837739526369998),new M(-.06855271719706194,.8090169943749473,.5837739526369998),new M(-.06855271719706194,.8090169943749473,.5837739526369998),new M(-.06855271719706194,.8090169943749473,.5837739526369998),new M(-.10249996695956407,.8090169943749472,-.5787791112210381),new M(-.10249996695956407,.8090169943749472,-.5787791112210381),new M(-.10249996695956407,.8090169943749472,-.5787791112210381)];return{confettiEmitterPositions:d,confettiEmitterForwardVectors:v}},[]),c=S.useMemo(()=>{const C=new Float32Array(31200),I=new le,x=new M(0,0,1),L=new M,k=new le,D=new M,N=[new G("#1c5ed1"),new G("#38b6fa"),new G("#17ac54"),new G("#0a3c3f"),new G("#fede57"),new G("#e59c01"),new G("#dd4979"),new G("#75022d"),new G("#8340d0"),new G("#2a0164"),new G("#a3638d"),new G("#dd8865"),new G("#ce6658"),new G("#fe3500"),new G("#ad2b1f"),new G("#ff7900"),new G("#b1e81b")];let F=0;for(let p=0;p<13;p++){I.setFromUnitVectors(x,o[p]);for(let f=0;f<200;f++){const _=s[p],g=Math.random()*Math.PI*2,P=.54*Math.random(),w=Math.cos(g)*P,V=0,K=Math.sin(g)*P,B=Ft(15),$=Math.random()*2*Math.PI,X=Math.acos(1-Math.random()*(1-Math.cos(B)));L.set(Math.sin(X)*Math.cos($),Math.sin(X)*Math.sin($),Math.cos(X)),L.applyQuaternion(I),k.setFromUnitVectors(o[p],L),D.copy(o[p]).applyQuaternion(k).normalize();const ee=N[Math.floor(Math.random()*N.length)];C[F*12+0]=_.x+w,C[F*12+1]=_.y+V,C[F*12+2]=_.z+K,C[F*12+3]=25+Math.random()*25,C[F*12+4]=D.x,C[F*12+5]=D.y,C[F*12+6]=D.z,C[F*12+7]=Math.random()*10,C[F*12+8]=ee.r,C[F*12+9]=ee.g,C[F*12+10]=ee.b,C[F*12+11]=Math.random()<.5?-1:1,F++}}const U=new Ke(C,12),y=new tn(.01,.005);return y.setAttribute("spawnPosition",new z(U,3,0)),y.setAttribute("scale",new z(U,1,3)),y.setAttribute("direction",new z(U,3,4)),y.setAttribute("timeOffset",new z(U,1,7)),y.setAttribute("color",new z(U,3,8)),y.setAttribute("rotationDirection",new z(U,1,11)),y},[s,o,13,2600]),u=S.useMemo(()=>new $e({uniforms:{time:{value:0}},vertexShader:cf,fragmentShader:lf,side:bn}),[]),h=S.useRef(null);return re(d=>{if(u.uniforms.time.value=d.clock.elapsedTime,!h.current)return;const{normalizedProgress:v}=Y.getState();v>=te.turnOnFinishLineEffects&&!h.current.visible?h.current.visible=!0:v<te.turnOnFinishLineEffects&&h.current.visible&&(h.current.visible=!1)}),b.jsx("instancedMesh",{ref:h,args:[c,u,2600],frustumCulled:!1,visible:!1})}const Ps="/cdn.shopify.com/3d/models/8da7a3be10a05a1a/racing_game_track_69_moon.glb";function hf({visible:t=!1}){const{nodes:e,materials:n,scene:r}=Ve(Ps),[s,o]=S.useState(null),[c,u]=S.useState({positions:[],quaternions:[],isBigGrandstand:[],mesh:null}),[h,d]=S.useState({position:new M,quaternion:new le,scale:new M}),[v,T]=S.useState({position:new M,mesh:null});S.useLayoutEffect(()=>{o(e.road_mesh_moon.geometry.clone()),r.remove(e.road_mesh_moon);const A=[],C=[],I=[];let x=null;const L=new M,k=new M;let D=null;r.traverse(N=>{if(N.name.startsWith("crowdempty")&&N instanceof kt){const F=new M,U=new le;N.getWorldPosition(F),N.getWorldQuaternion(U),A.push(F),C.push(U),I.push(N.name==="crowdempty000"||N.name==="crowdempty001")}else N.name==="lil_person"&&N instanceof xt?x=N:N.name==="earthempty"&&N instanceof kt?N.getWorldPosition(L):N.name==="gemeralds"&&N instanceof xt&&(N.getWorldPosition(k),k.add(new M(0,-5,0)),D=N)}),x&&r.remove(x),D&&r.remove(D),u({positions:A,quaternions:C,isBigGrandstand:I,mesh:x}),d({position:L,quaternion:new le(-.11200613305991418,.4504190561655882,.0485347218704449,.8844329713187075).normalize(),scale:new M(145.80216147838505,145.80210975297229,145.80217606133363)}),T({position:k,mesh:D})},[n,e,r]);const E=S.useRef(null);return n["landing lights glow"].onBeforeCompile=A=>{E.current=A,A.uniforms.time={value:0},A.vertexShader=A.vertexShader.replace("#include <common>",`
    #include <common>
    varying vec2 vUv;`),A.vertexShader=A.vertexShader.replace("#include <begin_vertex>",`
    #include <begin_vertex>
    vUv = uv;`),A.fragmentShader=A.fragmentShader.replace("#include <common>",`
    #include <common>
    uniform float time;
    varying vec2 vUv;`),A.fragmentShader=A.fragmentShader.replace("#include <opaque_fragment>",`
    float lerpFactor = mod((1.0 - vUv.y) - time * 1.5, 1.0);
    outgoingLight *= lerpFactor;
    #include <opaque_fragment>`)},re(({clock:A})=>{E.current&&(E.current.uniforms.time.value=A.elapsedTime)}),b.jsx(b.Fragment,{children:b.jsxs("group",{visible:t,children:[b.jsxs("group",{rotation:[0,Math.PI,0],children:[b.jsx("primitive",{object:r}),b.jsx(_s,{roadGeometry:s,fogColor:mc,fogDistance:800}),v.mesh&&b.jsx(rf,{crystalsMesh:v.mesh})]}),c.positions.length>0&&c.quaternions.length>0&&c.mesh&&b.jsxs(b.Fragment,{children:[b.jsx(Od,{crowdPositions:c.positions,crowdQuaternions:c.quaternions,isBigGrandstand:c.isBigGrandstand,crowdMesh:c.mesh}),b.jsx(Nd,{crowdPositions:c.positions,crowdQuaternions:c.quaternions,isBigGrandstand:c.isBigGrandstand})]}),b.jsx("group",{position:h.position,quaternion:h.quaternion,scale:h.scale,children:b.jsx(Qd,{})}),v.mesh&&b.jsx(af,{crystalsPosition:v.position}),b.jsx(uf,{})]})})}Ve.preload(Ps);const Ac=`uniform sampler2D causticsMap;
uniform float time;
varying vec3 vWorldPosition;

const float causticsSpeed = 0.04;
const float causticsStrength = 0.5;
const float caustics1Scale = 0.03;
const float caustics2Scale = 0.018;

vec3 sampleCaustics(sampler2D tex, vec3 worldPos, float scale, float speed, float time) {
  vec2 xzCoords = worldPos.xz;
  vec2 causticsUv = xzCoords * scale + speed * time;
  return texture2D(tex, causticsUv).rgb;
}
`,Ec=`vec3 caustics1 = sampleCaustics(causticsMap, vWorldPosition, caustics1Scale, causticsSpeed, time);
vec3 caustics2 = sampleCaustics(causticsMap, vWorldPosition, caustics2Scale, -causticsSpeed * 0.5, time);

vec3 caustics = min(caustics1, caustics2);

gl_FragColor.rgb += caustics * causticsStrength;
gl_FragColor.gb *= 2.2;
`,Cc=`varying vec3 vWorldPosition;
`,xc=`vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
`,df=`uniform float time;
const float duration = 15.0;
const float speed = 60.0;

attribute vec3 spawnPosition;
attribute float scale;
attribute vec3 direction;
attribute float timeOffset;

varying vec2 vUv;
varying float vLifetime;
varying vec3 vViewPosition;

void main() {
  vUv = uv;

  // Calculate looping particle time and lifetime
  float particleTime = mod(time + timeOffset, duration);
  vLifetime = particleTime / duration;

  if(vLifetime <= 0.0 || vLifetime >= 1.0) {
    gl_Position = vec4(0.0);
    return;
  }

  vec3 particlePosition = spawnPosition;
  // Move the particle along the direction vector
  particlePosition += direction * vLifetime * speed;

  vec3 toCameraVector = normalize(cameraPosition - particlePosition);
  vec3 up = vec3(0.0, 1.0, 0.0);
  vec3 right = normalize(cross(up, toCameraVector));
  up = normalize(cross(toCameraVector, right));

  // Orient the particle to face the camera
  vec3 orientedPosition = position.x * right * scale +
    position.y * up * scale;

  vec4 viewPosition = viewMatrix * vec4(particlePosition + orientedPosition, 1.0);
  vViewPosition = -viewPosition.xyz;

  gl_Position = projectionMatrix * viewPosition;
}
`,ff=`uniform sampler2D bubbleTexture;
const vec3 fogColor = vec3(0.00030352698352941176, 0.14126329113044458, 0.23839757380151394);
const float fogDistance = 200.0;

varying vec2 vUv;
varying float vLifetime;
varying vec3 vViewPosition;

void main() {
  if(vLifetime <= 0.0 || vLifetime >= 1.0) {
    discard;
  }

  vec4 bubbleColor = texture2D(bubbleTexture, vUv);
  if(bubbleColor.a < 0.1) {
    discard;
  }

  gl_FragColor = bubbleColor;

  float fogFactor = smoothstep(1.0, fogDistance, vViewPosition.z);
  gl_FragColor.rgb = mix(gl_FragColor.rgb, fogColor, fogFactor);
}
`,Rc="/cdn.shopify.com/s/files/1/0921/8919/6588/files/bubble_blue_transparent_64.png?v=1746445929";function mf({bubbleEmitterPositions:t}){const n=t.length,r=100*n,s=Oe(Rc),o=15,c=S.useMemo(()=>{const A=new Float32Array(r*8);let C=0;for(let L=0;L<n;L++)for(let k=0;k<100;k++){const D=t[L],N=Math.random()*Math.PI*2,F=.54*Math.random(),U=Math.cos(N)*F,y=0,p=Math.sin(N)*F,f=new M((Math.random()*2-1)*.25,1,(Math.random()*2-1)*.25).normalize();A[C*8+0]=D.x+U,A[C*8+1]=D.y+y,A[C*8+2]=D.z+p,A[C*8+3]=10+Math.random()*120,A[C*8+4]=f.x,A[C*8+5]=f.y,A[C*8+6]=f.z,A[C*8+7]=Math.random()*o,C++}const I=new Ke(A,8),x=new tn(.01,.01);return x.setAttribute("spawnPosition",new z(I,3,0)),x.setAttribute("scale",new z(I,1,3)),x.setAttribute("direction",new z(I,3,4)),x.setAttribute("timeOffset",new z(I,1,7)),x},[t,n,r]),u=S.useMemo(()=>new $e({uniforms:{time:{value:0},bubbleTexture:{value:s}},vertexShader:df,fragmentShader:ff}),[s]);return re(h=>{u.uniforms.time.value=h.clock.elapsedTime}),b.jsx("instancedMesh",{args:[c,u,r],frustumCulled:!1})}Oe.preload(Rc);function pf(t){const e=new Map,n=new Map,r=t.clone();return kc(t,r,function(s,o){e.set(o,s),n.set(s,o)}),r.traverse(function(s){if(!s.isSkinnedMesh)return;const o=s,c=e.get(s),u=c.skeleton.bones;o.skeleton=c.skeleton.clone(),o.bindMatrix.copy(c.bindMatrix),o.skeleton.bones=u.map(function(h){return n.get(h)}),o.bind(o.skeleton,o.bindMatrix)}),r}function kc(t,e,n){n(t,e);for(let r=0;r<t.children.length;r++)kc(t.children[r],e.children[r],n)}const Mc="/cdn.shopify.com/3d/models/69754b2405c3dbe4/shark_super_optimized.glb";function na(t){const e=S.useRef(null),{scene:n,animations:r}=Ve(Mc),{actions:s}=lc(r,e),{nodes:o}=S.useMemo(()=>{const u=pf(n),h={Shark_Mesh:new Uu,spine003:new $o,neutral_bone:new $o};return u.traverse(d=>{d.name==="Shark_Mesh"?h.Shark_Mesh=d:d.name==="spine003"?h.spine003=d:d.name==="neutral_bone"&&(h.neutral_bone=d)}),{nodes:h}},[n]);S.useEffect(()=>{s!=null&&s.Move&&(s.Move.loop=uc,s.Move.clampWhenFinished=!0)},[s]);const c=S.useRef(!1);return re(()=>{var h,d,v,T,E,A;const{normalizedProgress:u}=Y.getState();u>=t.normalizedProgressAtWhichToPlayAnimation&&!c.current?(e.current.visible=!0,(h=s==null?void 0:s.Move)==null||h.reset(),(d=s==null?void 0:s.Chomp)==null||d.reset(),(v=s==null?void 0:s.Move)==null||v.play(),(T=s==null?void 0:s.Chomp)==null||T.play(),c.current=!0):u<t.normalizedProgressAtWhichToPlayAnimation&&c.current&&(e.current.visible=!1,(E=s==null?void 0:s.Move)==null||E.stop(),(A=s==null?void 0:s.Chomp)==null||A.stop(),c.current=!1)}),b.jsx("group",{ref:e,...t,dispose:null,visible:!1,children:b.jsx("group",{name:"Scene",children:b.jsxs("group",{name:"SharkRig",children:[b.jsx("skinnedMesh",{name:"Shark_Mesh",geometry:o.Shark_Mesh.geometry,material:t.paletteMaterial,skeleton:o.Shark_Mesh.skeleton}),b.jsx("primitive",{object:o.spine003}),b.jsx("primitive",{object:o.neutral_bone})]})})})}Ve.preload(Mc);const gf=`uniform float time;
const float speed = 0.5;
const float wobbleAmplitude = 0.1;
const float wobbleSpeed = 10.0;
const float wobbleFrequency = 5.0;

attribute vec3 circleCenter;
attribute float circleRadius;
attribute vec2 positionOffset;
attribute float scale;
attribute float timeOffset;
attribute float randomNumber;
attribute float fishID;
attribute float rotationDirection;

varying vec2 vUv;
varying vec3 vViewPosition;
varying float vFishID;

const vec3 worldUp = vec3(0.0, 1.0, 0.0);

vec3 computeParticlePosition(float currentTime) {
  // Compute the position of the particle along the circular path
  float particleTime = currentTime + timeOffset;
  float angle = particleTime * speed * rotationDirection;
  vec3 radiusVector = vec3(cos(angle) * circleRadius, 0.0, sin(angle) * circleRadius);
  vec3 particlePosition = circleCenter + radiusVector;

  // Offset the particle along the radius vector and the up vector
  // Here we combine the constant offsets we receive as attributes with sinusoidal offsets
  float randomizedParticleTime = currentTime + randomNumber;
  float xOffset = positionOffset.x + cos(randomizedParticleTime * 2.5);
  float yOffset = positionOffset.y + sin(randomizedParticleTime * 2.5);
  particlePosition += xOffset * normalize(radiusVector) + yOffset * worldUp;

  return particlePosition;
}

void main() {
  vUv = uv;
  vFishID = fishID;

  // Compute the current position of the particle and the next one
  vec3 particlePosition = computeParticlePosition(time);
  vec3 nextParticlePosition = computeParticlePosition(time + 0.01);

  // Compute the coordinate frame of the particle
  vec3 direction = normalize(nextParticlePosition - particlePosition);
  vec3 right = normalize(cross(direction, worldUp));
  vec3 up = normalize(cross(right, direction));

  // Orient the particle so it faces its movement direction
  // Here we also make it wobble lengthwise to make it look like a fish that's swimming
  float wobble = cos((time + randomNumber) * wobbleSpeed + vUv.x * wobbleFrequency) * wobbleAmplitude;
  vec3 orientedPosition = position.x * direction * scale + position.y * up * scale + right * wobble;

  vec4 viewPosition = viewMatrix * vec4(particlePosition + orientedPosition, 1.0);
  vViewPosition = -viewPosition.xyz;
  gl_Position = projectionMatrix * viewPosition;
}
`,vf=`uniform sampler2D fishTextureAtlas;
const vec3 fogColor = vec3(0.00030352698352941176, 0.14126329113044458, 0.23839757380151394);
const float fogDistance = 200.0;

varying vec2 vUv;
varying vec3 vViewPosition;
varying float vFishID;

void main() {
  // Calculate the row and column based on vFishID, which ranges from 0 to 7
  // Column: 0 or 1
  float column = mod(vFishID, 2.0);
  // Row: 0, 1, 2, or 3
  float row = floor(vFishID / 2.0);

  // Calculate the UV coordinates for the specific fish
  vec2 fishUv = vec2((1.0 - vUv.x) * 0.5 + column * 0.5, // 0.5 (half of texture width)
  vUv.y * 0.25 + row * 0.25 // 0.25 (quarter of texture height)
  );

  vec4 fishColor = texture2D(fishTextureAtlas, fishUv);
  if(fishColor.a < 0.9) {
    discard;
  }

  gl_FragColor = fishColor;

  float fogFactor = smoothstep(1.0, fogDistance, vViewPosition.z);
  gl_FragColor.rgb = mix(gl_FragColor.rgb, fogColor, fogFactor);
}
`,Dc="/cdn.shopify.com/s/files/1/0921/8919/6588/files/fish_atlas_256.png?v=1747660606";function yf({circleCenters:t,circleRadii:e}){const r=t.length,s=100*r,o=Oe(Dc,h=>{h.colorSpace=Nn}),c=S.useMemo(()=>{const I=new Float32Array(s*11);let x=0;for(let D=0;D<r;D++){const N=t[D],F=e[D],U=5+Math.random()*1,y=2+Math.random()*1,p=Math.floor(Math.random()*8),f=Math.random()>.5?1:-1;for(let _=0;_<100;_++){const g=Math.random()*Math.PI*2,P=U*Math.random(),w=Math.cos(g)*P,V=Math.sin(g)*P;I[x*11+0]=N.x,I[x*11+1]=N.y,I[x*11+2]=N.z,I[x*11+3]=F,I[x*11+4]=w,I[x*11+5]=V,I[x*11+6]=100+Math.random()*120,I[x*11+7]=Math.random()*y,I[x*11+8]=Math.random()*100,I[x*11+9]=p,I[x*11+10]=f,x++}}const L=new Ke(I,11),k=new tn(.02,.01,10,1);return k.setAttribute("circleCenter",new z(L,3,0)),k.setAttribute("circleRadius",new z(L,1,3)),k.setAttribute("positionOffset",new z(L,2,4)),k.setAttribute("scale",new z(L,1,6)),k.setAttribute("timeOffset",new z(L,1,7)),k.setAttribute("randomNumber",new z(L,1,8)),k.setAttribute("fishID",new z(L,1,9)),k.setAttribute("rotationDirection",new z(L,1,10)),k},[t,e,r,s]),u=S.useMemo(()=>new $e({uniforms:{time:{value:0},fishTextureAtlas:{value:o}},vertexShader:gf,fragmentShader:vf,side:bn}),[o]);return re(h=>{u.uniforms.time.value=h.clock.elapsedTime}),b.jsx("instancedMesh",{args:[c,u,s],frustumCulled:!1})}Oe.preload(Dc);const wf=`varying vec2 vUv;
varying vec3 vStartColor;
varying vec3 vEndColor;
`,Sf=`diffuseColor = vec4(mix(vStartColor, vEndColor, 1.0 - vUv.y), 1.0);
`,_f=`uniform float time;
const float swayAmplitude = 1.5;
const float swaySpeed = 0.75;
const float swayFrequency = 5.0;

attribute vec3 seaweedPosition;
attribute float seaweedScale;
attribute float globalTimeOffset;
attribute vec3 startColor;
attribute vec3 endColor;
attribute float _timeoffset;

varying vec2 vUv;
varying vec3 vStartColor;
varying vec3 vEndColor;
`,bf=`vec3 transformed = position * seaweedScale;
float t = time * swaySpeed + globalTimeOffset + _timeoffset * 100.0 + uv.y * swayFrequency;
float amplitude = (1.0 - uv.y) * swayAmplitude;
transformed.x += cos(t) * amplitude;
transformed.z += sin(t) * amplitude;
transformed += seaweedPosition;

vUv = uv;
vStartColor = startColor;
vEndColor = endColor;
`;function Pf({seaweedPositions:t,seaweedMesh:e,causticsTexture:n}){const r=t.length,s=S.useMemo(()=>{const v=new Float32Array(r*11),T=[new G("#a16392"),new G("#7c5594"),new G("#ca7453"),new G("#618330")],E=[new G("#af6478"),new G("#9266a1"),new G("#ca7453"),new G("#a4c36b")];for(let I=0;I<r;I++){const x=t[I],L=Math.floor(Math.random()*T.length),k=T[L],D=E[L];v[I*11+0]=x.x,v[I*11+1]=x.y,v[I*11+2]=x.z,v[I*11+3]=.75+Math.random()*.5,v[I*11+4]=Math.random()*100,v[I*11+5]=k.r,v[I*11+6]=k.g,v[I*11+7]=k.b,v[I*11+8]=D.r,v[I*11+9]=D.g,v[I*11+10]=D.b}const A=new Ke(v,11),C=e.geometry;return C.setAttribute("seaweedPosition",new z(A,3,0)),C.setAttribute("seaweedScale",new z(A,1,3)),C.setAttribute("globalTimeOffset",new z(A,1,4)),C.setAttribute("startColor",new z(A,3,5)),C.setAttribute("endColor",new z(A,3,8)),C},[r,e,t]),o=S.useRef(null),c=S.useMemo(()=>{const u=new ju({roughness:.9272727370262146,metalness:0,side:bn});return u.onBeforeCompile=h=>{o.current=h,h.uniforms.time={value:0},h.uniforms.causticsMap={value:n},h.vertexShader=h.vertexShader.replace("#include <common>",`
        #include <common>
        ${_f}
        ${Cc}`),h.vertexShader=h.vertexShader.replace("#include <begin_vertex>",`
        ${bf}`),h.vertexShader=h.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
         ${xc}`),h.fragmentShader=h.fragmentShader.replace("#include <common>",`
        #include <common>
        ${wf}
        ${Ac}`),h.fragmentShader=h.fragmentShader.replace("#include <color_fragment>",`
        ${Sf}`),h.fragmentShader=h.fragmentShader.replace("#include <opaque_fragment>",`#include <opaque_fragment>
        ${Ec}`)},u},[n]);return re(u=>{o.current&&(o.current.uniforms.time.value=u.clock.elapsedTime)}),b.jsx("instancedMesh",{args:[s,c,r],frustumCulled:!1})}const Ts="/cdn.shopify.com/3d/models/27d4cebda02b09a4/racing_game_track_64_underwater.glb",Oc="/cdn.shopify.com/s/files/1/0921/8919/6588/files/caustics-texture_128.jpg?v=1747660972";function Tf({visible:t=!1}){const{nodes:e,materials:n,scene:r}=Ve(Ts),[s,o]=S.useState(null),c=S.useRef(null),[u,h]=S.useState([]),[d,v]=S.useState({positions:[],mesh:null}),[T,E]=S.useState({centers:[],radii:[]}),A=Oe(Oc,I=>{I.wrapS=Un,I.wrapT=Un});S.useLayoutEffect(()=>{n["glass tube"].transparent=!0,n["glass tube"].opacity=.4,n["glass tube"].roughness=.3,n["glass tube"].color=new G(48127),n["glass tube"].map=null,o(e.road_mesh_underwater.geometry.clone()),r.remove(e.road_mesh_underwater);const I=[],x=[];let L=null;const k=[],D=[];r.traverse(N=>{if(N.name.startsWith("bubbles")&&N instanceof kt){const F=new M;N.getWorldPosition(F),I.push(F)}else if(N.name.startsWith("seaweedempty")&&N instanceof kt){const F=new M;N.getWorldPosition(F),x.push(F)}else if(N.name==="seaweed"&&N instanceof xt)L=N,L.geometry.rotateX(Math.PI*.5);else if(N.name.startsWith("fishcircle")&&N instanceof kt){const F=new M;N.getWorldPosition(F);const U=N.name.match(/fishcircle(\d+)m/);if(U&&U[1]){const y=parseInt(U[1],10);k.push(F),D.push(y)}}}),L&&r.remove(L),h(I),v({positions:x,mesh:L}),E({centers:k,radii:D})},[n,e,r]),n.palette.onBeforeCompile=I=>{I.uniforms.causticsMap={value:A},I.uniforms.time={value:0},c.current=I,I.vertexShader=I.vertexShader.replace("#include <common>",`#include <common>
       ${Cc}`),I.vertexShader=I.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
       ${xc}`),I.fragmentShader=I.fragmentShader.replace("#include <common>",`#include <common>
      ${Ac}`),I.fragmentShader=I.fragmentShader.replace("#include <opaque_fragment>",`#include <opaque_fragment>
      ${Ec}`)};const C=S.useRef(null);return n["glow rainbow"].onBeforeCompile=I=>{C.current=I,I.uniforms.time={value:0},I.vertexShader=I.vertexShader.replace("#include <common>",`
      #include <common>
      varying vec2 vUv;`),I.vertexShader=I.vertexShader.replace("#include <begin_vertex>",`
      #include <begin_vertex>
      vUv = uv;`),I.fragmentShader=I.fragmentShader.replace("#include <common>",`
      #include <common>
      uniform float time;
      const float speed = 1.3;
      const float bloomIntensity = 10.0;
      varying vec2 vUv;
      vec3 pal( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d )
      {
        return a + b*cos( 6.28318*(c*t+d) );
      }`),I.fragmentShader=I.fragmentShader.replace("#include <opaque_fragment>",`
      float lerpFactor = mod((1.0 - vUv.y) - time * speed, 1.0);
      outgoingLight = pal(lerpFactor, vec3(0.5,0.5,0.5), vec3(0.5,0.5,0.5), vec3(1.0,1.0,1.0), vec3(0.0,0.33,0.67)) * bloomIntensity;
      #include <opaque_fragment>`)},re(({clock:I})=>{c.current&&(c.current.uniforms.time.value=I.elapsedTime),C.current&&(C.current.uniforms.time.value=I.elapsedTime)}),b.jsxs(b.Fragment,{children:[b.jsx("color",{attach:"background",args:[es]}),b.jsxs("group",{visible:t,children:[b.jsxs("group",{rotation:[0,Math.PI,0],children:[b.jsx("primitive",{object:r}),b.jsx(_s,{roadGeometry:s,enableCaustics:!0,color1:new G(.01,.045,.03),color2:new G(.01,.045,.03),fogDistance:200,fogColor:es})]}),u.length>0&&b.jsx(mf,{bubbleEmitterPositions:u}),d.positions.length>0&&d.mesh!==null&&b.jsx(Pf,{seaweedPositions:d.positions,seaweedMesh:d.mesh,causticsTexture:A}),T.centers.length>0&&T.radii.length>0&&b.jsx(yf,{circleCenters:T.centers,circleRadii:T.radii}),b.jsx("group",{children:b.jsx(na,{position:[-824.937988281,-88.3865966797,-140.405487061],quaternion:new le(-.012816864381902621,.1286016332395578,-.006074555063051129,.9915949005269455).normalize(),scale:1.05,paletteMaterial:n.palette,normalizedProgressAtWhichToPlayAnimation:te.firstShark})}),b.jsx("group",{children:b.jsx(na,{position:[-871.1156005859375,-81.8184127808,-206.072235107422],quaternion:new le(-.01590894803245324,-.37648649893108843,-.02576104563573861,.9259272059442236).normalize(),scale:.8,paletteMaterial:n.palette,normalizedProgressAtWhichToPlayAnimation:te.secondShark})})]})]})}Ve.preload(Ts);Oe.preload(Oc);function If(){re(({camera:e})=>{const{normalizedProgress:n}=Y.getState();e.position.y<0?q.getState().setLoadedScene(Et.Underwater):n>=te.loadMoon?q.getState().setLoadedScene(Et.Moon):n<=te.secondJump?q.getState().setLoadedScene(Et.Beach):q.getState().setLoadedScene(Et.None)});const t=q(e=>e.loadedScene);return b.jsxs(b.Fragment,{children:[b.jsx(xd,{visible:t===Et.Beach}),b.jsx(Tf,{visible:t===Et.Underwater}),b.jsx(hf,{visible:t===Et.Moon})]})}const Lc="/cdn.shopify.com/s/files/1/0921/8919/6588/files/env_map_05.1.exr?v=1747658945",Fc="/cdn.shopify.com/s/files/1/0921/8919/6588/files/waterenv-05.exr?v=1747658945",Nc="/cdn.shopify.com/s/files/1/0921/8919/6588/files/moonenv-02.exr?v=1747658945";function Af(){const t=q(n=>n.isCameraUnderwater),e=q(n=>n.isCameraInMoonArea);return b.jsx(b.Fragment,{children:b.jsx(Vu,{files:e?Nc:t?Fc:Lc,environmentRotation:[0,-Math.PI*.5,0],environmentIntensity:1.5})})}ys.preload({files:Lc});ys.preload({files:Fc});ys.preload({files:Nc});function Ef(){const t=q(n=>n.isCameraUnderwater),e=q(n=>n.isCameraInMoonArea);return b.jsxs(b.Fragment,{children:[t&&b.jsx("fog",{attach:"fog",near:1,far:150,color:es}),!e&&!t&&b.jsx(b.Fragment,{children:b.jsx("fog",{attach:"fog",near:1,far:700,color:fc})}),e&&b.jsx("fog",{attach:"fog",near:1,far:1060,color:mc})]})}const Cf=`uniform float time;
uniform float duration;
uniform float speed;

attribute vec3 spawnPosition;
attribute float scaleX;
attribute float scaleY;
attribute float timeOffset;
attribute float durationOffset;

varying vec2 vUv;
varying float vLifetime;

void main() {
  vUv = uv;

  // Calculate the duration time with extra randomness using durationOffset
  float randomizedDuration = duration + durationOffset;

  float particleTime = mod(time + timeOffset, randomizedDuration);
  // Keep using the base duration for lifetime calculation to not affect speed
  vLifetime = particleTime / duration;

  if(vLifetime <= 0.0 || vLifetime >= 1.0) {
    gl_Position = vec4(0.0);
    return;
  }

  vec3 particlePosition = spawnPosition;
  vec3 direction = vec3(0.0, 0.0, 1.0);
  // Move the particle along the direction vector
  particlePosition += direction * vLifetime * speed;

  vec3 forward = normalize(direction);
  // We are working in local space with the camera at the origin
  // That's why the toCameraVector is just the position of the particle negated,
  // which is the same as saying: normalize(cameraPosition - particlePosition)
  vec3 toCameraVector = normalize(-particlePosition);
  vec3 right = normalize(cross(forward, toCameraVector));
  // Orient the particle along the direction vector while at the same time making it face the camera
  vec3 orientedPosition = position.x * right * scaleX +
    position.y * forward * scaleY;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(particlePosition + orientedPosition, 1.0);
}
`,xf=`const float opacity = 0.65;
uniform float fadeProgress;
const vec3 color = vec3(1.0, 1.0, 1.0);
const float bloomIntensity = 1.32;
const float headWidth = 0.51;
const float tailWidth = 0.97;
uniform float globalOpacity;

varying vec2 vUv;
varying float vLifetime;

float easeInCubic(float x) {
  return x * x * x;
}

void main() {
  if(vLifetime <= 0.0 || vLifetime >= 1.0) {
    discard;
  }

  // vUv.y represents the position along the length of the particle
  // vUv.y = 0 is the tail of the particle and vUv.y = 1 is the head
  float currentWidth = mix(tailWidth, headWidth, vUv.y);

  // vUv.x ranges from 0 to 1 across the width of the particle
  // We want to normalize it to the [-0.5, 0.5] range where 0 is the center
  float normalizedX = vUv.x - 0.5;

  // Discard if the current x position is outside the width for this part of the line
  // We divide by 0.5 because normalizedX ranges from -0.5 to 0.5 (total width of 1)
  // and we want the width to be proportional to the current width
  if(abs(normalizedX) > (currentWidth * 0.5)) {
    discard;
  }

  gl_FragColor = vec4(color * bloomIntensity, easeInCubic(vUv.y) * opacity * fadeProgress * globalOpacity);
}
`;function Rf(){const e=S.useRef(null),n=230,r=195,s=10,o=1.12,c=1.5,u=2.24,h=5,d=-.84,v=-3.5,T=1.87,E=127,A=1.43,C=12.5,I=S.useMemo(()=>({speedLineSpeed:4.71,speedLineDuration:.35,baseScaleX:1.45,baseScaleY:187.7,maxRandomScaleIncreaseX:1.6,maxRandomScaleIncreaseY:200,maxRandomDurationIncrease:0,innerRadiusOfSpawnArea:1.36,outerRadiusOfSpawnArea:2}),[]),x=S.useCallback((B,$,X,ee,he,ae,ne,ce)=>{const Q=new Float32Array(2100);for(let J=0;J<300;J++){const Ce=Math.random()*Math.PI*2,ye=B+Math.random()*($-B),ve=Math.cos(Ce)*ye,Pe=Math.sin(Ce)*ye;Q[J*7+0]=ve,Q[J*7+1]=d+Pe,Q[J*7+2]=v,Q[J*7+3]=X+Math.random()*he,Q[J*7+4]=ee+Math.random()*ae,Q[J*7+5]=Math.random()*ne,Q[J*7+6]=Math.random()*ce}const Z=new Ke(Q,7),W=new tn(.01,.01);return W.setAttribute("spawnPosition",new z(Z,3,0)),W.setAttribute("scaleX",new z(Z,1,3)),W.setAttribute("scaleY",new z(Z,1,4)),W.setAttribute("timeOffset",new z(Z,1,5)),W.setAttribute("durationOffset",new z(Z,1,6)),W},[v,d]),L=S.useMemo(()=>x(u,h,T,E,A,C,o,c),[T,E,A,C,u,h,o,c,x]),k=S.useMemo(()=>x(I.innerRadiusOfSpawnArea,I.outerRadiusOfSpawnArea,I.baseScaleX,I.baseScaleY,I.maxRandomScaleIncreaseX,I.maxRandomScaleIncreaseY,I.speedLineDuration,I.maxRandomDurationIncrease),[I,x]),D=S.useMemo(()=>new $e({uniforms:{time:{value:0},duration:{value:o},speed:{value:s},fadeProgress:{value:0},globalOpacity:{value:1}},vertexShader:Cf,fragmentShader:xf,transparent:!0,blending:di,depthTest:!1}),[o,s]),N=S.useRef(0),F=S.useRef(0),[U,y]=Ot(()=>({from:{progress:0},config:{easing:Lt.linear,duration:1e3},onChange:()=>{N.current=U.progress.get()}}),[D]),[p,f]=Ot(()=>({from:{progress:0},config:{easing:Lt.linear,duration:1e3},onChange:()=>{F.current=p.progress.get()}}),[D]),[_,g]=Ot(()=>({from:{progress:1},config:{easing:Lt.linear,duration:1e3},onChange:()=>{D.uniforms.globalOpacity.value=_.progress.get()}}),[D]),P=S.useRef(!1),w=S.useRef(!1),V=S.useRef("normal"),K=S.useRef(null);return re(B=>{const $=B.clock.elapsedTime;if(e.current){const ne=B.camera;e.current.position.copy(ne.position),e.current.quaternion.copy(ne.quaternion)}const{isDrifting:X,speed:ee,normalizedProgress:he}=Y.getState();ee>=n&&!P.current?(y.start({to:{progress:1}}),P.current=!0):ee<n&&P.current&&(y.start({to:{progress:0}}),P.current=!1),X&&ee>=r&&!w.current?(f.start({to:{progress:1}}),w.current=!0):(!X||ee<r)&&w.current&&(f.start({to:{progress:0}}),w.current=!1);const ae=Math.max(N.current,F.current);D.uniforms.fadeProgress.value=ae,he>=te.fadeOutSpeedLines&&he<te.fadeInMoonshotSpeedLines&&V.current==="normal"?(g.start({to:{progress:0},config:{duration:1e3}}),V.current="faded_out"):he>=te.fadeInMoonshotSpeedLines&&he<te.moonApex&&V.current==="faded_out"?(K.current&&(K.current.geometry=k),D.uniforms.speed.value=I.speedLineSpeed,D.uniforms.duration.value=I.speedLineDuration,g.start({to:{progress:1},config:{duration:3e3}}),V.current="moonshot"):he>=te.moonApex&&V.current==="moonshot"?(g.start({to:{progress:0},config:{duration:1500}}),V.current="faded_out_after_moonshot"):he>=te.fadeInNormalSpeedLines&&V.current==="faded_out_after_moonshot"&&(K.current&&(K.current.geometry=L),D.uniforms.speed.value=s,D.uniforms.duration.value=o,g.start({to:{progress:1},config:{duration:2e3}}),V.current="return_to_normal"),D.uniforms.time.value=$}),S.useEffect(()=>q.subscribe($=>$.raceCount,$=>{$>0&&(f.start({to:{progress:0},config:{duration:0}}),y.start({to:{progress:0},config:{duration:0}}),g.start({to:{progress:1},config:{duration:0}}),D.uniforms.speed.value=s,D.uniforms.duration.value=o,K.current&&(K.current.geometry=L),V.current="normal")}),[f,y,g,D,L]),b.jsx("group",{ref:e,children:b.jsx("instancedMesh",{ref:K,args:[L,D,300],frustumCulled:!1})})}const mn=nn()(en(t=>({progress:0,loadStartTime:null,loadingScreenFadeComplete:!1,setProgress:e=>{t({progress:Math.min(Math.max(e,0),100)})},startLoading:()=>{t({progress:0,loadStartTime:Date.now()})},reset:()=>{t({progress:0,loadStartTime:null})},setLoadingScreenFadeComplete:e=>{t({loadingScreenFadeComplete:e})}})));function kf(){return mn(t=>t.progress>=100)}function Is(){return mn(t=>t.loadingScreenFadeComplete)}function Mf({className:t,...e}){return b.jsx("div",{className:Bu(ge("drive-headline5 text-center text-12 mobile-landscape-short:text-12 md:text-15"),t),...e,children:b.jsx(Pu,{to:"/editions/summer2025",className:"inline-block focus:outline-none hover:no-underline underline",children:"Summer ’25 edition"})})}function rs({icon1:t,icon2:e,text:n,className:r}){const s="h-auto w-26 mobile-landscape:w-26 md:w-[max(calc(37/1440*100vmax),2.43rem)] 2xl:w-37 select-none";return b.jsxs("div",{className:ge("drive-headline2 text-center flex flex-col gap-[0.14em] items-center justify-center",r),children:[b.jsxs("div",{className:ge("flex items-center gap-[0.51em]","mb-9 md:mb-[0.72em]"),children:[b.jsx("img",{src:t,alt:"",className:s}),b.jsx("img",{src:e,alt:"",className:s})]}),b.jsx("div",{className:"max-w-[10ch]",children:n})]})}function Df({className:t}){return b.jsxs("div",{className:ge("drive-headline2 flex items-center gap-[2.85em] game-wide-short:gap-[25.85em] game-wide-short:absolute game-wide-short:bottom-28",t),children:[b.jsx(rs,{icon1:"/cdn.shopify.com/s/files/1/0921/8919/6588/files/left.png?v=1746265729",icon2:"/cdn.shopify.com/s/files/1/0921/8919/6588/files/right.png?v=1746265730",text:"Steer Left & Right",className:ge("opacity-0","animate-splash-screen-controls","[animation-delay:0.5s]","[animation-play-state:var(--splash-animation-play-state)]")}),b.jsx(rs,{icon1:"/cdn.shopify.com/s/files/1/0921/8919/6588/files/up.png?v=1746265730",icon2:"/cdn.shopify.com/s/files/1/0921/8919/6588/files/down.png?v=1746265730",text:"Accelerate & Brake",className:ge("opacity-0","animate-splash-screen-controls","[animation-delay:0.6s]","[animation-play-state:var(--splash-animation-play-state)]")})]})}function Uc({className:t,children:e}){const n=kh(o=>o.A||o.B||o[xe.Down]||o[xe.Y]||o[xe.Start]),r=Is(),s=S.useCallback(()=>{r&&q.getState().setGameScreen(nt.RacingScreen)},[r]);return S.useEffect(()=>{n&&q.getState().gameScreen===nt.SplashScreen&&r&&s()},[n,s,r]),b.jsx("button",{onClick:s,className:ge(t,"focus:outline-none"),"aria-label":"Start Game","data-component-name":"start-game",children:e})}function Of({className:t}){const e=ge("drive-headline2 flex flex-col items-center justify-end","opacity-0","animate-splash-screen-controls","[animation-play-state:var(--splash-animation-play-state)]");return b.jsxs(Uc,{className:ge("mx-auto justify-center items-end gap-20 mobile-landscape:gap-34 mobile-landscape-short:gap-10","mobile-landscape-short:absolute mobile-landscape-short:bottom-28",t),children:[b.jsx(rs,{icon1:"/cdn.shopify.com/s/files/1/0921/8919/6588/files/left.png?v=1746265729",icon2:"/cdn.shopify.com/s/files/1/0921/8919/6588/files/right.png?v=1746265730",text:"Left & Right",className:ge("opacity-0","animate-splash-screen-controls","[animation-play-state:var(--splash-animation-play-state)]","[animation-delay:0.5s]","mobile-landscape-short:justify-self-start mobile-landscape-short:pl-55")}),b.jsxs("div",{className:ge(e,"[animation-delay:0.6s] mobile-landscape-short:pl-93 mobile-landscape-tiny:pl-20 "),children:[b.jsx("img",{src:"/cdn.shopify.com/s/files/1/0921/8919/6588/files/splash-brake.png?v=1746702001",alt:"Brake",className:"w-30  mb-7 select-none inline-block",draggable:"false"}),"Brake"]}),b.jsxs("div",{className:ge(e,"[animation-delay:0.7s]"),children:[b.jsx("img",{src:"/cdn.shopify.com/s/files/1/0921/8919/6588/files/splash-accelerator.png?v=1746702001",alt:"Accelerate",className:"w-24 mb-5 select-none inline-block",draggable:"false"}),"Accelerate"]})]})}function Lf(){return b.jsxs(b.Fragment,{children:[b.jsx(Df,{className:"hidden mobile-landscape:hidden md:flex"}),b.jsx(Of,{className:"flex mobile-landscape-short:grid mobile-landscape:flex mobile-landscape-short:mx-auto mobile-landscape-short:grid-cols-[350px_auto_auto] md:hidden"})]})}const ra=()=>{const{poster:t,vp9:e,hevc:n}={poster:"/cdn.shopify.com/s/files/1/0921/8919/6588/files/Animated_Flags_-_White_00.png?v=1747667173",vp9:"/cdn.shopify.com/b/shopify-brochure2-assets/0d3f8dfe40d7d16e15762a178b7318e2.webm",hevc:"/cdn.shopify.com/b/shopify-brochure2-assets/b6d087f47674083b634a6183ef5e5714.mov"};return b.jsxs("video",{poster:t,muted:!0,playsInline:!0,autoPlay:!0,loop:!0,disablePictureInPicture:!0,disableRemotePlayback:!0,className:ge("w-40 mobile-landscape:w-40 md:w-60","animate-splash-screen-start","[animation-delay:0.3s] opacity-0","[animation-play-state:var(--splash-animation-play-state)]"),children:[b.jsx("source",{src:n,type:"video/mp4; codecs=hvc1"}),b.jsx("source",{src:e,type:"video/webm; codecs=vp9"})]})};function Ff({className:t}){return b.jsxs(Uc,{className:ge("flex items-center","drive-headline1","gap-[0.45em]","hover:-translate-y-3 hover:scale-105","transition-[scale,translate,opacity] duration-300",t),children:[b.jsx(ra,{}),b.jsx("span",{className:ge("drive-headline1 relative top-[-0.07em]","animate-splash-screen-start","[animation-delay:0.3s] [animation-duration:1.3s] opacity-0","[animation-play-state:var(--splash-animation-play-state)]"),children:"Start"}),b.jsx(ra,{})]})}function Nf(){const t=pi(nt.SplashScreen),e=Is();return b.jsxs("div",{className:ge("fixed top-0 left-0 size-full flex flex-col items-center justify-center","bg-gradient-to-t from-[rgba(9,0,16,0.64)] via-[rgba(9,0,16,0)] to-transparent bg-[rgba(20,3,31,0.3)]",t?"opacity-100":"opacity-0 pointer-events-none","transition-opacity duration-300"),style:{"--splash-animation-play-state":e?"running":"paused"},children:[b.jsx("div",{className:ge("relative","aspect-[620/248]","w-[75vw] mobile-landscape:w-250 md:w-[calc(620/1440*100vmax)] 2xl:w-620","mb-[clamp(40px,10vmax,100px)] mobile-landscape:mb-[7.5svh] lg:mb-[max(calc(107/1440*100vmax),3.25rem)] 2xl:mb-107","mt-68 mobile-landscape:mt-0 lg:mt-0"),children:b.jsx("div",{className:ge("h-full w-full","animate-splash-screen-logo","[animation-play-state:var(--splash-animation-play-state)]"),children:b.jsx("img",{src:"/cdn.shopify.com/s/files/1/0921/8919/6588/files/Logo_Game_2_2.png?v=1747336114",className:ge("absolute top-1/2 left-1/2 -translate-y-1/2 scale-[1.53]","translate-x-[calc(-50%+1.8%)]"),alt:"Horizons Drive logo",srcSet:`
            /cdn.shopify.com/s/files/1/0921/8919/6588/files/Logo_Game_2_2.png?v=1747336114 1512w,
            /cdn.shopify.com/s/files/1/0921/8919/6588/files/Logo_Game_2_2_-1000w.png?v=1747336725 1000w
          `,sizes:"(max-width: 600px) 1000px, 1512px"})})}),b.jsx(Ff,{className:"mb-[clamp(40px,10vmax,100px)] mobile-landscape:mb-[7.5svh] lg:mb-[max(calc(108/1440*100vmax),4.3rem)] 2xl:mb-108"}),b.jsx(Lf,{}),b.jsx(Mf,{className:ge("animate-splash-screen-controls","[animation-delay:0.5s]","[animation-play-state:var(--splash-animation-play-state)]"," text-white bottom-30 absolute opacity-0")})]})}const Uf=S.lazy(()=>ws(()=>import("./RacingScreen-DK_zkued.js"),__vite__mapDeps([0,1,2,3,4,5,6,7])));function jf(){const[t,e]=S.useState(!1);return S.useEffect(()=>{setTimeout(()=>{e(!0)},100)},[]),t?b.jsx(S.Suspense,{fallback:null,children:b.jsx(Uf,{})}):null}const Vf=S.lazy(()=>ws(()=>import("./ResultsScreen-DELw3N0z.js"),__vite__mapDeps([8,1,2,3,5,6,7])));function Bf(){return pi(nt.ResultsScreen)?b.jsx(S.Suspense,{fallback:null,children:b.jsx(Vf,{})}):null}function zf(){return b.jsxs(b.Fragment,{children:[b.jsx(Nf,{}),b.jsx(jf,{}),b.jsx(Bf,{})]})}function $f({active:t}){const e=S.useRef(.44),n=S.useRef(1),r=S.useRef(1),s=60,o=.6,c=3.15,u=1,h=0,d=2,v=.9,T=.7,E=.4,A=1.5,C=.02,I=.03,x=40,L=13.8,k=3.68,D=1.44,N=4.31,F=61.19,U=.21,y=240,p=300,f=S.useRef(null),_=S.useRef(new M),g=S.useRef(new M),P=S.useRef(new le),w=S.useRef(new le),V=S.useRef(new M(0,1,0)),[K,B]=Ot(()=>({from:{progress:0},config:{duration:500,easing:Lt.easeOutQuad}})),[$,X]=Ot(()=>({from:{progress:0}})),[ee,he]=Ot(()=>({from:{progress:0},config:{tension:100,friction:20}})),ae=(Z,W,J,Ce)=>{const ye=Ce+W*5;return Math.sin(Z*ye+W*1e3)*Math.max(0,1-J)};S.useEffect(()=>{const Z=Zr.subscribe(W=>W.physicsStep,()=>{const W=Y.getState(),{position:J,forward:Ce,up:ye}=W,ve=J.clone().add(ye.clone().multiplyScalar(u)),Pe=ve.clone().sub(g.current).normalize(),ke=Pe.dot(Ce);ke<v&&Pe.add(Ce.clone().multiplyScalar(v-ke)).normalize(),Pe.lerp(Ce.clone(),d*xn).normalize();const we=Fn(o,o*n.current,$.progress.get());_.current.copy(g.current),g.current.lerp(Pe.clone().multiplyScalar(-c).add(ve),we);const Me=ve.clone().addScaledVector(ye,h);V.current.lerp(ye,T*xn);const ht=new tt().lookAt(g.current,Me,V.current);P.current.copy(w.current),w.current.setFromRotationMatrix(ht)});return()=>{Z()}},[o,u,c,h,T,v,d,$]);const ne=S.useCallback(Z=>{e.current=Z,he.start({from:{progress:0},to:{progress:1}})},[he]);S.useEffect(()=>{const Z=Y.subscribe(W=>W.lastCollisionEvent,W=>{if(!W)return;const{intensity:J}=W;e.current=J,ne(J*.25)});return()=>{Z()}},[ne]),S.useEffect(()=>{const Z=Y.subscribe(W=>W.currentJumpType,(W,J)=>{switch(W){case je.notJumping:J===je.ramp?(ne(1),X.start({to:{progress:0},config:{duration:2e3}})):J===je.moon&&(ne(1),B.start({to:{progress:0},config:{duration:2500,easing:Lt.easeInOutCubic}}));break;case je.ramp:J===je.notJumping&&(n.current=E,X.start({to:{progress:1},config:{duration:3e3}}));break;case je.moon:J===je.notJumping&&(r.current=A,B.start({to:{progress:1},config:{duration:750,easing:Lt.easeInOutCubic}}));break}});return()=>{Z()}},[ne,X,E,A,B]);const{size:ce}=Jt(),fe=ce.width/ce.height,Q=fe<.7?1.5:fe<.8?1.2:1;return re(({clock:Z})=>{const{raceStartTime:W,raceEndTime:J}=q.getState();if(!f.current||W!==null&&J!==null)return;const{progressToNextStep:Ce}=Zr.getState(),{isInJump:ye,normalizedProgress:ve,speed:Pe}=Y.getState(),ke=Fn(s,s*r.current,K.progress.get());f.current.fov=ke*Q,f.current.updateProjectionMatrix();const we=_.current.clone().lerp(g.current,Ce),Me=P.current.clone().slerp(w.current,Ce);if(ve>=te.secondJump&&ve<te.moon&&Pe>=y){const Fe=1-fi(y,p,Pe),_e=Z.elapsedTime,Te=ae(_e,0,Fe,N)*L/1e3,Xe=ae(_e,1,Fe,F)*k/1e3,rt=ae(_e,2,Fe,U)*D/1e3,Je=new M(1,0,0).applyQuaternion(Me).normalize(),Ye=new M(0,1,0).applyQuaternion(Me).normalize(),Qe=new M(0,0,1).applyQuaternion(Me).normalize();we.add(Je.multiplyScalar(Te)),we.add(Ye.multiplyScalar(Xe)),we.add(Qe.multiplyScalar(rt))}if(ee.progress.isAnimating&&!ye){const Fe=Z.elapsedTime,_e=e.current,Te=ee.progress.get(),Xe=ae(Fe,0,Te,x)*C*_e,rt=ae(Fe,1,Te,x)*C*_e,Je=ae(Fe,2,Te,x)*C*_e;we.x+=Xe,we.y+=rt,we.z+=Je;const Ye=ae(Fe,3,Te,x)*I*_e,Qe=ae(Fe,4,Te,x)*I*_e,rn=ae(Fe,5,Te,x)*I*_e,Ie=new le().setFromEuler(new oc(Ye,Qe,rn));Me.multiply(Ie)}f.current.position.copy(we),f.current.quaternion.copy(Me),q.getState().setIsCameraUnderwater(f.current.position.y<0&&ve>te.firstJump),q.getState().setIsCameraInMoonArea(f.current.position.y>=0&&ve>te.secondJump)},Sr.camera),b.jsx(ns,{ref:f,makeDefault:t,position:[0,3,-5],fov:s,near:.1,far:5e3})}function Gf(){const t=q(d=>d.countdownNumber),e=pi(nt.SplashScreen),[n,r]=S.useState(!1),[s,o]=Ot(()=>({from:{position:Ui[1].startPos,rotation:Ui[1].rotation},config:{mass:1,tension:280,friction:120,precision:.001}}));S.useEffect(()=>{r(t<=1)},[t]);const c=Jt(d=>d.size),h=c.width/c.height<.8;return S.useEffect(()=>{let d=t;t===-1&&(d="skip");const v=Ui[d];q.getState().setIsCameraUnderwater(!1),q.getState().setIsCameraInMoonArea(!1),v&&o.start({from:{position:v.startPos,rotation:v.rotation},to:{position:v.endPos,rotation:v.rotation},config:{mass:1,tension:280*Ho,friction:120*Ho}})},[t,o,e]),b.jsx(b.Fragment,{children:e?b.jsx(ns,{makeDefault:!0,position:[45,45,0],rotation:[0,1,0],fov:h?60:40,near:.1,far:5e3}):b.jsxs(zu.group,{position:s.position,rotation:s.rotation,children:[b.jsx(ns,{makeDefault:!n,fov:h?75:40,near:.1,far:5e3}),b.jsx($f,{active:n})]})})}const Wf=()=>{};var ia={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jc=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Hf=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=t[n++];e[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=t[n++],c=t[n++],u=t[n++],h=((s&7)<<18|(o&63)<<12|(c&63)<<6|u&63)-65536;e[r++]=String.fromCharCode(55296+(h>>10)),e[r++]=String.fromCharCode(56320+(h&1023))}else{const o=t[n++],c=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|c&63)}}return e.join("")},As={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const o=t[s],c=s+1<t.length,u=c?t[s+1]:0,h=s+2<t.length,d=h?t[s+2]:0,v=o>>2,T=(o&3)<<4|u>>4;let E=(u&15)<<2|d>>6,A=d&63;h||(A=64,c||(E=64)),r.push(n[v],n[T],n[E],n[A])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(jc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Hf(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const o=n[t.charAt(s++)],u=s<t.length?n[t.charAt(s)]:0;++s;const d=s<t.length?n[t.charAt(s)]:64;++s;const T=s<t.length?n[t.charAt(s)]:64;if(++s,o==null||u==null||d==null||T==null)throw new qf;const E=o<<2|u>>4;if(r.push(E),d!==64){const A=u<<4&240|d>>2;if(r.push(A),T!==64){const C=d<<6&192|T;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class qf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Kf=function(t){const e=jc(t);return As.encodeByteArray(e,!0)},ti=function(t){return Kf(t).replace(/\./g,"")},Vc=function(t){try{return As.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xf=()=>Bc().__FIREBASE_DEFAULTS__,Jf=()=>{if(typeof process>"u"||typeof ia>"u")return;const t=ia.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Yf=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Vc(t[1]);return e&&JSON.parse(e)},Es=()=>{try{return Wf()||Xf()||Jf()||Yf()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},zc=t=>{var e,n;return(n=(e=Es())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},$c=t=>{const e=zc(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Gc=()=>{var t;return(t=Es())==null?void 0:t.config},Wc=t=>{var e;return(e=Es())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zn(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Cs(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qf(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...t};return[ti(JSON.stringify(n)),ti(JSON.stringify(c)),""].join(".")}const cr={};function Zf(){const t={prod:[],emulator:[]};for(const e of Object.keys(cr))cr[e]?t.emulator.push(e):t.prod.push(e);return t}function em(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let sa=!1;function xs(t,e){if(typeof window>"u"||typeof document>"u"||!zn(window.location.host)||cr[t]===e||cr[t]||sa)return;cr[t]=e;function n(E){return`__firebase__banner__${E}`}const r="__firebase__banner",o=Zf().prod.length>0;function c(){const E=document.getElementById(r);E&&E.remove()}function u(E){E.style.display="flex",E.style.background="#7faaf0",E.style.position="fixed",E.style.bottom="5px",E.style.left="5px",E.style.padding=".5em",E.style.borderRadius="5px",E.style.alignItems="center"}function h(E,A){E.setAttribute("width","24"),E.setAttribute("id",A),E.setAttribute("height","24"),E.setAttribute("viewBox","0 0 24 24"),E.setAttribute("fill","none"),E.style.marginLeft="-6px"}function d(){const E=document.createElement("span");return E.style.cursor="pointer",E.style.marginLeft="16px",E.style.fontSize="24px",E.innerHTML=" &times;",E.onclick=()=>{sa=!0,c()},E}function v(E,A){E.setAttribute("id",A),E.innerText="Learn more",E.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",E.setAttribute("target","__blank"),E.style.paddingLeft="5px",E.style.textDecoration="underline"}function T(){const E=em(r),A=n("text"),C=document.getElementById(A)||document.createElement("span"),I=n("learnmore"),x=document.getElementById(I)||document.createElement("a"),L=n("preprendIcon"),k=document.getElementById(L)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(E.created){const D=E.element;u(D),v(x,I);const N=d();h(k,L),D.append(k,C,x,N),document.body.appendChild(D)}o?(C.innerText="Preview backend disconnected.",k.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(k.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,C.innerText="Preview backend running in this workspace."),C.setAttribute("id",A)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function tm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ge())}function nm(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function rm(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function im(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function sm(){const t=Ge();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Rs(){try{return typeof indexedDB=="object"}catch{return!1}}function om(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var o;e(((o=s.error)==null?void 0:o.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const am="FirebaseError";class _t extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=am,Object.setPrototypeOf(this,_t.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$n.prototype.create)}}class $n{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,o=this.errors[e],c=o?cm(o,r):"Error",u=`${this.serviceName}: ${c} (${s}).`;return new _t(s,u,r)}}function cm(t,e){return t.replace(lm,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const lm=/\{\$([^}]+)}/g;function um(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function wn(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const o=t[s],c=e[s];if(oa(o)&&oa(c)){if(!wn(o,c))return!1}else if(o!==c)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function oa(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _r(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function hm(t,e){const n=new dm(t,e);return n.subscribe.bind(n)}class dm{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");fm(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Vi),s.error===void 0&&(s.error=Vi),s.complete===void 0&&(s.complete=Vi);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function fm(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Vi(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mm=1e3,pm=2,gm=4*60*60*1e3,vm=.5;function ym(t,e=mm,n=pm){const r=e*Math.pow(n,t),s=Math.round(vm*r*(Math.random()-.5)*2);return Math.min(gm,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(t){return t&&t._delegate?t._delegate:t}class St{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new mr;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_m(e))try{this.getOrInitializeService({instanceIdentifier:hn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(e=hn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=hn){return this.instances.has(e)}getOptions(e=hn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,c]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);r===u&&c.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Sm(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=hn){return this.component?this.component.multipleInstances?e:hn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Sm(t){return t===hn?void 0:t}function _m(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new wm(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var de;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(de||(de={}));const Pm={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},Tm=de.INFO,Im={[de.DEBUG]:"log",[de.VERBOSE]:"log",[de.INFO]:"info",[de.WARN]:"warn",[de.ERROR]:"error"},Am=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Im[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class gi{constructor(e){this.name=e,this._logLevel=Tm,this._logHandler=Am,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in de))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Pm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,de.DEBUG,...e),this._logHandler(this,de.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,de.VERBOSE,...e),this._logHandler(this,de.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,de.INFO,...e),this._logHandler(this,de.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,de.WARN,...e),this._logHandler(this,de.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,de.ERROR,...e),this._logHandler(this,de.ERROR,...e)}}const Em=(t,e)=>e.some(n=>t instanceof n);let aa,ca;function Cm(){return aa||(aa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xm(){return ca||(ca=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Hc=new WeakMap,is=new WeakMap,qc=new WeakMap,Bi=new WeakMap,ks=new WeakMap;function Rm(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",o),t.removeEventListener("error",c)},o=()=>{n(Yt(t.result)),s()},c=()=>{r(t.error),s()};t.addEventListener("success",o),t.addEventListener("error",c)});return e.then(n=>{n instanceof IDBCursor&&Hc.set(n,t)}).catch(()=>{}),ks.set(e,t),e}function km(t){if(is.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",c),t.removeEventListener("abort",c)},o=()=>{n(),s()},c=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",o),t.addEventListener("error",c),t.addEventListener("abort",c)});is.set(t,e)}let ss={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return is.get(t);if(e==="objectStoreNames")return t.objectStoreNames||qc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Yt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Mm(t){ss=t(ss)}function Dm(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(zi(this),e,...n);return qc.set(r,e.sort?e.sort():[e]),Yt(r)}:xm().includes(t)?function(...e){return t.apply(zi(this),e),Yt(Hc.get(this))}:function(...e){return Yt(t.apply(zi(this),e))}}function Om(t){return typeof t=="function"?Dm(t):(t instanceof IDBTransaction&&km(t),Em(t,Cm())?new Proxy(t,ss):t)}function Yt(t){if(t instanceof IDBRequest)return Rm(t);if(Bi.has(t))return Bi.get(t);const e=Om(t);return e!==t&&(Bi.set(t,e),ks.set(e,t)),e}const zi=t=>ks.get(t);function Lm(t,e,{blocked:n,upgrade:r,blocking:s,terminated:o}={}){const c=indexedDB.open(t,e),u=Yt(c);return r&&c.addEventListener("upgradeneeded",h=>{r(Yt(c.result),h.oldVersion,h.newVersion,Yt(c.transaction),h)}),n&&c.addEventListener("blocked",h=>n(h.oldVersion,h.newVersion,h)),u.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),u}const Fm=["get","getKey","getAll","getAllKeys","count"],Nm=["put","add","delete","clear"],$i=new Map;function la(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if($i.get(e))return $i.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Nm.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Fm.includes(n)))return;const o=async function(c,...u){const h=this.transaction(c,s?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(u.shift())),(await Promise.all([d[n](...u),s&&h.done]))[0]};return $i.set(e,o),o}Mm(t=>({...t,get:(e,n,r)=>la(e,n)||t.get(e,n,r),has:(e,n)=>!!la(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(jm(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function jm(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const os="@firebase/app",ua="0.14.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nt=new gi("@firebase/app"),Vm="@firebase/app-compat",Bm="@firebase/analytics-compat",zm="@firebase/analytics",$m="@firebase/app-check-compat",Gm="@firebase/app-check",Wm="@firebase/auth",Hm="@firebase/auth-compat",qm="@firebase/database",Km="@firebase/data-connect",Xm="@firebase/database-compat",Jm="@firebase/functions",Ym="@firebase/functions-compat",Qm="@firebase/installations",Zm="@firebase/installations-compat",ep="@firebase/messaging",tp="@firebase/messaging-compat",np="@firebase/performance",rp="@firebase/performance-compat",ip="@firebase/remote-config",sp="@firebase/remote-config-compat",op="@firebase/storage",ap="@firebase/storage-compat",cp="@firebase/firestore",lp="@firebase/ai",up="@firebase/firestore-compat",hp="firebase",dp="12.0.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as="[DEFAULT]",fp={[os]:"fire-core",[Vm]:"fire-core-compat",[zm]:"fire-analytics",[Bm]:"fire-analytics-compat",[Gm]:"fire-app-check",[$m]:"fire-app-check-compat",[Wm]:"fire-auth",[Hm]:"fire-auth-compat",[qm]:"fire-rtdb",[Km]:"fire-data-connect",[Xm]:"fire-rtdb-compat",[Jm]:"fire-fn",[Ym]:"fire-fn-compat",[Qm]:"fire-iid",[Zm]:"fire-iid-compat",[ep]:"fire-fcm",[tp]:"fire-fcm-compat",[np]:"fire-perf",[rp]:"fire-perf-compat",[ip]:"fire-rc",[sp]:"fire-rc-compat",[op]:"fire-gcs",[ap]:"fire-gcs-compat",[cp]:"fire-fst",[up]:"fire-fst-compat",[lp]:"fire-vertex","fire-js":"fire-js",[hp]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni=new Map,mp=new Map,cs=new Map;function ha(t,e){try{t.container.addComponent(e)}catch(n){Nt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ut(t){const e=t.name;if(cs.has(e))return Nt.debug(`There were multiple attempts to register component ${e}.`),!1;cs.set(e,t);for(const n of ni.values())ha(n,t);for(const n of mp.values())ha(n,t);return!0}function Gn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function ot(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Qt=new $n("app","Firebase",pp);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new St("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Qt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn=dp;function Kc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:as,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Qt.create("bad-app-name",{appName:String(s)});if(n||(n=Gc()),!n)throw Qt.create("no-options");const o=ni.get(s);if(o){if(wn(n,o.options)&&wn(r,o.config))return o;throw Qt.create("duplicate-app",{appName:s})}const c=new bm(s);for(const h of cs.values())c.addComponent(h);const u=new gp(n,r,c);return ni.set(s,u),u}function vi(t=as){const e=ni.get(t);if(!e&&t===as&&Gc())return Kc();if(!e)throw Qt.create("no-app",{appName:t});return e}function ut(t,e,n){let r=fp[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const c=[`Unable to register library "${r}" with version "${e}":`];s&&c.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Nt.warn(c.join(" "));return}Ut(new St(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vp="firebase-heartbeat-database",yp=1,pr="firebase-heartbeat-store";let Gi=null;function Xc(){return Gi||(Gi=Lm(vp,yp,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(pr)}catch(n){console.warn(n)}}}}).catch(t=>{throw Qt.create("idb-open",{originalErrorMessage:t.message})})),Gi}async function wp(t){try{const n=(await Xc()).transaction(pr),r=await n.objectStore(pr).get(Jc(t));return await n.done,r}catch(e){if(e instanceof _t)Nt.warn(e.message);else{const n=Qt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Nt.warn(n.message)}}}async function da(t,e){try{const r=(await Xc()).transaction(pr,"readwrite");await r.objectStore(pr).put(e,Jc(t)),await r.done}catch(n){if(n instanceof _t)Nt.warn(n.message);else{const r=Qt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Nt.warn(r.message)}}}function Jc(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sp=1024,_p=30;class bp{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Tp(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=fa();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(c=>c.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats.length>_p){const c=Ip(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Nt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=fa(),{heartbeatsToSend:r,unsentEntries:s}=Pp(this._heartbeatsCache.heartbeats),o=ti(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return Nt.warn(n),""}}}function fa(){return new Date().toISOString().substring(0,10)}function Pp(t,e=Sp){const n=[];let r=t.slice();for(const s of t){const o=n.find(c=>c.agent===s.agent);if(o){if(o.dates.push(s.date),ma(n)>e){o.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ma(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Tp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Rs()?om().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await wp(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return da(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return da(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function ma(t){return ti(JSON.stringify({version:2,heartbeats:t})).length}function Ip(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ap(t){Ut(new St("platform-logger",e=>new Um(e),"PRIVATE")),Ut(new St("heartbeat",e=>new bp(e),"PRIVATE")),ut(os,ua,t),ut(os,ua,"esm2020"),ut("fire-js","")}Ap("");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ep="type.googleapis.com/google.protobuf.Int64Value",Cp="type.googleapis.com/google.protobuf.UInt64Value";function Yc(t,e){const n={};for(const r in t)t.hasOwnProperty(r)&&(n[r]=e(t[r]));return n}function ri(t){if(t==null)return null;if(t instanceof Number&&(t=t.valueOf()),typeof t=="number"&&isFinite(t)||t===!0||t===!1||Object.prototype.toString.call(t)==="[object String]")return t;if(t instanceof Date)return t.toISOString();if(Array.isArray(t))return t.map(e=>ri(e));if(typeof t=="function"||typeof t=="object")return Yc(t,e=>ri(e));throw new Error("Data cannot be encoded in JSON: "+t)}function jn(t){if(t==null)return t;if(t["@type"])switch(t["@type"]){case Ep:case Cp:{const e=Number(t.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+t);return e}default:throw new Error("Data cannot be decoded from JSON: "+t)}return Array.isArray(t)?t.map(e=>jn(e)):typeof t=="function"||typeof t=="object"?Yc(t,e=>jn(e)):t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ms="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pa={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class He extends _t{constructor(e,n,r){super(`${Ms}/${e}`,n||""),this.details=r,Object.setPrototypeOf(this,He.prototype)}}function xp(t){if(t>=200&&t<300)return"ok";switch(t){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function ii(t,e){let n=xp(t),r=n,s;try{const o=e&&e.error;if(o){const c=o.status;if(typeof c=="string"){if(!pa[c])return new He("internal","internal");n=pa[c],r=c}const u=o.message;typeof u=="string"&&(r=u),s=o.details,s!==void 0&&(s=jn(s))}}catch{}return n==="ok"?null:new He(n,r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp{constructor(e,n,r,s){this.app=e,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,ot(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.auth=n.getImmediate({optional:!0}),this.messaging=r.getImmediate({optional:!0}),this.auth||n.get().then(o=>this.auth=o,()=>{}),this.messaging||r.get().then(o=>this.messaging=o,()=>{}),this.appCheck||s==null||s.get().then(o=>this.appCheck=o,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const n=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return n.error?null:n.token}return null}async getContext(e){const n=await this.getAuthToken(),r=await this.getMessagingToken(),s=await this.getAppCheckToken(e);return{authToken:n,messagingToken:r,appCheckToken:s}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls="us-central1",kp=/^data: (.*?)(?:\n|$)/;function Mp(t){let e=null;return{promise:new Promise((n,r)=>{e=setTimeout(()=>{r(new He("deadline-exceeded","deadline-exceeded"))},t)}),cancel:()=>{e&&clearTimeout(e)}}}class Dp{constructor(e,n,r,s,o=ls,c=(...u)=>fetch(...u)){this.app=e,this.fetchImpl=c,this.emulatorOrigin=null,this.contextProvider=new Rp(e,n,r,s),this.cancelAllRequests=new Promise(u=>{this.deleteService=()=>Promise.resolve(u())});try{const u=new URL(o);this.customDomain=u.origin+(u.pathname==="/"?"":u.pathname),this.region=ls}catch{this.customDomain=null,this.region=o}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}function Op(t,e,n){const r=zn(e);t.emulatorOrigin=`http${r?"s":""}://${e}:${n}`,r&&(Cs(t.emulatorOrigin),xs("Functions",!0))}function Lp(t,e,n){const r=s=>Np(t,e,s,{});return r.stream=(s,o)=>jp(t,e,s,o),r}async function Fp(t,e,n,r){n["Content-Type"]="application/json";let s;try{s=await r(t,{method:"POST",body:JSON.stringify(e),headers:n})}catch{return{status:0,json:null}}let o=null;try{o=await s.json()}catch{}return{status:s.status,json:o}}async function Qc(t,e){const n={},r=await t.contextProvider.getContext(e.limitedUseAppCheckTokens);return r.authToken&&(n.Authorization="Bearer "+r.authToken),r.messagingToken&&(n["Firebase-Instance-ID-Token"]=r.messagingToken),r.appCheckToken!==null&&(n["X-Firebase-AppCheck"]=r.appCheckToken),n}function Np(t,e,n,r){const s=t._url(e);return Up(t,s,n,r)}async function Up(t,e,n,r){n=ri(n);const s={data:n},o=await Qc(t,r),c=r.timeout||7e4,u=Mp(c),h=await Promise.race([Fp(e,s,o,t.fetchImpl),u.promise,t.cancelAllRequests]);if(u.cancel(),!h)throw new He("cancelled","Firebase Functions instance was deleted.");const d=ii(h.status,h.json);if(d)throw d;if(!h.json)throw new He("internal","Response is not valid JSON object.");let v=h.json.data;if(typeof v>"u"&&(v=h.json.result),typeof v>"u")throw new He("internal","Response is missing data field.");return{data:jn(v)}}function jp(t,e,n,r){const s=t._url(e);return Vp(t,s,n,r||{})}async function Vp(t,e,n,r){var E;n=ri(n);const s={data:n},o=await Qc(t,r);o["Content-Type"]="application/json",o.Accept="text/event-stream";let c;try{c=await t.fetchImpl(e,{method:"POST",body:JSON.stringify(s),headers:o,signal:r==null?void 0:r.signal})}catch(A){if(A instanceof Error&&A.name==="AbortError"){const I=new He("cancelled","Request was cancelled.");return{data:Promise.reject(I),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(I)}}}}}}const C=ii(0,null);return{data:Promise.reject(C),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(C)}}}}}}let u,h;const d=new Promise((A,C)=>{u=A,h=C});(E=r==null?void 0:r.signal)==null||E.addEventListener("abort",()=>{const A=new He("cancelled","Request was cancelled.");h(A)});const v=c.body.getReader(),T=Bp(v,u,h,r==null?void 0:r.signal);return{stream:{[Symbol.asyncIterator](){const A=T.getReader();return{async next(){const{value:C,done:I}=await A.read();return{value:C,done:I}},async return(){return await A.cancel(),{done:!0,value:void 0}}}}},data:d}}function Bp(t,e,n,r){const s=(c,u)=>{const h=c.match(kp);if(!h)return;const d=h[1];try{const v=JSON.parse(d);if("result"in v){e(jn(v.result));return}if("message"in v){u.enqueue(jn(v.message));return}if("error"in v){const T=ii(0,v);u.error(T),n(T);return}}catch(v){if(v instanceof He){u.error(v),n(v);return}}},o=new TextDecoder;return new ReadableStream({start(c){let u="";return h();async function h(){if(r!=null&&r.aborted){const d=new He("cancelled","Request was cancelled");return c.error(d),n(d),Promise.resolve()}try{const{value:d,done:v}=await t.read();if(v){u.trim()&&s(u.trim(),c),c.close();return}if(r!=null&&r.aborted){const E=new He("cancelled","Request was cancelled");c.error(E),n(E),await t.cancel();return}u+=o.decode(d,{stream:!0});const T=u.split(`
`);u=T.pop()||"";for(const E of T)E.trim()&&s(E.trim(),c);return h()}catch(d){const v=d instanceof He?d:ii(0,null);c.error(v),n(v)}}},cancel(){return t.cancel()}})}const ga="@firebase/functions",va="0.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zp="auth-internal",$p="app-check-internal",Gp="messaging-internal";function Wp(t){const e=(n,{instanceIdentifier:r})=>{const s=n.getProvider("app").getImmediate(),o=n.getProvider(zp),c=n.getProvider(Gp),u=n.getProvider($p);return new Dp(s,o,c,u,r)};Ut(new St(Ms,e,"PUBLIC").setMultipleInstances(!0)),ut(ga,va,t),ut(ga,va,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hp(t=vi(),e=ls){const r=Gn(bt(t),Ms).getImmediate({identifier:e}),s=$c("functions");return s&&qp(r,...s),r}function qp(t,e,n){Op(bt(t),e,n)}function Kp(t,e,n){return Lp(bt(t),e)}Wp();var Xp="firebase",Jp="12.0.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ut(Xp,Jp,"app");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const us=new Map,Zc={activated:!1,tokenObservers:[]},Yp={initialized:!1,enabled:!1};function Re(t){return us.get(t)||{...Zc}}function Qp(t,e){return us.set(t,e),us.get(t)}function yi(){return Yp}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const el="https://content-firebaseappcheck.googleapis.com/v1",Zp="exchangeRecaptchaV3Token",eg="exchangeDebugToken",ya={RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3},tg=24*60*60*1e3;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(e,n,r,s,o){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=r,this.lowerBound=s,this.upperBound=o,this.pending=null,this.nextErrorWaitInterval=s,s>o)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new mr,this.pending.promise.catch(n=>{}),await rg(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new mr,this.pending.promise.catch(n=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function rg(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ig={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.","initial-throttle":"{$httpStatus} error. Attempts allowed again after {$time}",throttled:"Requests throttled due to previous {$httpStatus} error. Attempts allowed again after {$time}"},qe=new $n("appCheck","AppCheck",ig);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wa(t=!1){var e;return t?(e=self.grecaptcha)==null?void 0:e.enterprise:self.grecaptcha}function Ds(t){if(!Re(t).activated)throw qe.create("use-before-activation",{appName:t.name})}function tl(t){const e=Math.round(t/1e3),n=Math.floor(e/(3600*24)),r=Math.floor((e-n*3600*24)/3600),s=Math.floor((e-n*3600*24-r*3600)/60),o=e-n*3600*24-r*3600-s*60;let c="";return n&&(c+=zr(n)+"d:"),r&&(c+=zr(r)+"h:"),c+=zr(s)+"m:"+zr(o)+"s",c}function zr(t){return t===0?"00":t>=10?t.toString():"0"+t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Os({url:t,body:e},n){const r={"Content-Type":"application/json"},s=n.getImmediate({optional:!0});if(s){const T=await s.getHeartbeatsHeader();T&&(r["X-Firebase-Client"]=T)}const o={method:"POST",body:JSON.stringify(e),headers:r};let c;try{c=await fetch(t,o)}catch(T){throw qe.create("fetch-network-error",{originalErrorMessage:T==null?void 0:T.message})}if(c.status!==200)throw qe.create("fetch-status-error",{httpStatus:c.status});let u;try{u=await c.json()}catch(T){throw qe.create("fetch-parse-error",{originalErrorMessage:T==null?void 0:T.message})}const h=u.ttl.match(/^([\d.]+)(s)$/);if(!h||!h[2]||isNaN(Number(h[1])))throw qe.create("fetch-parse-error",{originalErrorMessage:`ttl field (timeToLive) is not in standard Protobuf Duration format: ${u.ttl}`});const d=Number(h[1])*1e3,v=Date.now();return{token:u.token,expireTimeMillis:v+d,issuedAtTimeMillis:v}}function sg(t,e){const{projectId:n,appId:r,apiKey:s}=t.options;return{url:`${el}/projects/${n}/apps/${r}:${Zp}?key=${s}`,body:{recaptcha_v3_token:e}}}function nl(t,e){const{projectId:n,appId:r,apiKey:s}=t.options;return{url:`${el}/projects/${n}/apps/${r}:${eg}?key=${s}`,body:{debug_token:e}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const og="firebase-app-check-database",ag=1,gr="firebase-app-check-store",rl="debug-token";let $r=null;function il(){return $r||($r=new Promise((t,e)=>{try{const n=indexedDB.open(og,ag);n.onsuccess=r=>{t(r.target.result)},n.onerror=r=>{var s;e(qe.create("storage-open",{originalErrorMessage:(s=r.target.error)==null?void 0:s.message}))},n.onupgradeneeded=r=>{const s=r.target.result;switch(r.oldVersion){case 0:s.createObjectStore(gr,{keyPath:"compositeKey"})}}}catch(n){e(qe.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),$r)}function cg(t){return ol(al(t))}function lg(t,e){return sl(al(t),e)}function ug(t){return sl(rl,t)}function hg(){return ol(rl)}async function sl(t,e){const r=(await il()).transaction(gr,"readwrite"),o=r.objectStore(gr).put({compositeKey:t,value:e});return new Promise((c,u)=>{o.onsuccess=h=>{c()},r.onerror=h=>{var d;u(qe.create("storage-set",{originalErrorMessage:(d=h.target.error)==null?void 0:d.message}))}})}async function ol(t){const n=(await il()).transaction(gr,"readonly"),s=n.objectStore(gr).get(t);return new Promise((o,c)=>{s.onsuccess=u=>{const h=u.target.result;o(h?h.value:void 0)},n.onerror=u=>{var h;c(qe.create("storage-get",{originalErrorMessage:(h=u.target.error)==null?void 0:h.message}))}})}function al(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt=new gi("@firebase/app-check");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dg(t){if(Rs()){let e;try{e=await cg(t)}catch(n){Xt.warn(`Failed to read token from IndexedDB. Error: ${n}`)}return e}}function Wi(t,e){return Rs()?lg(t,e).catch(n=>{Xt.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}async function fg(){let t;try{t=await hg()}catch{}if(t)return t;{const e=crypto.randomUUID();return ug(e).catch(n=>Xt.warn(`Failed to persist debug token to IndexedDB. Error: ${n}`)),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ls(){return yi().enabled}async function Fs(){const t=yi();if(t.enabled&&t.token)return t.token.promise;throw Error(`
            Can't get debug token in production mode.
        `)}function mg(){const t=Bc(),e=yi();if(e.initialized=!0,typeof t.FIREBASE_APPCHECK_DEBUG_TOKEN!="string"&&t.FIREBASE_APPCHECK_DEBUG_TOKEN!==!0)return;e.enabled=!0;const n=new mr;e.token=n,typeof t.FIREBASE_APPCHECK_DEBUG_TOKEN=="string"?n.resolve(t.FIREBASE_APPCHECK_DEBUG_TOKEN):n.resolve(fg())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pg={error:"UNKNOWN_ERROR"};function gg(t){return As.encodeString(JSON.stringify(t),!1)}async function hs(t,e=!1,n=!1){const r=t.app;Ds(r);const s=Re(r);let o=s.token,c;if(o&&!Rn(o)&&(s.token=void 0,o=void 0),!o){const d=await s.cachedTokenPromise;d&&(Rn(d)?o=d:await Wi(r,void 0))}if(!e&&o&&Rn(o))return{token:o.token};let u=!1;if(Ls())try{s.exchangeTokenPromise||(s.exchangeTokenPromise=Os(nl(r,await Fs()),t.heartbeatServiceProvider).finally(()=>{s.exchangeTokenPromise=void 0}),u=!0);const d=await s.exchangeTokenPromise;return await Wi(r,d),s.token=d,{token:d.token}}catch(d){return d.code==="appCheck/throttled"||d.code==="appCheck/initial-throttle"?Xt.warn(d.message):n&&Xt.error(d),Hi(d)}try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),u=!0),o=await Re(r).exchangeTokenPromise}catch(d){d.code==="appCheck/throttled"||d.code==="appCheck/initial-throttle"?Xt.warn(d.message):n&&Xt.error(d),c=d}let h;return o?c?Rn(o)?h={token:o.token,internalError:c}:h=Hi(c):(h={token:o.token},s.token=o,await Wi(r,o)):h=Hi(c),u&&ul(r,h),h}async function vg(t){const e=t.app;Ds(e);const{provider:n}=Re(e);if(Ls()){const r=await Fs(),{token:s}=await Os(nl(e,r),t.heartbeatServiceProvider);return{token:s}}else{const{token:r}=await n.getToken();return{token:r}}}function cl(t,e,n,r){const{app:s}=t,o=Re(s),c={next:n,error:r,type:e};if(o.tokenObservers=[...o.tokenObservers,c],o.token&&Rn(o.token)){const u=o.token;Promise.resolve().then(()=>{n({token:u.token}),Sa(t)}).catch(()=>{})}o.cachedTokenPromise.then(()=>Sa(t))}function ll(t,e){const n=Re(t),r=n.tokenObservers.filter(s=>s.next!==e);r.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=r}function Sa(t){const{app:e}=t,n=Re(e);let r=n.tokenRefresher;r||(r=yg(t),n.tokenRefresher=r),!r.isRunning()&&n.isTokenAutoRefreshEnabled&&r.start()}function yg(t){const{app:e}=t;return new ng(async()=>{const n=Re(e);let r;if(n.token?r=await hs(t,!0):r=await hs(t),r.error)throw r.error;if(r.internalError)throw r.internalError},()=>!0,()=>{const n=Re(e);if(n.token){let r=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const s=n.token.expireTimeMillis-5*60*1e3;return r=Math.min(r,s),Math.max(0,r-Date.now())}else return 0},ya.RETRIAL_MIN_WAIT,ya.RETRIAL_MAX_WAIT)}function ul(t,e){const n=Re(t).tokenObservers;for(const r of n)try{r.type==="EXTERNAL"&&e.error!=null?r.error(e.error):r.next(e)}catch{}}function Rn(t){return t.expireTimeMillis-Date.now()>0}function Hi(t){return{token:gg(pg),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=Re(this.app);for(const n of e)ll(this.app,n.next);return Promise.resolve()}}function Sg(t,e){return new wg(t,e)}function _g(t){return{getToken:e=>hs(t,e),getLimitedUseToken:()=>vg(t),addTokenListener:e=>cl(t,"INTERNAL",e),removeTokenListener:e=>ll(t.app,e)}}const bg="@firebase/app-check",Pg="0.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tg="https://www.google.com/recaptcha/api.js";function Ig(t,e){const n=new mr,r=Re(t);r.reCAPTCHAState={initialized:n};const s=Ag(t),o=wa(!1);return o?_a(t,e,o,s,n):xg(()=>{const c=wa(!1);if(!c)throw new Error("no recaptcha");_a(t,e,c,s,n)}),n.promise}function _a(t,e,n,r,s){n.ready(()=>{Cg(t,e,n,r),s.resolve(n)})}function Ag(t){const e=`fire_app_check_${t.name}`,n=document.createElement("div");return n.id=e,n.style.display="none",document.body.appendChild(n),e}async function Eg(t){Ds(t);const n=await Re(t).reCAPTCHAState.initialized.promise;return new Promise((r,s)=>{const o=Re(t).reCAPTCHAState;n.ready(()=>{r(n.execute(o.widgetId,{action:"fire_app_check"}))})})}function Cg(t,e,n,r){const s=n.render(r,{sitekey:e,size:"invisible",callback:()=>{Re(t).reCAPTCHAState.succeeded=!0},"error-callback":()=>{Re(t).reCAPTCHAState.succeeded=!1}}),o=Re(t);o.reCAPTCHAState={...o.reCAPTCHAState,widgetId:s}}function xg(t){const e=document.createElement("script");e.src=Tg,e.onload=t,document.head.appendChild(e)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e){this._siteKey=e,this._throttleData=null}async getToken(){var r,s,o;kg(this._throttleData);const e=await Eg(this._app).catch(c=>{throw qe.create("recaptcha-error")});if(!((r=Re(this._app).reCAPTCHAState)!=null&&r.succeeded))throw qe.create("recaptcha-error");let n;try{n=await Os(sg(this._app,e),this._heartbeatServiceProvider)}catch(c){throw(s=c.code)!=null&&s.includes("fetch-status-error")?(this._throttleData=Rg(Number((o=c.customData)==null?void 0:o.httpStatus),this._throttleData),qe.create("initial-throttle",{time:tl(this._throttleData.allowRequestsAfter-Date.now()),httpStatus:this._throttleData.httpStatus})):c}return this._throttleData=null,n}initialize(e){this._app=e,this._heartbeatServiceProvider=Gn(e,"heartbeat"),Ig(e,this._siteKey).catch(()=>{})}isEqual(e){return e instanceof Ns?this._siteKey===e._siteKey:!1}}function Rg(t,e){if(t===404||t===403)return{backoffCount:1,allowRequestsAfter:Date.now()+tg,httpStatus:t};{const n=e?e.backoffCount:0,r=ym(n,1e3,2);return{backoffCount:n+1,allowRequestsAfter:Date.now()+r,httpStatus:t}}}function kg(t){if(t&&Date.now()-t.allowRequestsAfter<=0)throw qe.create("throttled",{time:tl(t.allowRequestsAfter-Date.now()),httpStatus:t.httpStatus})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mg(t=vi(),e){t=bt(t);const n=Gn(t,"app-check");if(yi().initialized||mg(),Ls()&&Fs().then(s=>console.log(`App Check debug token: ${s}. You will need to add it to your app's App Check settings in the Firebase console for it to work.`)),n.isInitialized()){const s=n.getImmediate(),o=n.getOptions();if(o.isTokenAutoRefreshEnabled===e.isTokenAutoRefreshEnabled&&o.provider.isEqual(e.provider))return s;throw qe.create("already-initialized",{appName:t.name})}const r=n.initialize({options:e});return Dg(t,e.provider,e.isTokenAutoRefreshEnabled),Re(t).isTokenAutoRefreshEnabled&&cl(r,"INTERNAL",()=>{}),r}function Dg(t,e,n=!1){const r=Qp(t,{...Zc});r.activated=!0,r.provider=e,r.cachedTokenPromise=dg(t).then(s=>(s&&Rn(s)&&(r.token=s,ul(t,{token:s.token})),s)),r.isTokenAutoRefreshEnabled=n&&t.automaticDataCollectionEnabled,!t.automaticDataCollectionEnabled&&n&&Xt.warn("`isTokenAutoRefreshEnabled` is true but `automaticDataCollectionEnabled` was set to false during `initializeApp()`. This blocks automatic token refresh."),r.provider.initialize(t)}const Og="app-check",ba="app-check-internal";function Lg(){Ut(new St(Og,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return Sg(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(ba).initialize()})),Ut(new St(ba,t=>{const e=t.getProvider("app-check").getImmediate();return _g(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),ut(bg,Pg)}Lg();var Pa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Us;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(y,p){function f(){}f.prototype=p.prototype,y.D=p.prototype,y.prototype=new f,y.prototype.constructor=y,y.C=function(_,g,P){for(var w=Array(arguments.length-2),V=2;V<arguments.length;V++)w[V-2]=arguments[V];return p.prototype[g].apply(_,w)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(y,p,f){f||(f=0);var _=Array(16);if(typeof p=="string")for(var g=0;16>g;++g)_[g]=p.charCodeAt(f++)|p.charCodeAt(f++)<<8|p.charCodeAt(f++)<<16|p.charCodeAt(f++)<<24;else for(g=0;16>g;++g)_[g]=p[f++]|p[f++]<<8|p[f++]<<16|p[f++]<<24;p=y.g[0],f=y.g[1],g=y.g[2];var P=y.g[3],w=p+(P^f&(g^P))+_[0]+3614090360&4294967295;p=f+(w<<7&4294967295|w>>>25),w=P+(g^p&(f^g))+_[1]+3905402710&4294967295,P=p+(w<<12&4294967295|w>>>20),w=g+(f^P&(p^f))+_[2]+606105819&4294967295,g=P+(w<<17&4294967295|w>>>15),w=f+(p^g&(P^p))+_[3]+3250441966&4294967295,f=g+(w<<22&4294967295|w>>>10),w=p+(P^f&(g^P))+_[4]+4118548399&4294967295,p=f+(w<<7&4294967295|w>>>25),w=P+(g^p&(f^g))+_[5]+1200080426&4294967295,P=p+(w<<12&4294967295|w>>>20),w=g+(f^P&(p^f))+_[6]+2821735955&4294967295,g=P+(w<<17&4294967295|w>>>15),w=f+(p^g&(P^p))+_[7]+4249261313&4294967295,f=g+(w<<22&4294967295|w>>>10),w=p+(P^f&(g^P))+_[8]+1770035416&4294967295,p=f+(w<<7&4294967295|w>>>25),w=P+(g^p&(f^g))+_[9]+2336552879&4294967295,P=p+(w<<12&4294967295|w>>>20),w=g+(f^P&(p^f))+_[10]+4294925233&4294967295,g=P+(w<<17&4294967295|w>>>15),w=f+(p^g&(P^p))+_[11]+2304563134&4294967295,f=g+(w<<22&4294967295|w>>>10),w=p+(P^f&(g^P))+_[12]+1804603682&4294967295,p=f+(w<<7&4294967295|w>>>25),w=P+(g^p&(f^g))+_[13]+4254626195&4294967295,P=p+(w<<12&4294967295|w>>>20),w=g+(f^P&(p^f))+_[14]+2792965006&4294967295,g=P+(w<<17&4294967295|w>>>15),w=f+(p^g&(P^p))+_[15]+1236535329&4294967295,f=g+(w<<22&4294967295|w>>>10),w=p+(g^P&(f^g))+_[1]+4129170786&4294967295,p=f+(w<<5&4294967295|w>>>27),w=P+(f^g&(p^f))+_[6]+3225465664&4294967295,P=p+(w<<9&4294967295|w>>>23),w=g+(p^f&(P^p))+_[11]+643717713&4294967295,g=P+(w<<14&4294967295|w>>>18),w=f+(P^p&(g^P))+_[0]+3921069994&4294967295,f=g+(w<<20&4294967295|w>>>12),w=p+(g^P&(f^g))+_[5]+3593408605&4294967295,p=f+(w<<5&4294967295|w>>>27),w=P+(f^g&(p^f))+_[10]+38016083&4294967295,P=p+(w<<9&4294967295|w>>>23),w=g+(p^f&(P^p))+_[15]+3634488961&4294967295,g=P+(w<<14&4294967295|w>>>18),w=f+(P^p&(g^P))+_[4]+3889429448&4294967295,f=g+(w<<20&4294967295|w>>>12),w=p+(g^P&(f^g))+_[9]+568446438&4294967295,p=f+(w<<5&4294967295|w>>>27),w=P+(f^g&(p^f))+_[14]+3275163606&4294967295,P=p+(w<<9&4294967295|w>>>23),w=g+(p^f&(P^p))+_[3]+4107603335&4294967295,g=P+(w<<14&4294967295|w>>>18),w=f+(P^p&(g^P))+_[8]+1163531501&4294967295,f=g+(w<<20&4294967295|w>>>12),w=p+(g^P&(f^g))+_[13]+2850285829&4294967295,p=f+(w<<5&4294967295|w>>>27),w=P+(f^g&(p^f))+_[2]+4243563512&4294967295,P=p+(w<<9&4294967295|w>>>23),w=g+(p^f&(P^p))+_[7]+1735328473&4294967295,g=P+(w<<14&4294967295|w>>>18),w=f+(P^p&(g^P))+_[12]+2368359562&4294967295,f=g+(w<<20&4294967295|w>>>12),w=p+(f^g^P)+_[5]+4294588738&4294967295,p=f+(w<<4&4294967295|w>>>28),w=P+(p^f^g)+_[8]+2272392833&4294967295,P=p+(w<<11&4294967295|w>>>21),w=g+(P^p^f)+_[11]+1839030562&4294967295,g=P+(w<<16&4294967295|w>>>16),w=f+(g^P^p)+_[14]+4259657740&4294967295,f=g+(w<<23&4294967295|w>>>9),w=p+(f^g^P)+_[1]+2763975236&4294967295,p=f+(w<<4&4294967295|w>>>28),w=P+(p^f^g)+_[4]+1272893353&4294967295,P=p+(w<<11&4294967295|w>>>21),w=g+(P^p^f)+_[7]+4139469664&4294967295,g=P+(w<<16&4294967295|w>>>16),w=f+(g^P^p)+_[10]+3200236656&4294967295,f=g+(w<<23&4294967295|w>>>9),w=p+(f^g^P)+_[13]+681279174&4294967295,p=f+(w<<4&4294967295|w>>>28),w=P+(p^f^g)+_[0]+3936430074&4294967295,P=p+(w<<11&4294967295|w>>>21),w=g+(P^p^f)+_[3]+3572445317&4294967295,g=P+(w<<16&4294967295|w>>>16),w=f+(g^P^p)+_[6]+76029189&4294967295,f=g+(w<<23&4294967295|w>>>9),w=p+(f^g^P)+_[9]+3654602809&4294967295,p=f+(w<<4&4294967295|w>>>28),w=P+(p^f^g)+_[12]+3873151461&4294967295,P=p+(w<<11&4294967295|w>>>21),w=g+(P^p^f)+_[15]+530742520&4294967295,g=P+(w<<16&4294967295|w>>>16),w=f+(g^P^p)+_[2]+3299628645&4294967295,f=g+(w<<23&4294967295|w>>>9),w=p+(g^(f|~P))+_[0]+4096336452&4294967295,p=f+(w<<6&4294967295|w>>>26),w=P+(f^(p|~g))+_[7]+1126891415&4294967295,P=p+(w<<10&4294967295|w>>>22),w=g+(p^(P|~f))+_[14]+2878612391&4294967295,g=P+(w<<15&4294967295|w>>>17),w=f+(P^(g|~p))+_[5]+4237533241&4294967295,f=g+(w<<21&4294967295|w>>>11),w=p+(g^(f|~P))+_[12]+1700485571&4294967295,p=f+(w<<6&4294967295|w>>>26),w=P+(f^(p|~g))+_[3]+2399980690&4294967295,P=p+(w<<10&4294967295|w>>>22),w=g+(p^(P|~f))+_[10]+4293915773&4294967295,g=P+(w<<15&4294967295|w>>>17),w=f+(P^(g|~p))+_[1]+2240044497&4294967295,f=g+(w<<21&4294967295|w>>>11),w=p+(g^(f|~P))+_[8]+1873313359&4294967295,p=f+(w<<6&4294967295|w>>>26),w=P+(f^(p|~g))+_[15]+4264355552&4294967295,P=p+(w<<10&4294967295|w>>>22),w=g+(p^(P|~f))+_[6]+2734768916&4294967295,g=P+(w<<15&4294967295|w>>>17),w=f+(P^(g|~p))+_[13]+1309151649&4294967295,f=g+(w<<21&4294967295|w>>>11),w=p+(g^(f|~P))+_[4]+4149444226&4294967295,p=f+(w<<6&4294967295|w>>>26),w=P+(f^(p|~g))+_[11]+3174756917&4294967295,P=p+(w<<10&4294967295|w>>>22),w=g+(p^(P|~f))+_[2]+718787259&4294967295,g=P+(w<<15&4294967295|w>>>17),w=f+(P^(g|~p))+_[9]+3951481745&4294967295,y.g[0]=y.g[0]+p&4294967295,y.g[1]=y.g[1]+(g+(w<<21&4294967295|w>>>11))&4294967295,y.g[2]=y.g[2]+g&4294967295,y.g[3]=y.g[3]+P&4294967295}r.prototype.u=function(y,p){p===void 0&&(p=y.length);for(var f=p-this.blockSize,_=this.B,g=this.h,P=0;P<p;){if(g==0)for(;P<=f;)s(this,y,P),P+=this.blockSize;if(typeof y=="string"){for(;P<p;)if(_[g++]=y.charCodeAt(P++),g==this.blockSize){s(this,_),g=0;break}}else for(;P<p;)if(_[g++]=y[P++],g==this.blockSize){s(this,_),g=0;break}}this.h=g,this.o+=p},r.prototype.v=function(){var y=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);y[0]=128;for(var p=1;p<y.length-8;++p)y[p]=0;var f=8*this.o;for(p=y.length-8;p<y.length;++p)y[p]=f&255,f/=256;for(this.u(y),y=Array(16),p=f=0;4>p;++p)for(var _=0;32>_;_+=8)y[f++]=this.g[p]>>>_&255;return y};function o(y,p){var f=u;return Object.prototype.hasOwnProperty.call(f,y)?f[y]:f[y]=p(y)}function c(y,p){this.h=p;for(var f=[],_=!0,g=y.length-1;0<=g;g--){var P=y[g]|0;_&&P==p||(f[g]=P,_=!1)}this.g=f}var u={};function h(y){return-128<=y&&128>y?o(y,function(p){return new c([p|0],0>p?-1:0)}):new c([y|0],0>y?-1:0)}function d(y){if(isNaN(y)||!isFinite(y))return T;if(0>y)return x(d(-y));for(var p=[],f=1,_=0;y>=f;_++)p[_]=y/f|0,f*=4294967296;return new c(p,0)}function v(y,p){if(y.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(y.charAt(0)=="-")return x(v(y.substring(1),p));if(0<=y.indexOf("-"))throw Error('number format error: interior "-" character');for(var f=d(Math.pow(p,8)),_=T,g=0;g<y.length;g+=8){var P=Math.min(8,y.length-g),w=parseInt(y.substring(g,g+P),p);8>P?(P=d(Math.pow(p,P)),_=_.j(P).add(d(w))):(_=_.j(f),_=_.add(d(w)))}return _}var T=h(0),E=h(1),A=h(16777216);t=c.prototype,t.m=function(){if(I(this))return-x(this).m();for(var y=0,p=1,f=0;f<this.g.length;f++){var _=this.i(f);y+=(0<=_?_:4294967296+_)*p,p*=4294967296}return y},t.toString=function(y){if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(C(this))return"0";if(I(this))return"-"+x(this).toString(y);for(var p=d(Math.pow(y,6)),f=this,_="";;){var g=N(f,p).g;f=L(f,g.j(p));var P=((0<f.g.length?f.g[0]:f.h)>>>0).toString(y);if(f=g,C(f))return P+_;for(;6>P.length;)P="0"+P;_=P+_}},t.i=function(y){return 0>y?0:y<this.g.length?this.g[y]:this.h};function C(y){if(y.h!=0)return!1;for(var p=0;p<y.g.length;p++)if(y.g[p]!=0)return!1;return!0}function I(y){return y.h==-1}t.l=function(y){return y=L(this,y),I(y)?-1:C(y)?0:1};function x(y){for(var p=y.g.length,f=[],_=0;_<p;_++)f[_]=~y.g[_];return new c(f,~y.h).add(E)}t.abs=function(){return I(this)?x(this):this},t.add=function(y){for(var p=Math.max(this.g.length,y.g.length),f=[],_=0,g=0;g<=p;g++){var P=_+(this.i(g)&65535)+(y.i(g)&65535),w=(P>>>16)+(this.i(g)>>>16)+(y.i(g)>>>16);_=w>>>16,P&=65535,w&=65535,f[g]=w<<16|P}return new c(f,f[f.length-1]&-2147483648?-1:0)};function L(y,p){return y.add(x(p))}t.j=function(y){if(C(this)||C(y))return T;if(I(this))return I(y)?x(this).j(x(y)):x(x(this).j(y));if(I(y))return x(this.j(x(y)));if(0>this.l(A)&&0>y.l(A))return d(this.m()*y.m());for(var p=this.g.length+y.g.length,f=[],_=0;_<2*p;_++)f[_]=0;for(_=0;_<this.g.length;_++)for(var g=0;g<y.g.length;g++){var P=this.i(_)>>>16,w=this.i(_)&65535,V=y.i(g)>>>16,K=y.i(g)&65535;f[2*_+2*g]+=w*K,k(f,2*_+2*g),f[2*_+2*g+1]+=P*K,k(f,2*_+2*g+1),f[2*_+2*g+1]+=w*V,k(f,2*_+2*g+1),f[2*_+2*g+2]+=P*V,k(f,2*_+2*g+2)}for(_=0;_<p;_++)f[_]=f[2*_+1]<<16|f[2*_];for(_=p;_<2*p;_++)f[_]=0;return new c(f,0)};function k(y,p){for(;(y[p]&65535)!=y[p];)y[p+1]+=y[p]>>>16,y[p]&=65535,p++}function D(y,p){this.g=y,this.h=p}function N(y,p){if(C(p))throw Error("division by zero");if(C(y))return new D(T,T);if(I(y))return p=N(x(y),p),new D(x(p.g),x(p.h));if(I(p))return p=N(y,x(p)),new D(x(p.g),p.h);if(30<y.g.length){if(I(y)||I(p))throw Error("slowDivide_ only works with positive integers.");for(var f=E,_=p;0>=_.l(y);)f=F(f),_=F(_);var g=U(f,1),P=U(_,1);for(_=U(_,2),f=U(f,2);!C(_);){var w=P.add(_);0>=w.l(y)&&(g=g.add(f),P=w),_=U(_,1),f=U(f,1)}return p=L(y,g.j(p)),new D(g,p)}for(g=T;0<=y.l(p);){for(f=Math.max(1,Math.floor(y.m()/p.m())),_=Math.ceil(Math.log(f)/Math.LN2),_=48>=_?1:Math.pow(2,_-48),P=d(f),w=P.j(p);I(w)||0<w.l(y);)f-=_,P=d(f),w=P.j(p);C(P)&&(P=E),g=g.add(P),y=L(y,w)}return new D(g,y)}t.A=function(y){return N(this,y).h},t.and=function(y){for(var p=Math.max(this.g.length,y.g.length),f=[],_=0;_<p;_++)f[_]=this.i(_)&y.i(_);return new c(f,this.h&y.h)},t.or=function(y){for(var p=Math.max(this.g.length,y.g.length),f=[],_=0;_<p;_++)f[_]=this.i(_)|y.i(_);return new c(f,this.h|y.h)},t.xor=function(y){for(var p=Math.max(this.g.length,y.g.length),f=[],_=0;_<p;_++)f[_]=this.i(_)^y.i(_);return new c(f,this.h^y.h)};function F(y){for(var p=y.g.length+1,f=[],_=0;_<p;_++)f[_]=y.i(_)<<1|y.i(_-1)>>>31;return new c(f,y.h)}function U(y,p){var f=p>>5;p%=32;for(var _=y.g.length-f,g=[],P=0;P<_;P++)g[P]=0<p?y.i(P+f)>>>p|y.i(P+f+1)<<32-p:y.i(P+f);return new c(g,y.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=d,c.fromString=v,Us=c}).apply(typeof Pa<"u"?Pa:typeof self<"u"?self:typeof window<"u"?window:{});var Gr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,a,l){return i==Array.prototype||i==Object.prototype||(i[a]=l.value),i};function n(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Gr=="object"&&Gr];for(var a=0;a<i.length;++a){var l=i[a];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var r=n(this);function s(i,a){if(a)e:{var l=r;i=i.split(".");for(var m=0;m<i.length-1;m++){var R=i[m];if(!(R in l))break e;l=l[R]}i=i[i.length-1],m=l[i],a=a(m),a!=m&&a!=null&&e(l,i,{configurable:!0,writable:!0,value:a})}}function o(i,a){i instanceof String&&(i+="");var l=0,m=!1,R={next:function(){if(!m&&l<i.length){var O=l++;return{value:a(O,i[O]),done:!1}}return m=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}s("Array.prototype.values",function(i){return i||function(){return o(this,function(a,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},u=this||self;function h(i){var a=typeof i;return a=a!="object"?a:i?Array.isArray(i)?"array":a:"null",a=="array"||a=="object"&&typeof i.length=="number"}function d(i){var a=typeof i;return a=="object"&&i!=null||a=="function"}function v(i,a,l){return i.call.apply(i.bind,arguments)}function T(i,a,l){if(!i)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,m),i.apply(a,R)}}return function(){return i.apply(a,arguments)}}function E(i,a,l){return E=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?v:T,E.apply(null,arguments)}function A(i,a){var l=Array.prototype.slice.call(arguments,1);return function(){var m=l.slice();return m.push.apply(m,arguments),i.apply(this,m)}}function C(i,a){function l(){}l.prototype=a.prototype,i.aa=a.prototype,i.prototype=new l,i.prototype.constructor=i,i.Qb=function(m,R,O){for(var j=Array(arguments.length-2),me=2;me<arguments.length;me++)j[me-2]=arguments[me];return a.prototype[R].apply(m,j)}}function I(i){const a=i.length;if(0<a){const l=Array(a);for(let m=0;m<a;m++)l[m]=i[m];return l}return[]}function x(i,a){for(let l=1;l<arguments.length;l++){const m=arguments[l];if(h(m)){const R=i.length||0,O=m.length||0;i.length=R+O;for(let j=0;j<O;j++)i[R+j]=m[j]}else i.push(m)}}class L{constructor(a,l){this.i=a,this.j=l,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function k(i){return/^[\s\xa0]*$/.test(i)}function D(){var i=u.navigator;return i&&(i=i.userAgent)?i:""}function N(i){return N[" "](i),i}N[" "]=function(){};var F=D().indexOf("Gecko")!=-1&&!(D().toLowerCase().indexOf("webkit")!=-1&&D().indexOf("Edge")==-1)&&!(D().indexOf("Trident")!=-1||D().indexOf("MSIE")!=-1)&&D().indexOf("Edge")==-1;function U(i,a,l){for(const m in i)a.call(l,i[m],m,i)}function y(i,a){for(const l in i)a.call(void 0,i[l],l,i)}function p(i){const a={};for(const l in i)a[l]=i[l];return a}const f="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _(i,a){let l,m;for(let R=1;R<arguments.length;R++){m=arguments[R];for(l in m)i[l]=m[l];for(let O=0;O<f.length;O++)l=f[O],Object.prototype.hasOwnProperty.call(m,l)&&(i[l]=m[l])}}function g(i){var a=1;i=i.split(":");const l=[];for(;0<a&&i.length;)l.push(i.shift()),a--;return i.length&&l.push(i.join(":")),l}function P(i){u.setTimeout(()=>{throw i},0)}function w(){var i=ee;let a=null;return i.g&&(a=i.g,i.g=i.g.next,i.g||(i.h=null),a.next=null),a}class V{constructor(){this.h=this.g=null}add(a,l){const m=K.get();m.set(a,l),this.h?this.h.next=m:this.g=m,this.h=m}}var K=new L(()=>new B,i=>i.reset());class B{constructor(){this.next=this.g=this.h=null}set(a,l){this.h=a,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let $,X=!1,ee=new V,he=()=>{const i=u.Promise.resolve(void 0);$=()=>{i.then(ae)}};var ae=()=>{for(var i;i=w();){try{i.h.call(i.g)}catch(l){P(l)}var a=K;a.j(i),100>a.h&&(a.h++,i.next=a.g,a.g=i)}X=!1};function ne(){this.s=this.s,this.C=this.C}ne.prototype.s=!1,ne.prototype.ma=function(){this.s||(this.s=!0,this.N())},ne.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ce(i,a){this.type=i,this.g=this.target=a,this.defaultPrevented=!1}ce.prototype.h=function(){this.defaultPrevented=!0};var fe=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var i=!1,a=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const l=()=>{};u.addEventListener("test",l,a),u.removeEventListener("test",l,a)}catch{}return i}();function Q(i,a){if(ce.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var l=this.type=i.type,m=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=a,a=i.relatedTarget){if(F){e:{try{N(a.nodeName);var R=!0;break e}catch{}R=!1}R||(a=null)}}else l=="mouseover"?a=i.fromElement:l=="mouseout"&&(a=i.toElement);this.relatedTarget=a,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:Z[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&Q.aa.h.call(this)}}C(Q,ce);var Z={2:"touch",3:"pen",4:"mouse"};Q.prototype.h=function(){Q.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var W="closure_listenable_"+(1e6*Math.random()|0),J=0;function Ce(i,a,l,m,R){this.listener=i,this.proxy=null,this.src=a,this.type=l,this.capture=!!m,this.ha=R,this.key=++J,this.da=this.fa=!1}function ye(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function ve(i){this.src=i,this.g={},this.h=0}ve.prototype.add=function(i,a,l,m,R){var O=i.toString();i=this.g[O],i||(i=this.g[O]=[],this.h++);var j=ke(i,a,m,R);return-1<j?(a=i[j],l||(a.fa=!1)):(a=new Ce(a,this.src,O,!!m,R),a.fa=l,i.push(a)),a};function Pe(i,a){var l=a.type;if(l in i.g){var m=i.g[l],R=Array.prototype.indexOf.call(m,a,void 0),O;(O=0<=R)&&Array.prototype.splice.call(m,R,1),O&&(ye(a),i.g[l].length==0&&(delete i.g[l],i.h--))}}function ke(i,a,l,m){for(var R=0;R<i.length;++R){var O=i[R];if(!O.da&&O.listener==a&&O.capture==!!l&&O.ha==m)return R}return-1}var we="closure_lm_"+(1e6*Math.random()|0),Me={};function ht(i,a,l,m,R){if(Array.isArray(a)){for(var O=0;O<a.length;O++)ht(i,a[O],l,m,R);return null}return l=rn(l),i&&i[W]?i.K(a,l,d(m)?!!m.capture:!1,R):Fe(i,a,l,!1,m,R)}function Fe(i,a,l,m,R,O){if(!a)throw Error("Invalid event type");var j=d(R)?!!R.capture:!!R,me=Ye(i);if(me||(i[we]=me=new ve(i)),l=me.add(a,l,m,j,O),l.proxy)return l;if(m=_e(),l.proxy=m,m.src=i,m.listener=l,i.addEventListener)fe||(R=j),R===void 0&&(R=!1),i.addEventListener(a.toString(),m,R);else if(i.attachEvent)i.attachEvent(rt(a.toString()),m);else if(i.addListener&&i.removeListener)i.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return l}function _e(){function i(l){return a.call(i.src,i.listener,l)}const a=Je;return i}function Te(i,a,l,m,R){if(Array.isArray(a))for(var O=0;O<a.length;O++)Te(i,a[O],l,m,R);else m=d(m)?!!m.capture:!!m,l=rn(l),i&&i[W]?(i=i.i,a=String(a).toString(),a in i.g&&(O=i.g[a],l=ke(O,l,m,R),-1<l&&(ye(O[l]),Array.prototype.splice.call(O,l,1),O.length==0&&(delete i.g[a],i.h--)))):i&&(i=Ye(i))&&(a=i.g[a.toString()],i=-1,a&&(i=ke(a,l,m,R)),(l=-1<i?a[i]:null)&&Xe(l))}function Xe(i){if(typeof i!="number"&&i&&!i.da){var a=i.src;if(a&&a[W])Pe(a.i,i);else{var l=i.type,m=i.proxy;a.removeEventListener?a.removeEventListener(l,m,i.capture):a.detachEvent?a.detachEvent(rt(l),m):a.addListener&&a.removeListener&&a.removeListener(m),(l=Ye(a))?(Pe(l,i),l.h==0&&(l.src=null,a[we]=null)):ye(i)}}}function rt(i){return i in Me?Me[i]:Me[i]="on"+i}function Je(i,a){if(i.da)i=!0;else{a=new Q(a,this);var l=i.listener,m=i.ha||i.src;i.fa&&Xe(i),i=l.call(m,a)}return i}function Ye(i){return i=i[we],i instanceof ve?i:null}var Qe="__closure_events_fn_"+(1e9*Math.random()>>>0);function rn(i){return typeof i=="function"?i:(i[Qe]||(i[Qe]=function(a){return i.handleEvent(a)}),i[Qe])}function Ie(){ne.call(this),this.i=new ve(this),this.M=this,this.F=null}C(Ie,ne),Ie.prototype[W]=!0,Ie.prototype.removeEventListener=function(i,a,l,m){Te(this,i,a,l,m)};function De(i,a){var l,m=i.F;if(m)for(l=[];m;m=m.F)l.push(m);if(i=i.M,m=a.type||a,typeof a=="string")a=new ce(a,i);else if(a instanceof ce)a.target=a.target||i;else{var R=a;a=new ce(m,i),_(a,R)}if(R=!0,l)for(var O=l.length-1;0<=O;O--){var j=a.g=l[O];R=sn(j,m,!0,a)&&R}if(j=a.g=i,R=sn(j,m,!0,a)&&R,R=sn(j,m,!1,a)&&R,l)for(O=0;O<l.length;O++)j=a.g=l[O],R=sn(j,m,!1,a)&&R}Ie.prototype.N=function(){if(Ie.aa.N.call(this),this.i){var i=this.i,a;for(a in i.g){for(var l=i.g[a],m=0;m<l.length;m++)ye(l[m]);delete i.g[a],i.h--}}this.F=null},Ie.prototype.K=function(i,a,l,m){return this.i.add(String(i),a,!1,l,m)},Ie.prototype.L=function(i,a,l,m){return this.i.add(String(i),a,!0,l,m)};function sn(i,a,l,m){if(a=i.i.g[String(a)],!a)return!0;a=a.concat();for(var R=!0,O=0;O<a.length;++O){var j=a[O];if(j&&!j.da&&j.capture==l){var me=j.listener,Le=j.ha||j.src;j.fa&&Pe(i.i,j),R=me.call(Le,m)!==!1&&R}}return R&&!m.defaultPrevented}function Er(i,a,l){if(typeof i=="function")l&&(i=E(i,l));else if(i&&typeof i.handleEvent=="function")i=E(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:u.setTimeout(i,a||0)}function Cr(i){i.g=Er(()=>{i.g=null,i.i&&(i.i=!1,Cr(i))},i.l);const a=i.h;i.h=null,i.m.apply(null,a)}class _i extends ne{constructor(a,l){super(),this.m=a,this.l=l,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:Cr(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Pn(i){ne.call(this),this.h=i,this.g={}}C(Pn,ne);var xr=[];function qn(i){U(i.g,function(a,l){this.g.hasOwnProperty(l)&&Xe(a)},i),i.g={}}Pn.prototype.N=function(){Pn.aa.N.call(this),qn(this)},Pn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var be=u.JSON.stringify,Ze=u.JSON.parse,on=class{stringify(i){return u.JSON.stringify(i,void 0)}parse(i){return u.JSON.parse(i,void 0)}};function Pt(){}Pt.prototype.h=null;function Zs(i){return i.h||(i.h=i.i())}function Jl(){}var Kn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function bi(){ce.call(this,"d")}C(bi,ce);function Pi(){ce.call(this,"c")}C(Pi,ce);var Tn={},eo=null;function Ti(){return eo=eo||new Ie}Tn.La="serverreachability";function to(i){ce.call(this,Tn.La,i)}C(to,ce);function Xn(i){const a=Ti();De(a,new to(a))}Tn.STAT_EVENT="statevent";function no(i,a){ce.call(this,Tn.STAT_EVENT,i),this.stat=a}C(no,ce);function Be(i){const a=Ti();De(a,new no(a,i))}Tn.Ma="timingevent";function ro(i,a){ce.call(this,Tn.Ma,i),this.size=a}C(ro,ce);function Jn(i,a){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){i()},a)}function Yn(){this.g=!0}Yn.prototype.xa=function(){this.g=!1};function Yl(i,a,l,m,R,O){i.info(function(){if(i.g)if(O)for(var j="",me=O.split("&"),Le=0;Le<me.length;Le++){var ue=me[Le].split("=");if(1<ue.length){var Ne=ue[0];ue=ue[1];var Ue=Ne.split("_");j=2<=Ue.length&&Ue[1]=="type"?j+(Ne+"="+ue+"&"):j+(Ne+"=redacted&")}}else j=null;else j=O;return"XMLHTTP REQ ("+m+") [attempt "+R+"]: "+a+`
`+l+`
`+j})}function Ql(i,a,l,m,R,O,j){i.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+R+"]: "+a+`
`+l+`
`+O+" "+j})}function In(i,a,l,m){i.info(function(){return"XMLHTTP TEXT ("+a+"): "+eu(i,l)+(m?" "+m:"")})}function Zl(i,a){i.info(function(){return"TIMEOUT: "+a})}Yn.prototype.info=function(){};function eu(i,a){if(!i.g)return a;if(!a)return null;try{var l=JSON.parse(a);if(l){for(i=0;i<l.length;i++)if(Array.isArray(l[i])){var m=l[i];if(!(2>m.length)){var R=m[1];if(Array.isArray(R)&&!(1>R.length)){var O=R[0];if(O!="noop"&&O!="stop"&&O!="close")for(var j=1;j<R.length;j++)R[j]=""}}}}return be(l)}catch{return a}}var Ii={NO_ERROR:0,TIMEOUT:8},tu={},Ai;function Rr(){}C(Rr,Pt),Rr.prototype.g=function(){return new XMLHttpRequest},Rr.prototype.i=function(){return{}},Ai=new Rr;function Bt(i,a,l,m){this.j=i,this.i=a,this.l=l,this.R=m||1,this.U=new Pn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new io}function io(){this.i=null,this.g="",this.h=!1}var so={},Ei={};function Ci(i,a,l){i.L=1,i.v=Or(Tt(a)),i.m=l,i.P=!0,oo(i,null)}function oo(i,a){i.F=Date.now(),kr(i),i.A=Tt(i.v);var l=i.A,m=i.R;Array.isArray(m)||(m=[String(m)]),_o(l.i,"t",m),i.C=0,l=i.j.J,i.h=new io,i.g=jo(i.j,l?a:null,!i.m),0<i.O&&(i.M=new _i(E(i.Y,i,i.g),i.O)),a=i.U,l=i.g,m=i.ca;var R="readystatechange";Array.isArray(R)||(R&&(xr[0]=R.toString()),R=xr);for(var O=0;O<R.length;O++){var j=ht(l,R[O],m||a.handleEvent,!1,a.h||a);if(!j)break;a.g[j.key]=j}a=i.H?p(i.H):{},i.m?(i.u||(i.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,a)):(i.u="GET",i.g.ea(i.A,i.u,null,a)),Xn(),Yl(i.i,i.u,i.A,i.l,i.R,i.m)}Bt.prototype.ca=function(i){i=i.target;const a=this.M;a&&It(i)==3?a.j():this.Y(i)},Bt.prototype.Y=function(i){try{if(i==this.g)e:{const Ue=It(this.g);var a=this.g.Ba();const Cn=this.g.Z();if(!(3>Ue)&&(Ue!=3||this.g&&(this.h.h||this.g.oa()||Co(this.g)))){this.J||Ue!=4||a==7||(a==8||0>=Cn?Xn(3):Xn(2)),xi(this);var l=this.g.Z();this.X=l;t:if(ao(this)){var m=Co(this.g);i="";var R=m.length,O=It(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){an(this),Qn(this);var j="";break t}this.h.i=new u.TextDecoder}for(a=0;a<R;a++)this.h.h=!0,i+=this.h.i.decode(m[a],{stream:!(O&&a==R-1)});m.length=0,this.h.g+=i,this.C=0,j=this.h.g}else j=this.g.oa();if(this.o=l==200,Ql(this.i,this.u,this.A,this.l,this.R,Ue,l),this.o){if(this.T&&!this.K){t:{if(this.g){var me,Le=this.g;if((me=Le.g?Le.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!k(me)){var ue=me;break t}}ue=null}if(l=ue)In(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ri(this,l);else{this.o=!1,this.s=3,Be(12),an(this),Qn(this);break e}}if(this.P){l=!0;let it;for(;!this.J&&this.C<j.length;)if(it=nu(this,j),it==Ei){Ue==4&&(this.s=4,Be(14),l=!1),In(this.i,this.l,null,"[Incomplete Response]");break}else if(it==so){this.s=4,Be(15),In(this.i,this.l,j,"[Invalid Chunk]"),l=!1;break}else In(this.i,this.l,it,null),Ri(this,it);if(ao(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ue!=4||j.length!=0||this.h.h||(this.s=1,Be(16),l=!1),this.o=this.o&&l,!l)In(this.i,this.l,j,"[Invalid Chunked Response]"),an(this),Qn(this);else if(0<j.length&&!this.W){this.W=!0;var Ne=this.j;Ne.g==this&&Ne.ba&&!Ne.M&&(Ne.j.info("Great, no buffering proxy detected. Bytes received: "+j.length),Fi(Ne),Ne.M=!0,Be(11))}}else In(this.i,this.l,j,null),Ri(this,j);Ue==4&&an(this),this.o&&!this.J&&(Ue==4?Lo(this.j,this):(this.o=!1,kr(this)))}else wu(this.g),l==400&&0<j.indexOf("Unknown SID")?(this.s=3,Be(12)):(this.s=0,Be(13)),an(this),Qn(this)}}}catch{}finally{}};function ao(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function nu(i,a){var l=i.C,m=a.indexOf(`
`,l);return m==-1?Ei:(l=Number(a.substring(l,m)),isNaN(l)?so:(m+=1,m+l>a.length?Ei:(a=a.slice(m,m+l),i.C=m+l,a)))}Bt.prototype.cancel=function(){this.J=!0,an(this)};function kr(i){i.S=Date.now()+i.I,co(i,i.I)}function co(i,a){if(i.B!=null)throw Error("WatchDog timer not null");i.B=Jn(E(i.ba,i),a)}function xi(i){i.B&&(u.clearTimeout(i.B),i.B=null)}Bt.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(Zl(this.i,this.A),this.L!=2&&(Xn(),Be(17)),an(this),this.s=2,Qn(this)):co(this,this.S-i)};function Qn(i){i.j.G==0||i.J||Lo(i.j,i)}function an(i){xi(i);var a=i.M;a&&typeof a.ma=="function"&&a.ma(),i.M=null,qn(i.U),i.g&&(a=i.g,i.g=null,a.abort(),a.ma())}function Ri(i,a){try{var l=i.j;if(l.G!=0&&(l.g==i||ki(l.h,i))){if(!i.K&&ki(l.h,i)&&l.G==3){try{var m=l.Da.g.parse(a)}catch{m=null}if(Array.isArray(m)&&m.length==3){var R=m;if(R[0]==0){e:if(!l.u){if(l.g)if(l.g.F+3e3<i.F)Vr(l),Ur(l);else break e;Li(l),Be(18)}}else l.za=R[1],0<l.za-l.T&&37500>R[2]&&l.F&&l.v==0&&!l.C&&(l.C=Jn(E(l.Za,l),6e3));if(1>=ho(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else ln(l,11)}else if((i.K||l.g==i)&&Vr(l),!k(a))for(R=l.Da.g.parse(a),a=0;a<R.length;a++){let ue=R[a];if(l.T=ue[0],ue=ue[1],l.G==2)if(ue[0]=="c"){l.K=ue[1],l.ia=ue[2];const Ne=ue[3];Ne!=null&&(l.la=Ne,l.j.info("VER="+l.la));const Ue=ue[4];Ue!=null&&(l.Aa=Ue,l.j.info("SVER="+l.Aa));const Cn=ue[5];Cn!=null&&typeof Cn=="number"&&0<Cn&&(m=1.5*Cn,l.L=m,l.j.info("backChannelRequestTimeoutMs_="+m)),m=l;const it=i.g;if(it){const Br=it.g?it.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Br){var O=m.h;O.g||Br.indexOf("spdy")==-1&&Br.indexOf("quic")==-1&&Br.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(Mi(O,O.h),O.h=null))}if(m.D){const Ni=it.g?it.g.getResponseHeader("X-HTTP-Session-Id"):null;Ni&&(m.ya=Ni,pe(m.I,m.D,Ni))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-i.F,l.j.info("Handshake RTT: "+l.R+"ms")),m=l;var j=i;if(m.qa=Uo(m,m.J?m.ia:null,m.W),j.K){fo(m.h,j);var me=j,Le=m.L;Le&&(me.I=Le),me.B&&(xi(me),kr(me)),m.g=j}else Do(m);0<l.i.length&&jr(l)}else ue[0]!="stop"&&ue[0]!="close"||ln(l,7);else l.G==3&&(ue[0]=="stop"||ue[0]=="close"?ue[0]=="stop"?ln(l,7):Oi(l):ue[0]!="noop"&&l.l&&l.l.ta(ue),l.v=0)}}Xn(4)}catch{}}var ru=class{constructor(i,a){this.g=i,this.map=a}};function lo(i){this.l=i||10,u.PerformanceNavigationTiming?(i=u.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function uo(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function ho(i){return i.h?1:i.g?i.g.size:0}function ki(i,a){return i.h?i.h==a:i.g?i.g.has(a):!1}function Mi(i,a){i.g?i.g.add(a):i.h=a}function fo(i,a){i.h&&i.h==a?i.h=null:i.g&&i.g.has(a)&&i.g.delete(a)}lo.prototype.cancel=function(){if(this.i=mo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function mo(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let a=i.i;for(const l of i.g.values())a=a.concat(l.D);return a}return I(i.i)}function iu(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(h(i)){for(var a=[],l=i.length,m=0;m<l;m++)a.push(i[m]);return a}a=[],l=0;for(m in i)a[l++]=i[m];return a}function su(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(h(i)||typeof i=="string"){var a=[];i=i.length;for(var l=0;l<i;l++)a.push(l);return a}a=[],l=0;for(const m in i)a[l++]=m;return a}}}function po(i,a){if(i.forEach&&typeof i.forEach=="function")i.forEach(a,void 0);else if(h(i)||typeof i=="string")Array.prototype.forEach.call(i,a,void 0);else for(var l=su(i),m=iu(i),R=m.length,O=0;O<R;O++)a.call(void 0,m[O],l&&l[O],i)}var go=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ou(i,a){if(i){i=i.split("&");for(var l=0;l<i.length;l++){var m=i[l].indexOf("="),R=null;if(0<=m){var O=i[l].substring(0,m);R=i[l].substring(m+1)}else O=i[l];a(O,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function cn(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof cn){this.h=i.h,Mr(this,i.j),this.o=i.o,this.g=i.g,Dr(this,i.s),this.l=i.l;var a=i.i,l=new tr;l.i=a.i,a.g&&(l.g=new Map(a.g),l.h=a.h),vo(this,l),this.m=i.m}else i&&(a=String(i).match(go))?(this.h=!1,Mr(this,a[1]||"",!0),this.o=Zn(a[2]||""),this.g=Zn(a[3]||"",!0),Dr(this,a[4]),this.l=Zn(a[5]||"",!0),vo(this,a[6]||"",!0),this.m=Zn(a[7]||"")):(this.h=!1,this.i=new tr(null,this.h))}cn.prototype.toString=function(){var i=[],a=this.j;a&&i.push(er(a,yo,!0),":");var l=this.g;return(l||a=="file")&&(i.push("//"),(a=this.o)&&i.push(er(a,yo,!0),"@"),i.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&i.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&i.push("/"),i.push(er(l,l.charAt(0)=="/"?lu:cu,!0))),(l=this.i.toString())&&i.push("?",l),(l=this.m)&&i.push("#",er(l,hu)),i.join("")};function Tt(i){return new cn(i)}function Mr(i,a,l){i.j=l?Zn(a,!0):a,i.j&&(i.j=i.j.replace(/:$/,""))}function Dr(i,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);i.s=a}else i.s=null}function vo(i,a,l){a instanceof tr?(i.i=a,du(i.i,i.h)):(l||(a=er(a,uu)),i.i=new tr(a,i.h))}function pe(i,a,l){i.i.set(a,l)}function Or(i){return pe(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function Zn(i,a){return i?a?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function er(i,a,l){return typeof i=="string"?(i=encodeURI(i).replace(a,au),l&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function au(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var yo=/[#\/\?@]/g,cu=/[#\?:]/g,lu=/[#\?]/g,uu=/[#\?@]/g,hu=/#/g;function tr(i,a){this.h=this.g=null,this.i=i||null,this.j=!!a}function zt(i){i.g||(i.g=new Map,i.h=0,i.i&&ou(i.i,function(a,l){i.add(decodeURIComponent(a.replace(/\+/g," ")),l)}))}t=tr.prototype,t.add=function(i,a){zt(this),this.i=null,i=An(this,i);var l=this.g.get(i);return l||this.g.set(i,l=[]),l.push(a),this.h+=1,this};function wo(i,a){zt(i),a=An(i,a),i.g.has(a)&&(i.i=null,i.h-=i.g.get(a).length,i.g.delete(a))}function So(i,a){return zt(i),a=An(i,a),i.g.has(a)}t.forEach=function(i,a){zt(this),this.g.forEach(function(l,m){l.forEach(function(R){i.call(a,R,m,this)},this)},this)},t.na=function(){zt(this);const i=Array.from(this.g.values()),a=Array.from(this.g.keys()),l=[];for(let m=0;m<a.length;m++){const R=i[m];for(let O=0;O<R.length;O++)l.push(a[m])}return l},t.V=function(i){zt(this);let a=[];if(typeof i=="string")So(this,i)&&(a=a.concat(this.g.get(An(this,i))));else{i=Array.from(this.g.values());for(let l=0;l<i.length;l++)a=a.concat(i[l])}return a},t.set=function(i,a){return zt(this),this.i=null,i=An(this,i),So(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[a]),this.h+=1,this},t.get=function(i,a){return i?(i=this.V(i),0<i.length?String(i[0]):a):a};function _o(i,a,l){wo(i,a),0<l.length&&(i.i=null,i.g.set(An(i,a),I(l)),i.h+=l.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],a=Array.from(this.g.keys());for(var l=0;l<a.length;l++){var m=a[l];const O=encodeURIComponent(String(m)),j=this.V(m);for(m=0;m<j.length;m++){var R=O;j[m]!==""&&(R+="="+encodeURIComponent(String(j[m]))),i.push(R)}}return this.i=i.join("&")};function An(i,a){return a=String(a),i.j&&(a=a.toLowerCase()),a}function du(i,a){a&&!i.j&&(zt(i),i.i=null,i.g.forEach(function(l,m){var R=m.toLowerCase();m!=R&&(wo(this,m),_o(this,R,l))},i)),i.j=a}function fu(i,a){const l=new Yn;if(u.Image){const m=new Image;m.onload=A($t,l,"TestLoadImage: loaded",!0,a,m),m.onerror=A($t,l,"TestLoadImage: error",!1,a,m),m.onabort=A($t,l,"TestLoadImage: abort",!1,a,m),m.ontimeout=A($t,l,"TestLoadImage: timeout",!1,a,m),u.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=i}else a(!1)}function mu(i,a){const l=new Yn,m=new AbortController,R=setTimeout(()=>{m.abort(),$t(l,"TestPingServer: timeout",!1,a)},1e4);fetch(i,{signal:m.signal}).then(O=>{clearTimeout(R),O.ok?$t(l,"TestPingServer: ok",!0,a):$t(l,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(R),$t(l,"TestPingServer: error",!1,a)})}function $t(i,a,l,m,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),m(l)}catch{}}function pu(){this.g=new on}function gu(i,a,l){const m=l||"";try{po(i,function(R,O){let j=R;d(R)&&(j=be(R)),a.push(m+O+"="+encodeURIComponent(j))})}catch(R){throw a.push(m+"type="+encodeURIComponent("_badmap")),R}}function Lr(i){this.l=i.Ub||null,this.j=i.eb||!1}C(Lr,Pt),Lr.prototype.g=function(){return new Fr(this.l,this.j)},Lr.prototype.i=function(i){return function(){return i}}({});function Fr(i,a){Ie.call(this),this.D=i,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(Fr,Ie),t=Fr.prototype,t.open=function(i,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=a,this.readyState=1,rr(this)},t.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(a.body=i),(this.D||u).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,nr(this)),this.readyState=0},t.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,rr(this)),this.g&&(this.readyState=3,rr(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;bo(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function bo(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}t.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var a=i.value?i.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!i.done}))&&(this.response=this.responseText+=a)}i.done?nr(this):rr(this),this.readyState==3&&bo(this)}},t.Ra=function(i){this.g&&(this.response=this.responseText=i,nr(this))},t.Qa=function(i){this.g&&(this.response=i,nr(this))},t.ga=function(){this.g&&nr(this)};function nr(i){i.readyState=4,i.l=null,i.j=null,i.v=null,rr(i)}t.setRequestHeader=function(i,a){this.u.append(i,a)},t.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],a=this.h.entries();for(var l=a.next();!l.done;)l=l.value,i.push(l[0]+": "+l[1]),l=a.next();return i.join(`\r
`)};function rr(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(Fr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function Po(i){let a="";return U(i,function(l,m){a+=m,a+=":",a+=l,a+=`\r
`}),a}function Di(i,a,l){e:{for(m in l){var m=!1;break e}m=!0}m||(l=Po(l),typeof i=="string"?l!=null&&encodeURIComponent(String(l)):pe(i,a,l))}function Ae(i){Ie.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(Ae,Ie);var vu=/^https?$/i,yu=["POST","PUT"];t=Ae.prototype,t.Ha=function(i){this.J=i},t.ea=function(i,a,l,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);a=a?a.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ai.g(),this.v=this.o?Zs(this.o):Zs(Ai),this.g.onreadystatechange=E(this.Ea,this);try{this.B=!0,this.g.open(a,String(i),!0),this.B=!1}catch(O){To(this,O);return}if(i=l||"",l=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var R in m)l.set(R,m[R]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const O of m.keys())l.set(O,m.get(O));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(l.keys()).find(O=>O.toLowerCase()=="content-type"),R=u.FormData&&i instanceof u.FormData,!(0<=Array.prototype.indexOf.call(yu,a,void 0))||m||R||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,j]of l)this.g.setRequestHeader(O,j);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Eo(this),this.u=!0,this.g.send(i),this.u=!1}catch(O){To(this,O)}};function To(i,a){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=a,i.m=5,Io(i),Nr(i)}function Io(i){i.A||(i.A=!0,De(i,"complete"),De(i,"error"))}t.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,De(this,"complete"),De(this,"abort"),Nr(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Nr(this,!0)),Ae.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Ao(this):this.bb())},t.bb=function(){Ao(this)};function Ao(i){if(i.h&&typeof c<"u"&&(!i.v[1]||It(i)!=4||i.Z()!=2)){if(i.u&&It(i)==4)Er(i.Ea,0,i);else if(De(i,"readystatechange"),It(i)==4){i.h=!1;try{const j=i.Z();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break e;default:a=!1}var l;if(!(l=a)){var m;if(m=j===0){var R=String(i.D).match(go)[1]||null;!R&&u.self&&u.self.location&&(R=u.self.location.protocol.slice(0,-1)),m=!vu.test(R?R.toLowerCase():"")}l=m}if(l)De(i,"complete"),De(i,"success");else{i.m=6;try{var O=2<It(i)?i.g.statusText:""}catch{O=""}i.l=O+" ["+i.Z()+"]",Io(i)}}finally{Nr(i)}}}}function Nr(i,a){if(i.g){Eo(i);const l=i.g,m=i.v[0]?()=>{}:null;i.g=null,i.v=null,a||De(i,"ready");try{l.onreadystatechange=m}catch{}}}function Eo(i){i.I&&(u.clearTimeout(i.I),i.I=null)}t.isActive=function(){return!!this.g};function It(i){return i.g?i.g.readyState:0}t.Z=function(){try{return 2<It(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(i){if(this.g){var a=this.g.responseText;return i&&a.indexOf(i)==0&&(a=a.substring(i.length)),Ze(a)}};function Co(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function wu(i){const a={};i=(i.g&&2<=It(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<i.length;m++){if(k(i[m]))continue;var l=g(i[m]);const R=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const O=a[R]||[];a[R]=O,O.push(l)}y(a,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ir(i,a,l){return l&&l.internalChannelParams&&l.internalChannelParams[i]||a}function xo(i){this.Aa=0,this.i=[],this.j=new Yn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ir("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ir("baseRetryDelayMs",5e3,i),this.cb=ir("retryDelaySeedMs",1e4,i),this.Wa=ir("forwardChannelMaxRetries",2,i),this.wa=ir("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new lo(i&&i.concurrentRequestLimit),this.Da=new pu,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=xo.prototype,t.la=8,t.G=1,t.connect=function(i,a,l,m){Be(0),this.W=i,this.H=a||{},l&&m!==void 0&&(this.H.OSID=l,this.H.OAID=m),this.F=this.X,this.I=Uo(this,null,this.W),jr(this)};function Oi(i){if(Ro(i),i.G==3){var a=i.U++,l=Tt(i.I);if(pe(l,"SID",i.K),pe(l,"RID",a),pe(l,"TYPE","terminate"),sr(i,l),a=new Bt(i,i.j,a),a.L=2,a.v=Or(Tt(l)),l=!1,u.navigator&&u.navigator.sendBeacon)try{l=u.navigator.sendBeacon(a.v.toString(),"")}catch{}!l&&u.Image&&(new Image().src=a.v,l=!0),l||(a.g=jo(a.j,null),a.g.ea(a.v)),a.F=Date.now(),kr(a)}No(i)}function Ur(i){i.g&&(Fi(i),i.g.cancel(),i.g=null)}function Ro(i){Ur(i),i.u&&(u.clearTimeout(i.u),i.u=null),Vr(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&u.clearTimeout(i.s),i.s=null)}function jr(i){if(!uo(i.h)&&!i.s){i.s=!0;var a=i.Ga;$||he(),X||($(),X=!0),ee.add(a,i),i.B=0}}function Su(i,a){return ho(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=a.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=Jn(E(i.Ga,i,a),Fo(i,i.B)),i.B++,!0)}t.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const R=new Bt(this,this.j,i);let O=this.o;if(this.S&&(O?(O=p(O),_(O,this.S)):O=this.S),this.m!==null||this.O||(R.H=O,O=null),this.P)e:{for(var a=0,l=0;l<this.i.length;l++){t:{var m=this.i[l];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(a+=m,4096<a){a=l;break e}if(a===4096||l===this.i.length-1){a=l+1;break e}}a=1e3}else a=1e3;a=Mo(this,R,a),l=Tt(this.I),pe(l,"RID",i),pe(l,"CVER",22),this.D&&pe(l,"X-HTTP-Session-Id",this.D),sr(this,l),O&&(this.O?a="headers="+encodeURIComponent(String(Po(O)))+"&"+a:this.m&&Di(l,this.m,O)),Mi(this.h,R),this.Ua&&pe(l,"TYPE","init"),this.P?(pe(l,"$req",a),pe(l,"SID","null"),R.T=!0,Ci(R,l,null)):Ci(R,l,a),this.G=2}}else this.G==3&&(i?ko(this,i):this.i.length==0||uo(this.h)||ko(this))};function ko(i,a){var l;a?l=a.l:l=i.U++;const m=Tt(i.I);pe(m,"SID",i.K),pe(m,"RID",l),pe(m,"AID",i.T),sr(i,m),i.m&&i.o&&Di(m,i.m,i.o),l=new Bt(i,i.j,l,i.B+1),i.m===null&&(l.H=i.o),a&&(i.i=a.D.concat(i.i)),a=Mo(i,l,1e3),l.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),Mi(i.h,l),Ci(l,m,a)}function sr(i,a){i.H&&U(i.H,function(l,m){pe(a,m,l)}),i.l&&po({},function(l,m){pe(a,m,l)})}function Mo(i,a,l){l=Math.min(i.i.length,l);var m=i.l?E(i.l.Na,i.l,i):null;e:{var R=i.i;let O=-1;for(;;){const j=["count="+l];O==-1?0<l?(O=R[0].g,j.push("ofs="+O)):O=0:j.push("ofs="+O);let me=!0;for(let Le=0;Le<l;Le++){let ue=R[Le].g;const Ne=R[Le].map;if(ue-=O,0>ue)O=Math.max(0,R[Le].g-100),me=!1;else try{gu(Ne,j,"req"+ue+"_")}catch{m&&m(Ne)}}if(me){m=j.join("&");break e}}}return i=i.i.splice(0,l),a.D=i,m}function Do(i){if(!i.g&&!i.u){i.Y=1;var a=i.Fa;$||he(),X||($(),X=!0),ee.add(a,i),i.v=0}}function Li(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=Jn(E(i.Fa,i),Fo(i,i.v)),i.v++,!0)}t.Fa=function(){if(this.u=null,Oo(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=Jn(E(this.ab,this),i)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Be(10),Ur(this),Oo(this))};function Fi(i){i.A!=null&&(u.clearTimeout(i.A),i.A=null)}function Oo(i){i.g=new Bt(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var a=Tt(i.qa);pe(a,"RID","rpc"),pe(a,"SID",i.K),pe(a,"AID",i.T),pe(a,"CI",i.F?"0":"1"),!i.F&&i.ja&&pe(a,"TO",i.ja),pe(a,"TYPE","xmlhttp"),sr(i,a),i.m&&i.o&&Di(a,i.m,i.o),i.L&&(i.g.I=i.L);var l=i.g;i=i.ia,l.L=1,l.v=Or(Tt(a)),l.m=null,l.P=!0,oo(l,i)}t.Za=function(){this.C!=null&&(this.C=null,Ur(this),Li(this),Be(19))};function Vr(i){i.C!=null&&(u.clearTimeout(i.C),i.C=null)}function Lo(i,a){var l=null;if(i.g==a){Vr(i),Fi(i),i.g=null;var m=2}else if(ki(i.h,a))l=a.D,fo(i.h,a),m=1;else return;if(i.G!=0){if(a.o)if(m==1){l=a.m?a.m.length:0,a=Date.now()-a.F;var R=i.B;m=Ti(),De(m,new ro(m,l)),jr(i)}else Do(i);else if(R=a.s,R==3||R==0&&0<a.X||!(m==1&&Su(i,a)||m==2&&Li(i)))switch(l&&0<l.length&&(a=i.h,a.i=a.i.concat(l)),R){case 1:ln(i,5);break;case 4:ln(i,10);break;case 3:ln(i,6);break;default:ln(i,2)}}}function Fo(i,a){let l=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(l*=2),l*a}function ln(i,a){if(i.j.info("Error code "+a),a==2){var l=E(i.fb,i),m=i.Xa;const R=!m;m=new cn(m||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||Mr(m,"https"),Or(m),R?fu(m.toString(),l):mu(m.toString(),l)}else Be(2);i.G=0,i.l&&i.l.sa(a),No(i),Ro(i)}t.fb=function(i){i?(this.j.info("Successfully pinged google.com"),Be(2)):(this.j.info("Failed to ping google.com"),Be(1))};function No(i){if(i.G=0,i.ka=[],i.l){const a=mo(i.h);(a.length!=0||i.i.length!=0)&&(x(i.ka,a),x(i.ka,i.i),i.h.i.length=0,I(i.i),i.i.length=0),i.l.ra()}}function Uo(i,a,l){var m=l instanceof cn?Tt(l):new cn(l);if(m.g!="")a&&(m.g=a+"."+m.g),Dr(m,m.s);else{var R=u.location;m=R.protocol,a=a?a+"."+R.hostname:R.hostname,R=+R.port;var O=new cn(null);m&&Mr(O,m),a&&(O.g=a),R&&Dr(O,R),l&&(O.l=l),m=O}return l=i.D,a=i.ya,l&&a&&pe(m,l,a),pe(m,"VER",i.la),sr(i,m),m}function jo(i,a,l){if(a&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=i.Ca&&!i.pa?new Ae(new Lr({eb:l})):new Ae(i.pa),a.Ha(i.J),a}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Vo(){}t=Vo.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function et(i,a){Ie.call(this),this.g=new xo(a),this.l=i,this.h=a&&a.messageUrlParams||null,i=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(i?i["X-WebChannel-Content-Type"]=a.messageContentType:i={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(i?i["X-WebChannel-Client-Profile"]=a.va:i={"X-WebChannel-Client-Profile":a.va}),this.g.S=i,(i=a&&a.Sb)&&!k(i)&&(this.g.m=i),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!k(a)&&(this.g.D=a,i=this.h,i!==null&&a in i&&(i=this.h,a in i&&delete i[a])),this.j=new En(this)}C(et,Ie),et.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},et.prototype.close=function(){Oi(this.g)},et.prototype.o=function(i){var a=this.g;if(typeof i=="string"){var l={};l.__data__=i,i=l}else this.u&&(l={},l.__data__=be(i),i=l);a.i.push(new ru(a.Ya++,i)),a.G==3&&jr(a)},et.prototype.N=function(){this.g.l=null,delete this.j,Oi(this.g),delete this.g,et.aa.N.call(this)};function Bo(i){bi.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var a=i.__sm__;if(a){e:{for(const l in a){i=l;break e}i=void 0}(this.i=i)&&(i=this.i,a=a!==null&&i in a?a[i]:void 0),this.data=a}else this.data=i}C(Bo,bi);function zo(){Pi.call(this),this.status=1}C(zo,Pi);function En(i){this.g=i}C(En,Vo),En.prototype.ua=function(){De(this.g,"a")},En.prototype.ta=function(i){De(this.g,new Bo(i))},En.prototype.sa=function(i){De(this.g,new zo)},En.prototype.ra=function(){De(this.g,"b")},et.prototype.send=et.prototype.o,et.prototype.open=et.prototype.m,et.prototype.close=et.prototype.close,Ii.NO_ERROR=0,Ii.TIMEOUT=8,Ii.HTTP_ERROR=6,tu.COMPLETE="complete",Jl.EventType=Kn,Kn.OPEN="a",Kn.CLOSE="b",Kn.ERROR="c",Kn.MESSAGE="d",Ie.prototype.listen=Ie.prototype.K,Ae.prototype.listenOnce=Ae.prototype.L,Ae.prototype.getLastError=Ae.prototype.Ka,Ae.prototype.getLastErrorCode=Ae.prototype.Ba,Ae.prototype.getStatus=Ae.prototype.Z,Ae.prototype.getResponseJson=Ae.prototype.Oa,Ae.prototype.getResponseText=Ae.prototype.oa,Ae.prototype.send=Ae.prototype.ea,Ae.prototype.setWithCredentials=Ae.prototype.Ha}).apply(typeof Gr<"u"?Gr:typeof self<"u"?self:typeof window<"u"?window:{});const Ta="@firebase/firestore",Ia="4.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ze.UNAUTHENTICATED=new ze(null),ze.GOOGLE_CREDENTIALS=new ze("google-credentials-uid"),ze.FIRST_PARTY=new ze("first-party-uid"),ze.MOCK_USER=new ze("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let br="12.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn=new gi("@firebase/firestore");function ct(t,...e){if(Vn.logLevel<=de.DEBUG){const n=e.map(js);Vn.debug(`Firestore (${br}): ${t}`,...n)}}function hl(t,...e){if(Vn.logLevel<=de.ERROR){const n=e.map(js);Vn.error(`Firestore (${br}): ${t}`,...n)}}function Fg(t,...e){if(Vn.logLevel<=de.WARN){const n=e.map(js);Vn.warn(`Firestore (${br}): ${t}`,...n)}}function js(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vr(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,dl(t,r,n)}function dl(t,e,n){let r=`FIRESTORE (${br}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw hl(r),new Error(r)}function lr(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||dl(e,s,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const se={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class oe extends _t{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ng{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ze.UNAUTHENTICATED))}shutdown(){}}class Ug{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class jg{constructor(e){this.t=e,this.currentUser=ze.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){lr(this.o===void 0,42304);let r=this.i;const s=h=>this.i!==r?(r=this.i,n(h)):Promise.resolve();let o=new ur;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new ur,e.enqueueRetryable(()=>s(this.currentUser))};const c=()=>{const h=o;e.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},u=h=>{ct("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit(h=>u(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?u(h):(ct("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new ur)}},0),c()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ct("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(lr(typeof r.accessToken=="string",31837,{l:r}),new fl(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return lr(e===null||typeof e=="string",2055,{h:e}),new ze(e)}}class Vg{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=ze.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Bg{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new Vg(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(ze.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Aa{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class zg{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,ot(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){lr(this.o===void 0,3512);const r=o=>{o.error!=null&&ct("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const c=o.token!==this.m;return this.m=o.token,ct("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const s=o=>{ct("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?s(o):ct("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Aa(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(lr(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Aa(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $g(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=$g(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<n&&(r+=e.charAt(s[o]%62))}return r}}function Zt(t,e){return t<e?-1:t>e?1:0}function Wg(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),o=e.charAt(r);if(s!==o)return qi(s)===qi(o)?Zt(s,o):qi(s)?1:-1}return Zt(t.length,e.length)}const Hg=55296,qg=57343;function qi(t){const e=t.charCodeAt(0);return e>=Hg&&e<=qg}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ea="__name__";class mt{constructor(e,n,r){n===void 0?n=0:n>e.length&&vr(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&vr(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return mt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof mt?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const o=mt.compareSegments(e.get(s),n.get(s));if(o!==0)return o}return Zt(e.length,n.length)}static compareSegments(e,n){const r=mt.isNumericId(e),s=mt.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?mt.extractNumericId(e).compare(mt.extractNumericId(n)):Wg(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Us.fromString(e.substring(4,e.length-2))}}class st extends mt{construct(e,n,r){return new st(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new oe(se.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new st(n)}static emptyPath(){return new st([])}}const Kg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class dn extends mt{construct(e,n,r){return new dn(e,n,r)}static isValidIdentifier(e){return Kg.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),dn.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ea}static keyField(){return new dn([Ea])}static fromServerFormat(e){const n=[];let r="",s=0;const o=()=>{if(r.length===0)throw new oe(se.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let c=!1;for(;s<e.length;){const u=e[s];if(u==="\\"){if(s+1===e.length)throw new oe(se.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const h=e[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new oe(se.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=h,s+=2}else u==="`"?(c=!c,s++):u!=="."||c?(r+=u,s++):(o(),s++)}if(o(),c)throw new oe(se.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new dn(n)}static emptyPath(){return new dn([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e){this.path=e}static fromPath(e){return new pn(st.fromString(e))}static fromName(e){return new pn(st.fromString(e).popFirst(5))}static empty(){return new pn(st.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&st.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return st.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new pn(new st(e.slice()))}}function Xg(t,e,n,r){if(e===!0&&r===!0)throw new oe(se.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Jg(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Yg(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":vr(12329,{type:typeof t})}function Qg(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new oe(se.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Yg(t);throw new oe(se.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(t,e){const n={typeString:t};return e&&(n.value=e),n}function Pr(t,e){if(!Jg(t))throw new oe(se.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,o="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const c=t[r];if(s&&typeof c!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(o!==void 0&&c!==o.value){n=`Expected '${r}' field to equal '${o.value}'`;break}}if(n)throw new oe(se.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ca=-62135596800,xa=1e6;class pt{static now(){return pt.fromMillis(Date.now())}static fromDate(e){return pt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*xa);return new pt(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new oe(se.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new oe(se.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Ca)throw new oe(se.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new oe(se.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/xa}_compareTo(e){return this.seconds===e.seconds?Zt(this.nanoseconds,e.nanoseconds):Zt(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:pt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Pr(e,pt._jsonSchema))return new pt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Ca;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}pt._jsonSchemaVersion="firestore/timestamp/1.0",pt._jsonSchema={type:Ee("string",pt._jsonSchemaVersion),seconds:Ee("number"),nanoseconds:Ee("number")};function Zg(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new e0("Invalid base64 string: "+o):o}}(e);return new Sn(n)}static fromUint8Array(e){const n=function(s){let o="";for(let c=0;c<s.length;++c)o+=String.fromCharCode(s[c]);return o}(e);return new Sn(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Zt(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Sn.EMPTY_BYTE_STRING=new Sn("");const ds="(default)";class si{constructor(e,n){this.projectId=e,this.database=n||ds}static empty(){return new si("","")}get isDefaultDatabase(){return this.database===ds}isEqual(e){return e instanceof si&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0{constructor(e,n=null,r=[],s=[],o=null,c="F",u=null,h=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=c,this.startAt=u,this.endAt=h,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function n0(t){return new t0(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ra,ie;(ie=Ra||(Ra={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Us([4294967295,4294967295],0);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r0=41943040;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i0=1048576;function Ki(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{constructor(e,n,r=1e3,s=1.5,o=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=o,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&ct("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,n,r,s,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new ur,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,o){const c=Date.now()+r,u=new Vs(e,n,c,s,o);return u.start(r),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new oe(se.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var ka,Ma;(Ma=ka||(ka={})).Ma="default",Ma.Cache="cache";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o0(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Da=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ml="firestore.googleapis.com",Oa=!0;class La{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new oe(se.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=ml,this.ssl=Oa}else this.host=e.host,this.ssl=e.ssl??Oa;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=r0;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<i0)throw new oe(se.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Xg("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=o0(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new oe(se.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new oe(se.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new oe(se.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class pl{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new La({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new oe(se.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new oe(se.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new La(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Ng;switch(r.type){case"firstParty":return new Bg(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new oe(se.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Da.get(n);r&&(ct("ComponentProvider","Removing Datastore"),Da.delete(n),r.terminate())}(this),Promise.resolve()}}function a0(t,e,n,r={}){var d;t=Qg(t,pl);const s=zn(e),o=t._getSettings(),c={...o,emulatorOptions:t._getEmulatorOptions()},u=`${e}:${n}`;s&&(Cs(`https://${u}`),xs("Firestore",!0)),o.host!==ml&&o.host!==u&&Fg("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h={...o,host:u,ssl:s,emulatorOptions:r};if(!wn(h,c)&&(t._setSettings(h),r.mockUserToken)){let v,T;if(typeof r.mockUserToken=="string")v=r.mockUserToken,T=ze.MOCK_USER;else{v=Qf(r.mockUserToken,(d=t._app)==null?void 0:d.options.projectId);const E=r.mockUserToken.sub||r.mockUserToken.user_id;if(!E)throw new oe(se.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new ze(E)}t._authCredentials=new Ug(new fl(v,T))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Bs(this.firestore,e,this._query)}}class vt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new zs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new vt(this.firestore,e,this._key)}toJSON(){return{type:vt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Pr(n,vt._jsonSchema))return new vt(e,r||null,new pn(st.fromString(n.referencePath)))}}vt._jsonSchemaVersion="firestore/documentReference/1.0",vt._jsonSchema={type:Ee("string",vt._jsonSchemaVersion),referencePath:Ee("string")};class zs extends Bs{constructor(e,n,r){super(e,n,n0(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new vt(this.firestore,null,new pn(e))}withConverter(e){return new zs(this.firestore,e,this._path)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fa="AsyncQueue";class Na{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new s0(this,"async_queue_retry"),this._c=()=>{const r=Ki();r&&ct(Fa,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Ki();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Ki();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new ur;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Zg(e))throw e;ct(Fa,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,hl("INTERNAL UNHANDLED ERROR: ",Ua(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=Vs.createAndSchedule(this,e,n,r,o=>this.hc(o));return this.tc.push(s),s}uc(){this.nc&&vr(47125,{Pc:Ua(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Ua(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class c0 extends pl{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Na,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Na(e),this._firestoreClient=void 0,await e}}}function l0(t,e){const n=typeof t=="object"?t:vi(),r=typeof t=="string"?t:ds,s=Gn(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=$c("firestore");o&&a0(s,...o)}return s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Rt(Sn.fromBase64String(e))}catch(n){throw new oe(se.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Rt(Sn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Rt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Pr(e,Rt._jsonSchema))return Rt.fromBase64String(e.bytes)}}Rt._jsonSchemaVersion="firestore/bytes/1.0",Rt._jsonSchema={type:Ee("string",Rt._jsonSchemaVersion),bytes:Ee("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new oe(se.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new dn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new oe(se.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new oe(se.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Zt(this._lat,e._lat)||Zt(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:gn._jsonSchemaVersion}}static fromJSON(e){if(Pr(e,gn._jsonSchema))return new gn(e.latitude,e.longitude)}}gn._jsonSchemaVersion="firestore/geoPoint/1.0",gn._jsonSchema={type:Ee("string",gn._jsonSchemaVersion),latitude:Ee("number"),longitude:Ee("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0}(this._values,e._values)}toJSON(){return{type:vn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Pr(e,vn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new vn(e.vectorValues);throw new oe(se.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}vn._jsonSchemaVersion="firestore/vectorValue/1.0",vn._jsonSchema={type:Ee("string",vn._jsonSchemaVersion),vectorValues:Ee("object")};const u0=new RegExp("[~\\*/\\[\\]]");function h0(t,e,n){if(e.search(u0)>=0)throw ja(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t);try{return new gl(...e.split("."))._internalPath}catch{throw ja(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t)}}function ja(t,e,n,r,s){let o=`Function ${e}() called with invalid data`;o+=". ";let c="";return new oe(se.INVALID_ARGUMENT,o+t+c)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(e,n,r,s,o){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new vt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new d0(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(yl("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class d0 extends vl{data(){return super.data()}}function yl(t,e){return typeof e=="string"?h0(t,e):e instanceof gl?e._internalPath:e._delegate._internalPath}class Wr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Mn extends vl{constructor(e,n,r,s,o,c){super(e,n,r,s,c),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new qr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(yl("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new oe(se.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Mn._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Mn._jsonSchemaVersion="firestore/documentSnapshot/1.0",Mn._jsonSchema={type:Ee("string",Mn._jsonSchemaVersion),bundleSource:Ee("string","DocumentSnapshot"),bundleName:Ee("string"),bundle:Ee("string")};class qr extends Mn{data(e={}){return super.data(e)}}class hr{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Wr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new qr(this._firestore,this._userDataWriter,r.key,r,new Wr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new oe(se.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let c=0;return s._snapshot.docChanges.map(u=>{const h=new qr(s._firestore,s._userDataWriter,u.doc.key,u.doc,new Wr(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);return u.doc,{type:"added",doc:h,oldIndex:-1,newIndex:c++}})}{let c=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(u=>o||u.type!==3).map(u=>{const h=new qr(s._firestore,s._userDataWriter,u.doc.key,u.doc,new Wr(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,v=-1;return u.type!==0&&(d=c.indexOf(u.doc.key),c=c.delete(u.doc.key)),u.type!==1&&(c=c.add(u.doc),v=c.indexOf(u.doc.key)),{type:f0(u.type),doc:h,oldIndex:d,newIndex:v}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new oe(se.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=hr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Gg.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(o=>{o._document!==null&&(n.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),s.push(o.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function f0(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return vr(61501,{type:t})}}hr._jsonSchemaVersion="firestore/querySnapshot/1.0",hr._jsonSchema={type:Ee("string",hr._jsonSchemaVersion),bundleSource:Ee("string","QuerySnapshot"),bundleName:Ee("string"),bundle:Ee("string")};(function(e,n=!0){(function(s){br=s})(Wn),Ut(new St("firestore",(r,{instanceIdentifier:s,options:o})=>{const c=r.getProvider("app").getImmediate(),u=new c0(new jg(r.getProvider("auth-internal")),new zg(c,r.getProvider("app-check-internal")),function(d,v){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new oe(se.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new si(d.options.projectId,v)}(c,s),c);return o={useFetchStreams:n,...o},u._setSettings(o),u},"PUBLIC").setMultipleInstances(!0)),ut(Ta,Ia,e),ut(Ta,Ia,"esm2020")})();function $s(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function wl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const m0=wl,Sl=new $n("auth","Firebase",wl());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oi=new gi("@firebase/auth");function p0(t,...e){oi.logLevel<=de.WARN&&oi.warn(`Auth (${Wn}): ${t}`,...e)}function Kr(t,...e){oi.logLevel<=de.ERROR&&oi.error(`Auth (${Wn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(t,...e){throw Gs(t,...e)}function yt(t,...e){return Gs(t,...e)}function _l(t,e,n){const r=Object.assign(Object.assign({},m0()),{[e]:n});return new $n("auth","Firebase",r).create(e,{appName:t.name})}function yn(t){return _l(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Gs(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Sl.create(t,...e)}function H(t,e,...n){if(!t)throw Gs(e,...n)}function Mt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Kr(e),new Error(e)}function Vt(t,e){t||Mt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fs(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function g0(){return Va()==="http:"||Va()==="https:"}function Va(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(g0()||rm()||"connection"in navigator)?navigator.onLine:!0}function y0(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e,n){this.shortDelay=e,this.longDelay=n,Vt(n>e,"Short delay should be less than long delay!"),this.isMobile=tm()||im()}get(){return v0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ws(t,e){Vt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Mt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Mt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Mt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S0=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],_0=new Tr(3e4,6e4);function Hs(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Hn(t,e,n,r,s={}){return Pl(t,s,async()=>{let o={},c={};r&&(e==="GET"?c=r:o={body:JSON.stringify(r)});const u=_r(Object.assign({key:t.config.apiKey},c)).slice(1),h=await t._getAdditionalHeaders();h["Content-Type"]="application/json",t.languageCode&&(h["X-Firebase-Locale"]=t.languageCode);const d=Object.assign({method:e,headers:h},o);return nm()||(d.referrerPolicy="no-referrer"),t.emulatorConfig&&zn(t.emulatorConfig.host)&&(d.credentials="include"),bl.fetch()(await Tl(t,t.config.apiHost,n,u),d)})}async function Pl(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},w0),e);try{const s=new P0(t),o=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const c=await o.json();if("needConfirmation"in c)throw Hr(t,"account-exists-with-different-credential",c);if(o.ok&&!("errorMessage"in c))return c;{const u=o.ok?c.errorMessage:c.error.message,[h,d]=u.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw Hr(t,"credential-already-in-use",c);if(h==="EMAIL_EXISTS")throw Hr(t,"email-already-in-use",c);if(h==="USER_DISABLED")throw Hr(t,"user-disabled",c);const v=r[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw _l(t,v,d);jt(t,v)}}catch(s){if(s instanceof _t)throw s;jt(t,"network-request-failed",{message:String(s)})}}async function b0(t,e,n,r,s={}){const o=await Hn(t,e,n,r,s);return"mfaPendingCredential"in o&&jt(t,"multi-factor-auth-required",{_serverResponse:o}),o}async function Tl(t,e,n,r){const s=`${e}${n}?${r}`,o=t,c=o.config.emulator?Ws(t.config,s):`${t.config.apiScheme}://${s}`;return S0.includes(n)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(c).toString():c}class P0{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(yt(this.auth,"network-request-failed")),_0.get())})}}function Hr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=yt(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T0(t,e){return Hn(t,"POST","/v1/accounts:delete",e)}async function ai(t,e){return Hn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function I0(t,e=!1){const n=bt(t),r=await n.getIdToken(e),s=qs(r);H(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o=typeof s.firebase=="object"?s.firebase:void 0,c=o==null?void 0:o.sign_in_provider;return{claims:s,token:r,authTime:dr(Xi(s.auth_time)),issuedAtTime:dr(Xi(s.iat)),expirationTime:dr(Xi(s.exp)),signInProvider:c||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Xi(t){return Number(t)*1e3}function qs(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Kr("JWT malformed, contained fewer than 3 sections"),null;try{const s=Vc(n);return s?JSON.parse(s):(Kr("Failed to decode base64 JWT payload"),null)}catch(s){return Kr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Ba(t){const e=qs(t);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof _t&&A0(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function A0({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=dr(this.lastLoginAt),this.creationTime=dr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ci(t){var e;const n=t.auth,r=await t.getIdToken(),s=await yr(t,ai(n,{idToken:r}));H(s==null?void 0:s.users.length,n,"internal-error");const o=s.users[0];t._notifyReloadListener(o);const c=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?Il(o.providerUserInfo):[],u=x0(t.providerData,c),h=t.isAnonymous,d=!(t.email&&o.passwordHash)&&!(u!=null&&u.length),v=h?d:!1,T={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new ms(o.createdAt,o.lastLoginAt),isAnonymous:v};Object.assign(t,T)}async function C0(t){const e=bt(t);await ci(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function x0(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Il(t){return t.map(e=>{var{providerId:n}=e,r=$s(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R0(t,e){const n=await Pl(t,{},async()=>{const r=_r({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:o}=t.config,c=await Tl(t,s,"/v1/token",`key=${o}`),u=await t._getAdditionalHeaders();u["Content-Type"]="application/x-www-form-urlencoded";const h={method:"POST",headers:u,body:r};return t.emulatorConfig&&zn(t.emulatorConfig.host)&&(h.credentials="include"),bl.fetch()(c,h)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function k0(t,e){return Hn(t,"POST","/v2/accounts:revokeToken",Hs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ba(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){H(e.length!==0,"internal-error");const n=Ba(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(H(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:o}=await R0(e,n);this.updateTokensAndExpiration(r,s,Number(o))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:o}=n,c=new Dn;return r&&(H(typeof r=="string","internal-error",{appName:e}),c.refreshToken=r),s&&(H(typeof s=="string","internal-error",{appName:e}),c.accessToken=s),o&&(H(typeof o=="number","internal-error",{appName:e}),c.expirationTime=o),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Dn,this.toJSON())}_performRefresh(){return Mt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(t,e){H(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class lt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,o=$s(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new E0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new ms(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await yr(this,this.stsTokenManager.getToken(this.auth,e));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return I0(this,e)}reload(){return C0(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new lt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ci(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ot(this.auth.app))return Promise.reject(yn(this.auth));const e=await this.getIdToken();return await yr(this,T0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,o,c,u,h,d,v;const T=(r=n.displayName)!==null&&r!==void 0?r:void 0,E=(s=n.email)!==null&&s!==void 0?s:void 0,A=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,C=(c=n.photoURL)!==null&&c!==void 0?c:void 0,I=(u=n.tenantId)!==null&&u!==void 0?u:void 0,x=(h=n._redirectEventId)!==null&&h!==void 0?h:void 0,L=(d=n.createdAt)!==null&&d!==void 0?d:void 0,k=(v=n.lastLoginAt)!==null&&v!==void 0?v:void 0,{uid:D,emailVerified:N,isAnonymous:F,providerData:U,stsTokenManager:y}=n;H(D&&y,e,"internal-error");const p=Dn.fromJSON(this.name,y);H(typeof D=="string",e,"internal-error"),Gt(T,e.name),Gt(E,e.name),H(typeof N=="boolean",e,"internal-error"),H(typeof F=="boolean",e,"internal-error"),Gt(A,e.name),Gt(C,e.name),Gt(I,e.name),Gt(x,e.name),Gt(L,e.name),Gt(k,e.name);const f=new lt({uid:D,auth:e,email:E,emailVerified:N,displayName:T,isAnonymous:F,photoURL:C,phoneNumber:A,tenantId:I,stsTokenManager:p,createdAt:L,lastLoginAt:k});return U&&Array.isArray(U)&&(f.providerData=U.map(_=>Object.assign({},_))),x&&(f._redirectEventId=x),f}static async _fromIdTokenResponse(e,n,r=!1){const s=new Dn;s.updateFromServerResponse(n);const o=new lt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ci(o),o}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];H(s.localId!==void 0,"internal-error");const o=s.providerUserInfo!==void 0?Il(s.providerUserInfo):[],c=!(s.email&&s.passwordHash)&&!(o!=null&&o.length),u=new Dn;u.updateFromIdToken(r);const h=new lt({uid:s.localId,auth:e,stsTokenManager:u,isAnonymous:c}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new ms(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(o!=null&&o.length)};return Object.assign(h,d),h}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const za=new Map;function Dt(t){Vt(t instanceof Function,"Expected a class definition");let e=za.get(t);return e?(Vt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,za.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Al.type="NONE";const $a=Al;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xr(t,e,n){return`firebase:${t}:${e}:${n}`}class On{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:o}=this.auth;this.fullUserKey=Xr(this.userKey,s.apiKey,o),this.fullPersistenceKey=Xr("persistence",s.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await ai(this.auth,{idToken:e}).catch(()=>{});return n?lt._fromGetAccountInfoResponse(this.auth,n,e):null}return lt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new On(Dt($a),e,r);const s=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let o=s[0]||Dt($a);const c=Xr(r,e.config.apiKey,e.name);let u=null;for(const d of n)try{const v=await d._get(c);if(v){let T;if(typeof v=="string"){const E=await ai(e,{idToken:v}).catch(()=>{});if(!E)break;T=await lt._fromGetAccountInfoResponse(e,E,v)}else T=lt._fromJSON(e,v);d!==o&&(u=T),o=d;break}}catch{}const h=s.filter(d=>d._shouldAllowMigration);return!o._shouldAllowMigration||!h.length?new On(o,e,r):(o=h[0],u&&await o._set(c,u.toJSON()),await Promise.all(n.map(async d=>{if(d!==o)try{await d._remove(c)}catch{}})),new On(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ga(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Rl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(El(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ml(e))return"Blackberry";if(Dl(e))return"Webos";if(Cl(e))return"Safari";if((e.includes("chrome/")||xl(e))&&!e.includes("edge/"))return"Chrome";if(kl(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function El(t=Ge()){return/firefox\//i.test(t)}function Cl(t=Ge()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function xl(t=Ge()){return/crios\//i.test(t)}function Rl(t=Ge()){return/iemobile/i.test(t)}function kl(t=Ge()){return/android/i.test(t)}function Ml(t=Ge()){return/blackberry/i.test(t)}function Dl(t=Ge()){return/webos/i.test(t)}function Ks(t=Ge()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function M0(t=Ge()){var e;return Ks(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function D0(){return sm()&&document.documentMode===10}function Ol(t=Ge()){return Ks(t)||kl(t)||Dl(t)||Ml(t)||/windows phone/i.test(t)||Rl(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ll(t,e=[]){let n;switch(t){case"Browser":n=Ga(Ge());break;case"Worker":n=`${Ga(Ge())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Wn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=o=>new Promise((c,u)=>{try{const h=e(o);c(h)}catch(h){u(h)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L0(t,e={}){return Hn(t,"GET","/v2/passwordPolicy",Hs(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F0=6;class N0{constructor(e){var n,r,s,o;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=c.minPasswordLength)!==null&&n!==void 0?n:F0,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,o,c,u;const h={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,h),this.validatePasswordCharacterOptions(e,h),h.isValid&&(h.isValid=(n=h.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),h.isValid&&(h.isValid=(r=h.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),h.isValid&&(h.isValid=(s=h.containsLowercaseLetter)!==null&&s!==void 0?s:!0),h.isValid&&(h.isValid=(o=h.containsUppercaseLetter)!==null&&o!==void 0?o:!0),h.isValid&&(h.isValid=(c=h.containsNumericCharacter)!==null&&c!==void 0?c:!0),h.isValid&&(h.isValid=(u=h.containsNonAlphanumericCharacter)!==null&&u!==void 0?u:!0),h}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Wa(this),this.idTokenSubscription=new Wa(this),this.beforeStateQueue=new O0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Sl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Dt(n)),this._initializationPromise=this.queue(async()=>{var r,s,o;if(!this._deleted&&(this.persistenceManager=await On.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ai(this,{idToken:e}),r=await lt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(ot(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(u,u))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,u=s==null?void 0:s._redirectEventId,h=await this.tryRedirectSignIn(e);(!c||c===u)&&(h!=null&&h.user)&&(s=h.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(c){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ci(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=y0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ot(this.app))return Promise.reject(yn(this));const n=e?bt(e):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ot(this.app)?Promise.reject(yn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ot(this.app)?Promise.reject(yn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Dt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await L0(this),n=new N0(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new $n("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await k0(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Dt(e)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await On.create(this,[Dt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let c=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(u,this,"internal-error"),u.then(()=>{c||o(this.currentUser)}),typeof n=="function"){const h=e.addObserver(n,r,s);return()=>{c=!0,h()}}else{const h=e.addObserver(n);return()=>{c=!0,h()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ll(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(ot(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&p0(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Xs(t){return bt(t)}class Wa{constructor(e){this.auth=e,this.observer=null,this.addObserver=hm(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Js={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function j0(t){Js=t}function V0(t){return Js.loadJS(t)}function B0(){return Js.gapiScript}function z0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $0(t,e){const n=Gn(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),o=n.getOptions();if(wn(o,e??{}))return s;jt(s,"already-initialized")}return n.initialize({options:e})}function G0(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Dt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function W0(t,e,n){const r=Xs(t);H(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,o=Fl(e),{host:c,port:u}=H0(e),h=u===null?"":`:${u}`,d={url:`${o}//${c}${h}/`},v=Object.freeze({host:c,port:u,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){H(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),H(wn(d,r.config.emulator)&&wn(v,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=v,r.settings.appVerificationDisabledForTesting=!0,zn(c)?(Cs(`${o}//${c}${h}`),xs("Auth",!0)):q0()}function Fl(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function H0(t){const e=Fl(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const o=s[1];return{host:o,port:Ha(r.substr(o.length+1))}}else{const[o,c]=r.split(":");return{host:o,port:Ha(c)}}}function Ha(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function q0(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Mt("not implemented")}_getIdTokenResponse(e){return Mt("not implemented")}_linkToIdToken(e,n){return Mt("not implemented")}_getReauthenticationResolver(e){return Mt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ln(t,e){return b0(t,"POST","/v1/accounts:signInWithIdp",Hs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K0="http://localhost";class _n extends Nl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new _n(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):jt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,o=$s(n,["providerId","signInMethod"]);if(!r||!s)return null;const c=new _n(r,s);return c.idToken=o.idToken||void 0,c.accessToken=o.accessToken||void 0,c.secret=o.secret,c.nonce=o.nonce,c.pendingToken=o.pendingToken||null,c}_getIdTokenResponse(e){const n=this.buildRequest();return Ln(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ln(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ln(e,n)}buildRequest(){const e={requestUri:K0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=_r(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir extends Ul{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt extends Ir{constructor(){super("facebook.com")}static credential(e){return _n._fromParams({providerId:Wt.PROVIDER_ID,signInMethod:Wt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wt.credentialFromTaggedObject(e)}static credentialFromError(e){return Wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wt.credential(e.oauthAccessToken)}catch{return null}}}Wt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Wt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht extends Ir{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return _n._fromParams({providerId:Ht.PROVIDER_ID,signInMethod:Ht.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ht.credentialFromTaggedObject(e)}static credentialFromError(e){return Ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ht.credential(n,r)}catch{return null}}}Ht.GOOGLE_SIGN_IN_METHOD="google.com";Ht.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt extends Ir{constructor(){super("github.com")}static credential(e){return _n._fromParams({providerId:qt.PROVIDER_ID,signInMethod:qt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qt.credentialFromTaggedObject(e)}static credentialFromError(e){return qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qt.credential(e.oauthAccessToken)}catch{return null}}}qt.GITHUB_SIGN_IN_METHOD="github.com";qt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt extends Ir{constructor(){super("twitter.com")}static credential(e,n){return _n._fromParams({providerId:Kt.PROVIDER_ID,signInMethod:Kt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Kt.credentialFromTaggedObject(e)}static credentialFromError(e){return Kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Kt.credential(n,r)}catch{return null}}}Kt.TWITTER_SIGN_IN_METHOD="twitter.com";Kt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const o=await lt._fromIdTokenResponse(e,r,s),c=qa(r);return new Bn({user:o,providerId:c,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=qa(r);return new Bn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function qa(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li extends _t{constructor(e,n,r,s){var o;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,li.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new li(e,n,r,s)}}function jl(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?li._fromErrorAndOperation(t,o,e,r):o})}async function X0(t,e,n=!1){const r=await yr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Bn._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J0(t,e,n=!1){const{auth:r}=t;if(ot(r.app))return Promise.reject(yn(r));const s="reauthenticate";try{const o=await yr(t,jl(r,s,e,t),n);H(o.idToken,r,"internal-error");const c=qs(o.idToken);H(c,r,"internal-error");const{sub:u}=c;return H(t.uid===u,r,"user-mismatch"),Bn._forOperation(t,s,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&jt(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y0(t,e,n=!1){if(ot(t.app))return Promise.reject(yn(t));const r="signIn",s=await jl(t,r,e),o=await Bn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(o.user),o}function Q0(t,e,n,r){return bt(t).onIdTokenChanged(e,n,r)}function Z0(t,e,n){return bt(t).beforeAuthStateChanged(e,n)}const ui="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ui,"1"),this.storage.removeItem(ui),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ev=1e3,tv=10;class Bl extends Vl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ol(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((c,u,h)=>{this.notifyListeners(c,h)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const c=this.storage.getItem(r);!n&&this.localCache[r]===c||this.notifyListeners(r,c)},o=this.storage.getItem(r);D0()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,tv):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},ev)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Bl.type="LOCAL";const nv=Bl;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl extends Vl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}zl.type="SESSION";const $l=zl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rv(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new wi(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:o}=n.data,c=this.handlersMap[s];if(!(c!=null&&c.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const u=Array.from(c).map(async d=>d(n.origin,o)),h=await rv(u);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:h})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}wi.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ys(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let o,c;return new Promise((u,h)=>{const d=Ys("",20);s.port1.start();const v=setTimeout(()=>{h(new Error("unsupported_event"))},r);c={messageChannel:s,onMessage(T){const E=T;if(E.data.eventId===d)switch(E.data.status){case"ack":clearTimeout(v),o=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),u(E.data.response);break;default:clearTimeout(v),clearTimeout(o),h(new Error("invalid_response"));break}}},this.handlers.add(c),s.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[s.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(){return window}function sv(t){wt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gl(){return typeof wt().WorkerGlobalScope<"u"&&typeof wt().importScripts=="function"}async function ov(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function av(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function cv(){return Gl()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wl="firebaseLocalStorageDb",lv=1,hi="firebaseLocalStorage",Hl="fbase_key";class Ar{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Si(t,e){return t.transaction([hi],e?"readwrite":"readonly").objectStore(hi)}function uv(){const t=indexedDB.deleteDatabase(Wl);return new Ar(t).toPromise()}function ps(){const t=indexedDB.open(Wl,lv);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(hi,{keyPath:Hl})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(hi)?e(r):(r.close(),await uv(),e(await ps()))})})}async function Ka(t,e,n){const r=Si(t,!0).put({[Hl]:e,value:n});return new Ar(r).toPromise()}async function hv(t,e){const n=Si(t,!1).get(e),r=await new Ar(n).toPromise();return r===void 0?null:r.value}function Xa(t,e){const n=Si(t,!0).delete(e);return new Ar(n).toPromise()}const dv=800,fv=3;class ql{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ps(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>fv)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Gl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=wi._getInstance(cv()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await ov(),!this.activeServiceWorker)return;this.sender=new iv(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||av()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ps();return await Ka(e,ui,"1"),await Xa(e,ui),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ka(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>hv(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Xa(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const o=Si(s,!1).getAll();return new Ar(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:o}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(o)&&(this.notifyListeners(s,o),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),dv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ql.type="LOCAL";const mv=ql;new Tr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pv(t,e){return e?Dt(e):(H(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs extends Nl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ln(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ln(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ln(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function gv(t){return Y0(t.auth,new Qs(t),t.bypassAuthState)}function vv(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),J0(n,new Qs(t),t.bypassAuthState)}async function yv(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),X0(n,new Qs(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(e,n,r,s,o=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:o,error:c,type:u}=e;if(c){this.reject(c);return}const h={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(h))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return gv;case"linkViaPopup":case"linkViaRedirect":return yv;case"reauthViaPopup":case"reauthViaRedirect":return vv;default:jt(this.auth,"internal-error")}}resolve(e){Vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wv=new Tr(2e3,1e4);class kn extends Kl{constructor(e,n,r,s,o){super(e,n,s,o),this.provider=r,this.authWindow=null,this.pollId=null,kn.currentPopupAction&&kn.currentPopupAction.cancel(),kn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){Vt(this.filter.length===1,"Popup operations only handle one event");const e=Ys();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(yt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(yt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,kn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(yt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,wv.get())};e()}}kn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sv="pendingRedirect",Jr=new Map;class _v extends Kl{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Jr.get(this.auth._key());if(!e){try{const r=await bv(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Jr.set(this.auth._key(),e)}return this.bypassAuthState||Jr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function bv(t,e){const n=Iv(e),r=Tv(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Pv(t,e){Jr.set(t._key(),e)}function Tv(t){return Dt(t._redirectPersistence)}function Iv(t){return Xr(Sv,t.config.apiKey,t.name)}async function Av(t,e,n=!1){if(ot(t.app))return Promise.reject(yn(t));const r=Xs(t),s=pv(r,e),c=await new _v(r,s,n).execute();return c&&!n&&(delete c.user._redirectEventId,await r._persistUserIfCurrent(c.user),await r._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ev=10*60*1e3;class Cv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!xv(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Xl(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(yt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Ev&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ja(e))}saveEventToCache(e){this.cachedEventUids.add(Ja(e)),this.lastProcessedEventTime=Date.now()}}function Ja(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Xl({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function xv(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Xl(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rv(t,e={}){return Hn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Mv=/^https?/;async function Dv(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Rv(t);for(const n of e)try{if(Ov(n))return}catch{}jt(t,"unauthorized-domain")}function Ov(t){const e=fs(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const c=new URL(t);return c.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&c.hostname===r}if(!Mv.test(n))return!1;if(kv.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lv=new Tr(3e4,6e4);function Ya(){const t=wt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Fv(t){return new Promise((e,n)=>{var r,s,o;function c(){Ya(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ya(),n(yt(t,"network-request-failed"))},timeout:Lv.get()})}if(!((s=(r=wt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((o=wt().gapi)===null||o===void 0)&&o.load)c();else{const u=z0("iframefcb");return wt()[u]=()=>{gapi.load?c():n(yt(t,"network-request-failed"))},V0(`${B0()}?onload=${u}`).catch(h=>n(h))}}).catch(e=>{throw Yr=null,e})}let Yr=null;function Nv(t){return Yr=Yr||Fv(t),Yr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uv=new Tr(5e3,15e3),jv="__/auth/iframe",Vv="emulator/auth/iframe",Bv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},zv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $v(t){const e=t.config;H(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ws(e,Vv):`https://${t.config.authDomain}/${jv}`,r={apiKey:e.apiKey,appName:t.name,v:Wn},s=zv.get(t.config.apiHost);s&&(r.eid=s);const o=t._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${_r(r).slice(1)}`}async function Gv(t){const e=await Nv(t),n=wt().gapi;return H(n,t,"internal-error"),e.open({where:document.body,url:$v(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Bv,dontclear:!0},r=>new Promise(async(s,o)=>{await r.restyle({setHideOnLeave:!1});const c=yt(t,"network-request-failed"),u=wt().setTimeout(()=>{o(c)},Uv.get());function h(){wt().clearTimeout(u),s(r)}r.ping(h).then(h,()=>{o(c)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Hv=500,qv=600,Kv="_blank",Xv="http://localhost";class Qa{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Jv(t,e,n,r=Hv,s=qv){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),c=Math.max((window.screen.availWidth-r)/2,0).toString();let u="";const h=Object.assign(Object.assign({},Wv),{width:r.toString(),height:s.toString(),top:o,left:c}),d=Ge().toLowerCase();n&&(u=xl(d)?Kv:n),El(d)&&(e=e||Xv,h.scrollbars="yes");const v=Object.entries(h).reduce((E,[A,C])=>`${E}${A}=${C},`,"");if(M0(d)&&u!=="_self")return Yv(e||"",u),new Qa(null);const T=window.open(e||"",u,v);H(T,t,"popup-blocked");try{T.focus()}catch{}return new Qa(T)}function Yv(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qv="__/auth/handler",Zv="emulator/auth/handler",ey=encodeURIComponent("fac");async function Za(t,e,n,r,s,o){H(t.config.authDomain,t,"auth-domain-config-required"),H(t.config.apiKey,t,"invalid-api-key");const c={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Wn,eventId:s};if(e instanceof Ul){e.setDefaultLanguage(t.languageCode),c.providerId=e.providerId||"",um(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,T]of Object.entries({}))c[v]=T}if(e instanceof Ir){const v=e.getScopes().filter(T=>T!=="");v.length>0&&(c.scopes=v.join(","))}t.tenantId&&(c.tid=t.tenantId);const u=c;for(const v of Object.keys(u))u[v]===void 0&&delete u[v];const h=await t._getAppCheckToken(),d=h?`#${ey}=${encodeURIComponent(h)}`:"";return`${ty(t)}?${_r(u).slice(1)}${d}`}function ty({config:t}){return t.emulator?Ws(t,Zv):`https://${t.authDomain}/${Qv}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ji="webStorageSupport";class ny{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$l,this._completeRedirectFn=Av,this._overrideRedirectResult=Pv}async _openPopup(e,n,r,s){var o;Vt((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const c=await Za(e,n,r,fs(),s);return Jv(e,c,Ys())}async _openRedirect(e,n,r,s){await this._originValidation(e);const o=await Za(e,n,r,fs(),s);return sv(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:o}=this.eventManagers[n];return s?Promise.resolve(s):(Vt(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Gv(e),r=new Cv(e);return n.register("authEvent",s=>(H(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ji,{type:Ji},s=>{var o;const c=(o=s==null?void 0:s[0])===null||o===void 0?void 0:o[Ji];c!==void 0&&n(!!c),jt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Dv(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ol()||Cl()||Ks()}}const ry=ny;var ec="@firebase/auth",tc="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sy(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function oy(t){Ut(new St("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:c,authDomain:u}=r.options;H(c&&!c.includes(":"),"invalid-api-key",{appName:r.name});const h={apiKey:c,authDomain:u,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ll(t)},d=new U0(r,s,o,h);return G0(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ut(new St("auth-internal",e=>{const n=Xs(e.getProvider("auth").getImmediate());return(r=>new iy(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ut(ec,tc,sy(t)),ut(ec,tc,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ay=5*60,cy=Wc("authIdTokenMaxAge")||ay;let nc=null;const ly=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>cy)return;const s=n==null?void 0:n.token;nc!==s&&(nc=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function uy(t=vi()){const e=Gn(t,"auth");if(e.isInitialized())return e.getImmediate();const n=$0(t,{popupRedirectResolver:ry,persistence:[mv,nv,$l]}),r=Wc("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const c=ly(o.toString());Z0(n,c,()=>c(n.currentUser)),Q0(n,u=>c(u))}}const s=zc("auth");return s&&W0(n,`http://${s}`),n}function hy(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}j0({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const o=yt("internal-error");o.customData=s,n(o)},r.type="text/javascript",r.charset="UTF-8",hy().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});oy("Browser");let fn;function dy(t,e,n){if(!(!t||!e))return typeof document>"u"?!1:(fn||(fn=Kc(t),l0(fn),uy(fn),Mg(fn,{provider:new Ns(e.apiKey)})),!0)}const Qr=nn(en(t=>({lastRecordedData:[],lastGhostId:null,setLastRecordedData:e=>t({lastRecordedData:e}),setLastGhostId:e=>t({lastGhostId:e}),clearLastRecordedData:()=>t({lastRecordedData:[]}),replayingGhostRaceTime:null,setReplayingGhostRaceTime:e=>t({replayingGhostRaceTime:e})})));function fy(){const t=q(T=>T.raceStartTime),e=q(T=>T.raceEndTime),n=q(T=>T.raceCount),{firebaseConfig:r,recaptchaConfig:s,gameContent:o}=gs(),{enableGhostReplay:c}=o;dy(r,s);async function u(T){if(!fn)throw new Error("Firebase app not initialized. Cannot get Functions instance.");const E=Hp(fn),A=Kp(E,"uploadGhostReplay");try{const C=await A({replayData:T});if(!C.data||!C.data.ghostId||!C.data.publicUrl)throw new Error("Callable function did not return expected data (ghostId, publicUrl).");return C.data}catch(C){throw C instanceof Error?C:new Error("An unknown error occurred while saving the ghost replay via callable function.")}}const h=S.useRef({frames:[]}),d=S.useRef(0);S.useEffect(()=>{h.current.frames=[],d.current=0},[n]);const v=S.useCallback(async()=>{if(!c)return;const T=h.current.frames;if(!(T.length===0||T[T.length-1][0]>ts))try{const E=await u(T);E&&E.ghostId&&Qr.getState().setLastGhostId(E.ghostId)}catch{}},[c]);return S.useEffect(()=>{if(e&&t){if(h.current.frames.length>0){const T=e-t;h.current.frames[h.current.frames.length-1][0]=T}Qr.getState().setLastRecordedData(h.current.frames),Qr.getState().setLastGhostId(null),v()}},[e,v,t]),re(()=>{if(t&&!e){const T=performance.now(),E=T-d.current,A=T-t;if(E>=Th&&A<ts){const{prevPosition:C,position:I,orientation:x}=Y.getState(),{progressToNextStep:L}=Zr.getState(),k=We.getState(),D=k.joystick.x,N=k.triggers.left>0,F=C.clone().lerp(I,L),U=x.w>0?1:-1;h.current.frames.push([Number(A.toFixed(3)),Number(F.x.toFixed(3)),Number(F.y.toFixed(3)),Number(F.z.toFixed(3)),Number(x.x.toFixed(3))*U,Number(x.y.toFixed(3))*U,Number(x.z.toFixed(3))*U,Number(D.toFixed(2)),N?1:0]),d.current=T}}},Sr.otherCar),b.jsx(b.Fragment,{})}function my({ghostData:t}){const e=S.useRef(null),n=q(s=>s.raceStartTime),r=S.useRef(0);return S.useEffect(()=>{r.current=0},[n]),re((s,o)=>{const c=t;if(!n||!e.current||c.length<=2)return;const h=performance.now()-n;let d=r.current;for(;d<c.length-1&&c[d+1][0]<=h;)d++;r.current=d,d>=c.length-1&&(d=c.length-2);const v=c[d],T=c[d+1],[E,A,C,I,x,L,k,D,N]=v,[F,U,y,p,f,_,g,P,,]=T,w=F-E,V=wr((h-E)/w,0,1),K=new M(A,C,I),B=new M(U,y,p),$=Math.sqrt(Math.max(0,1-(x*x+L*L+k*k))),X=Math.sqrt(Math.max(0,1-(f*f+_*_+g*g))),ee=new le(x,L,k,$),he=new le(f,_,g,X),ae=K.clone().lerp(B,V),ne=ee.clone().slerp(he,V),ce=Fn(D,P,V),fe=N>0,Q=new M;Q.copy(B).sub(K).divideScalar(F-E).multiplyScalar(1e3);const Z=new M(0,0,1).applyQuaternion(ne),W=new M(-1,0,0).applyQuaternion(ne),J=Q.dot(Z),Ce=Q.dot(W),ye=Q.length(),ve=c[Math.max(0,d-1)],Pe=new M(ve[1],ve[2],ve[3]),ke=E-ve[0],we=new M;ke>0&&we.copy(K).sub(Pe).divideScalar(ke).multiplyScalar(1e3);const Me=J-we.dot(Z);e.current.updateVisuals(o,ae,ne,J,Ce*.8,ce,Me*.6,fe,ye/(dc/3.6),0)}),b.jsx(b.Fragment,{children:b.jsx("group",{visible:!!n,children:b.jsx(Ss,{ref:e,ghostCar:!0})})})}const py=t=>!Array.isArray(t)||t.length===0||t.length>6e3?!1:t.every(e=>{if(!Array.isArray(e)||e.length!==9||!e.every(T=>typeof T=="number"))return!1;const[n,r,s,o,c,u,h,d,v]=e;return!(n<0||n>ts+5e3||!isFinite(r)||!isFinite(s)||!isFinite(o)||Math.abs(c)>1||Math.abs(u)>1||Math.abs(h)>1||d<-1||d>1||v!==0&&v!==1)}),gy="shopify-editions-winter-2025.firebasestorage.app",vy=`https://storage.googleapis.com/${gy}`,yy="ghostReplays",wy=async t=>{const e=`${yy}/${t}.json`,n=`${vy}/${e}?alt=media`,r=await fetch(n);if(!r.ok){let o=r.statusText||"Unknown error fetching from GCS.";try{const c=await r.json();c&&c.error&&typeof c.error.message=="string"?o=c.error.message:c&&typeof c.message=="string"&&(o=c.message)}catch{}throw new Error(`Failed to fetch ghost data from GCS. Status: ${r.status}. Detail: ${o}`)}const s=await r.json();if(!py(s))throw new Error("Invalid ghost replay data format received from GCS.");return s};function Sy(){const[t,e]=S.useState(null),[n,r]=S.useState(null),[s,o]=S.useState(null),{gameContent:c}=gs(),{enableGhostReplay:u}=c;return S.useEffect(()=>{if(u&&typeof window<"u"){const d=new URLSearchParams(window.location.search).get("ghostId");o(d)}},[u]),S.useEffect(()=>{if(!s){e(null),r(null);return}(async()=>{r(null),e(null);try{const d=await wy(s);e(d)}catch(d){r(d.message||"Failed to load ghost replay data from GCS"),e(null)}})()},[s]),S.useEffect(()=>{var h;if(t){const d=((h=t[t.length-1])==null?void 0:h[0])??null;Qr.getState().setReplayingGhostRaceTime(d)}},[t]),{ghostData:t,error:n,isLoading:!t&&!n&&!!s}}const un=({listener:t,buffer:e,initialVolume:n=0,autoPlay:r=!0})=>{const s=S.useMemo(()=>{const A=new hc(t);return A.setBuffer(e),A.loop=!0,A.gain.gain.value=n,A},[t,e,n]),o=ar(A=>A.isAudioEnabled);S.useEffect(()=>{o?r&&s.play():s.stop()},[o,r,s]),S.useEffect(()=>()=>{s.stop(),s.disconnect()},[s]);const c=S.useCallback((A=1e3)=>{s.setVolume(n)},[s,n]),u=S.useCallback((A=1e3)=>{s.setVolume(0)},[s]),h=S.useCallback(()=>{s.stop(),s.play()},[s]),d=S.useCallback(()=>{s.play()},[s]),v=S.useCallback(()=>{s.stop()},[s]),T=S.useCallback(A=>{s.setVolume(A)},[s]),E=S.useCallback(A=>{s.source&&(s.source.playbackRate.value=A)},[s]);return{audioSource:s,play:d,stop:v,restart:h,fadeIn:c,fadeOut:u,setVolume:T,setPitch:E}};function _y(){const t=ar(B=>B.setIsAudioEnabled),e=ar(B=>B.isMuted),n=Is(),r=q(B=>B.raceCount),s=q(B=>B.raceEndTime),o=q(B=>B.gameScreen),c=S.useCallback(()=>{n&&t(!0),document.removeEventListener("click",c),document.removeEventListener("touchstart",c),document.removeEventListener("keydown",c)},[t,n]);S.useEffect(()=>(document.addEventListener("click",c),document.addEventListener("touchstart",c),document.addEventListener("keydown",c),()=>{document.removeEventListener("click",c),document.removeEventListener("touchstart",c),document.removeEventListener("keydown",c)}),[c]);const u=Jt(B=>B.camera),h=S.useMemo(()=>new $u,[]);S.useEffect(()=>(u.add(h),()=>{u.remove(h)}),[u,h]);const d=vs(Gu,Object.values(dt).map(B=>B.url)),v=S.useMemo(()=>{const B={};return Object.keys(dt).forEach(($,X)=>{B[$]=d[X]}),B},[d]),T=S.useMemo(()=>Array.from({length:10},()=>new hc(h)),[h]),E=S.useRef([]),A=B=>{E.current.push(B)},C=ar(B=>B.setAddSoundToQueue);S.useEffect(()=>{C(A)},[C]);const{setVolume:I}=un({listener:h,buffer:v[Se.Collision]}),{setVolume:x}=un({listener:h,buffer:v[Se.Drift]}),{setVolume:L}=un({listener:h,buffer:v[Se.Sparkle]}),{setVolume:k}=un({listener:h,buffer:v[Se.Underwater]}),{setVolume:D}=un({listener:h,buffer:v[Se.Cheer]}),{setVolume:N,setPitch:F}=un({listener:h,buffer:v[Se.CarEngine]}),{restart:U,fadeOut:y,fadeIn:p}=un({listener:h,buffer:v[Se.Music],initialVolume:dt[Se.Music].volume,autoPlay:!1}),f=S.useRef(new Set);S.useEffect(()=>{const B=q.subscribe($=>$.raceStartTime,$=>{$!==null&&f.current.clear()});return()=>{B()}},[]);const _=S.useCallback(()=>{function B(){return T.find($=>!$.isPlaying)}for(;E.current.length;){const $=B();if($){const X=E.current.shift();if(X!==void 0){const ee=dt[X];$.setBuffer(v[X]),$.setVolume(ee.volume||1),$.setPlaybackRate(ee.playbackRate||1),ee.maxPitchVariation&&($.detune=ee.maxPitchVariation*Math.random()),$.play()}}else break}},[v,T]),g=S.useCallback(()=>{const{normalizedProgress:B}=Y.getState();Ih.forEach($=>{f.current.has($)||B>=$.position&&(B<$.position+.05&&A($.sound),f.current.add($))})},[]);S.useEffect(()=>{s&&A(Se.ChaChing)},[s]),S.useEffect(()=>{o===nt.RacingScreen?(A(Se.EngineStart),U(),p()):o===nt.SplashScreen&&y()},[o,U,r,p,y]),S.useEffect(()=>{h.setMasterVolume(e?0:1)},[e,h]);const P=S.useRef(0),w=S.useRef(0),V=S.useRef(0),K=S.useRef(0);return re((B,$)=>{var Xe,rt,Je;g(),_();const{collisionState:X,isDrifting:ee,speed:he,normalizedProgress:ae,isInJump:ne,isBraking:ce}=Y.getState(),fe=We.getState(),Q=o===nt.RacingScreen?1:0,Z=fi(0,dc,he),W=(X===at.collidingOnTheRight||X===at.collidingOnTheLeft)&&!ne;let J=0;W&&Z>.05&&(Z<.1?J=0:Z<.5?J=.5:J=1);const Ce=gt(P.current,J*(((Xe=dt[Se.Collision])==null?void 0:Xe.volume)??1)*Q,15,$);P.current=Ce,I(P.current);const ye=ee||ce&&he>10?1:0,ve=gt(w.current,ne?0:ye*(((rt=dt[Se.Drift])==null?void 0:rt.volume)??1)*Q,Ah,$);w.current=ve,x(w.current);let Pe=he;he===0&&fe.triggers.right>0&&(Pe=150*We.getState().triggers.right);let ke=Wu(Pe,0,250,1,.7);he===0&&fe.triggers.right>0&&(ke=1.2);let we=.3+Math.pow(Pe/250,2)*.6;ee&&(we-=.05),we=wr(we,.3,1);const Me=gt(V.current,ke*(((Je=dt[Se.CarEngine])==null?void 0:Je.volume)??1)*Q,Ko,$);V.current=Me,N(Me);const ht=gt(K.current,we,Ko,$);K.current=ht,F(ht);const Fe=Math.max(0,1-Math.abs(ae-.828)/.02);L(Fe*(dt[Se.Sparkle].volume??1));const _e=Math.min(1,Math.max(0,(ae-.26)/.02)*Math.max(0,(.5-ae)/.02));k(_e*(dt[Se.Underwater].volume??1));const Te=Math.max(0,1-Math.abs(ae-.96)/.04);D(Te*(dt[Se.Cheer].volume??1))},Sr.audio),null}function by(){const[t,e]=S.useState(!1);S.useEffect(()=>{const s=new URLSearchParams(window.location.search);e(s.has("debug"))},[]);const n=S.lazy(()=>ws(()=>import("./index-CktnqYum.js"),__vite__mapDeps([9,1,2,3,10])).then(s=>({default:s.Perf}))),{ghostData:r}=Sy();return S.useEffect(()=>{ei.getState().setActive(!!r)},[r]),b.jsxs("div",{className:"w-full h-dvh overflow-hidden","data-section-name":"game",children:[b.jsx(Hu,{className:"size-full",dpr:[1,2],camera:{position:[0,1.5,-2],near:.1,far:5e3},gl:{powerPreference:"high-performance",antialias:!0},onContextMenu:s=>s.preventDefault(),children:b.jsxs(S.Suspense,{fallback:null,children:[t&&b.jsx(n,{position:"bottom-left"}),b.jsx(Gf,{}),b.jsx(Af,{}),b.jsx(Ef,{}),b.jsx(If,{}),b.jsx(_y,{}),b.jsx(Rh,{}),b.jsx(Dh,{}),r&&b.jsx(my,{ghostData:r}),b.jsx(Oh,{}),b.jsx(Lh,{}),b.jsx(jh,{}),b.jsx(Xh,{}),b.jsx(rd,{}),b.jsx(ad,{}),b.jsx(ud,{}),b.jsx(mh,{}),b.jsx(Rf,{}),b.jsx(fy,{})]})}),b.jsx(zf,{})]})}const Py="/cdn.shopify.com/oxygen-v2/40436/33939/71168/2644332/assets/style-BFvi3uGm.css";function Ty({globalStrings:t,localeDetails:e,locale:n,canonicalUrl:r}){const s=pi(nt.SplashScreen);return b.jsx("div",{"data-nosnippet":!0,className:ge("fixed top-0 left-0 w-full z-9999 [&>a]:no-underline transition-[opacity,visibility] duration-300","print:hidden",s?"opacity-100 visible":"opacity-0 invisible"),children:b.jsx(Ku,{className:"limited-nav",backgroundClassName:"bg-nav-header",currentEdition:Xu.summer2025,localeSettings:{locale:e.localeSignUp,language:e.language,localeShopifyDotCom:n,canonicalUrl:r},itemDelay:40,itemClassName:"ease-out-cubic",navSettings:{isMenuOpen:!1,onMenuToggle:()=>{},titleClickCallback:()=>{}},searchQuery:"",localSearchPath:"/editions/summer2025",theme:"dark",translations:t,skipLinkHref:"",hasAllEditionsDropdown:!1})})}function Iy(){const{progress:t,total:e,loaded:n}=Ju(),r=mn(o=>o.setProgress),s=kf();return S.useEffect(()=>{if(!s){if(t===100||e>0&&n===e){r(100);return}r(t)}},[t,r,n,e,s]),null}const Ay=1200,rc=500,ic=500,Yi=25;function Ey(){const t=mn(T=>T.startLoading),[e,n]=S.useState(!0),[r,s]=S.useState(!1),o=mn(T=>T.progress),[c,u]=S.useState(!1),h=S.useRef(null),d=S.useRef(!1),v=S.useRef(null);return S.useEffect(()=>{t()},[t]),S.useEffect(()=>{setTimeout(()=>{u(!0)},rc)},[]),S.useEffect(()=>{var T;if(c){if(!d.current){d.current=!0,v.current=setTimeout(()=>{var E;(E=h.current)==null||E.style.setProperty("--loading-bar-width",`${Math.max(o,Yi)}%`)},100);return}v.current&&clearTimeout(v.current),(T=h.current)==null||T.style.setProperty("--loading-bar-width",`${Math.max(o,Yi)}%`)}},[o,c]),S.useEffect(()=>{if(o>=100){setTimeout(()=>{n(!1),mn.getState().setLoadingScreenFadeComplete(!0)},Ay);return}return()=>{mn.getState().setLoadingScreenFadeComplete(!1)}},[o]),S.useEffect(()=>{e||setTimeout(()=>{s(!0)},ic)},[e]),!e&&r?null:b.jsxs(b.Fragment,{children:[b.jsx(Iy,{}),b.jsx("div",{className:ge("fixed inset-0 z-[99999] flex items-center justify-center bg-dark transition-[opacity,visibility]",e?"opacity-100":"opacity-0 pointer-events-none"),style:{transitionDuration:`${ic}ms`},children:b.jsxs("div",{ref:h,className:"relative w-150 h-4",style:{"--loading-bar-width":`${Yi}%`,"--initial-animation-duration":`${rc}ms`},children:[b.jsx("div",{className:"absolute top-0 left-0 bg-white/25 size-full rounded-full"}),b.jsx("div",{className:ge("absolute top-0 left-0 bg-white h-full rounded-full","transition-[width,opacity] duration-1000 origin-left",c?"w-[var(--loading-bar-width)]":"animate-initial-loader-line")}),b.jsx("div",{className:ge("absolute top-0 left-0 bg-transparent h-full rounded-full mix-blend-lighten","bg-[var(--glow-color)] box-shadow-[0_0_var(--glow-spread)_var(--glow-color)]","transition-[width,opacity] origin-left duration-1000",c?"w-[var(--loading-bar-width)]":"animate-initial-loader-line"),style:{"--glow-color":"#B36AF7","--glow-opacity":"0.8","--glow-blur":"16px","--glow-spread":"12px"},children:b.jsx("div",{className:ge("absolute inset-[calc(-1*var(--glow-spread))] bg-[var(--glow-color)]"," rounded-inherit pointer-events-none blur-[var(--glow-blur)]","opacity-[var(--glow-opacity)] [transform:translateZ(0)]")})})]})})]})}const Dy=(...t)=>[{name:"viewport",content:"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"},...Yu(...t)??[]],Oy=()=>[{rel:"stylesheet",href:Py},{rel:"preload",href:pc,as:"fetch",crossOrigin:"anonymous"},{rel:"preload",href:Ts,as:"fetch",crossOrigin:"anonymous"},{rel:"preload",href:Ps,as:"fetch",crossOrigin:"anonymous"},{rel:"preload",href:bs,as:"fetch",crossOrigin:"anonymous"}];function Ly(){const{locale:t,globalStrings:e}=gs(),n=Tu("root"),r=(n==null?void 0:n.canonicalUrl.toString())||"",s=Qu(t);return S.useEffect(()=>{if(window.matchMedia("(max-width: 767px)").matches)return;function c(h){let d=[];const v="ArrowUp,ArrowUp,ArrowDown,ArrowDown,ArrowLeft,ArrowRight,ArrowLeft,ArrowRight,b,a";return T=>{d.push(T.key),d.toString().indexOf(v)>=0&&(h(),d=[])}}const u=c(()=>{q.getState().setRainbowMode(!0),ar.getState().addSoundToQueue(Se.KonamiCode),window.removeEventListener("keydown",u)});return window.addEventListener("keydown",u),()=>{window.removeEventListener("keydown",u)}}),b.jsxs(b.Fragment,{children:[b.jsx(Ey,{}),b.jsx(Ty,{globalStrings:e,localeDetails:s,canonicalUrl:r,locale:t}),b.jsx(qu,{}),b.jsx("div",{className:"w-screen h-dvh select-none",children:b.jsx(by,{})}),b.jsx(Zu,{drive:!0})]})}export{xe as B,nt as G,Mf as L,q as a,ar as b,Qr as c,Y as d,We as e,pi as f,xh as g,Ly as h,Oy as l,Dy as m,kh as u};
//# sourceMappingURL=(_locale).editions.summer2025_.drive-Ds84qjLJ.js.map
