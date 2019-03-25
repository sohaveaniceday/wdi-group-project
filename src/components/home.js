import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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

return (<section className="hero is-success is-fullheight-with-navbar">
// Hero header-->
<div class = "hero-head">
<header class="navbar">
<div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" >
            <img src="wdi-group-project/src/components/Assets/Munch_MVP_logo.png" alt="Logo"/>
          </a>

          <span class="navbar-burger burger" data-target="navbarMenuHeroC">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroC" class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item is-active">
              Home
            </a>
            <a class="navbar-item">
              Login
            </a>
            <a class="navbar-item">
              About
            </a>
            <span class="navbar-item">
              <a class="button is-success is-inverted">
                <span class="icon">
                  <i class="fab fa-github"></i>
                </span>
                <span>Register</span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </header>
  </div>
//-- Hero content: will be in the middle -->
  <div class="hero-body">
    <div class="container has-text-centered">
      <h1 class="title">
        Munch
      </h1>
      <h2 class="subtitle">
        What are you craving?
      </h2>
    </div>
  </div>

  //-- Hero footer -->
  <div class="hero-foot">
    <nav class="tabs is-boxed is-fullwidth">
      <div class="container">
        <ul>
          <li class="is-active"><a>Our Team</a></li>
          <li><a>Restaurants</a></li>
          <li><a>Reviews</a></li>
          <li><a>Recipes</a></li>
          <li><a>Contact</a></li>
          <li><a>Munch was created with ❤ by the Munch Bunch</a></li>
        </ul>
      </div>
    </nav>
    </div>
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
