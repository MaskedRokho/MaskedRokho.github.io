//Fizzbuzz
var number = 0
var display = ""
const fizzNumber = 3
const buzzNumber = 5

function fbIncrementUp () {
    var counter = document.getElementById('numberCounter');

    number += 1

    counter.innerHTML = number

    fizzBuzz()
};

function fbIncrementDown () {
    var counter = document.getElementById('numberCounter');
    
    number -= 1

    counter.innerHTML = number

    fizzBuzz()
};

function fizzBuzz () {
    var fizzBuzzDisplay = document.getElementById('fizzBuzzDisplay');

    display = ""
    if (number % fizzNumber == 0) {
        display += "Fizz"
    }
    if (number % buzzNumber == 0) {
        display += "Buzz"
    }

    if (display == "") {
        display = "Neither"
    }

    fizzBuzzDisplay.innerHTML = display
};

//Seven Segment

function sevenSegment () {
    var ssdInput = document.getElementById('ssdInput');
    var ssdYesOrNo = document.getElementById('ssdYesOrNo');
    var word = ssdInput.value
    var badLetters = /[kmqrvwxz]/
    if (word.search(badLetters) == 0 ) {
        ssdYesOrNo.innerHTML = "No"
    }
    else {
        ssdYesOrNo.innerHTML = "Yes"
    }
};

//Breaking down numbers

function _breakDownNumber () {
    var bdInput = document.getElementById('bdInput');
    var bdOutPut = document.getElementById('bdOutPut');
    var inputNumber = bdInput.value
    bdOutPut.innerHTML = _breakDownNumberMath(inputNumber)
};

function _breakDownNumberMath (inputNumber) {
    var outputNumber1
    var outputNumber2
    if (Math.sqrt(inputNumber) == Math.round(Math.sqrt(inputNumber))) {
        return(Math.sqrt(inputNumber) + ", " + Math.sqrt(inputNumber))
    }
    else {
        for (let i = 2; i < inputNumber; i++) {
            if ( inputNumber % i == 0 && _breakDownNumberCheck(inputNumber / i)) {
                outputNumber1 = i
                outputNumber2 = inputNumber / i
                if ( typeof outputNumber1 == 'undefined' || typeof outputNumber2 == 'undefined' ) {
                    return("Error: One of the Output numbers is undefined, but not both. " + outputNumber1 +", " + outputNumber2)
                }
                else {
                    return(outputNumber1 + ", " + outputNumber2)
                }
            }
        }
        if (typeof outputNumber1 == 'undefined' && typeof outputNumber2 == 'undefined') {
            return("Cannot be broken down as it is a prime number.")
        }

        return("Error: Unknown/Unhandled error")
    }
};

function _breakDownNumberCheck (inputNumber) {
    if (Math.sqrt(inputNumber) == Math.round(Math.sqrt(inputNumber))) {
        return(false)
    }
    else {
        for (let i = 2; i < inputNumber; i++) {
            if ( inputNumber % i == 0 ) {
                return(false)
            }
            console.log(inputNumber + ":0 " + i + ", " + inputNumber / i + ", " + inputNumber % i)
        }
    }
    return(true)
};

//Rock Paper Scissors
var jrpgYourMove = ""
var jrpgEnemysMove = ""
var jrpgYourHP = 20
var jrpgEnemysHP = 20
function rockMove () {
    var jrpgYourMoveDisplay = document.getElementById('jrpgYouMove')
    jrpgYourMove = "Rock"
    jrpgYourMoveDisplay.innerHTML = "Your Move: " + jrpgYourMove
    enemyTurn()
};
function paperMove () {
    var jrpgYourMoveDisplay = document.getElementById('jrpgYouMove')
    jrpgYourMove = "Paper"
    jrpgYourMoveDisplay.innerHTML = "Your Move: " + jrpgYourMove
    enemyTurn()
};
function scissorMove () {
    var jrpgYourMoveDisplay = document.getElementById('jrpgYouMove')
    jrpgYourMove = "Scissors"
    jrpgYourMoveDisplay.innerHTML = "Your Move: " + jrpgYourMove
    enemyTurn()
};

