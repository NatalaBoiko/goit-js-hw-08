// Add imports above this line
import { galleryItems } from './gallery-items';
console.log(galleryItems);

// Change code below this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');
const makeImages = ({ preview, original, description }) => {
  return `
    <a class = 'gallery__item' href = '${original}'>
      <img
        class="gallery__image"
        src='${preview}'
        alt='${description}'
        />
      </a>
    `;
};

const makeImagesList = galleryItems.map(makeImages).join('');
galleryEl.insertAdjacentHTML('beforeend', makeImagesList);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  close: false,
});
