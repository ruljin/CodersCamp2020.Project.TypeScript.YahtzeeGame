(()=>{"use strict";var e={563:(e,t,r)=>{r.r(t)},870:(e,t,r)=>{r.r(t)},53:(e,t,r)=>{r.r(t)},236:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=class{constructor(e){this.root=e}checkPath(e){return""===e?""===window.location.hash:window.location.hash===`#/${e}`}clearRoot(){this.root.innerHTML=""}renderComponent(e){this.root.appendChild(e)}addHashChangeListener(e){window.addEventListener("hashchange",e,!1)}}},862:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createElementFromString=void 0,t.createElementFromString=function(e){const t=document.createElement("div");t.innerHTML=e;const r=t.firstElementChild;if(null===r)throw"Incorrect argument";return r}},185:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),r(563);const n=r(862),o=r(547);t.default=class{constructor(){this.componentElement=document.createElement("null")}render(){return"<null></null>"===this.componentElement.outerHTML&&(this.componentElement=n.createElementFromString(`\n        <header class="logo">\n          <a href="#">\n            <img src="${o}" alt="logo" />\n          </a>\n        </header>\n      `)),this.componentElement}setup(){}deleteLink(){this.componentElement.querySelector("a").removeAttribute("href")}}},286:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),r(870);const n=r(862);t.default=class{render(){return n.createElementFromString('<p class="my-p" id="myP">sample text</p>')}setup(){document.querySelector("#myP").addEventListener("click",this.toggleColor)}toggleColor(e){e.currentTarget.classList.toggle("my-p")}}},607:(e,t,r)=>{r(53);const n=r(286),o=r(236),c=r(862),l=r(185),a=new o.default(document.querySelector("#root"));function i(){if(a.checkPath(""))a.clearRoot(),a.renderComponent(c.createElementFromString('<a href="#/sample">Go to sample component</a>'));else if(a.checkPath("sample")){a.clearRoot();const e=new l.default;a.renderComponent(e.render());const t=new n.default;a.renderComponent(t.render()),t.setup(),a.renderComponent(c.createElementFromString('<a href="#">Go back</a>'))}}i(),a.addHashChangeListener(i)},547:(e,t,r)=>{e.exports=r.p+"89773aa5fd09f4d6040f.svg"}},t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),r(607)})();