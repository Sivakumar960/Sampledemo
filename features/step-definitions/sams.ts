import { Given, When, Then } from "@wdio/cucumber-framework";

Given(/^user is on login page$/, async ()=> {
    browser.url("https://the-internet.herokuapp.com/login")
});

When(/^User enters (.+) and (.+)$/, async (username, password)=> {
    try {
        await $('#username').setValue(username)
    } catch (error) {
        throw error
        
    }
    await $('#password').setValue(password)
    await $('button[type="submit"]').click()
});

Then(/^User should see the message$/, async () =>{
    await browser.pause(5000)
    console.log("Success")
});