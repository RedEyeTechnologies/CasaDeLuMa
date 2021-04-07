function openForm() {
    document.getElementById("popupForm").style.display = "block";
}
function closeForm() {
    document.getElementById("popupForm").style.display = "none";
}
function addressFill() {
  var address = document.getElementById("enteredAddress").value; 

  document.getElementById("enteredAddress").value = address;
}
