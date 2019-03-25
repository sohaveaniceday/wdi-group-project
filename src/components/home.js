import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router'
import Auth from '../lib/auth'



class Home extends Component {
  render(){
    if(Auth.getToken()){
      return (<Redirect to="/newsfeed" />)
    } else {
      return (
        <section className="hero is-success is-fullheight-with-navbar">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title">
        Munch
              </h1>
              <h2 className="subtitle">
        What are you craving?
              </h2>
              <Link className="button is-info" to="/register">Register</Link>
              <Link className="button is-info" to="/login">Login</Link>
            </div>
          </div>
        </section>)

    }
  }
}

export default Home
