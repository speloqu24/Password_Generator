// Assignment Code
var generateBtn = document.querySelector("#generate");

// Declaring GLOBAL Variables
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "_", "`", "{", "|", "}", "~"];

// This array stores all array characters, dictated by USERNUMBER, to global memory 
var passwordPool = [];

//FUNCTION DECLARATION & SCOPE VARIABLES
function passwordGen() {


  // Prompting the user to select a number for password length 
  var userNumber = parseInt(prompt("Choose a number between 8 - 128 to generate your password!"));

  // If user chooses a number outside 8 and 128, alert user to  try again. 
  if (userNumber < 8 || userNumber > 128) {
    alert("The value you entered is incorrect. Please try again.");
  }

  // Declare password characters
  var wantLower = confirm("Would you like to include lowercase letters in your password?");
  var wantUpper = confirm("Would you like to include uppercase letters in your password?");
  var wantNumber = confirm("Would you like to include numbers in your password?");
  var wantSpecial = confirm("Finally, would you like to include special characters in your password?");


  // Conditions
  if (wantUpper) {
    passwordPool = passwordPool.concat(upperCase);
  }

  if (wantLower) {
    passwordPool = passwordPool.concat(lowerCase);
  }
  if (wantNumber) {
    passwordPool = passwordPool.concat(number);
  }

  if (wantSpecial) {
    passwordPool = passwordPool.concat(specialChar);
  }

  // Error condition - If all values equal false alert user to choose a criteria. 
  if (wantUpper == false && wantLower == false && wantNumber == false && wantSpecial == false) {
    alert("Please enter a password criteria.");
    return passwordGen();
  }


  // Displays array characters that are true
  console.log(passwordPool);

  // This for loop goes through the variable arrays that have been pushed to the passwordPool
  var result = "";
  for (var i = 0; i < userNumber; i++) {
    result = result += passwordPool[Math.floor(Math.random() * passwordPool.length)];
  }

  return result;

}

// Write password to the #password input
function writePassword() {
  var password = passwordGen();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
