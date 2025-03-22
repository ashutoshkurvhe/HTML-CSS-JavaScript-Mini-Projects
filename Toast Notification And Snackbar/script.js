const toastBox = document.querySelector(".toast-box");
const buttons = document.querySelectorAll("button");

const toastDetails = {
  success: {
    icon: "fa-circle-check",
    text: "Success: Operation completed successfully.",
  },
  error: {
    icon: "fa-circle-xmark",
    text: "Error: Something went wrong!",
  },
  invalid: {
    icon: "fa-circle-exclamation",
    text: "Warning: Invalid input provided.",
  },
};

buttons.forEach((btn) => {
  btn.addEventListener("click", () => createToast(btn.className.split("-")[0]));
});

function createToast(type) {
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;

  toast.innerHTML = `
        <i class="fa-solid ${toastDetails[type].icon}"></i>
        <span>${toastDetails[type].text}</span>
        <i class="fa-solid fa-xmark close"></i>
    `;

  toastBox.appendChild(toast);

  toast.querySelector(".close").addEventListener("click", () => {
    toast.classList.add("hide");
    setTimeout(() => toast.remove(), 300);
  });

  setTimeout(() => {
    toast.classList.add("hide");
    setTimeout(() => toast.remove(), 300);
  }, 5000);
}
