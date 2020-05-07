var inputInitials = document.getElementById("inlineFormInput");
var submitBtn = document.getElementById("submitBtn");
var firstForm = document.getElementById("firstForm");

var initials = localStorage.getItem("intials");

inputInitials.textContent = initials;

submitBtn.addEventListener("click", function(event){
    event.preventDefault
    
})