import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';


const App = () => (
    <BrowserRouter>
        <Container maxidth="lg">
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
            </Switch> 
        </Container>
     </BrowserRouter>
);

export default App;