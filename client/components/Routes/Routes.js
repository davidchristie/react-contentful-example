import PropTypes from 'prop-types'
import React from 'react'
import { Route, Switch } from 'react-router-dom'

import getComponentUrl from '../../models/getComponentUrl'
import getEntryId from '../../models/getEntryId'
import getGuideUrl from '../../models/getGuideUrl'
import ComponentPage from '../ComponentPage'
import GuidePage from '../GuidePage'
import HomePage from '../HomePage'
import NotFoundPage from '../NotFoundPage'

const Routes = props => (
  <Switch>
    <Route component={HomePage} key='home' exact path='/' />
    {
      props.guides.map(guide => {
        return (
          <Route
            exact
            key={getEntryId(guide)}
            path={getGuideUrl(guide)}
            render={() => <GuidePage guide={guide} />}
          />
        )
      })
    }
    {
      props.components.map(component => {
        return (
          <Route
            exact
            key={getEntryId(component)}
            path={getComponentUrl(component)}
            render={() => <ComponentPage component={component} />}
          />
        )
      })
    }
    <Route component={NotFoundPage} path='*' />
  </Switch>
)

Routes.propTypes = {
  components: PropTypes.arrayOf(PropTypes.object).isRequired,
  guides: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Routes
