document.getElementById('btn-withdraw').addEventListener('click', function () {
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    if (typeof newWithdrawAmount !== "number" || isNaN(newWithdrawAmount) || newWithdrawAmount <= 0) {
        alert('Please Withdraw Valid Amount')
    } else {
        const previousWithdrawTotal = getTextElementValueByID('withdraw-total');
        const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
        const previousBalanceTotal = getTextElementValueByID('balance-total');
        
        if (newWithdrawAmount > previousBalanceTotal) {
            alert('Not Enough Balance')
        } else {
            const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
            setTextElementValueById('balance-total', newBalanceTotal);
            setTextElementValueById('withdraw-total', newWithdrawTotal);
        }
    }


})