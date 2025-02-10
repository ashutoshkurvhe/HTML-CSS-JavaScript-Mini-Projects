const dobInput = document.querySelector(".dob-input");
const calcBtn = document.querySelector(".calc-btn");
const result = document.querySelector(".result");


const calculateAge = () => {
    const dob = dobInput.value;
    if (dob === ""){
        alert("Please enter your date of birth here");
    } else {
        const age = getAge(dob);
        result.innerHTML = age;
    }
};


function getAge(dob) {
  const currentDate = new Date();
  const birthDate = new Date(dob);
  let age = currentDate.getFullYear() - birthDate.getFullYear();
  const m = currentDate.getMonth() - birthDate.getMonth();

  if (
    m < 0 ||
    (m === 0 && currentDate.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age;
}

calcBtn.addEventListener("click", calculateAge);
