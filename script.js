/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';




function rememberMyFilms() {
   for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?', '');
if (a != null && b!= '' && b!=null && b!='' & a.length <50) {
    personalMovieDB[a] = b;
} else i--; 
console.log(i);
   }
}



function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}





const personalMovieDB = {
    count: 0, 
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
                personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        }
    
    },
    writeYourGenren: function() {
        for(let i = 0; i <= 2; i++) {
            personalMovieDB.genres[i] = prompt(`Ваш любимій жанр под номером ${i+1}`);
            if (!personalMovieDB.genres[i]) i--;
        }
        personalMovieDB.genres.forEach(item => console.log(`любимый жанр ${personalMovieDB.genres.indexOf(item)+1} : ${item}`));
    
    },
    toggleVisibleMyDB: function() {
        personalMovieDB.privat = !personalMovieDB.privat;
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10 ) {
        console.log('Просмотрено мало фильмов');
    } else if (personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count > 50) {
        console.log('Вы киноман');
    } else console.log('Произошла ошибка');
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    }  
};



start();
rememberMyFilms();
detectPersonalLevel();
showMyDB(personalMovieDB.privat);
writeYourGenren();




