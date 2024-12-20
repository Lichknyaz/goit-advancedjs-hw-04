import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import {imageInsert} from "./refactor-functions.js"

export function fetchImagesPixabay(query) {
  const searchParams = new URLSearchParams({
    key: '47642074-633fbcdbc226b1edbeb1e203e',
    q: `${query}`,
    orientation: 'horizontal',
    image_type: 'photo',
    safesearch: 'true',
  });

  const box = new SimpleLightbox('.gallery a');
  const loader = document.querySelector('.loader')
  loader.classList.add('is-visible')

  const galleryModule = imageInsert()
  galleryModule.reset()

  fetch(`https://pixabay.com/api/?${searchParams}`)
  .then (response => {
    if (!response.ok) {
      throw new Error ('Wrong resource address')
    }
    return response.json()
  } )

  .then (images => {
    if (images.hits.length === 0) {
      iziToast.show({
        color: 'red',
        position: 'topLeft',
        message: 'Sorry, there are no images matching your search query. Please try again!',
      })
    }

    galleryModule.add(images.hits)
    box.refresh()
  })

  .catch (err => {
    console.log(err)
  })

  .finally(() => loader.classList.remove('is-visible'))
}


