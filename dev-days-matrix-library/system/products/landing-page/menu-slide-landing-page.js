(()=>{var e=document.getElementById("toggle"),t=document.getElementById("close"),n=document.getElementById("open"),d=document.getElementById("modal");e.addEventListener("click",(function(){return document.body.classList.toggle("show-nav")})),n.addEventListener("click",(function(){return d.classList.add("show-modal")})),t.addEventListener("click",(function(){return d.classList.remove("show-modal")})),window.addEventListener("click",(function(e){return e.target==d&&d.classList.remove("show-modal")}))})();