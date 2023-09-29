import{r,j as e}from"./index-94af109f.js";const i=()=>{const[s,o]=r.useState(!1),[t,l]=r.useState(!1),[a,n]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{"aria-label":"Toggle navigation menu",className:`${s?"bg-X w-[26px] h-[26px]":"bg-hamburger w-[32px] h-[18px]"} bg-no-repeat   absolute top-5 right-5 z-50 custom:hidden`,onClick:()=>{o(!s)}}),e.jsx("div",{id:"overlay",className:`${s?"translate-x-0":"-translate-x-full"} custom:hidden`,onClick:()=>o(!1)}),e.jsxs("div",{id:"nav-container",className:`flex grow ${s?"translate-x-0":"translate-x-full"} justify-between custom:translate-x-0 bg-white text-MediumGray`,children:[e.jsx("nav",{id:"mobile-nav",children:e.jsxs("ul",{className:"flex gap-8",children:[e.jsxs("li",{className:"relative hover:cursor-pointer hover:text-AlmostBlack",onClick:()=>{l(!t)},children:["Features",e.jsx("span",{className:`${t?"rotate-180":"rotate-0"} transition-transform ease-linear duration-100 w-[10px] h-[6px] mb-[3px] ml-2`,style:{content:"url(images/icon-arrow-down.svg)"}}),e.jsxs("ul",{id:"features-dropdown",className:`dropdown ${t?"block":"hidden"} dropdown custom:absolute custom:py-4 custom:px-6 custom:w-max  custom:rounded-lg custom:mt-4`,children:[e.jsx("li",{className:"mb-2 before:mr-3 before:relative before:top-[1px] text-MediumGray",children:"Todo List"}),e.jsx("li",{className:"mb-2  before:mr-3 before:relative before:top-[1px] text-MediumGray",children:"Calendar"}),e.jsx("li",{className:"mb-2 before:mr-3 before:relative before:top-[1px] text-MediumGray",children:"Reminders"}),e.jsx("li",{className:"mb-2 before:mr-3 before:relative before:top-[1px] text-MediumGray",children:"Planning"})]})]}),e.jsxs("li",{onClick:()=>{n(!a)},className:"relative hover:cursor-pointer hover:text-AlmostBlack",children:["Company",e.jsx("span",{className:`${a?"rotate-180":"rotate-0"} transition-transform ease-linear duration-100 w-[10px] h-[6px] mb-[3px] ml-2`,style:{content:"url(images/icon-arrow-down.svg)"}}),e.jsxs("ul",{className:` dropdown ${a?"block":"hidden"} dropdown custom:absolute custom:py-4 custom:px-6 custom:w-max  custom:rounded-lg custom:mt-4 ${t?"custom:left-16":"custom:left-0"}`,children:[e.jsx("li",{className:"mb-2 text-MediumGray",children:"History"}),e.jsx("li",{className:"mb-2 text-MediumGray",children:"Our Team"}),e.jsx("li",{className:"mb-2 text-MediumGray",children:"Blog"})]})]}),e.jsx("li",{className:"hover:text-AlmostBlack",children:e.jsx("a",{href:"#",children:"Careers"})}),e.jsx("li",{className:"hover:text-AlmostBlack",children:e.jsx("a",{href:"#",children:"About"})})]})}),e.jsxs("div",{id:"buttons",children:[e.jsx("button",{className:"mr-8 hover:text-AlmostBlack",children:"Login"}),e.jsx("button",{className:"mr-8 border-2 border-MediumGray hover:text-AlmostBlack hover:border-AlmostBlack",children:"Register"})]})]})]})},c=()=>e.jsxs("header",{className:"flex items-center gap-8 py-5 px-5 custom:px-8",children:[e.jsx("div",{id:"logo-container",children:e.jsx("img",{src:"images/logo.svg",alt:"LOGO",className:"w-[84px] h-[27px] "})}),e.jsx(i,{})]});export{c as default};