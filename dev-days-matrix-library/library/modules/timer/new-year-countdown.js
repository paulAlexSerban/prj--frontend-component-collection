(()=>{var e=document.getElementById("days"),t=document.getElementById("hours"),n=document.getElementById("minutes"),o=document.getElementById("seconds"),d=document.getElementById("countdown"),a=document.getElementById("year"),l=document.getElementById("loading"),m=(new Date).getFullYear(),r=new Date("January 01 ".concat(m+1," 00:00:00"));a.innerText=m+1,setTimeout((function(){l.remove(),d.style.display="flex"}),1e3),setInterval((function(){var d=new Date,a=r-d,l=Math.floor(a/1e3/60/60/24),m=Math.floor(a/1e3/60/60)%24,u=Math.floor(a/1e3/60)%60,c=Math.floor(a/1e3)%60;e.innerHTML=l,t.innerHTML=m<10?"0"+m:m,n.innerHTML=u<10?"0"+u:u,o.innerHTML=c<10?"0"+c:c}),1e3)})();