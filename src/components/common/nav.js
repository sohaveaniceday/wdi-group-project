import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import Auth from '../../lib/auth'

class Nav extends React.Component {
  constructor() {
    super()

    //declares the state of the dropdown navbar as closed
    this.state = { navbarOpen: false }

    //bins the logout button and toggle for navbar dropdown
    this.logout = this.logout.bind(this)
    this.toggleNavbar = this.toggleNavbar.bind(this)
  }

  //when you click log out it triggers the logout function from Auth and pushes you to the main homepage
  logout() {
    Auth.logout()
    this.props.history.push('/')
  }

  //Wehn triggered will flip the navbarOpen state to the opposite result
  toggleNavbar() {
    this.setState({ navbarOpen: !this.state.navbarOpen })
  }

  //this function has prevProps as a default argument to check the previous prop of the page. This function closes the navbar if you change page
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({ navbarOpen: false })
    }
  }

  render() {
    return (
    //nav-bar burger checks if the navbarOpen is true and adds a class to trigger it to open. Triggers the toggleNavbar function when clicked
      <nav className="navbar is-dark">
        <div className="navbar-brand">
          {Auth.isAuthenticated() && <Link to="/newsfeed" className="navbar-item">Home</Link>}
          {!Auth.isAuthenticated() && <Link to="/" className="navbar-item">Home</Link>}
          <a role="button"
            className={`navbar-burger ${this.state.navbarOpen ? 'is-active' : ''}`}
            onClick={this.toggleNavbar}
            aria-label="menu" aria-expanded="false"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div className={`navbar-menu ${this.state.navbarOpen ? 'is-active' : ''}`}>
          <div className="navbar-end">
            {Auth.isAuthenticated() && <Link to="/profilepage" className="navbar-item">Profile</Link>}
            {Auth.isAuthenticated() && <Link to="/pinneditems" className="navbar-item">Pinned Items</Link>}
            {Auth.isAuthenticated() && <Link to="/review/new" className="navbar-item">New Review</Link>}
            {Auth.isAuthenticated() && <Link to="/recipe/new" className="navbar-item">New Recipe</Link>}
            {!Auth.isAuthenticated() && <Link to="/register" className="navbar-item">Register</Link>}
            {!Auth.isAuthenticated() && <Link to="/login" className="navbar-item">Login</Link>}
            {Auth.isAuthenticated() && <a className="navbar-item" onClick={this.logout}>Logout</a>}
          </div>
        </div>
      </nav>
    )
  }
}

export default withRouter(Nav)
