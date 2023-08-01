//playright kewords import
const { Given, When, Then } = require('@cucumber/cucumber')

//assertion of expect
const { expect } = require('playwright')



Given('user added todo items with name {string}', async function () {
  // Write code here that turns the phrase above into concrete actions
  await page.goto("http://localhost:3000")
  });

When('i have deleted a single todo list with name {string}', async function () {
    // await page.type('.tras', )
    // await page.click('.todo-button')

  });  

Then('the todo {string} should be removed in the todo application', async function (string) {

  });