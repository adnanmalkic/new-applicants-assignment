const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');
const specialChars = ['%', '*', '/', '-', '+', '='];
let output = '';

//DEFINE FUNCTION TO CALCULATE BASED ON BUTTON CLICKED
const calculate = (btnValue) => {
    if (btnValue === '=' && output !== '') {
        //IF OUTPUT HAS "%", REPLACE WITH '/100 BEFORE EVALUATING
        output = eval(output.replace('%', '/100'));
    } else if (btnValue === 'AC') {
        output = '';
    } else if (btnValue === 'DEL') {
        //IF DEL BUTTON IS CLICKED, REMOVE THE LAST CHARACTER FROM THE OUTPUT
        output = output.toString().slice(0, -1);
    } else {
     
        if (output === '' && specialChars.includes(btnValue)) return;
        output += btnValue;
    }
    display.value = output;
};
buttons.forEach((button) => {
    button.addEventListener('click', (e) => calculate(e.target.dataset.value));
});
