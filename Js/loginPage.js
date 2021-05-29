const text = document.querySelector('#text')
const textError = document.querySelector('.text-error')
text.addEventListener('input',function(){
    let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$')
    if(nameRegex.test(text.value))
    textError.textContent = "";
    else textError.textContent = "Name is Incorrect"

});

const email = document.querySelector('#email')
const textError = document.querySelector('.text-error')
email.addEventListener('input',function(){
    let emailRegex = RegExp('^[a-zA-Z0-9]+([._+-][0-9a-zA-Z]+)*@[a-zA-Z0-9]+.[a-zA-Z]{2,4}([.][a-zA-Z]{2,4})?$')
    if(emailRegex.test(email.value))
    textError.textContent = "";
    else textError.textContent = "Email is Incorrect"

});

const mobileNo = document.querySelector('#mobileNo')
const textError = document.querySelector('.text-error')
mobileNo.addEventListener('input',function(){
    let emailRegex = RegExp('^[1-9]{2}\\s[1-9]{1}[0-9]{9}$')
    if(emailRegex.test(mobileNo.value))
    textError.textContent = "";
    else textError.textContent = "Mobile number is Incorrect"

});

const password = document.querySelector('#password')
const textError = document.querySelector('.text-error')
password.addEventListener('input',function(){
    let passwordRegex = RegExp('[0-9 a-z A-Z]{8,}')
    if(passwordRegex.test(password.value))
    textError.textContent = "";
    else textError.textContent = "Password is in Incorrect format"

});
