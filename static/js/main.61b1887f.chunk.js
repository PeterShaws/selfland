(this.webpackJsonpselfland=this.webpackJsonpselfland||[]).push([[0],{84:function(n,e,t){"use strict";t.r(e);var r=t(1),o=t(0),a=t.n(o),i=t(42),c=t.n(i),s=t(11),l=t(24),d=t(14),u=t(17),m=t(23),h=t(3),b=t(4);function f(){var n=Object(h.a)(["\n              bottom: 100%;\n              border-color: transparent transparent var(--gainsboro);\n              border-width: 0 0.6rem 0.6rem;\n            "]);return f=function(){return n},n}function g(){var n=Object(h.a)(["\n              top: 100%;\n              border-color: var(--gainsboro) transparent transparent;\n              border-width: 0.6rem 0.6rem 0;\n            "]);return g=function(){return n},n}function p(){var n=Object(h.a)(["\n            top: 100%;\n            transition: opacity 0.2s, top 0.2s;\n          "]);return p=function(){return n},n}function j(){var n=Object(h.a)(["\n            bottom: 100%;\n            transition: opacity 0.2s, bottom 0.2s;\n          "]);return j=function(){return n},n}function v(){var n=Object(h.a)(["\n            top: calc(100% + 1rem);\n          "]);return v=function(){return n},n}function x(){var n=Object(h.a)(["\n            bottom: calc(100% + 1rem);\n          "]);return x=function(){return n},n}function y(){var n=Object(h.a)(["\n  position: relative;\n\n  &:hover .tooltip {\n    opacity: 1;\n    z-index: 999;\n\n    ","\n  }\n\n  .tooltip {\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n    padding: 0.25rem 1rem;\n    white-space: nowrap;\n    text-align: center;\n    font-size: 1.4rem;\n    line-height: 1.9rem;\n    color: var(--rich-black);\n    background-color: var(--gainsboro);\n    border-radius: var(--length-border-radius);\n    opacity: 0;\n    pointer-events: none;\n    box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.16),\n      0 0.3rem 0.6rem rba(0, 0, 0, 0.23);\n\n    ",";\n\n    &::after {\n      content: '';\n      position: absolute;\n      left: 50%;\n      transform: translateX(-50%);\n      display: block;\n      width: 0;\n      height: 0;\n      border-style: solid;\n\n      ",";\n    }\n  }\n"]);return y=function(){return n},n}var O=b.c.div(y(),(function(n){return"top"===n.direction?Object(b.b)(x()):Object(b.b)(v())}),(function(n){return"top"===n.direction?Object(b.b)(j()):Object(b.b)(p())}),(function(n){return"top"===n.direction?Object(b.b)(g()):Object(b.b)(f())})),w=function(n){var e=n.message,t=n.children,o=n.direction,a=void 0===o?"top":o,i=Object(m.a)(n,["message","children","direction"]);return Object(r.jsxs)(O,Object(u.a)(Object(u.a)({},i),{},{direction:a,children:[Object(r.jsx)("span",{className:"tooltip",children:e}),t]}))};function k(){var n=Object(h.a)(["\n                    display: none;\n                  "]);return k=function(){return n},n}function z(){var n=Object(h.a)(["\n                    display: block;\n                  "]);return z=function(){return n},n}function C(){var n=Object(h.a)(["\n                    display: block;\n                  "]);return C=function(){return n},n}function S(){var n=Object(h.a)(["\n                    display: none;\n                  "]);return S=function(){return n},n}function L(){var n=Object(h.a)(["\n                display: none;\n              "]);return L=function(){return n},n}function F(){var n=Object(h.a)(["\n                display: flex;\n              "]);return F=function(){return n},n}function N(){var n=Object(h.a)(["\n  position: relative;\n  height: 5rem;\n  background-color: black;\n  border-bottom: 1px solid #ffffff20;\n  /* box-shadow: 0 0px 10px 10px #000000aa; */\n\n  .center {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: 100%;\n  }\n\n  h1 {\n    font-weight: normal;\n    color: var(--gainsboro);\n    opacity: 0.75;\n    transition: opacity 0.2s;\n\n    &:hover {\n      opacity: 1;\n    }\n  }\n\n  .right {\n    display: flex;\n\n    nav {\n      display: flex;\n\n      a {\n        &.log-in {\n          color: var(--gainsboro);\n\n          &:hover {\n            color: white;\n          }\n        }\n\n        & + a {\n          margin-left: 3rem;\n        }\n      }\n\n      a + div,\n      div + a,\n      div + div {\n        margin-left: 3rem;\n      }\n\n      @media (max-width: 680px) {\n        position: absolute;\n        left: 0;\n        top: 5rem;\n        width: 100vw;\n        height: calc(100vh - 5rem);\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        z-index: 1;\n        background-color: rgba(0, 0, 0, 0.9);\n\n        a + a,\n        a + div,\n        div + a,\n        div + div {\n          margin-left: 0;\n          margin-top: 3rem;\n        }\n\n        ","\n      }\n\n      @media (max-width: 600px) {\n        top: 3rem;\n        height: calc(100vh - 3rem);\n      }\n    }\n\n    svg {\n      width: 2rem;\n      height: 2rem;\n\n      &.toggle {\n        @media (min-width: 681px) {\n          display: none;\n        }\n\n        @media (max-width: 680px) {\n          &.show-nav {\n            ","\n          }\n          &.hide-nav {\n            ","\n          }\n        }\n      }\n    }\n  }\n\n  @media (max-width: 600px) {\n    height: 3rem;\n\n    h1 {\n      font-size: 2.16rem;\n    }\n  }\n"]);return N=function(){return n},n}var E=b.c.header(N(),(function(n){return n.showNav?Object(b.b)(F()):Object(b.b)(L())}),(function(n){return n.showNav?Object(b.b)(S()):Object(b.b)(C())}),(function(n){return n.showNav?Object(b.b)(z()):Object(b.b)(k())})),R=function(){var n=Object(o.useState)(!1),e=Object(l.a)(n,2),t=e[0],a=e[1],i=Object(o.useCallback)((function(){return a(!t)}),[t]);return Object(r.jsx)(E,{showNav:t,children:Object(r.jsxs)("div",{className:"center",children:[Object(r.jsx)(w,{message:"Home",direction:"bottom",children:Object(r.jsx)(s.b,{to:"/",children:Object(r.jsx)("h1",{children:"Selfland"})})}),Object(r.jsxs)("div",{className:"right",children:[Object(r.jsxs)("nav",{children:[Object(r.jsx)(w,{message:"What we want",direction:"bottom",children:Object(r.jsx)(s.b,{to:"/",children:"Manifesto"})}),Object(r.jsx)(w,{message:"Who we are",direction:"bottom",children:Object(r.jsx)(s.b,{to:"/",children:"About Us"})}),Object(r.jsx)(w,{message:"Our self-knowledge programs",direction:"bottom",children:Object(r.jsx)(s.b,{to:"/",children:"Tracks"})}),Object(r.jsx)(w,{message:"Opportunities for mentors",direction:"bottom",children:Object(r.jsx)(s.b,{to:"/",children:"Careers"})}),Object(r.jsx)(w,{message:"Sign up or Enter",direction:"bottom",children:Object(r.jsx)(s.b,{to:"/",className:"log-in",children:Object(r.jsx)(d.RiUserAddLine,{})})})]}),Object(r.jsx)(d.RiMenuLine,{className:"toggle show-nav",onClick:i}),Object(r.jsx)(d.RiCloseLine,{className:"toggle hide-nav",onClick:i})]})]})})},T=t(5),I=t(36),M=t.n(I),A=t(46),W=t(28),P=t(50);function X(){var n=Object(h.a)(["\n  padding: 1.5rem;\n  font-weight: 500;\n  color: var(--gainsboro);\n  background-color: var(--claret);\n  border: 0.1rem solid var(--gainsboro-ghost);\n  border-radius: var(--length-border-radius);\n  transition: border-color 0.2s, background-color 0.2s;\n  cursor: pointer;\n\n  &[disabled] {\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n\n  &:not([disabled]) {\n    &:hover,\n    &:focus {\n      background-color: var(--claret-dark);\n      border-color: var(--claret-light);\n    }\n  }\n\n  @media (max-width: 768px) {\n    padding: 0.75rem 1.5rem;\n  }\n"]);return X=function(){return n},n}var B=b.c.button(X()),q=function(n){var e=n.children,t=Object(m.a)(n,["children"]);return Object(r.jsx)(B,Object(u.a)(Object(u.a)({},t),{},{children:e}))},D=t(27);function Y(){var n=Object(h.a)(["\n        margin-bottom: 1.5rem;\n      "]);return Y=function(){return n},n}function _(){var n=Object(h.a)(["\n        color: var(--claret-light);\n        opacity: 1;\n      "]);return _=function(){return n},n}function V(){var n=Object(h.a)(["\n        color: var(--gainsboro);\n        opacity: 1;\n      "]);return V=function(){return n},n}function G(){var n=Object(h.a)(["\n      border-color: var(--claret);\n      border-bottom-left-radius: 0;\n\n      &::after {\n        content: attr(data-error);\n        height: auto;\n        opacity: 1;\n      }\n    "]);return G=function(){return n},n}function H(){var n=Object(h.a)(["\n      background-color: var(--prussian-blue-dark);\n      border-color: var(--prussian-blue-light);\n    "]);return H=function(){return n},n}function U(){var n=Object(h.a)(["\n  display: flex;\n  align-items: center;\n  position: relative;\n  padding: 1.5rem;\n  color: var(--gainsboro);\n  background-color: var(--prussian-blue);\n  border: 0.1rem solid var(--gainsboro-ghost);\n  border-radius: var(--length-border-radius);\n  transition: border-color 0.2s, background-color 0.2s;\n  cursor: text;\n\n  &:hover {\n    background-color: var(--prussian-blue-dark);\n    border-color: var(--prussian-blue-light);\n  }\n\n  &::after {\n    content: '';\n    position: absolute;\n    top: 100%;\n    left: -0.1rem;\n    height: 0;\n    padding: 0.2rem 1rem;\n    font-size: 1.2rem;\n    color: var(--gainsboro);\n    background-color: var(--claret);\n    border-bottom-left-radius: var(--length-border-radius);\n    border-bottom-right-radius: var(--length-border-radius);\n    opacity: 0;\n    transition: height 0.2s, opacity 0.2s, margin-bottom 0.2s;\n  }\n\n  ","\n\n  ","\n\n  svg {\n    flex-shrink: 0;\n    width: 1.8rem;\n    height: 1.8rem;\n    margin-right: 1.6rem;\n    color: var(--gainsboro);\n    opacity: 0.5;\n    transition: color 0.2s, opacity 0.2s;\n    cursor: text;\n\n    ","\n\n    ","\n  }\n\n  input {\n    flex: 1;\n    color: var(--gainsboro);\n    background-color: transparent;\n    border: none;\n    outline: none;\n\n    &::placeholder {\n      font-style: italic;\n      color: var(--gainsboro);\n      opacity: 0.5;\n    }\n  }\n\n  @media (max-width: 768px) {\n    padding: 0.75rem 1.5rem;\n\n    ","\n  }\n"]);return U=function(){return n},n}var J=b.c.div(U(),(function(n){return n.hasFocus&&Object(b.b)(H())}),(function(n){return n.hasError&&Object(b.b)(G())}),(function(n){return n.hasValue&&Object(b.b)(V())}),(function(n){return n.hasError&&Object(b.b)(_())}),(function(n){return n.hasError&&Object(b.b)(Y())})),Q=function(n){var e=n.name,t=n.icon,a=n.className,i=Object(m.a)(n,["name","icon","className"]),c=Object(o.useRef)(null),s=Object(o.useState)(!1),d=Object(l.a)(s,2),h=d[0],b=d[1],f=Object(o.useState)(!1),g=Object(l.a)(f,2),p=g[0],j=g[1],v=Object(o.useState)(!1),x=Object(l.a)(v,2),y=x[0],O=x[1],w=Object(D.c)(e),k=w.fieldName,z=w.defaultValue,C=w.error,S=w.registerField,L=Object(o.useCallback)((function(){var n;return null===(n=c.current)||void 0===n?void 0:n.focus()}),[]),F=Object(o.useCallback)((function(){b(!0),O(!1)}),[]),N=Object(o.useCallback)((function(){var n,e;b(!1),j(!!(null===(n=c.current)||void 0===n?void 0:n.value)),(null===(e=c.current)||void 0===e?void 0:e.value)?O(!1):O(!0)}),[]),E=Object(o.useCallback)((function(n){j(!!n.target.value),n.target.value?O(!1):O(!0)}),[]);return Object(o.useEffect)((function(){S({name:k,ref:c.current,path:"value"})}),[k,S]),Object(o.useEffect)((function(){O(!!C)}),[C]),Object(r.jsxs)(J,{className:a,hasFocus:h,hasValue:p,hasError:!!C&&y,"data-error":C,onClick:L,children:[t&&Object(r.jsx)(t,{onClick:L}),Object(r.jsx)("input",Object(u.a)({ref:c,name:e,defaultValue:z,onFocus:F,onBlur:N,onChange:E},i))]})};function $(n){var e,t={};return(null===(e=n.inner)||void 0===e?void 0:e.length)?n.inner.forEach((function(n){t[n.path]=n.message})):t[n.path]=n.message,t}var Z=t(51),K=t.n(Z),nn=[{id:0,icon:"RiSeedlingLine",title:"Begin from the Start",body:["Don\u2019t worry about not having enough experience: wherever you are in","your journey, we\u2019re along for the whole ride, from doubt to a clearer","vision of what it is that you want to do in life. It\u2019ll take effort","and we\u2019ve got your back."].join(" ")},{id:1,icon:"RiAwardLine",title:"Qualified Mentors",body:["Over 300 certified professionals from the most diverse fields of","knowledge, chosen specifically for their skills in helping others find","their strengths and weaknesses, as well as ways to harness the former","and grow from the latter."].join(" ")},{id:2,icon:"RiBankLine",title:"A Thriving Community",body:["Engage in meaningful discussions with your fellow mentorees, sharing","your experiences in video chat rooms moderated by our team of mentors."].join(" ")},{id:3,icon:"RiQuestionnaireLine",title:"Feel Free to Ask",body:["The only bad question is the one you don\u2019t make. Forums, chat rooms","e-mail, online chat support, phone hotlines, and social media: pick one","and we\u2019ll be there to help you find the answers you\u2019re looking for; be","it about your likes or your dreams, or anything really."].join(" ")},{id:4,icon:"RiFileList3Line",title:"Effective Techniques",body:["From lists to mind maps, our researchers have gathered a veritable","treasure trove of methods and techniques you can use to make your first","steps more manageable. They *will* find what works for you."].join(" ")},{id:5,icon:"RiStarLine",title:"Varied Activities",body:["When the way forward seems foggy, try something different: we have","plenty of activities on offer, so many that *something* will be new","enough to you that it may provide some insight on where to go next."].join(" ")},{id:6,icon:"RiSearchEyeLine",title:"Look Inward",body:["Everyone has their own rhythm, and of course so do you: at any point","during your journey, you can ask for a pause of reflection. Our mentors","will be ready for you whenever you feel ready to get back on the road."].join(" ")},{id:7,icon:"RiLightbulbLine",title:"Bring Your Ideas",body:["Just as we are here to hear about your doubts and struggles, we\u2019re","always open to learning more about what you already know and are good","at. Who knows how many of your fellow Selflanders you could help by","sharing?"].join(" ")},{id:8,icon:"RiCustomerService2Line",title:"Personalized Help",body:["Your needs are just that&mdash;*your* needs. Our mentors are prepared","to give you the assistance *you* need to achieve your true potential."].join(" ")},{id:9,icon:"RiLineChartLine",title:"Assured Growth",body:["Every developer who took part in our program can attest to its","effectiveness. We and our team of mentors are here to help you find who","you are so that you can find where you can go from there."].join(" ")},{id:10,icon:"RiServiceLine",title:"Grow Further By Helping",body:["Pay it forward: there's always someone arriving at the step you just","left, and we offer you the tools to further improve your soft skills","by co-mentoring our newcomers. If this interests you, ask your mentors","about this part of the program when you reach level 2."].join(" ")}];function en(){var n=Object(h.a)(["\n  from {\n    opacity: 0;\n    transform: translateX(5rem);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n"]);return en=function(){return n},n}function tn(){var n=Object(h.a)(["\n  from {\n    opacity: 0;\n    transform: translateX(-5rem);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n"]);return tn=function(){return n},n}function rn(){var n=Object(h.a)(["\n  from {\n    opacity: 0;\n    transform: translateY(5rem) scale(0.75);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n"]);return rn=function(){return n},n}var on=Object(b.d)(rn()),an=Object(b.d)(tn()),cn=Object(b.d)(en());function sn(){var n=Object(h.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-content: flex-start;\n  align-items: stretch;\n  margin: -0.75rem;\n  list-style-type: none;\n\n  .card {\n    display: flex;\n    flex-direction: column;\n    width: calc(33% - 1.5rem);\n    margin: 0.75rem;\n    padding: 1.5rem;\n    background-color: rgba(0, 0, 0, 0.3);\n    border: 0.1rem solid var(--gainsboro-ghost);\n    border-radius: var(--length-border-radius);\n    box-shadow: 0 0 0 transparent;\n    transition: box-shadow 0.2s, border-color 0.2s, transform 0.2s;\n    animation: "," 1s;\n\n    &:hover {\n      border-color: var(--gainsboro);\n      box-shadow: 0 0 10px var(--gamboge);\n      transform: translateY(-0.4rem);\n    }\n\n    header {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      margin-bottom: 1.5rem;\n      color: var(--gamboge);\n\n      svg {\n        width: 3rem;\n        height: 3rem;\n        margin: 1.5rem 0;\n      }\n\n      h4 {\n        font-weight: normal;\n      }\n    }\n\n    p {\n      text-align: center;\n      font-size: 1.6rem;\n      line-height: 2.4rem;\n    }\n\n    @media (max-width: 1024px) {\n      width: calc(50% - 1.5rem);\n    }\n\n    @media (max-width: 640px) {\n      width: calc(100% - 1.5rem);\n\n      header {\n        flex-direction: row;\n        justify-content: center;\n        margin-bottom: 0.75rem;\n\n        svg {\n          width: 2rem;\n          height: 2rem;\n          margin: 0 0.75rem;\n        }\n      }\n    }\n  }\n"]);return sn=function(){return n},n}var ln=b.c.article(sn(),on),dn=function(){return Object(r.jsx)(ln,{children:nn.map((function(n){var e=d[n.icon];return Object(r.jsxs)("section",{className:"card",children:[Object(r.jsxs)("header",{children:[Object(r.jsx)(e,{}),Object(r.jsx)("h4",{children:n.title})]}),Object(r.jsx)(K.a,{source:n.body,escapeHtml:!0})]},n.id)}))})};function un(){var n=Object(h.a)(["\n  flex-shrink: 0;\n  height: 15rem;\n  border-bottom: 1px solid #ffffff20;\n  box-shadow: inset 0 0px 10px 10px #000000aa;\n  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#212121+1,090909+75 */\n  background: #212121; /* Old browsers */\n  background: -moz-radial-gradient(\n    center,\n    ellipse cover,\n    #212121 1%,\n    #090909 75%\n  ); /* FF3.6-15 */\n  background: -webkit-radial-gradient(\n    center,\n    ellipse cover,\n    #212121 1%,\n    #090909 75%\n  ); /* Chrome10-25,Safari5.1-6 */\n  background: radial-gradient(\n    ellipse at center,\n    #212121 1%,\n    #090909 75%\n  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#212121', endColorstr='#090909',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */\n\n  .center {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n    animation: "," 1s;\n  }\n\n  p {\n    display: flex;\n    color: var(--gainsboro-dark);\n\n    span + span {\n      margin-left: 0.75rem;\n    }\n\n    strong,\n    em {\n      color: var(--gainsboro);\n    }\n\n    strong {\n      font-family: 'Cinzel Decorative', serif;\n    }\n\n    em {\n      font-variant: small-caps;\n      font-style: normal;\n    }\n\n    @media (max-width: 400px) {\n      flex-direction: column;\n      align-items: center;\n\n      span + span {\n        margin-left: 0;\n        margin-top: 0.5rem;\n      }\n    }\n  }\n\n  @media (max-width: 640px) {\n    height: 7.5rem;\n  }\n"]);return un=function(){return n},n}var mn=b.c.header(un(),on),hn=function(){return Object(r.jsx)(mn,{children:Object(r.jsx)("div",{className:"center",children:Object(r.jsxs)("p",{children:[Object(r.jsx)("span",{children:"Made with \ud83d\udc9b by"}),Object(r.jsxs)("span",{children:[Object(r.jsx)("strong",{children:"Selfland"})," ",Object(r.jsx)("em",{children:"Mentorships"})]})]})})})};function bn(){var n=Object(h.a)(["\n  flex-shrink: 0;\n  height: 30rem;\n  border-bottom: 1px solid #ffffff20;\n  box-shadow: inset 0 0px 10px 10px #000000aa;\n  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#002642+1,02040f+75 */\n  background: #002642; /* Old browsers */\n  background: -moz-radial-gradient(\n    center,\n    ellipse cover,\n    #002642 1%,\n    #02040f 75%\n  ); /* FF3.6-15 */\n  background: -webkit-radial-gradient(\n    center,\n    ellipse cover,\n    #002642 1%,\n    #02040f 75%\n  ); /* Chrome10-25,Safari5.1-6 */\n  background: radial-gradient(\n    ellipse at center,\n    #002642 1%,\n    #02040f 75%\n  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#002642', endColorstr='#02040f',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */\n\n  .center {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n    animation: "," 1s;\n  }\n\n  h1 {\n    line-height: 12rem;\n    font-size: 12rem;\n    font-weight: normal;\n    text-shadow: 0 0.5rem 1rem #000000aa;\n  }\n\n  h2 {\n    margin-top: -1.25rem;\n    text-transform: uppercase;\n    font-family: 'Averia Serif Libre', serif;\n    font-weight: normal;\n    letter-spacing: 2.55rem;\n    opacity: 0.54;\n  }\n\n  em {\n    font-size: 3rem;\n    color: var(--gamboge);\n    opacity: 0.66;\n  }\n\n  @media (max-width: 1024px) {\n    height: 20rem;\n\n    h1 {\n      line-height: 8rem;\n      font-size: 8rem;\n    }\n\n    h2 {\n      margin-top: -0.825rem;\n      font-size: 1.4rem;\n      letter-spacing: 1.9rem;\n    }\n\n    em {\n      font-size: 2rem;\n    }\n  }\n\n  @media (max-width: 640px) {\n    display: none;\n  }\n"]);return bn=function(){return n},n}var fn=b.c.header(bn(),on),gn=function(){return Object(r.jsx)(fn,{children:Object(r.jsxs)("div",{className:"center",children:[Object(r.jsx)("h1",{children:"Selfland"}),Object(r.jsx)("h2",{children:"Mentorships"}),Object(r.jsx)("em",{children:"You are your first step."})]})})},pn=t.p+"static/media/landing-background.0e8fa6b5.png";function jn(){var n=Object(h.a)(["\n  position: absolute;\n  bottom: 1rem;\n  right: 1rem;\n  white-space: nowrap;\n  font-size: 1rem;\n  opacity: 0.5;\n  transition: opacity 0.2s;\n\n  &:hover {\n    opacity: 1;\n  }\n\n  * {\n    display: inline;\n  }\n\n  @media (max-width: 680px) {\n    bottom: 0.5rem;\n    right: 0.5rem;\n  }\n"]);return jn=function(){return n},n}function vn(){var n=Object(h.a)(["\n  flex: 1;\n  position: relative;\n  padding: 4rem;\n\n  &::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-attachment: fixed;\n    background-image: url(",");\n    background-position: center center;\n    background-size: cover;\n    filter: saturate(0%) sepia(100%) hue-rotate(180deg) brightness(30%)\n      saturate(200%);\n  }\n\n  .center {\n    position: relative;\n  }\n\n  @media (max-width: 680px) {\n    padding: 3rem;\n\n    .center {\n      padding: 0;\n    }\n  }\n\n  @media (max-width: 640px) {\n    padding: 2rem;\n  }\n"]);return vn=function(){return n},n}var xn=b.c.main(vn(),pn),yn=b.c.aside(jn()),On=function(n){var e=n.children;return Object(r.jsxs)(xn,{className:"content",children:[Object(r.jsx)("div",{className:"center",children:e}),Object(r.jsx)(yn,{children:Object(r.jsxs)("span",{children:["Photo by"," ",Object(r.jsx)("a",{href:"https://unsplash.com/@wocintechchat?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:"Christina @ wocintechchat.com"})," ","on"," ",Object(r.jsx)("a",{href:"https://unsplash.com/s/photos/developer?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:"Unsplash"})]})})]})};function wn(){var n=Object(h.a)(["\n  position: relative;\n  background-color: black;\n  border: solid var(--gainsboro-ghost);\n  border-width: 0.1rem 0;\n  box-shadow: inset 0 0px 10px 10px #000000aa;\n\n  .center {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 3rem;\n\n    h1 {\n      font-weight: normal;\n      text-transform: lowercase;\n\n      @media (max-width: 1024px) {\n        font-size: 3rem;\n      }\n\n      @media (max-width: 600px) {\n        font-size: 2rem;\n      }\n    }\n\n    section {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      width: 100%;\n      padding: 0.5rem;\n\n      img {\n        height: 3rem;\n        margin: 2.5rem;\n\n        &[alt='macrohard'] {\n          height: 5rem;\n        }\n\n        &[alt='mugpad'] {\n          height: 4rem;\n        }\n      }\n\n      @media (max-width: 1024px) {\n        flex-wrap: wrap;\n\n        img {\n          height: 2rem;\n          margin: 1.65rem;\n\n          &[alt='macrohard'] {\n            height: 3.3rem;\n          }\n\n          &[alt='mugpad'] {\n            height: 2.64rem;\n          }\n        }\n      }\n\n      @media (max-width: 600px) {\n        flex-wrap: wrap;\n\n        img {\n          height: 1.32rem;\n          margin: 1rem;\n\n          &[alt='macrohard'] {\n            height: 2.178rem;\n          }\n\n          &[alt='mugpad'] {\n            height: 1.7424rem;\n          }\n        }\n      }\n    }\n\n    @media (max-width: 680px) {\n      padding: 2rem 2rem 0;\n    }\n\n    @media (max-width: 640px) {\n      padding: 1rem 1rem 0;\n    }\n  }\n"]);return wn=function(){return n},n}var kn=b.c.div(wn()),zn=t.p+"static/media/garnet-logo.9dd36403.svg",Cn=t.p+"static/media/hal-logo.7b008512.svg",Sn=t.p+"static/media/lentil-logo.bf6cfd8c.svg",Ln=t.p+"static/media/macrohard-logo.b2d44a42.svg",Fn=t.p+"static/media/mugpad-logo.7a55243c.svg",Nn=function(){return Object(r.jsx)(kn,{children:Object(r.jsxs)("div",{className:"center",children:[Object(r.jsx)("h1",{children:"Partners"}),Object(r.jsxs)("section",{children:[Object(r.jsx)("img",{src:zn,alt:"garnet"}),Object(r.jsx)("img",{src:Cn,alt:"hal"}),Object(r.jsx)("img",{src:Sn,alt:"lentil"}),Object(r.jsx)("img",{src:Ln,alt:"macrohard"}),Object(r.jsx)("img",{src:Fn,alt:"mugpad"})]})]})})};function En(){var n=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  height: calc(100vh - 5rem);\n  background-color: black;\n  overflow: auto;\n\n  .content {\n    blockquote {\n      text-align: center;\n      font-size: 2rem;\n      font-style: italic;\n      animation: "," 1s;\n\n      strong {\n        display: block;\n        margin-top: 1rem;\n        font-weight: normal;\n        font-style: normal;\n        font-size: 1.6rem;\n        opacity: 0.54;\n      }\n\n      @media (max-width: 600px) {\n        font-size: 1.6rem;\n\n        strong {\n          font-size: 1.4rem;\n        }\n      }\n    }\n\n    h3,\n    form {\n      animation: "," 1s;\n    }\n\n    h3 {\n      text-align: center;\n\n      @media (max-width: 768px) {\n        font-size: 1.8rem;\n      }\n\n      @media (max-width: 374px) {\n        font-size: 1.4rem;\n      }\n    }\n\n    form {\n      display: flex;\n      justify-content: center;\n      padding: 1.5rem 0;\n\n      .input + .input,\n      button {\n        margin-left: 1.5rem;\n      }\n\n      @media (max-width: 768px) {\n        flex-direction: column;\n\n        .input + .input,\n        button {\n          margin-left: 0;\n          margin-top: 1.5rem;\n        }\n      }\n    }\n  }\n"]);return En=function(){return n},n}var Rn=b.c.div(En(),an,cn),Tn=function(){var n=Object(o.useRef)(null),e=Object(o.useCallback)(function(){var e=Object(A.a)(M.a.mark((function e(t){var r,o,a,i;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,null===(r=n.current)||void 0===r||r.setErrors({}),o=W.b().shape({name:W.c().matches(/(^$|^['-\sA-Za-z\u00c0-\u024f\u1e00-\u1eff]+$)/,"This name does not look right"),email:W.c().required("We need your e-mail").email("We need a valid e-mail")}),e.next=5,o.validate(t,{abortEarly:!1});case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),e.t0 instanceof W.a&&(i=$(e.t0),null===(a=n.current)||void 0===a||a.setErrors(i));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),[]);return Object(r.jsxs)(Rn,{children:[Object(r.jsx)(gn,{}),Object(r.jsxs)(On,{children:[Object(r.jsxs)("blockquote",{children:["\u201cIf you do not know where you come from, then you don\u2019t know where you are, and if you don\u2019t know where you are, then you don\u2019t know where you\u2019re going. And if you don\u2019t know where you\u2019re going, you\u2019re probably going wrong.\u201d",Object(r.jsx)("strong",{children:"Terry Pratchett, I Shall Wear Midnight"})]}),Object(r.jsx)("hr",{}),Object(r.jsx)("h3",{children:"We can help you begin your journey towards the best version of you."}),Object(r.jsxs)(P.a,{ref:n,onSubmit:e,children:[Object(r.jsx)(Q,{name:"name",icon:d.RiUser6Line,placeholder:"My name (optional)",className:"input"}),Object(r.jsx)(Q,{name:"email",icon:d.RiMailLine,placeholder:"My e-mail",className:"input"}),Object(r.jsx)(q,{type:"submit",children:"Send"})]}),Object(r.jsx)("hr",{}),Object(r.jsx)(dn,{})]}),Object(r.jsx)(Nn,{}),Object(r.jsx)(hn,{})]})},In=function(){return Object(r.jsx)(T.c,{children:Object(r.jsx)(T.a,{name:"Landing",component:Tn})})},Mn=t(18);function An(){var n=Object(h.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    outline: 0;\n    box-sizing: border-box;\n  }\n\n  html {\n    font-size: 62.5%;\n  }\n\n  body {\n    background-color: black;\n    color: var(--gainsboro);\n    -webkit-font-smoothing: antialiased;\n  }\n\n  body,\n  input,\n  button {\n    font-family: 'Averia Serif Libre', serif;\n    font-size: 1.8rem;\n\n    @media (max-width: 600px) {\n      font-size: 1.4rem;\n    }\n  }\n\n  button {\n    cursor: pointer;\n  }\n\n  a {\n    display: flex;\n    align-items: center;\n    text-decoration: none;\n    color: var(--gamboge);\n    transition: color 0.2s;\n\n    &:hover {\n      color: var(--gamboge-light);\n    }\n\n    svg {\n      width: 2em;\n      height: 2em;\n\n      &:not(:only-child) {\n        margin-right: 1.6em;\n      }\n    }\n  }\n\n  h1, h2 {\n    font-family: 'Cinzel Decorative', serif;\n  }\n\n  h3, h4, h5, h6 {\n    font-family: 'Averia Serif Libre', serif;\n  }\n\n  hr {\n    border: none;\n    width: 50%;\n    height: 0.1rem;\n    background-color: var(--claret);\n    margin: 4rem auto;\n\n    @media (max-width: 768px) {\n      margin: 2rem auto;\n    }\n  }\n\n  .center {\n    width: 100%;\n    max-width: 1200px;\n    margin: 0 auto;\n    padding: 0 2rem;\n  }\n\n  :root {\n    /* @see https://coolors.co/22223b-4a4e69-9a8c98-c9ada7-f2e9e4 */\n    --prussian-blue: #002642;\n    --prussian-blue-dark: ",";\n    --prussian-blue-light: ",";\n    --claret: #840032;\n    --claret-dark: ",";\n    --claret-light: ",";\n    --gamboge: #e59500;\n    --gamboge-light: ",";\n    --gainsboro: #e5dada;\n    --gainsboro-dark: ",";\n    --gainsboro-ghost: ",";\n    --rich-black: #02040f;\n\n    --length-border-radius: 0.3rem;\n  }\n"]);return An=function(){return n},n}var Wn=Object(b.a)(An(),Object(Mn.b)(.2,"#002642"),Object(Mn.a)(.2,"#002642"),Object(Mn.b)(.2,"#840032"),Object(Mn.a)(.2,"#840032"),Object(Mn.a)(.2,"#e59500"),Object(Mn.b)(.3,"#e5dada"),Object(Mn.c)(.8,"#e5dada")),Pn=function(){return Object(r.jsxs)(s.a,{children:[Object(r.jsx)(R,{}),Object(r.jsx)(In,{}),Object(r.jsx)(Wn,{})]})},Xn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,85)).then((function(e){var t=e.getCLS,r=e.getFID,o=e.getFCP,a=e.getLCP,i=e.getTTFB;t(n),r(n),o(n),a(n),i(n)}))};c.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(Pn,{})}),document.getElementById("root")),Xn()}},[[84,1,2]]]);
//# sourceMappingURL=main.61b1887f.chunk.js.map