const currentDay = dayjs().format('ddd, MMMM D YYYY');
const date = document.getElementById('todayDate');
const hour = dayjs().format("H");

date.innerText = currentDay;

$(document).ready(function () {
    let row = $(".row")
    let span = $(".span")
    let text = $("textarea")
    let saveButton = $(".saveBtn")

    //save to local storage text
$(saveButton).click(function() {
    let value = $(this).parent().children(".textarea").val()
    let key = $(this).parent().attr("data-value")
         localStorage.setItem(key , value)
    });

//display local storage text
text.each(function(){
        
    let textStorage = $(this)
    let storedItem = (textStorage.parent().attr("data-value"))


    if (textStorage !== null){
        var storedDay = localStorage.getItem(storedItem)
        textStorage.text(storedDay)
    }
    else {
        return
    }

})
 //color change dependent on time
 row.each(function () {
    let hourBlock = parseInt(this.dataset.value)
    if (hourBlock < hour) {
        $(this).addClass("past")
    }
    else if (hourBlock == hour) {
      
        $(this).addClass("present")
    }
    else {
        $(this).addClass("future")
    }
})
});

