var e=document.querySelector(".logo"),t=new Promise(function(t,n){e.addEventListener("click",function(){t()})}),n=new Promise(function(e,t){setTimeout(function(){t()},3e3)});t.then(function(){var e=document.createElement("div");e.className="message",e.textContent="Promise was resolved!",document.body.appendChild(e)}),n.catch(function(){var e=document.createElement("div");e.className="message error-message",e.textContent="Promise was rejected!",document.body.appendChild(e)});
//# sourceMappingURL=index.abc8be3e.js.map
