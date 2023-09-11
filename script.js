//Assignment code here

var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var special = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var randomPassword = "";

var characterBank = "";
//PROMPTS
//lowercase
//uppercase
//numerical
//special
function generatePassword() {
  console.log("Hello from generatePassword");

  var keyLength = prompt(
    "Your password should be between 8 to 128 characters long. Please enter your desired number of characters below."
  );
  console.log("password length", keyLength);

  if (keyLength < 8 || keyLength > 128) {
    alert(
      "Your password must be between 8 and 128 characters, please enter another number."
    );
    return;
  } else {
    var confirmLower = window.confirm(
      "Do you want lowercase letters in your password?"
    );
    console.log(confirmLower);

    var confirmUpper = window.confirm(
      "Do you want uppercase letters in your password?"
    );
    console.log(confirmUpper);

    var confirmNumerical = window.confirm(
      "Do you want numbers in your password?"
    );
    console.log(confirmNumerical);

    var confirmSpecial = window.confirm(
      "Do you want special characters in your password?"
    );
    console.log(confirmSpecial);
  }

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

  for (i = 0; i < keyLength; i++) {
    randomPassword +=
      characterBank[Math.floor(Math.random() * keyLength.length)];
  }
}
// var index = Math.floor(Math.random() * special.length);
// console.log(index);
//console.log(special[index]);

// Get references to the #generate element
var generateBtn = document.getElementById("generate");

// Write password to the #password input
function writePassword(randomPassword) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = randomPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
