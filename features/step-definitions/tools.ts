import { Given, Then, When } from "@wdio/cucumber-framework";
import { findConfigFile } from "typescript";

Given(/^User is on toolsqa page$/, async ()=> {
     await browser.url("https://demoqa.com/automation-practice-form")
     await browser.maximizeWindow()
  });

When(/^uer enters his details$/, async ()=> {
    await console.log(browser.isLoading())
    try {
        await $('#firstName').waitForExist({timeout:5000})
        await $('#firstName').setValue("Warner")
        await $('#lastName').setValue("David")
        await $('#userEmail').setValue("abcdef.xsaqwe@gmail.com")
    } catch (error) {
        throw error
    }
  });

Then(/^user should see the success message$/, async ()=> {
    await console.log("Successfully Completed")
});
