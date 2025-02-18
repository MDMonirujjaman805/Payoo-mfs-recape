document.getElementById('cash-out-btn').addEventListener('click',function(event){
  event.preventDefault();
  const cashOut = getInputFieldValueById('cash-out-amount-input-field');
  const pin = getInputFieldValueById('cash-out-pin-input-field');
  if(pin === 1234){
    const mainBalance = getMainBalanceAmount('main-balance');
    const newBalance = mainBalance - cashOut;
    newBalance2('main-balance').innerText = newBalance;
  }else{
    alert('try agin');
  }
});