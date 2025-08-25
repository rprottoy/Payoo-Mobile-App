document.getElementById("add-money").addEventListener("click", function () {
  //   console.log("click");
  const bankName = document.getElementById("bank-name").value;
  const bankAccount = document.getElementById("bank-account").value;
  const amount = parseInt(document.getElementById("amount").value);
  const pinNumber = document.getElementById("pin-number").value;
  // console.log(bankName, bankAccount, amount, pinNumber);
  const totalDollarAmount = parseInt(
    document.getElementById("dollar-amount").innerText
  );
  // console.log(totalDollarAmount);
  const totalNewAvailableBalance = amount + totalDollarAmount;

  document.getElementById("dollar-amount").innerText = totalNewAvailableBalance;
});
