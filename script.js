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

  // Prompting the user to select a number between 8 - 128
  var userNumber = parseInt(prompt("Choose a number between 8 - 128 to generate your password!"));

  // If user chooses a number outside 8 and 128, alert user to  try again. 
  if (userNumber < 8 || userNumber > 128 || isNaN(userNumber)) {
    alert("The value you entered is incorrect. Please try again."); return passwordGen();
  }

  // Declare password characters
  var wantLower = confirm("Click OK to include lowercase letters.");
  var wantUpper = confirm("Click OK to include uppercase letters.");
  var wantNumber = confirm("Click OK to include numbers.");
  var wantSpecial = confirm("Click OK to include special characters.");


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
  var result = [];
  for (var i = 0; i < userNumber; i++) {
    result.push(passwordPool[Math.floor(Math.random() * passwordPool.length)]);
  }

  // Error condition - to validate that each password INCLUDES items from the selected criteria 

  if (wantLower) { result[2] = lowerCase[Math.floor(Math.random() * lowerCase.length)] }
  if (wantUpper) { result[9] = upperCase[Math.floor(Math.random() * upperCase.length)] }
  if (wantNumber) { result[6] = number[Math.floor(Math.random() * number.length)] }
  if (wantSpecial) { result[3] = specialChar[Math.floor(Math.random() * specialChar.length)] }


  return result.join("");

}

// Write password to the #password input
function writePassword() {
  var password = passwordGen();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
