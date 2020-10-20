// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Creating generatePassword method

function generatePassword () {

var password = Math.random ();

return password;





/* Beginning of Number Choice Output "If" statement
if (userChooseNumbers) {
  return '0123456789';
 }
//End of Number Choice Output "If" Statment

if (userChooseLetters) {
  return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
}

if (userChooseCharacters) {
  return '!@#$%^&*()_+-=';
}

if (usermultiChoice) {
  return "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-=";
}


End of Function  */

}

