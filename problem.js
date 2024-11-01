/*
Create a function that simulates a simple password checking system. The function will take in a password and a user's input as parameters. It will then compare the user's input to the password.

- If the user's input matches the password exactly, log out "Access Granted!"
- If the user's input does not match, log out "Access Denied!"
- If the user's input is "forgot", log out "Here is a hint"
- If the user's input is "reset", log out "Let's reset your account"

Invoke examples of the function that fullfil each condition listed above. Feel free to work locally using node, and then paste your code into this file when it runs.

CHALLENGE
- If the password set is "forgot" or "reset", aside from "Access Granted", also log: "This password you set should not be used because it glitches the system".
- If the password is less than 5 characters, log out "Your password is too short!".
*/


// need to create a function (keyword) with the name (paradigm?) something like passwordChecker with the parameters (password, userInput)
//i need to be able to call the function and feed it the argument of (password) and check if the string in that password matches the string that the user defines
//i need to the function body to test if the userInput string is equal to the characters in the password string

// let password = "password123";
// let userInput = "password";


// if (userInput == password) {
//     console.log("Access Granted!") } else {
// console.log("Access Denied!")
//     }

// this prints Access Denied! in the console when i run node so im on the right track...


// now i need to turn it into a function that checks whether the password and userInput are the same characters in a string,
// and check if their userInput was forgot or reset must log the value of Here is a hint! or Let's reset your account! respectivelly


function passwordCheck(password, userInput) { if (userInput === password && password !== "forgot" && password !== "reset") {
    console.log("Access Granted!") } else if (userInput !== password && userInput !=="forgot" && userInput !== "reset" ) {
console.log("Access Denied!")
    } else if (userInput !== password && userInput === "forgot"){
console.log("Here is a hint")} else if (userInput !== password && userInput === "reset") {
console.log("Let's reset your account")} else if (userInput === password && password === "forgot"|| "reset" && userInput) {
    console.log("Access Granted!" + " This password you set should not be used because it glitches the system")
}
}
//else if (userInput === password && password === "reset" || "forgot") {
// console.log("Access Granted!") + console.log("This password you set should not be used because it glitches the system")
// } else if(password < 4) {
//     console.log("Your password is too short!")
// }

passwordCheck("password123","password123")
passwordCheck("password123","password")
passwordCheck("password123", "forgot")
passwordCheck("password123","reset")
passwordCheck("password123", "forgot reset")
passwordCheck("forgot", "forgot")
passwordCheck("forgot", "reset")


// explained: I declared a funtion called passwordCheck, with the parameters password and userInput. 
//I told the function that if userInput equals password, and does not equal forgot or reset, to log Access granted!
//but if userInput does NOT equal password, and does not equal forgot or reset, to log Access Denied!
// and if userInput equals forgot, to log Here is a hint
//and if userInput equals "reset", to log Let's reset your account

//the reason why i had to use && if userInput is not equal to password is because forgot and reset could both fall under the category of not equal to password



// function passwordCheck(password, requiredLength){
//     if (password.length >= requiredLength) {
//     console.log(“Password accepted!”)
//     } else {
//     console.log(“Your password is too short!”)
//     }
//    }
//    passwordCheck(“supercalifragilisticexpialidocious”, 15)
//    => Password accepted!
//    passwordCheck(“supercalifragilisticexpialidocious”, 125)
//    => Your password is too short!




