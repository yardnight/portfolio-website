import { blogData } from "./data-blog.min.js";
import { skillsData } from "./data-skills.min.js";

//===================<Skills ROWS SPLITTING>================================================

//===================<Skills ROWS SPLITTING>================================================

//===================<Skills SLIDER>========================================================

var hard = skillsData.hardSkills;
var extra = skillsData.extraSkills;

buildSkills(hard, 5);
buildSkills(extra, 5);

function buildSkills(skillItems, setInRow) {
    const blockOfSkills = document.getElementById(`${skillItems.skillId}`);
    // let setInRow = 6;
    let numBlocks = skillItems.skillData.length / setInRow;
    // console.log(numBlocks);
    let numRows = 1;
    if (numBlocks <= 1) {
        numRows = 1;
    } else if (numBlocks <= 2) {
        numRows = 2;
    } else if (numBlocks <= 3) {
        numRows = 3;
    }
    // console.log("numRows", numRows);

    let skillRow = [];
    let leavesInRow = skillItems.skillData.length;
    let countInRow = setInRow;
    for (let i = 0; i < numRows; i++) {
        // console.log("Passed:", i);
        // console.log("leavesInRow:", leavesInRow);
        if (leavesInRow < setInRow) {
            countInRow = leavesInRow;
        }

        skillRow[i] = document.createElement("div");
        skillRow[i].classList.add(`${skillItems.skillRow}`);
        if (leavesInRow < setInRow) {
            skillRow[i].classList.add("small__row");
        }
        blockOfSkills.appendChild(skillRow[i]);
        for (let j = setInRow * i; j < setInRow * i + countInRow; j++) {
            // console.log("j num:", j);
            let skillItem = document.createElement("div");
            skillItem.classList.add(`${skillItems.skillClass}`);

            // skillItem.innerHTML = skillItems.skillContent(j);
            skillItem.innerHTML = skillItems.skillContent(j);
            skillRow[i].appendChild(skillItem);
        }
        leavesInRow = leavesInRow - setInRow;
    }
    // }
}
/*==================== HIDE SCROLL ARROW ====================*/
function scrollHome() {
    const scrollHome = document.getElementById("scroll-down");
    // When the scroll is higher than 200 viewport height,
    // add the show-scroll class to the a tag with the scroll-top class
    // console.log("Y:", this.window.pageYOffset);
    if (this.window.pageYOffset >= 100) scrollHome.classList.add("hide");
    else scrollHome.classList.remove("hide");
}
window.addEventListener("scroll", scrollHome);

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

//===================<Resent post>=========================================================
