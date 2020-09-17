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
var numbers = confirm ('Do you want numbers in your password?');
 

//Beginning "if" statement for user's who select numbers 
    if(numbers) {
//Creating random numbers up to 128    
var password = Math.floor(Math.random() * 128) + 1;

//outputing random password number 
return password += "pwd";
    }
//Ending "if" statement for user's who select numbers



//Second User Prompt Confirms Letters
 var letters = confirm ('Do you want letters in your password?');

 //Beginning "if" statement for user's who select letters
 var char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
     if(letters) {
    
    var password = char[Math.floor(Math.random() * char.length)];

        return password += "pwd" + password;
    }
//End statement for user's who select letters


//Third User Prompt Confirms Misc Characters
var miscChar = confirm ('Do you want Special Characters in your password?');


var miscChar = '!@#$%^&*()+-=' + '!@#$%^&*()+-=';
    if(miscChar) {
        var password = miscChar[Math.floor(Math.random() * miscChar.length)];

        return password += '$' + password + '@' + password;
    }



}

