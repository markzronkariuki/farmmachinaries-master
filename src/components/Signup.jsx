import axios from "axios"
import React,{useState} from "react"
import { Link } from "react-router-dom"
import Footer from "./Footer"

const Signupcomponent=()=>
{
    // declare our state here 
    const[username, setUsername]=useState("")
    const[email,setEmail]=useState("")
    const[phone,setPhone]=useState("")
    const[password,setPassword]=useState("")
    const[loading,setloading]=useState("")
    const[success,setsuccess]=useState("")
    const[error,seterror]=useState("")
    const[strength,setStrength]= useState("") 
    const [confirmPassword, setConfirmPassword] = useState("")

    // funtion to hundle submit
    const handlesubmit = async (e)=>{
        e.preventDefault()
        setloading("Please wait...")
        if (password !== confirmPassword) { seterror("Passwords do not match")}
        // crete empty digital envelop to store user inputs /
        const formdata= new FormData()
        // append/ add /
        formdata.append("username",username)
        formdata.append("email",email)
        formdata.append("password",password)
        formdata.append("phone",phone)
        try {
            const response= await axios.post("http://higgs.alwaysdata.net/api/signup",formdata)
            setsuccess(response.data.message)
            setloading("")
        } catch (error) {
            
        }
    }
    const checkpasswordstrength = (password) => {
        if (password.length<4){
            setStrength("weak password used !")
        }
        else if (password.lenth<8){
            setStrength("medium password used ")
        }
        else{
            setStrength("strong password used")
        }
    }  
    return(
        <div className="row mt-3 justify-content-center" style={{ backgroundColor: "#b697f1ff", minHeight: "100vh" }}>
            <div className="col-md-6 card shadow p-4 rounded-4">
                <img
  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
  alt="banner"
  className="rounded mb-3 d-block mx-auto"
  style={{ width: "600px", height: "100px", objectFit: "cover" }}
/>
        <h3 style={{ color: "#6a11cb" }}>SIGNUP 🧑‍💻</h3>
                <marquee behavior="scroll" direction="left" scrollamount="5 ">
     <h4 style={{ color: "#6a11cb" }}> Welcome to our Signup Page 🚀 Create your account now!</h4>
</marquee>
                {/* bind the states  */}
                <h2 className="text-warning">{loading}</h2>
                <h2 className="text-success">{success}</h2>
                <h2 className="text-danger">{error}</h2>


                <form action="" onSubmit={handlesubmit}>
                    <input type="text" className="form-control mb-3" placeholder=" 👤Enter Username" onChange={(e)=>setUsername(e.target.value)} /><br />
                    <input type="email" className="form-control mb-3" placeholder=" 📧Enter email" onChange={(e)=>setEmail(e.target.value)} /><br />
                    <input type="password" className="form-control mb-3" placeholder=" 🔐Enterpassword" onChange={(e)=>{setPassword(e.target.value); checkpasswordstrength(e.target.value);}} /> <br />
                    <input type="number" className="form-control mb-3" placeholder=" 📞Enter phone" onChange={(e)=>setPhone(e.target.value)}/><br />
                    {password &&(
                    <p
                style={{color:
                    strength=== "weak password used!"
                    ? "red"
                    : strength === "medium password used"
                    ? "orange"
                    : "green",
                }}>
                    password strength : {strength}
                </p>
            )}
                    <button type="submit" className="btn btn-primary w-100"  disabled={loading !== ""}>  🚀 Signup</button><br /><b> <br />
                        <button className="btn btn-outline-dark w-100 py-2">
          <img
            src="https://developers.google.com/identity/images/g-logo.png"
            alt="google"
            style={{ width: "20px", marginRight: "10px" }}
          />
          continue with Google
        </button>
                    </b>
                    <p>Already have an account? <Link to="/Signin"> 🔑Signin</Link></p>
                </form>
            </div>
            <Footer/>
        </div>
    )
}
export default Signupcomponent
