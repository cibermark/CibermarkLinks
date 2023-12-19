import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {CardLink} from './CardLink'
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css"
import { Button, Col, Container, Row } from 'react-bootstrap'
import 'bootstrap/dist/js/bootstrap.bundle'
import {Link} from'react-router-dom'





export const Links = () => {

  // api

    const url = 'https://657b8f22394ca9e4af147e2f.mockapi.io/links'

    // state para los links
    const [links, setLinks] = useState([])



    // useEffect para renderizar 


    useEffect(() => {getLinks()},[])

    // funcion para obtener respuesta de links

    async function getLinks() {
      const response = await axios.get(url);
      setLinks(response.data)
    }

    console.log(links)


 
   
  return (
    <div className='container mt-3'>
        <Row className='my-5 '>
          <Col >
            <Container className='d-flex justify-content-end align-items-center '>
            
               <span className='me-auto display-3 text-light '>CIBERMARK LINKS</span>
        

               <div > <Link to={'/addLink'}><Button variant='outline-light ' size='lg'>Agregar </Button></Link></div>
              
            </Container>
          </Col>
        </Row>     

        <Row>
          

            {links.map((link, index) => {
            
             return <Col className='col-3 mb-2' key={index} ><CardLink link={link} key={index}/>
            </Col>
            
            })}
        
        </Row>
         
        
      
    </div>
    
  )
}
