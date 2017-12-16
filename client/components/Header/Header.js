import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'

const Header = () => (
  <header className='Header'>
    <Link to='/'>
      <strong>React Contentful Example</strong>
    </Link>
    <div className='right'>
      <a href='https://github.com/davidchristie/react-contentful-example'>
        GitHub
      </a>
    </div>
  </header>
)

export default Header
