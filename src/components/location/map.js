import React from 'react'
import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken = process.env.MAPBOX_ACCESS_TOKEN

class Map extends React.Component {
  constructor() {
    super()

    this.markers = []
  }

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapDiv,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: this.props.center,
      zoom: 0
    })
    this.map.on('click', this.props.onClick)
    this.setMarkers()
  }

  componentDidUpdate() {
    this.setMarkers()
  }

  setMarkers() {
    this.markers.forEach(marker => marker.remove())
    // this.markers = this.props.location.map(LocationDetails => {
    //   return new mapboxgl.Marker()
    //     .setLngLat({  lat: LocationDetails.lat, lng: LocationDetails.lon })
    //     .addTo(this.map)
    // })
  }

  render() {
    return(
      <div className="map" ref={el => this.mapDiv = el} />
    )
  }
}

export default Map
