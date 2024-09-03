/*
Реалізувати таймер відліку:

Початок таймера визначати із змінної
Відобразити на сторінці час у форматі 01:25
Коли закінчився таймер зупинити його
*/

let initialTime = 85; 

function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;
    
    if (minutes < 10) minutes = '0' + minutes;
    if (remainingSeconds < 10) remainingSeconds = '0' + remainingSeconds;
    
    return `${minutes}:${remainingSeconds}`;
}

function updateTimer() {

    const timerElement = document.getElementById('timer');
    
    initialTime--;
    
    timerElement.textContent = formatTime(initialTime);
    
    if (initialTime <= 0) {
        clearInterval(timerInterval);
    }
}

const timerInterval = setInterval(updateTimer, 1000);

document.getElementById('timer').textContent = formatTime(initialTime);