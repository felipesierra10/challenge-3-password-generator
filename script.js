
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var savedpassword = ""
  var passwordSize = window.prompt("choose a password size between 8 and 128")

  if (passwordSize >= 8 && passwordSize <= 128) {
    var isSpecialCharacter = window.confirm("do you want to include special character in pw")
    var isNumber = window.confirm("do you want to include number in pw")
    var isLowercase = window.confirm("do you want to include lowercase in pw")
    var isUppercase = window.confirm("do you want to include uppercase in pw")

    if (isSpecialCharacter === true) {
      var randomIndex = math.floor(math.random() * specialCharacter.length)
      savedPassword = savedPassword + specialCharacter[randomIndex]
    }

    if (isNumber === true) {
      var randomIndex = math.floor(math.random() * Number.length)
      savedPassword = savedPassword + Number[randomIndex]
    }

    if (isLowercase === true) {
      var randomIndex = math.floor(math.random() * Lowercase.length)
      savedPassword = savedPassword + Lowercase[randomIndex]
    }

    if (isUppercase === true) {
      var randomIndex = math.floor(math.random() * Uppercase.length)
      savedPassword = savedPassword + Uppercase[randomIndex]
    }

  } else {
    window.alert("sorry, you are outside the pw range")
  }
  return savedpassword
}

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = upperCase.toLowerCase()
var specialCharacter = "(*&^%$#";
var number = "0123456789"


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



generateBtn.addEventListener("click", writePassword);
