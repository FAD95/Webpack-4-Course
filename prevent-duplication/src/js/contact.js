import "../styles.css";
import React from 'react';
import {render} from 'react-dom'
import App from './components/app'
render (<App/>, document.getElementById('app'))
if(module.hot){
    module.hot.accept(App, ()=>{
        render (<App/>, document.getElementById('app'))
    })
}

