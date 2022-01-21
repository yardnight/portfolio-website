import {blogData} from './data-blog.min.js';


blogPosts(blogData);

function blogPosts(blogData){
    
    const blogsSection = document.getElementById("blog");
    // console.log(blogsSection);

    for (let i=0; i<blogData.length; i++){
        let blogPost = document.createElement("div");
        blogPost.classList.add("blog__item");
        // console.log(blogPost);

        blogPost.innerHTML= 
        `<a href="" class="blog__article"> ${blogData[i].name} </a>
        <div class="blog__info"> 
            <div class="blog__date">${blogData[i].time} </div>
            <span> | </span> 
            <div class="blog__category">${blogData[i].subject} </div>
        </div>
        <div class="blog__text text"> ${blogData[i].message} </div>`;

        blogsSection.appendChild(blogPost);
    }
};
