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

//Q2 