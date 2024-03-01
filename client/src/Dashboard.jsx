import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

function Dashboard() {
    const [suc, setSuc ] = useState()
    const navigate = useNavigate()
    axios.defaults.withCredentials = true;
    useEffect(()=> {
        axios.get('http://localhost:3001/dashboard')
        .then(res => {
            console.log("dashboad: " + res.data);
            if(res.data === "Success") {
                setSuc("Successded OK")
            } else {
                navigate('/')
            }
        }).catch(err => console.log(err))
    }, [])
    return ( 
        <div>
            <h2>Welcome to Croppinn</h2>
            <Link to="/register" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
            Sign Up
          </Link>
          <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
            Login
          </Link>
            <p>{suc}</p>
        </div>

     );
}

export default Dashboard;