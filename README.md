# Webservices and Database Team Profile Generator

## Application

This application is a Node.js command-line driven application that takes user input of basic information about employees on a software engineering team, specifically the Webservices and Database Team. An HTML webpage that displays summaries for each person is then generated. That information provides a manager with a quick access to their employee's emails and GitHub profiles.

## Initiate Unit Testing

In order to make sure the code is maintainable, it is imperative that testing is rigorously performed on each of the classes. Each class must pass the testing beginning with the parent class, Employee, to ensure successful application functionality. The application utilizes [Jest](https://www.npmjs.com/package/jest) to run the unit tests.

Initiate testing by opening an integrated terminal, entering command> npm run test for the following classes :

├── __tests__/             //jest tests
│   ├── Employee.test.js
│   ├── Engineer.test.js
│   ├── Intern.test.js
│   └── Manager.test.js

## Unit Testing Results

Initialize testing by entering command: npm run test

Results of the testing is returned and should be confirmed that each test passed as shown below: 

![TestTPG](https://user-images.githubusercontent.com/95545346/156263648-4b4c46cb-d95f-41fd-9ef5-9a2ac66b73f0.PNG)

## Invoke Application!

The application utilizes [Inquirer](https://www.npmjs.com/package/inquirer) for the purpose of collecting input from the user. The application is invoked by using the following command: node index.js.

## User Input of Basic Information

At start of the application, this is an image of prompted response to enter basic information from the user:

![User_Info_Input_TPG](https://user-images.githubusercontent.com/95545346/156264139-960c3cd6-7968-48f9-9610-569d289c1acb.PNG)

** user is immediately prompted to enter the team manager’s name, employee ID, email address, and office number.

** user is presented a menu (navigated by using the up/down arrow keys) with the options to add and prompted to input requested information:
* add an engineer with properties and methods of name, id, email, github 
* add an intern with properties and methods of name, id, email, school
* add a manager (if needed) with properties of name, id, email, officeNumber
    
** user is then taken back to the menu to add each team members one at a time 

** user selects to finish building team by selecting "none" in which the application will display a the message "Your team has been built", prior to exiting and generating the HTML which can be view in a browser.

## Generated HTML

The following image shows the generated HTML of a Webservices and Database Team base on the user's input in building the team:

![TeamRosterTPG](https://user-images.githubusercontent.com/95545346/156263476-020c6fee-eca0-48cd-bfa6-dc4e966c88b4.PNG)

## Webservices and Database Team Profile Generator Video 

Click on video link https://drive.google.com/file/d/1LRxe3qDErFTDRRWkPNvsoJvfVB7cto0O/view


## Links, References and Resources

Link to project on github: https://github.com/CBCutGitHub/Team_Profile_Generator

W3schools https://www.w3schools.com

MDN Web Docs: https://developer.mozilla.org/en-US/

Google Searches via www.google.com






© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
