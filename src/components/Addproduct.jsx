import axios from "axios"
import { useState } from "react"
import Footer from "./Footer"

const Addproduct = () => {
    // declare the states here 
    const[product_name,setProductName]=useState("")
    const[product_description,setProductDescription]=useState("")
    const[product_cost,setProductCost]=useState("")
    const[product_photo,setProductPhoto]=useState("")
    // define the states for posting data 
    const[loading,setLoading]=useState("")
    const[success,setSuccess]=useState("")
    const[error,setError]=useState("")
    
    
    
    // funtion to hundle submit /\\

    const handlesubmit=async(e)=>{
        e.preventDefault()
        setLoading("please wait...")
        const formdata = new FormData ()
        formdata.append('product_name',product_name)
        formdata.append("product_description",product_description)
        formdata.append("product_cost",product_cost)
        formdata.append("product_photo",product_photo)
    
        try {
            const response=await axios.post("http://markhiggs.alwaysdata.net/api/addproduct", formdata)
            setSuccess(response.data.message)
            setLoading("")
            
        } catch (error) {
          setError("Failed to add products");
    console.log(error);
            
        }
    }
return (
        <div className=" d-flex row justify-content-center m-2" style={{minHeight: "100vh",
      background: "linear-gradient(to right, #c095daff, #cd4fecff)",backdropFilter: "blur(10px)"}}>
            <div className="col-md-8 card shadow-lg p-4 rounded-4" style={{ backgroundColor: "#d3aaeeff", minHeight: "100vh" }}>
                <div className="text-center mb-3">
  <img
    src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae"
    alt="farm machinery"
    style={{
      width: "600px",
      height: "110px",
      objectFit: "cover",
      borderRadius: "12px",
      boxShadow: "0 4px 10px rgba(250, 9, 9, 0.2)"
    }}
  />
</div>
                 <h3 style={{ color: "#6a11cb" }}>Add products 🛒</h3>
               
               
  <h3 style={{ color: "#6a11cb" }}>
    🛒 Add your products easily and manage your store 🚀
    </h3>
    
                {/* bind the state  */}
                <h2 className="text-warning">{loading}</h2>
                <h2 className="text-success">{success}</h2>
                <h2 className="text-danger">{error}</h2>

                <form action="" onSubmit={handlesubmit}>
                    <input type="text" className="form-control mb-3"style={{ backgroundColor: "#a4ca95" }} placeholder="📦 Enter product name" onChange={(e)=>setProductName (e.target.value)} /><br />
                <textarea  className="form-control  mb-3" style={{ backgroundColor: "#a4ca95" }}  rows={'5'}  placeholder="📝 Enter product description" onChange={(e)=>setProductDescription (e.target.value)}></textarea> <br />
                <input type="number" className="form-control  mb-3"style={{ backgroundColor: "#a4ca95" }}   placeholder="💰 Enter product cost" onChange={(e)=> setProductCost (e.target.value)}/><br />
                <input type="file" accept="image/*" className="form-control  mb-3"style={{ backgroundColor: "#a4ca95" }}  onChange={(e)=>setProductPhoto (e.target.files[0])}  /><br />
                <button type="submit" className="btn btn-primary w-100 outline-seconary" >🚀  Add product</button>
                </form>

            </div>
                <Footer/>
        </div>
        
    )
}
export default Addproduct