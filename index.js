// Login button functionality
document.getElementById("loginBtn").addEventListener("click", function (event) {
  //   console.log("Clicked");
  const mobileNumber = 01687494140;
  const pinNumber = 1234;

  // Connecting the input box with DOM So that we can match the required mobile and Pin number
  const mobileNumberValue = document.getElementById("mobile-number").value;
  const mobileNumberValueConverted = parseInt(mobileNumberValue);

  const pinNumberValue = document.getElementById("pin-number").value;
  const pinNumberValueConverted = parseInt(pinNumberValue);

  // Value comparison
  if (
    mobileNumberValueConverted === mobileNumber &&
    pinNumberValueConverted === pinNumber
  ) {
    window.location.href = "./home.html";
  } else {
    alert("Wrong email or pin, please try again");
  }
});
