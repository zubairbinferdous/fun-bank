document.getElementById('add-deposit').addEventListener('click' , function () {
  const getDepositValue = getInputValue('deposit');
  const DepositValue = getElementValue('deposit-amount');
  const newDepositeAmount = getDepositValue + DepositValue;
  setElementValueId('deposit-amount' , newDepositeAmount);

  const newBalance = getElementValue('total-amount');
  const newBalanceAmount = newBalance + getDepositValue;
  setElementValueId('total-amount' , newBalanceAmount);

});


