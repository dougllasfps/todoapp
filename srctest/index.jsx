import React from 'react';
import ReactDom from 'react-dom';
import Field from './Field'

import {combineReducers, createStore} from 'redux'
import {Provider} from 'react-redux'

const reducers = combineReducers({
    label: () => ({value: 'Label'})
})

ReactDom.render(
    <Provider store={createStore(reducers)}>
        <Field />
    </Provider>, 
    document.getElementById('app'))