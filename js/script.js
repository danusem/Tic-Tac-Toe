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
       if(winner || gameboard[selectedIndex]) return;
       gameboard[selectedIndex] = turn;
       turn *= -1
       winner = checkWinner();
       console.log(winner);
       render();
}

// - 1,  - X Wins
// - -1, - O Wins
// - 'T' - Tie Game
// - false - no winner

/*
* Perhaps we could write a for loop to iterate over the COMBOS array

* Then, inside that loop we could compare all three positions from each COMBOS "sub array" to the corresponding positions in the gameboard array

* Depending on what we find and compare, if we find all `1`'s or `-1`'s positioned in the gameboard that correspond to the winning combos from one of the COMBOS "sub arrays", we respond with 1, -1 respectively

* If we only find the value of null in the gameboard, we return false - no winner

* If we don't find null and we also don't find a match in the gameboard array from COMBOS, we return 'T' - Tie Game
*/
function checkWinner () {
    for(let i = 0; i < COMBOS.length; i++) {
        if(Math.abs(gameboard[COMBOS[i][0]] + 
                    gameboard[COMBOS[i][1]] + 
                    gameboard[COMBOS[i][2]]) === 3) return gameboard[COMBOS[i][0]];
        }
        if(gameboard.includes(null)) return false;
        return 'T';
    }

function render() {
// loop through the gameboard array
gameboard.forEach(function(elem, index) {
    squares[index].textContent = KEY[elem];
});
// if no winner => display who's turn
message.textContent = `${KEY[turn]}'s Turn`;
// if winner === 'T' => display tie game

// display winner!

}

