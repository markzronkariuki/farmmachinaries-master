import axios from "axios"
import React from "react";
import { useState } from "react";

import { Link, useNavigate} from "react-router-dom"
import Footer from "./Footer";

const Signincomponet = () => {
      let navigate = useNavigate();

// declare the two state here 
const[email,setEmail]=useState("")
const[password,setPassword]=useState("")

//  three states for posting data 
const[loading,setLoading]=useState("")
const[success,setSuccess]=useState("")
const[error,setError]=useState("")

// funtion to hundlr submit 
const hundlesubmit=async(e)=>{
    e.preventDefault()
    setLoading("please wait...")
    // create an envelot to store data /
    const formdata = new FormData()
    // append add 
    formdata.append("email",email)
    formdata.append("password",password)
    try {
        const response=await axios.post("http://markhiggs.alwaysdata.net/api/signin",formdata)
        setSuccess(response.data.message)
        setLoading("")
        // if login/signin is successful we save user to lacal storage 
        // NB:redirect user to homepage 
        if(response.data.user){
            // loginsuccess 
            localStorage.setItem("user",JSON.stringify(response.data.user))
            // re direct the user to the homepage 
             navigate("/")                                                                       

        }
        else{
            // ligin failed 

        }
    } catch (error) {
        
    }


}
    return (
        <div className="row mt-3 justify-content-center" style={{ backgroundColor: "#d3aaeeff", minHeight: "100vh" }}>
            <div className="col-md-6 card shadow p-4">
                 <div className="text-center mb-3">
    <img
      src="https://cdn-icons-png.flaticon.com/512/295/295128.png"
      alt="signin"
      style={{ width: "100px", height: "100px", objectFit: "cover" }}
    />
  </div>
                <h3 style={{ color: "#6a11cb" }}>SIGNIN 🔑💻</h3>
                <marquee behavior="scroll" direction="left" scrollamount="5 ">
     <h4 style={{ color: "#6a11cb" }}> Welcome to our Signin Page 🚀 Access your account now!</h4>
</marquee>
                {/* bind the variables ? */}
                <h2 className="text-warning">{loading}</h2>
                <h2 className="text-success">{success}</h2>
                <h2 className="text-danger">{error}</h2>
            <form action="" onSubmit={hundlesubmit}>
                <input type="email"  className="form-control mb-3 shadow-sm border-0 py-2 px-3 rounded-3" placeholder=" 📧Enter email " onChange={(e)=>setEmail(e.target.value)}/><br />
                <input type="password" className="form-control mb-3 shadow-sm border-0 py-2 px-3 rounded-3" placeholder=" 🔐Enter password" onChange={(e)=>setPassword(e.target.value)} /><br />
                <button type="submit" className="btn btn-outline-primary  w-100 py-2 fw-bold" style={{ backgroundColor: "#6a11cb", color: "white" }} disabled={loading !== ""}> 🔑signin</button><br /> <br />
                <button className="btn btn-outline-primary w-100 py-2">
          <img
            src="https://developers.google.com/identity/images/g-logo.png"
            alt="google"
            style={{ width: "20px", marginRight: "10px" }}
          />
          Sign in with Google
        </button><br />
                <p>Don't have an account?<Link to="/signup"> 🆕signup</Link></p>
            </form>
            </div>
            <Footer/>
        </div>
    )
    
    
            
    

}
export default Signincomponet