// // This code makes all the value in de objectlist lowercase.
const newMovieList = movies.map((a) => {
    a.title = a.title.toLowerCase()
    return a;
}); 


const LatestMovies = movies.filter((movie) => movie.year >= "2014");
const AllMovies = document.getElementById("allMovies");
const MovieUl = document.querySelector("#FilteredMovieList");
const radios = document.querySelectorAll('input[type=radio][name="selectie-movies"]');
const Searchbar = document.getElementById("searchBar");

const makeMovieElement = (movie) => {

    const newLi = document.createElement("li");
    const newA = document.createElement("a");
    const newImg = document.createElement("img");
    let y = "https://www.imdb.com/title/";
    AllMovies.appendChild(newLi);
    newLi.appendChild(newA);
    newA.setAttribute("id" , movie.title);
    newA.setAttribute("href" , (y + movie.imdbID));
    newA.setAttribute("target", "blank");
    newA.appendChild(newImg);
    return newLi
}

//This is the code for to create a list from the search movie text value. 
Searchbar.addEventListener("keyup", (e) => {
    const searchString = e.target.value.toLowerCase();

    MovieUl.innerHTML = '';
    for (const movie in filteredMovies) {
        const element = makeMovieElement(movie);
        MovieUl.appendChild(element)
    }     
})

//This is the code to create the list when a radiobutton is selected.
radios.forEach(radio => radio.addEventListener('change', (e) => {
    const target = e.target;
    const targetId = target.id;
    const filteredMovies = movies.filter((movie) => movie.title.includes(targetId));

    switch(targetId){
        case "latest-movies": 
            MovieUl.innerHTML = '';
           for (const movie in LatestMovies) {
                console.log(LatestMovies)
                const element = makeMovieElement(movie);
                MovieUl.appendChild(element)
            }
        break;
        case "avenger":
            MovieUl.innerHTML = '';
            for (const movie in filteredMovies) {
                const element = makeMovieElement(movie);
                console.log(element);
                MovieUl.appendChild(element)
            }
        break;
        case "x-men":
            MovieUl.innerHTML = '';
            for (const movie in filteredMovies) {
                const element = makeMovieElement(movie);
                MovieUl.appendChild(element)
            }
        break;
        case "princess":            
        MovieUl.innerHTML = '';
        for (const movie in filteredMovies) {
            const element = makeMovieElement(movie);
            MovieUl.appendChild(element)
        }
        break;
        case "batman":
            MovieUl.innerHTML = '';
            for (const movie in filteredMovies) {
                const element = makeMovieElement(movie);
                MovieUl.appendChild(element)
            }
        break;
        default:
            alert("Probeer de pagina te vernieuwen...")
    }  
}
))

// This code created the startpageview for ALL MOVIES.

