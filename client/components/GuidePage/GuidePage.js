import PropTypes from 'prop-types'
import React from 'react'
import ReactMarkdown from 'react-markdown'

import getGuideContent from '../../models/getGuideContent'
import getGuideTitle from '../../models/getGuideTitle'

const GuidePage = props => {
  const title = getGuideTitle(props.guide)
  const content = getGuideContent(props.guide)
  return (
    <div>
      <h1>{title}</h1>
      <ReactMarkdown source={content} />
    </div>
  )
}

GuidePage.propTypes = {
  guide: PropTypes.object.isRequired
}

export default GuidePage
