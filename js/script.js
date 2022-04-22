// // This code makes all the value in de objectlist lowercase.
const newMovieList = movies.map((a) => {
    a.title = a.title.toLowerCase()
    return a;
}); 


const latestMovies = movies.filter((movie) => movie.year >= "2014");
const allMovies = document.getElementById("allMovies");
const movieUl = document.querySelector("#FilteredMovieList");
const radios = document.querySelectorAll('input[type=radio][name="selectie-movies"]');
const searchBar = document.getElementById("searchBar");

const makeMovieElement = (movie) => {
    const newLi = document.createElement("li");
    const newA = document.createElement("a");
    const newImg = document.createElement("img");
    let y = "https://www.imdb.com/title/";
    allMovies.appendChild(newLi);
    newLi.appendChild(newA);
    newA.setAttribute("id" , movie.title);
    newA.setAttribute("href" , (y + movie.imdbID));
    newA.setAttribute("target", "blank");
    newA.appendChild(newImg);
    newImg.setAttribute("src", movie.poster);
    return newLi
}

for (const movie of newMovieList) {
    const element = makeMovieElement(movie);
    allMovies.appendChild(element)
}

for (const movie of movies) {
    const element = makeMovieElement(movie);
    movieUl.appendChild(element)
}


//This is the code for to create a list from the search movie text value. 
searchBar.addEventListener("keyup", (e) => {
    const searchString = e.target.value.toLowerCase();
    const searchedMovieList = newMovieList.filter((h) => {
        return (h.title.includes(searchString));
        });
    movieUl.innerHTML = '';
    for (const movie of searchedMovieList) {
        const element = makeMovieElement(movie);
        movieUl.appendChild(element)
    }     
})

//This is the code to create the list when a radiobutton is selected.
radios.forEach(radio => radio.addEventListener('change', (e) => {
    const target = e.target;
    const targetId = target.id;
    const filteredMovies = movies.filter((movie) => movie.title.includes(targetId));

    switch(targetId){
        case "latest-movies": 
            movieUl.innerHTML = '';
           for (const movie of latestMovies) {
                const element = makeMovieElement(movie);
                movieUl.appendChild(element)
            }
        break;
        case "avenger":
            movieUl.innerHTML = '';
            for (const movie of filteredMovies) {
                const element = makeMovieElement(movie);
                movieUl.appendChild(element)
            }
        break;
        case "x-men":
            movieUl.innerHTML = '';
            for (const movie of filteredMovies) {
                const element = makeMovieElement(movie);
                movieUl.appendChild(element)
            }
        break;
        case "princess":            
        movieUl.innerHTML = '';
        for (const movie of filteredMovies) {
            const element = makeMovieElement(movie);
            movieUl.appendChild(element)
        }
        break;
        case "batman":
            movieUl.innerHTML = '';
            for (const movie of filteredMovies) {
                const element = makeMovieElement(movie);
                movieUl.appendChild(element)
            }
        break;
        default:
            alert("Probeer de pagina te vernieuwen...")
    }  
}
))

// This code created the startpageview for ALL MOVIES.

