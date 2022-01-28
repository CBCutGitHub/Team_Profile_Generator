const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'team.html');

const render = require('./src/page-template.js');

const teamMembers = [];




function runApp() {

  function addManager(){

  }


  function addMembers(){

  }
  
//addEngineer()

//addIntern


  function buildTeam() {
  
    fs.writeFileSync(distPath, render(teamMembers), 'utf-8');
  }


}

runApp();
