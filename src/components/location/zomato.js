import React from 'react'
import axios from 'axios'
import Map from '../location/map'


class Zomato extends React.Component {
  constructor() {
    super()

    this.state = {}
    this.mapCenter = { lat: 0, lng: 0 }

  }

  componentDidMount() {
    const { lat, lng } = this.mapCenter
    this.getLocationDetails(lat, lng , 1000)
  }

  getLocationDetails(lat, lon, radius) {
    axios.get('https://developers.zomato.com/api/v2.1/location_details', {
      params: { lat , lon, radius }
    })
      .then(res => this.setState({ location_details: res.data }))
  }

  handleClick({ lngLat: { lng, lat }}) {
    this.getLocationDetails(lat, lng , 1000)
  }

  render() {
    return (
      <div>
        {this.state.points &&
        <Map
          center={this.mapCenter}
          location_details={this.state.location_details}
        />
        }
      </div>
    )
  }
}

export default Zomato
