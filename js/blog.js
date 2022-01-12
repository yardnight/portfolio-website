// alert('hello Gulp!')
class Blog{
    constructor(name, time, subject, message, imageName){
        this.name=name;
        this.time=time;
        this.subject=subject;
        this.message=message;
        this.imageName=imageName;
        // this.imageSrc="img/works/"+ this.imageName + ".png";
        // this.imageClass="svg-iconskills--"+ this.imageName + "-dims";
        // this.imageAlt="image"+ this.imageName
    }
};
var blogData = [
    new Blog(
        "An Update for the blog",
        "10 Jan 2022",
        "Blog, CSS",
        "Using my DOM and JS knowleges adopted the blog as a object with posts. My fearther wishes to make SQL database for store the blog post in there and using a modal window to create new posts straight from the page",
        "06"
    ),
    new Blog(
        "Adaptive design",
        "10 Oct 2021",
        "Blog, CSS",
        "Long time was busy with mobile first concept. Added adaptivity for the most common devices on Home Page. Iphones, Ipad and Ipad mini, also for Pixel 2, and Samsumg Galaxy devices.",
        "06"
    ),
    new Blog(
        "Resume included",
        "5 Sep 2021",
        "Blog, My Resume",
        "I found a good form for a resume in the youtube. Some time a while passed and I had implemented it to my portfolio site like a separate web page which you can get if you go through the resume button. It is not an origin form of that resume. I've extend it to add a couple changes that          i belive make it better.",
        "06"
    ),
    new Blog(
        "Dark theme included",
        ">30 Aug 2021",
        "Blog, JavaScript",
        "A few days I tried to make my blog site with dark theme inside. Even I did it in several days myself but a dark theme switcher every time after reloading page appears default again. Found a good solution implemented for Tilda. Small correction in my code and now it works at last.",
        "06"
    ),
    new Blog(
        "Fixed header and its disappearing on the site top",
        "25 Aug 2021",
        "Blog, JavaScript",
        "Found good idea how to enhance UX of my site. Fixed header is an excellent solution for convenient site navigation",
        "06"
    ),
    new Blog(
        "Released my first Game",
        "19 Aug 2021",
        "Game, JavaScript",
        "Happy to release my first game app. DOM navigation is not as easy to learn as I thought at first. SetInterval clearing and setTimeOut ate long my time but not me. Small blood to make UI more convenient.",
        "06"
    ),
    new Blog(
        "My First blog site done",
        "11 Aug 2021",
        "Gulp, First blog site",
        "Repeated all that Freelancer done in his Marathon. Simple blog site but a lot technologies in. Burger, icon font, screen adaptivity, navigation plug. Going to update it to assemble all my new skills and make it more interest.",
        "06"
    ),
    new Blog(
        "Gulp? What is that",
        "20 Jul 2021",
        "Gulp, Project constructor",
        "Freelancer uses SCSS and Gupl. Hmm... Intresting I like Saas and this taskrunner. A bit not clear plugins some troubles with versions.         Fuck... Avtoprefixer doesnt work. Need to find what is matter.          Project templates also looks useful helpful and good. Now I've realised helpness of GitHub.",
        "06"
    ),
    new Blog(
        "5 projects 5 days",
        "13 Jul 2021",
        "JS, Marathon",
        "Minin shared his marathon schadle. Five javascript project for five days training. Looks good. Let's see what are contain. Card Switcher, Drug & Drop, Slider, HoverBoard, Aim training game.",
        "06"
    ),
    new Blog(
        "Mine strong resources",
        "29 Jun 2021",
        "Javascript, CSS3",
        "Found some video blogers on the youtube. They are cool. Minin and Freelancer. I trying to learn JavaScript with this guys and alredy developed several applications. I would extent their examples and create something mine. Keep learning CSS features and DOM.",
        "06"
    ),
    new Blog(
        "Pyton Introduction with GoIt",
        "21 Jun 2021",
        "CRM, Python app Developing",
        "My first meet with Python. We use web trainer. Looks simple until appearing JSON. I am not ready for the shit yet. Let's back in a while",
        "06"
    ),
    new Blog(
        "Started learning HTML5 and CSS3 with GoIt",
        "24 May 2021",
        "HTML, First one page site Developing",
        "My first practice with web technologies. I met HTML 5 and CSS3. Looks not bad and not complex. Still interested in it. Also I am trying to include my imagine and add some new idea into the site.",
        "06"
    ),
    new Blog(
        "My first Git and GitHub registration",
        "18 May 2021",
        "GitHub, Front-End learning",
        "Started to learn front-end with youtube videos. Most of all to be used GitHub. Lets do the same.",
        "06"
    ),
    new Blog(
        "My Corel Draw book",
        "25 Apr 2021",
        "Book, Univercity",
        "Just finished tarnslate my second book to Ukrainian language. How to work with CorelDraw. There are left some tasks to update images as per a new app version and then give it for further editing by an editor.",
        "06"
    ),
    new Blog(
        "Engineering Summary",
        "14 Apr 2021",
        "Impressions, Life story",
        " One month has gone after I went out from my last job. Understood that I do not want to be engineer in Ukraine any more. I realised that Informational Technologies more attractive for me. I've got some experience in it when have been buisy with my PhD thesis.", 
        "06"
    ),
]
// var blogData=[post1,post2,post3,post4,post5,post6];

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
}

// `<div class="blog__items">
//     <div class="blog__item">
//         <a href="" class="blog__article">Adaptive design</a>
//         <div class="blog__info"> 
//             <div class="blog__date">10 Oct 2021</div>
//             <span> | </span> 
//             <div class="blog__category">Blog, CSS</div>
//         </div>
//         <div class="blog__text text"> Long time was busy with mobile first concept.
//             Added adaptivity for the most common devices on Home Page. 
//             Iphones, Ipad and Ipad mini, also for Pixel 2, 
//             and Samsumg Galaxy devices.   
//         </div>
//     </div>
// </div>`