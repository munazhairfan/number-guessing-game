import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random()*6 + 1);
console.log("Welcome!");
const answer = await inquirer.prompt([{
    name: "userGuessedNumber", 
type : "number",
message: "Please Guess a Number between 1-6",}]);

if (answer.userGuessedNumber=== randomNumber)
{console.log( "Congratulations! You Guessed A Right Number :) ")}
else {console.log("You guessed a Wrong Number :'( ")};