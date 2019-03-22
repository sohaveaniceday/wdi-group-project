import React from 'react'
import ReactDOM from 'react-dom'
import 'bulma'
import './style.scss'

// import { BrowserRouter as Browser, Route, Switch } from 'react-router-dom'
import { BrowserRouter as Browser, Switch } from 'react-router-dom'

import Nav from './components/common/nav'
import Footer from './components/common/Footer'

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
