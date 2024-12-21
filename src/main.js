import { fetchImagesPixabay } from "./js/pixabay-api.js"
import {imageInsert} from './js/render-functions.js';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const searchFormEl = document.querySelector(".search-form");
const loadMoreBtn = document.querySelector('.load-more-btn')

const box = new SimpleLightbox('.gallery a');
const loader = document.querySelector('.loader');
const galleryModule = imageInsert();

let userQuery = '';
let page = 1;
const perPage = 15;
let scrollHeight = 0;


const onSearchFormSubmit = async event => {
  try {
    event.preventDefault();
    galleryModule.reset();
    page = 1;
    loader.classList.remove('is-hidden');
    if (!loadMoreBtn.classList.contains('is-hidden')) {
      loadMoreBtn.classList.add('is-hidden');
    }
    userQuery = searchFormEl.elements.input.value.trim();
    const response = await fetchImagesPixabay(userQuery, page);

    if (response.data.hits.length === 0) {
      iziToast.show({
        color: 'red',
        position: 'topLeft',
        message: 'Sorry, there are no images matching your search query. Please try again!',
      })
      return;
    }

    galleryModule.add(response.data.hits);
    box.refresh();

    const galleryItem = document.querySelector('.gallery-item');
    scrollHeight = galleryItem.getBoundingClientRect().height;

    loadMoreBtn.classList.remove('is-hidden');
    loadMoreBtn.addEventListener('click', onLoadMoreClick);

  } catch (err) {
    console.log(err);
  } finally {
    loader.classList.add('is-hidden');
  }
}

searchFormEl.addEventListener('submit', onSearchFormSubmit);

const onLoadMoreClick = async event => {
  try {
    page++;
    loadMoreBtn.classList.add('is-hidden');
    loader.classList.remove('is-hidden');

    const response = await fetchImagesPixabay(userQuery, page);

    galleryModule.addAdjacent(response.data.hits);
    box.refresh();
    if (response.data.totalHits < page * perPage) {
      iziToast.show({
        color: 'yellow',
        position: 'topLeft',
        message: `We're sorry, but you've reached the end of search results.`,
      });
      return;
    }
    loadMoreBtn.classList.remove('is-hidden');

  } catch (err) {
    console.log(err)
  } finally {
    loader.classList.add('is-hidden');
    window.scrollBy({
      top: (scrollHeight * 2),
      behavior: "smooth",
    });
  }
}
