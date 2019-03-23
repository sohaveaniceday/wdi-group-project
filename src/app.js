import React from 'react'
import ReactDOM from 'react-dom'
import 'bulma'
import './style.scss'

import { BrowserRouter as Browser, Route, Switch } from 'react-router-dom'
// import { BrowserRouter as Browser, Switch } from 'react-router-dom'

import Nav from './components/common/nav'
import Footer from './components/common/Footer'
import RecipeShow from './components/recipes/recipeShow'
import RecipeNew from './components/recipes/recipeNew'
import RecipeEdit from './components/recipes/recipeEdit'
import SecureRoute from './components/common/secureRoute'

// import axios from 'axios'

class App extends React.Component {
  // componentDidMount() {
  //   axios.get('/api/examples')
  //     .then(res => console.log(res.data))
  //     .catch(err => console.log(err))
  // }

  render() {
    return (
      <Browser>
        <main>
          <Nav />
          <Switch>
            <SecureRoute path="/recipes/new" component={RecipeNew} />
            <SecureRoute path="/recipes/:id/edit" component={RecipeEdit} />
            <Route path="/recipes/:id" component={RecipeShow} />
          </Switch>
          <Footer />
        </main>
      </Browser>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
