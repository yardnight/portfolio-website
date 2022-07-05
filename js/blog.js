import { blogData } from "./data-blog.min.js";

blogPosts(blogData);

function blogPosts(blogData) {
    const blogsSection = document.getElementById("blog");
    // console.log(blogsSection);

    for (let i = 0; i < blogData.length; i++) {
        let blogPost = document.createElement("div");
        blogPost.classList.add("blog__item");
        // console.log(blogPost);

        blogPost.innerHTML = ` 
        <div class="blog-post__container">
            <div class="blog-post__content">
                <div class="blog-post__info">
                    <div class = "blog-post__theme"> ${blogData[i].subject} </div>
                    <div class = "blog-post__date"> ${blogData[i].time} </div>
                </div>
                <div class="blog-post__title">${blogData[i].name}</div>
                <div class="blog-post__text text">
                    ${blogData[i].message}
                </div>
            </div>
            <div class="blog-post__image">
                <img src="${blogData[i].imageSrc}" alt="${blogData[i].imageAlt}">
            </div>
        </div>
        <div class="blog-post__buttons">
            <div class="blog-post__up-arrow"></div>
            <div class="blog-post__down-arrow"></div>
        </div>
        `;

        blogsSection.appendChild(blogPost);
    }
}

// `<a href="" class="blog__article"> ${blogData[i].name} </a>
// <div class="blog__info">
//     <div class="blog__date">${blogData[i].time} </div>
//     <span> | </span>
//     <div class="blog__category">${blogData[i].subject} </div>
// </div>
// <div class="blog__text text"> ${blogData[i].message} </div>
// `;
