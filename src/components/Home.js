//import React from "react";
//import {Container,Button} from "reactstrap";
//import Jumbotron from 'react-bootstrap/Jumbotron';
import {React,useEffect} from 'react';
import {Container,Jumbotron,Button} from "reactstrap";

function Home(){
    useEffect(()=>{
        document.title="Home || My App";
    },[])
    return (
    <div >   
            <h1>Project fro KARTHIK</h1>
            <p>I am Learning React and doiing a project</p>
            <Container>
                <Button color="primary">MY Button</Button>
            </Container>
        
    </div>
    );
}
     
export default Home;