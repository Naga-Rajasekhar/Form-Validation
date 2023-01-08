var inputButton = document.getElementById("submitBut");
inputButton.addEventListener("click", function () {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var rege = /^(?=.*\d)(?=.*[A-Z])(.{8,50})$/;

  //Validating firstname

  var firstName = document.getElementById("fname").value;
  if (firstName.length != null) {
    if (firstName.length < 3) {
      window.alert("First Name length should be at least three characters");
    }
  }

  //Validating lastname

  var lastName = document.getElementById("lname").value;
  if (lastName.length != null) {
    if (lastName.length < 3) {
      window.alert("Last Name length should be at least three characters");
    }
  }

  //Validating email

  var emailAddress = document.getElementById("email").value;
  if (re.test(emailAddress)) {
  } else {
    window.alert("Please enter the valid email address");
  }

  //Validating password

  var passwordIs = document.getElementById("password").value;
  if (rege.test(passwordIs)) {
  } else {
    window.alert(
      "Password should contain atleast one upper case and one lower case letter and one special character"
    );
  }

  //Validating confirm password

  var confirmPassword = document.getElementById("confirm-password").value;
  if (passwordIs != confirmPassword) {
    window.alert("Password and Confirm Password is not same");
  } else {
    location.reload();
  }

  if (firstName.length > 3 && lastName.length > 3) {
    if (re.test(emailAddress)) {
      if (rege.test(passwordIs)) {
        if (passwordIs == confirmPassword) {
          window.alert("Thanks for submitting the form");
        }
      }
    }
  }
});
