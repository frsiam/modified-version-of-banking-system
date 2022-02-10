//Deposit

document.getElementById('deposite-button').addEventListener('click',function(){
    // deposit new input
    const depositNewInput = document.getElementById('deposite-input');
    const depositNewText = depositNewInput.value;

    // get current deposite
    const depositCurrentTotal = document.getElementById('deposit-total');
    const depositCurrentText = depositCurrentTotal.innerText;
    console.log(depositCurrentText);
})