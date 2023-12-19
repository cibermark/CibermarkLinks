import React, {useState, useEffect, } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css"
import 'bootstrap/dist/js/bootstrap.bundle'
import {Row, Col, Navbar,Container, FloatingLabel, Form, Button, Card,  } from 'react-bootstrap'

import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';
import { useNavigate, useParams, Link } from 'react-router-dom';




export const EditLink = (props) => {




    const ids = useParams()
   

  // const [name, setName] = useState(ejemplo.name) 
  // const [img, setImg] = useState(ejemplo.img)
  // const [ url, setUrl] = useState(ejemplo.url)
  const [updated, setUpdated] = useState('')

  const navigate = useNavigate()
    

  useEffect(()=> {
   getLinks()}, [] )

   const url =  'https://657b8f22394ca9e4af147e2f.mockapi.io/links/' + ids.id

   console.log(url, ids.id)

  async function getLinks(){
    const response = await axios.get(`https://657b8f22394ca9e4af147e2f.mockapi.io/links/${ids.id}`)
    setUpdated(response.data)
  }

  console.log(updated)
  const handleSubmit = (e) =>{

    e.preventDefault()
   
    axios.put('https://657b8f22394ca9e4af147e2f.mockapi.io/links/' + ids.id, updated)
    .then(res =>{
      alert(" update finished")
      navigate('/')


    })



  }
    
    
  return (
    <div className='container '>


        <Row className='my-5'>
          <Col>

            <Navbar className="bg">
              <Container>
                <Navbar.Brand href="#">Edita Articulo: <span className='text-danger text-uppercase'>{updated.name}</span>  </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end gap-2">
                <Link to={'/'}><Button variant='warning' >regresar</Button></Link>
                  <Navbar.Text>
                    Signed in as: <a href="/">CIBERMARK</a>
                  </Navbar.Text>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Col>
        </Row>


        <Row className='mt-5'>
          <Col className='col-6'>
         <Form onSubmit={handleSubmit} >
            <FloatingLabel controlId="floatingInput" label="Nombre de Pagina"className="mb-3" >
              <Form.Control type="text" placeholder="Jovenes Construyendo"  onChange={(e)=>{setUpdated({...updated, name:e.target.value})}} maxLength={20}  value={updated.name}/>
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Direccion Web" className="mb-3">
              <Form.Control type="text" placeholder="www.google.com"  onChange={(e)=>{setUpdated({...updated, url:e.target.value})}}/>
            </FloatingLabel>
  
            <FloatingLabel controlId="floatingPassword" label="Direccion  de Imagen" className="mb-3">
              <Form.Control type="text" placeholder="https://www.google.com.mx/logos/doodles/2023/seasonal-holidays-2023-6753651837110165-6752733080612631-cst.gif" onChange={(e)=>{setUpdated({...updated, img:e.target.value})}} />
            </FloatingLabel>
            <div className='d-grid px-4'><Button type='submit' onSubmit={handleSubmit}>Guardar</Button></div>
         </Form>

          </Col>


          <Col>

          <Card border='light' bg='transparent'
          
          style={{
           
            background: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '16px',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(5px)',
            border: '1px solid rgba(255, 255, 255, 0.3)'
          }}
          
          >
           
               <Container className='p-3 text-center' >
                  <Card.Img src={updated.img}  variant='top'
                   style={{height:'100px', width: '100px', borderRadius:'5px'} }
                 
                  
                  ></Card.Img>''
               </Container>
         
              
               
              <Card.Body className='d-flex flex-column'>
              <Card.Title className='text-center text-light text-uppercase'>{updated.name}</Card.Title>
                <div className='d-flex justify-content-center gap-4 mt-2'>
                  <Button variant='primary' style={{minWidth:'90px'}}  onClick={()=> console.log(updated.id)} disabled>Editar</Button>
                  <Button variant='danger' style={{minWidth:'90px'}} onClick={()=> console.log(updated.id)} disabled>Eliminar</Button>    
                </div>
              </Card.Body>
              
          </Card>


           

          </Col>
        </Row>
        
    </div>
  )
}
