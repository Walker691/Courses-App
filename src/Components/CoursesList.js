import React from 'react';
import {Link } from 'react-router-dom'
import '../styles/styles.css';
const CoursesList=()=>{
    return(
    <div>
     
    
    <table>
    <tr>
 <th><h2>No</h2></th>
<th><h2>Course Name</h2></th>
    </tr>
    
    <tr>
        <td>1</td>
        <td>
        <h2> <Link to="/coursedetail/1">The Complete Web Development Tutorial Using React and Redux </Link></h2>
        </td>
     </tr>
        <tr>
           <td>2</td>
           <td>
           <h2><Link to="/coursedetail/2">Deep Learning A-Z™: Hands-On Artificial Neural Networks</Link></h2>
           </td> 
        </tr>
      <tr>
          <td>3</td>
          <td>
          <h2><Link to="/coursedetail/3">Unreal Engine 5-Learn to create Professional Cinematics</Link></h2>
          </td>
      </tr>
       <tr>
           <td>4</td>
           <td>
           <h2><Link to="/coursedetail/4">Learn C++ Programming -Beginner to Advance- Deep Dive in C++</Link></h2>   
           </td>
       </tr>
    <tr>
        <td>5</td>
        <td>
        <h2><Link to="/coursedetail/5">Maya for Beginners: Complete Guide to 3D Animation in Maya</Link></h2>   
        </td>
    </tr>
        <tr>
            <td>6</td>
            <td>
            <h2><Link to="/coursedetail/6">Java Programming from Zero to Hero : Java Completed </Link></h2>
            </td>
        </tr>
        
       <tr>
           <td>7</td>
           <td>
           <h2><Link to="/coursedetail/7">The Complete 2021 Web Development Bootcamp</Link></h2>   
           </td>
       </tr>
        <tr>
            <td>8</td>
            <td>
            <h2><Link to="/coursedetail/8">Machine Learning A-Z™: Hands-On Python & R In Data Science</Link></h2>    
            </td>
        </tr>
        <tr>
            <td>9</td>
            <td>
            <h2><Link to="/coursedetail/9">Building Perceptive AI in Unreal Engine</Link></h2>
            </td>
        </tr>
        <tr>
        <td>10</td>
        <td>
        <h2><Link to="/coursedetail/10">8 Super-Powers to Transform your Life</Link></h2>
        </td>
        </tr>
    </table>
     </div>
     );
};

export default CoursesList;