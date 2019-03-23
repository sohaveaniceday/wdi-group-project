import React from 'react'
import axios from 'axios'

class Newsfeed extends React.Component {
  constructor() {
    super()

    this.state = {}
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
          <div className="columns is-mobile is-multiline">
            <div className="column is-one-quarter-desktop is-one-quarter-tablet"></div>
            {this.state.reviewFeed && this.state.reviewFeed.map(reviewFeed => (
              <div key={reviewFeed._id} className="column is-one-quarter-desktop is-one-quarter-tablet is-half-mobile">
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
              </div>
            ))}
            {this.state.recipeFeed && this.state.recipeFeed.map(recipeFeed => (
              <div key={recipeFeed._id} className="column is-one-quarter-desktop is-one-quarter-tablet is-half-mobile">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-header-title">{recipeFeed.name}</h4>
                  </div>
                  <div className="card-image">
                    <figure className="image">
                      <img src={recipeFeed.image} alt={recipeFeed.name} />
                    </figure>
                  </div>
                  <div className="card-content">
                    <h5 className="title is-6">{recipeFeed.description}</h5>
                    <h6 className="subtitle is-6">{recipeFeed.user}</h6>
                  </div>
                </div>
              </div>
            ))}
            <div className="column is-one-quarter-desktop is-one-quarter-tablet"></div>
          </div>
        </div>
      </main>
    )
  }
}

export default Newsfeed
