import{j as s,r as i}from"./app-IXPwkiJ8.js";import{B as c,c as u,a as f}from"./theme-provider-C7uny5Vn.js";import{c as m,P as x}from"./input-msGEvURb.js";/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=m("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);function g({className:e,variant:t,size:a,loading:o=!1,children:r,...d}){return s.jsxs(c,{variant:t??"default",size:a??"default",className:e,...d,disabled:o,children:[o&&s.jsx(b,{className:"size-4 animate-spin"}),r]})}var L="Label",l=i.forwardRef((e,t)=>s.jsx(x.label,{...e,ref:t,onMouseDown:a=>{var r;a.target.closest("button, input, select, textarea")||((r=e.onMouseDown)==null||r.call(e,a),!a.defaultPrevented&&a.detail>1&&a.preventDefault())}}));l.displayName=L;var n=l;const j=f("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),p=i.forwardRef(({className:e,...t},a)=>s.jsx(n,{ref:a,className:u(j(),e),...t}));p.displayName=n.displayName;export{p as L,g as a};
