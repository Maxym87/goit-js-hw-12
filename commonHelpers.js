import{a as v,i as u,S as L}from"./assets/vendor-5401a4b0.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const d="/goit-js-hw-12/assets/cross-6532c37c.svg",S="42680318-96c21e5764acdc13d94b87bb9",$="https://pixabay.com/api/",q=document.querySelector(".container");async function y(r,s,t){q.style.display="block";const n=`${$}?key=${S}&q=${r}&image_type=photo&orientation=horizontal&savesearch=true&page=${t}&per_page=${s}`;try{const e=await v.get(n);return e.data.hits.length===0&&(u.error({iconUrl:d,timeout:3e3,position:"topRight",messageColor:"#FFF",backgroundColor:"#FF544B",message:"Sorry, there are no images matching your search query. Please try again!"}),searchForm.reset()),e.data}catch(e){console.log(`Error: ${e}`)}}function h(r){return r.hits.map(({largeImageURL:s,webformatURL:t,tags:n,likes:e,views:o,comments:a,downloads:b})=>`<li class="gallery-item">
              <a class="gallery-link" href="${s}">
                <img 
                  class="gallery-image" 
                  src="${t}" 
                  alt="${n}" 
                  width="360px" 
                  height="200px"
                />
                <div class="gallery-info">
                <p class="gallery-info-par">
                  <span class="gallery-info-span">Likes: <span class="tag-span">${e}</span></span>    
                </p>
                <p class="gallery-info-par">
                  <span class="gallery-info-span">Views: <span class="tag-span">${o}</span></span>    
                </p>
                <p class="gallery-info-par">
                  <span class="gallery-info-span">Comments: <span class="tag-span">${a}</span></span>    
                </p>
                <p class="gallery-info-par">
                  <span class="gallery-info-span">Downloads: <span class="tag-span">${b}</span></span>    
                </p>
              </div>
              </a>
              
            </li>`).join("")}const m=new L(".gallery a",{captionsData:"alt",captionDelay:250}),g=document.querySelector(".form"),E=document.querySelector(".input"),i=document.querySelector(".container"),c=document.querySelector(".gallery"),p=document.querySelector('[data-action="load-more"]');document.querySelector('[data-action="load-more"] span.spinner');i.style.display="none";let l,f,w;g.addEventListener("submit",async r=>{r.preventDefault(),i.style.display="block",c.innerHTML="";const s=E.value.trim();if(s===""){u.show({iconUrl:d,color:"#EF4040",messageColor:"#FFF",message:"Sorry, there are no images matching your search query. Please, try again!"}),i.style.display="none";return}y(s,15,1).then(t=>{w=t.totalHits,c.innerHTML=h(t),f=s,l=1,p.classList.remove("is-hidden"),m.refresh(),g.reset()}).catch(t=>console.log("Error:",t))});p.addEventListener("click",async r=>{l+=1;const s=Math.ceil(w/15);try{const t=await y(f,15,l);c.innerHTML+=h(t),m.refresh();const n=c.lastElementChild.getBoundingClientRect().height;window.scrollBy({top:2*n,behavior:"smooth"}),s===l&&(p.classList.add("is-hidden"),u.show({title:"Info",timeout:2e3,color:"blue",position:"bottomRight",message:"We're sorry, but you've reached the end of search results."}))}catch(t){console.error("Error:",t),alert(t.message)}});window.onscroll=function(){F()};function F(){i.firstElementChild.getBoundingClientRect().height,window.innerHeight+window.scrollY>=document.body.offsetHeight&&C()}function C(){const r=i.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:2*r,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map