document.getElementById('btn-deposit').addEventListener('click', function () {
    const newDepositAmount = getInputFieldValueById('deposit-field');
    if (typeof newDepositAmount !== "number" || isNaN(newDepositAmount) || newDepositAmount <= 0) {
        alert('Please Deposit Valid Amount')
    } else {
        const previousDepositTotal = getTextElementValueByID('deposit-total');
        const newDepositTotal = previousDepositTotal + newDepositAmount;
        setTextElementValueById('deposit-total', newDepositTotal);

        const previousBalanceTotal = getTextElementValueByID('balance-total');
        const newBalanceTotal = previousBalanceTotal + newDepositAmount;
        setTextElementValueById('balance-total', newBalanceTotal)
    }
});




