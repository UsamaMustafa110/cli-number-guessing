#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {
        message: "enter your first guess",
        type: "number,",
        name: "UserGuessedNumber",
    },
]);
if (answer.UserGuessedNumber === randomNumber) {
    console.log("Congratulations! you guessed it right");
}
else {
    console.log("Ah! your guess is not right, try again");
}
