import{i as p,S as y}from"./assets/vendor-5b791d57.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const g="42680318-96c21e5764acdc13d94b87bb9",f="https://pixabay.com/api/",m=document.querySelector(".container");function d(o){m.style.display="block";const t=`${f}?key=${g}&q=${o}&image_type=photo&orientation=horizontal&savesearch=true`;return fetch(t).then(r=>{if(!r.ok)throw new Error(`Response error ${r.status}`);return r.json()}).then(r=>(r.hits.length===0&&p.error({iconUrl:cross,timeout:3e3,position:"topRight",messageColor:"#FFF",backgroundColor:"#FF544B",message:"Sorry, there are no images matching your search query. Please try again!"}),r)).catch(r=>console.log(`Error: ${r}`))}function h(o){return o.hits.map(({largeImageURL:t,webformatURL:r,tags:a,likes:e,views:s,comments:n,downloads:u})=>`<li class="gallery-item">
              <a class="gallery-link" href="${t}">
                <img 
                  class="gallery-image" 
                  src="${r}" 
                  alt="${a}" 
                  width="360px" 
                  height="200px"
                />
              </a>
              <div class="gallery-info">
                <p class="gallery-info-par">
                  <span class="gallery-info-span">Likes: <span class="tag-span">${e}</span></span>    
                </p>
                <p class="gallery-info-par">
                  <span class="gallery-info-span">Views: <span class="tag-span">${s}</span></span>    
                </p>
                <p class="gallery-info-par">
                  <span class="gallery-info-span">Comments: <span class="tag-span">${n}</span></span>    
                </p>
                <p class="gallery-info-par">
                  <span class="gallery-info-span">Downloads: <span class="tag-span">${u}</span></span>    
                </p>
              </div>
            </li>`).join("")}const b=new y(".gallery a",{captionsData:"alt",captionDelay:250}),i=document.querySelector(".form"),$=document.querySelector(".input"),l=document.querySelector(".container"),c=document.querySelector(".gallery");l.style.display="none";i.addEventListener("submit",o=>{o.preventDefault(),l.style.display="block",c.innerHTML="";const t=$.value.trim();if(t===""){p.show({iconUrl:cross,color:"#EF4040",messageColor:"#FFF",message:"Sorry, there are no images matching your search query. Please, try again!"}),l.style.display="none";return}d(t).then(r=>{c.innerHTML=h(r),b.refresh(),i.reset()}).catch(r=>console.log("Error:",r))});
//# sourceMappingURL=commonHelpers.js.map
