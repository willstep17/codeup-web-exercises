(function(){
"use strict";
    let movies = [
        {
            title: "Casablanca",
            rating: 5,
            id: 1,
            img: "img/casablanca.jpg"
        },
        {
            title: "Star Wars: A New Hope",
            rating: 4,
            id: 2,
            img: "img/StarWarsANewHope.jpg"
        },
        {
            title: "Goonies",
            rating: 4,
            id: 3,
            img: "img/goonies.jpg"
        },
        {
            title: "Transformers",
            rating: 1,
            id: 4,
            img: "img/transformers.webp"
        }
    ];

    const rateMovies = (inputMoviesArray) => {
        inputMoviesArray.forEach(function(movie) {
            if(movie.rating === 5) {
                console.log(`${movie.title} is fantastic!`);
            } else if (movie.rating === 1) {
                console.log(`${movie.title} is terrible!`);
            } else {
                console.log(`${movie.title} is just alright...`);
            }
        });
    };

    rateMovies(movies);
})();
