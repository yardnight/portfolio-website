import { blogData } from "./data-blog.min.js";
import { skillsData } from "./data-skills.min.js";

//===================<Skills SLIDER>========================================================

var hard = skillsData.hardSkills;
var extra = skillsData.extraSkills;

buildSkills(hard);
buildSkills(extra);

function buildSkills(skillItems) {
    const blockOfSkills = document.getElementById(`${skillItems.skillId}`);
    for (let i = 0; i < skillItems.skillData.length; i++) {
        let skillItem = document.createElement("div");
        skillItem.classList.add(`${skillItems.skillClass}`);

        skillItem.innerHTML = skillItems.skillContent(i);
        // if (i<6){
        blockOfSkills.appendChild(skillItem);
        // } else {

        // }
    }
}

//===================<SKILLS SLIDER>=========================================
slidesPlugin(2);

function slidesPlugin(activeSlide = 2) {
    const hardSkills = document.querySelectorAll(".hard-skills__slide");
    const extraSkills = document.querySelectorAll(".extra-skills__slide");

    hardSkills[activeSlide].classList.add("active");
    var activeExSlide = extraSkills.length - activeSlide;
    extraSkills[activeExSlide].classList.add("active");
    eventLook(hardSkills);
    eventLook(extraSkills);

    // tracking clicking on a skillslide
    function eventLook(slides) {
        for (const slide of slides) {
            slide.addEventListener("click", () => {
                clearActiveClasses(slides);
                slide.classList.add("active");
            });
        }
    }
    // cleaning activity
    function clearActiveClasses(slides) {
        slides.forEach((slide) => {
            slide.classList.remove("active");
        });
    }
}
//===================<SKILLS SLIDER END>=========================================

//======================<STATIC>=========================

// var htmlSkill = new Skill("HTML5",80,"html5");
// var cssSkill = new Skill("CSS3",60,"css3");
// var jsSkill = new Skill("JS",45,"js3");
// var sassSkill = new Skill("SASS",60,"sass");
// var gulpSkill = new Skill("GULP",50,"gulp");
// var gitSkill = new Skill("GIT",70,"git");

// var skills=[htmlSkill,cssSkill,jsSkill,sassSkill,gulpSkill,gitSkill];

// skillsProgress(skills);

// function skillsProgress(skills){

//     var skillsName=document.querySelectorAll('.hard-skills__slide h3');
//     for (var i=0; i<skillsName.length; i++) {
//         skillsName[i].innerHTML=skills[i].name;
//     }

//     var skillsValues=document.querySelectorAll('#progress');
//     var skillsAmount = skillsValues.length
//     if (skills.length===skillsAmount) {
//         for (var i=0; i<skillsAmount; i++) {
//             skillsValues[i].innerHTML = skills[i].progress+'%';
//         }
//     } else {
//         console.log("HTML skills amount doesnt mutch js skill's amount")
//     }
//     var skillIconSources = document.querySelectorAll('.hard-skills__slide .icon-box source');

//     for (var i=0; i<skillIconSources.length; i++) {
//         skillIconSources[i].srcset = skills[i].iconSrc;
//     }
//     var skillsIcons = document.querySelectorAll('.hard-skills__slide .icon-box img');
//     for (var i=0; i<skillsIcons.length; i++) {
//         skillsIcons[i].src = skills[i].iconSrc;
//         skillsIcons[i].className = skills[i].iconClass;
//         skillsIcons[i].alt = skills[i].iconAlt;
//     }
// };

//======================<STATIC>=========================

//===================<Resent post>==========================================================

recentPosts(blogData);

function recentPosts(data) {
    const postsSection = document.getElementById("recent-blog");

    for (let i = 0; i < 2; i++) {
        let recentPost = document.createElement("div");
        recentPost.classList.add("recent-posts__column");
        recentPost.innerHTML = `<article class="recent-posts__item recent-post">
            <a href="blog.html" class="recent-post__title ">
            ${data[i].name}
            </a>
            <div class="recent-post__info">
            ${data[i].time} <span>|</span> ${data[i].subject}
            </div>
            <div class="recent-post__text text">
            ${data[i].message}
            </div>
        </article>`;

        postsSection.appendChild(recentPost);
    }
}

//===================<Resent post>==========================================================
