import React from 'react'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'
import { Animated } from 'react-animated-css'
import Auth from '../lib/auth'

const Home = () => {

  if(Auth.getToken()){
    return (<Redirect to="/newsfeed" />)
  } else {
    return (
      <section className="hero is-fullheight-with-navbar home">
        <div className="container home-message has-text-centered">
          <p className="title is-2 has-text-black">Munch</p>
          <p className="subtitle has-text-black">What are you craving?</p>
          <div>
            <Animated
              animationIn="bounceInLeft"
              animationOut="fadeOut"
              isVisible={true}
            >
              <Link
                to="/register"
                className="button pin-button is-rounded is-large"
              >
                Register
              </Link>
            </Animated>
            <br />
            <br />
            <span>
              Already registered?
              <Link to="/login">&nbsp;Login here.</Link>
            </span>
          </div>
        </div>
      </section>
    );
  }
}

export default Home