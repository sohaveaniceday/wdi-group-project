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




















































































//       return (
//         <section className="hero is-success is-fullheight-with-navbar">
//           <div className="hero-body">
//             <div className="container has-text-centered">
//               <h1 className="title">
//         Munch
//               </h1>
//               <h2 className="subtitle">
//         What are you craving?
//               </h2>
//               <div className="container">
//                 <figure className="image is-128x128">
//                   <img className="is-rounded" src="../assets/Munch_logo.png"/>
//                 </figure>
//               </div>
//               <Link className="button is-info" to="/register">Register</Link>
//               <Link className="button is-info" to="/login">Login</Link>
//             </div>
//           </div>
//         </section>)
//
//     }
//   }
// }

// export default Home
