import React from 'react'
import ReactDOM from 'react-dom'
import 'bulma'
import './style.scss'

// import axios from 'axios'

class App extends React.Component {
  // componentDidMount() {
  //   axios.get('/api/examples')
  //     .then(res => console.log(res.data))
  //     .catch(err => console.log(err))
  // }

  render() {
    return (
      <h1>Hello World</h1>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)