import{a as L,i as u,S as v}from"./assets/vendor-5401a4b0.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const y="/goit-js-hw-12/assets/cross-6532c37c.svg",S="42680318-96c21e5764acdc13d94b87bb9",$="https://pixabay.com/api/",q=document.querySelector(".container"),E=document.querySelector('[data-action="load-more"]');async function h(r,s,t){q.style.display="block";const n=`${$}?key=${S}&q=${r}&image_type=photo&orientation=horizontal&savesearch=true&page=${t}&per_page=${s}`;try{const e=await L.get(n);return e.data.hits.length===0&&(E.classList.add("is-hidden"),u.error({iconUrl:y,timeout:3e3,position:"topRight",messageColor:"#FFF",backgroundColor:"#FF544B",message:"Sorry, there are no images matching your search query. Please try again!"}),searchForm.reset()),e.data}catch(e){console.log(`Error: ${e}`)}}function m(r){return r.hits.map(({largeImageURL:s,webformatURL:t,tags:n,likes:e,views:o,comments:a,downloads:b})=>`<li class="gallery-item">
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
              
            </li>`).join("")}const f=new v(".gallery a",{captionsData:"alt",captionDelay:250}),g=document.querySelector(".form"),F=document.querySelector(".input"),l=document.querySelector(".container"),d=document.querySelector(".gallery"),i=document.querySelector('[data-action="load-more"]');document.querySelector('[data-action="load-more"] span.spinner');l.style.display="none";let c,w,p;g.addEventListener("submit",async r=>{r.preventDefault(),l.style.display="block",d.innerHTML="";const s=F.value.trim();if(s===""){i.classList.add("is-hidden"),u.show({iconUrl:y,color:"#EF4040",messageColor:"#FFF",message:"Sorry, there are no images matching your search query. Please, try again!"}),l.style.display="none";return}h(s,15,1).then(t=>{p=t.totalHits,d.innerHTML=m(t),w=s,c=1,i.classList.remove("is-hidden"),f.refresh(),g.reset(),p<=15&&i.classList.add("is-hidden")}).catch(t=>console.log("Error:",t))});i.addEventListener("click",async r=>{c+=1;const s=Math.ceil(p/15);try{const t=await h(w,15,c);d.innerHTML+=m(t),f.refresh();const n=d.lastElementChild.getBoundingClientRect().height;window.scrollBy({top:2*n,behavior:"smooth"}),s===c&&(i.classList.add("is-hidden"),u.show({title:"Info",timeout:2e3,color:"blue",position:"bottomRight",message:"We're sorry, but you've reached the end of search results."}))}catch(t){console.error("Error:",t),alert(t.message)}});window.onscroll=function(){C()};function C(){l.firstElementChild.getBoundingClientRect().height,window.innerHeight+window.scrollY>=document.body.offsetHeight&&H()}function H(){const r=l.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:2*r,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
