

document.getElementById('depositbtn').addEventListener('click', function(){
    // get the amount deposited
   const userinput=document.getElementById('deposit-ammount');
   const depositamnt=userinput.value;
   const newDepositamnt=parseFloat(depositamnt);
    // update deposit total
    const depositbalance=document.getElementById('deposit-balance');
    const previousDepositText =depositbalance.innerText;
    const previousDepositamount=parseFloat(previousDepositText);
    const totaldepositAmmount=newDepositamnt+previousDepositamount;
    depositbalance.innerText =totaldepositAmmount;
 // update account balance 

//  const totalbalance=document.getElementById('total-balance');
//  const  balancetotaltect=totalbalance.innerText;
//  const previousbalacetotal=parseFloat(balancetotaltect);
//  const newbalancetotal=previousbalacetotal+newDepositamnt;
//  console.log(newbalancetotal);
//  totalbalance.innerText=newbalancetotal;

 // update account balance 
 const balanceTotal = document.getElementById('total-balance');
 const balanceTotalText = balanceTotal.innerText;
 const previousBalanceTotal = parseFloat(balanceTotalText);
 const newBalanceTotal = previousBalanceTotal + newDepositamnt;
 balanceTotal.innerText = newBalanceTotal;
 // clear the deposit input field
    userinput.value='';

});

// handle withdraw event handler
document.getElementById('withdrawbtn').addEventListener('click', function(){
    //getting user withdrawal balnce
    const useroutput=document.getElementById('withdraw-ammount');
    const withdrawtext=useroutput.value;
    const userwithdrawtext=parseFloat(withdrawtext);
    //set withdraw total ammount
    const withdrawTotal =document.getElementById('withdraw-balance');
    const previouswithdrawtext=withdrawTotal.innerText;
    const newwithdrawtext=parseFloat(previouswithdrawtext);
    const newWithdrawTotal = userwithdrawtext + newwithdrawtext;
    withdrawTotal.innerText = newWithdrawTotal;

    // update balance
    const balanceTotal = document.getElementById('total-balance');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal - userwithdrawtext;
    balanceTotal.innerText = newBalanceTotal;
    // clear the deposit input field
    useroutput.value='';
});