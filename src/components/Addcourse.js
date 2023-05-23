import {React,useEffect,Fragment, useState} from "react";
import { Button, Form, FormGroup, Label, Input, FormText,Container } from 'reactstrap';
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from 'react-toastify';


const Addcourse=()=>{

    
    useEffect(()=>{
        document.title="ADD Course";
    },[])

    const[course,setCourse]=useState({});

    const handleForm=(e)=>{
        console.log(course);
        e.preventDefault();
        postDatatoServer(course);
    }

    //creating func to post data
    const postDatatoServer=(data)=>{
        axios.post(`/courses`,data).then(
            (response)=>{        
            console.log(response);
            console.log("success");
            toast.success("Course Added");
            setCourse({description:"",title:"",id:""});
        },
        (error)=>{
                console.log(error);
                console.log("error");
                toast.error("Something went wrong");
        }
        )
    }

    return(
        <Fragment>
            <h1 className="text-center">Fill Course Details</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <Label for="userId">Course Id</Label>
                    <Input type="text" placeholder="Enter Here" name="userId" id="userId" onChange={(e)=>{
                        setCourse({...course,id: e.target.value});
                    }}/>
                </FormGroup>

                <FormGroup>
                    <Label for="title">Course Title</Label>
                    <Input type="text" placeholder="Enter Title Here" name="title" id="title" onChange={(e)=>{
                        setCourse({...course,title: e.target.value});
                    }}/>
                </FormGroup>

                <FormGroup>
                    <Label for="textarea">Course Description</Label>
                    <Input type="textarea" placeholder="Enter Text Here" name="textarea" id="textarea" style={{height:200}} onChange={(e)=>{
                        setCourse({...course,description: e.target.value});
                    }}/>
                </FormGroup>

                <Container className="text-center">
                    <Button type="submit" color="success" style={{ margin: '.5rem' }}>Add Course</Button>
                    <Button type ="reset" color="warning ml-2" style={{ margin: '.5rem' }} >Clear</Button>
                </Container>
            </Form>


        </Fragment>

    );
}

export default Addcourse;