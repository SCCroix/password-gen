// Assignment code here
function generatePassword() {
  let characters = "";
  let lowerCharacters = "abcdefghijklmnopqrstuvwxyz";
  let upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let numbers = "01234567890";
  let special_characters = " \"!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"


  let password = "";

  // Get settings for password
  let length = prompt("How many Characters?");
  if (length < 8 || length > 128) {
    return alert("Password length must be a number between 8 and 128");
  }

  // Add lowercase, uppercase, numeric, and/or special characters
  if (confirm("Contain lowercase letters?")) {
    characters += lowerCharacters;
  };

  if (confirm("Contain uppercase letters?")) {
    characters += upperCharacters;
  };

  if (confirm("Contain numbers?")) {
    characters += numbers;
  }

  if (confirm("Contain Special characters?")) {
    characters += special_characters;
  };

  if (characters === "") {
    return alert("No characters selected");
  }
  
  // Generate password from selected characters
  for (let i = 0; i < length ; i++) {
    password += characters[Math.floor(Math.random()*characters.length)]
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
