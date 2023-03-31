# PasswordGenerator


//will have to make arrays of lower and upper letters, numbers, and symbols
//make generatePassword function
//prompt for password length is a number


//if statment if number is above 8 && below 128
//confirm for lowercase, uppercase, numeric and special characters


//store there response in a variable


//if statment for each confirm and if it is a yes or true I would push or add random characters to a big array of all characters selected so far.


//for loop while i is less than there answer for num length prompt


//in this for loop we would randomly pull characters from the big array


//pull random characters from the array using math.random 


//have a var declared above for loop
//that var += theRandomChar
//return the password var

var globalPassword = []

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// console.dir(generateBtn)

function generatePassword(lenght) {
  askPrompt()
  return something;
}

function askPrompt (){
    //ask user what kind of characters and how long
     // create an array of characters based on the answers that they gave
    // add placeholders to global password

}

function passwordBuild (){

    //build the password letter by letter (for..loop) what the user says is the length

    for(let i=0; i<passwordArray.length; i++){
        var randomNum = Math.floor(Math.random() * availChar.length); //picks a random number, rounds it down and multiplies it by 26
  var randomLetter = availChar[randomNum];
    }
}



// for(let i = 0; i < charLength;i++)

// function charLength () {
//     var password = 10;
//     }
// var charLength = 26;

// for(let i = 0; i < charLength;i++)


const string = 'word';

<!-- // Option 1
string.split('');

// Option 2
[...string];

// Option 3
Array.from(string);

// Option 4
Object.assign([], string);

// Result:
// ['w', 'o', 'r', 'd'] -->


retun more than one index in an array

const array1 = ["A", "b", "C", "D", "f"];
const array2 = ["❤️", "🔥", "👋", "🦑", "😅"];
const array3 = ["0", "1", "2", "3", "4", "5"];
const arr = [array1, array2, array3];
const minimum = 2;
const arrCount = new Array(arr.length).fill(0);
function renderItem() {
  let randArrIndex;
  do {
    randArrIndex = Math.floor(Math.random() * arr.length);
    //get another index if this array already have the minimum number
    //and there is another array that still didn't reach the minimum
  } while (arrCount[randArrIndex] >= minimum && arrCount.some((e) => e < minimum));

  //increase the count for the selected array index
  arrCount[randArrIndex]++;

  //now select a random Item from that array (we need it's length to get a valid index)
  let randItemIndex = Math.floor(Math.random() * arr[randArrIndex].length);
  return arr[randArrIndex][randItemIndex];
}

function generateRandom() {
  let randomValue = "";
  //!! the string need to be at least equal to: minimum * arr.length
  // otherwise you will have an infinite loop
  for (let i = 0; i < 6; i++) {
    randomValue += renderItem();
  }
  return randomValue;
}
console.log(generateRandom());