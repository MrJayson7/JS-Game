//VARIABLE DECLARATION
const incrementBtn = document.querySelectorAll(".increment-btn");
const decrementBtn = document.querySelectorAll(".decrement-btn");
const attemptBtn = document.querySelector(".submit-btn");
const hintsBoard = document.querySelector(".summary");
const newGameBtn = document.getElementById("newGame");
let element = document.querySelectorAll('.digit');
const modal = document.getElementById("modal");
let value = element.textContent;
let randomArr = [];

//SETUP THE CONTENT OF RANDOM ARRAY

//function to determine if there are duplicate elements in array
function hasDuplicates(randomArr) {
    return (new Set(randomArr)).size !== randomArr.length;
}
//function to generate array to guess
function setRandArr() {
    for (let i = 0; i < 4; i++) {
        let randEle = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
        randomArr.push(randEle);
    }
    if (hasDuplicates(randomArr)) {
        randomArr = [];
        setRandArr(randomArr);
        return randomArr
    } else {
        return randomArr
    } 
}
randomArr = setRandArr();
console.log(randomArr);

//NUMBER WHEEL INCREMENT AND DECREMENT

for (let i = 0; i < incrementBtn.length; i++) {
    incrementBtn[i].addEventListener("click", function () {
        const wheel = this.closest('.wheel').getAttribute("class").split(" ")[1];
        const wheelNum = document.querySelector("."+wheel+" p");
        let wheelNumber = parseFloat(wheelNum.textContent);
        wheelNumber++;
        if (wheelNumber == 10) { 
            wheelNum.textContent = 0;
        } else {
            wheelNum.textContent = wheelNumber;
        }
    })
}

for (let i = 0; i < decrementBtn.length; i++) {
    decrementBtn[i].addEventListener("click", function () {
        const wheel = this.closest('.wheel').getAttribute("class").split(" ")[1];
        const wheelNum = document.querySelector("."+wheel+" p");
        let wheelNumber = parseFloat(wheelNum.textContent);
        wheelNumber--;
        if (wheelNumber == -1) { 
            wheelNum.textContent = 9;
        } else {
            wheelNum.textContent = wheelNumber;
        }
    })
}

//VALIDATING THE INPUT ATTEMPT DATA AND SEND TO HINTS DATA

//Function to determine the hints
function getHint() {
    let inputArr = []; //getting the input numbers to create an array
    const index0 = document.getElementById("num0").textContent;
    const index1 = document.getElementById("num1").textContent;
    const index2 = document.getElementById("num2").textContent;
    const index3 = document.getElementById("num3").textContent;
    inputArr[0] = parseFloat(index0);
    inputArr[1] = parseFloat(index1);
    inputArr[2] = parseFloat(index2);
    inputArr[3] = parseFloat(index3);

    let perfectNum = ''; //looping each input to evaluate and give hints
    let corNumWrgDgt = '';
    let wrongNum = '';
    for (let i = 0; i < 4; i++) {
        if (randomArr.includes(inputArr[i])) {
            if(inputArr[i] == randomArr[i]) {
                perfectNum += inputArr[i];
            } else {
                corNumWrgDgt += inputArr[i];
            }
        } else {
            wrongNum += inputArr[i];
        }
    }
    return `${inputArr} = ${perfectNum.length}-${corNumWrgDgt.length}-${wrongNum.length}`;
}

let attemptGuess = 10;
function displayHint() {
    if (attemptGuess == 1 && getHint()[10] == 4) {
        const attempt = document.createElement("div");
        hintsBoard.appendChild(attempt);
        attempt.classList.add("hide-hint");
        attempt.textContent = `${getHint()}`;
        success();
    } else if (attemptGuess == 1 && getHint()[10] != 4) {
        const attempt = document.createElement("div");
        hintsBoard.appendChild(attempt);
        attempt.classList.add("hide-hint");
        attempt.textContent = `${getHint()}`;
        gameOver();
    } else if (getHint()[10] == 4) {
        const attempt = document.createElement("div");
        hintsBoard.appendChild(attempt);
        attempt.classList.add("hide-hint");
        attempt.textContent = `${getHint()}`;
        success();
    } else {
        const attempt = document.createElement("div");
        hintsBoard.appendChild(attempt);
        attempt.classList.add("hide-hint");
        attempt.textContent = `${getHint()}`;
        attemptGuess--;
    }
}

attemptBtn.addEventListener("click", displayHint);

//ATTEMPT LIMITS AND MODAL

function success() {
    modal.classList.remove("hidden");
    const audio = new Audio();
    audio.src = "../assets/applause.wav";
    audio.play();
}
function gameOver() {
    modal.classList.remove("hidden");
    attemptBtn.setAttribute("disabled", "disabled");
    let message = modal.getElementsByClassName("message")[0];
    message.textContent = `Game Over! You run out of attempt! The correct number combination are ${randomArr}.`;
    const audio = new Audio();
    audio.src = "../assets/sad-trombone.mp3";
    audio.play();
}

//PLAY AGAIN

function newGame () {
    window.location.href = "Combination Lock.html";
}
newGameBtn.addEventListener("click", newGame);