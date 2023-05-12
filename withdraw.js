document.getElementById('add-withdraw').addEventListener('click' , function () {
    const getDepositValue = getInputValue('withdraw');
    const DepositValue = getElementValue('withdraw-amount');
    const newDepositeAmount = getDepositValue + DepositValue;
    setElementValueId('withdraw-amount' , newDepositeAmount);
  
    const newBalance = getElementValue('total-amount');
    const newBalanceAmount = newBalance - getDepositValue;
    setElementValueId('total-amount' , newBalanceAmount);
  
  });