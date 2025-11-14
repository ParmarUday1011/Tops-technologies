let allData = [];

document.addEventListener("DOMContentLoaded", function () {
  var table = document.getElementById("datatbl");
  allData = JSON.parse(localStorage.getItem("HotelData")) || [];

  if (allData.length === 0) {
    var messageRow = table.insertRow();
    var messageCell = messageRow.insertCell();
    messageCell.colSpan = 9;
    messageCell.textContent = "No data is present in the table";
    messageCell.style.textAlign = "center";
    messageCell.style.padding = "20px";
    messageCell.style.fontSize = "18px";
    messageCell.style.fontWeight = "bold";
    messageCell.style.background = "#88E788";
    return;
  }

  displayTable(allData);
});

function displayTable(data) {
  var table = document.getElementById("datatbl");

  // Remove all rows except header
  while (table.rows.length > 1) {
    table.deleteRow(1);
  }

  if (data.length === 0) {
    var messageRow = table.insertRow();
    var messageCell = messageRow.insertCell();
    messageCell.colSpan = 9;
    messageCell.textContent = "No matching records found";
    messageCell.style.textAlign = "center";
    messageCell.style.padding = "20px";
    messageCell.style.fontSize = "18px";
    messageCell.style.fontWeight = "bold";
    messageCell.style.background = "#FFB6C6";
    return;
  }

  for (var i = 0; i < data.length; i++) {
    var record = data[i];
    var newRow = table.insertRow();

    for (var j = 0; j < record.length; j++) {
      var value = record[j];
      var cell = newRow.insertCell();
      cell.textContent = value;
    }
  }
}

var searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", function () {
  var key = this.value;
  key = key.toUpperCase();
  var table = document.getElementById("datatbl");
  var tr = table.getElementsByTagName("tr");
  for (var i = 0; i < tr.length; i++) {
    if (i === 0) {
      tr[i].style.display = "";
      continue;
    }
    var tds = tr[i].getElementsByTagName("td")[0];
    var tdss = tr[i].getElementsByTagName("td")[5];
    if (tds && tdss) {
      var tds = tds.textContent || tds.innerText;
      var tdss = tdss.textContent || tdss.innerText;
      tds = tds.toUpperCase();
      tdss = tdss.toUpperCase();
      if (tds.indexOf(key) > -1 || tdss.indexOf(key) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
});
