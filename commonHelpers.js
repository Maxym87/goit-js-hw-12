import{a as b,i as u,S as v}from"./assets/vendor-5401a4b0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const d="/goit-js-hw-12/assets/cross-6532c37c.svg",L="42680318-96c21e5764acdc13d94b87bb9",S="https://pixabay.com/api/",$=document.querySelector(".container");async function y(r,t,o){$.style.display="block";const n=`${S}?key=${L}&q=${r}&image_type=photo&orientation=horizontal&savesearch=true&page=${o}&per_page=${t}`;try{const e=await b.get(n);return e.data.hits.length===0&&(u.error({iconUrl:d,timeout:3e3,position:"topRight",messageColor:"#FFF",backgroundColor:"#FF544B",message:"Sorry, there are no images matching your search query. Please try again!"}),searchForm.reset()),e.data}catch(e){console.log(`Error: ${e}`)}}function h(r){return r.hits.map(({largeImageURL:t,webformatURL:o,tags:n,likes:e,views:s,comments:a,downloads:w})=>`<li class="gallery-item">
              <a class="gallery-link" href="${t}">
                <img 
                  class="gallery-image" 
                  src="${o}" 
                  alt="${n}" 
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
                  <span class="gallery-info-span">Comments: <span class="tag-span">${a}</span></span>    
                </p>
                <p class="gallery-info-par">
                  <span class="gallery-info-span">Downloads: <span class="tag-span">${w}</span></span>    
                </p>
              </div>
              </a>
              
            </li>`).join("")}const q=new v(".gallery a",{captionsData:"alt",captionDelay:250}),g=document.querySelector(".form"),E=document.querySelector(".input"),i=document.querySelector(".container"),c=document.querySelector(".gallery"),p=document.querySelector('[data-action="load-more"]'),F=document.querySelector('[data-action="load-more"] span.spinner');i.style.display="none";let l,m,f;g.addEventListener("submit",async r=>{r.preventDefault(),i.style.display="block",c.innerHTML="";const t=E.value.trim();if(t===""){u.show({iconUrl:d,color:"#EF4040",messageColor:"#FFF",message:"Sorry, there are no images matching your search query. Please, try again!"}),i.style.display="none";return}y(t,15,1).then(o=>{f=o.totalHits,c.innerHTML=h(o),m=t,l=1,p.classList.remove("is-hidden"),F.classList.remove("is"),g.reset()}).catch(o=>console.log("Error:",o))});p.addEventListener("click",async r=>{l+=1;try{const t=await y(m,15,l);if(l*15<f){c.innerHTML+=h(t),q.refresh();const o=c.lastElementChild.getBoundingClientRect().height;window.scrollBy({top:2*o,behavior:"smooth"})}else p.classList.add("is-hidden"),u.show({title:"Info",timeout:2e3,color:"blue",position:"bottomRight",message:"We're sorry, but you've reached the end of search results."})}catch(t){console.error("Error:",t),alert(t.message)}});window.onscroll=function(){C()};function C(){i.firstElementChild.getBoundingClientRect().height,window.innerHeight+window.scrollY>=document.body.offsetHeight&&H()}function H(){const r=i.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:2*r,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
