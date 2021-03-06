// Assignment code here
/*GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page*/

// Get references to the #generate element

var generateBtn = document.querySelector("#generate");
//lower case letters
function generateRandomlowercase(){
  return String.fromCharCode(Math.floor(Math.random() *26)+ 97);

} 
//uppercase letters
function generateRandomUppercase(){
  return String.fromCharCode(Math.floor(Math.random() *26)+ 65);

}
//numbers
function generateRandomNumbers(){
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
 
}
function generateRandomSymbols(){
 const symbols = '!@#$%^&*()_+:?><';
 return Symbols[Math.floor(Math.random() *symbols.length)];
}

// Write password to the #password input
function writePassword() {
  var password = generateRandomNumbers();
  var password = generateRandomUppercase();
  var password = generateRandomlowercase();
  var password = generateRandomSymbols();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
prompt()