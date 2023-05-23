import React from "react";
import {Card,CardBody,CardTitle,CardSubtitle,CardText,CardFooter,Button,Container} from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from 'react-toastify';

const Course=({course,update})=>{


const deleteCourse=(id)=>{
    axios.delete(`/courses/${id}`).then(
        (response)=>{
            toast.success("Deleated");
            update(id);
        },
        (error)=>{
            toast.error("Some error caused !! ");
        }
    )
}

const onUpdatecourse=(id)=>{

}

    return(
        <Card className="text-center">
            <CardBody>
                <CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
                <CardText>It is my React Project abou courses application {course.description}</CardText>
                <Container className="text-center">
                    <Button style={{ margin: '.5rem' }} color="danger" onClick={()=>{
                        deleteCourse(course.id);
                    }}>Delete</Button>
                    <Button style={{ margin: '.5rem' }} color="warning" className="ml-3" onClick={()=>{
                        onUpdatecourse(course.id);
                    }}>Update</Button>
                </Container>
            </CardBody>
        </Card>
    );

}

export default Course;