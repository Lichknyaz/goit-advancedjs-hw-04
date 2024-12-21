import axios from 'axios';


export const fetchImagesPixabay = (query, page) => {
  const searchParams = {
    key: '47642074-633fbcdbc226b1edbeb1e203e',
    q: `${query}`,
    orientation: 'horizontal',
    image_type: 'photo',
    safesearch: 'true',
    page: `${page}`,
    per_page: 15,
  };

  return axios.get('https://pixabay.com/api/', {params: searchParams});
}

