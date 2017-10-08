import React from 'react'
import {Router, Route, Redirect, hashHistory} from 'react-router'

import Todo from '../todo/todo'
import About from '../about/about'
import Contato from '../contato/contato'
import Desenvolvedor from '../desenvolvedor/desenvolvedor'


export default props => (
    <Router history={hashHistory}>
        <Route path='/todos' component={Todo} />
        <Route path='/about' component={About} />
        <Route path='/contato' component={Contato} />
        <Route path='/desenvolvedor' component={Desenvolvedor} />
        <Redirect from='*' to='/todos' />
    </Router>
)