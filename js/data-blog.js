class Blog {
    constructor(name, time, subject, message, imageId) {
        this.name = name;
        this.time = time;
        this.subject = subject;
        this.message = message;
        this.imageId = imageId;
        this.imageName = "blog" + this.imageId;
        this.imageSrc = "img/blog/" + this.imageName + ".png";
        // this.imageClass = "svg-iconskills--" + this.imageName + "-dims";
        this.imageAlt = "image" + this.imageName;
    }
}
export var blogData = [
    new Blog(
        "Blog upgrade",
        "Jul 05, 2022",
        "HTML",
        "The blog looked boring yesterday. Small operations with JavaScript to upgrade HTML of the blog page were implemented. A bit practrice to improve my styling skills and to remember SASS. Looks better now I gues.",
        "19"
    ),
    new Blog(
        "Sass mixins",
        "Jul 01, 2022",
        "SASS",
        "I decided to implemente gulp plugins to run sass variables by javaScript code. It allows me to use a file with skills variables for creating both SASS and JS data. To revise my skills block gitting more convenient. By changing skills data from one place now it could be able to impack on css style and JS variables. ",
        "18"
    ),
    new Blog(
        "Learning animation",
        "Jun 15, 2022",
        "CSS",
        "Perhaps my home page had a boring look so I gonna try to make it more a live by CSS animation tool.",
        "17"
    ),
    new Blog(
        "Using OOP",
        "Jan 17, 2022",
        "OOP",
        "I decided to update the skills section on the home page of my portfolio site. I realised that I can to use a function to fill my skills rows from an object. It allows me to add a new skill by editing the skill-object.",
        "16"
    ),
    new Blog(
        "An Update for the blog",
        "Jan 10, 2022",
        "CSS",
        "Using my DOM and JS knowleges adopted the blog as a object with posts. My fearther wishes to make SQL database for store the blog post in there and using a modal window to create new posts straight from the page.",
        "15"
    ),
    new Blog(
        "Adaptive design",
        "Oct 10, 2021",
        "CSS",
        "Long time was busy with mobile first concept. Added adaptivity for the most common devices on Home Page. Iphones, Ipad and Ipad mini, also for Pixel 2, and Samsumg Galaxy devices.",
        "14"
    ),
    new Blog(
        "Resume included",
        "Sep 05, 2021",
        "Resume",
        "I found a good form for a resume in the youtube. Some time a while passed and I had implemented it to my portfolio site like a separate web page which you can get if you go through the resume button. It is not an origin form of that resume. I've extend it to add a couple changes that i belive make it better.",
        "13"
    ),
    new Blog(
        "Dark theme included",
        "Aug 30, 2021",
        "JavaScript",
        "A few days I tried to make my blog site with dark theme inside. Even I did it in several days myself but a dark theme switcher every time after reloading page appears default again. Found a good solution implemented for Tilda. Small correction in my code and now it works at last.",
        "12"
    ),
    new Blog(
        "Fixed header and its disappearing on the site top",
        "Aug 25, 2021",
        "Blog",
        "Found good idea how to enhance UX of my site. Fixed header is an excellent solution for convenient site navigation.",
        "11"
    ),
    new Blog(
        "Released my first Game",
        "Aug 19, 2021",
        "Game",
        "Happy to release my first game app. DOM navigation is not as easy to learn as I thought at first. SetInterval clearing and setTimeOut ate long my time but not me. Small blood to make UI more convenient.",
        "10"
    ),
    new Blog(
        "My First blog site done",
        "Aug 11, 2021",
        "Gulp",
        "Repeated all that Freelancer done in his Marathon. Simple blog site but a lot technologies in. Burger, icon font, screen adaptivity, navigation plug. Going to update it to assemble all my new skills and make it more interest.",
        "9"
    ),
    new Blog(
        "Gulp? What is that",
        "Jul 20, 2021",
        "Gulp",
        "Freelancer uses SCSS and Gupl. Hmm... Intresting I like Saas and this taskrunner. A bit not clear plugins some troubles with versions.         Fuck... Avtoprefixer doesnt work. Need to find what is matter.          Project templates also looks useful helpful and good. Now I've realised helpness of GitHub.",
        "8"
    ),
    new Blog(
        "5 projects 5 days",
        "Jul 13, 2021",
        "JavaScript",
        "Minin shared his marathon schadle. Five javascript project for five days training. Looks good. Let's see what are contain. Card Switcher, Drug & Drop, Slider, HoverBoard, Aim training game.",
        "7"
    ),
    new Blog(
        "Mine strong resources",
        "Jun 29, 2021",
        "JS/CSS3",
        "Found some video blogers on the youtube. They are cool. Minin and Freelancer. I trying to learn JavaScript with this guys and alredy developed several applications. I would extent their examples and create something mine. Keep learning CSS features and DOM.",
        "6"
    ),
    new Blog(
        "Pyton Introduction with GoIt",
        "Jun 21, 2021",
        "Python",
        "My first meet with Python. We use web trainer. Looks simple until appearing JSON. I am not ready for the shit yet. Let's back in a while.",
        "5"
    ),
    new Blog(
        "Started learning HTML5 and CSS3 with GoIt",
        "May 24, 2021",
        "HTML",
        "My first practice with web technologies. I met HTML 5 and CSS3. Looks not bad and not complex. Still interested in it. Also I am trying to include my imagine and add some new idea into the site.",
        "4"
    ),
    new Blog(
        "My first Git and GitHub registration",
        "May 18, 2021",
        "GitHub",
        "Started to learn front-end with youtube videos. Most of all to be used GitHub. Lets do the same.",
        "3"
    ),
    new Blog(
        "My Corel Draw book",
        "Apr 25, 2021",
        "Book",
        "Just finished tarnslate my second book to Ukrainian language. How to work with CorelDraw. There are left some tasks to update images as per a new app version and then give it for further editing by an editor.",
        "2"
    ),
    new Blog(
        "Engineering Summary",
        "Apr 14, 2021",
        "LifeStyle",
        "One month has gone after I went out from my last job. I realized that I do not want to be an engineer in Ukraine. I realised that Informational Technologies more attractive for me. I've got some experience in it when have been buisy with my PhD thesis.",
        "1"
    ),
];
