import { Given, Then, When } from "@wdio/cucumber-framework";
import LoginInfo from "../pageobjects/LoginInfo";
import Mailing from "../pageobjects/Mailing";
import registration from "../pageobjects/registration";

Given(/^User is on Home page of new tours$/, async ()=> {
    await browser.url('https://demo.guru99.com/test/newtours/')
    await browser.maximizeWindow()
    await registration.registerlink.click()
});

When(/^user is on registration and enters contact information$/, async ()=> {
    await registration.FirstName.setValue("Williamson")
    await registration.LastName.setValue("Kane")
    await registration.Phone.setValue("4567891234")
    await registration.Email.setValue("abcdef.xyzs@gmail.com")
});

When(/^user enters mailing information$/, async ()=> {
    await Mailing.Address.setValue("4-45,abcd,efgh,ijkl")
    await Mailing.City.setValue("Ongole")
    await Mailing.State.setValue("AndhraPradesh")
    await Mailing.country.selectByVisibleText("INDIA")
});

Then(/^user enters user information$/, async ()=> {
    await LoginInfo.Username.setValue("abcdef.xyzs@gmail.com")
    await LoginInfo.Password.setValue("abc@1234")
    await LoginInfo.ConfirmPassword.setValue("abc@1234")
    await LoginInfo.submitbtn.click()
});



Given(/^user is on the login page$/, async ()=> {
    await LoginInfo.signlink.click()
});

When(/^user enters login details$/, async ()=> {
    await LoginInfo.loginname.setValue("abcdef.xyzs@gmail.com")
    await LoginInfo.loginpassword.setValue("abc@1234")
    await LoginInfo.loginbutton.click()
    await console.log(browser.getTitle())
});


  



