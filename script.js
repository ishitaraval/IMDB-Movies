const button = document.querySelector('.button')
const button1 = document.querySelector('.button1')
const Id = document.querySelector('.idnum')
const Title = document.querySelector('.title')
const Year = document.querySelector('.year')
const Length = document.querySelector('.length')
const Rating = document.querySelector('.rating')

button.addEventListener("click", function() {

    // creating variable for text input
    const selectId = document.querySelector('#inputValue').value;
console.log("Ready");


function getMovieById() {
    fetch(`https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/${selectId}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "d98c69ccf1mshd527d2d5e50e8b2p1c4c81jsn38370dfdd88b",
            "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com"
        }
    })
    .then((response) => response.json())
    .then(response => {
        console.log(response);
        const displayTitle = response.title;
        const displayYear = response.year;
        const displayLength = response.length;
        const displayRating = response.rating;

        // displaying data from array
        
        Id.innerHTML = `<h3>Film Title: </h3> ${displayTitle}`;
        Year.innerHTML = `<h3>Film Year: </h3> ${displayYear}`;
        Length.innerHTML = `<h3>Film Length: </h3> ${displayLength}`;
        Rating.innerHTML = `<h3>Film Rating: </h3> ${displayRating}`;

        
    })
    .catch(err => {
        console.error(err);
    });
 }
 getMovieById();
});

button1.addEventListener("click", function() {

    // creating variable for text input
    const selectTitle = document.querySelector('#inputValue1').value;
    const filmTitle = document.getElementById("title");
    console.log("Ready");
  

function getMovieByName() {
    fetch(`https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/${selectTitle}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "d98c69ccf1mshd527d2d5e50e8b2p1c4c81jsn38370dfdd88b",
		"x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com"
	}
})
    .then((response) => response.json())
    .then(response => {
       console.log(response.titles);
       for(i=0;i<4;i++){
         filmTitle.innerHTML = response.titles[i].title
       }
        
    })
    .catch(err => {
        console.error(err);
    });
 }
 getMovieByName();
});
