export let skillsVariables = {
	hard: {
		html: { progress: 80, name: "html5", tag: "HTML5" },
		css: { progress: 60, name: "css3", tag: "CSS3" },
		js: { progress: 45, name: "js3", tag: "JS" },
		sass: { progress: 60, name: "sass", tag: "SASS" },
		gulp: { progress: 50, name: "gulp", tag: "GULP" },
		git: { progress: 70, name: "git", tag: "GIT" },
		react: { progress: 10, name: "react", tag: "React" },
		sql: { progress: 30, name: "sql", tag: "SQL" },
		oop: { progress: 50, name: "oop", tag: "OOP" },
	},
	extra: {
		vscode: { progress: 80, name: "vscode", tag: "VS code" },
		svg: { progress: 80, name: "svg", tag: "Icons Font" },
		figma: { progress: 50, name: "figma", tag: "Figma" },
		cdr: { progress: 90, name: "cdr", tag: "Corel Draw" },
		maxds: { progress: 50, name: "3ds", tag: "3Ds Max" },
		github: { progress: 70, name: "github", tag: "GitHub" },
	},
};
export let amountInRow = 6;
export let blogPostsData = [
	{
		title: "React app deploy",
		date: "Jul 25, 2022",
		subject: "App",
		message:
			"React was a something unknown for me. So I start to search simple examples how to use it. Then I found an App for a sport club. That was a webpage written on React. It was not a simple one but but useful to show me how react and its components work. When I create the page I wonder if i can put it in github as a usual project as did before therefore I published github page after had run common build. In the end it was just a blank page with nothing in. Not so easy I thought. So i keep to search the solution and I find it. As it turned out there is a plugin which ables to deploy app to github - gh-pages. Now solution was find and I can deploy apps to github.",
	},
	{
		title: "Blog upgrade",
		date: "Jul 05, 2022",
		subject: "HTML",
		message:
			"The blog looked boring yesterday. Small operations with JavaScript to upgrade HTML of the blog page were implemented. A bit practrice to improve my styling skills and to remember SASS. So I guess it is looking better now. I noticed that When I write a lot in a blog it is getting look bad on home page. So may be the day will come when I think up an interest improvements. A short annotation might be could help.",
	},
	{
		title: "Sass mixins",
		date: "Jul 01, 2022",
		subject: "SASS",
		message:
			"I decided to implemente gulp plugins to run sass variables by javaScript code. It allows me to use a file with skills variables for creating both SASS and JS data. To revise my skills block gitting more convenient. By changing skills data from one place now it could be able to impack on css style and JS variables. ",
	},
	{
		title: "Learning animation",
		date: "Jun 15, 2022",
		subject: "CSS",
		message:
			"Perhaps my home page had a boring look so I gonna try to make it more a live by CSS animation tool.",
	},
	{
		title: "Using OOP",
		date: "Jan 17, 2022",
		subject: "OOP",
		message:
			"I decided to update the skills section on the home page of my portfolio site. I realised that I can to use a function to fill my skills rows from an object. It allows me to add a new skill by editing the skill-object.",
	},
	{
		title: "An Update for the blog",
		date: "Jan 10, 2022",
		subject: "CSS",
		message:
			"Using my DOM and JS knowleges adopted the blog as a object with posts. My fearther wishes to make SQL database for store the blog post in there and using a modal window to create new posts straight from the page.",
	},
	{
		title: "Adaptive design",
		date: "Oct 10, 2021",
		subject: "CSS",
		message:
			"Long time was busy with mobile first concept. Added adaptivity for the most common devices on Home Page. Iphones, Ipad and Ipad mini, also for Pixel 2, and Samsumg Galaxy devices.",
	},
	{
		title: "Resume included",
		date: "Sep 05, 2021",
		subject: "Resume",
		message:
			"I found a good form for a resume in the youtube. Some time a while passed and I had implemented it to my portfolio site like a separate web page which you can get if you go through the resume button. It is not an origin form of that resume. I've extend it to add a couple changes that i belive make it better.",
	},
	{
		title: "Dark theme included",
		date: "Aug 30, 2021",
		subject: "JavaScript",
		message:
			"A few days I tried to make my blog site with dark theme inside. Even I did it in several days myself but a dark theme switcher every time after reloading page appears default again. Found a good solution implemented for Tilda. Small correction in my code and now it works at last.",
	},
	{
		title: "Fixed header and its disappearing on the site top",
		date: "Aug 25, 2021",
		subject: "Blog",
		message:
			"Found good idea how to enhance UX of my site. Fixed header is an excellent solution for convenient site navigation.",
	},
	{
		title: "Released my first Game",
		date: "Aug 19, 2021",
		subject: "Game",
		message:
			"Happy to release my first game app. DOM navigation is not as easy to learn as I thought at first. SetInterval clearing and setTimeOut ate long my time but not me. Small blood to make UI more convenient.",
	},
	{
		title: "My First blog site done",
		date: "Aug 11, 2021",
		subject: "Gulp",
		message:
			"Repeated all that Freelancer done in his Marathon. Simple blog site but a lot technologies in. Burger, icon font, screen adaptivity, navigation plug. Going to update it to assemble all my new skills and make it more interest.",
	},
	{
		title: "Gulp? What is that",
		date: "Jul 20, 2021",
		subject: "Gulp",
		message:
			"Freelancer uses SCSS and Gupl. Hmm... Intresting I like Saas and this taskrunner. A bit not clear plugins some troubles with versions.         Fuck... Avtoprefixer doesnt work. Need to find what is matter.          Project templates also looks useful helpful and good. Now I've realised helpness of GitHub.",
	},
	{
		title: "5 projects 5 days",
		date: "Jul 13, 2021",
		subject: "JavaScript",
		message:
			"Minin shared his marathon schadle. Five javascript project for five days training. Looks good. Let's see what are contain. Card Switcher, Drug & Drop, Slider, HoverBoard, Aim training game.",
	},
	{
		title: "Mine strong resources",
		date: "Jun 29, 2021",
		subject: "JS/CSS3",
		message:
			"Found some video blogers on the youtube. They are cool. Minin and Freelancer. I trying to learn JavaScript with this guys and alredy developed several applications. I would extent their examples and create something mine. Keep learning CSS features and DOM.",
	},
	{
		title: "Pyton Introduction with GoIt",
		date: "Jun 21, 2021",
		subject: "Python",
		message:
			"My first meet with Python. We use web trainer. Looks simple until appearing JSON. I am not ready for the shit yet. Let's back in a while.",
	},
	{
		title: "Started learning HTML5 and CSS3 with GoIt",
		date: "May 24, 2021",
		subject: "HTML",
		message:
			"My first practice with web technologies. I met HTML 5 and CSS3. Looks not bad and not complex. Still interested in it. Also I am trying to include my imagine and add some new idea into the site.",
	},
	{
		title: "My first Git and GitHub registration",
		date: "May 18, 2021",
		subject: "GitHub",
		message:
			"Started to learn front-end with youtube videos. Most of all to be used GitHub. Lets do the same.",
	},
	{
		title: "My Corel Draw book",
		date: "Apr 25, 2021",
		subject: "Book",
		message:
			"Just finished tarnslate my second book to Ukrainian language. How to work with CorelDraw. There are left some tasks to update images as per a new app version and then give it for further editing by an editor.",
	},
	{
		title: "Engineering Summary",
		date: "Apr 14, 2021",
		subject: "LifeStyle",
		message:
			"One month has gone after I went out from my last job. I realized that I do not want to be an engineer in Ukraine. I realised that Informational Technologies more attractive for me. I've got some experience in it when have been buisy with my PhD thesis.",
	},
];
export let projectsPostsData = [
	{
		title: "The Tic-tac-toe",
		date: "2022",
		category: "React",
		description:
			"An App of a popular game The tic-tac-toe. The game provides ability to write a history of the current game and then to return to previous game steps. The game history could be called in a popup. The app is based on the  first task of official react tutorial with the all propose improvements in it.",
	},
	{
		title: "Gym club page",
		date: "2022",
		category: "React App",
		description:
			"An React build app for club webpage. The fit club page contains diferent info components. There were impemented: counters, header links for scroll, mailjs.",
	},
	{
		title: "Favorite meals Explorer",
		date: "2022",
		category: "JS Application",
		description:
			"An small app to explore meals. You can find what you like to eat and add it to the favorite list. For all meals it is avaliable to get info about meal: picture, ingredients, recipe of cooking. If a meal is not attractive any more it is posible to remove it from the favorite list.",
	},
	{
		title: "Quiz",
		date: "2021",
		category: "JS Application",
		description:
			"Short quiz for quick test. The quiz asks about my resume points.",
	},
	{
		title: "Event timer",
		date: "2021",
		category: "JS Application",
		description:
			"You can tracking time left to current event. The page shows count down to the New Year Eve.",
	},
	{
		title: "Developing Target tracker Game",
		date: "2021",
		category: "Game Applications",
		description:
			"Let's enhance your hand reaction. Try to get the highest score. Share the game app into your friendship and find out which of you is fastest.",
	},
	{
		title: "Designing Hover Board",
		date: "2021",
		category: "JS Application",
		description:
			"Presented my App. Make it posible fire cells up with a different color. If desire a fun just try it self.",
	},
	{
		title: "SideBar Slider",
		date: "2021",
		category: "Marketing Illustration",
		description:
			"This app able to illustrate some places such as visiting the Netherlands attractions. I've been for work there about 3 months and have seen a lot.",
	},
	{
		title: "Vacation Todo list coding",
		date: "2022",
		category: "React app",
		description:
			"Application to place your tasks in ordered list. It provides you some useful tools which help you in use.",
	},
];
