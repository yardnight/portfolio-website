class Post {
	constructor(title, date, subject, message, postsAmount, index) {
		this.id = postsAmount - index;
		this.title = title;
		this.subject = subject;
		this.date = date;
		this.message = message;
		this.imageName = "blogpost" + this.id;
		this.imageSrc = "img/blog/" + this.imageName + ".png";
		this.imageAlt = "image-of-" + this.imageName;
	}
}

//=======================<NEW>=============================
import { blogPostsData } from "./variables.js";

export let blogData = createBlogData(blogPostsData);

function createBlogData(blogPostsData) {
	let postsAmount = blogPostsData.length;

	let blogData = [];

	blogPostsData.forEach((element, index) => {
		let post = new Post(
			element.title,
			element.date,
			element.subject,
			element.message,
			postsAmount,
			index
		);
		blogData.push(post);
	});
	console.log("blogData:", blogData);
	return blogData;
}
