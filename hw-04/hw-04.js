/* 
Question 1:
forEach
Using forEach log out each of my friends but with their name all lower-cased. Use the <str>.toLowerCase()
method.
*/

const friends = ["Melissa", "Marc", "Andrew", "Nick"];

friends.forEach(function(friend) {
  console.log("I have a friend named " + friend.toLowerCase());
});

/*
map
PURPOSE: Create a new array from a source array, usually "transforming" its values.
The returned array is always the same length as the source array.
Transform an array
*/

const numbers = [1, 2, 3];
const numbersTimesTwo = numbers.map(function(num) {
  return num * 2;
});
const timesTwo = numbers.map(num => num * 2);

/*
Question 2:
Create an array that has the numbers of the array numbers squared
numbersSquared --> [1, 25, 64]
*/

const numbers_n = [1, 5, 8]
const numbersSquared = numbers_n.map(num => num * num);
console.log(numbersSquared)

/*
Question 3:
Use map to create a new array that adds the string " is awesome" to each element in the array.
*/
const instructors = ["Alex", "Daniel", "Morgan", "Ben", "Micah", "Jims"];
const awesomeinstructors = instructors.map(instructor => instructor+' is awesome');
console.log(awesomeinstructors)

/* 
Sum up the numbers in an array
# reduce
// sum equals 134
/*--- using an arrow function for the callback ---*/

const nums = [25, 6, 100, 3];
let sum = nums.reduce(function(acc, num) {
  return acc + num;
}, 0);

/* 
Question 4:
Given the array nums try to count the number of even numbers using reduce() and put it in the variable
evenNumbers:
*/
const nums_even = [25, 6, 8, 3];
even_numbers = nums_even.filter(n =>  n%2==0).length
console.log("even_numbers= ",even_numbers)

result = nums_even.reduce((accumulator, currentValue) => {
    if (currentValue % 2 == 0) {
        accumulator+=accumulator;
    }});
console.log(result)

/*
Question 5:
Filter out all "jerks"!
Put them in an array called jerks
*/
const people = ["jerks", "nice people", "jerks", "nice people", "nice people"];
let jerks = people.filter(p =>  p == 'jerks')
console.log(jerks)

/* 
Arrow Methods
Using arrow methods, do the following:
1- Create a function to get the average of a group of numbers avg([8, 2, 2, 4]) // should return 4
*/
let avg = numbers =>{
	let sum = numbers.reduce((prev,current)=>prev+current);
	return sum/numbers.length;
};
console.log(avg([8, 2, 2, 4]))

// 2- Create a function to reverse the letters in a word reverse("caterpillar") // should return "rallipretac"
let revers_w =(word => word.split("").reverse().join(""));
console.log('reverse word: ',revers_w("caterpillar"));

// Objects Exercise: The Movie Database
let movie = {
    title: 'detective conan',
    duration: 120,
    stars: ['Shinichi Kudo', 'Conan Edogawa', 'Ran Mouri','Kogoro Mouri']
};

function MovieDetails(movie) {
    console.log(movie.title + ' ,duration ' + movie.duration + ' mins');
    console.log('It stars ' + movie.stars.join(', '));
}
MovieDetails(movie);


