const monthName = ["January", "February", "March", "April", "May", "June", "July", 
"August", "September", "October", "November", "December"]
const dayName = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
const fullDate = new Date();

document.getElementById('weekday').innerHTML = dayName[fullDate.getDay() - 1];
document.getElementById('month').innerHTML = monthName[fullDate.getMonth()];
document.getElementById('date').innerHTML = fullDate.getDate() + ",";
document.getElementById('year').innerHTML = fullDate.getFullYear();



document.getElementById('hours').innerHTML = fullDate.getHours() + " :";
document.getElementById('minutes').innerHTML = fullDate.getMinutes() + " :";
document.getElementById('seconds').innerHTML  = fullDate.getSeconds();


// This works to count up in the browser. 


let sec = fullDate.getSeconds();

function countUp() {
  sec++;
  document.getElementById('seconds').innerHTML = sec;
}

setInterval(countUp, 1000);


// Trying some recursive biz


// let i = 0;

// function increment() {
//   i++;
//   console.log(i);
// }

// let timer = setTimeout(function myTimer() {
//   increment();
//   timer = setTimeout(myTimer, 1000) ;
// }, 1000);








