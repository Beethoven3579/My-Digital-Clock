
function date() {
    const fullDate = new Date();
    const dateDisplay = `${dayName[fullDate.getDay() - 1]}
    ${monthName[fullDate.getMonth()]}
    ${fullDate.getDate()}, ${fullDate.getFullYear()}`;

    const dateDiv = document.getElementById('date');
    dateDiv.textContent = dateDisplay;
}

const monthName = 
["January", 
"February", 
"March", 
"April",
"May",
"June", 
"July", 
"August", 
"September", 
"October", 
"November", 
"December"];

const dayName = 
["Monday", 
"Tuesday", 
"Wednesday", 
"Thursday", 
"Friday", 
"Saturday", 
"Sunday"];


function clock() {
    const time = new Date();
    const hours = renderTwelveHourClock(time.getHours());
    const minutes = addZeros(time.getMinutes());
    const seconds = addZeros(time.getSeconds());
    const isAm = hours > 12 || hours === 0;
    let amPm = isAm ? 'AM' : 'PM';
    const timeDisplay = `${hours} : ${minutes} : ${seconds} ${amPm}`;
    
    const clockContainer = document.getElementById('clock');
    clockContainer.textContent = timeDisplay;
}

function addZeros(number) {
    return number < 10 ? '0' + number : number;
}

function renderTwelveHourClock(hour) {
    hour = hour >= 13 ? hour - 12 : hour;
    hour = hour === 0 ? hour + 12 : hour;
    return hour;
}


setInterval(() => {
    clock();
    date();
}, 1000);

