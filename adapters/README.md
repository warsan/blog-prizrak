# Content / Adapters

Адаптер - это способ переопределить поведение по умолчанию в Ghost.
Поведение по умолчанию в Ghost следующее:

### LocalFileStorage

По умолчанию Ghost будет загружать ваши изображения в папку `content/images`.
LocalFileStorage использует файловую систему для чтения или записи изображений.
Этот адаптер по умолчанию можно найти в `core/server/adapters/storage/LocalFileStorage.js`.

### SchedulingDefault

По умолчанию Ghost будет планировать ваши сообщения, используя чистое решение JavaScript.
Он не использует `cron` или что-то подобное.
Этот адаптер по умолчанию можно найти в `core/server/adapters/scheduling/SchedulingDefault.js`.

### Custom Adapter

Чтобы переопределить любой из адаптеров по умолчанию, необходимо добавить папку (`content/adapters/storage` or `content/adapters/scheduling`) и скопировать на него свой адаптер.

Пожалуйста, следуйте нашим подробным инструкциям:
https://ghost.org/docs/concepts/storage-adapters/
https://ghost.org/docs/concepts/custom-schedulers/
