function getinPutvalue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    // clear input field
    inputField.value = '';
    return amountValue;
}

function updateTotalfield(totalField,ammount){
    const totalElement=document.getElementById(totalField);
    const totalText=totalElement.innerText;
    const previouTotal=parseFloat(totalText);
    totalElement.innerText =previouTotal+ammount;
}
function getCurrentBalance(ammount,isAdd) {
    const balanceTotal=document.getElementById('total-balance');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;

}

function updateBalance(ammount,isAdd) {
    const balanceTotal=document.getElementById('total-balance');
    const previousBalanceTotal=getCurrentBalance();
    if(isAdd==true) {
        balanceTotal.innerText=previousBalanceTotal+ammount;
    }else{
        balanceTotal.innerText=previousBalanceTotal-ammount;
    }

}

document.getElementById('depositbtn').addEventListener('click',function(){
    const depositammount=getinPutvalue('deposit-ammount');
    // const depositbalance=document.getElementById('deposit-balance').innerText;
    // depositbalance.innerText =depositbalance+ depositammount;
    if(depositammount > 0){
       updateTotalfield('deposit-balance',depositammount);
       updateBalance(depositammount,true);
    }
   
});
document.getElementById('withdrawbtn').addEventListener('click',function(){
   const withdrawammount=getinPutvalue('withdraw-ammount');
   const currentBalance=getCurrentBalance(); 
   if(withdrawammount > 0 && withdrawammount< currentBalance){
       updateTotalfield('withdraw-balance',withdrawammount);
       updateBalance(withdrawammount,false);
   }
   if(withdrawammount>currentBalance){
    console.log('You can not withdraw more than what you have in your account');
   }
});