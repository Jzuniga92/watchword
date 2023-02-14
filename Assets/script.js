var characterLength = 12;
var choiceArr = [];

var specialCharArr = ["!","@","#","$","%","^","&","*","?"];
var upperCaseArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCaseArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numberArr = ["1","2","3","4","5","6","7","8","9","0",];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts(); 
  var passwordText = document.querySelector("#password");
  
  if (correctPrompts) {
   var newPassword = generatePassword();
   passwordText.value = newPassword;
  }

function generatePassword() {

  var password = "";
  for(var i = 0; i < characterLength; i++) {
    var randomIndex = (Math.random() * choiceArr.length);
    password = password + choiceArr[randomIndex];
  }
  return password; 
}

function getPrompts(){
characterLength = parseInt(prompt("Chose a length for your password 8 - 128 characters"));

if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Character length has to be a number, 8 - 128. Try Again!");
    return false;
  } 
}

if (confirm("Select ok to include uppercase")) {
  choiceArr = choiceArr.concat(upperCaseArr);
}

if (confirm("Select ok to include lowercase")) {
  choiceArr = choiceArr.concat(lowerCaseArr);
}

if (confirm("Select ok to include numbers")) {
  choiceArr = choiceArr.concat(numberArr);
}

if (confirm("Select ok to include special characters")) {
  choiceArr = choiceArr.concat(specialCharArr);
}
return true;
// 3. generate the password
}

//4. dispaplay the password
  //return "password goes here";