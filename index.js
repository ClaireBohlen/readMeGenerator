//required packages 
var fs = require("fs");
var util = require("util");
var inquirer = require("inquirer");
const { title } = require("process");

const appendFileAsync = util.promisify(fs.appendFile);
const readFileAsync = util.promisify(fs.readFile);
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
      message: "Enter in the table of contents",  // table of contents  // done 
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

     function writeTxtFile ({title, github, link, contents, description, instructions, install, guidlines, lisence, test, contact}) 
     {
    return `
    **Title: ${title}

    **Github UserName: ${github}

    **Here is the link to my deployed application: ${link}

    Table of Contents: ${contents}

    **Below is a description of my project: ${description}

    **Instructions on usage: ${instructions}

    **Here are the steps required to install your project; ${install}

    **How to contribute: ${guidlines}
       
    **License Info: ${lisence}
        
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
     
     
    // const finalTxt = writeTxtFile(answer)
    // fs.writeFile("README.md", finalTxt, function(err){
    // if( err ) return console.log("You done messed up.")
    // console.log("Who would have guessed this works!")
    // })
        
        
    

     
 

//    .then(function(answer) {
//     appendFileAsync("README.md", answer.contact +"\n")
    // appendFileAsync("README.md", + "**Here are some example tests I've run:",+ "\n",answer.test +"\n")
    // appendFileAsync("README.md", + "**License Info:",+ "\n",answer.license +"\n")
    // appendFileAsync("README.md", + "**How to contribute:",+ "\n",answer.guidelines +"\n")
    // appendFileAsync("README.md", + "What are the steps required to install your project?",+ "\n",answer.install +"\n")
    // appendFileAsync("README.md", + "**Instructions on usage:",+ "\n",answer.instructions +"\n")
    // appendFileAsync("README.md", + "**Below is a description of my project", + "\n", answer.description +"\n")
    // appendFileAsync("README.md", + "Table of Contents:", + "\n", answer.name +"\n") //come back to this one 
    // appendFileAsync("README.md", + "**Here is the link to my deployed application:",+ "\n",answer.link +"\n")
    // appendFileAsync("README.md", + "**Github UserName:",+ "\n", answer.github +"\n")
    // appendFileAsync("README.md", + "**Title:",  answer.title +"\n")
   

    // });




