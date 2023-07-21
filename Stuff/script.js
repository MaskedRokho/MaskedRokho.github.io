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

//Is Even?

function _isEven () {
    var evenInput = document.getElementById('evenInput');
    var evenYesOrNo = document.getElementById('evenYesOrNo');
    var number = evenInput.value
    if (number % 2 == 0 ) {
        evenYesOrNo.innerHTML = "Even"
    }
    else {
        evenYesOrNo.innerHTML = "Not Even"
    }
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
const backgroundLetter = "◼️"
const playerLetter = "🟩"
const sgGridSize = 8

var sgDirection = 0

var sgSnakeSize = 10

var sgCurrentPos = 0

var sgScreenSize = sgGridSize * sgGridSize

const sg_screen = new Array(sgScreenSize);
const sg_snake = new Array(1);

var sgIsGameStarted = false

function sgStart () {
    sg_snake[0] = 60
    sgCurrentPos = 60

    sgIsGameStarted = true

    setInterval(sgMove, 500);

    sgDraw()
}

function sgMove () {
    
    //Up
    if ( sgDirection == 1) {
        if (sgCurrentPos < sgGridSize) {
        }
        else {
            sgCurrentPos -= sgGridSize
            if (sg_snake.length > sgSnakeSize ) {
                sg_snake.shift()
            }
        }
    }
    //Left
    else if ( sgDirection == 2) {
        if (sgCurrentPos % sgGridSize == 0) {
        }
        else {
            sgCurrentPos -= 1
            if (sg_snake.length > sgSnakeSize ) {
                sg_snake.shift()
            }
        }
    }
    //Right
    else if ( sgDirection == 3) {
        if (sgCurrentPos % sgGridSize == (sgGridSize - 1)) {
        }
        else {
            sgCurrentPos += 1
            if (sg_snake.length > sgSnakeSize ) {
                sg_snake.shift()
            }
        }
    }
    //Down
    else if ( sgDirection == 4) {
        if (sgCurrentPos >= (sgGridSize * (sgGridSize - 1))) {
        }
        else {
            sgCurrentPos += sgGridSize
            if (sg_snake.length > sgSnakeSize ) {
                sg_snake.shift()
            }
        }
    }
    
    sg_snake.push(sgCurrentPos)
    
    sgDraw()
}

function sgDraw () {
    var screenDisplay = document.getElementById('screenDisplay')

    screenDisplay.innerHTML = ""

    console.log(sg_snake)

    for (let i = 0; i < sg_screen.length; i++) {
        sg_screen[i] = backgroundLetter
    }

    for (let i = 0; i < sg_snake.length; i++) {
        sg_screen[sg_snake[i]] = playerLetter
    }

    for(let i = 0; i <sg_screen.length; i++) {
        if ( i % sgGridSize == 0) {
            screenDisplay.innerHTML += "<br>"
        }
        screenDisplay.innerHTML += sg_screen[i]
    }
}

function sgUp () {
    sgDirection = 1
}

function sgLeft () {
    sgDirection = 2
}

function sgRight () {
    sgDirection = 3
}

function sgDown () {
    sgDirection = 4
}