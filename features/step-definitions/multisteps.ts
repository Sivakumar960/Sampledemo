import { Given, Then } from '@wdio/cucumber-framework';

Given(/^User opens the url$/, async ()=> {
    await browser.url('/')
});

Then(/^display title of the page$/, async ()=> {
     console.log(await browser.getTitle())
});
