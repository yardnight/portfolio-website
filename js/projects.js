import { projectsData } from "./data-projects.min.js";

projectsPosts(projectsData);

function projectsPosts(projectsData) {
	const worksSection = document.getElementById("works");
	for (let i = 0; i < projectsData.length; i++) {
		let projectPost = document.createElement("article");
		projectPost.classList.add("works__item");
		projectPost.innerHTML = `
        <div class="img-box">
            <a href="article.html" class="works__image _ibg">
                <img src="${projectsData[i].reviewImageSrc}" alt="${projectsData[i].reviewImageAlt}">
            </a>
        </div>
        <div class="works__body">
            <a href="article.html"  class="works__title">${projectsData[i].title}</a>
            <div class="works__info">
                <div class="works__year">${projectsData[i].date}</div>
                <div class="works__category">${projectsData[i].category}</div>
            </div>
            <div class="works__text text">
            ${projectsData[i].description}
            </div>
        </div>
        `;

		worksSection.appendChild(projectPost);
	}
	const projects = document.querySelectorAll(".works__item");
	// console.log(projects);
	let projectInfo = {};
	projects.forEach((project, index) => {
		project.addEventListener("click", () => {
			projectInfo = projectsData[index];
			localStorage.setItem(
				"projectInfoData",
				JSON.stringify(projectInfo)
			);
			// console.log("JSON", localStorage.getItem("projectInfoData"));
		});
	});
}
