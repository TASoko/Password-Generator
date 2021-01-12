a// Assignment Code

//Click generate password button 
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
function generatePassword() {
//Call function to generate passwords
  //Presented with a series of prompts for password criteria
  var length = prompt(
    "How many characters do you wish to have?"
  );
  //Cycle through the criteria
  //Choose a length of at least 8 characters and no more than 128 characters
  if (length >= 8 && length <= 128) {
    alert(" You have chosen " + length + " characters ");
    let passwordLow = confirm("Do you want to include lower case letters?");
    let passwordUpp = confirm("Do you want to include upper case letters?");
    let passwordNum = confirm("Do you want to include numbers?");
    let passwordSpe = confirm("Do you want to include special characters?");
  //Choose lowercase, uppercase, numeric, and/or special characters
      charset = "";
      password = "";

    if (passwordLow) {
      charset += "abcdefghijklmnopqrstuvwxyz";
    }
    if (passwordUpp) {
      charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (passwordNum) {
      charset += "0123456789";
    }
    if (passwordSpe) {
      charset += "#$%&'()*+-./:;<=>?@[]\^_`{|}~";
    }
    for (var i = 0, n = charset.length; i < length; ++i) {
      password += charset.charAt(Math.floor(Math.random() * n));
    }
    //Return password from the generate password button
  //Input should be validated and at least one character type should be selected
  //Password is generated that matches the selected criteria
    return password;
  }
  else {
    alert("You password must be between 8 and 128 characters.");
  }
}
// Add event listener to generate button
//Add the password to the screen
  //Password is either displayed in an alert or written to the page
generateBtn.addEventListener("click", writePassword);












