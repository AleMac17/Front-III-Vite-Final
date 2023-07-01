import { Switch, Route, Redirect } from 'react-router-dom'
import React from 'react'

import Home from 'src/Components/Home'
import Contact from 'src/Components/Contact'
import Details from 'src/Components/Detail'
import Featured from 'src/Components/Featured'

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/contact' component={Contact} />
        <Route path='/details/:id' component={Details} />
        <Route path='/featured' component={Featured} />
        <Route exact path='/'>
          <Redirect to='/home' />
        </Route>
      </Switch>
    </>
  )
}

export default Routes
