document.getElementById('add-money-btn').addEventListener('click',function (event){
  event.preventDefault();
  
  
  const amountBalance = document.getElementById('amount-input-field').value;
  const cuterntAmount = parseFloat(amountBalance);
  // console.log(`amount is ${amountBalance}`);

  const pin = document.getElementById('pin-input-field').value;
  // console.log(`pin is ${pin}`);

  if(pin === '123'){
    const balance = document.getElementById('main-amount').innerText;
    const mainAmount = parseFloat(balance);

      const newAmount = cuterntAmount + mainAmount;
      document.getElementById('main-amount').innerText = newAmount;
      
      alert('Add Money Successfull!')
  }else{
    alert('Try agin.')
  }
});
