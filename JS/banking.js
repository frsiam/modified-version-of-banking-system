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
    const CurrentTotal = document.getElementById(id);
    const CurrentText = CurrentTotal.innerText;
    const CurrentAmount = parseFloat(CurrentText);

    CurrentTotal.innerText = NewAmount + CurrentAmount;
}

function updateBalance(isAdd,NewAmount){
    const balanceTotal = document.getElementById('total-balance');
    const balanceText = balanceTotal.innerText;
    const balanceAmount = parseFloat(balanceText);

    if(isAdd == true){
        balanceTotal.innerText = balanceAmount + NewAmount;
    }
    else{
        balanceTotal.innerText = balanceAmount - NewAmount;
    }  
}


//Deposit
document.getElementById('deposite-button').addEventListener('click',function(){
    const NewAmount = getInput('deposite-input')
    getUpdate('deposit-total',NewAmount);
    updateBalance(true,NewAmount);

    // get and update deposite total
    /* const CurrentTotal = document.getElementById('deposit-total');
    const CurrentText = CurrentTotal.innerText;
    const CurrentAmount = parseFloat(CurrentText);

    CurrentTotal.innerText = NewAmount + CurrentAmount; */

    //update balance 
    /* const balanceTotal = document.getElementById('total-balance');
    const balanceText = balanceTotal.innerText;
    const balanceAmount = parseFloat(balanceText);

    balanceTotal.innerText = balanceAmount + NewAmount; */
})

// Withdraw event handler
document.getElementById('withdraw-button').addEventListener('click',function(){
    const withdrawNewAmount = getInput('withdraw-input')
    getUpdate('withdraw',withdrawNewAmount);
    updateBalance(false,withdrawNewAmount);
    
    // get current withdraw
    /* const withdrawCurrentTotal = document.getElementById('withdraw');
    const withdrawCurrentText = withdrawCurrentTotal.innerText;
    const withdrawCurrentAmount = parseFloat(withdrawCurrentText);
    withdrawCurrentTotal.innerText = withdrawCurrentAmount + withdrawNewAmount; */

    //update balance 
    /* const balanceTotal = document.getElementById('total-balance');
    const balanceText = balanceTotal.innerText;
    const balanceAmount = parseFloat(balanceText);

    balanceTotal.innerText = balanceAmount - withdrawNewAmount; */
})