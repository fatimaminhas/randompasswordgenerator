// Assignment code here
var index = Math.floor(Math.random() * special.length);
console.log(index);
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var special = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
//console.log(special[index]);
// between 8 and 128 characters
var characterBank = "";
//PROMPTS
//lowercase
//uppercase
//numerical
//special
function generatePassword() {
  console.log("Hello from generatePassword");

  var passwordLength = window.prompt(
    "How many characters do you want the password to be? (pick a number between 8 and 128)"
  );
  console.log("password length", passwordLength);

  var confirmLower = window.confirm("....... lowercase");
  console.log(confirmLower);

  var confirmUpper = window.confirm("....... uppercase");
  console.log(confirmUpper);

  var confirmNumerical = window.confirm("....... numerical");
  console.log(confirmNumerical);

  var confirmSpecial = window.confirm("....... special");
  console.log(confirmSpecial);

  if (confirmLower === true) {
    console.log("Before", characterBank);
    characterBank = characterBank + lower;
    console.log("After", characterBank);
  }

  if (confirmUpper === true) {
    console.log("Before", characterBank);
    characterBank = characterBank + upper;
    console.log("After", characterBank);
  }

  if (confirmNumerical === true) {
    console.log("Before", characterBank);
    characterBank = characterBank + numbers;
    console.log("After", characterBank);
  }

  if (confirmSpecial === true) {
    console.log("Before", characterBank);
    characterBank = characterBank + special;
    console.log("After", characterBank);
  }
  //return "Look it's a password!";
}
// Get references to the #generate element
var generateBtn = document.getElementById("generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
