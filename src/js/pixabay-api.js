import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';

const KEY = '42680318-96c21e5764acdc13d94b87bb9';
const URL = 'https://pixabay.com/api/';
const container = document.querySelector('.container');

export function getImages(QUERY) {
  container.style.display = 'block';
  const link = `${URL}?key=${KEY}&q=${QUERY}&image_type=photo&orientation=horizontal&savesearch=true`;

  return fetch(link)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Response error ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          iconUrl: cross,
          timeout: 3000,
          position: 'topRight',
          messageColor: '#FFF',
          backgroundColor: '#FF544B',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }
      return data;
    })
    .catch(error => console.log(`Error: ${error}`));
}