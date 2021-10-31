import Player from '@vimeo/player'; //импортируем библиотеку вимео
import throttle from "lodash.throttle"; // импортируем лодаш

const iframe = document.querySelector('iframe'); // получаем ссылку на хтмл элемент
const player = new Player(iframe); // инициализируем плеер, путем добавления  фрейма (хтмл элемент) в конструктор vimeo
const LOCALSTORAGE_KEY = 'videoplayer-current-time'; // создаем хранилище данных, ключ в переменной
const timeDelay = throttle(onGetCurrentTime, 1000) // переменная с задержкой на запись в хранилище. Сюда закинул функцию с получением секунд проигрывания

function onGetCurrentTime() {

  player // обьект конструктора
    .getCurrentTime()// метод на получение времени проигрывания плеера

    .then(function(seconds) { //?
    localStorage.setItem(LOCALSTORAGE_KEY, seconds) // полученное время записываем в хранилище

  })
    .catch(function(error) {
      console.log(error.name, error.message, error.stack); // случае ошибки скрипт не падает  а выводит сообшение
  });
}

console.log()
player.on('timeupdate', timeDelay);

const currentTime = localStorage.getItem(LOCALSTORAGE_KEY);

player.setCurrentTime(currentTime).catch(function (error){
  console.log(error);
});