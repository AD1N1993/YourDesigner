import React from 'react';
import s from './App.module.scss';
import './App.module.scss';
import {Redirect, Route, Switch} from 'react-router-dom';
import {Coffee} from "./Coffee/Coffee";
import {Portfolio} from "./Portfolio/Portfolio";
import {Garlic} from "./Garlic/Garlic";
import {Screens} from "./Screens/Screens";
import {Lama} from "./Lama/Lama";

function App() {
    return (
        <div className={s.App}>
            <Switch>
                <Route exact={true} path={["/YourDesigner","/"]} render={() => <Portfolio/>}/>
                <Route path={"/coffee"} render={() => <Coffee/>}/>
                <Route path={"/garlic"} render={() => <Garlic/>}/>
                <Route path={"/screens"} render={() => <Screens/>}/>
                <Route path={"/lama"} render={() => <Lama/>}/>
                <Route path={"/404"} render={() => <h1>Error 404. Page not found.</h1>}/>
                <Redirect from={"*"} to={"/404"}/>
            </Switch>

        </div>
    );
}

export default App;
