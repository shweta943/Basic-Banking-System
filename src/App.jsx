import React from "react";
import Home from './Home.jsx';
import {Route, Switch} from "react-router-dom";
import View_Customers from './View_Customers.jsx';
import About_Page from './About_Page.jsx';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


const App = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Home} ></Route>
                <Route exact path="/view_customers" component={View_Customers} ></Route>
                <Route exact path="/about_page" component={About_Page} ></Route>
                <Route component={()=>{
                    return <h1>OOPS!!Page Not Found..</h1>
                }}></Route>


            </Switch>

        </>
    )

}
export default App;