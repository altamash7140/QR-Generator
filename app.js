const qrImg = document.getElementById('qr-img');
const qrInput = document.getElementById('input');
const qrBtn = document.getElementById('button');


qrBtn.addEventListener('click', () => {
  const inputValue = qrInput.value;

  if(!inputValue){
    alert("Enter the Valid URL");
    return;
  }else{
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
    qrImg.alt = `QR code for ${inputValue}`;
  }
});