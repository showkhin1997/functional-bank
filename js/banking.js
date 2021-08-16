

document.getElementById('deposite-button').addEventListener('click', function () {
    const depositeInput = document.getElementById('deposite-input');
    const depositeAmountText = depositeInput.value;
    const depositeAmount = parseFloat(depositeAmountText);


    // get current deposit
    const depositeTotal = document.getElementById('deposite-total');
    const depositeTotalText = depositeTotal.innerText;
    const previousDepositeTotal = parseFloat(depositeTotalText);
    depositeTotal.innerText = previousDepositeTotal + depositeAmount;

    // balance update
    const blanceTotal = document.getElementById('balance-total');
    const balanceTotalText = blanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    blanceTotal.innerText = previousBalanceTotal + depositeAmount;


    // deposite input field reset
    depositeInput.value = '';
});


// withdraw hanadaler
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmounText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmounText);

    // update withdrawtotal
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);
    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;

    // balance Update after withdraw
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal - withdrawAmount;


    // clear withdraw input
    withdrawInput.value = '';
});