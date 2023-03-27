import {galleryItems} from './gallery-items.js';
// Change code below this line

const galleryListRef = document.querySelector('.gallery');

function createHtmlLayout(array) {
  const newArray = array.map((element) => {
    return `
      <li class="gallery__item">
        <a class="gallery__link" href="${element.original}">
          <img class="gallery__image" src="${element.preview}" alt="${element.description}" />
        </a>
      </li>
   `;
  });
  return newArray.join('');
}

const galleryElementRef = createHtmlLayout(galleryItems);
galleryListRef.insertAdjacentHTML('afterbegin', galleryElementRef);

const gallery = new SimpleLightbox('.gallery__link', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
  showCounter: false,
 });
