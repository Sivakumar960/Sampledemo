import { Given, When,  Then } from '@wdio/cucumber-framework';
import CartPage from '../pageobjects/itemcart'
import CheckOutPage from '../pageobjects/checkout'
import {config} from '../pageobjects/config'
import report from '@wdio/allure-reporter'

Given(/^user is on login page of SWAGLABS$/, async ()=> {
    await CartPage.gettingsite()
    await browser.maximizeWindow()
    await report.addStep('user is on login page')
});

When(/^user login with his username and (.+)$/, async (password)=> {
    await CartPage.giving_username(config.STANDARDUSER)
    await CartPage.giving_password(password)
    await CartPage.login_userclicking()
});

When(/^user is on shopping page and add an item to cart$/, async ()=> {
      await CartPage.adding_itemtocart()
});

When(/^user clicks on cart and checkout$/, async ()=> {
      await CheckOutPage.getting_carticon()
      await CheckOutPage.getting_checkout()
  });

When(/^user filled his (.+) and (.+) and (.+)$/, async (firstname, lastname, postalcode)=> {
     await CheckOutPage.giving_firstname(firstname)
     await CheckOutPage.giving_lastname(lastname)
     await CheckOutPage.giving_potalcode(postalcode)
});

When(/^user checked his order and finish the order$/, async ()=> {
    await CheckOutPage.giving_continue()
    await CheckOutPage.giving_finish()
});

Then(/^user should see the (.+)$/, async (message)=> {
     await CheckOutPage.getting_heading(message)
     await browser.pause(5000)
  });



