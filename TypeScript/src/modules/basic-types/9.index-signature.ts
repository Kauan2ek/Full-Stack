type Movie = { 
    // Define um Alias para movie, indicando que precisa ter title e year, e pode também possuir N atributos com a chave string ('director': ) ou number (2: ) e, pode receber valores de string, number ou boolean para cada um deles 
    title: string;
    year: number;
    [key: string | number]: string | number | boolean;
};

type Movies = {
    [key: string]: Movie;
};

// Fetch endpoint /movies
let movies = {
    movie1: {
        title: 'A Origem',
        year: 2010,
        isFavorite: true,
        genre: 'Ficção científica',
        director: 'Christopher Nolan',
        runtime: 142,
        10: false
    },
    movie2: {
        title: 'Um Sonho de Liberdade',
        year: 1994,
        isFavorite: true,
        genre: 'Drama',
        runtime: 142,
    },
    movie3: {
        title: 'The Godfather',
        year: 1972,
        isFavorite: false,
        genre: 'Crime',
        // characteristics: ['Legal', 'bonito', 'cheiroso'] // retorna erro, pois o valor não pode ser string
    },
};

export function showMovies(movies: Movies) {
    console.log(movies);
}

showMovies(movies);
