document.getElementById('loginbtn').addEventListener('click',function(){
    //getting user email
const emailfield=document.getElementById('user-email');
const useremail=emailfield.value;
// getting user password
const passfield=document.getElementById('user-pass');
const userpass=passfield.value;
if(useremail=='wahidahmed890@gmail.com' && userpass=='password'){
   // console.log('Valid user');
   window.location.href='banking.html';
}
});