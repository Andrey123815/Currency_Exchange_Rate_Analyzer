# Итоговое техническое задание: frontend

Написать SPA для конвертирования валют. Для получения текущих курсов найти и использовать любое открытое API.

Приложение должно состоять из двух страниц:

1. **Конвертер из одной валюты в другую** <br/>
На этой странице должно быть текстовое поле, в которое можно ввести текст в виде 15 usd in rub и получить результат.
2. **Страница с текущими курсами валют** <br/>
На этой странице пользователь должен видеть «свежие» курсы валют относительно базовой валюты. <br/>
Например, если базовая валюта — рубль, то пользователь видит, что 1 USD = 63.49 RUB, а 1 EUR = 72.20 RUB.

По-умолчанию у пользователя должна определяться «базовая» валюта, которую он может настроить.

Плюсом будет:
* Хорошо продуманный интерфейс и внешний вид
* Тесты
* Максимальная скорость работы приложения (как при загрузке приложения, так и при конвертировании валют)

Для реализации можно использовать любые библиотеки, которые будут уместны.

### Дополнительные требования

1. Поддержка TypeScript
2. Адаптивная вёрстка
3. Работа со стилями по усмотрению(classnames, styled-components, SCSS/SASS, CSS-modules)
4. Сохранять базовую валюту между сессиями
5. Поработать с оптимизацией
6. Поддержка 10 самых популярных типов валют
7. Кросбраузерная вёрстка (+)
8. Семантическая вёрстка (+)
9. Настроить сборщик руками (+)
10. Настроить линтер(максимально строго) и преттиер (+)
