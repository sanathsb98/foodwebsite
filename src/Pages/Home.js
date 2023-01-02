import React from 'react'
import HomeBanner from '../Components/HomeBanner'
import Products from '../Components/Products'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




import '../Pages/Home.css'

function Home() {
  return (
    
    <div className="Home">
  
        <div className='home_banner_component'>
           <HomeBanner/>
        </div>

        <Container className='home_products_container'>
       
                <Products/>
        </Container>
      

        
       
      
           

        
    </div>
  )
}

export default Home