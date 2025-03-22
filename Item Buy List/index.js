const inputEl = document.querySelector(".item-input");
const addBtn = document.querySelector(".add-btn");
const itemList = document.querySelector(".item-list");
const listArea = document.querySelector(".list-area");

let allItems = [];
let itemCount = 0;

const addItems = () => {
  if (inputEl.value === '') {
    alert("Please enter an item");
  } else {
      const newItem = inputEl.value;
      const item = document.createElement("li");
      const itemText = document.createElement("p");
      const buyBtn = document.createElement("button");
      const dltBtn = document.createElement("button");
      
      item.classList.add("item");
      item.textContent = newItem;
      buyBtn.textContent = 'Buy';
      dltBtn.textContent = 'Delete';
      
      buyBtn.classList.add("item-text");
      buyBtn.classList.add("buy-btn");
      dltBtn.classList.add("dlt-btn");
      
      item.appendChild(itemText);
      item.appendChild(buyBtn);
      item.appendChild(dltBtn);
      itemList.appendChild(item);
    }
    inputEl.value = '';
};

addBtn.addEventListener("click", addItems);

itemList.addEventListener('click', (e) => {
    if (e.target.innerText === 'Buy') {
      const item = e.target.parentNode;
        item.classList.add('bought');
        itemList.style.textDecoration = 'line-through'
      itemList.style.color = 'gray'
      e.target.textContent = 'Bought'
      e.target.style.backgroundColor = "#29a28e";


    }
    else if (e.target.innerText === 'Delete') {
        e.target.parentNode.remove()
    }
})