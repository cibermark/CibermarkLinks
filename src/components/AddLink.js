import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Row, Col, Navbar, Container, Button, Form, FloatingLabel, Card, } from 'react-bootstrap'
import axios from 'axios'


export const AddLink = () => {
  const navigate = useNavigate()


    const [newLink, setNewLink] = useState({
        name: 'Nombre de Pagina',
        url:'',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGhu92jLbOItUPaxhDCYNGIcobAC1mrCCim0geo3-hVdhhS__xetUtI2Lb3IXEhJ7A84s&usqp=CAU',
        editable: false
        
    })

    const handleSubmit = (e) =>{

        e.preventDefault()
       
        axios.post('https://657b8f22394ca9e4af147e2f.mockapi.io/links', newLink)
        .then(res =>{
          alert(" update finished")
          navigate('/')
    
    
        })

       
    
    
    
      }


  return (
    <div className='container'>
        <Row className='mt-5'>
            <Col>

            <Navbar className="bg">
              <Container>
                <Navbar.Brand href="#">Agrega nuevo Articulo: <span className='text-danger'>{newLink.name}</span>  </Navbar.Brand>
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
        

        <Row className='justify-content-center mt-5'>
          <Col className='col-10 '>
         <Form onSubmit={handleSubmit}>
            <FloatingLabel controlId="floatingInput" label="Nombre de Pagina"className="mb-3" >
              <Form.Control type="text" placeholder="Jovenes Construyendo"  onChange={(e)=>{setNewLink({...newLink, name:e.target.value})}} maxLength={20}/>
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Direccion Web" className="mb-3">
              <Form.Control type="text" placeholder="www.google.com"  onChange={(e)=>{setNewLink({...newLink, url:e.target.value})}}/>
            </FloatingLabel>
  
            <FloatingLabel controlId="floatingPassword" label="Direccion  de Imagen" className="mb-3">
              <Form.Control type="text" placeholder="ingresa imagen" onChange={(e)=>{setNewLink({...newLink, img:e.target.value})}} />
            </FloatingLabel>
            <Container className='d-grid'><Button type='submit' className=''>Añadir</Button></Container>
         </Form>

          </Col>
        </Row>
        
        <Row className='justify-content-center' >

          {/* tarjeta */}

          <Col className='col-4 mt-3'
            
          
          >

            <Card border='light' bg='transparent' 
            
            style={{
              minHeight:'200px',
              background: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '16px',
              boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
              backdropFilter: 'blur(5px)',
              border: '1px solid rgba(255, 255, 255, 0.3)'
            }}
            
            >

                <Container className='p-3 text-center' >
                    <Card.Img src={newLink.img}  variant='top'
                    style={{height:'100px', width: '100px', borderRadius:'5px'} }
                  
                    
                    ></Card.Img>
                </Container>

                
                
                <Card.Body className='d-flex flex-column'>
                <Card.Title className='text-center text-light text-uppercase'>{newLink.name}</Card.Title>
                  <div className='d-flex justify-content-center gap-4 mt-2'>
                    <Button variant='primary' style={{minWidth:'90px'}} className='disabled' >Editar</Button>
                    <Button variant='danger' style={{minWidth:'90px'}} className='disabled'>Eliminar</Button>    
                  </div>
                </Card.Body>
                
            </Card>
          </Col>


          </Row>
    </div>
  )
}
