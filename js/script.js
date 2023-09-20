const sports = ["golf", "football", "cricket"];

const games = [
    {
        name: "Starcraft 2",
        released: "2010",        
    },
    {
        name: "Age of Empires II",       
    },
    {
        name: "Cyberpunk 2077",
        released: 2020
    }
];


/* Question 1
Create a function called printSeason that accepts one argument (has one parameter) called season.
Inside the function log the value of the argument.
Call the function and pass in the value "summer` as the argument. */

function printSeason(season) {
    console.log(season);
}

printSeason("summer");

/* Question 2
Create a function called printNumbers that has two parameters, firstNumber and secondNumber.
Inside the function log each value that is passed in.
Call the function and pass in two numbers as the arguments. */

function printNumbers(firstnumber, secondnumber) {

    result = "First" + firstnumber + "Second" + secondnumber;

    console.log(result);
}

printNumbers(21,37);

/* Question 3
Create a function called addNumbers that has three parameters.
Inside the function add all the paramters and return the result.
Assign the result to a variable and assign the variable to the innerHTML property of the DOM element with the class of total.*/

function addNumbers(number1, number2, number3) {

    result = number1 + number2 + number3;

    return result;
}

const sum = addNumbers(5,5,5);

const totalContainer = document.querySelector(".total");

totalContainer.innerHTML = `${sum}`;


/* Question 4
Create a function called createGreeting that has one parameter.
Inside the function add the value passed in to the string "Hello, my name is " and return the new string.
Assign the returned value to the innerHTML property of the DOM element with the id of name. */

function createGreeting(name) {
    result = "Hello, my name is " + name;

    return result;
}

const nameContainer = document.querySelector("#name");

nameContainer.innerHTML = createGreeting("Jarl");

/* Question 5
Create a function called printListItems that has one parameter.
Inside the function loop through the value passed in and log each item.
Call the function and pass the sports array in script.js in as the argument.*/

function printListItems(list){
{ for (let i = 0; i < list.length; i++)
    
    console.log(list[i]);
}}

printListItems(sports);

/* Question 6
Create a function called createGames that has one parameter.
Inside the function loop through the value passed in, create HTML for each property in each object and return the HTML.
Provide a default value for the released property if it is missing.
Assign the return value of the function to the innerHTML property of the DOM element with the class of game-container. */

function createGames(lists)
    {
    { for (let i = 0; i < lists.length; i++) 
        console.log(lists[i]);
    }}

const gameContainer = document.querySelector(".game-container");

gameContainer.innerHTML = createGames(games);