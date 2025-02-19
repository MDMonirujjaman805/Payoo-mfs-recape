//  function getInputFieldValueById (){
//   // console.log('utilities file added');
//   const addMoneyBtn = document.getElementById('amount-input-field').value;
//   return addMoneyBtn;
//  };

function getInputFieldValueById (id){
  const inputValue = document.getElementById(id).value;
  const inputValueParseFloat = parseFloat(inputValue);
  return inputValueParseFloat;
}


function getMainBalanceAmount(id){
  const mainBalance = document.getElementById(id).innerText;
  const mainBalanceParseFloat = parseFloat(mainBalance);
  return mainBalanceParseFloat;
}

function newBalance2(id){
  const newBalance = document.getElementById(id);
  return newBalance;
}

function showBtnSectionById (id){
  // hide all section.....
  document.getElementById('add-money-form').classList
  .add('hidden');
  document.getElementById('cash-out-form').classList
  .add('hidden');
  document.getElementById('send-money-form').classList
  .add('hidden');
  document.getElementById('pay-bill-form').classList
  .add('hidden');
  document.getElementById('savings-form').classList
  .add('hidden');
  document.getElementById('lone-form').classList
  .add('hidden');
  document.getElementById('home-body-container').classList
  .add('hidden');
  document.getElementById('transactions-container')
  .classList.add('hidden');
  // show a section by id.......
  document.getElementById(id).classList.remove('hidden');
}