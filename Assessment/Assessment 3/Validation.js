function resetForm() {
  document.getElementById("fname").value = '';
  document.getElementById("phone").value = '';
  document.getElementById("email").value = '';
  document.getElementById("add").value = '';
  document.getElementById("adhno").value = '';
  document.getElementById("indate").value = '';
  document.getElementById("outdate").value = '';
  document.getElementById("Adult").value = '';
  document.getElementById("pov").value = '';

  document.getElementById("nameError").innerHTML = '';
  document.getElementById("phoneError").innerHTML = '';
  document.getElementById("emailError").innerHTML = '';
  document.getElementById("addressError").innerHTML = '';
  document.getElementById("aadherError").innerHTML = '';
  document.getElementById("inError").innerHTML = '';
  document.getElementById("outError").innerHTML = '';
  document.getElementById("adultError").innerHTML = '';
  document.getElementById("povError").innerHTML = '';
}

function submitForm() {
  event.preventDefault();

  var fname = document.getElementById("fname").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var add = document.getElementById("add").value;
  var adhno = document.getElementById("adhno").value;
  var indate = document.getElementById("indate").value;
  var outdate = document.getElementById("outdate").value;
  var adult = document.getElementById("Adult").value;
  var pov = document.getElementById("pov").value;

  // Check empty fields
  if (!fname || !phone || !email || !add || !adhno || !indate || !outdate || !adult || !pov) {
    alert("Please fill all fields!");
    return;
  }

  // Collect form data into array
  var datasend = [fname, phone, email, add, adhno, indate, outdate, adult, pov];
  console.log(datasend);
  
  // Get old data from localStorage or create new array
  var existingData = JSON.parse(localStorage.getItem("HotelData")) || []; 

  // Add new record
  existingData.push(datasend);

  // Save it back
  localStorage.setItem("HotelData", JSON.stringify(existingData));

  alert("Data saved successfully!");
  resetForm();
}


document.addEventListener('DOMContentLoaded', function () {
  var name = document.getElementById("fname")
  var phone = document.getElementById("phone")
  var email = document.getElementById("email")
  var adderss = document.getElementById("add")
  var aadher = document.getElementById("adhno")
  var checkin = document.getElementById("indate")
  var checkout = document.getElementById("outdate")
  var noadult = document.getElementById("Adult")
  var Purpose = document.getElementById("pov")

  //name validation
  name.addEventListener('input', function () {
    var namevalue = name.value;
    var nameError = document.getElementById("nameError");

    if (namevalue == "") {
      nameError.innerHTML = "** Please enter your name **";
      nameError.style.fontWeight = "bold";
      // alert("Please enter your name")
    } else {
      if (namevalue.length <= 2) {
        nameError.innerHTML = "** Name must be more than 2 characters **";
        nameError.style.fontWeight = "bold";
        // alert("Name must be more than 2 characters")
      } else {
        if (!isNaN(namevalue)) {
          nameError.innerHTML = "** Name cannot be a number **";
          nameError.style.fontWeight = "bold";
          // alert("Name cannot be a number")
        } else {
          nameError.innerHTML = "";
        }
      }
    }
  })


  //phone number validation
  phone.addEventListener('input', function () {
    var phonevalue = phone.value;
    var phoneError = document.getElementById("phoneError");

    if (phonevalue == "") {
      phoneError.innerHTML = "** Please enter your phone **";
      phoneError.style.fontWeight = "bold";
    } else {
      // Check if phone has exactly 10 digits
      var phonePattern = /^[0-9]{10}$/;

      if (!phonePattern.test(phonevalue)) {
        phoneError.innerHTML = "** Please enter a valid 10-digit mobile number **";
        phoneError.style.fontWeight = "bold";
      } else {
        phoneError.innerHTML = "";
      }
    }
  })


  //email validation
  email.addEventListener('input', function () {
    var emailvalue = email.value;
    var emailError = document.getElementById("emailError");
    if (emailvalue == "") {
      emailError.innerHTML = "** Please enter your email **";
      emailError.style.fontWeight = "bold";
    } else {
      // Regular expression for email validation
      var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;

      if (!emailPattern.test(emailvalue)) {
        emailError.innerHTML = "** Please enter a valid email address **";
        emailError.style.fontWeight = "bold";
      } else {
        emailError.innerHTML = "";
      }
    }
  })

  //address validation
  adderss.addEventListener('input', function () {
    var adderssvalue = adderss.value;
    var addressError = document.getElementById("addressError");

    if (adderssvalue == "") {
      addressError.innerHTML = "** Please enter your adderss **";
      addressError.style.fontWeight = "bold";
    } else {
      if (adderssvalue.length < 15) {
        addressError.innerHTML = "** Address must be at least 15 characters long **";
        addressError.style.fontWeight = "bold";
      } else {
        addressError.innerHTML = "";
      }
    }
  })

  //aadher validation
  aadher.addEventListener('input', function () {
    var aadhervalue = aadher.value;
    var aadherError = document.getElementById("aadherError");

    if (aadhervalue == "") {
      aadherError.innerHTML = "** Please enter your 12 digit aadher **";
      aadherError.style.fontWeight = "bold";
    } else {
      var aadherPattern = /^[0-9]{12}$/;
      if (!aadherPattern.test(aadhervalue)) {
        aadherError.innerHTML = "** Please enter a valid 12-digit Aadhar number **";
        aadherError.style.fontWeight = "bold";
      } else {
        aadherError.innerHTML = "";
      }
    }
  })


  //Indate validation
  checkin.addEventListener('input', function () {
    var checkinvalue = checkin.value;
    var inError = document.getElementById("inError");

    if (checkinvalue == "") {
      inError.innerHTML = "** Please enter number of check in date **";
      inError.style.fontWeight = "bold";
    } else {
      var today = new Date();                // current date
      var checkinDate = new Date(checkinvalue);   // user-entered date

      // Compare dates — checkin must be today or a future date
      if (checkinDate < today.setHours(0, 0, 0, 0)) {
        inError.innerHTML = "** Check-in date cannot be in the past **";
        inError.style.fontWeight = "bold";
      } else {
        inError.innerHTML = "";
      }
    }
  })


  //checkout validation
  checkout.addEventListener('input', function () {
    var checkoutvalue = checkout.value;
    var outError = document.getElementById("outError");

    if (checkoutvalue == "") {
      outError.innerHTML = "** Please enter your check out date **";
      outError.style.fontWeight = "bold";
    } else {
      var checkinDate = new Date(checkin.value);
      var checkoutDate = new Date(checkoutvalue);

      // First check if checkout is not in past
      var today = new Date().setHours(0, 0, 0, 0);
      if (checkoutDate < today) {
        outError.innerHTML = "** Check-out date cannot be in the past **";
        outError.style.fontWeight = "bold";
      }
      // Then check if checkout is after checkin
      else if (checkoutDate <= checkinDate) {
        outError.innerHTML = "** Check-out date must be after check-in date **";
        outError.style.fontWeight = "bold";
      } else {
        outError.innerHTML = "";
      }
    }
  })

  //no. of adult validation
  noadult.addEventListener('input', function () {
    var noadultvalue = noadult.value;
    var adultError = document.getElementById("adultError");

    if (noadultvalue == "") {
    adultError.innerHTML = "** Please enter your adult no. **";
    adultError.style.fontWeight = "bold";
  } else {
    if (noadultvalue <= 0) {
      adultError.innerHTML = "** Number of adults must be at least 1 **";
      adultError.style.fontWeight = "bold";
    } else {
      adultError.innerHTML = "";
    }
  }
  })


  //purpose of visit validation
  Purpose.addEventListener('input', function () {
    var Purposevalue = Purpose.value;
    var povError = document.getElementById("povError");

     if (Purposevalue == "") {
    povError.innerHTML = "** Please enter your purpose **";
    povError.style.fontWeight = "bold";
  } else {
    if (Purposevalue.length < 5) {
      povError.innerHTML = "** Purpose must be at least 5 characters long **";
      povError.style.fontWeight = "bold";
    } else {
      povError.innerHTML = "";
    }
  }
  })


})

