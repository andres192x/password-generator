// Assignment code here

// how many characters?     <input type="checkbox" id="charNum" min="8" max="128" /><br />
// including special characters?    <input type="checkbox" id="symbols" />
// including lowercase characters?  <input type="checkbox" id="lowercase" />
// including uppercase characters?  <input type="checkbox" id="uppercase" />
// including numbers?               <input type="checkbox" id="numbers" />
// <button id="generatePassword">Generate Password</button><br />




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword()  {
  var length = prompt("How many characters would you like your password to contain?")
 console.log(length)

 var hasspecial = confirm("including special characters?")
 console.log(hasspecial)

 var haslower = confirm("including lowercase characters? ")
 console.log(haslower)

 var hasupper = confirm("including uppercase characters?")
 console.log(hasupper)

 var hasnumbers = confirm("including numbers?")
 console.log(hasnumbers)

 const lowercase = "abcdefghijklmnopqrstuvwxyz"
 const numbers = "0123456789";
 const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
 const symbols = "!@#$%^&*_-+=";
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


//Function to generate combination of password */
//function generatePassword() {
//  var password = '';
//  var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 
//          'abcdefghijklmnopqrstuvwxyz0123456789@#$';


// var charNum = document.getEelementById("charNum");
// var symBox = document.getEelementById("symbols");
// var lowerBox = document.getEelementById("lowercase");
// var upperBox = document.getEelementById("uppercase");
// var numBox = document.getEelementById("numbers");

// submit.addEventListener("click",function(e){

// var characters = char;
// (symBox.checked) ? characters += symbols : "";
// (lowerBox.checked) ? characters += lowercase : "";
// (upperBox.checked) ? characters += uppercase : "";
// (numBox.checked) ? characters += numbers : "";
// })

//  yourPw.value = password(charNum.value, characters);

//  function password(length,characters){
//  var password = "";
//  }

//  for (let i = 1; i <= 8; i++) {
//      var char = Math.floor(Math.random() * str.length + 1);
//        
//      pasword += str.charAt(char)
//  }
//    return pass;
  
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


// alerts
//How many characters would you like your password to contain?
//The password should be at least 8 characters
//The password should be less than 128 characters
//Click OK to confirm including special characters
//Click Ok to confirm including lowercase characters
//Click Ok to confirm including uppercase characters