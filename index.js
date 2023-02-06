const squares = document.querySelectorAll('.square');
const resetButton = document.getElementById('reset-button')
const modal = document.querySelector('#modal');
const modalText = document.querySelector('#modal-text');
const modalClose = document.querySelector('#modal-close');
let xIsNext = true;

// adding an event listener to all of the squares
for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', function () {
        if (this.textContent === '') {
            this.textContent = xIsNext ? 'X' : 'O';
            // checking for winner
            checkForWinner();
            xIsNext = !xIsNext;
        }
    });
}

// function that checks for winner
function checkForWinner() {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < winningCombinations.length; i++) {
        const [a, b, c] = winningCombinations[i];
        if (squares[a].textContent === squares[b].textContent &&
            squares[b].textContent === squares[c].textContent &&
            squares[a].textContent !== '') {
            modalText.textContent = `${squares[a].textContent} wins!`;
            modal.classList.remove('hidden');
            return;
        }
    }

    let draw = true;
    for (let i = 0; i < squares.length; i++) {
        if (squares[i].textContent === '') {
            draw = false;
            break;
        }
    }

    if (draw) {
        modalText.textContent = 'Draw';
        modal.classList.remove('hidden');
    }
}

// close modal button
modalClose.addEventListener('click', () => {
    modal.classList.add('hidden');
});

// reset game button
resetButton.addEventListener('click', () => {
    squares.forEach((value, index) => {
        squares[index].textContent = ''
        modal.classList.add('hidden');
    })
})