//form data collect data n return as array in log
function datasubmit() {
  var name = document.getElementById("fname").value;
  var phone = document.getElementById("phone").value
  var email = document.getElementById("email").value;
  var adderss = document.getElementById("add").value;
  var aadher = document.getElementById("adhno").value;
  var checkin = document.getElementById("indate").value;
  var checkout = document.getElementById("outdate").value;
  var noadult = document.getElementById("Adult").value;
  var Purpose = document.getElementById("pov").value;
  var data = [name, phone, email, adderss, aadher, checkin, checkout, noadult, Purpose];
  return data;
}

// Save individual fields to localStorage and return them
function setdata(datasend) {
  // store each field under its own key
  localStorage.setItem("Name", datasend[0]);
  localStorage.setItem("Phone", datasend[1]);
  localStorage.setItem("Email", datasend[2]);
  localStorage.setItem("Address", datasend[3]);
  localStorage.setItem("Aadher", datasend[4]);
  localStorage.setItem("Checkin", datasend[5]);
  localStorage.setItem("Checkout", datasend[6]);
  localStorage.setItem("Noadult", datasend[7]);
  localStorage.setItem("Purpose", datasend[8]);

  // read them back using the correct keys
  var name1 = localStorage.getItem("Name");
  var phone1 = localStorage.getItem("Phone");
  var email1 = localStorage.getItem("Email");
  var addrss1 = localStorage.getItem("Address");
  var aadhar1 = localStorage.getItem("Aadher");
  var chin1 = localStorage.getItem("Checkin");
  var chout1 = localStorage.getItem("Checkout");
  var nadult1 = localStorage.getItem("Noadult");
  var purpos1 = localStorage.getItem("Purpose");

  var send = [name1, phone1, email1, addrss1, aadhar1, chin1, chout1, nadult1, purpos1];
  // Also store the full record under HotelData so table.html can read it
  // localStorage.setItem("HotelData", JSON.stringify(datasend));  // convert into js to object
  return send;
}