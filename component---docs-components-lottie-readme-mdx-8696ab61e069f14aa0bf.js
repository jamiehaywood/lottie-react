(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{Otc6:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return s}));n("5hJT"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("PJhk"),n("mXGw");var a=n("/FXl"),l=n("TjRS"),o=(n("ZFoC"),n("+lk4"));n("aD51");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var r={};void 0!==r&&r&&r===Object(r)&&Object.isExtensible(r)&&!r.hasOwnProperty("__filemeta")&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docs/components/Lottie/README.mdx"}});var b={_frontmatter:r},c=l.a;function s(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,["components"]);return Object(a.b)(c,i({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"lottie"},"Lottie"),Object(a.b)("h2",{id:"getting-started"},"Getting Started"),Object(a.b)(o.a,{mdxType:"LottieExamples"}),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-jsx"}),'import Lottie from "lottie-react";\nimport groovyWalkAnimation from "./groovyWalk.json";\n\nconst Example = () => {\n  return <Lottie animationData={groovyWalkAnimation} />;\n};\n\nexport default Example;\n')),Object(a.b)("h2",{id:"props"},"Props"),Object(a.b)("h3",{id:"animationdata"},Object(a.b)("inlineCode",{parentName:"h3"},"animationData")),Object(a.b)("p",null,"A JSON Object with the exported animation data"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-yaml"}),"Type: Object\nDefault: none\nRequired: ☑\n")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"loop"},Object(a.b)("inlineCode",{parentName:"h3"},"loop")),Object(a.b)("p",null,"Set it to true for infinite amount of loops, or pass a number for a specific amount of loops"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-yaml"}),"Type: Boolean | Number\nDefault: true\nRequired: ☐\n")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"autoplay"},Object(a.b)("inlineCode",{parentName:"h3"},"autoplay")),Object(a.b)("p",null,"If set to true, animation will play as soon as it's loaded"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-yaml"}),"Type: Boolean\nDefault: true\nRequired: ☐\n")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"initialsegment"},Object(a.b)("inlineCode",{parentName:"h3"},"initialSegment")),Object(a.b)("p",null,"Expects an array of length 2. First value is the initial frame, second value is the final frame. If this is set, the animation will start at this position in time instead of the exported value from AE"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-yaml"}),"Type: Array\nDefault: none\nRequired: ☐\n")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"oncomplete"},Object(a.b)("inlineCode",{parentName:"h3"},"onComplete")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"onloopcomplete"},Object(a.b)("inlineCode",{parentName:"h3"},"onLoopComplete")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"onenterframe"},Object(a.b)("inlineCode",{parentName:"h3"},"onEnterFrame")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"onsegmentstart"},Object(a.b)("inlineCode",{parentName:"h3"},"onSegmentStart")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"onconfigready"},Object(a.b)("inlineCode",{parentName:"h3"},"onConfigReady")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"ondataready"},Object(a.b)("inlineCode",{parentName:"h3"},"onDataReady")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"ondatafailed"},Object(a.b)("inlineCode",{parentName:"h3"},"onDataFailed")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"onloadedimages"},Object(a.b)("inlineCode",{parentName:"h3"},"onLoadedImages")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"ondomloaded"},Object(a.b)("inlineCode",{parentName:"h3"},"onDOMLoaded")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"ondestroy"},Object(a.b)("inlineCode",{parentName:"h3"},"onDestroy")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"style"},Object(a.b)("inlineCode",{parentName:"h3"},"style")),Object(a.b)("p",null,"Style object that applies to the animation wrapper (which is a div)"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-yaml"}),"Type: Object\nDefault: none\nRequired: ☐\n")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"lottieref"},Object(a.b)("inlineCode",{parentName:"h3"},"lottieRef")),Object(a.b)("p",null,"Expects a React ref object in which interaction methods will be stored"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-yaml"}),"Type: React.RefObject\nDefault: none\nRequired: ☐\n")),Object(a.b)("h2",{id:"interaction-methods"},"Interaction methods"),Object(a.b)("p",null,"These methods are designed to give you more control over the Lottie animation, and fill in the gaps left by the props:"),Object(a.b)("h3",{id:"play"},Object(a.b)("inlineCode",{parentName:"h3"},"play()")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"stop"},Object(a.b)("inlineCode",{parentName:"h3"},"stop()")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"pause"},Object(a.b)("inlineCode",{parentName:"h3"},"pause()")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"setspeedspeed"},Object(a.b)("inlineCode",{parentName:"h3"},"setSpeed(speed)")),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-yaml"}),"speed: 1 is normal speed\n")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"gotoandplayvalue-isframe"},Object(a.b)("inlineCode",{parentName:"h3"},"goToAndPlay(value, isFrame)")),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-yaml"}),"value: numeric value.\nisFrame: defines if first argument is a time based value or a frame based (default false).\n")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"gotoandstopvalue-isframe"},Object(a.b)("inlineCode",{parentName:"h3"},"goToAndStop(value, isFrame)")),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-yaml"}),"value: numeric value.\nisFrame: defines if first argument is a time based value or a frame based (default false).\n")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"setdirectiondirection"},Object(a.b)("inlineCode",{parentName:"h3"},"setDirection(direction)")),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-yaml"}),"direction: 1 is forward, -1 is reverse.\n")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"playsegmentssegments-forceflag"},Object(a.b)("inlineCode",{parentName:"h3"},"playSegments(segments, forceFlag)")),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-yaml"}),"segments: array. Can contain 2 numeric values that will be used as first and last frame of the animation. Or can contain a sequence of arrays each with 2 numeric values.\nforceFlag: boolean. If set to false, it will wait until the current segment is complete. If true, it will update values immediately.\n")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"setsubframeusesubframes"},Object(a.b)("inlineCode",{parentName:"h3"},"setSubframe(useSubFrames)")),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-yaml"}),"useSubFrames: If false, it will respect the original AE fps. If true, it will update on every requestAnimationFrame with intermediate values. Default is true.\n")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"getdurationinframes"},Object(a.b)("inlineCode",{parentName:"h3"},"getDuration(inFrames)")),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-yaml"}),"inFrames: If true, returns duration in frames, if false, in seconds\n")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"destroy"},Object(a.b)("inlineCode",{parentName:"h3"},"destroy()")),Object(a.b)("h3",{id:"calling-the-methods"},"Calling the methods"),Object(a.b)("p",null,"To use the interaction methods listed above, pass a reference object to the Lottie component by using the ",Object(a.b)("inlineCode",{parentName:"p"},"ref")," prop (see the React documentation to learn more about ",Object(a.b)("a",i({parentName:"p"},{href:"https://reactjs.org/docs/refs-and-the-dom.html"}),"Ref")," or ",Object(a.b)("a",i({parentName:"p"},{href:"https://reactjs.org/docs/hooks-reference.html#useref"}),"useRef")," hook):"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-jsx"}),'import Lottie from "lottie-react";\nimport groovyWalkAnimation from "./groovyWalk.json";\n\nconst Example = () => {\n  const lottieRef = useRef();\n\n  return <Lottie lottieRef={lottieRef} animationData={groovyWalkAnimation} />;\n};\n\nexport default Example;\n')),Object(a.b)("p",null,"You can then use the interaction methods like this:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-jsx"}),"...\nlottieRef.current.pause();\n...\n")),Object(a.b)("h2",{id:"examples"},"Examples"),Object(a.b)("p",null,"Soon :)"))}void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docs/components/Lottie/README.mdx"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-components-lottie-readme-mdx-8696ab61e069f14aa0bf.js.map