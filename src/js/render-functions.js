import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function createMarkup(images) {
  return images.hits
    .map(
      ({
        largeImageURL,
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<li class="gallery-item">
              <a class="gallery-link" href="${largeImageURL}">
                <img 
                  class="gallery-image" 
                  src="${webformatURL}" 
                  alt="${tags}" 
                  width="360px" 
                  height="200px"
                />
              </a>
              <div class="gallery-info">
                <p class="gallery-info-par">
                  <span class="gallery-info-span">Likes: <span class="tag-span">${likes}</span></span>    
                </p>
                <p class="gallery-info-par">
                  <span class="gallery-info-span">Views: <span class="tag-span">${views}</span></span>    
                </p>
                <p class="gallery-info-par">
                  <span class="gallery-info-span">Comments: <span class="tag-span">${comments}</span></span>    
                </p>
                <p class="gallery-info-par">
                  <span class="gallery-info-span">Downloads: <span class="tag-span">${downloads}</span></span>    
                </p>
              </div>
            </li>`
    )
    .join('');
}
