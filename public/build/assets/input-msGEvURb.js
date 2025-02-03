import{d as v,g as b,r as i,j as u}from"./app-IXPwkiJ8.js";import{S as w,c as x}from"./theme-provider-C7uny5Vn.js";var d=v();const R=b(d);var g=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],k=g.reduce((r,e)=>{const t=i.forwardRef((o,n)=>{const{asChild:s,...a}=o,l=s?w:e;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),u.jsx(l,{...a,ref:n})});return t.displayName=`Primitive.${e}`,{...r,[e]:t}},{});function D(r,e){r&&d.flushSync(()=>r.dispatchEvent(e))}/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),c=(...r)=>r.filter((e,t,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var y={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=i.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:o,className:n="",children:s,iconNode:a,...l},m)=>i.createElement("svg",{ref:m,...y,width:e,height:e,stroke:r,strokeWidth:o?Number(t)*24/Number(e):t,className:c("lucide",n),...l},[...a.map(([f,p])=>i.createElement(f,p)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=(r,e)=>{const t=i.forwardRef(({className:o,...n},s)=>i.createElement(C,{ref:s,iconNode:e,className:c(`lucide-${h(r)}`,o),...n}));return t.displayName=`${r}`,t},E=i.forwardRef(({className:r,type:e,...t},o)=>u.jsx("input",{type:e,className:x("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",r),ref:o,...t}));E.displayName="Input";export{E as I,k as P,I as c,D as d,d as r,R as v};
