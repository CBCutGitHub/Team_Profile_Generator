# Team Profile Generator

## Application

This application is a Node.js command-line driven application that takes user input of basic information about employees on a software engineering team. An HTML webpage that displays summaries for each person is then generated. That information provides a manager with a quick access to their employee's emails and GitHub profiles.

## Initiate Unit Testing

In order to make sure the code is maintainable, it is imperative that testing is rigorously performed on each of the classes. Each class must pass the testing beginning with the parent class, Employee, to ensure successful application functionality. The application utilizes [Jest](https://www.npmjs.com/package/jest) to run the unit tests.

Initiate testing by entering command> npm run test for the following classes :

├── __tests__/             //jest tests
│   ├── Employee.test.js
│   ├── Engineer.test.js
│   ├── Intern.test.js
│   └── Manager.test.js

## Unit Testing Results

Results of the testing is returned and should be confirmed that each test passed as shown below: 
![TestTPG](https://user-images.githubusercontent.com/95545346/156263648-4b4c46cb-d95f-41fd-9ef5-9a2ac66b73f0.PNG)

## Invoke Application![TeamRosterTPG]

The application utilizes [Inquirer](https://www.npmjs.com/package/inquirer) for the purpose of collecting input from the user. The application is invoked by using the following command: node index.js.

## At start of the application## User Input of Basic Information

This is an image of prompted response to enter basic information from the user:
![User_Info_Input_TPG](https://user-images.githubusercontent.com/95545346/156264139-960c3cd6-7968-48f9-9610-569d289c1acb.PNG)


** user is prompted to enter the team manager’s name, employee ID, email address, and office number.

** user is presented a menu with the options to:
  1. add an engineer with properties and methods of name, id, email, github 
  2. add an intern with properties and methods of name, id, email, school
  3. add a manager (if needed) with properties of name, id, email, officeNumber
  4. select none to finish building the team and exit the application

** user select option to add and follows the prompts to input requested information
** user is then taken back to the menu to add or finish
** user selects to finish building team by selecting "none" in which the application will exit and HTML is generated as shown below:

The following link to project on github: https://github.com/CBCutGitHub/Team_Profile_Generator

## Generated HTML

The following image shows a mock-up of the generated HTML’s appearance and functionality:
![TeamRosterTPG](https://user-images.githubusercontent.com/95545346/156263476-020c6fee-eca0-48cd-bfa6-dc4e966c88b4.PNG)


 **Important**: Make sure that you remove `dist` from the `.gitignore` file so that Git will track this folder and include it when you push up to your application's repository.

## Additional support directories/files:

├── dist/                  // rendered output (HTML) and CSS style sheet      
├── lib/                   // classes
├── src/                   // template helper code 
├── .gitignore             // indicates which folders and files Git should ignore
├── index.js               // runs the application
└── package.json           




© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
