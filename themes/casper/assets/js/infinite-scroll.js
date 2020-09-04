/* eslint-env browser */

/**
 * Бесконечный свиток - Используется на всех страницах,
 * где есть список сообщений (homepage, tag index, etc).
 *
 * Когда страница прокручивается до 300px снизу, следующая страница сообщений
 * <link rel="next" href="..."> то есть выход на {{ghost_head}}.
 *
 * Отдельные почтовые элементы извлекаются из выбранных страниц путем поиска
 *  элемента-оболочки с классом "post-card". Все найденные элементы добавляются
 *  к элементу с классом "post-feed" на текущей просматриваемой странице.
 */

(function (window, document) {
  // следующий элемент связи
  var nextElement = document.querySelector("link[rel=next]");
  if (!nextElement) {
    return;
  }

  // после подачи
  var feedElement = document.querySelector(".post-feed");
  if (!feedElement) {
    return;
  }

  var buffer = 300;

  var ticking = false;
  var loading = false;

  var lastScrollY = window.scrollY;
  var lastWindowHeight = window.innerHeight;
  var lastDocumentHeight = document.documentElement.scrollHeight;

  function onPageLoad() {
    if (this.status === 404) {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      return;
    }

    // добавить содержимое
    var postElements = this.response.querySelectorAll(".post-card");
    postElements.forEach(function (item) {
      feedElement.appendChild(item);
    });

    // установить следующую ссылку
    var resNextElement = this.response.querySelector("link[rel=next]");
    if (resNextElement) {
      nextElement.href = resNextElement.href;
    } else {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    }

    // состояние синхронизации
    lastDocumentHeight = document.documentElement.scrollHeight;
    ticking = false;
    loading = false;
  }

  function onUpdate() {
    // возврат, если он уже загружен
    if (loading) {
      return;
    }

    // если пролистать в самый низ
    if (lastScrollY + lastWindowHeight <= lastDocumentHeight - buffer) {
      ticking = false;
      return;
    }

    loading = true;

    var xhr = new window.XMLHttpRequest();
    xhr.responseType = "document";

    xhr.addEventListener("load", onPageLoad);

    xhr.open("GET", nextElement.href);
    xhr.send(null);
  }

  function requestTick() {
    ticking || window.requestAnimationFrame(onUpdate);
    ticking = true;
  }

  function onScroll() {
    lastScrollY = window.scrollY;
    requestTick();
  }

  function onResize() {
    lastWindowHeight = window.innerHeight;
    lastDocumentHeight = document.documentElement.scrollHeight;
    requestTick();
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onResize);

  requestTick();
})(window, document);
