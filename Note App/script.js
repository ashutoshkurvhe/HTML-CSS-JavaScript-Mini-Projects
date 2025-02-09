const createBtn = document.querySelector(".create-btn");
console.log(createBtn);
const notesCont = document.querySelector(".notes-cont");
console.log(notesCont);

createBtn.addEventListener("click", () => {
  const inputbox = document.createElement("p");
  inputbox.setAttribute("contenteditable", "true");
  inputbox.className = "input-box";
  const dltbtn = document.createElement("img");
  dltbtn.src = 'images/delete.png'
  dltbtn.className = "delete-btn";
  
    

  dltbtn.addEventListener("click", () => {
    dltbtn.parentNode.remove();
  });
  inputbox.appendChild(dltbtn);
    notesCont.appendChild(inputbox);
});
