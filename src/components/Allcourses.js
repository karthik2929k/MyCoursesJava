import  { React, useState,useEffect} from "react";
import Course from "./Course";
import {Button} from "reactstrap";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from 'react-toastify';

const  Allcourses=()=>{
    useEffect(()=>{
        document.title="All Courses";    
        getAllCoursesfromserver();  
    },[])
    //func docall server
    const getAllCoursesfromserver=()=>{
        axios.get(`/courses`).then(
            (response)=>{           
                console.log(response.data);
                toast.success("Courses loaded");//,{position:"bottom-center"}
                setCourses(response.data);
            },
            (error)=>{
                console.log("Error");
                toast.error("server down",{position:"bottom-center"});
            }
        );
    };

    // useEffect(()=>{      
    //     getAllCoursesfromserver();
    // },[])

    const [courses,setCourses]=useState([])

    const updateCourse=(id)=>{
        setCourses(courses.filter((c)=>c.id!=id));
    }

    return(
        <div>           
            <h1>All Courses</h1>
            <p>List Of Courses All</p>
            {
                courses.length>0? courses.map((each)=>(
                    <Course key={each.id} course={each} update={updateCourse}/>
                )):"No Courses"
            }
        </div>
    );
}

export default Allcourses;