const imageCardsTemplate = imageArray => {
  return imageArray
    .map(el => {
      return `<li class="gallery-item">
        <a class="gallery-link" href="${el.largeImageURL}">
          <img
            class="gallery-image"
            src="${el.webformatURL}"
            data-source="${el.largeImageURL}"
            alt="${el.tags}"
          />
        </a>
        <div class="image-notes">
          <div class="image-notes-tabs">
            <p class="notes-text">Likes</p>
            <p>${el.likes}</p>
          </div>
          <div class="image-notes-tabs">
            <p class="notes-text">Views</p>
            <p>${el.views}</p>
          </div>
          <div class="image-notes-tabs">
            <p class="notes-text">Comments</p>
            <p>${el.comments}</p>
          </div>
          <div class="image-notes-tabs">
            <p class="notes-text">Downloads</p>
            <p>${el.downloads}</p>
          </div>
        </div>
      </li>`
  })
    .join("")
}

export function imageInsert() {
  const gallery = document.querySelector(".gallery");

  return {
    add(imageArray) {
      gallery.innerHTML = imageCardsTemplate(imageArray);
    },

    reset() {
      gallery.innerHTML = '';
    }
  };
}


