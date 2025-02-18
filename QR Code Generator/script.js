let qrBox = document.querySelector(".qr-box");
let qrImage = document.querySelector(".qr-image");
let qrText = document.querySelector(".qr-text");
let genBtn = document.querySelector(".gen-btn");

const qenerateQR =() => {
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data= ${qrText.value}`;
}


genBtn.addEventListener('click', qenerateQR);
