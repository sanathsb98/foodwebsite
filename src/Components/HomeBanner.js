import React from 'react'
import '../Components/HomeBanner.css'

function HomeBanner() {
  return (
    <div className="HomeBanner">
          <img className='home_banner_img' src='https://mir-s3-cdn-cf.behance.net/project_modules/1400/0f247675878285.5c5981682c181.jpg' alt='home_banner_img'/>
          <div className='home_banner_button'>
           Order Now
          </div>
    </div>
  )
}

export default HomeBanner