(function(e,r){typeof exports=="object"&&typeof module!="undefined"?module.exports=r(require("vue")):typeof define=="function"&&define.amd?define(["vue"],r):(e=typeof globalThis!="undefined"?globalThis:e||self,e.MyLib=r(e.Vue))})(this,function(e){"use strict";var r="",c=(t,s)=>{const o=t.__vccOpts||t;for(const[a,n]of s)o[a]=n;return o};const _={},l={class:"card-item",role:"listitem"},i={href:"javascript:void(0);",target:"_blank",class:"item-link"},d={class:"img-wrapper"},p=e.createTextVNode("image slot"),m={class:"info-wrapper"},f={class:"title"},g=e.createTextVNode("title slot"),h=e.createTextVNode("under title slot"),k={class:"price-wrapper"},y=e.createTextVNode("price slot");function V(t,s){return e.openBlock(),e.createElementBlock("div",l,[e.createElementVNode("a",i,[e.createElementVNode("div",d,[e.renderSlot(t.$slots,"image",{},()=>[p])]),e.createElementVNode("div",m,[e.createElementVNode("div",f,[e.renderSlot(t.$slots,"title",{},()=>[g])]),e.createElementVNode("div",null,[e.renderSlot(t.$slots,"under-title",{},()=>[h])])]),e.createElementVNode("div",k,[e.renderSlot(t.$slots,"price",{},()=>[y])])])])}var x=c(_,[["render",V]]),b="",B=c({__name:"title",props:{msg:String},setup(t){const s=t;return(o,a)=>(e.openBlock(),e.createElementBlock("p",null,e.toDisplayString(s.msg),1))}},[["__scopeId","data-v-c9d794a6"]]),$="";const N={class:"tag-list"};var E=c({__name:"tags",props:{tags:{type:Array,default:()=>[]}},setup(t){const s=t;return(o,a)=>(e.openBlock(),e.createElementBlock("div",N,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(s.tags,n=>(e.openBlock(),e.createElementBlock("div",{class:"tag-item",key:n},e.toDisplayString(n),1))),128))]))}},[["__scopeId","data-v-2d1bbb86"]]),u={setup(t){return(s,o)=>(e.openBlock(),e.createBlock(x,null,{title:e.withCtx(()=>[e.createVNode(B,{msg:"\u7F6E\u7269\u67B6\u4E0D\u9508\u94A2\u8272\u50A8\u7269\u67B6\u53A8\u623F\u4E94\u5C42\u843D\u5730\u53EF\u8C03\u8282\u6536\u7EB3\u67B6\u8D27\u67B6\u9633\u53F0\u591A\u5C42\u67B6\u5B50"})]),"under-title":e.withCtx(()=>[e.createVNode(E,{tags:["123","321"]})]),_:1}))}};return u});