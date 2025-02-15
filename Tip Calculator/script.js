const amount = document.querySelector('.amount');
const percentage = document.querySelector(".percentage");
const calculateBtn = document.querySelector('.calculate-btn');
const total = document.querySelector(".total");
console.log(amount)


calculateBtn.addEventListener('click', () => {
    calculateTip();
})

const calculateTip = () => {
    const bill = parseFloat(amount.value);
    const tipPer = parseFloat(percentage.value)
    const totalTip = bill * tipPer / 100;
    total.innerHTML = totalTip;
}