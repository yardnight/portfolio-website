class Project {
	constructor(index, title, date, category, description, projectsAmount) {
		this.id = projectsAmount - index;
		this.title = title;
		this.date = date;
		this.category = category;
		this.description = description;
		this.imageName = "project" + this.id;
		this.imageSrc = "img/works/" + this.imageName + ".png";
		this.imageAlt = "Proj#" + this.id;
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
			projectsAmount
		);
		projectsData.push(project);
	});
	// console.log("projectsData:", projectsData);
	return projectsData;
}
