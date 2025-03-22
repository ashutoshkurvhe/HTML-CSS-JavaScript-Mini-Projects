const weightInputEl = document.querySelector('#weight-input');
const resultEl = document.querySelector('.result');
const errorEl = document.querySelector('.error');
let errorTime;
let resultTime;




const updateResults=()=>{
    if (weightInputEl.value <= 0 || isNaN(weightInputEl.value)) {
        errorEl.textContent = 'Please enter a valid weight';
        clearTimeout(errorTime);
        errorTime = setTimeout(() => { 
            errorEl.textContent = '';
            weightInputEl.value = "";
        },1000)
    } else {
        resultEl.textContent = (weightInputEl.value / 2.2).toFixed(2);
        clearTimeout(resultTime);
        resultTime = setTimeout(() => {
            resultEl.textContent = '';
            weightInputEl.value = "";
        }, 2000);
    }
}

weightInputEl.addEventListener('input', updateResults);