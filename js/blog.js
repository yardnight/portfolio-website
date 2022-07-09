import { blogData } from "./data-blog.min.js";

let counter = blogData.length - 1;
blogPosts(blogData);

// ================<Blog scroll bottons>================================

let scrollUp = document.getElementById("blog-scroll-up");
let scrollDown = document.getElementById("blog-scroll-down");

scrollUp.addEventListener("click", (event) => {
    if (counter == blogData.length) {
    } else if (counter < blogData.length) {
        counter = countUp(counter);
    }
    return counter;
});
scrollDown.addEventListener("click", (event) => {
    if (counter == 0) {
    } else if (counter > 0) {
        counter = countDown(counter);
    }
    return counter;
});

function countUp(count) {
    count++;
    return count;
}

function countDown(count) {
    count--;
    return count;
}

// ================<Blog scroll bottons>================================

// ================<Blogpage creation function>================================

function blogPosts(blogData) {
    const blogsSection = document.getElementById("blog");
    // console.log(blogsSection);

    for (let i = 0; i < blogData.length; i++) {
        let blogPost = document.createElement("div");
        blogPost.classList.add("blog__item");
        blogPost.setAttribute("id", `${blogData[i].imageId}`);
        // console.log(blogPost);
        let next = parseInt(`${blogData[i].imageId}`) + 1;
        let prev = parseInt(`${blogData[i].imageId}`) - 1;

        blogPost.innerHTML = ` 
        <div class="blog-post__container">
            <div class="blog-post__content">
                <div class="blog-post__info">
                    <div class="blog-post__infoitems">
                        <div class = "blog-post__theme"> ${blogData[i].subject} </div>
                        <div class = "blog-post__date"> ${blogData[i].time} </div>
                    </div>  
                    <div class="blog-post__buttons">
                        <button class="icon-arrow-up" id = "blog-scroll-up">
                            <a href="#${next}" class= "arrow-scroll">
                                <i class="arrow-scroll _icon-slite-up-arrow"></i>
                            </a>
                        </button>
                        <button class="icon-arrow-down" id = "blog-scroll-down">
                            <a href="#${prev}" class= "arrow-scroll">
                                <i class="arrow-scroll _icon-slite-down-arrow"/></i>
                            </a>
                        </button>
                    </div>
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
        
        `;

        blogsSection.appendChild(blogPost);
    }
}

// ================<Blogpage creation function>================================
