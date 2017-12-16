import PropTypes from 'prop-types'
import React from 'react'
import { Route } from 'react-router-dom'

import getEntryId from '../../models/getEntryId'
import getGuideUrl from '../../models/getGuideUrl'
import GuidePage from '../GuidePage'

const GuideRoutes = props => props.guides.map(guide => {
  const id = getEntryId(guide)
  const url = getGuideUrl(guide)
  return (
    <Route
      exact
      key={id}
      path={url}
      render={() => <GuidePage guide={guide} />}
    />
  )
})

GuideRoutes.propTypes = {
  guides: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default GuideRoutes
