const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager")

const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'team.html');

const render = require('./src/page-template.js');

const teamMembers = [];




function runApp() {

  function addManager() {
    inquirer.prompt([
      {
        type: "input",
        name: "manager_name",
        message: "What is the name of the manager?"
      },
      {
        type: "input",
        name: "manager_id",
        message: "What is the manager's id number?"
      },
      {
        type: "input",
        name: "manager_email",
        message: "What is the manager's email?"
      },
      {
        type: "input",
        name: "manager_officenumber",
        message: "What is the manager office number?"
      }
    ]).then(response => {
      var newManagerInstance = new Manager(response.manager_name, response.manager_id, response.manager_email, response.manager_officenumber)
      teamMembers.push(newManagerInstance)

      console.log(teamMembers)

     addMembers()
    })
  }
  // Attempting to add others

  function addEngineer() {
    inquirer.prompt([
      {
        type: "input",
        name: "engineer_name",
        message: "What is the name of the engineer?"
      },
      {
        type: "input",
        name: "engineer_id",
        message: "What is the engineer's id number?"
      },
      {
        type: "input",
        name: "engineer_email",
        message: "What is the engineer's email?"
      },
      {
        type: "input",
        name: "engineer_github",
        message: "What is the engineer's github?"
      }
      
    ]).then(response => {
      var newEngineerInstance = new Engineer(response.engineer_name, response.engineer_id, response.engineer_email, response.engineer_github)
      teamMembers.push(newEngineerInstance)

      //ends testing add others, remove officenumber ref, changed var instances from manager to engineer


      console.log(teamMembers)
      addMembers()
    })
  }
    function addIntern() {
      inquirer.prompt([
        {
          type: "input",
          name: "intern_name",
          message: "What is the name of the intern?"
        },
        {
          type: "input",
          name: "intern_id",
          message: "What is the intern's id number?"
        },
        {
          type: "input",
          name: "intern_email",
          message: "What is the intern's email?"
        },
         {
           type: "input",
           name: "intern_school",
           message: "What school in the intern attending?"
                   } 
      ]).then(response => {
        var newInternInstance = new Intern(response.intern_name, response.intern_id, response.intern_email, response.intern_school)
        teamMembers.push(newInternInstance)
  
        //ends testing add others, remove officenumber ref, changed var instances from manager to engineer
  
    
        console.log(teamMembers)
        addMembers()
    })
      }


  function addMembers() {
    inquirer.prompt([
      {
        type: "list",
        name: "add_member",
        message: "What team member role would you like to add?",
        choices: ["Engineer", "Intern", "Manager", "None"]
      }
    ]).then(response => {
      if (response.add_member === "Engineer") {
        addEngineer()
      } else if (response.add_member === "Intern") {
        addIntern()
      }
      else if (response.add_member === "Manager") {
        addManager()
      }
      else if (response.add_member === "None") {
        buildTeam()
      }
    })}
  

  
  function buildTeam() {
console.log("Your Team Profile has been built.")
    fs.writeFileSync(distPath, render(teamMembers), 'utf-8');
  }

  addManager()
}

runApp();
