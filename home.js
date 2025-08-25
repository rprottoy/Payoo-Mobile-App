document.getElementById("add-money").addEventListener("click", function () {
  //   console.log("click");
  const bankName = document.getElementById("bank-name").value;
  const bankAccount = document.getElementById("bank-account").value;
  const amount = parseInt(document.getElementById("amount").value);
  const pinNumber = document.getElementById("pin-number").value;
  console.log(bankName, bankAccount, amount, pinNumber);
});
