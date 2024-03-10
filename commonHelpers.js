import{a as u,i as p,S as g}from"./assets/vendor-5401a4b0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const d="42680318-96c21e5764acdc13d94b87bb9",f="https://pixabay.com/api/",m=document.querySelector(".container");async function h(a){m.style.display="block";const t=`${f}?key=${d}&q=${a}&image_type=photo&orientation=horizontal&savesearch=true`;try{const r=await u.get(t);return r.data.hits.length===0&&(p.error({title:"Error",timeout:2e3,position:"bottomRight",message:"Sorry, there are no images matching your search query. Please try again!"}),loadMoreBtn.style.display="none",loader.style.display="none",searchForm.reset()),r.data}catch(r){console.log(`Error: ${r}`)}}function b(a){return a.hits.map(({largeImageURL:t,webformatURL:r,tags:n,likes:e,views:s,comments:o,downloads:y})=>`<li class="gallery-item">
              <a class="gallery-link" href="${t}">
                <img 
                  class="gallery-image" 
                  src="${r}" 
                  alt="${n}" 
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
                  <span class="gallery-info-span">Comments: <span class="tag-span">${o}</span></span>    
                </p>
                <p class="gallery-info-par">
                  <span class="gallery-info-span">Downloads: <span class="tag-span">${y}</span></span>    
                </p>
              </div>
            </li>`).join("")}const $=new g(".gallery a",{captionsData:"alt",captionDelay:250}),i=document.querySelector(".form"),L=document.querySelector(".input"),l=document.querySelector(".container"),c=document.querySelector(".gallery");l.style.display="none";i.addEventListener("submit",a=>{a.preventDefault(),l.style.display="block",c.innerHTML="";const t=L.value.trim();if(t===""){p.show({iconUrl:cross,color:"#EF4040",messageColor:"#FFF",message:"Sorry, there are no images matching your search query. Please, try again!"}),l.style.display="none";return}h(t).then(r=>{c.innerHTML=b(r),$.refresh(),i.reset()}).catch(r=>console.log("Error:",r))});
//# sourceMappingURL=commonHelpers.js.map
