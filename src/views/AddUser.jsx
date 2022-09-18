import React from "react";

import '../App.css';
import '../css/Navbar.css'
import '../css/Form.css'
import Navbar from "../components/Navbar";
import Form from "../components/Form";
import CheckToken from "../components/CheckToken";



function AddUser() {

  return (
    <div className="Add">
        <CheckToken />
        <Navbar />
        <Form/>
    </div>
  )
}


export default AddUser;