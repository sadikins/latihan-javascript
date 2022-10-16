// API TMDB

const APIURL =
    'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';
const IMGPATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCHAPI =
    'https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=';

// DOM
const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

// Function

const getMovie = async (url) => {
    const response = await fetch(url);
    const data = await response.json();

    // console.log(data.results);

    showMovie(data.results);
};

getMovie(APIURL);

const showMovie = (movies) => {
    main.innerHTML = '';

    movies.forEach((movie) => {
        const { title, vote_average, overview, poster_path } = movie;

        const movieElement = document.createElement('div');

        movieElement.classList.add('movie');

        movieElement.innerHTML = `

            
                <img src="${IMGPATH + poster_path}" alt="${title}"/>
                <div class="movie-info">
                    <h3>${title}</h3>
                    <span class="${getClassRate(
                        vote_average
                    )}">${vote_average}</span>
                </div>

                <div class="overview">
                    <h3>Overview :</h3>
                    <p> ${overview}</p>
                </div>
            
        `;

        main.appendChild(movieElement);
    });
};

const getClassRate = (vote) => {
    if (vote >= 8) {
        return 'green';
    } else if (vote >= 5) {
        return 'orange';
    } else {
        return 'red';
    }
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = search.value;
    if (searchTerm) {
        getMovie(SEARCHAPI + searchTerm);

        search.value = '';
    }
});
