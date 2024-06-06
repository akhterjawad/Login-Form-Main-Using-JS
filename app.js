// ksi bhi chiz ma validation lagana ka lia hum regex ka use karta ha


//Regular Expressions (regex or regexp) in JavaScript are used for pattern matching within strings. They provide a powerful way to perform text search, replace, and validation.


const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const CNIC = document.querySelector('#CNIC');
const age = document.querySelector('#age');
const password = document.querySelector('.password');
const ConfirmPassword = document.querySelector('.Cpassword');

const usernameRegex = /^[A-Z][a-zA-Z0-9]*$/;
const emailRegex = /^[A-Z][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
let CNICRegex = /^42\d{11}$/;
let ageRegex = /^(1[89]|[2-5]\d|60)$/;

form.addEventListener('submit', (event) => {
    event.preventDefault()
    // console.log(username.value)
    // console.log(CNIC.value)
    // console.log(age.value)
    // console.log(email.value)
    // console.log(password.value)
    // console.log(ConfirmPassword.value)


    if (usernameRegex.test(username.value)) {
        console.log("true username");
    } else {
        alert('Wrong username')
    }
    if (CNICRegex.test(CNIC.value)) {
        console.log("true CNIC");
    } else {
        alert('Wrong CNIC')
    }
    if (ageRegex.test(age.value)) {
        console.log("true age");
    } else {
        alert('age is invalid for over form')
    }
    if (emailRegex.test(email.value)) {
        console.log("true email");
    } else {
        alert('email is invalid for over form')
    }
    if (passwordRegex.test(password.value)) {
        console.log('Password true');
    } else {
        alert('Wrong Password')
    }
    if (passwordRegex.test(password.value)) {
        console.log('ConfirmPassword true');
    } else {
        alert('Wrong ConfirmPassword')
    }

})







// let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// let regex = /^(?=.*!)[a-zA-Z0-9!]{4,5}$/;
// let cnicRegex = /^42\d{11}$/;

// form.addEventListener('submit' , (event)=>{
//     event.preventDefault()
//     // console.log(username.value)
//     // console.log(email.value)
//     // console.log(password.value)

//     // console.log(emailRegex.test(email.value))
//     // console.log(regex.test(email.value))
//     // console.log(cnicRegex.test(email.value))

//     // if(cnicRegex.test(email.value)){
//     //     console.log(email.value);
//     // }
// })