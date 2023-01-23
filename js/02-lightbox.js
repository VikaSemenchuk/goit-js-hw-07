import { galleryItems } from './gallery-items.js';
// Change code below this line
const divGallery = document.querySelector(".gallery");

function createGalleryMarkup(items) {
  return items
    .map((item) => 
      `<div class="gallery__item"> 
         <a class="gallery__link" href="${item.original}">
           <img class="gallery__image" src="${item.preview}"
             data-sourse="${item.original}"
             alt="${item.description}"/>
         </a>
       </div>`
    )
    .join("");
}

const addGalleryMarkup = createGalleryMarkup(galleryItems);
divGallery.innerHTML = addGalleryMarkup;

let gallery = new SimpleLightbox(".gallery__link", {
  captionsData: "alt",
  captionDelay: 250,
});
gallery.on("show.simplelightbox", function () {});
console.log(galleryItems);
