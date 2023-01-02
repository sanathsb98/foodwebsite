import React from 'react'
import '../Navbars/OfferNavbar.css'
import PlaceIcon from '@mui/icons-material/Place';


function OfferNavbar() {



  return (
    <div className='OfferNavbar'>
      <span className='location_acess_icon'><PlaceIcon/></span>
             <span className='location_acess_content'>Allow location access for local store menu and promos</span>
             <span className='location_allow_button'>Allow</span>
             
    </div>
  )
}

export default OfferNavbar