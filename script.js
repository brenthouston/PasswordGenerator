var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
}


var globalPassword = [];
var userChoicePassPoss = [];


//will have to make arrays of lower and upper letters, numbers, and symbols
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = [ "A","B", "C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbArr = ["1","2","3","4","5","6","7","8","9"];
var symbArr = ["!","@","#","$","%","^","&","*","(",")","-","+","=","~","[","]","?"];



function generatePassword(){
 var passwordLength = window.prompt(
        "What is the length of the password you wish to create? Let's make it between 8 and 128 Characters."
    );

    if (passwordLength >= 8 && passwordLength <= 128) {
        window.alert("Ok, let's do this.")

     }else{
        window.alert("Sorry, please make password length a number between 8 and 128.");

       window.location.stop();
       
    };    

    var pasLowerCase = window.prompt(
     "Does your password require lower case letters?"
    );

    if (pasLowerCase == "y") {
    userChoicePassPoss = userChoicePassPoss.concat(lowerCase);
    }else{
       userChoicePassPoss = userChoicePassPoss;
    }

    console.log(userChoicePassPoss);


    var pasUpperCase = window.prompt(
     "Does your password require upper case letters?"
     );
   
    if (pasUpperCase == "y") {
        userChoicePassPoss = userChoicePassPoss.concat(upperCase);
    }else{
        userChoicePassPoss = userChoicePassPoss
    };
   console.log(userChoicePassPoss);

    var pasNumbArr = window.prompt(
    "Does your password require numbers?"
    );

    if (pasNumbArr == "y") {
        userChoicePassPoss = userChoicePassPoss.concat(numbArr);
    }else{
   userChoicePassPoss = userChoicePassPoss;
    };
    console.log(userChoicePassPoss);


    var pasSymbArr = window.prompt(
    "Does your password require special characters?"
    );

    if (pasSymbArr == "y") {
        userChoicePassPoss = userChoicePassPoss.concat(symbArr);
    }else{
        userChoicePassPoss = userChoicePassPoss;
    }
    console.log(userChoicePassPoss)


     var getPassword = (a, n)=>{
      var l = a.slice()
      var o = []
      for (let i = 0; i < n; i++) {
        o.push(...l.splice(Math.floor(Math.random() * l.length), 1))
      }
      return o.toString("");
    }
    
    // password = getPassword(userChoicePassPoss,passwordLength) ;
    
    
    var generateBtn = document.querySelector("#generate");
    
    generateBtn.addEventListener("click", writePassword);
    
    function writePassword() {
        var password = getPassword (userChoicePassPoss, passwordLength);
        var passwordText = document.querySelector("#password");
        
        passwordText.value = password;
    }
    
    console.log(getPassword(userChoicePassPoss, passwordLength))

    

}


// Write password to the #password input