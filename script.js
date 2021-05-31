const currentDay = dayjs().format('ddd, MMMM D YYYY');
const date = document.getElementById('todayDate');
const hour = document.getElementById('hour');
const hour2 = document.querySelectorAll('[id=hour]');
console.log(hour)

date.innerText = currentDay;

// function createItem() {
// 	localStorage.setItem('hour', 'text'); 
// innerHTML: "\n            10AM\n          "
// innerText: "\n            10AM\n          "