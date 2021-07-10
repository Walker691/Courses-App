import React from 'react';
import data from '../content'  
import {useParams} from 'react-router-dom'
import '../styles/styles.css';
 
const CourseDescription=()=>{

    const {id } = useParams();
    return(
        <div>

 <div className="heading-cont"> <h1>{data[id-1].heading}</h1></div>
  <div className="subheading-container"><div><h4>{data[id-1].subheading}</h4></div></div>
 <div className="CreatedBy"> <div><h2>{data[id-1].createdBy}</h2></div><br /> </div><br />
  
  <div className="requirements"> <h3>Requirements--{data[id-1].Requirements}</h3> </div>
  <h1 align="center">Reqirements--</h1>
 <div className="para"> <h3>{data[id-1].description}</h3> </div>
  
    </div>
    );
};

export default CourseDescription;