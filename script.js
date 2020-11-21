// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  function generatePassword() {

    var length = prompt(
      "How many characters do you wish to have?"
    );
    if (length < 8 || length > 128) {
      alert("You have chosen " + length, "many words");
      var passwordLow = confirm("Do you want to include lower case letters?");
      var passwordUpp = confirm("Do you want to include upper case letters?");
      var passwordNum = confirm("Do you want to include numbers?");
      var passwordSpe = confirm("Do you want to include special characters?");
    } else { 
      (length > 7 || length < 129) 
      alert("Not a valid number");
    }
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&'()*+-./:;<=>?@[\]^_`{|}~",
      retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Click generate password button 


//Call function to generate passwords
  //Presented with a series of prompts for password criteria


//Cycle through the criteria

  //Choose a length of at least 8 characters and no more than 128 characters


  //Choose lowercase, uppercase, numeric, and/or special characters



//Return password from the generate password button
  //Input should be validated and at least one character type should be selected
  //Password is generated that matches the selected criteria



//Add the password to the screen
  //Password is either displayed in an alert or written to the page
