const HEADER_ELEMENT = document.querySelector('.header__bg'),
HEADER_LOADED_CLASS_STRING = 'header__img--loaded',
LARGE_HEADER_IMAGE_PATH_STRING = 'uploads/summer-background-2020_D85_0160.jpg',
HEADER_PRELOAD_ELEMENT = document.querySelector('.header__img--tiny'),
HEADER_FADE_OUT_CLASS_STRING = 'header__img--fade-out';

function imageLoadedFunction() {
  HEADER_ELEMENT.classList.add(HEADER_LOADED_CLASS_STRING);
  HEADER_PRELOAD_ELEMENT.classList.add(HEADER_FADE_OUT_CLASS_STRING);
}

function loadLargeHeaderImage() {
  const img = new Image()

  img.addEventListener('load', imageLoadedFunction);
  img.src = LARGE_HEADER_IMAGE_PATH_STRING;

}

export default loadLargeHeaderImage;
