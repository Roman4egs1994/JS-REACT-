"use strict"

const  personalMovieDB = { 
    count: 0,
    movies: {},
    actors: {},
    geners: [],
    privat: false,


    start: function() {
        personalMovieDB.count = +prompt('Cколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count) ) { 
            personalMovieDB.count = +prompt('Cколько фильмов вы уже посмотрели?', '');
        }
    },


    rememberMyFilms: function() {
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
    },

    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            alert('Вы посмотрели очень мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            alert ('Вы классический зритель');
        } else if (personalMovieDB.count >= 30 ) {
            alert ('Вы киноман!');
        } else {
            alert('Вы ошибка в этой жизни');
        }
    },

    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
            }
    },

    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },

    writeYourGenres: function() {
        for (let i = 1; i <= 3 ; i++ ) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);

            if (genre === '' || genre == null) {
                console.log('Вы ввели неккоректные данные');
                i--;
            } else {
                personalMovieDB.geners[i - 1] = genre;  //Возврат на -1 , что бы в базу не добавлялось пустое поле , так как счисление начинается с "0"
            }
            personalMovieDB.geners.forEach((item, i) => {
                console.log(`Любимый жанр ${i+1} - это ${item}`);
        });
    }   
}

};