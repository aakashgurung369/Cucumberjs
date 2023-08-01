//playright kewords import
const { Given, When, Then } = require('@cucumber/cucumber')

//assertion of expect
const { expect } = require('playwright')


Given('i user has opened the todo application', async function () {
  // Write code here that turns the phrase above into concrete actions
  await page.goto("http://localhost:3000")
});

When('i add a single todo list with name {string}',async function (todoName) {
  // Write code here that turns the phrase above into concrete actions
  // console.log(todoName);
  await page.type('.todo-input', todoName)
  await page.click('.todo-button')
});

Then('the todo {string} should be listed in the todo application',async function (todoName) {
  // Write code here that turns the phrase above into concrete actions
  const todoAddedItemLocater = await page.locator('.todo-list .todo');
});