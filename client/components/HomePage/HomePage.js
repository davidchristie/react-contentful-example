import React from 'react'

import './HomePage.css'

const HomePage = () => (
  <div className='HomePage'>
    <video
      autoPlay
      loop
    >
      <source
        src='https://media.giphy.com/media/DZD6OikL9NHxK/giphy.mp4'
        type='video/mp4'
      />
    </video>
  </div>
)

export default HomePage
