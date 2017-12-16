import PropTypes from 'prop-types'
import React from 'react'
import { NavLink } from 'react-router-dom'

import getComponentName from '../../models/getComponentName'
import getComponentUrl from '../../models/getComponentUrl'
import getEntryId from '../../models/getEntryId'
import getGuideTitle from '../../models/getGuideTitle'
import getGuideUrl from '../../models/getGuideUrl'
import './Sidebar.css'

const Sidebar = props => (
  <nav className='Sidebar'>
    {
      props.guides.map(guide => {
        return (
          <NavLink exact key={getEntryId(guide)} to={getGuideUrl(guide)}>
            {getGuideTitle(guide)}
          </NavLink>
        )
      })
    }
    <hr />
    <div>Components</div>
    <ul>
      {
        props.components.map(component => {
          return (
            <li key={getEntryId(component)}>
              <NavLink exact to={getComponentUrl(component)}>
                {getComponentName(component)}
              </NavLink>
            </li>
          )
        })
      }
    </ul>
  </nav >
)

Sidebar.propTypes = {
  components: PropTypes.arrayOf(PropTypes.object).isRequired,
  guides: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Sidebar
