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
