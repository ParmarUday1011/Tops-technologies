function resetForm() {
    // Clear the form fields only
    document.getElementById("iuser").value = '';
    document.getElementById("pass").value = '';
}

var row = null

function reload(){
    event.preventDefault()
    var datasend = datasubmit()
    // console.log(datasend);
    var detals = getdatals(datasend)

    //This loop is for inserting data or updateing data
    if(row==null){
        getdata(detals)
        msg.innerHTML="Recived!!"
    }else{
        update()
        msg.innerHTML="Updated!!"
    }
}

//data comming from Form 
function datasubmit(){
    var user=document.getElementById("iuser").value
    var pass=document.getElementById("pass").value

    var view = [user,pass]
    return view;
}

//LocalStorage
function getdatals(datasend){
    //send data to LocalStorage
    var user = localStorage.setItem("Username" , datasend[0])
    var pass = localStorage.setItem("Password" , datasend[1])

    //Getting data froom LocalStorage
    var user1 = localStorage.getItem("Username" , user)
    var pass1 = localStorage.getItem("Password" , pass)
    var send = [user1,pass1]
    return send;
}

function getdata(detals){
     var table = document.getElementById("datatbl");
    var inrow = table.insertRow();
    cell1=inrow.insertCell(0).innerHTML=detals[0]
    cell2=inrow.insertCell(1).innerHTML=detals[1]
    cell3=inrow.insertCell(2).innerHTML=`<button class="edit-btn" onclick=edit(this)>Edit</button> 
                                        <button  class="delete-btn" onclick=deletedata(this)>Delete</button>`
}

//Edit and Delete
function edit(tabledata){
     row = tabledata.parentElement.parentElement
    document.getElementById("iuser").value=row.cells[0].innerHTML
    document.getElementById("pass").value=row.cells[1].innerHTML
}
function update(){
    row.cells[0].innerHTML=document.getElementById("iuser").value
    row.cells[1].innerHTML=document.getElementById("pass").value
    row=null
}

function deletedata(tabledata){
    // confirm("sure")
    row = tabledata.parentElement.parentElement
    document.getElementById("datatbl").deleteRow(row.rowIndex)
}