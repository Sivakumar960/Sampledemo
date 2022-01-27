import { config } from "./config"
import { providetext, providingclick } from "./sample"


class CartPage {
    get site(){return browser.url("https://www.saucedemo.com/")}
    get login_user(){return $('#user-name')}
    get login_pass(){return $(()=>document.getElementById('password'))}
    get click_logbtn(){return $('#login-button')}  
    get item_tocart(){return  $('//button[@id="add-to-cart-sauce-labs-backpack"]')}

    gettingsite(){
        return this.site
        
    }

    async giving_username(user_name:config.STANDARDUSER){
        await providetext(this.login_user,user_name)
    }

    async giving_password(user_pass){
        await providetext(this.login_pass,user_pass)
    }

    async login_userclicking(){
        await providingclick(this.click_logbtn)
    }

    async adding_itemtocart(){
        await providingclick(this.item_tocart)
    }
}
export default new CartPage