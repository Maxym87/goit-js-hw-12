import{a as b,i as p,S as L}from"./assets/vendor-5401a4b0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const v="/goit-js-hw-12/assets/cross-6532c37c.svg",$="42680318-96c21e5764acdc13d94b87bb9",S="https://pixabay.com/api/",q=document.querySelector(".container");async function y(o,t,r){q.style.display="block";const a=`${S}?key=${$}&q=${o}&image_type=photo&orientation=horizontal&savesearch=true&page=${r}&per_page=${t}`;try{const e=await b.get(a);return e.data.hits.length===0&&(p.error({title:"Error",timeout:2e3,position:"bottomRight",message:"Sorry, there are no images matching your search query. Please try again!"}),searchForm.reset()),e.data}catch(e){console.log(`Error: ${e}`)}}function g(o){return o.hits.map(({largeImageURL:t,webformatURL:r,tags:a,likes:e,views:s,comments:n,downloads:h})=>`<li class="gallery-item">
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
                  <span class="gallery-info-span">Downloads: <span class="tag-span">${h}</span></span>    
                </p>
              </div>
            </li>`).join("")}const w=new L(".gallery a",{captionsData:"alt",captionDelay:250}),u=document.querySelector(".form"),E=document.querySelector(".input"),l=document.querySelector(".container"),c=document.querySelector(".gallery"),d=document.querySelector('[data-action="load-more"]'),P=document.querySelector('[data-action="load-more"] span.spinner');l.style.display="none";let i,m,f;u.addEventListener("submit",async o=>{o.preventDefault(),l.style.display="block",c.innerHTML="";const t=E.value.trim();if(t===""){p.show({iconUrl:v,color:"#EF4040",messageColor:"#FFF",message:"Sorry, there are no images matching your search query. Please, try again!"}),l.style.display="none";return}y(t,15,1).then(r=>{f=r.totalHits,c.innerHTML=g(r),m=t,i=1,d.classList.remove("is-hidden"),P.classList.remove("is"),w.refresh(),u.reset()}).catch(r=>console.log("Error:",r))});d.addEventListener("click",async o=>{i+=1;try{const t=await y(m,15,i);i*15<f?c.innerHTML+=g(t):p.show({title:"Info",timeout:2e3,color:"blue",position:"bottomRight",message:"We're sorry, but you've reached the end of search results."})}catch(t){console.error("Error:",t),alert(t.message)}});
//# sourceMappingURL=commonHelpers.js.map
