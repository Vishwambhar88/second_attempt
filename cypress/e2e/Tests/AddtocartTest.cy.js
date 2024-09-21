import { Homepage } from "../../Pages/Homepage";
const Homepageobj =new Homepage()
import Testdata from '../../fixtureS/Testdata.json'

describe('test automation',()=>
    {


    before(()=>
        {

        cy.login(Testdata.login.username,Testdata.login.password)
        })

      it('add to cart flow',()=> 
        {
        Homepageobj.search_product(Testdata.Product.productname)
        Homepageobj.addTocart()
        Homepageobj.verifysuccessmessage().should('contain',Testdata.message.Successmessage).and('contain',Testdata.Product.productname);


      })


    })
    