// + - button
function incrementRoom() {
  let value = parseInt(document.getElementById('rooms').value, 10);
  value = isNaN(value) ? 1 : value;
  value++;
  document.getElementById('rooms').value = value;
}

function decrementRoom() {
  let value = parseInt(document.getElementById('rooms').value, 10);
  value = isNaN(value) ? 1 : value;
  value--;
  document.getElementById('rooms').value = value < 1 ? 1 : value;
}

function incrementAdult() {
  let value = parseInt(document.getElementById('adults').value, 10);
  value = isNaN(value) ? 1 : value;
  value++;
  document.getElementById('adults').value = value;
}

function decrementAdult() {
  let value = parseInt(document.getElementById('adults').value, 10);
  value = isNaN(value) ? 1 : value;
  value--;
  document.getElementById('adults').value = value < 1 ? 1 : value;
}

// calendar getting values and submit button
const checkBtn = document.querySelector("#checkBtn");
const todayDateInput = document.querySelector("#checkin");
const today = new Date();
const todayDate = today.toISOString().substr(0, 10);

todayDateInput.value = todayDate;


const tomorrow = new Date(today);
tomorrow.setDate(today.getDate()+1);

const myDate = document.getElementById("checkout");
const yyyy = tomorrow.getFullYear();
const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
const dd = String(tomorrow.getDate()).padStart(2, '0');
const dateStr = yyyy + '-' + mm + '-' + dd;
myDate.value = dateStr;


function checkAvail(e) {
  e.preventDefault();
  const checkIn = document.getElementById('checkin');
  const checkinDate = checkIn.value;
  console.log(checkinDate);

  const checkOut = document.getElementById('checkout');
  const checkoutDate = checkOut.value;
  console.log(checkoutDate);
}


// store data to session storage
let storeDataFnc1 = document.querySelector("#checkBtn1");
let storeDataFnc2 = document.querySelector("#checkBtn2");
let storeDataFnc3 = document.querySelector("#checkBtn3");
let storeDataFnc4 = document.querySelector("#checkBtn4");
let storeDataFnc5 = document.querySelector("#checkBtn5");
storeDataFnc1.addEventListener("click", storeData);
storeDataFnc2.addEventListener("click", storeData);
storeDataFnc3.addEventListener("click", storeData);
storeDataFnc4.addEventListener("click", storeData);
storeDataFnc5.addEventListener("click", storeData);

function storeData() {
let checkin = document.querySelector("#checkin");
let checkout = document.querySelector("#checkout");
let rooms = document.querySelector("#rooms");
let adults = document.querySelector("#adults");

sessionStorage.setItem('check-in',checkin.value);
sessionStorage.setItem('check-out',checkout.value);
sessionStorage.setItem('rooms-num',rooms.value);
sessionStorage.setItem('adults-num',adults.value);
}