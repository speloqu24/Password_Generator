// Declaring GLOBAL Variables
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "_", "`", "{", "|", "}", "~"]

// This array stores all array characters, dictated by USERNUMBER, to global memory 
var passwordPool = []


var generateBtn = document.querySelector("#generate");

//FUNCTION 
function passwordGen() {

  // SCOPE VARIABLES INSIDE FUNCTION

  var userNumber = prompt("Pick a number between 8 - 128");
  console.log("Number user selected: " + userNumber)

  if (userNumber >= 8 || userNumber <= 128) {
    var wantUpper = confirm("Click confirm to include upper case chars");
    if (wantUpper === true) {
      passwordPool.push(upperCase)
    }

    // CONFIRM WITH USER TO INCLUDE LOWERCASE
    var wantLower = confirm("Click confirm to include lower case chars");
    if (wantLower === true) {
      passwordPool.push(lowerCase)
    }

    // CONFIRM WITH USER TO INCLUDE NUMBERS

    var wantNumber = confirm("Click confirm to include numbers chars");
    if (wantNumber === true) {
      passwordPool.push(number)
    }
    var wantSpecial = confirm("Click confirm to include special chars");
    if (wantSpecial === true) {
      passwordPool.push(specialChar)
    }

    // displays all of of the arrays of chars that are true
    console.log(passwordPool)

    // This for loop is looping through the variable arrays that have been pushed to the passwordPool
    var result = ""

    for (var i = 0; i < userNumber; i++) {
      var password = passwordPool[Math.floor(Math.random() * passwordPool.length)];
      result = result += password[i]
    }

    // 4) have the random password stored to a variable (only length that user picked "userNumber")  
    // create new variable that stores the value of userNumber 
    // 5) display the password to the front end

    // if "userNumber" is invalid, prompt the user again

    return result;

  }
}


// Write password to the #password input
function writePassword() {
  var password = passwordGen();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Assignment Code

writePassword(password)


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
