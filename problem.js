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
let GlitchMessage="This password you set  should not be usde because it glitches the system";
let Password = "guacamole";
let PasswordLength= 8;
let GrantMessage="Access Granted!";
if (Password==="guacamole"&& PasswordLength === 8){
    console.log("Access Granted");
} else if (Password !== "guacamole" && PasswordLength !== 8)
    console.log('Access Denied '+ '${GlitchMessage }')

let TooShortMessage= "Your Passsword is too short!";
 if (PasswordLength <5){
    console.log(TooShortMessage)
};
let RememberPassword= "Forgot";
let ResetPassword="reset"
let ResetMessage="Let's reset your account"
let RememberMessage= "Here is a hint";
 if (RememberPassword === "Forgot"){
    console.log(RememberMessage)
 };



//I set the passsword variable to the string of "guacamole" because that will be the text input.
// === ensures  the length has to also match the number of letters in " guacamole. 
// && means both conditions have to be met for the access granted message to display. or else the "acess denied" message will  display//