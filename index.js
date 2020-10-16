//required packages 
var fs = require("fs");
var util = require("util");

//promt the questions for the readme using inquirer
//







// * Questions


inquirer
  .prompt([
    {
      type: "input",
      message: "What is the title of your project?", //title
      name: "title"
    },
    {
      type: "input",
      message: "Please write a description of your project?", //description
      name: "phone"
    },
    {
        type: "input",
        message: "Enter in the table of contents",  // table of contents 
        name: "email" 
      },
    {
      type: "input",
      message: "What are the steps required to install your project?", //installation 
      name: "bio"
    },
    {
      type: "input",
      message: "Provide instructions and examples for use. Include screenshots as needed.?", // Usage 
      name: "link"
    },
    {
      type: "input",
      message: "If you created an application or package and would like other developers to contribute it, you will want to add guidelines for how to do so", // Contribution!!!!!!!!
      name: "git"
    },
    {
      type: "input",
      message: "Go the extra mile and write tests for your application. Then provide examples on how to run them.", // tests
      name: "git"
      },
      {
      type: "input",
      message: "If you have any questions please feel free to reach out to me at", // questions & contact information 
      name: "git"
      }
     
   


  ])


// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
