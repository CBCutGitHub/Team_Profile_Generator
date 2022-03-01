# Team Profile Generator

## Application

This application is a Node.js command-line driven application that takes in basic information about employees on a software engineering team. An HTML webpage that displays summaries for each person is then generated. That information provides a manager with a quick access to their employee's emails and GitHub profiles.

HTML Webpage image: ![image of home screen](./asset/TeamRosterTPG.png)

The application utilizes [Jest](https://www.npmjs.com/package/jest) for running the unit tests.
 

## Initiate Unit Testing

In order to make sure the code is maintainable, it is imperative that testing is rigorously performed on each of the classes. Each class must pass the testing beginning with the parent class, Employee, to ensure successful application functionality. The application utilizes [Jest](https://www.npmjs.com/package/jest) for running the unit tests.

Initiate testing by entering command> npm run test for the following classes :

├── __tests__/             //jest tests
│   ├── Employee.test.js
│   ├── Engineer.test.js
│   ├── Intern.test.js
│   └── Manager.test.js

## Unit Testing Results

Results of the testing is returned and should be confirmed that each test passed as shown below: 

![image of home screen](./asset/TestTPG.png)


## Invoke Application

The application utilizes [Inquirer](https://www.npmjs.com/package/inquirer) for collecting input from the user. The application is invoked by using the following command: node index.js.

At start of the application:

** user is prompted to enter the team manager’s name, employee ID, email address, and office number.

** user is presented a menu with the options to:
  1. add an engineer
  2. add an intern
  3. add a manager (if needed)
  4. select none to finish building the team

** user select option to add and follows the prompts to input requested information
** user is then taken back to the menu
** user selects to finish building team by selecting "none" in which the application will exit and HTML is generated as shown below:


The following link to project on github: https://github.com/CBCutGitHub/Team_Profile_Generator


## Mock-Up

The following image shows a mock-up of the generated HTML’s appearance and functionality:


├── dist/                  // rendered output (HTML) and CSS style sheet      
├── lib/                   // classes
├── src/                   // template helper code 
├── .gitignore             // indicates which folders and files Git should ignore
├── index.js               // runs the application
└── package.json           
```

** Important **: Make sure that you remove `dist` from the `.gitignore` file so that Git will track this folder and include it when you push up to your application's repository.

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
