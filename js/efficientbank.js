//function for getting input balance

function getInputBalance(inputId){
    const inputText=parseFloat(document.getElementById(inputId).value);
    document.getElementById(inputId).value='';
    console.log(inputText);
    return inputText;
}
//--------------------------------------------------------------------------
//function for updating balance info
function updateBalance(inputid,ammount){
    const previousvalue=parseFloat(document.getElementById(inputid).innerText);
    // document.getElementById(inputid).innerText='';
   // const updateBalance=previousvalue+ammount;
  
   return (document.getElementById(inputid).innerText=ammount+previousvalue);

}
//adding event deposit button and updating balance and deposit value
document.getElementById('depositbtn').addEventListener('click',function(){
    //getting the input and converting it via handleJustFunctionClick
    const inputvalue=getInputBalance('deposit-ammount');
    //updating the balance value 
    updateBalance('deposit-balance',inputvalue);
    
    //updating the Total balance value
    updateBalance('total-balance',inputvalue);
   // console.log(updateBalance);


      
});

//adding event withdraw button and updating balance and withdraw value
document.getElementById('withdrawbtn').addEventListener('click',function(){
    const inputvalue=getInputBalance('withdraw-ammount');
      //updating the balance value 
      updateBalance('withdraw-balance',inputvalue);
     
      //updating the Total balance value
      updateBalance('total-balance',-inputvalue);


});