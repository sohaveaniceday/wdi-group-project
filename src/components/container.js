import React from 'react'


const Container = (props) => {
  return(
    <button className={props.className} onClick={props.openModal}>Upload Image</button>
  )
}
export default Container
