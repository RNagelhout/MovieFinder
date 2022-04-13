// This code makes all the value in de objectlist lowercase.
const newMovieList = movies.map((a) => {
    a.title = a.title.toLowerCase()
    return a;
}); 

const getLatestMovies = movies.filter(movie => movie.year >= "2014")
const getAvengerMovies = movies.filter(movie => movie.title.includes ("avengers"));
const getXMenMovies = movies.filter(movie => movie.title.includes ("x-men"));
const getPrincessMovies = movies.filter(movie => movie.title.includes ("princess"));
const getBatmanMovies = movies.filter(movie => movie.title.includes ("batman"));

const getAllMovies = document.getElementById("allMovies");
const getMovieUl = document.getElementById('movies');
const newLi = document.createElement("li");
const newA = document.createElement("a");
const newImg = document.createElement("img");
let y = "https://www.imdb.com/title/";
const radios = document.querySelectorAll('input[type=radio][name="selectie-movies"]');

const getSearchbar = document.getElementById("searchBar");

//This is the code for to create a list from the search movie text value. 
getSearchbar.addEventListener("keyup", (e) => {
    const searchString = e.target.value.toLowerCase();
    console.log(searchString);
    const filteredMovies = newMovieList.filter((h) => {
    return (h.title.includes(searchString));
    });
    console.log(filteredMovies)
    getMovieUl.innerHTML = '';
    let x = false;
    for (i = 0; i <= filteredMovies.length ; i++) {
        getMovieUl.appendChild(newLi.cloneNode(x));
        newLi.appendChild(newA);
        newA.setAttribute("id" , filteredMovies[i].title);
        newA.setAttribute("href" , (y + filteredMovies[i].imdbID));
        newA.setAttribute("target", "blank");
        newA.appendChild(newImg);
        newImg.setAttribute("src", filteredMovies[i].poster);
        x = true;
        };
    x = false;      
})

//This is the code to create the list when a radiobutton is selected.
radios.forEach(radio => radio.addEventListener('change', (e) => {
    const target = e.target;
    const targetId = target.id;
    let x = false;
    let y = "https://www.imdb.com/title/";

    switch(targetId){
        case "latest-movies": 
            getMovieUl.innerHTML = '';
            for (i = 0; i <= getLatestMovies.length; i++) {
                if ( i <= getLatestMovies.length ) {
                getMovieUl.appendChild(newLi.cloneNode(x));
                newLi.appendChild(newA);
                newA.setAttribute("id" , getLatestMovies[i].title)
                newA.setAttribute("year" , getLatestMovies[i].year)
                newA.setAttribute("type" , getLatestMovies[i].type)
                newA.setAttribute("href" , (y + getLatestMovies[i].imdbID));
                newA.setAttribute("target", "blank");
                newA.appendChild(newImg)
                newImg.setAttribute("src", getLatestMovies[i].poster);
                x = true;
                } 
        }   
        break;
        case "avenger":
            getMovieUl.innerHTML = '';
            for (let i = 0; i <= getAvengerMovies.length; i++){
                getMovieUl.appendChild(newLi.cloneNode(x));
                newLi.appendChild(newA);
                newA.setAttribute("id" , getAvengerMovies[i].title)
                newA.setAttribute("year" , getAvengerMovies[i].year)
                newA.setAttribute("type" , getAvengerMovies[i].type)
                newA.setAttribute("href" , (y + getAvengerMovies[i].imdbID));
                newA.setAttribute("target", "blank");
                newA.appendChild(newImg);
                newImg.setAttribute( "src", getAvengerMovies[i].poster);
                x = true;
            };
            x = false;
        break;
        case "x-men":
            getMovieUl.innerHTML = '';
            for (let i = 0; i <= getXMenMovies.length; i++){
                getMovieUl.appendChild(newLi.cloneNode(x));
                newLi.appendChild(newA);
                newA.setAttribute("id" , getXMenMovies[i].title)
                newA.setAttribute("year" , getXMenMovies[i].year)
                newA.setAttribute("type" , getXMenMovies[i].type)
                newA.setAttribute("href" , (y + getXMenMovies[i].imdbID));
                newA.setAttribute("target", "blank");
                newA.appendChild(newImg);
                newImg.setAttribute( "src", getXMenMovies[i].poster);
                x = true;
            };
            x = false;
        break;
        case "princess":            
        getMovieUl.innerHTML = '';
        for (let i = 0; i <= getPrincessMovies.length; i++){
            getMovieUl.appendChild(newLi.cloneNode(x));
            newLi.appendChild(newA);
            newA.setAttribute("id" , getPrincessMovies[i].title)
            newA.setAttribute("year" , getPrincessMovies[i].year)
            newA.setAttribute("type" , getPrincessMovies[i].type)
            newA.setAttribute("href" , (y + getPrincessMovies[i].imdbID));
            newA.setAttribute("target", "blank");
            newA.appendChild(newImg);
            newImg.setAttribute( "src", getPrincessMovies[i].poster);
            x = true;
        };
        x = false;
        break;
        case "batman":
            getMovieUl.innerHTML = '';
            for (let i = 0; i <= getBatmanMovies.length; i++){
                getMovieUl.appendChild(newLi.cloneNode(x));
                newLi.appendChild(newA);
                newA.setAttribute("id" , getBatmanMovies[i].title)
                newA.setAttribute("year" , getBatmanMovies[i].year)
                newA.setAttribute("type" , getBatmanMovies[i].type)
                newA.setAttribute("href" , (y + getBatmanMovies[i].imdbID));
                newA.setAttribute("target", "blank");
                newA.appendChild(newImg);
                newImg.setAttribute( "src", getBatmanMovies[i].poster);
                x = true;
            };
            x = false;
        break;
        default:
            alert("Probeer de pagina te vernieuwen...")
    }  
    
    
}
))

// This code created the startpageview for ALL MOVIES.
function loadMovies () {
    for (let i = 0; i <= movies.length; i++){
        getAllMovies.appendChild(newLi.cloneNode(true));
        newLi.appendChild(newA);
        newA.setAttribute("target", "blank");
        newA.setAttribute("id" , movies[i].title)
        newA.setAttribute("year" , movies[i].year)
        newA.setAttribute("type" , movies[i].type)
        newA.setAttribute("href" , (y + movies[i].imdbID));
        newA.appendChild(newImg);
        newImg.setAttribute( "src", movies[i].poster);
    }
};

console.log(loadMovies());
// This code created the startpageview for the filteredmovies.
function loadLatestMovies () {
    getMovieUl.innerHTML = '';
    let x = false;
            for (i = 0; i <= getLatestMovies.length ; i++) {
                getMovieUl.appendChild(newLi.cloneNode(x));
                newLi.appendChild(newA);
                newA.setAttribute("id" , getLatestMovies[i].title)
                newA.setAttribute("year" , getLatestMovies[i].year)
                newA.setAttribute("type" , getLatestMovies[i].type)
                newA.setAttribute("href" , (y + getLatestMovies[i].imdbID));
                newA.setAttribute("target", "blank");
                newA.appendChild(newImg)
                newImg.setAttribute("src", getLatestMovies[i].poster);
                x = true;
                }
};

console.log(loadLatestMovies());
