class Skill {
    constructor(name, progress, iconName) {
        this.name = name;
        this.progress = progress;
        this.iconName = iconName;
        this.iconSrc = "img/icons/icons.svg#iconskills--" + this.iconName;
        this.iconClass = "svg-iconskills--" + this.iconName + "-dims";
        this.iconAlt = "iconSkills--" + this.iconName;
    }
}
//=======================<NEW>=============================
import { skillsVariables } from "./variables.js";

export let skillsData = createData(skillsVariables);

//=======<Skills data executes>===========
function createData(skillsVariables) {
    class DataBlock {
        constructor(skillId, skillClass, skillRow, skills) {
            this.skillId = skillId;
            this.skillClass = skillClass;
            this.skillRow = skillRow;
            this.skillVars = skills;
            this.skillData = this.createSkillData();
        }
        createSkillData() {
            const n = Object.keys(this.skillVars).length;
            let skillData = [];
            for (let i = 0; i < n; i++) {
                let data = this.skillVars[Object.keys(this.skillVars)[i]];
                let newElement = new Skill(data.tag, data.progress, data.name);
                skillData.push(newElement);
            }
            // console.log("skillData", skillData);
            return skillData;
        }
        skillContent(params) {
            if (this.skillId === "hard-skill-section") {
                return `<h3>${this.skillData[params].name}</h3>
                <div class="icon-box">
                    <img src="${this.skillData[params].iconSrc}" class="${this.skillData[params].iconClass}" alt="${this.skillData[params].iconAlt}" />
                </div>
                <div class="skill-bar">
                    <div class="skill-bar__percent">
                        <div class="skill-bar__progress ${this.skillData[params].iconName}"></div>
                    </div>
                    <span class="skill-bar__value" id="progress">${this.skillData[params].progress} </span>
                </div>`;
            } else if (this.skillId === "extra-skill-section") {
                return `<h3>${this.skillData[params].name}</h3>
                <div class="icon-box">
                    <img src="${this.skillData[params].iconSrc}" class="${this.skillData[params].iconClass}" alt="${this.skillData[params].iconAlt}" />
                </div>
                <h4>${this.skillData[params].name}</h4>
                `;
            }
        }
    }

    let skillsData = {
        hardSkills: new DataBlock(
            "hard-skill-section",
            "hard-skills__slide",
            "hard-skills__row",
            skillsVariables.hard
        ),
        extraSkills: new DataBlock(
            "extra-skill-section",
            "extra-skills__slide",
            "extra-skills__row",
            skillsVariables.extra
        ),
    };
    return skillsData;
}

// export var skillsData = {
//     hardSkills: {
//         skillId: "hard-skill-section",
//         skillClass: "hard-skills__slide",
//         skillData: [
//             new Skill(
//                 skillsVariables.hard.html.tag,
//                 skillsVariables.hard.html.progress,
//                 skillsVariables.hard.html.name
//             ),
//             new Skill(
//                 skillsVariables.hard.css.tag,
//                 skillsVariables.hard.css.progress,
//                 skillsVariables.hard.css.name
//             ),
//             new Skill(
//                 skillsVariables.hard.js.tag,
//                 skillsVariables.hard.js.progress,
//                 skillsVariables.hard.js.name
//             ),
//             new Skill(
//                 skillsVariables.hard.sass.tag,
//                 skillsVariables.hard.sass.progress,
//                 skillsVariables.hard.sass.name
//             ),
//             new Skill(
//                 skillsVariables.hard.gulp.tag,
//                 skillsVariables.hard.gulp.progress,
//                 skillsVariables.hard.gulp.name
//             ),
//             new Skill(
//                 skillsVariables.hard.git.tag,
//                 skillsVariables.hard.git.progress,
//                 skillsVariables.hard.git.name
//             ),
//             new Skill(
//                 skillsVariables.hard.react.tag,
//                 skillsVariables.hard.react.progress,
//                 skillsVariables.hard.react.name
//             ),
//             new Skill(
//                 skillsVariables.hard.sql.tag,
//                 skillsVariables.hard.sql.progress,
//                 skillsVariables.hard.sql.name
//             ),
//         ],
//         skillContent(params) {
//             return `<h3>${this.skillData[params].name}</h3>
//         <div class="icon-box">
//             <img src="${this.skillData[params].iconSrc}" class="${this.skillData[params].iconClass}" alt="${this.skillData[params].iconAlt}" />
//         </div>
//         <div class="skill-bar">
//             <div class="skill-bar__percent">
//                 <div class="skill-bar__progress ${this.skillData[params].iconName}"></div>
//             </div>
//             <span class="skill-bar__value" id="progress">${this.skillData[params].progress} </span>
//         </div>`;
//         },
//     },
//     extraSkills: {
//         skillId: "extra-skill-section",
//         skillClass: "extra-skills__slide",
//         skillData: [
//             new Skill("VS code", 80, "vscode"),
//             new Skill("Icons Font", 60, "svg"),
//             new Skill("Figma", 45, "figma"),
//             new Skill("Corel Draw", 60, "cdr"),
//             new Skill("3Ds Max", 50, "3ds"),
//             new Skill("GitHub", 50, "github"),
//         ],
//         skillContent(params) {
//             return `<h3>${this.skillData[params].name}</h3>
//             <div class="icon-box">
//                 <img src="${this.skillData[params].iconSrc}" class="${this.skillData[params].iconClass}" alt="${this.skillData[params].iconAlt}" />
//             </div>
//             <h4>${this.skillData[params].name}</h4>
//             `;
//         },
//     },
// };
