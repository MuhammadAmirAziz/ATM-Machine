#! /usr/bin/env node
 
 import inquirer from "inquirer"
 import chalk, { Chalk } from "chalk"

 let myBalance = 100000;

 let myPin = 1234;

 let pinAnswer = await inquirer.prompt(
    [
        {
            name: "Qus1",
            message: chalk.blue("\n \tWellcome to My Bank Please Enter Your Pin\n"),
            type: "number",
        }
    ]
 );

 if(pinAnswer.Qus1 === myPin){
    console.log(chalk.green("\nCorrect Pin Code!\n"));

 let operatonAns = await inquirer.prompt(
    [
        {
            name:"operation",
            message:chalk.yellow("\nPlease Select Option\n"),
            type:"list",
            choices:["Withdraw","Check Balance"]
        }
    ]
 )

if (operatonAns.operation === "Withdraw"){
    let withdrawAns = await inquirer.prompt(
        [
            {
                name: "WithdrawMethod",
                message: chalk.yellow("\nSelect Your Wirhdraw Method\n"),
                type: "list",
                choices:["Fast Cash","Enter Amount"]
            }
        ]
    )
    if(withdrawAns.WithdrawMethod === "Fast Cash"){
        let fastcashAns = await inquirer.prompt(
            [
                {
                    name: "FastCash",
                    message: chalk.yellow("\nSelect Amount\n"),
                    type: "list",
                    choices:[1000,2000,5000,10000,50000,100000,200000]
                }
            ]
        )
        if(fastcashAns.FastCash > myBalance){
            console.log(chalk.red("Insufficient Balance"));
        }
        else{
            myBalance -= fastcashAns.FastCash
            console.log(chalk.green(`\n${fastcashAns.FastCash} withdraw Successfully\n`));
            console.log(chalk.green(`\nYour Remaning Balance is ${myBalance}\n`));
        }
    }

    else if(withdrawAns.WithdrawMethod === "Enter Amount"){
        let amountAns = await inquirer.prompt(
            [
                {
                    name: "Amount",
                    massage: chalk.yellow("\nEnter The Amount\n"),
                    type:"number",
                }
            ]
        )
        if(amountAns.Amount > myBalance){
            console.log(chalk.red("Insufficient Balance"));
        }
        else{
            myBalance -= amountAns.Amount
            console.log(chalk.green(`\n${amountAns.Amount} withdraw Successfully\n`));
            console.log(chalk.green(`\nYour Remaning Balance is ${myBalance}\n`));
        }
    
    }
}
else if (operatonAns.operation === "Check Balance"){
    console.log(chalk.green(`\n \tYour Current Balance is ${myBalance}\n`))
}   
}
 else{
    console.log(chalk.red("Incorrect Pin Code"))
 };
 