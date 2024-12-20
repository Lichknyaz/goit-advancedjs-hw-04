import{S as c,i as l}from"./assets/vendor-CGhD4Nw8.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function o(t){if(t.ep)return;t.ep=!0;const e=a(t);fetch(t.href,e)}})();const d=r=>r.map(s=>`<li class="gallery-item">
        <a class="gallery-link" href="${s.largeImageURL}">
          <img
            class="gallery-image"
            src="${s.webformatURL}"
            data-source="${s.largeImageURL}"
            alt="${s.tags}"
          />
        </a>
        <div class="image-notes">
          <div class="image-notes-tabs">
            <p class="notes-text">Likes</p>
            <p>${s.likes}</p>
          </div>
          <div class="image-notes-tabs">
            <p class="notes-text">Views</p>
            <p>${s.views}</p>
          </div>
          <div class="image-notes-tabs">
            <p class="notes-text">Comments</p>
            <p>${s.comments}</p>
          </div>
          <div class="image-notes-tabs">
            <p class="notes-text">Downloads</p>
            <p>${s.downloads}</p>
          </div>
        </div>
      </li>`).join("");function u(){const r=document.querySelector(".gallery");return{add(s){r.innerHTML=d(s)},reset(){r.innerHTML=""}}}function m(r){const s=new URLSearchParams({key:"47642074-633fbcdbc226b1edbeb1e203e",q:`${r}`,orientation:"horizontal",image_type:"photo",safesearch:"true"}),a=new c(".gallery a"),o=document.querySelector(".loader");o.classList.add("is-visible");const t=u();t.reset(),fetch(`https://pixabay.com/api/?${s}`).then(e=>{if(!e.ok)throw new Error("Wrong resource address");return e.json()}).then(e=>{e.hits.length===0&&l.show({color:"red",position:"topLeft",message:"Sorry, there are no images matching your search query. Please try again!"}),t.add(e.hits),a.refresh()}).catch(e=>{console.log(e)}).finally(()=>o.classList.remove("is-visible"))}const n=document.querySelector(".search-form");n.addEventListener("submit",r=>{r.preventDefault(),m(n.elements.input.value)});
//# sourceMappingURL=index.js.map
