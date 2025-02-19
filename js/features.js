// add money feature.........
document.getElementById('add-money-btn').addEventListener('click',function(event){
  event.preventDefault();
  const cashOut = getInputFieldValueById('add-money-amount-input-field');
  const pin = getInputFieldValueById('add-money-pin-input-field');
  if(pin === 1234){
    const mainBalance = getMainBalanceAmount('main-balance');
    const newBalance = mainBalance + cashOut;
    newBalance2('main-balance').innerText = newBalance;
  }else{
    alert('try agin');
  }
}); 

// cash out feature........
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

// send money feature.........
document.getElementById('send-money-btn').addEventListener('click',function(event){
  event.preventDefault();
  const cashOut = getInputFieldValueById('send-money-amount-input-field');
  const pin = getInputFieldValueById('send-money-pin-input-field');
  if(pin === 1234){
    const mainBalance = getMainBalanceAmount('main-balance');
    const newBalance = mainBalance - cashOut;
    newBalance2('main-balance').innerText = newBalance;
  }else{
    alert('try agin');
  }
});  

// pay bill feature.........
document.getElementById('pay-bill-btn').addEventListener('click',function(event){
  event.preventDefault();
  const cashOut = getInputFieldValueById('pay-bill-amount-input-field');
  const pin = getInputFieldValueById('pay-bill-pin-input-field');
  if(pin === 1234){
    const mainBalance = getMainBalanceAmount('main-balance');
    const newBalance = mainBalance - cashOut;
    newBalance2('main-balance').innerText = newBalance;
  }else{
    alert('try agin');
  }
});  

// savings feature.........
document.getElementById('savings-btn').addEventListener('click',function(event){
  event.preventDefault();
  const cashOut = getInputFieldValueById('savings-amount-input-field');
  const pin = getInputFieldValueById('savings-pin-input-field');
  if(pin === 1234){
    const mainBalance = getMainBalanceAmount('main-balance');
    const newBalance = mainBalance + cashOut;
    newBalance2('main-balance').innerText = newBalance;
  }else{
    alert('try agin');
  }
});  

// lone feature.........
document.getElementById('lone-btn').addEventListener('click',function(event){
  event.preventDefault();
  const cashOut = getInputFieldValueById('lone-amount-input-field');
  const pin = getInputFieldValueById('lone-pin-input-field');
  if(pin === 1234){
    const mainBalance = getMainBalanceAmount('main-balance');
    const newBalance = mainBalance + cashOut;
    newBalance2('main-balance').innerText = newBalance;
  }else{
    alert('try agin');
  }
});  