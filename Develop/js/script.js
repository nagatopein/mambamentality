// Assignment code here



// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);


/* define dialog box and btns */

const updateButton = document.getElementById('generate');
const pickPassword = document.getElementById('pickPassword');
const outputBox = document.querySelector('output');
const selectEl = pickPassword.querySelector('select');
const confirmBtn = pickPassword.querySelector('#confirmBtn');

const characterAmount = document.getElementById('characterAmount')
const lowerCaseEl = document.getElementsByClassName('lower');
const upperCaseEl = document.getElementsByClassName('upper');
const numberEl = document.getElementsByClassName('number');
const symbolEl = document.getElementsByClassName('symbol');
const form = document.getElementById('pickPassword');
const passwordDisplay = document.getElementById('passwordDisplay');

const upperCharCodes = arrayLowToHigh(65, 90)
const lowerCharCodes = arrayLowToHigh(97, 122)
const numberCharCodes = arrayLowToHigh(48, 57)
const symbolCharCodes = arrayLowToHigh(33, 47).concat(
  arrayLowToHigh(58, 64)
  ).concat(
    arrayLowToHigh(91, 96)
    ).concat(
      arrayLowToHigh(123, 126))


form.addEventListener('submit', e => {
  e.preventDefault()
  const password = generatePassword(characterAmount, lowerCaseEl, upperCaseEl, numberEl, symbolEl)
  passwordDisplay.innerText = password
})

function generatePassword (characterAmount, upperCaseEl, numberEl, symbolEl) {
  // String.fromCharCode(65)
  var charCodes = lowerCharCodes
  if (upperCaseEl) charCodes = charCodes.concat(upperCaseCharCodes)
  if (numberEl) charCodes = charCodes.concat(numberCharCodes)
  if (symbolEl) charCodes = charCodes.concat(symbolCharCodes)
  // console.log(lowerCharCodes)

  const passwordCharacters = []
  for (var i = 0; i < characterAmount; i++) {
    const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
  // left off here around 26 min mark on video
  return passwordCharacters.join('')
}

function arrayLowToHigh(low, high) {
  const array = []
  for (let i = low; i <= high; i++ ) {
    array.push(i)
  }
  return array
}


// If a browser doesn't support the dialog, then hide the
// dialog contents by default.
if ( typeof pickPassword.showModal !== 'function' ) {
  pickPassword.hidden = true;
  /* a fallback script to allow this dialog/form to function
     for legacy browsers that do not support <dialog>
     could be provided here.
  */
}
// "Update details" button opens the <dialog> modally
updateButton.addEventListener('click', function onOpen() {
  if (typeof pickPassword.showModal === "function") {
    pickPassword.showModal();
  } else {
    outputBox.value = "Sorry, the <dialog> API is not supported by this browser.";
  }
});
// "Favorite animal" input sets the value of the submit button
selectEl.addEventListener('change', function onSelect(e) {
  confirmBtn.value = selectEl.value;
});
// "Confirm" button of form triggers "close" on dialog because of [method="dialog"]
pickPassword.addEventListener('close', function onClose() {
  outputBox.value = pickPassword.returnValue + " button clicked - " + (new Date()).toString();
});