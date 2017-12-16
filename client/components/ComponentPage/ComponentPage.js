import PropTypes from 'prop-types'
import React from 'react'
import ReactMarkdown from 'react-markdown'

import getComponentDescription from '../../models/getComponentDescription'
import getComponentImage from '../../models/getComponentImage'
import getComponentName from '../../models/getComponentName'
import getImageUrl from '../../models/getImageUrl'
import './ComponentPage.css'

const ComponentPage = props => {
  const { component } = props
  const name = getComponentName(component)
  const description = getComponentDescription(component)
  const image = getComponentImage(component)
  return (
    <div className='ComponentPage'>
      <h1>{name}</h1>
      {
        image
          ? <img className='image' src={getImageUrl(image) + '?w=400'} />
          : null
      }
      <ReactMarkdown source={description} />
    </div>
  )
}

ComponentPage.propTypes = {
  component: PropTypes.object.isRequired
}

export default ComponentPage
