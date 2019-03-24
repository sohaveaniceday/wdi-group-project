import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


class Profile extends React.Component {
  constructor() {
    super()

    this.setState = {}
  }

  componentDidMount() {
    axios.all([
      axios.get('/api/recipes'),
      axios.get('/api/reviews')
    ])
      .then(res => {
        const recipeFeed = res[0].data
        const reviewFeed = res[1].data
        this.setState({ recipeFeed, reviewFeed })
      })
  }

  render() {
    return (
      <main className="section">
        <div className="container">

          <div className="column is one-quarter">
            <div className="card-image">
              <figure className="image">
                <img src={this.recipeFeed.image} alt={this.recipeFeed.name} />
              </figure>
              <h4>Name</h4>
              <h4>Username</h4>
              <h4>email</h4>
              <h4></h4>
            </div>
          </div>

          <div className="column auto">
            <div>user top pins</div>
            <div>user lastest pins</div>
          </div>
          <div className="column is one-quarter">
            <div className="column is-one-quarter-desktop is-one-quarter-tablet"></div>
            {this.state.reviewFeed && this.state.reviewFeed.map(reviewFeed => (
              <div key={reviewFeed._id} className="column is-one-quarter-desktop is-one-quarter-tablet is-half-mobile">
                <Link to={`/reviews/${reviewFeed._id}`} >
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-header-title">{reviewFeed.restaurantName}</h4>
                    </div>
                    <div className="card-image">
                      <figure className="image">
                        <img src={reviewFeed.image} alt={reviewFeed.restaurantName} />
                      </figure>
                    </div>
                    <div className="card-content">
                      <h5 className="title is-6">{reviewFeed.reviewText}</h5>
                      <h6 className="subtitle is-6">{reviewFeed.user}</h6>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

        </div>
      </main>

    )
  }
}

export default Profile
