import axios from 'axios'
import react, { useState, useEffect } from 'react'
import { use } from 'react'
import{ useNavigate} from 'react-router-dom'
import Carousel from './Carousel'
import Footer from './Footer'
 const Getproduct = () => {
    let navigate=useNavigate()
    // declare ourstates here 
    const[loading,setLoading]=useState("")
    const[products,setProduct]=useState([])
    const[error,setError]=useState("")
    const[search,setSearch]=useState("")
   
//   define state 

const[visibleCount,setVisibleCount] = useState(8);
        
        
    //   step 2 goes here 
    const filtered_products = products.filter((item) =>
        item.product_name.toLowerCase().includes(search.toLowerCase())||
        item.product_description.toLowerCase().includes(search.toLowerCase()) 
); 
         // function to get product 
         const getproduct= async()=>{
            setLoading("product loading...")
            try {
            const response=await axios.get("http://markhiggs.alwaysdata.net/api/getproduct")
            setProduct(response.data)
            setLoading("")
        } catch (error) {
            
        }
    }
    // call the funtion 
    useEffect(()=>{
        getproduct()
    },[])
    console.log(products);
    const imagepath="http://markhiggs.alwaysdata.net/static/images/"
    

    
    return (
        <div className="row g-3">
            

            {/* caroucel goes here  */}
            <Carousel/>
            {/* step 3  */}
            {/* searcbar goes here  */}
            <div className='row justify-content-center mt-3 mb-3'>
                <input type="search" className='form-control w-50'
                placeholder='search product here' value={search}
                onChange={(e) => setSearch(e.target.value)}
                />

            </div>
            <h1 className='text-primary' mt-5>Avillable products</h1>
            {/* bind the states "" */}
            <h2 className='text-warning'>{loading}</h2>
            <h2 className='text-danger'> {error}</h2>
            {/* map here  */}
            {filtered_products.slice(0,visibleCount).map((singleproduct)=>(

                
                <div className="col-md-3  mb-4">
                    <div className='card shadow h-100 '>

                {/* image goes here  */}
                <img src={imagepath + singleproduct.product_photo} alt="" style={{height:"200px", objectFit:"cover"}}/>
                <div className="card-body">
                    <h2 className='text-success  ' >{singleproduct.product_name}</h2>
                    <p >{singleproduct.product_description}</p>
                    <b className='text-success ' > ksh{singleproduct.product_cost}</b><br />
                    <button className='btn btn-warning w-100' onClick={()=>navigate("/makepayment", {state:{singleproduct}})}>purchase now</button>
                </div>
                    </div>
            </div>
            ))}
            {/* load more button here  */}
            <div className='text-center mt-4'> 
            {visibleCount <filtered_products.length &&(
                
                <button
                className='btn btn-primary'
                onClick={()=> setVisibleCount(visibleCount + 8)}
                >
                    Load More

                </button>
            )}
                </div>
            <Footer/>

        </div>
         
    )
}
export default Getproduct