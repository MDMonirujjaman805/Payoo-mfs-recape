// <!-- optional -->

// document.getElementById('cash-out-btn').addEventListener('click',function(event){
//   event.preventDefault();
//   const cashOut = getInputFieldValueById('cash-out-amount-input-field');
//   const pin = getInputFieldValueById('cash-out-pin-input-field');
//   if(pin === 1234){
//     const mainBalance = getMainBalanceAmount('main-balance');
//     const newBalance = mainBalance - cashOut;
//     newBalance2('main-balance').innerText = newBalance;

// styam 1...............
//     // add to transactions history on styam 1 way.
//     // const p = document.createElement('p');
//     // p.innerText = `Cash Out: ${cashOut} TK, New Balance: ${newBalance} TK`;
//     // document.getElementById('transactions-container').appendChild(p);

// styam 2...............
//     // add to transactions history on functional way.
//     const div = document.createElement('div');
//     div.classList.add('bg-gray-300');
//     div.innerHTML = `
//     <h4 class ="text-2xl font-bold">Cash Out</h4>
//     <p>${cashOut},New Balance${newBalance}</p>
//     `;
//     document.getElementById('transactions-container').appendChild(div);

//   }else{
//     alert('try agin');
//   }
// }); 