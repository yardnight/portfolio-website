//===================<Skills SLIDER>========================================================
function slidesPlugin(activeSlide = 2) {
    const hardSkills = document.querySelectorAll('.hard-skills__slide');
    const extraSkills = document.querySelectorAll('.extra-skills__slide');
   
    hardSkills[activeSlide].classList.add('active');
    var activeExSlide = extraSkills.length-activeSlide;
    extraSkills[activeExSlide].classList.add('active');
    eventLook(hardSkills);
    eventLook(extraSkills);

    // tracking clicking on a skillslide
    function eventLook(slides){
        for (const slide of slides) {
            slide.addEventListener('click', () => { 
                               
                clearActiveClasses(slides);
                slide.classList.add('active')
            })
        }
    }
    // cleaning activity
    function clearActiveClasses(slides) {
        slides.forEach((slide) => {
            slide.classList.remove('active')
        })
    }

}

slidesPlugin(2)

//===================<FORMS>==============================================================

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