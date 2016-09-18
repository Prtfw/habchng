import React from 'react'
import {Route, IndexRoute} from 'react-router'

import App from './app'
import Cur_challenge from './compos/cur_challenge'
import New_challenge from './compos/new_challenge'


//console.log(Postnew)
const hey = () => {
    return <div> hey </div>
}

export default (    //pass to app as children

    <Route path='/' component={App} >
    <IndexRoute component ={App} /> 
    <Route path='/new' component={New_challenge} /> 
    <Route path='/challenge' component={Cur_challenge} />

    </Route>
    )
    
