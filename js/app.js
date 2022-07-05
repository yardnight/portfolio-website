import { blogData } from "./data-blog.min.js";
import { skillsData } from "./data-skills.min.js";
import { amountInRow } from "./variables.min.js";

//===================<Skills ROWS SPLITTING>================================================

//===================<Skills ROWS SPLITTING>================================================

//===================<Skills SLIDER>========================================================

var hard = skillsData.hardSkills;
var extra = skillsData.extraSkills;
// let amountInRow = 5;

buildSkills(hard, amountInRow);
buildSkills(extra, amountInRow);

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

//===================<Resent post>==========================================================

recentPosts(blogData);

function recentPosts(data) {
    const postsSection = document.getElementById("recent-blog");

    for (let i = 0; i < 2; i++) {
        let recentPost = document.createElement("div");
        recentPost.classList.add("recent-posts__column");
        recentPost.innerHTML = `
        
        <article class="recent-posts__item recent-post">
            <a href="blog.html" class="recent-post__title ">
            ${data[i].name}
            </a>
            <div class="recent-post__info">
            ${data[i].time} <span>|</span> ${data[i].subject}
            </div>
            <div class="recent-post__text text">
            ${data[i].message}
            </div>
        </article>
        `;

        postsSection.appendChild(recentPost);
    }
}

//===================<Resent post>=========================================================
