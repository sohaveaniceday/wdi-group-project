import React from 'react'
import axios from 'axios'
import { Animated } from 'react-animated-css'

import Auth from '../../lib/auth'

class Login extends React.Component {
  constructor() {
    super()

    this.state = {
      data: { email: '', password: '' },
      error: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({ target: { name, value }}) {
    const data = {...this.state.data, [name]: value }
    const error = ''
    this.setState({ data, error })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post('api/login', this.state.data)
      .then(res => {
        Auth.setToken(res.data.token)
        this.props.history.push('/newsfeed')
      })
      .catch(() => {
        this.setState({ error: 'Invalid Credentials'})
      })
  }

  render() {
    return (
      <main className="section profile-page hero is-fullheight">
        <div className="input-max container margin-maker">
          <div className="input-max extra-padding has-background-white margin-topbottom curve-border">
            <form onSubmit={this.handleSubmit}>
              <h2 className="title">Login</h2>
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    className={`input ${this.state.error ? 'is-danger': ''}`}
                    name="email"
                    placeholder="Email"
                    value={this.state.data.email}
                    onChange={this.handleChange}

                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input
                    className={`input ${this.state.error ? 'is-danger': ''}`}
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={this.state.data.password}
                    onChange={this.handleChange}
                  />
                </div>
                {this.state.error && <small className="help is-danger">{this.state.error}</small>}
              </div>
              <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
                <button className="button pin-button is-rounded">Login</button>
              </Animated>
            </form>
          </div>
        </div>
      </main>
    )
  }
}

export default Login
