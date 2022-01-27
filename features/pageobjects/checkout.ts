import { havingtext, providetext, providingclick } from "./sample"

class CheckOutPage{
    get clicking_cart(){return $('a.shopping_cart_link')}
    get clicking_checkout(){return $('//button[@id="checkout"]')}
    get checkout_firstname(){return $('#first-name')}
    get checkout_lastname(){return $('#last-name')}
    get checkout_postalcode(){return $('#postal-code')}
    get clicking_continueorder(){return $('[id="continue"]')}
    get clicking_finishorder(){return  $('[name="finish"]')}
    get checking_orderplaced(){return $('//h2')}
    

    async getting_carticon(){
        await providingclick(this.clicking_cart)
    }
    async getting_checkout(){
        await providingclick(this.clicking_checkout)
    }
    async giving_firstname(fname){
        await providetext(this.checkout_firstname,fname)
        
    }
    async giving_lastname(lname){
        await providetext(this.checkout_lastname,lname)
    }
    async giving_potalcode(postal){
        await providetext(this.checkout_postalcode,postal)
    }
    async giving_continue(){
        await providingclick(this.clicking_continueorder)
    }
    async giving_finish(){
        await providingclick(this.clicking_finishorder)
    }
    getting_heading(messageuser){
        return havingtext(this.checking_orderplaced,messageuser)
    }
   
}
export default new CheckOutPage

