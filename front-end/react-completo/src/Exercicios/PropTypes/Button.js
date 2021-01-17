import React from 'react'
import PorpTypes from 'prop-types'

export default function Button(props) {
  return (
    <button 
      style={{
        width: `${props.width}px`,
        height: `${props.width / 3 }px`,
        margin: props.margin
      }} 
    >
      {props.children}
    </button>
  )
}

Button.defaultProps = {
  margin: '10px'
}

Button.PorpTypes = {
  width: PorpTypes.number.isRequired,
  margin: PorpTypes.string
}
