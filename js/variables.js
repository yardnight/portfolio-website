let skillsVariables = {
    html: { progress: 80, name: "html5" },
    css: { progress: 60, name: "css3" },
    js: { progress: 45, name: "js3" },
    sass: { progress: 60, name: "sass" },
    gulp: { progress: 50, name: "gulp" },
    git: { progress: 70, name: "git" },
    react: { progress: 10, name: "react" },
    sql: { progress: 30, name: "sql" },
};

module.exports = skillsVariables;

// export let skillsVar = skillsVariables;

// var skillsDataHard = require("./data-skills.js");

// //===================<Skills ROWS SPLITTING>================================================
// let skillsVariables = {};

// skillsBlock(skillsDataHard);
// console.log("Object:", skillsVariables);

// function skillsBlock(skills) {
//     let skillsObj = {};
//     const skillsLength = skills.length;
//     // console.log(skillsLength);
//     for (let i = 0; i < skillsLength; i++) {
//         let currentProgres = skills[i].progress;
//         let currentName = skills[i].iconName;
//         skillsObj[currentName] = currentProgres;
//     }
//     return (skillsVariables = skillsObj);
// }
