//Fetch Data From Session Storage of index
const checkInToDisplay = sessionStorage.getItem('check-in');
const checkOutToDisplay = sessionStorage.getItem('check-out');
const roomToDisplay = sessionStorage.getItem('rooms-num');
const adultToDisplay = sessionStorage.getItem('adults-num');

checkin.setAttribute('value', checkInToDisplay);
checkout.setAttribute('value', checkOutToDisplay);
rooms.setAttribute('value', roomToDisplay);
adults.setAttribute('value', adultToDisplay);


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


//Room Images Modal
let slideIndex = [1,1,1];
let slideId = ["mySlides", "mySlides2", "mySlides3", ]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);

// Next/previous controls
function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

// Thumbnail image controls
function currentSlide(n, no) {
  showSlides(slideIndex[no] = n, no);
}

function showSlides(n, no) {
  let i;
  let slides = document.getElementsByClassName(slideId[no]);
  // let dots = document.getElementsByClassName("demo");
  // let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex[no]-1].style.display = "block";
  // dots[slideIndex-1].className += " active"; (Pagkinomment out ko to nag eerror)
  // captionText.innerHTML = dots[slideIndex-1].alt;
}


//Read More Function
function readMore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var readMore = document.getElementById("readMore");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    readMore.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    readMore.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}


// 3 button function
let presidentialFnc = document.querySelector("#presidentialBtn");
let executiveFnc = document.querySelector("#executiveBtn");
let deluxeFnc = document.querySelector("#deluxeBtn");

presidentialFnc.addEventListener("click",presidentialBtn);
executiveFnc.addEventListener("click",executiveBtn);
deluxeFnc.addEventListener("click",deluxeBtn);

const today = new Date();
const todayDate = today.toISOString().substr(0, 10);

const tomorrow = new Date(today);
tomorrow.setDate(today.getDate()+1);

const yyyy = tomorrow.getFullYear();
const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
const dd = String(tomorrow.getDate()).padStart(2, '0');
const dateStr = yyyy + '-' + mm + '-' + dd;



let billArray = [];

// PRESIDENTIAL BTN
  function presidentialBtn() {
    let checkIn = document.querySelector("#checkin").value;
    let checkOut = document.querySelector("#checkout").value;
    let adults = document.querySelector("#adults").value;
    let rooms = document.querySelector("#rooms").value;
    let roomTypes = "Presidential Suite";
    const tax = parseFloat(0.12);

    let checkinDate = new Date(document.getElementById("checkin").value);
    let checkoutDate = new Date(document.getElementById("checkout").value);
    let dateToday = new Date(todayDate);
   
    let diffDate = checkoutDate - checkinDate;
    let diffDays = diffDate / 86400000;
  
    let price = (((parseFloat(25500) + parseFloat(25500)*tax))*(rooms)*diffDays) - (((parseFloat(25500) + parseFloat(25500)*tax))*(rooms)*diffDays)*0.1;

    let dateCheck = checkinDate - dateToday;

    if (diffDate > 0  && dateCheck >= 0) {
    let bill = {
      checkIn: checkIn,
      checkOut: checkOut,
      numDays: diffDays,
      adults: adults,
      rooms: rooms,
      roomTypes: roomTypes,
      price: price
    };

    let dataArray = JSON.parse(sessionStorage.getItem('dataArray')) || [];
    dataArray.push(bill);
    sessionStorage.setItem('dataArray', JSON.stringify(dataArray));

    billArray.push(bill);

    let billDiv = document.createElement("div");
    let roomType = document.createElement("input");
    let roomPrice = document.createElement("input");
    let checkInDis = document.createElement("input");
    let checkOutDis = document.createElement("input");
    let daysNum = document.createElement("input");
    let roomNum = document.createElement("input");
    let adultNum = document.createElement("input");
    let delButton = document.createElement("button");
    let totalPrice = document.createElement("input");
    let lessPrice = document.createElement("input");


    billDiv.classList.add("bill-div");
    roomType.classList.add("room-type");
    roomPrice.classList.add("room-price1");
    checkInDis.classList.add("checkIn-Dis");
    checkOutDis.classList.add("checkOut-Dis");
    daysNum.classList.add("days-num");
    roomNum.classList.add("room-num");
    adultNum.classList.add("adult-num");
    delButton.classList.add("del-button");
    totalPrice.classList.add("total-price");
    lessPrice.classList.add("less-price");

    roomType.setAttribute("disabled", "");
    roomPrice.setAttribute("disabled", "");
    checkInDis.setAttribute("disabled", "");
    checkOutDis.setAttribute("disabled", "");
    daysNum.setAttribute("disabled", "");
    roomNum.setAttribute("disabled", "");
    adultNum.setAttribute("disabled", "");
    totalPrice.setAttribute("disabled", "");
    lessPrice.setAttribute("disabled", "");
    delButton.textContent = "Delete";

    summaryBill.appendChild(billDiv);
    billDiv.appendChild(roomType);
    billDiv.appendChild(roomPrice);
    billDiv.appendChild(checkInDis);
    billDiv.appendChild(checkOutDis);
    billDiv.appendChild(daysNum);
    billDiv.appendChild(roomNum);
    billDiv.appendChild(adultNum);
    billDiv.appendChild(lessPrice);
    billDiv.appendChild(delButton);       

    roomType.setAttribute("value","Room Type: Presidential Suite" );
    roomPrice.setAttribute("value","Room Price: 25,500" );
    checkInDis.setAttribute("value","Check-in: " + bill.checkIn );
    checkOutDis.setAttribute("value","Check-out: " + bill.checkOut );
    daysNum.setAttribute("value","Night(s): " + bill.numDays );
    roomNum.setAttribute("value","Room(s): " + bill.rooms );
    adultNum.setAttribute("value","Adult(s): " + bill.adults );
    lessPrice.setAttribute("value","less 10% on Booking Online" );

    calculateTotal();

    delButton.addEventListener("click", delItem);

    function delItem(index) {
      billDiv.remove();

      billArray.splice(index, 1)[0];
      calculateTotal();

      // let itemToDelete = sessionStorage.getItem('dataArray');
      // if (itemToDelete) {
      //   sessionStorage.removeItem('dataArray');
      // }
    }
  } else
    alert("Please check the Check-in and Check-out Date");
  }


