const currentDay = dayjs().format('ddd, MMMM D YYYY');
const date = document.getElementById('todayDate');
const hour =  dayjs().format("H");
console.log(hour)

date.innerText = currentDay;

$(document).ready(function(){
    var span = $(".span")
    var text = $("textarea")
    var saveButton = $("saveBtn")
console.log(span)
console.log(text)
console.log(saveButton)

});

//display local storage text
function displayItems() {
    let value = localStorage.getItem(key);
    if(value) {
        $(`#text${key}`).text(value);
    }
};