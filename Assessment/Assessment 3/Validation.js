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
  document.getElementById("numberError").innerHTML = '';
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

  var datasend = datasubmit(); // collect form data
  console.log(datasend);
  
    var existingData = JSON.parse(localStorage.getItem("HotelData")) || [];
  existingData.push(newData);
  localStorage.setItem("HotelData", JSON.stringify(datasend)); // save as one array

  alert("Data saved successfully!");
  resetForm()
  return false;
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
      // alert("Please enter your name")
    } else {
      if (namevalue.length <= 2) {
        nameError.innerHTML = "** Name must be more than 2 characters **";
        // alert("Name must be more than 2 characters")
      } else {
        if (!isNaN(namevalue)) {
          nameError.innerHTML = "** Name cannot be a number **";
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
    } else {
      // Check if phone has exactly 10 digits
      var phonePattern = /^[0-9]{10}$/;

      if (!phonePattern.test(phonevalue)) {
        phoneError.innerHTML = "** Please enter a valid 10-digit mobile number **";
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
    } else {
      // Regular expression for email validation
      var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;

      if (!emailPattern.test(emailvalue)) {
        emailError.innerHTML = "** Please enter a valid email address **";
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
    } else {
      if (adderssvalue.length < 15) {
        addressError.innerHTML = "** Address must be at least 15 characters long **";
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
    } else {
      var aadherPattern = /^[0-9]{12}$/;
      if (!aadherPattern.test(aadhervalue)) {
        aadherError.innerHTML = "** Please enter a valid 12-digit Aadhar number **";
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
    } else {
      var today = new Date();                // current date
      var checkinDate = new Date(checkinvalue);   // user-entered date

      // Compare dates — checkin must be today or a future date
      if (checkinDate < today.setHours(0, 0, 0, 0)) {
        inError.innerHTML = "** Check-in date cannot be in the past **";
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
    } else {
      var checkinDate = new Date(checkin.value);
      var checkoutDate = new Date(checkoutvalue);

      // First check if checkout is not in past
      var today = new Date().setHours(0, 0, 0, 0);
      if (checkoutDate < today) {
        outError.innerHTML = "** Check-out date cannot be in the past **";
      }
      // Then check if checkout is after checkin
      else if (checkoutDate <= checkinDate) {
        outError.innerHTML = "** Check-out date must be after check-in date **";
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
  } else {
    if (noadultvalue <= 0) {
      adultError.innerHTML = "** Number of adults must be at least 1 **";
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
  } else {
    if (Purposevalue.length < 5) {
      povError.innerHTML = "** Purpose must be at least 5 characters long **";
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

//Localstorage function to store data in browser
function getdatals(datasend) {
  var name = localStorage.setItem("Name", datasend[0]);
  var phone = localStorage.setItem("Phone", datasend[1]);
  var email = localStorage.setItem("Email", datasend[2]);
  var addrss = localStorage.setItem("Address", datasend[3]);
  var aadhar = localStorage.setItem("Aadher", datasend[4]);
  var chin = localStorage.setItem("Checkin", datasend[5]);
  var chout = localStorage.setItem("Checkout", datasend[6]);
  var nadult = localStorage.setItem("Noadult", datasend[7]);
  var purpos = localStorage.setItem("Purpose", datasend[8]);

  var name1 = localStorage.getItem("Name", name);
  var phone1 = localStorage.getItem("Name", phone);
  var email1 = localStorage.getItem("Name", email);
  var addrss1 = localStorage.getItem("Name", addrss);
  var aadhar1 = localStorage.getItem("Name", aadhar);
  var chin1 = localStorage.getItem("Name", chin);
  var chout1 = localStorage.getItem("Name", chout);
  var nadult1 = localStorage.getItem("Name", nadult);
  var purpos1 = localStorage.getItem("Name", purpos);
  var send = [name1, phone1, email1, addrss1, aadhar1, chin1, chout1, nadult1, purpos1];
  return send;
}

function getdatals(detals) {
  var inrow = table.insertRow();
  cell1 = inrow.insertCell(0).innerHTML=detals[0];
  cell2 = inrow.insertCell(1).innerHTML=detals[1];
  cell3 = inrow.insertCell(2).innerHTML=detals[2];
  cell4 = inrow.insertCell(3).innerHTML=detals[3];
  cell5 = inrow.insertCell(4).innerHTML=detals[4];
  cell6 = inrow.insertCell(5).innerHTML=detals[5];
  cell7 = inrow.insertCell(6).innerHTML=detals[6];
  cell8 = inrow.insertCell(7).innerHTML=detals[7];
  cell9 = inrow.insertCell(8).innerHTML=detals[8];

  // Delete button in last cell
  var delCell = inrow.insertCell(9);
  delCell.innerHTML = '<button type="button" onclick="deleteRow(this)">Delete</button>';
}

// helper to delete a row (called by the button)
function deleteRow(btn) {
  var row = btn.parentNode.parentNode;
  row.parentNode.removeChild(row);
}