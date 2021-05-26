const currentDay = dayjs().format('ddd, MMMM D YYYY');
const date = document.getElementById('todayDate');

date.innerText = currentDay;

$(document).ready(function(){
    $('#saveBtn9am').on('click', function(){
        const textArea9am = $('#textarea9am').val();
        let hour9 = $('#hour9').text();
        localStorage.setItem(hour9, textArea9am);
    });
    $('#textarea9am').val(localStorage.getItem('9AM'));
})