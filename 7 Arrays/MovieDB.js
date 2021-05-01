// Before Movie Excercise
var someObject = {
	friends: [
	{name: "Malfoy"},
	{name: "Crabbe"},
	{name: "Goyle"}
	],
	color: "baby blue",
	isEvil: true
};


var movies = [
	{
		title: "In Bruges",
		hasWatched: true,
		rating: 5
	},

	{
		title: "Frozen"
		hasWatched: false,
		rating: 4.5
	}
]

movies.forEach(function(movie){
	var result = "You have ";
	if(movie.hasWatched) {
		result += "watched ";
	} else {
		result += "not seen ";
	}
	result += "\"" + movie.title + "\" -";
	result += movie.rating + " stars";
	console.log(result)
});


// Debo de crear un array. Dento del arry deben haber 4 peliculas.
// Cada pelicula debe tener titulo, rating y si el usuario la a visto.

