# Brusnika

##### Сборка проекта:
- git clone git@github.com:AnnSyh/Brusnika-pug.git - склонировать проект 
- npm i - установка зависимостей
- pug -w  brand-large.pug   -P -o public - сборка стр  brand-large в папку public


##### Структура проекта:
```sh
dev
  css (для вресения правок редактировать файлы вида *.scss )
    blocks - классы для блоков сайта
    plugins - классы для плагтнов из папки dev/js/plugins
    .... *.scss - общие стили сайта 
  dummy - картинки 
  fonts -  шрифты 
  layout - шаблоны стр
  modules - выдененные блоки кода
  public  - папка с готовыми *.html страницами проекта
  svg - *.svg картинки
  utils
    data.pug  - все данные (за исключением пунктов основного меню) вынесены сюда
    mixins.pug  - миксины
js
  plugins - *.js для scrool, sclik-slider, .....
  .....   - *.js для сайта
svg

```
