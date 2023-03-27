import {galleryItems} from './gallery-items.js';
// Change code below this line

const galleryListRef = document.querySelector('.gallery');
galleryListRef.addEventListener('click', onGalleryClick);

function createHtmlLayout(array) {
  const newArray = array.map((element) => {
    return `
      <li class="gallery__item">
       <a class="gallery__link" href="${element.original}">
         <img
           class="gallery__image"
           src="${element.preview}"
           data-source="${element.original}"
           alt="${element.description}"
         />
       </a>
     </li>
   `;
  });
  return newArray.join('');
}

const galleryElementRef = createHtmlLayout(galleryItems);
galleryListRef.insertAdjacentHTML('afterbegin', galleryElementRef);

let modalWindow = '';
function onGalleryClick(event) {
  event.preventDefault();
  if (event.target.nodeName === 'IMG') {
    const imageRef = event.target.dataset.source;

    modalWindow = basicLightbox.create(`<img src="${imageRef}">`, {
      onShow: showModal,
      onClose: closeModal,
    });
    modalWindow.show();
  }
}

function showModal() {
  window.addEventListener('keydown', onKeyPress);
}

function closeModal() {
  window.removeEventListener('keydown', onKeyPress);
}

function onKeyPress(event) {
  if (event.code === 'Escape') {
    modalWindow.close();
  }
}
