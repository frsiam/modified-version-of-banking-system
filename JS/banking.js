// common function

function getInput(id){
    // deposit new input
    const NewInput = document.getElementById(id);
    const NewText = NewInput.value;
    const NewAmount = parseFloat(NewText)
    // clear input field
    NewInput.value = '';
    return NewAmount;
}

function getUpdate(id,NewAmount){
    const depositCurrentTotal = document.getElementById(id);
    const depositCurrentText = depositCurrentTotal.innerText;
    const depositCurrentAmount = parseFloat(depositCurrentText);

    depositCurrentTotal.innerText = NewAmount + depositCurrentAmount;
}


//Deposit
document.getElementById('deposite-button').addEventListener('click',function(){
    const NewAmount = getInput('deposite-input')
    // get and update deposite total
    /* const depositCurrentTotal = document.getElementById('deposit-total');
    const depositCurrentText = depositCurrentTotal.innerText;
    const depositCurrentAmount = parseFloat(depositCurrentText);

    depositCurrentTotal.innerText = NewAmount + depositCurrentAmount; */
    getUpdate('deposit-total',NewAmount);

    //update balance 
    const balanceTotal = document.getElementById('total-balance');
    const balanceText = balanceTotal.innerText;
    const balanceAmount = parseFloat(balanceText);

    balanceTotal.innerText = balanceAmount + NewAmount;
})

// Withdraw event handler
document.getElementById('withdraw-button').addEventListener('click',function(){
    const withdrawNewAmount = getInput('withdraw-input')
    
    // get current withdraw
    /* const withdrawCurrentTotal = document.getElementById('withdraw');
    const withdrawCurrentText = withdrawCurrentTotal.innerText;
    const withdrawCurrentAmount = parseFloat(withdrawCurrentText); */

    getUpdate('withdraw',withdrawNewAmount);

    withdrawCurrentTotal.innerText = withdrawCurrentAmount + withdrawNewAmount;

    //update balance 
    const balanceTotal = document.getElementById('total-balance');
    const balanceText = balanceTotal.innerText;
    const balanceAmount = parseFloat(balanceText);

    balanceTotal.innerText = balanceAmount - withdrawNewAmount;
})