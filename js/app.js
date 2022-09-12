import { blogData } from "./data-blog.min.js";
import { skillsData } from "./data-skills.min.js";
import { amountInRow } from "./variables.min.js";
import { projectsData } from "./data-projects.min.js";

//===================<Skills SLIDER>========================================================

var hard = skillsData.hardSkills;
var extra = skillsData.extraSkills;

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
	} else if (numBlocks <= 4) {
		numRows = 4;
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

//=========<small_row extend abit wider when chosen>==============

chosenContain(hard);
chosenContain(extra);

function chosenContain(skillItems) {
	const list = document
		.getElementById(`${skillItems.skillId}`)
		.querySelectorAll(`.${skillItems.skillRow}`);
	// console.log(list);
	eventWatcher(list);

	function eventWatcher(list) {
		// console.log(list.length);
		for (let item of list) {
			item.addEventListener("click", () => {
				// console.log("Click:", item);
				let small = item.classList;
				let status = small.contains("small__row");
				// console.log("small:", small.contains("small__row"), status);
				if (status) {
					// console.log("A small one");
					removeClassChosen(list);
					item.classList.add("chosen");
				} else {
					// console.log("No small");
					removeClassChosen(list);
				}
			});
		}
	}
	function removeClassChosen(list) {
		list.forEach((item) => {
			item.classList.remove("chosen");
		});
	}
}
//====<small_row extend abit wider when chosen>=============

//==================== HIDE SCROLL ARROW ====================
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
        <div class="recent-post__container">
            <div class="recent-post__content">
                <div class="recent-post__info">
                    <div class="recent-post__infoitems">
                        <div class = "recent-post__theme"> ${data[i].subject} </div>
                        <div class = "recent-post__date"> ${data[i].date} </div>
                    </div>  
                    
                </div>
                <div class="recent-post__title">
                    <a href="blog.html" class="post-ref">
                    ${data[i].title}
                    </a>
                </div>
                <div class="recent-post__text text">
                    ${data[i].message}
                </div>
            </div>
            <div class="recent-post__image">
                <img src="${data[i].imageSrc}" alt="${data[i].imageAlt}">
            </div>
        </div>
        
        
        `;

		postsSection.appendChild(recentPost);
	}
}

//===================<Resent post>=========================================================

//====================<Favorite Works>======================================================
let favProjectsData = [];
const IndexOfFavProjectData = [9, 8, 7, 6, 5, 4, 3];

IndexOfFavProjectData.forEach((num) => {
	projectsData.forEach(
		(project) => project.id === num && favProjectsData.push(project)
	);
});

// console.log("FavProj", favProjectsData);

favoriteProjects(favProjectsData);

function favoriteProjects(data) {
	const projectsSection = document.getElementById("fav-projects");

	for (let i = 0; i < data.length; i++) {
		let favProject = document.createElement("article");
		favProject.classList.add("works__item");
		favProject.innerHTML = `
        <div class="img-box">
            <a href="article.html" class="works__image _ibg">
                <img src="${data[i].reviewImageSrc}" alt="${data[i].reviewImageAlt}">
            </a>
        </div>
        <div class="works__body">
            <a href="article.html" class="works__title">${data[i].title}</a>
            <div class="works__info">
                <div class="works__year">${data[i].date}</div>
                <div class="works__category">${data[i].category}</div>
            </div>
            <div class="works__text text">
            ${data[i].description}
            </div>
        </div>
        `;

		projectsSection.appendChild(favProject);
	}
}

//====================<Favorite Works>======================================================
const favProjects = document.querySelectorAll(".works__item");
let projectInfo = {};
favProjects.forEach((favProject, index) => {
	favProject.addEventListener("click", () => {
		projectInfo = favProjectsData[index];
		localStorage.setItem("projectInfoData", JSON.stringify(projectInfo));
	});
});
