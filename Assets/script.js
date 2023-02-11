// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {


  alert("Select ok to include uppercase")

  alert("Select ok to include lowercase")

  alert("Select ok to include numbers")

  alert("Select ok to include special characters")
  var numbercharacters = window.prompt ("Chose a number between 8 and 128")

//1. prompt the user for the password criteria
// a. password length has to be 8 - 128
// b. lowercase, uppercase, number, and special character
// 2. validate the input
// 3. generate the password


//4. dispaplay the password
  return "password will go here";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
