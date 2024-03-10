import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';

const KEY = '42680318-96c21e5764acdc13d94b87bb9';
const URL = 'https://pixabay.com/api/';
const container = document.querySelector('.container');

export async function getImages(QUERY) {
  container.style.display = 'block';
  const link = `${URL}?key=${KEY}&q=${QUERY}&image_type=photo&orientation=horizontal&savesearch=true`;
  try {
    const response = await axios.get(link);

    if (response.data.hits.length === 0) {
      iziToast.error({
        title: 'Error',
        timeout: 2000,
        position: 'bottomRight',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      loadMoreBtn.style.display = 'none';
      loader.style.display = 'none';
      searchForm.reset();
    }
    return response.data;
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}
