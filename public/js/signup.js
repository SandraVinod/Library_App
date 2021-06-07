var btn=document.getElementById('bttn');
btn.addEventListener('click',validate);
var password=document.getElementById("pwd"); 
password.addEventListener('keyup',validatePwd);
function validate(e){
  e.preventDefault();
  var username=document.getElementById('username');
    var emailid=document.getElementById("email");   
    var password=document.getElementById("pwd"); 
    var repwd=document.getElementById("repwd");
    // var passwordExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    // let emailExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
    var passwordExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    let emailExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   //let emailExp=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  if(username.value==""){
    alert('Please provide a username!');
          return false;
  }
  if(email.value==""){
    alert('Please provide your emailid!');
    return false;
  }
if(!emailid.value.match(emailExp)){
    alert("Give a valid Email Id!!");
    return false;
  }
  if (password.value==""){
    alert("Password field is empty!!");
    return false;
    }

if (!password.value.match(passwordExp)) {
      alert("Password must contain minimum 8 characters, at least one uppercase, and one lower case, must contain at least one number!!");     
      return false;
  }   
  if(repwd.value!=password.value){
    alert("Re-entered Password dont match!!");
    return false;
  }
  

if (!password.value.match(passwordExp)) {
      alert("Password must contain minimum 8 characters, at least one uppercase, and one lower case, must contain at least one number!!");     
      return false;
      
  } 
  
else{
alert("Sucess!");
document.getElementById('form1').submit();
} 
   

}

function validatePwd(){
  var password=document.getElementById("pwd");       
var passwordExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

let lowerCaseLetters = /[a-z]/g;
let upperCaseLetters = /[A-Z]/g;
let numbers = /[0-9]/g;  

let strength = 0;
if (password.value.match(lowerCaseLetters)) {
    strength += 5;
}
if (password.value.match(upperCaseLetters)) {
    strength += 5;
} if (password.value.match(numbers) && password.value.length>=8) {
    strength += 5;
}
// if (strength =0) {
//    alert("Password field is empty!!");
// }
if (strength == 5) {
  
    password.style.border = "2px solid red";
}
if (strength == 10) {
  password.style.border = "2px solid orange";
}
if (strength == 15) {
  password.style.border = "2px solid green";
}



}

// function loginvalidation(){
// var password=document.getElementById("pwd");
// var emailid=document.getElementById("repwd");  
// var passwordExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
// let emailExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
var repwd=document.getElementById("repwd");
repwd.addEventListener('keyup',checkpwd);
function checkpwd(){
    var password=document.getElementById("pwd"); 
      var repwd=document.getElementById("repwd");
      if(repwd.value!=password.value){
      repwd.style.border="2px solid red";
    }
    if(repwd.value==password.value){
      repwd.style.border="2px solid green";
    }
  }


