document.getElementById('btn-deposit').addEventListener('click', function () {
    const newDepositAmount = getInputFieldValueById('deposit-field');
    const previousDepositTotal = getTextElementValueByID('deposit-total');
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    setTextElementValueById('deposit-total', newDepositTotal);
    
    const previousBalanceTotal = getTextElementValueByID('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValueById('balance-total', newBalanceTotal)
});




