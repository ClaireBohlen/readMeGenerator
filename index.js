//required packages 
var fs = require("fs");
var util = require("util");
var inquirer = require("inquirer");
const { title } = require("process");

const writeFileAsync = util.promisify(fs.writeFile);

//promt the questions for the readme using inquirer
// inquirer
//   .prompt([
  const questions = [
    {
      type: "input",
      message: "What is the title of your project?", //title //done 
      name: "title"
    },
    {
      type: "input",
      message: "What is your github user name", // github // done 
      name: "github"
    },
    {
      type: "input",
      message: "What is the link to your depolyed application", // link //done
      name: "link"
    },
    

    {
      type: "input",
      message: "Please write a description of your project?", //description // done
      name: "description"
    },
    {
      type: "input",
      message: "Add any extra table of contents lines.",  // table of contents  // done 
      name: "contents" 
    },
    {
      type: "input",
      message: "What are the steps required to install your project?", //installation //done
      name: "install"
    },
    {
      type: "input",
      message: "Provide instructions and examples for use. Include screenshots as needed.?", // Usage //done
      name: "instructions"
    },
    {
      type: "input",
      message: "If you created an application or package and would like other developers to contribute it, you will want to add guidelines for how to do so?", // Contribution!!!!!!!! //done 
      name: "guidelines"
    },
    {
      type: "input",
      message: "Go the extra mile and write tests for your application. Then provide examples on how to run them?", // tests
      name: "test"
    },

    {
      type: "input",
      message: "If you have any questions please feel free to reach out to me at?", // questions & contact information 
      name: "contact"
    },

    {
      name: "license",
      type: "list",
      message: "Type of License:",
      choices: ["BSD", "MIT", "GPL"], //done
      
    }]

     function writeTxtFile ({title, github, link, contents, description, instructions, install, guidelines, license, test, contact}) 
     {
    return `
**Title: ${title}

**Github UserName: ${github}

**Here is the link to my deployed application: ${link}

Table of Contents: 
* [Description] (#description)
* [Installation](#install)
* [Contribute](#guidlines)
* [License](#license)
* [Test](#test)
* [Contact](#contact)
* ${contents}

**Below is a description of my project: ${description}

**Instructions on usage: ${instructions}

**Here are the steps required to install your project; ${install}

**How to contribute: ${guidelines}
       
**License Info: ${license}
        
**Here are some example tests I've run ${test}
        
**You can contact me with any questions at ${contact}`

     }

    inquirer.prompt(questions)
    .then(function(data){
    return writeTxtFile(data)
    })
    .then(function(txtFile){
    return writeFileAsync("README.md", txtFile)
    })
    .then(function(){
    console.log("It worked!")
    })
    .catch(function(err){
    console.log(err)
    });
     
     
   
        
        
    

     
 






