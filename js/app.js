

// Theme switcher

// window.onload = () =>{
    // localStorage.setItem('data-theme', 'light');  
    // if (localStorage.getItem('data-theme') === 'lite') { 
        // document.getElementById('darkmode').setAttribute('data-theme', localStorage.getItem('data-theme'))
    // console.log(localStorage.getItem('data-theme'));
    // } else if ( localStorage.getItem('data-theme') === 'dark') {
        // document.getElementById('darkmode').setAttribute('data-theme', localStorage.getItem('data-theme'))  
    // }
// }

// const input = document.getElementById('darkmode');

// input.addEventListener('change', (event) =>{
//     if (event.target.checked){
//        document.body.setAttribute('data-theme', 'dark')
//        localStorage.setItem('data-theme', 'dark');
//        const sw = document.getElementById('switcher');
//        sw.checked == true;
//        console.log('sw',sw)

//     } else {
//        document.body.setAttribute('data-theme', 'light')
//        localStorage.setItem('data-theme', 'light');
//     }
//     console.log(localStorage.getItem('data-theme'));
// })

// "use strict"

// document.addEventListener('DOMContentLoaded', function(){
//     const form = document.getElementById('form');
//     console.log(form)
//     form.addEventListener('submit', formSend);

//     async function formSend(event) {
//         event.preventDefault();
//         let error = formValidate(form)
//     }

//     function formValidate(form) {
//         let error = 0;
//         let formReq = document.querySelectorAll('._req');

//         for(let index = 0; index < formReq.length; index++) {
//             const input = formReq[index];
//             formRemoveError(input) ;

//             if(input.classList.contains('_email')){
//                 if(emailTest(input)){
//                     formAddError(input);
//                     error++;
//                 }
//             } else if (input.getAttribute("type") === "checkbox" && input.checked === false){
//                 formAddError(input);
//                 error++;
//             } else {
//                 if (input.value === '') {
//                     formAddError(input);
//                     error++;
//                 }
//             }
//         }
//     }
//     function formAddError(input) {
//         input.parentElement.classList.add('_error');
//         input.classList.add('_error');
//     }
//     function formRemoveError(input) {
//         input.parentElement.classList.remove('_error');
//         input.classList.remove('_error');
//     }
//     function emailTest(input) {
//         return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
//     }
// })