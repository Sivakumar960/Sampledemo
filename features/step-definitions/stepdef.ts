import {Given,When,Then} from '@wdio/cucumber-framework'

Given(/^user is on home page$/,function () {
    console.log(browser.options)
    browser.url("https://google.com")   
    browser.maximizeWindow()
});
  
When(/^user is on registeration page$/, function () {
    browser.url("http://demo.guru99.com/test/newtours/") 
 });

Then(/^display the title of page$/,function(){
    console.log(browser.getTitle())
})

