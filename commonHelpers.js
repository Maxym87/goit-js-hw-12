import{a as L,i as u,S as v}from"./assets/vendor-5401a4b0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const y="/goit-js-hw-12/assets/cross-6532c37c.svg",S="42680318-96c21e5764acdc13d94b87bb9",$="https://pixabay.com/api/",q=document.querySelector(".container");async function d(o,t,r){q.style.display="block";const a=`${$}?key=${S}&q=${o}&image_type=photo&orientation=horizontal&savesearch=true&page=${r}&per_page=${t}`;try{const e=await L.get(a);return e.data.hits.length===0&&(u.error({iconUrl:y,timeout:3e3,position:"topRight",messageColor:"#FFF",backgroundColor:"#FF544B",message:"Sorry, there are no images matching your search query. Please try again!"}),searchForm.reset()),e.data}catch(e){console.log(`Error: ${e}`)}}function m(o){return o.hits.map(({largeImageURL:t,webformatURL:r,tags:a,likes:e,views:s,comments:n,downloads:b})=>`<li class="gallery-item">
              <a class="gallery-link" href="${t}">
                <img 
                  class="gallery-image" 
                  src="${r}" 
                  alt="${a}" 
                  width="360px" 
                  height="200px"
                />
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
                  <span class="gallery-info-span">Downloads: <span class="tag-span">${b}</span></span>    
                </p>
              </div>
              </a>
              
            </li>`).join("")}const w=new v(".gallery a",{captionsData:"alt",captionDelay:250}),g=document.querySelector(".form"),F=document.querySelector(".input"),c=document.querySelector(".container"),i=document.querySelector(".gallery"),p=document.querySelector('[data-action="load-more"]'),E=document.querySelector('[data-action="load-more"] span.spinner');c.style.display="none";let l,h,f;g.addEventListener("submit",async o=>{o.preventDefault(),c.style.display="block",i.innerHTML="";const t=F.value.trim();if(t===""){u.show({iconUrl:y,color:"#EF4040",messageColor:"#FFF",message:"Sorry, there are no images matching your search query. Please, try again!"}),c.style.display="none";return}d(t,15,1).then(r=>{f=r.totalHits,i.innerHTML=m(r),h=t,l=1,p.classList.remove("is-hidden"),E.classList.remove("is"),i.querySelector(".gallery-item").getBoundingClientRect().height,g.reset()}).catch(r=>console.log("Error:",r))});p.addEventListener("click",async o=>{l+=1;try{const t=await d(h,15,l);l*15<f?(i.innerHTML+=m(t),w.refresh(),C()):(p.classList.add("is-hidden"),u.show({title:"Info",timeout:2e3,color:"blue",position:"bottomRight",message:"We're sorry, but you've reached the end of search results."}))}catch(t){console.error("Error:",t),alert(t.message)}});function C(){const o=c.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:2*o,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
