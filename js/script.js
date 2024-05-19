function openLoginModal() {
    document.getElementById("loginModal").style.display = "block";
  }
  
  function closeLoginModal() {
    document.getElementById("loginModal").style.display = "none";
  }
  


 function promptPassword() {
  var password = prompt("Please enter your password:");
  if (password != null) {
      alert("You entered: " + password);
  }
}


function openSingupModal() {
  document.getElementById("SignupModal").style.display = "block";
}

function closeSignupModal() {
  document.getElementById("SignupModal").style.display = "none";
}