document.getElementById('add-money-btn').addEventListener('click',function(event){
  event.preventDefault();
  // console.log('Add Money button clicked');

  // const addMoneyBtn = getInputFieldValueById();
  // console.log(`add money value is ${addMoneyBtn}`);
  // console.log('add money value is', addMoneyBtn);
  const addMoney = getInputFieldValueById('amount-input-field');
  const pinNumber = getInputFieldValueById('pin-input-field');
  console.log('add money with parameter', addMoney);
  console.log('pin number with parameter',pinNumber);

  // const amountNumber = document.getElementById('amount-input-field').value;
  // const amountNumberParse = parseFloat(amountNumber);
  // console.log(typeof amountNumber);
  // console.log(typeof amountNumberParse);
})