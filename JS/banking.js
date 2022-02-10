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


//Deposit
document.getElementById('deposite-button').addEventListener('click',function(){
    const NewAmount = getInput('deposite-input')
    // get current deposite
    const depositCurrentTotal = document.getElementById('deposit-total');
    const depositCurrentText = depositCurrentTotal.innerText;
    const depositCurrentAmount = parseFloat(depositCurrentText);

    depositCurrentTotal.innerText = NewAmount + depositCurrentAmount;

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
    const withdrawCurrentTotal = document.getElementById('withdraw');
    const withdrawCurrentText = withdrawCurrentTotal.innerText;
    const withdrawCurrentAmount = parseFloat(withdrawCurrentText);

    withdrawCurrentTotal.innerText = withdrawCurrentAmount + withdrawNewAmount;

    //update balance 
    const balanceTotal = document.getElementById('total-balance');
    const balanceText = balanceTotal.innerText;
    const balanceAmount = parseFloat(balanceText);

    balanceTotal.innerText = balanceAmount - withdrawNewAmount;
})