const validPin = 1234;
// Add money section works
document.getElementById("add-money").addEventListener("click", function () {
  //   console.log("click");
  const bankName = document.getElementById("bank-name").value;
  const bankAccount = document.getElementById("bank-account").value;
  const amount = parseInt(document.getElementById("amount").value);
  const pinNumber = parseInt(document.getElementById("pin-number").value);
  // console.log(bankName, bankAccount, amount, pinNumber);
  const totalDollarAmount = parseInt(
    document.getElementById("dollar-amount").innerText
  );
  // Checking Other credentials matches
  if (bankAccount.length < 11) {
    alert("Please provide valid account number");
    return;
  }
  if (pinNumber !== validPin) {
    alert("Please provide a valid pin");
    return;
  }
  // console.log(totalDollarAmount);
  const totalNewAvailableBalance = amount + totalDollarAmount;

  document.getElementById("dollar-amount").innerText = totalNewAvailableBalance;
});

// Cash Withdraw Section works
const pin = 1234;
const withdrawBtn = document
  .getElementById("withdraw-btn")
  .addEventListener("click", function () {
    // console.log("btn clicked");
    const withdrawAmount = parseInt(
      document.getElementById("withdraw-amount").value
    );
    const totalDollarAmount = parseInt(
      document.getElementById("dollar-amount").innerText
    );
    // console.log(withdrawAmount, totalDollarAmount);
    const totalNewAvailableBalance = totalDollarAmount - withdrawAmount;
    // console.log(totalNewAvailableBalance);
    document.getElementById("dollar-amount").innerText =
      totalNewAvailableBalance;
  });

// Toggling Feature

document.getElementById("add-money-btn").addEventListener("click", function () {
  document.getElementById("cash-out-parent").style.display = "none";
  document.getElementById("add-money-parent").style.display = "block";
});

document.getElementById("cash-out-btn").addEventListener("click", function () {
  document.getElementById("add-money-parent").style.display = "none";
  document.getElementById("cash-out-parent").style.display = "block";
});
