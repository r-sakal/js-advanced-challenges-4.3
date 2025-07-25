//Q1 Show Rating 
//      Give  a rating, display a star (*) for each full rating
//       and a full-stop (.) for each half rating.

//showRating(3)
//showRating(4.5)
//showRating(0.5)

//Notes on how to do this 
        // initialise an empty string

        // loop through the rounded down rating

        // add a star for every iteration

        // if its not the last iteration add a space

        // if the number is not an integer add a full stop " ."

        // return it

function showRating(rating) {
let ratings = "";
for (let i = 0; i < Math.floor(rating); ++i) {
    //ratings = ratings + "*"
    //shorten this part by using +=
    ratings += "*"
    if (i !== Math.floor(rating - 1)) {
        //ratings = ratings + " ";
        ratings += " "
    }
}
if (!Number.isInteger(rating)) {
    //ratings = ratings + " .";
    ratings += " ."
}
return ratings;
}

console.log(showRating(2.5))

//Q2 Sort by lowest to highest price
//  Given an array of numbers, return the prices sorted by low to high.

// sortLowToHigh([20, 40, 10, 30, 50, 10])

// sortLowToHigh([5, 10, 0, 5])

// sortLowToHigh([3, 2, 1, 0])
function sortLowToHigh(arr) {
    return arr.sort((a, b) => a - b);
}


console.log(sortLowToHigh([20, 40, 10, 30, 50, 10]))

//Q3 Sort by highest to lowest price
    // Given an array of objects, return the prices sorted by high to low.
// sortHighToLow([
// {id: 1, price: 50},
// {id: 2, price: 30},
// {id: 3, price: 60},
// {id: 4, price: 10}])
function sortPriceHighToLow(price) {
    return price.sort((a, b) => b.price- a.price)
}

console.log(sortPriceHighToLow([
    {id: 1, price: 50},
    {id: 2, price: 30},
    {id: 3, price: 60},
    {id: 4, price: 10}]));

//Q4 Homework
// On Youtube, watch

//  "The Async Await Episode I Promised" -Fireship

//  "Async Await JavaScript ES7" -Techsith (1.5x speed)

//  If you are still lost watch "Async JS Crash Course - Callbacks, Promises, Async Await" - Travservy Media (1.5x speed)

//Q5 Find all the posts by a single user
//  Call this API "https://jsonplaceholder.typicode.com/posts" and return all the posts by any given user id.

//      postsByUser(4)
async function postsByUser(userId) {
    const promise= await fetch("https://jsonplaceholder.typicode.com/posts");
    const result = await promise.json(); 
    const posts = result.filter(element => element.userId === userId);
    console.log(posts)
}

postsByUser(4);

//Q6 Find the First 6 Incomplete Todos
//  Call this API "https://jsonplaceholder.typicode.com/todos" and return the first 6 incomplete todo's from the result.
//      firstSixIncomplete(todos)

