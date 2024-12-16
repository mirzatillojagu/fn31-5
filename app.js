1


const blocks = document.querySelectorAll('.block');
const message = document.querySelector('#message');
let count = 0;

const colors = ["Red", "Green", "Blue", "Yellow", "Orange", "Purple", "Pink", "Brown", "Gray", "Black", "White", "Cyan", "Magenta", "Lime", "Teal", "Olive", "Coral", "Salmon", "Beige", "Lavender" ];


blocks.forEach(block => {
    block.addEventListener('click', () => {
        const random = colors[Math.floor(Math.random() * colors.length)];
        block.style.backgroundColor = random;
        count++;

        checkGameStatus();
    });
});





// 3 Vaqt hisoblagichi

const timeDisplay = document.querySelector('#time');
const startbutton = document.querySelector('#start');
const stopbutton = document.querySelector('#stop');
const resetbutton = document.querySelector('#reset');

let startTime = 0;
let elapsedTime = 0;
let timerInterval;

startbutton.style.borderRadius = '10px'
stopbutton.style.borderRadius = '10px'
resetbutton.style.borderRadius = '10px'

startbutton.style.borderColor = 'blue'
stopbutton.style.borderColor = 'red'
resetbutton.style.borderColor = 'yellow'


function updateTime() {
    const totalElapsedTime = Math.floor((Date.now() - startTime + elapsedTime) / 1000); 

    const hours = Math.floor(totalElapsedTime / 3600);
    const minutes = Math.floor((totalElapsedTime % 3600) / 60); 
    const seconds = totalElapsedTime % 60; 

    timeDisplay.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(num) {
    return num.toString().padStart(2, '0');
}

startbutton.addEventListener('click', () => {
    if (!timerInterval) {
        startTime = Date.now();
        timerInterval = setInterval(updateTime, 1000);
    }
});

stopbutton.addEventListener('click', () => {
    if (timerInterval) {
        elapsedTime += Date.now() - startTime;
        clearInterval(timerInterval);
        timerInterval = null;
    }
});

resetbutton.addEventListener('click', () => {
    clearInterval(timerInterval);
    timerInterval = null;
    startTime = 0;
    elapsedTime = 0;
    timeDisplay.textContent = '00:00:00';
});
