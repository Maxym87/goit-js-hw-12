import{a as h,i as c,S as b}from"./assets/vendor-5401a4b0.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const $="/goit-js-hw-12/assets/cross-6532c37c.svg",v="42680318-96c21e5764acdc13d94b87bb9",L="https://pixabay.com/api/",S=document.querySelector(".container");async function y(o,s,r){S.style.display="block";const a=`${L}?key=${v}&q=${o}&image_type=photo&orientation=horizontal&savesearch=true&page=${r}&per_page=${s}`;try{const e=await h.get(a);return e.data.hits.length===0&&(c.error({title:"Error",timeout:2e3,position:"bottomRight",message:"Sorry, there are no images matching your search query. Please try again!"}),loadMoreBtn.style.display="none",loader.style.display="none",searchForm.reset()),e.data}catch(e){console.log(`Error: ${e}`)}}function q(o){return o.hits.map(({largeImageURL:s,webformatURL:r,tags:a,likes:e,views:t,comments:n,downloads:f})=>`<li class="gallery-item">
              <a class="gallery-link" href="${s}">
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
                  <span class="gallery-info-span">Views: <span class="tag-span">${t}</span></span>    
                </p>
                <p class="gallery-info-par">
                  <span class="gallery-info-span">Comments: <span class="tag-span">${n}</span></span>    
                </p>
                <p class="gallery-info-par">
                  <span class="gallery-info-span">Downloads: <span class="tag-span">${f}</span></span>    
                </p>
              </div>
            </li>`).join("")}const w=new b(".gallery a",{captionsData:"alt",captionDelay:250}),p=document.querySelector(".form"),E=document.querySelector(".input"),i=document.querySelector(".container"),u=document.querySelector(".gallery"),d=document.querySelector('[data-action="load-more"]'),P=document.querySelector('[data-action="load-more"] span.spinner');i.style.display="none";let l,g,m;p.addEventListener("submit",async o=>{o.preventDefault(),i.style.display="block",u.innerHTML="";const s=E.value.trim();if(s===""){c.show({iconUrl:$,color:"#EF4040",messageColor:"#FFF",message:"Sorry, there are no images matching your search query. Please, try again!"}),i.style.display="none";return}y(s,15,1).then(r=>{m=r.totalHits,u.innerHTML=q(r),g=s,l=1,d.classList.remove("is-hidden"),P.classList.remove("is"),w.refresh(),p.reset()}).catch(r=>console.log("Error:",r))});d.addEventListener("click",async o=>{l+=1;try{const s=await y(g,15,l);l*15<m||c.show({title:"Info",timeout:2e3,color:"blue",position:"bottomRight",message:"We're sorry, but you've reached the end of search results."})}catch(s){console.error("Error:",s),alert(s.message)}});
//# sourceMappingURL=commonHelpers.js.map
