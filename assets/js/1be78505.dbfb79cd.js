(self.webpackChunk_graphql_mesh_website=self.webpackChunk_graphql_mesh_website||[]).push([[9514,2422],{5318:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(h,l(l({ref:t},u),{},{components:n})):r.createElement(h,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6324:function(e,t){function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,a,o]=t;if(r&&o){r=parseInt(r),o=parseInt(o);const e=r<o?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(o+=e);for(let t=r;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},3796:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Pe}});var r=n(7378),a=n(5318),o=n(2263),l=n(6291),i=n(2827),c=n(9603),s=n(120),u=n(8944),d=n(6568),p=n(2437),m=n(7030),h=n(6936),f=n(2823),b=n(6742),y=n(3919),g=n(712),v=function(e){return r.createElement("svg",(0,c.Z)({width:"20",height:"20",role:"img"},e),r.createElement("g",{fill:"#7a7a7a"},r.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),r.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},k=n(8539),E=n(4973),_="sidebar_2j-V",C="sidebarWithHideableNavbar_2fMR",N="sidebarHidden_1sUd",Z="sidebarLogo_1OGv",j="menu_1Xkn",O="menuLinkText_24Nz",T="menuWithAnnouncementBar_1DU9",x="collapseSidebarButton_2Hma",S="collapseSidebarButtonIcon_1Kc0",w="sidebarMenuIcon_Vtis",P="sidebarMenuCloseIcon_Qs94",I="menuLinkExternal_3RKO",L=["items"],B=["item","onItemClick","collapsible","activePath"],A=["item","onItemClick","activePath","collapsible"];var R=function e(t,n){return"link"===t.type?(0,d.Mg)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))},D=(0,r.memo)((function(e){var t=e.items,n=(0,s.Z)(e,L);return t.map((function(e,t){return r.createElement(M,(0,c.Z)({key:t,item:e},n))}))}));function M(e){switch(e.item.type){case"category":return r.createElement(F,e);case"link":default:return r.createElement(z,e)}}function F(e){var t,n,a,o=e.item,l=e.onItemClick,i=e.collapsible,d=e.activePath,p=(0,s.Z)(e,B),m=o.items,h=o.label,f=R(o,d),b=(n=f,a=(0,r.useRef)(n),(0,r.useEffect)((function(){a.current=n}),[n]),a.current),y=(0,r.useState)((function(){return!!i&&(!f&&o.collapsed)})),g=y[0],v=y[1],k=(0,r.useRef)(null),E=(0,r.useState)(void 0),_=E[0],C=E[1],N=function(e){var t;void 0===e&&(e=!0),C(e?(null==(t=k.current)?void 0:t.scrollHeight)+"px":void 0)};(0,r.useEffect)((function(){f&&!b&&g&&v(!1)}),[f,b,g]);var Z=(0,r.useCallback)((function(e){e.preventDefault(),_||N(),setTimeout((function(){return v((function(e){return!e}))}),100)}),[_]);return 0===m.length?null:r.createElement("li",{className:(0,u.Z)("menu__list-item",{"menu__list-item--collapsed":g})},r.createElement("a",(0,c.Z)({className:(0,u.Z)("menu__link",(t={"menu__link--sublist":i,"menu__link--active":i&&f},t[O]=!i,t)),onClick:i?Z:void 0,href:i?"#!":void 0},p),h),r.createElement("ul",{className:"menu__list",ref:k,style:{height:_},onTransitionEnd:function(){g||N(!1)}},r.createElement(D,{items:m,tabIndex:g?"-1":"0",onItemClick:l,collapsible:i,activePath:d})))}function z(e){var t,n=e.item,a=e.onItemClick,o=e.activePath,l=(e.collapsible,(0,s.Z)(e,A)),i=n.href,d=n.label,p=R(n,o);return r.createElement("li",{className:"menu__list-item",key:d},r.createElement(b.Z,(0,c.Z)({className:(0,u.Z)("menu__link",(t={"menu__link--active":p},t[I]=!(0,y.Z)(i),t)),to:i},(0,y.Z)(i)&&{isNavLink:!0,exact:!0,onClick:a},l),d))}function H(e){var t=e.onClick;return r.createElement("button",{type:"button",title:(0,E.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,E.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,u.Z)("button button--secondary button--outline",x),onClick:t},r.createElement(v,{className:S}))}function U(e){var t=e.responsiveSidebarOpened,n=e.onClick;return r.createElement("button",{"aria-label":t?(0,E.I)({id:"theme.docs.sidebar.responsiveCloseButtonLabel",message:"Close menu",description:"The ARIA label for close button of mobile doc sidebar"}):(0,E.I)({id:"theme.docs.sidebar.responsiveOpenButtonLabel",message:"Open menu",description:"The ARIA label for open button of mobile doc sidebar"}),"aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:n},t?r.createElement("span",{className:(0,u.Z)(w,P)},"\xd7"):r.createElement(k.Z,{className:w,height:24,width:24}))}var W=function(e){var t,n,a=e.path,o=e.sidebar,l=e.sidebarCollapsible,i=void 0===l||l,c=e.onCollapse,s=e.isHidden,b=function(){var e=(0,p.Z)().isAnnouncementBarClosed,t=(0,r.useState)(!e),n=t[0],a=t[1];return(0,f.Z)((function(t){var n=t.scrollY;e||a(0===n)})),n}(),y=(0,d.LU)(),v=y.navbar.hideOnScroll,k=y.hideableSidebar,E=(0,p.Z)().isAnnouncementBarClosed,O=function(){var e=(0,r.useState)(!1),t=e[0],n=e[1];(0,m.Z)(t);var a=(0,h.Z)();return(0,r.useEffect)((function(){a===h.D.desktop&&n(!1)}),[a]),{showResponsiveSidebar:t,closeResponsiveSidebar:(0,r.useCallback)((function(e){e.target.blur(),n(!1)}),[n]),toggleResponsiveSidebar:(0,r.useCallback)((function(){n((function(e){return!e}))}),[n])}}(),x=O.showResponsiveSidebar,S=O.closeResponsiveSidebar,w=O.toggleResponsiveSidebar;return r.createElement("div",{className:(0,u.Z)(_,(t={},t[C]=v,t[N]=s,t))},v&&r.createElement(g.Z,{tabIndex:-1,className:Z}),r.createElement("div",{className:(0,u.Z)("menu","menu--responsive","thin-scrollbar",j,(n={"menu--show":x},n[T]=!E&&b,n))},r.createElement(U,{responsiveSidebarOpened:x,onClick:w}),r.createElement("ul",{className:"menu__list"},r.createElement(D,{items:o,onItemClick:S,collapsible:i,activePath:a}))),k&&r.createElement(H,{onClick:c}))},V={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},$={Prism:n(2349).Z,theme:V};function q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function K(){return(K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var X=/\r\n|\r|\n/,Y=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},G=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},Q=function(e,t){var n=e.plain,r=Object.create(null),a=e.styles.reduce((function(e,n){var r=n.languages,a=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=K({},e[t],a);e[t]=n})),e}),r);return a.root=n,a.plain=K({},n,{backgroundColor:null}),a};function J(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var ee=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),q(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?Q(e.theme,e.language):void 0;return t.themeDict=n})),q(this,"getLineProps",(function(e){var n=e.key,r=e.className,a=e.style,o=K({},J(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(o.style=l.plain),void 0!==a&&(o.style=void 0!==o.style?K({},o.style,a):a),void 0!==n&&(o.key=n),r&&(o.className+=" "+r),o})),q(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,a=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===a&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===a&&!r)return o[n[0]];var l=r?{display:"inline-block"}:{},i=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(i))}})),q(this,"getTokenProps",(function(e){var n=e.key,r=e.className,a=e.style,o=e.token,l=K({},J(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==a&&(l.style=void 0!==l.style?K({},l.style,a):a),void 0!==n&&(l.key=n),r&&(l.className+=" "+r),l})),q(this,"tokenize",(function(e,t,n,r){var a={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",a);var o=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,a=e.children,o=this.getThemeDict(this.props),l=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],r=[0],a=[e.length],o=0,l=0,i=[],c=[i];l>-1;){for(;(o=r[l]++)<a[l];){var s=void 0,u=t[l],d=n[l][o];if("string"==typeof d?(u=l>0?u:["plain"],s=d):(u=G(u,d.type),d.alias&&(u=G(u,d.alias)),s=d.content),"string"==typeof s){var p=s.split(X),m=p.length;i.push({types:u,content:p[0]});for(var h=1;h<m;h++)Y(i),c.push(i=[]),i.push({types:u,content:p[h]})}else l++,t.push(u),n.push(s),r.push(0),a.push(s.length)}l--,t.pop(),n.pop(),r.pop(),a.pop()}return Y(i),c}(void 0!==l?this.tokenize(t,r,l,n):[r]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component);var te=n(6324),ne=n.n(te),re={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},ae=n(1164),oe=function(){var e=(0,d.LU)().prism,t=(0,ae.Z)().isDarkTheme,n=e.theme||re,r=e.darkTheme||n;return t?r:n},le="codeBlockContainer_1ukp",ie="codeBlockContent_3Y8q",ce="codeBlockTitle_befg",se="codeBlock_2Xgr",ue="codeBlockWithTitle_FyOu",de="copyButton_1mju",pe="codeBlockLines_3Zfi",me=/{([\d,-]+)}/,he=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),r=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+r+")\\s*$")};function fe(e){var t=e.children,n=e.className,a=e.metastring,o=e.title,l=(0,d.LU)().prism,i=(0,r.useState)(!1),s=i[0],p=i[1],m=(0,r.useState)(!1),h=m[0],f=m[1];(0,r.useEffect)((function(){f(!0)}),[]);var b=(0,d.bc)(a)||o,y=(0,r.useRef)(null),g=[],v=oe(),k=Array.isArray(t)?t.join(""):t;if(a&&me.test(a)){var _=a.match(me)[1];g=ne()(_).filter((function(e){return e>0}))}var C=n&&n.replace(/language-/,"");!C&&l.defaultLanguage&&(C=l.defaultLanguage);var N=k.replace(/\n$/,"");if(0===g.length&&void 0!==C){for(var Z,j="",O=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return he(["js","jsBlock"]);case"jsx":case"tsx":return he(["js","jsBlock","jsx"]);case"html":return he(["js","jsBlock","html"]);case"python":case"py":return he(["python"]);default:return he()}}(C),T=k.replace(/\n$/,"").split("\n"),x=0;x<T.length;){var S=x+1,w=T[x].match(O);if(null!==w){switch(w.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":j+=S+",";break;case"highlight-start":Z=S;break;case"highlight-end":j+=Z+"-"+(S-1)+","}T.splice(x,1)}else x+=1}g=ne()(j),N=T.join("\n")}var P=function(){!function(e,t){var n=(void 0===t?{}:t).target,r=void 0===n?document.body:n,a=document.createElement("textarea"),o=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";var l=document.getSelection(),i=!1;l.rangeCount>0&&(i=l.getRangeAt(0)),r.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;var c=!1;try{c=document.execCommand("copy")}catch(s){}a.remove(),i&&(l.removeAllRanges(),l.addRange(i)),o&&o.focus()}(N),p(!0),setTimeout((function(){return p(!1)}),2e3)};return r.createElement(ee,(0,c.Z)({},$,{key:String(h),theme:v,code:N,language:C}),(function(e){var t,n=e.className,a=e.style,o=e.tokens,l=e.getLineProps,i=e.getTokenProps;return r.createElement("div",{className:le},b&&r.createElement("div",{style:a,className:ce},b),r.createElement("div",{className:(0,u.Z)(ie,C)},r.createElement("div",{tabIndex:0,className:(0,u.Z)(n,se,"thin-scrollbar",(t={},t[ue]=b,t))},r.createElement("div",{className:pe,style:a},o.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=l({line:e,key:t});return g.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),r.createElement("div",(0,c.Z)({key:t},n),e.map((function(e,t){return r.createElement("span",(0,c.Z)({key:t},i({token:e,key:t})))})))})))),r.createElement("button",{ref:y,type:"button","aria-label":(0,E.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,u.Z)(de),onClick:P},s?r.createElement(E.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):r.createElement(E.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}var be="enhancedAnchor_2Cjg",ye=["id"],ge=function(e){return function(t){var n,a=t.id,o=(0,s.Z)(t,ye),l=(0,d.LU)().navbar.hideOnScroll;return a?r.createElement(e,o,r.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,u.Z)("anchor",(n={},n[be]=!l,n)),id:a}),o.children,r.createElement("a",{className:"hash-link",href:"#"+a,title:(0,E.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):r.createElement(e,o)}},ve={code:function(e){var t=e.children;return(0,r.isValidElement)(t)?t:t.includes("\n")?r.createElement(fe,e):r.createElement("code",e)},a:function(e){return r.createElement(b.Z,e)},pre:function(e){var t,n=e.children;return(0,r.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?null==n?void 0:n.props.children:r.createElement(fe,(0,r.isValidElement)(n)?null==n?void 0:n.props:{children:n})},h1:ge("h1"),h2:ge("h2"),h3:ge("h3"),h4:ge("h4"),h5:ge("h5"),h6:ge("h6")},ke=n(2422),Ee=n(9635),_e="docPage_3jyA",Ce="docMainContainer_28SP",Ne="docMainContainerEnhanced_YA74",Ze="docSidebarContainer_3jRz",je="docSidebarContainerHidden_2b_F",Oe="collapsedDocSidebar_KeEu",Te="expandSidebarButtonIcon_1pq6",xe="docItemWrapperEnhanced_2IZb",Se="docItemWrapper_3ZSj";function we(e){var t,n,l,c,s,p=e.currentDocRoute,m=e.versionMetadata,h=e.children,f=(0,o.Z)(),b=f.siteConfig,y=f.isClient,g=m.pluginId,k=m.permalinkToSidebar,_=m.docsSidebars,C=m.version,N=k[p.path],Z=_[N],j=(0,r.useState)(!1),O=j[0],T=j[1],x=(0,r.useState)(!1),S=x[0],w=x[1],P=(0,r.useCallback)((function(){S&&w(!1),T(!O)}),[S]);return r.createElement(i.Z,{key:y,wrapperClassName:d.kM.wrapper.docPages,pageClassName:d.kM.page.docPage,searchMetadatas:{version:C,tag:(0,d.os)(g,C)}},r.createElement("div",{className:_e},Z&&r.createElement("div",{className:(0,u.Z)(Ze,(t={},t[je]=O,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(Ze)&&O&&w(!0)},role:"complementary"},r.createElement(W,{key:N,sidebar:Z,path:p.path,sidebarCollapsible:null==(n=null==(l=b.themeConfig)?void 0:l.sidebarCollapsible)||n,onCollapse:P,isHidden:S}),S&&r.createElement("div",{className:Oe,title:(0,E.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,E.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:P,onClick:P},r.createElement(v,{className:Te}))),r.createElement("main",{className:(0,u.Z)(Ce,(c={},c[Ne]=O||!Z,c))},r.createElement("div",{className:(0,u.Z)("container padding-vert--lg",Se,(s={},s[xe]=O,s))},r.createElement(a.Zo,{components:ve},h)))))}var Pe=function(e){var t=e.route.routes,n=e.versionMetadata,a=e.location,o=t.find((function(e){return(0,Ee.LX)(a.pathname,e)}));return o?r.createElement(we,{currentDocRoute:o,versionMetadata:n},(0,l.Z)(t)):r.createElement(ke.default,e)}},2422:function(e,t,n){"use strict";n.r(t);var r=n(7378),a=n(2827),o=n(4973);t.default=function(){return r.createElement(a.Z,{title:"Page Not Found"},r.createElement("main",{className:"container margin-vert--xl"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--6 col--offset-3"},r.createElement("h1",{className:"hero__title"},r.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),r.createElement("p",null,r.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),r.createElement("p",null,r.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);