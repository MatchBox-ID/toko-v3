// validation code

var ussername = document.forms['form']['ussername']
var password = document.forms['form']['password']

var usser_error = document.getElementById('usser_error');
var pass_error = document.getElementById('pass_error');

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
