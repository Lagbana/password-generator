// Assignment Code (need to developed generatePassword

let generateBtn = document.querySelector("#generate");

// created an object to contain arrays of different character types
const allCharacters = {
  numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  smallCapLetters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  bigCapLetters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  specialCharacters: ['~', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '{', '}', '[', ']', '?', '<', '>']
}

// function to 
function randomCharacterPicker(context, length) {
  let results = ''
  for (let i = 0; i < length; i++){
    const keys = extractTrue(context)
    results += generate(keys)
  }
  return results
}

//
function generate(keys) {
  const key = keys[Math.floor(Math.random() * keys.length)]
  const value = allCharacters[key]
  return value[Math.floor(Math.random() * value.length)]
}

// This function takes in an object and returns an object with keys that are "true"
function extractTrue(context) {
  return Object.keys(context).filter(key => context[key])
}

// This function prompts the user and takes the user's input for password length choice
function lengthChoice() {
 const  passwordLength = prompt(
    `Please choose your ideal password length,
  'Minimum 8 characters,
  'Maximum 128 characters.`
  )
  return passwordLength
}

// This function validates the user input and when validated saves the user choices of characters as variables. 
// The object of choice variables and the passwordLength variable are passed into the randomCharacterPicker function as arguments and returned

function generatePassword() {

  const passwordLength = lengthChoice()

  if (passwordLength < 8 || passwordLength > 128) {
    alert('Invalid password length, please choose a number between 8 and 128 characters');
  }
  else if (isNaN(passwordLength)) {
    alert('Invalid entry, please choose a number between 8 and 128 characters');
  }
  else {
    console.log(passwordLength)
    const numbers = confirm("Do you want your password to include Numbers?")
    const smallCapLetters = confirm("Do you want your password to include Lowercase Letters?")
    const bigCapLetters = confirm("Do you want your password to include Uppercase Letters?")
    const specialCharacters = confirm("Do you want your password to include Special Characters?")
    const general = randomCharacterPicker({specialCharacters, numbers, smallCapLetters, bigCapLetters}, passwordLength)
    return general
  }
}

// Write password to the #password input (Displays password on the screen)
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// // Add event listener to generate button (This executes writePassword() upon button click)
generateBtn.addEventListener("click", writePassword);