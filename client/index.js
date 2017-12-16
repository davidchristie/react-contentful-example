import React from 'react'
import ReactDOM from 'react-dom'

import content from '../content'
import App from './components/App'
import './index.css'

ReactDOM.render(<App content={content} />, document.getElementById('root'))