// DELUXE BTN
  function deluxeBtn() {
    let checkIn = document.querySelector("#checkin").value;
    let checkOut = document.querySelector("#checkout").value;
    let adults = document.querySelector("#adults").value;
    let rooms = document.querySelector("#rooms").value;
    let roomTypes = "Deluxe Suite";
    const tax = parseFloat(0.12);


    let checkinDate = new Date(document.getElementById("checkin").value);
    let checkoutDate = new Date(document.getElementById("checkout").value);
    let dateToday = new Date(todayDate);

    let diffDate = checkoutDate - checkinDate;
    let diffDays = diffDate / 86400000;

    let price = (((parseFloat(7500) + parseFloat(7500)*tax))*(rooms)*diffDays) - (((parseFloat(7500) + parseFloat(7500)*tax))*(rooms)*diffDays)*0.1;

    let dateCheck = checkinDate - dateToday;

    if (diffDate > 0  && dateCheck >= 0) {
    let bill = {
      checkIn: checkIn,
      checkOut: checkOut,
      numDays: diffDays,
      adults: adults,
      rooms: rooms,
      roomTypes: roomTypes,
      price: price
    };

    let dataArray = JSON.parse(sessionStorage.getItem('dataArray')) || [];
    dataArray.push(bill);
    sessionStorage.setItem('dataArray', JSON.stringify(dataArray));

    billArray.push(bill);

    let billDiv = document.createElement("div");
    let roomType = document.createElement("input");
    let roomPrice = document.createElement("input");
    let checkInDis = document.createElement("input");
    let checkOutDis = document.createElement("input");
    let daysNum = document.createElement("input");
    let roomNum = document.createElement("input");
    let adultNum = document.createElement("input");
    let delButton = document.createElement("button");
    let totalPrice = document.createElement("input");
    let lessPrice = document.createElement("input");

    billDiv.classList.add("bill-div");
    roomType.classList.add("room-type");
    roomPrice.classList.add("room-price1");
    checkInDis.classList.add("checkIn-Dis");
    checkOutDis.classList.add("checkOut-Dis");
    daysNum.classList.add("days-num");
    roomNum.classList.add("room-num");
    adultNum.classList.add("adult-num");
    delButton.classList.add("del-button");
    totalPrice.classList.add("total-price");
    lessPrice.classList.add("less-price");

    roomType.setAttribute("disabled", "");
    roomPrice.setAttribute("disabled", "");
    checkInDis.setAttribute("disabled", "");
    checkOutDis.setAttribute("disabled", "");
    daysNum.setAttribute("disabled", "");
    roomNum.setAttribute("disabled", "");
    adultNum.setAttribute("disabled", "");
    totalPrice.setAttribute("disabled", "");
    lessPrice.setAttribute("disabled", "");
    delButton.textContent = "Delete";
    
    summaryBill.appendChild(billDiv);
    billDiv.appendChild(roomType);
    billDiv.appendChild(roomPrice);
    billDiv.appendChild(checkInDis);
    billDiv.appendChild(checkOutDis);
    billDiv.appendChild(daysNum);
    billDiv.appendChild(roomNum);
    billDiv.appendChild(adultNum);
    billDiv.appendChild(lessPrice);
    billDiv.appendChild(delButton);       

    roomType.setAttribute("value","Room Type: Deluxe Suite" );
    roomPrice.setAttribute("value","Room Price: 7,500" );
    checkInDis.setAttribute("value","Check-in: " + bill.checkIn );
    checkOutDis.setAttribute("value","Check-out: " + bill.checkOut );
    daysNum.setAttribute("value","Night(s): " + bill.numDays );
    roomNum.setAttribute("value","Room(s): " + bill.rooms );
    adultNum.setAttribute("value","Adult(s): " + bill.adults );
    lessPrice.setAttribute("value","less 10% on Booking Online" );
 
    calculateTotal();

    delButton.addEventListener("click", delItem);

    function delItem(index) {
      billDiv.remove();

      billArray.splice(index, 1)[0];
      calculateTotal();

      // let itemToDelete = sessionStorage.getItem('dataArray');
      // if (itemToDelete) {
      //   sessionStorage.removeItem('dataArray');
      // }
    }
  } else
  alert("Please check the Check-in and Check-out Date");
} 

