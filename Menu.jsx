import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import About from './About';
import Context from './Context';
import Details from './Details';
import Edit from './Edit';
import NewFeed from './NewsFeed';


const Menu = () => {
    return (
        <>
            <Router>
                <div class="container mt-5">
                    <nav class="nav  bg-success text-white">
                        <Link to='/Context' class="nav-link active" aria-current="page" >HOME</Link>
                        <Link to="/NewsFeed"  class="nav-link active" aria-current="page" >NEWSfEED</Link>
                    </nav>
                    <Switch>
                        <Route path={"/NewsFeed"}>
                          <NewFeed/>

                        </Route>
                        <Route path={"/Details/:id"}>

                            <Details />
                        </Route>
                        
                        <Route path={"/Edit/:id"}>

                            <Edit/>
                        </Route>
                        <Route path={"/"}>

                            <Context />
                        </Route>
                        <Route path={"./About/:id"}>

                            <About/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </>

    );
}

export default Menu;