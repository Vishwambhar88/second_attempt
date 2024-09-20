import { Registerpage } from "../../Pages/Registerpage"
import registerdata from '../../fixtures/registerdata.json'
const registerobj =new Registerpage()
describe('test Automation',()=>{



it('registration flow',()=>{
 registerobj.openurl()
 registerobj.EnterFirstname(registerdata.Firstname)
 registerobj.EnterLatname(registerdata.Lastname)
 registerobj.EnterEmail(registerdata.Email)
 registerobj.EnterTelephone(registerdata.Telephone)
 registerobj.EnterPassword(registerdata.password)
 registerobj.Entercheckbox()
 registerobj.ClickonContinue()

})

})