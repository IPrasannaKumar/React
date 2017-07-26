import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {Router, Route,IndexRoute ,hashHistory,  Switch } from 'react-router';
import Layout from './layout/Layout';
import Archievs from './layout/Archievs';
import Featured from './layout/Featured';
import Settings from './layout/Settings';


ReactDOM.render((
     <BrowserRouter history={hashHistory}>
          <Route exact path="/" component={Layout} >
          <IndexRoute path="/" component={Featured} ></IndexRoute>
         
            <Route path="archievs" component={Archievs} />
        
          </Route>
     </BrowserRouter>
     ),
     document.getElementById('app'));







     



