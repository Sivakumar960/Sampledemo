import { ChainablePromiseElement } from 'webdriverio';
import report from '@wdio/allure-reporter'

export const providetext=async(element:ChainablePromiseElement<Promise<WebdriverIO.Element>>,text)=>{
    await element.setValue(text)
    await report.addStep(`User entered ${text}`)
    await browser.takeScreenshot()
}


export const providingclick=async(elem:ChainablePromiseElement<Promise<WebdriverIO.Element>>)=>{
    await elem.click()
    await report.addStep(`user clicked on ${elem.selector}`)
    await browser.takeScreenshot()
}

export const havingtext=async(element:ChainablePromiseElement<Promise<WebdriverIO.Element>>,expectedtext)=>{
    await expect(element).toHaveText(expectedtext)
    report.addStep(`checking ${element.selector} with ${expectedtext} `)
    await browser.takeScreenshot()

}
