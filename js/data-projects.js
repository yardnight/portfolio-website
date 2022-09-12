class Project {
	constructor(
		index,
		title,
		date,
		category,
		description,
		projectsAmount,
		gitHubRepository,
		gitHubPage,
		reviewInfo,
		mainInfo,
		detailInfo
	) {
		this.id = projectsAmount - index;
		this.title = title;
		this.date = date;
		this.category = category;
		this.description = description;
		this.reviewInfo = reviewInfo;
		this.gitHubRepository = gitHubRepository;
		this.gitHubPage = gitHubPage;
		this.projectName = "art" + this.id;
		this.reviewImageSrc = "img/articles/" + this.projectName + "/01.png";
		this.reviewImageAlt = "Proj#" + this.id;
		this.mainInfo = mainInfo;
		this.mainImageSrc = "img/articles/" + this.projectName + "/02.png";
		this.detailInfo = detailInfo;
		this.detailImageSrc = "img/articles/" + this.projectName + "/03.png";
	}
}

import { projectsPostsData } from "./variables.js";

export let projectsData = createProjectsData(projectsPostsData);

function createProjectsData(projects) {
	let projectsAmount = projects.length;

	let projectsData = [];

	projects.forEach((element, index) => {
		let project = new Project(
			index,
			element.title,
			element.date,
			element.category,
			element.description,
			projectsAmount,
			element.gitHubRepository,
			element.gitHubPage,
			element.reviewInfo,
			element.mainInfo,
			element.detailInfo
		);
		projectsData.push(project);
	});
	// console.log("projectsData:", projectsData);
	return projectsData;
}

getsProjectInfo(projectsData);

function getsProjectInfo(projectsData) {}
