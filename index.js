const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let showRandomOne = document.getElementById("random-passwordOne")
let showRandomTwo = document.getElementById("random-passwordTwo")
let copyText = document.getElementById("random-passwordOne")
let showHide = document.querySelector(".output-container");
showHide.style.visibility = "hidden"

function showContent() {
    showHide.style.visibility = "hidden";
        ;
    // showHide.style.visibility = "show";
}

function generatePassword(length) {
    let result = ' ';
    characterLength = characters.length;
    for(let i = 0; i < length; i++){
        result += Math.random().toString(36).substring(2,5);
    }

    return result
}


function randomPasswordOne () {
   
    showRandomOne.textContent = generatePassword(5);
    showRandomTwo.textContent = generatePassword(5);
    showHide.style.visibility = "visible";
}

function myFunction () {
    navigator.clipboard.writeText(randomPasswordOne())
}

// function copyGeneratedPassword() {
//     document.getElementById("copy-generated-btn")
//     .onclick = function() {
//     let text = getElementById("random-passwordOne").value
//     navigator.clipboard.writeText(text)
//     .then(() => {
//         alert('Text Copied to clipboard')
//     })
//     .catch(err => {
//         alert('Error in copying text: ', err)
//     });
//     }
    
// }
