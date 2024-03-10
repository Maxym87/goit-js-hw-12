import{a as b,i as u,S as v}from"./assets/vendor-5401a4b0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const g="/goit-js-hw-12/assets/cross-6532c37c.svg",L="42680318-96c21e5764acdc13d94b87bb9",S="https://pixabay.com/api/",$=document.querySelector(".container");async function y(o,t,r){$.style.display="block";const n=`${S}?key=${L}&q=${o}&image_type=photo&orientation=horizontal&savesearch=true&page=${r}&per_page=${t}`;try{const e=await b.get(n);return e.data.hits.length===0&&(u.error({iconUrl:g,timeout:3e3,position:"topRight",messageColor:"#FFF",backgroundColor:"#FF544B",message:"Sorry, there are no images matching your search query. Please try again!"}),searchForm.reset()),e.data}catch(e){console.log(`Error: ${e}`)}}function m(o){return o.hits.map(({largeImageURL:t,webformatURL:r,tags:n,likes:e,views:s,comments:a,downloads:w})=>`<li class="gallery-item">
              <a class="gallery-link" href="${t}">
                <img 
                  class="gallery-image" 
                  src="${r}" 
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
              
            </li>`).join("")}const q=new v(".gallery a",{captionsData:"alt",captionDelay:250}),d=document.querySelector(".form"),F=document.querySelector(".input"),i=document.querySelector(".container"),c=document.querySelector(".gallery"),p=document.querySelector('[data-action="load-more"]'),E=document.querySelector('[data-action="load-more"] span.spinner');i.style.display="none";let l,h,f;d.addEventListener("submit",async o=>{o.preventDefault(),i.style.display="block",c.innerHTML="";const t=F.value.trim();if(t===""){u.show({iconUrl:g,color:"#EF4040",messageColor:"#FFF",message:"Sorry, there are no images matching your search query. Please, try again!"}),i.style.display="none";return}y(t,15,1).then(r=>{f=r.totalHits,c.innerHTML=m(r),h=t,l=1,p.classList.remove("is-hidden"),E.classList.remove("is"),d.reset()}).catch(r=>console.log("Error:",r))});p.addEventListener("click",async o=>{l+=1;try{const t=await y(h,15,l);l*15<f?(c.innerHTML+=m(t),q.refresh()):(p.classList.add("is-hidden"),u.show({title:"Info",timeout:2e3,color:"blue",position:"bottomRight",message:"We're sorry, but you've reached the end of search results."}))}catch(t){console.error("Error:",t),alert(t.message)}});window.onscroll=function(){H()};function H(){const o=i.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:2*o,behavior:"smooth"}),window.innerHeight+window.scrollY>=document.body.offsetHeight&&C()}function C(){const o=i.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:2*o,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
