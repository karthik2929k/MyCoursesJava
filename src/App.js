import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Button,Container,Row,Col} from "reactstrap";
import { ToastContainer ,toast} from 'react-toastify';
//import Home from './components/Home';
import Course from './components/Course';
import Allcourses from './components/Allcourses';
import Addcourse from './components/Addcourse';
import Menus from './components/Menus';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,Routes
} from "react-router-dom";
import ContactMe from './components/Contactme';
import AboutMe from './components/Aboutme';
import Comments from './ccbppractice/Comments';

function App() {

  const onSave=()=>{
    toast.success("Wow it's so easy ",{
      position:"top-right",
    })
  }

  return( 
    <>
  <div className='jumbotron'>
    <Router>
    <ToastContainer/>
    <Container>
      <Header/>
      <Row>
        <Col md={4}><Menus /></Col>
        <Col md={8} className="jumbotron">
          <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/add-course' element={<Addcourse/>} exact/>
                <Route path='/view-course' element={<Allcourses/>} exact/>
                <Route path='/aboutme' element={<AboutMe/>} exact/>
                <Route path='/contactme' element={<ContactMe/>} exact/> 
                <Route path='/comments' element={<Comments/>} exact/>                          
          
          </Routes>        
        </Col>
      </Row>
    </Container>
    </Router>
   </div> 
  </>  
  ); 
}

export default App;
