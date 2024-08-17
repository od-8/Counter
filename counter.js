let userInput = document.getElementById('input');

const decrease = document.getElementById('decrease');
decrease.addEventListener('click', () => {
    userInput.value = parseFloat(userInput.value) - 1;
    if (userInput.value == 'NaN' || userInput.value == '') {
        userInput.value = '';
        document.getElementById('error').innerHTML = "ERROR! No number detected";
        setTimeout(() => {
            document.getElementById('error').innerHTML = "";
        }, 1000)
    } 
})

const reset = document.getElementById('reset');
reset.addEventListener('click', () => userInput.value = "");

const increase = document.getElementById('increase');
increase.addEventListener('click', () => {
    userInput.value = parseFloat(userInput.value) + 1;
    if (userInput.value == 'NaN' || userInput.value == '') {
        userInput.value = '';
        document.getElementById('error').innerHTML = "ERROR! No number detected"
        setTimeout(() => {
            document.getElementById('error').innerHTML = ""
        }, 1000)
    }
});