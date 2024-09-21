export class Homepage{

    weblocators={

    search_input:'input[placeholder="Search"]',
    click_onsearchbtn:'.btn.btn-default.btn-lg',
    Product:'img[title="MacBook"]',
    add_to_cart:'body > div:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > button:nth-child(1) > i:nth-child(1)',
    successmessage:'div.alert.alert-success.alert-dismissible'
    }

    search_product(productname){
        cy.get(this.weblocators.search_input).type(productname)
        cy.get(this.weblocators.click_onsearchbtn).click()
    }

    addTocart(){
        cy.get(this.weblocators.add_to_cart).first().click()
    }

    verifysuccessmessage(){
        return cy.get(this.weblocators.successmessage)
    }







}