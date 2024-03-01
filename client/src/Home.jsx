import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'
function Home() {
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    return (
        <div className=" justify-content-center ">
            <h1 className="d-flex justify-content-center ">Welcome to Croppinn</h1>
            <div className="d-flex align-items-center">
                <h2>Add Image:</h2>
                <input type="file" />
                <img src={file} />
            </div>
            {/* <Link to="/login" className="btn btn-default border w-10 bg-light rounded-0 text-decoration-none">
                    Logout
                </Link> */}

        </div>
    );
}

export default Home;