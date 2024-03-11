import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';
import cross from '../img/cross.svg';

const KEY = '42680318-96c21e5764acdc13d94b87bb9';
const URL = 'https://pixabay.com/api/';
const container = document.querySelector('.container');
const loadMoreBtn = document.querySelector('[data-action="load-more"]');

export async function getImages(QUERY, perPage, page) {
  container.style.display = 'block';
  const link = `${URL}?key=${KEY}&q=${QUERY}&image_type=photo&orientation=horizontal&savesearch=true&page=${page}&per_page=${perPage}`;
  try {
    const response = await axios.get(link);

    if (response.data.hits.length === 0) {
      loadMoreBtn.classList.add('is-hidden');
      iziToast.error({
        iconUrl: cross,
        timeout: 3000,
        position: 'topRight',
        messageColor: '#FFF',
        backgroundColor: '#FF544B',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      searchForm.reset();
    }
    return response.data;
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}
