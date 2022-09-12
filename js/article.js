// import { projectInfo } from "./projects.min.js";
const projectInfo = JSON.parse(localStorage.getItem("projectInfoData"));

projectArticle(projectInfo);

function projectArticle(data) {
	const article = document.getElementById("project-article");

	article.innerHTML = `
        <h1 class="article__title">${data.title}</h1>
        <div class="article__info">
            <div class="article__year">${data.date}</div>
            <div class="article__category">${data.category}</div>
        </div>
        <div class="article__text">
            <p>${data.reviewInfo} 
            <br>
            <a class="git__ref" href="${data.gitHubRepository}" target="_blank">
                ${data.gitHubRepository}</a><br>                          
            </p>
            <img class="article__image" src="${data.reviewImageSrc}" alt="${data.reviewImageAlt}"">
            <p>
                Are you intrested to find out how it works? Press the button below to follow the pege link.
            </p>
            <div class = "label">
                <a class="buttn" href="${data.gitHubPage}" 
                target="_blank">
                <i class="_icon-play"></i>
                </a>
            </div>
            <p>${data.mainInfo}</p>
            <img class="article__image" src="${data.mainImageSrc}" alt="${data.mainImageAlt}">
            <p>${data.detailInfo}</p>                            
            <img class="article__image" src="${data.detailImageSrc}" alt="${data.detailImageAlt}">
            
        </div>
        `;
}
