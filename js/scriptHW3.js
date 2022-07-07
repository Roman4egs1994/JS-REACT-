"Use strict";

let numberOfFilm;

function start() {
    numberOfFilm = +prompt('Cколько фильмов вы уже посмотрели?', '');

    while (numberOfFilm == '' || numberOfFilm == null || isNaN(numberOfFilm) ) {
        numberOfFilm = +prompt('Cколько фильмов вы уже посмотрели?', '');
    };
}
start();

const  personalMovieDB = { 
    count: numberOfFilm,
    movies: {},
    actors: {},
    geners: [],
    privat: false,
};
  



function rememberMyFilms() {
    for (let i = 0 ; i < 2 ; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', '');
        const b = prompt('На сколько оцените его?', '');
        
        if ( a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('errors');
            i--;
        }
    }
}
rememberMyFilms();



function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Вы посмотрели очень мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert ('Вы классический зритель');
    } else if (personalMovieDB.count >= 30 ) {
        alert ('Вы киноман!');
    } else {
        alert('Вы ошибка в этой жизни');
    }
}
detectPersonalLevel();


console.log(personalMovieDB);