function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    // deposite input field reset
    inputField.value = '';
    return amountValue;
}


function updateTotalField(totalFieldId, amount) {
    // debugger;
    const totalElement = document.getElementById(totalFieldId);
    const TotalText = totalElement.innerText;
    const previousTotal = parseFloat(TotalText);
    totalElement.innerText = previousTotal + amount;
}

function updatebalance(amount, isAdd) {
    const blanceTotal = document.getElementById('balance-total');
    const balanceTotalText = blanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    if (isAdd == true) {
        blanceTotal.innerText = previousBalanceTotal + amount;
    }
    else {
        blanceTotal.innerText = previousBalanceTotal - amount;
    }
}



document.getElementById('deposite-button').addEventListener('click', function () {
    /* const depositeInput = document.getElementById('deposite-input');
    const depositeAmountText = depositeInput.value;
    const depositeAmount = parseFloat(depositeAmountText); */

    const depositeAmount = getInputValue('deposite-input');
    if (depositeAmount > 0) {
        updateTotalField('deposite-total', depositeAmount);
        updatebalance(depositeAmount, true);
    }


    // get current deposit
    /* const depositeTotal = document.getElementById('deposite-total');
    const depositeTotalText = depositeTotal.innerText;
    const previousDepositeTotal = parseFloat(depositeTotalText);
    depositeTotal.innerText = previousDepositeTotal + depositeAmount; */


    // balance update
    /* const blanceTotal = document.getElementById('balance-total');
    const balanceTotalText = blanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    blanceTotal.innerText = previousBalanceTotal + depositeAmount; */


});


// withdraw hanadaler
document.getElementById('withdraw-button').addEventListener('click', function () {
    /* const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmounText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmounText); */
    const withdrawAmount = getInputValue('withdraw-input')
    if (withdrawAmount > 0) {
        updateTotalField('withdraw-total', withdrawAmount);
        updatebalance(withdrawAmount, false)
    }

    // update withdrawtotal
    /* const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);
    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount; */


    // balance Update after withdraw
    /* const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal - withdrawAmount; */



    // clear withdraw input
    // withdrawInput.value = '';
});