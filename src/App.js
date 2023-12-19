import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Links } from './components/Links';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css"
import { EditLink } from './components/EditLink';
import { AddLink } from './components/AddLink';




function App() {




  return (
      <Router>
        <Routes>
          <Route path='/' element={<Links></Links>}></Route>
          <Route path='/edit/:id' element ={<EditLink/>}/>
          <Route path='/addLink' element={<AddLink></AddLink>}></Route>
        </Routes>
      </Router>
  );
}

export default App;
