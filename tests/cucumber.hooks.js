const { BeforeAll, Before, AfterAll, After, setDefaultTimeout } = require("@cucumber/cucumber")
const { chromium } = require("playwright");
setDefaultTimeout(130000);

BeforeAll(async function () {
    // console.log("this is before all hooks")

    global.browser = await chromium.launch({
    headless: false,
    slowMo: 1000,
    })
})

Before(async function () {
//     console.log("this is before hooks")

       global.context = await global.browser.newContext();
       global.page = await global.context.newPage();
})

After(async function () {
       await global.page.close();
       await global.context.close();

})

AfterAll(async function () {
    await global.browser.close();
})
