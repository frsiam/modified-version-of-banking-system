//Deposit

document.getElementById('deposite-button').addEventListener('click',function(){
    // deposit new input
    const depositNewInput = document.getElementById('deposite-input');
    const depositNewText = depositNewInput.value;
    const depositNewAmount = parseFloat(depositNewText)

    // get current deposite
    const depositCurrentTotal = document.getElementById('deposit-total');
    const depositCurrentText = depositCurrentTotal.innerText;
    const depositCurrentAmount = parseFloat(depositCurrentText);

    depositCurrentTotal.innerText = depositNewAmount + depositCurrentAmount;
    console.log(depositCurrentText);

    //update balance 
    const balanceTotal = document.getElementById('total-balance');
    const balanceText = balanceTotal.innerText;
    const balanceAmount = parseFloat(balanceText);

    // clear input field
    depositNewInput.value = '';
})