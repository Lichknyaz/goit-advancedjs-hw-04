import{a as L,S as v,i as p}from"./assets/vendor-C_KvGwiZ.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))m(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&m(c)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function m(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();const g=(s,e)=>{const i={key:"47642074-633fbcdbc226b1edbeb1e203e",q:`${s}`,orientation:"horizontal",image_type:"photo",safesearch:"true",page:`${e}`,per_page:15};return L.get("https://pixabay.com/api/",{params:i})},u=s=>s.map(e=>`<li class="gallery-item">
        <a class="gallery-link" href="${e.largeImageURL}">
          <img
            class="gallery-image"
            src="${e.webformatURL}"
            data-source="${e.largeImageURL}"
            alt="${e.tags}"
          />
        </a>
        <div class="image-notes">
          <div class="image-notes-tabs">
            <p class="notes-text">Likes</p>
            <p>${e.likes}</p>
          </div>
          <div class="image-notes-tabs">
            <p class="notes-text">Views</p>
            <p>${e.views}</p>
          </div>
          <div class="image-notes-tabs">
            <p class="notes-text">Comments</p>
            <p>${e.comments}</p>
          </div>
          <div class="image-notes-tabs">
            <p class="notes-text">Downloads</p>
            <p>${e.downloads}</p>
          </div>
        </div>
      </li>`).join(""),b=()=>{const s=document.querySelector(".gallery");return{add(e){s.innerHTML=u(e)},addAdjacent(e){s.insertAdjacentHTML("beforeend",u(e))},reset(){s.innerHTML=""}}},h=document.querySelector(".search-form"),o=document.querySelector(".load-more-btn"),f=new v(".gallery a"),n=document.querySelector(".loader"),l=b();let d="",a=1;const w=15;let y=0;const S=async s=>{try{s.preventDefault(),l.reset(),a=1,n.classList.remove("is-hidden"),o.classList.contains("is-hidden")||o.classList.add("is-hidden"),d=h.elements.input.value.trim();const e=await g(d,a);if(e.data.hits.length===0){p.show({color:"red",position:"topLeft",message:"Sorry, there are no images matching your search query. Please try again!"});return}l.add(e.data.hits),f.refresh(),y=document.querySelector(".gallery-item").getBoundingClientRect().height,o.classList.remove("is-hidden"),o.addEventListener("click",$)}catch(e){console.log(e)}finally{n.classList.add("is-hidden")}};h.addEventListener("submit",S);const $=async s=>{try{a++,o.classList.add("is-hidden"),n.classList.remove("is-hidden");const e=await g(d,a);if(l.addAdjacent(e.data.hits),f.refresh(),e.data.totalHits<a*w){p.show({color:"yellow",position:"topLeft",message:"We're sorry, but you've reached the end of search results."});return}o.classList.remove("is-hidden")}catch(e){console.log(e)}finally{n.classList.add("is-hidden"),window.scrollBy({top:y*2,behavior:"smooth"})}};
//# sourceMappingURL=index.js.map
