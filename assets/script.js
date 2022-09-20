
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword()  {
  var length = prompt("How many characters would you like your password to contain?")
 console.log(length)

 if (length < 8) {
  alert ("choose a length of at least 8 characters and no more than 128 characters")
}

if (length > 128) {
  alert ("choose a length of at least 8 characters and no more than 128 characters")
}


 var hasspecial = confirm("include special characters?")
 console.log(hasspecial)

 var haslower = confirm("include lowercase characters? ")
 console.log(haslower)

 var hasupper = confirm("include uppercase characters?")
 console.log(hasupper)

 var hasnumbers = confirm("include numbers?")
 console.log(hasnumbers)

 const symbols = "!@#$%^&*_-+=";
 const lowercase = "abcdefghijklmnopqrstuvwxyz"
 const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
 const numbers = "0123456789";
 var str= ""

if (hasspecial===true) {
    str = str + symbols
    //concatination goes here
}

if (haslower===true) {
  str = str + lowercase
}

if (hasupper===true) {
  str = str + uppercase
}

if (hasnumbers===true) {
  str = str + numbers
}




  var password= ""
  for (var i =0; i<length;i ++) {
    var random=str[Math.floor(Math.random() * str.length)];
    password = password + random
  } 


  return password
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



