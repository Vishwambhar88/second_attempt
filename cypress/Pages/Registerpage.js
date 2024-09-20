export class Registerpage{

weblocators={

    Firstname:'#input-firstname',
    lastname:'#input-lastname',
    email:'#input-email',
    Telephone:'#input-telephone',
    password:'#input-password',
    passwordconfirm:'#input-confirm',
    policycheck:'input[type="checkbox"]',
    continue_button:'input[value="Continue"]'

}

openurl(){
    cy.visit(Cypress.env('URL'))
}
EnterFirstname(fname){
    cy.get(this.weblocators.Firstname).type(fname)
}

EnterLatname(Lname){
    cy.get(this.weblocators.lastname).type(Lname)
}

EnterEmail(mail){
    cy.get(this.weblocators.email).type(mail)
}
EnterTelephone(phone){
    cy.get(this.weblocators.Telephone).type(phone)
}
EnterPassword(Pass){
    cy.get(this.weblocators.password).type(Pass)
    cy.get(this.weblocators.passwordconfirm).type(Pass)

}
Entercheckbox(){
    cy.get(this.weblocators.policycheck).check()
}

ClickonContinue(){
    cy.get(this.weblocators.continue_button).click()
}

}






