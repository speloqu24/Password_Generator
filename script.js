// Declaring GLOBAL Variables
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "_", "`", "{", "|", "}", "~"];

// This array stores all array characters, dictated by passwordLength, to global memory
var passwordPool = [];

var generateBtn = document.querySelector("#generate");

//FUNCTION DECLARATION & SCOPE VARIABLES
function passwordGen() {

  // Prompting the user to select a number for password length 
  var passwordLength = parseInt(prompt("Choose a number between 8 - 128 to generate your password!"));
  if (passwordLength < 8 || passwordLength > 128) {
    alert("The value you entered is incorrect. Please try again."); return passwordGen();
  } else {
    alert("You've chosen an in accurate value")
    passwordGen();
  }

  var wantUpper = confirm("Click confirm to include upper case chars");
  if (wantUpper === true) {
    passwordPool = passwordPool.concat(upperCase);
  }

  // CONFIRM WITH USER TO INCLUDE LOWERCASE
  var wantLower = confirm("Click confirm to include lower case chars");
  if (wantLower === true) {
    passwordPool = passwordPool.concat(lowerCase);
  }

  // CONFIRM WITH USER TO INCLUDE NUMBERS
  var wantNumber = confirm("Click confirm to include numbers chars");
  if (wantNumber === true) {
    passwordPool = passwordPool.concat(number);
  }

  // CONFIRM WITH USER TO SPECIAL CHARACTERS
  var wantSpecial = confirm("Click confirm to include special chars");
  if (wantSpecial === true) {
    passwordPool = passwordPool.concat(specialChar);
  }


  if (wantUpper == false && wantLower == false && wantNumber == false && wantSpecial == false) {
    alert("not accurate selection");
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
writePassword();


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
