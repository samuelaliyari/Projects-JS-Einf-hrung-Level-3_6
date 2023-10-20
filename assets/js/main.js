const number = document.body.querySelector("main  h3");
const cardHolder = document.body.querySelector(".dataContainer div:nth-of-type(1) h4");
const expiry = document.body.querySelector(".dataContainer div:nth-of-type(2) h4");


const holderInput = document.body.querySelector("#holderInput");
const numberInput = document.body.querySelector("#cardNumber");
const dateInput = document.body.querySelector("#dateInput");
const cvvInput = document.body.querySelector("#cvvInput");

function submitKey() {
    event.preventDefault()
    number.textContent = numberInput.value;
    cardHolder.textContent = holderInput.value;
    expiry.textContent = dateInput.value;
    console.log(cvvInput.value)
}