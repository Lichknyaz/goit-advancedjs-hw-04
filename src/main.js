import { fetchImagesPixabay } from "./js/pixabay-api.js"

const userQuery = document.querySelector(".search-form")

userQuery.addEventListener("submit", (e) => {
  e.preventDefault();
  fetchImagesPixabay(userQuery.elements.input.value)
})

