import React, { Component } from 'react'
import * as filestack from 'filestack-js'

const client = filestack.init('AYoVZLJZuQ2GNd6qd87SYz')

class Container extends Component {

  constructor() {
    super()
    this.state = {}
  }

  openModal() {
    const options = {
      fromSources: ['local_file_system','instagram','facebook'],
      onFileUploadFinished: photo => {
        console.log(photo.url) //This has to be stored in state, sending this.state.data.back to backend. Store that url in data object later//
      }
    }
    client.picker(options).open()
  }

  // setPicture() {
  //   this.uploadImage()
  //     .then(data => {
  //       const { url, handle } = data.filesUploaded[0]
  //       this.setState({ url })
  //       this.getMetadata(handle)
  //       console.log(JSON.stringify(data.filesUploaded))
  //     })
  //     .catch(err => console.log(err))
  // }
  //
  // getMetadata ()) => {
  //   const { client } = this.props
  //   client.metadata(handle)
  //     .then(metadata => this.setState({ metadata }))
  //     .catch(err => console.log(err))
  // }
  //
  // uploadImage = () => {
  //   const { client } = this.props
  //   return client.pick(
  //     {
  //       accept: 'image/*',
  //       maxSize: 1024 * 1024 * 2,
  //       transformOptions: {
  //         transformations: {
  //           rotate: true,
  //           circle: true,
  //           monochrome: true,
  //           sepia: true,
  //           crop: {
  //             aspectRatio: 16 / 9
  //           }
  //         }
  //       }
  //     }
  //   )
  // }
  render () {
    return(
      <button className={this.props.className} onClick={this.openModal}>Upload Image</button>
    )
  }
}
export default Container
