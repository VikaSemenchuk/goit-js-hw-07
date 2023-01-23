import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

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
gallery.innerHTML = addGalleryMarkup;
gallery.addEventListener("click", onImageClick);

function onImageClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.sourse}" width="800" height="600">
`);

  instance.show();

  gallery.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });
}

console.log(galleryItems);
