//FORM ELEMENTS
let dataForm = document.querySelector("#dataForm");
let fName = document.querySelector("#fName");
let lName = document.querySelector("#lName");
let emailInput = document.querySelector("#emailInput");
let contactNumber = document.querySelector("#contactNumber");
let address = document.querySelector("#address");
let cityAddress = document.querySelector("#cityAddress");
let provinceAddress = document.querySelector("#provinceAddress");
let zipCode = document.querySelector("#zipCode");
let messageBox = document.querySelector("#messageBox");
let fullName = document.querySelector("#fullName");
let cvv = document.querySelector("#cvv");
let bookingBtn = document.querySelector("#bookingBtn");

//ERROR MESSAGE
let errDisplay = document.querySelector("#errDisplay");
let message = "";

//EVENTS
bookingBtn.addEventListener("click", validateForm);

function validateForm(e) {
    e.preventDefault();

    let fNameValue = fName.value;
    let lNameValue = lName.value;
    let emailValue = emailInput.value;
    let contactNumberValue = contactNumber.value;
    let addressValue = address.value;
    let cityAddressValue = cityAddress.value;
    let provinceAddressValue = provinceAddress.value;
    let zipCodeValue = zipCode.value;
    let messageBoxValue = messageBox.value;
    let fullNameValue = fullName.value;
    let cvvValue = cvv.value;
  

    let fNameData = /^([a-zA-Z ]){2,30}$/;
    let lNameData = /^([a-zA-Z ]){2,30}$/;
    let emailRegX = /^\w+([\.]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let ContactNumberData = /^\d{11}$/;
    let addressData = /^[a-zA-Z0-9\s,'-]*$/;
    let cityAddressData = /^([a-zA-Z ]){2,30}$/;
    let provinceAddressData = /^([a-zA-Z ]){2,30}$/;
    let zipCodeData = /^\d{4}$/;
    let messageBoxData = /^([a-zA-Z ]){2,50}$/;
    let fullNameData = /^([a-zA-Z ]){2,30}$/;
    let cvvData = /^\d{3}$/;
    
    
    if (fNameValue.match(fNameData)) {
    } else {
      message = "Please enter your first name.";
    }

    if (lNameValue.match(lNameData)) {
    } else {
      message = "Please enter your last name.";
    }

    if (emailValue.match(emailRegX)) {
    } else {
        message = "Invalid email address";
    }

    if (contactNumberValue.match(ContactNumberData)) {
    } else {
      message = "Please enter correct number.";
    }

    if (addressValue.match(addressData)) {
    } else {
      message = "Please enter your address.";
    }

    if (cityAddressValue.match(cityAddressData)) {
    } else {
      message = "Please enter your City.";
    }

    if (provinceAddressValue.match(provinceAddressData)) {
    } else {
      message = "Please enter your Province.";
    }

    if (zipCodeValue.match(zipCodeData)) {
    } else {
      message = "Please enter valid Zip Code.";
    }

    if (messageBoxValue.match(messageBoxData)) {
    } else {
      message = "Please leave a message.";
    }

    if (fullNameValue.match(fullNameData)) {
    } else {
      message = "Please enter Full NAme on Card.";
    }

    if (cvvValue.match(cvvData)) {
    } else {
      message = "Please enter CVV.";
    }

    errDisplay.innerHTML = message;
}







