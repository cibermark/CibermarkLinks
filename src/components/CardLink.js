import React from 'react'
import { Button, Card, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css"
import 'bootstrap/dist/js/bootstrap.bundle'
import { Link,  } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export const CardLink = ({link}) => {

  const navigation = useNavigate()

  function handleDelete(id){
    const confirm =  window.confirm('Esta seguro de eliminar este Link?');
    if(confirm){

      axios.delete('https://657b8f22394ca9e4af147e2f.mockapi.io/links/' + id)
        .then(resp =>{
          alert('Link Eliminado con exito')
          navigation('/')
          
          window.location.reload('true')

        })
    }

}


  return (

       
          <Card border='light' bg='transparent'
          
          style={{
           
            background: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '16px',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(5px)',
            border: '1px solid rgba(255, 255, 255, 0.3)'
          }}
          
          >
           <Link to={link.url} target='_blank'>
               <Container className='p-3 text-center' >
                  <Card.Img src={link.img}  variant='top'
                   style={{height:'100px', width: '100px', borderRadius:'5px'} }
                 
                  
                  ></Card.Img>
               </Container>
           </Link>
              
               
              <Card.Body className='d-flex flex-column'>
              <Card.Title className='text-center text-light text-uppercase' style={{minHeight:'80px'}}>{link.name}</Card.Title>
                <div className='d-flex justify-content-center gap-4 mt-2'>
                  <Link to={`/edit/${link.id}`}><Button variant='primary' style={{minWidth:'90px'}}  onClick={()=> console.log(link.id)}>Editar</Button></Link>
                  <Button variant='danger' style={{minWidth:'90px'}} onClick={()=> handleDelete(link.id)}>Eliminar</Button>    
                </div>
              </Card.Body>
              
          </Card>



      
 
  )
}
