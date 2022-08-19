// Assignment code here
function generatePassword() {
  let password = "";

  // Get settings for password
  let length = prompt("How many Characters?");
  if (length < 8 || length > 128) {
    return alert("Password length must be a number between 8 and 128");
  }

  // Add lowercase, uppercase, numeric, and/or special characters
  let lowercase = confirm("Contain lowercase letters?");
  let uppercase = confirm("Contain uppercase letters?");
  let numeric = confirm("Contain numbers?");
  let special_characters = confirm("Contain Special characters?");

  
  for (let i = 0; i < length ; i++) {
    password += i.toString();
  }

  return password
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
