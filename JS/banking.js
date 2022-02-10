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
function getCurrentBalnace(){
    const balanceTotal = document.getElementById('total-balance');
    const balanceText = balanceTotal.innerText;
    const balanceAmount = parseFloat(balanceText);
    return balanceAmount;
}

function updateBalance(isAdd,NewAmount){
    const balanceTotal = document.getElementById('total-balance');
    /* const balanceText = balanceTotal.innerText;
    const balanceAmount = parseFloat(balanceText); */
    const balanceAmount = getCurrentBalnace();

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
    if(NewAmount > 0){
        getUpdate('deposit-total',NewAmount);
        updateBalance(true,NewAmount);
    }
    else{
        alert("Please Enter valid amount.")
    }

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
    const currentBalance = getCurrentBalnace();
    if(withdrawNewAmount > 0 && withdrawNewAmount < currentBalance){
        getUpdate('withdraw',withdrawNewAmount);
        updateBalance(false,withdrawNewAmount);
    }
    else{
        alert("Please withdraw valid amount of money !!")
    }
    
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