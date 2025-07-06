let inputMail   = document.querySelector('.inputMail');
let emailErr    = document.querySelector('.emailErr');
let inputPass   = document.querySelector('.inputPass');
let passErr     = document.querySelector('.passErr');
let formBtns    = document.querySelector('.formBtns');

document.addEventListener('contextmenu' , (e)=>{
    e.preventDefault()
    location.reload();
})

formBtns.addEventListener('click' , (e)=>{
    e.preventDefault()
    if(inputMail.value == ''){
        emailErr.innerHTML  = 'please enter your email address'
    }else if(inputPass.value == ''){
        passErr.innerHTML   = 'please enter your password'
        emailErr.innerHTML  = ''
    }else{
        passErr.innerHTML   = ''
        alert(`Congratulations. You're successfully loged in!`)
        inputMail.value     = ''
        inputPass.value     = ''
    }
})