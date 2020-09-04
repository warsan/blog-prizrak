/* eslint-env browser */

/**
 * Поддержка карт галереи
 * используется на любом отдельном посте/странице
 *
 * Определяет, когда была использована карта галереи, и применяет калибровку,
 * чтобы убедиться, что дисплей соответствует тому, что видно в Редакторе.
 */

(function (window, document) {
  var resizeImagesInGalleries = function resizeImagesInGalleries() {
    var images = document.querySelectorAll(".kg-gallery-image img");
    images.forEach(function (image) {
      var container = image.closest(".kg-gallery-image");
      var width = image.attributes.width.value;
      var height = image.attributes.height.value;
      var ratio = width / height;
      container.style.flex = ratio + " 1 0%";
    });
  };

  document.addEventListener("DOMContentLoaded", resizeImagesInGalleries);
})(window, document);
