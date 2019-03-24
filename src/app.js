import React from 'react'
import ReactDOM from 'react-dom'
import 'bulma'
import './style.scss'

// import { BrowserRouter as Browser, Route, Switch } from 'react-router-dom'
import { BrowserRouter as Browser, Route, Switch } from 'react-router-dom'

import Home from './components/home'
import Register from './components/auth/register'
import Login from './components/auth/login'
import Nav from './components/common/nav'
import Footer from './components/common/Footer'
import Newsfeed from './components/users/newsFeed'
import RecipeShow from './components/recipes/recipeShow'
import RecipeNew from './components/recipes/recipeNew'
import RecipeEdit from './components/recipes/recipeEdit'
import ReviewShow from './components/reviews/reviewShow'
import ReviewNew from './components/reviews/reviewNew'
import ReviewEdit from './components/reviews/reviewEdit'
import SecureRoute from './components/common/secureRoute'
import ProfilePage from './components/users/profilePage'

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
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <SecureRoute path="/recipes/new" component={RecipeNew} />
            <SecureRoute path="/recipes/:id/edit" component={RecipeEdit} />
            <SecureRoute path="/recipes/:id" component={RecipeShow} />
            <SecureRoute path="/reviews/new" component={ReviewNew} />
            <SecureRoute path="/reviews/:id/edit" component={ReviewEdit} />
            <Route path="/reviews/:id" component={ReviewShow} />
            <Route path="/newsfeed" component={Newsfeed} />
            <Route path="/profilePage" component={ProfilePage} />
            <Route exact path="/" component={Home} />

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
