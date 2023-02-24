// validation code

var ussername = document.forms['form']['ussername']
var password = document.forms['form']['password']

var usser_error = document.getElementById('usser_error');
var pass_error = document.getElementById('pass_error');

ussername.addEventListener('textInput', ussername_Verify);
password.addEventListener('textInput', password_Verify);


   function validate(){
       if (ussername.value.length < 9) {
           ussername.style.border = "1px solid red";
           ussername.focus();
           return false;
   }
   function validate(){
       if (password.value.length < 9) {
           password.style.border = "1px solid red";
           password.focus();
           return false;
   }
}
function ussername_Verify(){
    if (ussername.value.length >= 8) {
        ussername.style.border = "1px solid silver";
        usser_error.style.display = "none";
        return true;
    }
}
function password_Verify(){
    if (password.value.length >= 8) {
        password.style.border = "1px solid silver";
        pass_error.style.display = "none";
        return true;
    }
}
