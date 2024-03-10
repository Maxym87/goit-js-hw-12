import{a as b,i as u,S as w}from"./assets/vendor-5401a4b0.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const L="/goit-js-hw-12/assets/cross-6532c37c.svg",v="42680318-96c21e5764acdc13d94b87bb9",$="https://pixabay.com/api/",S=document.querySelector(".container");async function y(o,s,r){S.style.display="block";const a=`${$}?key=${v}&q=${o}&image_type=photo&orientation=horizontal&savesearch=true&page=${r}&per_page=${s}`;try{const e=await b.get(a);return e.data.hits.length===0&&(u.error({title:"Error",timeout:2e3,position:"bottomRight",message:"Sorry, there are no images matching your search query. Please try again!"}),searchForm.reset()),e.data}catch(e){console.log(`Error: ${e}`)}}function g(o){return o.hits.map(({largeImageURL:s,webformatURL:r,tags:a,likes:e,views:t,comments:n,downloads:h})=>`<li class="gallery-item">
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
                  <span class="gallery-info-span">Downloads: <span class="tag-span">${h}</span></span>    
                </p>
              </div>
            </li>`).join("")}const q=new w(".gallery a",{captionsData:"alt",captionDelay:250}),d=document.querySelector(".form"),E=document.querySelector(".input"),l=document.querySelector(".container"),c=document.querySelector(".gallery"),p=document.querySelector('[data-action="load-more"]'),H=document.querySelector('[data-action="load-more"] span.spinner');l.style.display="none";let i,m,f;d.addEventListener("submit",async o=>{o.preventDefault(),l.style.display="block",c.innerHTML="";const s=E.value.trim();if(s===""){u.show({iconUrl:L,color:"#EF4040",messageColor:"#FFF",message:"Sorry, there are no images matching your search query. Please, try again!"}),l.style.display="none";return}y(s,15,1).then(r=>{f=r.totalHits,c.innerHTML=g(r),m=s,i=1,p.classList.remove("is-hidden"),H.classList.remove("is"),d.reset()}).catch(r=>console.log("Error:",r))});p.addEventListener("click",async o=>{i+=1;try{const s=await y(m,15,i);i*15<f?(c.innerHTML+=g(s),q.refresh()):(p.classList.add("is-hidden"),u.show({title:"Info",timeout:2e3,color:"blue",position:"bottomRight",message:"We're sorry, but you've reached the end of search results."}))}catch(s){console.error("Error:",s),alert(s.message)}});window.onscroll=function(){window.innerHeight+window.scrollY>=document.body.offsetHeight};
//# sourceMappingURL=commonHelpers.js.map
