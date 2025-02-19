// add money feature.........
document.getElementById('add-money-btn').addEventListener('click',function(event){
  event.preventDefault();
  const addMoney = getInputFieldValueById('add-money-amount-input-field');
  const pin = getInputFieldValueById('add-money-pin-input-field');
  if(pin === 1234){
    const mainBalance = getMainBalanceAmount('main-balance');
    const newBalance = mainBalance + addMoney;
    newBalance2('main-balance').innerText = newBalance;
    const p = document.createElement('p');
    p.innerText = `Add Money: ${addMoney} TK, New Balance: ${newBalance} TK`;
    document.getElementById('transactions-container').appendChild(p);
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
    const p = document.createElement('p');
    p.innerText = `Cash Out: ${cashOut} TK, New Balance: ${newBalance} TK`;
    document.getElementById('transactions-container').appendChild(p);
  }else{
    alert('try agin');
  }
});  

// send money feature.........
document.getElementById('send-money-btn').addEventListener('click',function(event){
  event.preventDefault();
  const sendMoney = getInputFieldValueById('send-money-amount-input-field');
  const pin = getInputFieldValueById('send-money-pin-input-field');
  if(pin === 1234){
    const mainBalance = getMainBalanceAmount('main-balance');
    const newBalance = mainBalance - sendMoney;
    newBalance2('main-balance').innerText = newBalance;
    const p = document.createElement('p');
    p.innerText = `Send Money: ${sendMoney} TK, New Balance: ${newBalance} TK`;
    document.getElementById('transactions-container').appendChild(p);
  }else{
    alert('try agin');
  }
});  

// pay bill feature.........
document.getElementById('pay-bill-btn').addEventListener('click',function(event){
  event.preventDefault();
  const payBill = getInputFieldValueById('pay-bill-amount-input-field');
  const pin = getInputFieldValueById('pay-bill-pin-input-field');
  if(pin === 1234){
    const mainBalance = getMainBalanceAmount('main-balance');
    const newBalance = mainBalance - payBill;
    newBalance2('main-balance').innerText = newBalance;
    const p = document.createElement('p');
    p.innerText = `Pay Bill: ${payBill} TK, New Balance: ${newBalance} TK`;
    document.getElementById('transactions-container').appendChild(p);
  }else{
    alert('try agin');
  }
});  

// savings feature.........
document.getElementById('savings-btn').addEventListener('click',function(event){
  event.preventDefault();
  const savings = getInputFieldValueById('savings-amount-input-field');
  const pin = getInputFieldValueById('savings-pin-input-field');
  if(pin === 1234){
    const mainBalance = getMainBalanceAmount('main-balance');
    const newBalance = mainBalance + savings;
    newBalance2('main-balance').innerText = newBalance;
    const p = document.createElement('p');
    p.innerText = `Savings: ${savings} TK, New Balance: ${newBalance} TK`;
    document.getElementById('transactions-container').appendChild(p);
  }else{
    alert('try agin');
  }
});  

// lone feature.........
document.getElementById('lone-btn').addEventListener('click',function(event){
  event.preventDefault();
  const lone = getInputFieldValueById('lone-amount-input-field');
  const pin = getInputFieldValueById('lone-pin-input-field');
  if(pin === 1234){
    const mainBalance = getMainBalanceAmount('main-balance');
    const newBalance = mainBalance + lone;
    newBalance2('main-balance').innerText = newBalance;
    const p = document.createElement('p');
    p.innerText = `Lone: ${lone} TK, New Balance: ${newBalance} TK`;
    document.getElementById('transactions-container').appendChild(p);
  }else{
    alert('try agin');
  }
}); 

// document.getElementById('home-body-container')
// .addEventListener('click',function(){
// })