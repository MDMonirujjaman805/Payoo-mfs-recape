

document.getElementById('add-money-btn').addEventListener('click',function(event){
  event.preventDefault();

  const addMoney = getInputFieldValueById('amount-input-field');
  const pinNumber = getInputFieldValueById('pin-input-field');

  if(pinNumber === 1234){
    const mainBalance = getMainBalanceAmount('main-balance');
    const newBalance = mainBalance+addMoney;
    
    // sytem:1
    // document.getElementById('main-balance').innerText = newBalance;

    // sytem:2
    newBalance2('main-balance').innerText = newBalance;
  }else{
    alert('try agin')
  }
});