function enemyTurn () {
    var jrpgEnemyMoveDisplay = document.getElementById('jrpgEnemyMove')
    var jrpgEnemyMoveNumber = Math.floor(Math.random() * 3);

    if (jrpgEnemyMoveNumber == 0) {
        jrpgEnemysMove = "Rock"
        jrpgEnemyMoveDisplay.innerHTML = "Enemy's Move: " + jrpgEnemysMove
    }
    else if ( jrpgEnemyMoveNumber == 1 ) {
        jrpgEnemysMove = "Paper"
        jrpgEnemyMoveDisplay.innerHTML = "Enemy's Move: " + jrpgEnemysMove
    }
    else if ( jrpgEnemyMoveNumber == 2 ) {
        jrpgEnemysMove = "Scissors"
        jrpgEnemyMoveDisplay.innerHTML = "Enemy's Move: " + jrpgEnemysMove
    }
    damageCalculation()
};

function damageCalculation () {
    var battleText = document.getElementById('battleText')
    var turnText = document.getElementById('turnText')
    var jrpgYouHP = document.getElementById('jrpgYouHP')
    var jrpgEnemyHP = document.getElementById('jrpgEnemyHP')
    var turnOutcome
    if (jrpgYourMove == "Rock") {
        if (jrpgEnemysMove == "Rock") {
            turnOutcome = 1
        }
        else if (jrpgEnemysMove == "Paper" ) {
            turnOutcome = 2
        }
        else if (jrpgEnemysMove == "Scissors" ) {
            turnOutcome = 0
        }
    }
    else if (jrpgYourMove == "Paper") {
        if (jrpgEnemysMove == "Rock") {
            turnOutcome = 0
        }
        else if (jrpgEnemysMove == "Paper" ) {
            turnOutcome = 1
        }
        else if (jrpgEnemysMove == "Scissors" ) {
            turnOutcome = 2
        }
    }
    else if (jrpgYourMove == "Scissors") {
        if (jrpgEnemysMove == "Rock") {
            turnOutcome = 2
        }
        else if (jrpgEnemysMove == "Paper" ) {
            turnOutcome = 0
        }
        else if (jrpgEnemysMove == "Scissors" ) {
            turnOutcome = 1
        }
    }

    if ( turnOutcome == 0 ) {
        turnText.innerHTML = "Turn Outcome: Win"
        turnText.style.color = 'greenyellow'
        jrpgEnemysHP -= 5
        jrpgEnemyHP.innerHTML = "Enemy's HP: " + jrpgEnemysHP
    }
    else if ( turnOutcome == 1 ) {
        turnText.innerHTML = "Turn Outcome: Draw"
        turnText.style.color = 'white'
    }
    else if ( turnOutcome == 2 ) {
        turnText.innerHTML = "Turn Outcome: Loss"
        turnText.style.color = 'firebrick'
        jrpgYourHP -= 5
        jrpgYouHP.innerHTML = "Your HP: " + jrpgYourHP
    }

    if ( jrpgEnemysHP < 1) {
        battleText.innerHTML = "Battle Won"
        battleText.style.color = 'greenyellow'
        gameEnd()
    }
    else if ( jrpgYourHP < 1) {
        battleText.innerHTML = "Battle Lost"
        battleText.style.color = 'firebrick'
        gameEnd()
    }
};

function gameEnd () {
    document.getElementById("rockButtons").style.display='none';
    document.getElementById("paperButtons").style.display='none';
    document.getElementById("scissorButtons").style.display='none';
};

function gameRestart () {
    var jrpgEnemyMoveDisplay = document.getElementById('jrpgEnemyMove')
    var jrpgYourMoveDisplay = document.getElementById('jrpgYouMove')
    var jrpgYouHP = document.getElementById('jrpgYouHP')
    var jrpgEnemyHP = document.getElementById('jrpgEnemyHP')
    var battleText = document.getElementById('battleText')
    var turnText = document.getElementById('turnText')

    jrpgYourMove = ""
    jrpgYourMoveDisplay.innerHTML = "Your Move: " + jrpgYourMove
    jrpgEnemysMove = ""
    jrpgEnemyMoveDisplay.innerHTML = "Enemy's Move: " + jrpgEnemysMove
    jrpgYourHP = 20
    jrpgYouHP.innerHTML = "Your HP: " + jrpgYourHP
    jrpgEnemysHP = 20
    jrpgEnemyHP.innerHTML = "Enemy's HP: " + jrpgEnemysHP
    battleText.innerHTML = ""
    document.getElementById("rockButtons").style.display='inline-block';
    document.getElementById("paperButtons").style.display='inline-block';
    document.getElementById("scissorButtons").style.display='inline-block';
    turnText.innerHTML = "Turn Outcome: "
    turnText.style.color = 'white'
};


