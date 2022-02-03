import { Given, When } from "@wdio/cucumber-framework";
import newpage from "../pageobjects/newpage";
import formdata from "../datafiles/data.json"

Given(/^User is on Home page of practice form$/, async ()=> {
    await newpage.browseurl


    
});

When(/^user given the required details$/, async ()=> {

    await newpage.firstname.waitForEnabled({timeout:3000})
    await newpage.firstname.setValue(formdata.Firstname)
    await newpage.lastname.waitForEnabled({timeout:3000})
    await newpage.lastname.setValue(formdata.Lastname)
    await newpage.email.waitForEnabled({timeout:3000})
    await newpage.email.setValue(formdata.email)
    await newpage.MobileNumber.waitForEnabled({timeout:3000})
    await newpage.MobileNumber.setValue(formdata.Mobile)
    await newpage.subject.waitForExist({timeout:3000})
    await newpage.subject.setValue(formdata.Subject)
 
});
