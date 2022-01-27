class newPage{
    get browseurl(){return browser.url("https://demoqa.com/automation-practice-form")}
    get firstname(){return $('#firstName')}
    get lastname(){return $('#lastName')}
    get email(){return $('//input[@id="userEmail"]')}
    get MobileNumber(){return $('//input[@id="userNumber"]')}
    get subject(){return $('#subjectsInput')}

}
export default new newPage  