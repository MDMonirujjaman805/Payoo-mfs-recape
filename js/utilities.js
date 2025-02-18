//  console.log('utilities file added fast');
//  function getInputFieldValueById (){
//   // console.log('utilities file added');
//   const addMoneyBtn = document.getElementById('amount-input-field').value;
//   return addMoneyBtn;
//  };

function getInputFieldValueById (id){
  const inputValue = document.getElementById(id).value;
  return inputValue;
}