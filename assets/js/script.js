//Global variables
const inputs = document.getElementsByClassName("inner-flip");
const frontCard = document.getElementsByClassName("front-face");
const backCard = document.getElementsByClassName("back-face");
const civilian = document.getElementsByClassName("civilian-front");
const maxTurns = parseInt(document.getElementById("turnsLeft").innerText);
const turnCounterRef = document.getElementById("turnsLeft");
const modal = document.getElementById("information-modal");
const startMission = document.getElementById("start-mission");
const descriptionIntro = document.getElementsByClassName("description-intro");
//const descriptionWin = document.getElementsByClassName("description-win");
//const descriptionLose = document.getElementsByClassName("description-lose");

//Event listeners
document.addEventListener("DOMContentLoaded", function () {

    modal.classList.remove("hidden");
    //descriptionIntro.classList.remove("hidden");

    startMission.addEventListener("click", closeModal);

    runGame();
}
)

//Run game
function runGame() {

    let index = shuffleCard();
    let correctAnswer = correctResponse(index);
    let remainingTurns = maxTurns;

    for (let input of inputs) {
        console.log('input', input)

        input.addEventListener("click", function () {

            turnCounterRef.innerText = remainingTurns;
            remainingTurns = minusTurn(remainingTurns);

            dataIndex = input.getAttribute('data-');
            let dataIndexArray = new Array(dataIndex);

            //correctResponse(index);
            compareClickToWolfLocation(dataIndexArray, correctAnswer);

        })
    }
}

/**Decrease the count of the turns left. */
function minusTurn(turnsCount) {

    if (turnsCount > 1) {
        return turnsCount - 1;
    } else {
        console.log("Game over");
        
        modal.classList.remove("hidden");
        runGame();

        return 0;
    }

}

/**Gets all cards and place the wolf in a random index*/
function shuffleCard() {

    let getCards = frontCard.length;
    let randomValues = new Set();

    while (randomValues.size !== getCards) {
        randomValues.add(Math.floor(Math.random() * getCards));
    }

    let myArray = Array.from(randomValues);
    console.log(myArray);
    let index = myArray.indexOf(1);
    console.log("index of wolf image== ", index);

    // correctResponse(index);
    return index;

}

/**Returns the correct answer */
function correctResponse(index) {

    let correctAnswer = index;
    console.log(`Correct Answer is ${correctAnswer}`);

    return correctAnswer;

}

/**Compares the correct answer with the clicked answer */
function compareClickToWolfLocation(dataIndexArray, correctAnswer) {

    console.log(dataIndexArray);
    let answerCorrect = correctAnswer;
    console.log(answerCorrect);

    if (dataIndexArray == answerCorrect) {

        console.log("Yayy")
        openModal(answerCorrect);

    } else

        console.log("nahh")

}

function closeModal(){
    modal.classList.add("hidden");
}

function openModal(answerCorrect){

    if(answerCorrect){

        modal.classList.remove("hidden");
        runGame();
    }
}