(()=>{var e,t;e="pat",t="Popup",document.querySelectorAll("[data-js-".concat(e,"=").concat(t,"]")).forEach((function(e){!function(e){var t={state:{},elements:{}},n=function(){t.elements.button.addEventListener("click",(function(){t.elements.popup.style.display="block"})),t.elements.close.addEventListener("click",(function(){t.elements.popup.style.display="none"})),t.elements.action.addEventListener("click",(function(){t.elements.popup.style.display="none"})),t.elements.popup.addEventListener("click",(function(e){"js-popup-wrapper"===e.target.className&&(t.elements.popup.style.display="none")}))};t.elements.button=e.querySelector(".js-btn-open-popup"),t.elements.popup=e.querySelector(".js-popup-wrapper"),t.elements.close=e.querySelector(".js-popup-close"),t.elements.action=e.querySelector(".js-popup-action"),n()}(e)}))})();