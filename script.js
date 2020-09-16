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

//First User Prompt Confirms Numbers
var numbers = confirm ('Do you want numbers in your password?')



//Beginning "if" statement for user's who select numbers 
    if(numbers) {
//Creating random numbers from 1 to 1000    
var password = Math.floor(Math.random() * 1000) + 1;

//outputing random password number 
return password;
    }
//Ending "if" statement for user's who select numbers






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

