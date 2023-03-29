var generateBtn = document.getElementById("button");
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","y","z"]


// console.dir(generateBtn)

function clickHandler (charLength){
    var textField = document.getElementById("passbox");
    var randomNum = Math.floor(Math.random() * letters.length);
    var randomLetter = letters[randomNum]
    

    textField.textContent = randomLetter;
    
}


var charLength = 2;

for(let i = 0; i < charLength;i++)
    


generateBtn.addEventListener("click", clickHandler)

