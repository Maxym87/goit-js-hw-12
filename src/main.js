import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import cross from './img/cross.svg';

import { getImages } from './js/pixabay-api';
import { createMarkup } from './js/render-functions';

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

const form = document.querySelector('.form');
const input = document.querySelector('.input');
const container = document.querySelector('.container');
const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('[data-action="load-more"]');
const spinner = document.querySelector(
  '[data-action="load-more"] span.spinner'
);

container.style.display = 'none';

let currentPage;
let currentQuery;
let totalHits;

form.addEventListener('submit', async event => {
  event.preventDefault();
  container.style.display = 'block';
  gallery.innerHTML = '';
  const userInput = input.value.trim();
  if (userInput === '') {
    loadMoreBtn.classList.add('is-hidden');

    iziToast.show({
      iconUrl: cross,
      color: '#EF4040',
      messageColor: '#FFF',
      message:
        'Sorry, there are no images matching your search query. Please, try again!',
    });
    container.style.display = 'none';

    return;
  }

  getImages(userInput, 15, 1)
    .then(images => {
      totalHits = images.totalHits;
      gallery.innerHTML = createMarkup(images);
      currentQuery = userInput;
      currentPage = 1;
      loadMoreBtn.classList.remove('is-hidden');
      lightbox.refresh();
      form.reset();
      if (totalHits <= 15) {
        loadMoreBtn.classList.add('is-hidden');
      }
    })
    .catch(error => console.log('Error:', error));
});

loadMoreBtn.addEventListener('click', async event => {
  currentPage += 1;
  const lastPage = Math.ceil(totalHits / 15);
  try {
    const response = await getImages(currentQuery, 15, currentPage);

    gallery.innerHTML += createMarkup(response);
    lightbox.refresh();
    const newImagesHeight =
      gallery.lastElementChild.getBoundingClientRect().height;
    window.scrollBy({
      top: 2 * newImagesHeight,
      behavior: 'smooth',
    });

    if (lastPage === currentPage) {
      loadMoreBtn.classList.add('is-hidden');
      iziToast.show({
        title: 'Info',
        timeout: 2000,
        color: 'blue',
        position: 'bottomRight',
        message: "We're sorry, but you've reached the end of search results.",
      });
    }
  } catch (error) {
    console.error('Error:', error);
    alert(error.message);
  }
});

window.onscroll = function () {
  Scroll();
};

function Scroll() {
  const cardHeight = container.firstElementChild.getBoundingClientRect().height;
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    smoothScroll();
  }
}

function smoothScroll() {
  const galleryHeight =
    container.firstElementChild.getBoundingClientRect().height;

  window.scrollBy({
    top: 2 * galleryHeight,
    behavior: 'smooth',
  });
}
