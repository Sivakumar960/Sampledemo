import {Given,When,Then} from '@wdio/cucumber-framework'

Given(/^user is on home page$/,async ()=> {
    await console.log(browser.options)   
    await browser.maximizeWindow()
    await browser.url("http://demo.guru99.com/test/newtours/") 
    await expect(browser).toHaveUrl("https://demo.guru99.com/test/newtours/")
    await expect(browser).toHaveUrlContaining("newtours")
});
  
When(/^user is on registeration page$/, async ()=> {
    await $('=REGISTER').click()
    await expect(browser).toHaveTitleContaining("Register: Mercury Tours")

  });

When(/^user enters his contact information$/, async ()=> {
    const eleme1=$('//input[@name="firstName"]')
    const eleme2=$('[name="lastName"]')
    const eleme3=$('//input[@name="phone"]')
    const eleme4=$('#userName')
    await expect(eleme1).toExist()
    await expect(eleme2).toBePresent()
    await expect(eleme3).toBeExisting()
    await expect(eleme4).toBeDisplayed()
    await eleme1.setValue("Maxwell")
    await eleme2.setValue("Glenn")
    await eleme3.setValue("4567891234")
    await eleme4.setValue("abc.def@gmail.com")
});
When(/^user enters his Mailing information$/, async ()=> {
    const eleme5=$('//input[@name="address1"]')
    const eleme6=$('[name="city"]')
    const eleme7=$('//input[@name="state"]')
    const eleme8=$('[name="postalCode"]')
    const eleme9=$('//select[@name="country"]')
    //await expect(eleme5).toHaveAttr('size','40')
    //await expect(eleme6).toHaveElementProperty('size',15)
    await expect(eleme5).toExist()
    await expect(eleme6).toBeEnabled()
    await console.log(await eleme7.isDisplayed())
    await console.log(await eleme8.isExisting())
   // await expect(eleme9).toBeSelected()
    await eleme5.setValue("hdjiff,jiudfui,fuiefjiefi,ffiif")
    await eleme6.setValue("Bangalore")
    await eleme7.setValue("Karnataka")
    await eleme8.setValue("12345")
    await eleme9.selectByVisibleText("INDIA")
});

When(/^user enters his user information$/, async ()=> {
    const eleme10=$('#email')
    await expect(eleme10).toHaveId('email')
    const eleme11=$('//input[@name="password"]')
    const eleme12=$('//input[@name="confirmPassword"]')
    const eleme13=$('[name="submit"]')
    await expect(eleme13).toBeClickable()
    await eleme10.setValue("abc.def@gmail.com")
    await eleme11.setValue("abc@1234")
    await eleme12.setValue("abc@1234")
    await eleme13.click()
  });

Then(/^display the title of page$/,function(){
    console.log(browser.getTitle())
})

