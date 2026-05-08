import axios from 'axios'
import react, { useState } from 'react'
import { Await, useLocation } from 'react-router-dom'
const Mpesapayment = () => {
    const{singleproduct}=useLocation().state||{}
    const imagepath="http://markhiggs.alwaysdata.net/static/images/"
    // declare ypur states here 
    const[loading,setLoading]=useState("")
    const[success, setSuccess]=useState("")
    const[error, setError]=useState("")
    const[phone, setPhone]=useState("") 
    // funtion to make payment 
    const hundlesubmit = async(e)=>{
        e.preventDefault()
        setLoading("Please wait...")
        // store data  digital envelop
        const formdata = new FormData()
        // append / add data 
        formdata.append("amount",singleproduct.product_cost)
        formdata.append("phone",phone)
        try {
            const response= await axios.post("http://markhiggs.alwaysdata.net/api/mpesa_payment",formdata)
            setSuccess(response.data.message)
            setLoading("")
        } catch (error) {
            setError("something went wrong")
            setLoading("")
        }
    }   
    return (
        <div className="row justify-content-center">
            <h2 className="text-info">Make payment-Lipa na M-pesa</h2>
            
            <div className="col-md-8 card shadow p-4">
                <img src={imagepath + singleproduct.product_photo} alt="" style={{height:"300px", objectFit:"cover"}}/>

            
                <div className="card-body">
                    <h1 className="text-info ">{singleproduct.product_name}</h1>
                    <p>{singleproduct.product_description}</p>
                    <b className="text-warning " >{singleproduct.product_cost} </b>
            {/* bind the state / */}

                 <h2 className="text-warning">{loading}</h2>
                <h2 className="text-success">{success}</h2>
                <h2 className="text-danger">{error}</h2>
                    <form action="" onSubmit={hundlesubmit}>
                        <input type="number" className="form-control" placeholder="enter phone number 254xxxxxxx" onChange={(e)=> setPhone(e.target.value)}></input>
                        <button type="submit" className="btn btn-primary w-100">Make payment</button>
                    </form>
                </div>
            </div>
        </div>
        
        
    )
}
export default Mpesapayment