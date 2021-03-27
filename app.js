const monthName = ["January", "February", "March", "April", "May", "June", "July", 
"August", "September", "October", "November", "December"];
const dayName = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const fullDate = new Date();

document.getElementById('weekday').innerHTML = dayName[fullDate.getDay() - 1];
document.getElementById('month').innerHTML = monthName[fullDate.getMonth()];
document.getElementById('date').innerHTML = fullDate.getDate() + ",";
document.getElementById('year').innerHTML = fullDate.getFullYear();

const clockContainer = document.getElementById('clock');

function addZeros(num) {
    if (num < 10){
        num = "0" + num;
    }
    return num;
}

function clock() {
    const date = new Date();
    const hours = addZeros(date.getHours());
    const minutes = addZeros(date.getMinutes());
    const seconds = addZeros(date.getSeconds());
    const time = `${hours} : ${minutes} : ${seconds}`;
    
    clockContainer.innerHTML = time;
}

clock();

setInterval(clock, 1000);
