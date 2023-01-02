import React, { useEffect, useState } from 'react'
import '../Navbars/Footer.css'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import CopyrightIcon from '@mui/icons-material/Copyright';



function Footer({AdminValidate}) {
  console.log(`adminstatus:${AdminValidate}`)


 


  return (
    <div className="Footer">
       <div className='footer_left_content'>
         <CopyrightIcon/>
         <span >Designed and developed by sanath sb</span>
       </div>

       <div className='footer_middle_content'>
        
       </div>

       <div className='footer_right_content'>
        
     
       </div>
    </div>
  )
}

export default Footer