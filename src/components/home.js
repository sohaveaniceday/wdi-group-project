import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import { Redirect } from 'react-router'
import Auth from '../lib/auth'



class Home extends Component {
  render(){
    if(Auth.getToken()){
      return (<Redirect to="/newsfeed" />)
    } else {
      //       return (<section className="hero is-success is-fullheight-with-navbar">
      //         <div className="hero-body">
      //           <div className="container">
      //             <h1 className="title">Munch</h1>
      //             <h2 className="subtitle">Munch App</h2>
      //             <Link className="button is-info" to="/register">Register</Link>
      //             <Link className="button is-info" to="/login">Login</Link>
      //           </div>
      //
      //         </div>
      //       </section>)
      //     }
      //   }
      // }
      /////Testing///

      return (
        <section className="hero is-success is-fullheight-with-navbar">

          <div className = "hero-head">
            <header className="navbar">
              <div className="container">
                <div className="navbar-brand">
                  <a className="navbar-item" >
                    <img src="wdi-group-project/src/components/Assets/Munch_MVP_logo.png" alt="Logo"/>
                  </a>

                  <span className="navbar-burger burger" data-target="navbarMenuHeroC">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </div>
                <div id="navbarMenuHeroC" className="navbar-menu">
                  <div className="navbar-end">
                    <a className="navbar-item is-active">
                Home
                    </a>
                    <a className="navbar-item">
              Login
                    </a>
                    <a className="navbar-item">
              About
                    </a>
                    <span className="navbar-item">
                      <a className="button is-success is-inverted">
                        <span className="icon">
                          <i className="fab fa-github"></i>
                        </span>
                        <span>Register</span>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </header>
          </div>

          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title">
        Munch
              </h1>
              <h2 className="subtitle">
        What are you craving?
              </h2>
            </div>
          </div>

          <div className="hero-foot">
            <nav className="tabs is-boxed is-fullwidth">
              <div className="container">
                <ul>
                  <li className="is-active"><a>Our Team</a></li>
                  <li><a>Restaurants</a></li>
                  <li><a>Reviews</a></li>
                  <li><a>Recipes</a></li>
                  <li><a>Contact</a></li>
                  <li><a>Munch was created with ❤ by the Munch Bunch</a></li>
                </ul>
              </div>
            </nav>
          </div>
        </section>)

    }
  }
}
// <div className="hero-body">
//   <div className="container">
//     <h1 className="title">Munch</h1>
//     <h2 className="subtitle">Munch App</h2>
//     <Link className="button is-info" to="/register">Register</Link>
//     <Link className="button is-info" to="/login">Login</Link>
//   </div>
//
// </div>
// </section>)
// }
// }
// }


export default Home
