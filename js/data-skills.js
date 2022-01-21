class Skill{
    constructor(name,progress,iconName){
        this.name=name;
        this.progress=progress;
        this.iconName=iconName;
        this.iconSrc="img/icons/icons.svg#iconskills--"+this.iconName;
        this.iconClass="svg-iconskills--"+ this.iconName + "-dims";
        this.iconAlt="iconSkills--"+ this.iconName
    }
};
//=======================<NEW>=============================
export var skillsData = { 
    hardSkills : {
        skillId : "hard-skill-section",
        skillClass : "hard-skills__slide",
        skillData : [
            new Skill (
                "HTML5",
                80,
                "html5"
            ),
            new Skill (
                "CSS3",
                60,
                "css3"
            ),
            new Skill (
                "JS",
                45,
                "js3"
            ),
            new Skill (
                "SASS",
                60,
                "sass"
            ),
            new Skill (
                "GULP",
                50,
                "gulp"
            ),
            new Skill (
                "GIT",
                70,
                "git"
            ),
        ],
        skillContent(params) {
        return (`<h3>${this.skillData[params].name}</h3>
        <div class="icon-box">
            <img src="${this.skillData[params].iconSrc}" class="${this.skillData[params].iconClass}" alt="${this.skillData[params].iconAlt}" />
        </div>
        <div class="skill-bar">
            <div class="skill-bar__percent">
                <div class="skill-bar__progress ${this.skillData[params].iconName}"></div>
            </div>
            <span class="skill-bar__value" id="progress">${this.skillData[params].progress} </span>
        </div>`)
        },

    }, 
    extraSkills : {
        skillId : "extra-skill-section",
        skillClass : "extra-skills__slide",
        skillData : [
            new Skill (
                "VS code",
                80,
                "vscode"
            ),
            new Skill (
                "Icons Font",
                60,
                "svg"
            ),
            new Skill (
                "Figma",
                45,
                "figma"
            ),
            new Skill (
                "Corel Draw",
                60,
                "cdr"
            ),
            new Skill (
                "3Ds Max",
                50,
                "3ds"
            ), 
        ],
        skillContent(params) {
            return (`<h3>${this.skillData[params].name}</h3>
            <div class="icon-box">
                <img src="${this.skillData[params].iconSrc}" class="${this.skillData[params].iconClass}" alt="${this.skillData[params].iconAlt}" />
            </div>
            <h4>${this.skillData[params].name}</h4>
            `)
        },
    }
};
