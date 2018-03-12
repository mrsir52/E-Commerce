import React from 'react'
import Landing from './01-Landing'
import Product from './02-Product-Page'
import Cart from './03-Cart'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'






    const Routes = () => (
        <Router>
            <Switch>
                <Route exact path="/" component={Landing}/>
                <Route path="/Product" component={Product}/>
                <Route path="/Cart" component={Cart}/>
            </Switch>

        </Router>
    )

export default Routes


