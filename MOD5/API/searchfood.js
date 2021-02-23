var unirest = require("unirest");

var req = unirest("GET", "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search");

req.query({
	"query": "burger",
	"diet": "vegetarian",
	"excludeIngredients": "coconut",
	"intolerances": "egg, gluten",
	"number": "10",
	"offset": "0",
	"type": "main course"
});

req.headers({
	"x-rapidapi-key": "85891dacc4msha99f37435870c1fp12fdafjsnc27d09c57215",
	"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});