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