import React from 'react'
import Landing from './01-Landing'
import Product from './02-Product-Page'
import Cart from './03-Cart'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Shipping from "./Shipping";
import Createaccount from "./Createaccount";
import Newlogin from "./Newlogin";
import CartTable from "./CartTable";
import Testcart from "./Testcart";
import PaymentPage from "./PaymentPage";
import Thankyou from "./Thankyou";






    const Routes = () => (
        <Router>
            <Switch>
                <Route exact path="/" component={Landing}/>
                <Route path="/Product" component={Product}/>
                <Route path="/Cart" component={CartTable}/>
                <Route path="/Shipping" component={Shipping}/>
                <Route path="/Createaccount" component={Createaccount}/>
                <Route path="/Newlogin" component={Newlogin}/>
                <Route path="/Cart-Table" component={CartTable}/>
                <Route path="/Testcart" component={Testcart}/>
                <Route path="/Payment" component={PaymentPage}/>
                <Route path="/Thankyou" component={Thankyou}/>
            </Switch>

        </Router>
    )

export default Routes


