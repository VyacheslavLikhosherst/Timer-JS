'use strict';

//Retrieving items from a page
const $timer = document.querySelector('.timer'),
    $hours = $timer.querySelector('#hours'),
    $minutes = $timer.querySelector('#minutes'),
    $seconds = $timer.querySelector('#seconds'),
    $addTime = document.querySelector('.add-time'),
    $plusHourBtn = $addTime.querySelector('#plus__hour__btn'),
    $minusHourBtn = $addTime.querySelector('#minus__hour__btn'),
    $plusMinuteBtn = $addTime.querySelector('#plus__minute__btn'),
    $minusMinuteBtn = $addTime.querySelector('#minus__minute__btn'),
    $start = document.querySelector('#start');

//Counters
let deadline;
let minute;
let hour;
let i = 0;
let j = 0;
let hAndI = new Date().getHours();
let mAndI = new Date().getMinutes();
let id;

//An event handler that adds 1 hour to the timer
$plusHourBtn.addEventListener('click', () => {
    i++;
    deadline = new Date();
    hour = deadline.getHours();
    hAndI = hour + i;
    deadline.setHours(hAndI, mAndI)
    $hours.innerHTML = getZero(i);
});

//Event handler that removes 1 hour from the timer
$minusHourBtn.addEventListener('click', () => {
    if($hours.innerHTML === '00' || $hours.innerHTML === '0'){
        alert('Ошибка')
    } else{
        i--;
        deadline = new Date();
        hour = deadline.getHours();
        hAndI = hour + i;
        deadline.setHours(hAndI, mAndI)
        $hours.innerHTML = getZero(i);
    }
})

//An event handler that adds 1 minute to the timer
$plusMinuteBtn.addEventListener('click', () => {
    j++;
    deadline = new Date();
    minute = deadline.getMinutes();
    mAndI = minute + j;
    deadline.setHours(hAndI, mAndI)
    $minutes.innerHTML = getZero(j);
});

//An event handler that removes 1 minute from the timer
$minusMinuteBtn.addEventListener('click', () => {
    if($minutes.innerHTML === '00' || $minutes.innerHTML === '0'){
        alert('Ошибка')
    } else{
        j--;
        deadline = new Date();
        minute = deadline.getMinutes();
        mAndI = minute + j;
        deadline.setHours(hAndI, mAndI)
        $minutes.innerHTML = getZero(j);
    }
})

//An event handler that starts a timer with a specified time
$start.addEventListener('click', () => {
    if($hours.innerHTML === '00' && $minutes.innerHTML === '00' && $seconds.innerHTML === '00'){
        alert('Ошибка')
    } else{
        printResult()
        id = setInterval(() => {
            printResult()
        }, 1000)
    }
})

//A function that calculates the remainder of hours, minutes, seconds and the total number of milliseconds
function getTimeRemaining(deadline) {
    const t = Date.parse(deadline) - Date.parse(new Date()),
        days = Math.floor(t / (1000 * 60 * 60 * 24)),
        hours = Math.floor((t / (1000 * 60 * 60)) % 24),
        minutes = Math.floor((t / (1000 * 60)) % 60),
        seconds = Math.floor((t / 1000) % 60);
    return {
        total: t,
        days,
        hours,
        minutes,
        seconds
    };
}

//Function that displays time on page
function printResult() {
    let result = getTimeRemaining(deadline);
    $hours.innerHTML = `${getZero(result.hours)}`;
    $minutes.innerHTML = `${getZero(result.minutes)}`;
    $seconds.innerHTML = `${getZero(result.seconds)}`;
    if(result.total === 0){
        clearInterval(id);
    }
}

//Function that adds zero depending on the number
function getZero(num) {
    if(num >= 0 && num < 10){
        return `0${num}`;
    } else{
        return num;
    }
}


