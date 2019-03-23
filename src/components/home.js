import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return(
    <section className="hero is-success is-fullheight-with-navbar">
      <div className="hero-body">
        <div className="container">
          <p className="title">Munch</p>
          <p className="subtitle">Munch App</p>
          <Link className="button is-info" to={'/register'}>Register</Link>
          <Link className="button is-info" to={'/login'}>Login</Link>
        </div>
      </div>
    </section>
  )
}

export default Home