// EXECUTIVE BTN
function executiveBtn() {
  
  let checkIn = document.querySelector("#checkin").value;
  let checkOut = document.querySelector("#checkout").value;
  let adults = document.querySelector("#adults").value;
  let rooms = document.querySelector("#rooms").value;
  let roomTypes = "Executive Suite";
  const tax = parseFloat(0.12);

  let checkinDate = new Date(document.getElementById("checkin").value);
  let checkoutDate = new Date(document.getElementById("checkout").value);
  let dateToday = new Date(todayDate);

  let diffDate = checkoutDate - checkinDate;
  let diffDays = diffDate / 86400000;

  let price = (((parseFloat(10500) + parseFloat(10500)*tax))*(rooms)*diffDays) - (((parseFloat(10500) + parseFloat(10500)*tax))*(rooms)*diffDays)*0.1;

  let dateCheck = checkinDate - dateToday;

  if (diffDate > 0 && dateCheck >= 0) {
  let bill = {
    checkIn: checkIn,
    checkOut: checkOut,
    numDays: diffDays,
    adults: adults,
    rooms: rooms,
    roomTypes: roomTypes,
    price: price
  };
  
  let dataArray = JSON.parse(sessionStorage.getItem('dataArray')) || [];
    dataArray.push(bill);
    sessionStorage.setItem('dataArray', JSON.stringify(dataArray));

  billArray.push(bill);

  let billDiv = document.createElement("div");
  let roomType = document.createElement("input");
  let roomPrice = document.createElement("input");
  let checkInDis = document.createElement("input");
  let checkOutDis = document.createElement("input");
  let daysNum = document.createElement("input");
  let roomNum = document.createElement("input");
  let adultNum = document.createElement("input");
  let delButton = document.createElement("button");
  let totalPrice = document.createElement("input");
  let lessPrice = document.createElement("input");

  billDiv.classList.add("bill-div");
  roomType.classList.add("room-type");
  roomPrice.classList.add("room-price1");
  checkInDis.classList.add("checkIn-Dis");
  checkOutDis.classList.add("checkOut-Dis");
  daysNum.classList.add("days-num");
  roomNum.classList.add("room-num");
  adultNum.classList.add("adult-num");
  delButton.classList.add("del-button");
  totalPrice.classList.add("total-price");
  lessPrice.classList.add("less-price");

  roomType.setAttribute("disabled", "");
  roomPrice.setAttribute("disabled", "");
  checkInDis.setAttribute("disabled", "");
  checkOutDis.setAttribute("disabled", "");
  daysNum.setAttribute("disabled", "");
  roomNum.setAttribute("disabled", "");
  adultNum.setAttribute("disabled", "");
  totalPrice.setAttribute("disabled", "");
  lessPrice.setAttribute("disabled", "");
  delButton.textContent = "Delete";
  
  summaryBill.appendChild(billDiv);
  billDiv.appendChild(roomType);
  billDiv.appendChild(roomPrice);
  billDiv.appendChild(checkInDis);
  billDiv.appendChild(checkOutDis);
  billDiv.appendChild(daysNum);
  billDiv.appendChild(roomNum);
  billDiv.appendChild(adultNum);
  billDiv.appendChild(lessPrice);
  billDiv.appendChild(delButton);       

  roomType.setAttribute("value","Room Type: Executive Suite" );
  roomPrice.setAttribute("value","Room Price: 10,500" );
  checkInDis.setAttribute("value","Check-in: " + bill.checkIn );
  checkOutDis.setAttribute("value","Check-out: " + bill.checkOut );
  daysNum.setAttribute("value","Night(s): " + bill.numDays );
  roomNum.setAttribute("value","Room(s): " + bill.rooms );
  adultNum.setAttribute("value","Adult(s): " + bill.adults );
  lessPrice.setAttribute("value","less 10% on Booking Online" );
  
  calculateTotal();

  delButton.addEventListener("click", delItem);

  function delItem(index) {
    billDiv.remove();

    billArray.splice(index, 1)[0];
    calculateTotal();

    // let itemToDelete = sessionStorage.getItem('dataArray');
    // if (itemToDelete) {
    //   sessionStorage.removeItem('dataArray');
    // }
  }
  } else
  alert("Please check the Check-in and Check-out Date");
} 


function calculateTotal() {
  let total = 0;
    for (let i = 0; i < billArray.length; i++) {
    
      let bill = billArray[i];
      total += bill.price;
    }
    document.getElementById("total").innerHTML = total.toFixed(2);
}

  let proceedBtn = document.querySelector("#bookNow")
  proceedBtn.addEventListener("click", proceedFnc);
  function proceedFnc() {
  if (total == 0) {
    alert("please Select a room");
  } 
  window.location.href="check-out-form.html"
  }