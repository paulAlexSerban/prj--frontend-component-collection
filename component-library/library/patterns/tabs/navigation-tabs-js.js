(()=>{"use strict";var t,a,e,n,c,o=function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return Array.prototype.slice.call(a.querySelectorAll(t))},s=function(t,a){return a.classList?a.classList.add(t):"".concat(a.className," ").concat(t)},i=function(t,a){return a.classList?a.classList.remove(t):(a.className=a.className.replace(new RegExp("(^|\\b)".concat(t.split(" ").join("|"),"(\\b|$)"),"gi")," "),a)};t="pat",a="NavigationTabsJs",e={tabButton:".js-tab-button",tabPanel:".js-tab-panel"},n={active:"active"},c=function(t){var a={state:{},elements:{}},c=function(t){var a=function(t){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:document).querySelector(t)}("".concat(e.tabPanel,'[data-id="').concat(t.dataset.id,'"]'));s(n.active,a)},l=function(){a.elements.tabButtons.forEach((function(t){t.addEventListener("click",(function(e){a.elements.tabPanels.forEach((function(t){i(n.active,t)})),c(t),function(t){a.elements.tabButtons.forEach((function(t){i(n.active,t)})),s(n.active,t)}(e.target)}))}))};a.elements.tabButtons=o(e.tabButton,t),a.elements.tabPanels=o(e.tabPanel,t),l()},document.querySelectorAll("[data-js-".concat(t,"=").concat(a,"]")).forEach((function(t){c(t)}))})();