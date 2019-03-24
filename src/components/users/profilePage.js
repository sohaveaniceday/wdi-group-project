import React from 'react'
import axios from 'axios'


class ProfilePage extends React.Component {
  cosntructor() {
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
          </div>

        </div>
      </main>

    )
  }
}

export default ProfilePage
