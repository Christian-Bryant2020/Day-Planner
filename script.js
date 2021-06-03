const currentDay = dayjs().format('ddd, MMMM D YYYY');
const date = document.getElementById('todayDate');
const hour =  12//dayjs().format("H");
console.log(hour)

date.innerText = currentDay;

$(document).ready(function () {
    let row = $(".row")
    var span = $(".span")
    var text = $("textarea")
    var saveButton = $("saveBtn")
    console.log(saveButton)

    //save to local storage text
$('#saveBtn').click(function() {
    console.log('click')
         var value = $(this).parent().children("textarea").val()
         var key = $(this).parent().attr("data-value")
    
         localStorage.setItem(buttonClickId + "hour", buttonClickText)
    });

    //color change dependent on time
    row.each(function () {
        var hourBlock = parseInt(this.dataset.value)
        console.log(this.dataset.value)
        if (hourBlock < hour) {
            $(this).addClass("past")
        }
        else if (hourBlock === hour) {
            $(this).addClass("present")
        }
        else {
            $(this).addClass("future")
        }
    })


//display local storage text
function displayItems() {
    let value = localStorage.getItem(key);
    if (value) {
        $(`#text${key}`).text(value);
    }
}});

