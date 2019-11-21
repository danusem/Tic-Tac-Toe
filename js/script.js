// IPO

// Input Process Output

// 1) Define the inputs - Constants and State Variables

const COMBOS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const KEY = {
     '1' :'X',
    '-1' :'O',
    'null': ''
};


let turn, winner, gameboard;


//we need to cache element references

const squares = document.querySelectorAll('.square');
const message = document.getElementById('message');

//Define our process

// Add event listeners
document.querySelector('#gameboard').addEventListener('click', handleClick);
document.querySelector('#reset').addEventListener('click', init);

// This is where we start or restart our game
init(); // Call the function to start the game

function init() {
    winner = false; //  we don't have a winner -starting from zero
    turn = 1;
    gameboard = [null, null, null, null, null, null, null, null, null];
    render();
}

function handleClick(evt) {
    // Assign clicked square to a variable
       const selectedIndex = parseInt(evt.target.dataset.index); // => '3'
       gameboard[selectedIndex] = turn;
       turn *= -1
       render();
}

function render() {
// loop through the gameboard array
gameboard.forEach(function(elem, index) {
    squares[index].textContent = KEY[elem];
});
message.textContent = `${KEY[turn]}'s Turn`;
 
}

