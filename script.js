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

  if (userNumber < 8 || userNumber > 128) {
    alert("The value you entered is incorrect. Please try again.");
  }

  // CONFIRM WITH USER TO INCLUDE LOWERCASE
  var wantLower = confirm("Would you like to include lowercase letters in your password?");
  var wantUpper = confirm("Would you like to include Uppercase letters in your password?");
  var wantNumber = confirm("Would you like to include numbers in your password?");
  var wantSpecial = confirm("Finally, would you like to include special characters in your password?");

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


  if (wantUpper == false && wantLower == false && wantNumber == false && wantSpecial == false) {
    alert("Please enter a password criteria.");
    return passwordGen();
  }


  // displays all of the arrays of chars that are true
  console.log(passwordPool);

  // This for loop is looping through the variable arrays that have been pushed to the passwordPool
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

// Assignment Code 
// writePassword();


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
