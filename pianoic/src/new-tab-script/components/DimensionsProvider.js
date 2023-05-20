import PropTypes from 'prop-types'
import React from 'react'
import Dimensions from 'react-dimensions'

class DimensionsProvider extends React.Component {
  render() {
    const { containerWidth, containerHeight, children } = this.props
    return (
      <div>
        {children({
          containerWidth,
          containerHeight,
        })}
      </div>
    )
  }
}

DimensionsProvider.propTypes = {
  containerWidth: PropTypes.number,
  containerHeight: PropTypes.number,
  children: PropTypes.func.isRequired,
}

export default Dimensions()(DimensionsProvider)
