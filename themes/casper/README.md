# Casper

Тема по умолчанию для [Ghost](http://github.com/tryghost/ghost/). Это последняя версия разработки Casper! Если вы просто хотите скачать последнюю версию, перейдите на страницу [releases](https://github.com/TryGhost/Casper/releases).

&nbsp;

![screenshot-desktop](https://user-images.githubusercontent.com/353959/66987533-40eae100-f0c1-11e9-822e-cbaf38fb8e3f.png)

&nbsp;

# Впервые используете тему Ghost?

Ghost использует простой язык шаблонов под названием [Handlebars](http://handlebarsjs.com/) для своих тем.

В этой теме есть много комментариев к коду, которые помогут объяснить, что происходит, просто прочитав код.
Почувствовав себя комфортно в том, как всё работает, прочтите полную документацию [theme API](https://ghost.org/docs/api/handlebars-themes/) которая объясняет суть помощи и шаблонов Handlebars.

**Основными файлами являются:**

- `default.hbs` - Родительский файл шаблона, который включает в себя ваш глобальный верхний/нижний колонтитул
- `index.hbs` - Основной шаблон для формирования списка постов, как правило, домашняя страница
- `post.hbs` - Шаблон, используемый для визуализации отдельных сообщений
- `page.hbs` - Используется для отдельных страниц
- `tag.hbs` - Используется для архивирования тегов, например: "все сообщения помечены тегом `новости`"
- `author.hbs` - Используется для авторских архивов, например: "все сообщения написаны Джейми"

Один из изящных трюков заключается в том, что вы также можете создавать пользовательские одноразовые шаблоны, добавляя фрагмент страницы в файл шаблона. Например:

- `page-about.hbs` - Custom template for an `/about/` page
- `tag-news.hbs` - Custom template for `/tag/news/` archive
- `author-ali.hbs` - Custom template for `/author/ali/` archive

# Развитие

Стили Каспер компилируются с помощью Gulp/PostCSS для заполнения будущих спецификаций CSS.
Вам понадобится [Node](https://nodejs.org/), [Yarn](https://yarnpkg.com/) и [Gulp](https://gulpjs.com) устанавить глобально. После этого из корневого каталога темы:

```bash
# install dependencies
yarn install

# run development server
yarn dev
```

Теперь вы можете редактировать файлы `/assets/css/`, которые будут автоматически скомпилированы в `/assets/built/`.

`zip` Gulp задача упаковывает файлы темы в `dist/<theme-name>.zip`, которые вы затем можете загрузить на свой сайт.

```bash
# create .zip file
yarn zip
```

# Используемые функции PostCSS

- Autoprefixer - Не беспокойтесь о написании префиксов браузера любого рода, все это делается автоматически с поддержкой последних 2 основных версий каждого браузера.
- Variables - Простые чистые CSS переменные
- [Color Function](https://github.com/postcss/postcss-color-function)

# SVG Icons

Каспер использует встроенные иконки SVG, включенные через партиалы Handlebars. Вы можете найти все значки внутри `/partials/icons`. Чтобы использовать значок, просто укажите имя соответствующего файла, например: Чтобы включить значок SVG в `/partials/icons/rss.hbs` - используйте `{{> "icons/rss"}}`.

Таким же образом вы можете добавлять свои собственные SVG-иконки.

# Copyright & License

Copyright (c) 2013-2019 Ghost Foundation - Released under the [MIT license](LICENSE).
