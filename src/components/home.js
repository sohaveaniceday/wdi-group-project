import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import { Redirect } from 'react-router'
import Auth from '../lib/auth'
// import {Animated} from 'react-animated-css'
class Home extends Component {
  render(){
    if(Auth.getToken()){
      return (<Redirect to="/newsfeed" />)
    } else {
      return (
        <section className="hero is-white is-fullheight">
          {/*Hero content: will be in the middle*/}
          <div className="hero-body">
            {/*}<div className="container>"
              <p clasName= "img is-128x128">
                <img className="is-rounded" src="../assets/Munch_logo.png"/>
              </p>*/}
            <div className="container has-text-centered">
              <h1 className="subtitle is-uppercase has-text-weight-bold has-text-black">
        What are you craving?
              </h1>
            </div>
          </div>
        </section>)
    }
  }
}
export default Home
