# Content / Settings

### routes.yaml

Чтобы узнать больше о конфигурации `routes.yaml` и о том, как ее использовать, посетите [documentation](https://ghost.org/docs/api/handlebars-themes/routing/).

Вот как выглядит стандартный файл `routes.yaml`:

```yaml
routes:

collections:
  /:
    permalink: "/{slug}/"
    template:
      - index

taxonomies:
  tag: /tag/{slug}/
  author: /author/{slug}/
```