//Snake Game
const backgroundCharacter = "B"
const snakeCharacter = "P"
const appleCharacter = "A"
const backgroundDisplay = "◼️"
const snakeDisplay = "🟩"
const appleDisplay = "🍎"

const screenSize = 16
const gridSize = screenSize * screenSize

var snakeSize = 1
var snakeDirection = 0
var snakeHeadPosition = (gridSize / 2) + (screenSize / 2)
var applePosition

const gameScreen = new Array(gridSize)
const snakePos = new Array(snakeSize)

var timeInterval

function sgStart() {
    snakeHeadPosition = (gridSize / 2) + (screenSize / 2)
    snakeSize = 1
    snakeDirection = 0

    while (gameScreen.length > gridSize) {
        gameScreen.shift()
    }


    for (let i = 0; i < snakePos.length; i++ ) {
        snakePos[i] = snakeHeadPosition
    }
    clearInterval(timeInterval)

    timeInterval = setInterval(sgMove, 500);


    sgSpawnApple()
    sgDraw()
}

function sgStop() {
    clearInterval(timeInterval)
}

function sgSpawnApple() {
    let random = Math.floor((Math.random() * gridSize))

    if (!snakePos.includes(random)) {
        applePosition = random
    }
}

function sgMove() {

    let isMoving = false

    if (sgCheck() == true) {
        if (snakeDirection == 1) { //UP
            snakeHeadPosition -= screenSize
        }
        else if (snakeDirection == 2) { //Right
            snakeHeadPosition += 1
        }
        else if (snakeDirection == 3) { //Down
            snakeHeadPosition += screenSize
        }
        else if (snakeDirection == 4) { //Left
            snakeHeadPosition -= 1
        }
        isMoving = true
    }

    if (isMoving == true) {
        snakePos.push(snakeHeadPosition)

        while (snakePos.length > snakeSize) {
            snakePos.shift()
        }
    }

    if (snakePos.includes(applePosition)) {
        snakeSize += 1
        sgSpawnApple()
    }

    console.log((snakeHeadPosition - 1) % screenSize)

    sgDraw()
}

function sgCheck() {
    if (snakeDirection == 1) { //UP
        if (snakeHeadPosition - screenSize >= 0 && gameScreen[snakeHeadPosition - screenSize] != snakeCharacter) {
            return true
        }
        else {
            return false
        }
    }
    else if (snakeDirection == 2) { //Right
        if ((snakeHeadPosition + 1) % screenSize != 0 && gameScreen[snakeHeadPosition + 1] != snakeCharacter) {
            return true
        }
        else {
            return false
        }
    }
    else if (snakeDirection == 3) { //Down
        if (snakeHeadPosition + screenSize <= gridSize && gameScreen[snakeHeadPosition + screenSize] != snakeCharacter) {
            return true
        }
        else {
            return false
        }
    }
    else if (snakeDirection == 4) { //Left
        if ((snakeHeadPosition - 1) % screenSize != (screenSize - 1) && gameScreen[snakeHeadPosition - 1]  != snakeCharacter) {
            return true
        }
        else {
            return false
        }
    }
    else { 
        return false
    }
}
function sgDraw() {
    var scoreBoard = document.getElementById('scoreBoard')
    var screenDisplay = document.getElementById('screenDisplay')

    scoreBoard.innerHTML = "Score: " + snakeSize

    screenDisplay.innerHTML = ""
    
    for (let i = 0; i < gameScreen.length; i++) {
        gameScreen[i] = backgroundCharacter
    }

    gameScreen[applePosition] = appleCharacter

    for (let i = 0; i < snakePos.length; i++) {
        gameScreen[snakePos[i]] = snakeCharacter
    }

    for (let i = 0; i < gameScreen.length; i++) {
        if (i % screenSize == 0) {
            screenDisplay.innerHTML += "<br>"
        }
        if (gameScreen[i] == backgroundCharacter) {
            screenDisplay.innerHTML += backgroundDisplay
        }
        else if (gameScreen[i] == snakeCharacter) {
            screenDisplay.innerHTML += snakeDisplay
        }
        else if (gameScreen[i] == appleCharacter) {
            screenDisplay.innerHTML += appleDisplay
        }
    }
}

function sgUp() {
    snakeDirection = 1
}

function sgRight() {
    snakeDirection = 2
}

function sgDown() {
    snakeDirection = 3
}

function sgLeft() {
    snakeDirection = 4
}