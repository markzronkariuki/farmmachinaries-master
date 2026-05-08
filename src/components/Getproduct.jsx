import axios from 'axios'
import react, { useState,useEffect  } from 'react'

import { useNavigate } from 'react-router-dom'
import Carousel from './Carousel'
import Footer from './Footer'
import Chatbot from './Chatbot'
const Getproduct = () => {
    let navigate = useNavigate()
    // declare ourstates here 
    const [loading, setLoading] = useState("")
    const [products, setProduct] = useState([])
    const [error, setError] = useState("")
    const [search, setSearch] = useState("")
    const [sortOption, setSortOption] = useState("");

    //   define state 

    const [visibleCount, setVisibleCount] = useState(8);


    //   step 2 goes here 
    const filtered_products = products.filter((item) =>
        item.product_name.toLowerCase().includes(search.toLowerCase()) ||
        item.product_description.toLowerCase().includes(search.toLowerCase())
    );
    // SORTING LOGIC GOES HERE 
    const sorted_products = [...filtered_products].sort((a, b) => {
        if (sortOption === "price_low_high") {
            return a.product_cost - b.product_cost;
        }
        if (sortOption === 'price_high_low') {
            return a.product_cost - b.product_cost;
        }
        if (sortOption === "name_asc") {
            return a.product_name.localeCompare(b.product_name)
        }
        if (sortOption === "name_desc") {
            return a.product_name.localeCompare(a.product_name)
        }
        return 0;
    });
    // function to get product 
    const getproduct = async () => {
        setLoading("product loading...")
        try {
            const response = await axios.get("http://markhiggs.alwaysdata.net/api/getproduct")
            setProduct(response.data)
            setLoading("")
        } catch (error) {

        }
    }
    // call the funtion 
    useEffect(() => {
        getproduct()
    }, [])
    console.log(products);
    const imagepath = "http://markhiggs.alwaysdata.net/static/images/"



    return (
        <div className="row g-3" style={{ backgroundColor: "rgb(243, 235, 240)", minHeight: "100vh" }}>


            {/* caroucel goes here  */}
            <Carousel />
            {/* step 3  */}
            {/* searcbar goes here  */}
            {/* SEARCH AND SORT UI GOES HERE  */}
            <div className='col-md-4 mb-2'>
                <input
                    className='form-control'
                    type='search'
                    placeholder='Search products...'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            {/* SORT DROPDOWN  */}
            <div className='col-md-4 mb-2'>
                <select
                    className='form-control'
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}>
                    <option value="">Sort Products</option>
                    <option value="price_low_high">Price: Low - High</option>
                    <option value="price_high_low">Price:High - Low</option>
                    <option value="name_asc">Product Name: A - Z</option>
                    <option value="name_desc">Product Nmae: Z - A</option>
                </select>
            </div>
            
            <h3 style={{ color: "#6a11cb" }}>Available products</h3>
                <marquee behavior="scroll" direction="left" scrollamount="5 ">
     <h4 style={{ color: "#6a11cb" }}> Welcome to the available products click purchases now to buy product of your choice</h4>
</marquee>
            {/* bind the states "" */}
            <h2 className='text-warning'>{loading}</h2>
            <h2 className='text-danger'> {error}</h2>
            {/* map here  */}
            {sorted_products.slice(0, visibleCount).map((singleproduct) => (


                <div className="col-md-3  mb-4">
                    <div className="card shadow-lg h-100 border-0"
    style={{
      background: "linear-gradient(145deg, #bbeec8, #db619e)",
      borderRadius: "30px",
      overflow: "hidden"}}>

                        {/* image goes here  */}
                        <img src={imagepath + singleproduct.product_photo} alt="" style={{ height: "200px", objectFit: "cover" }} />
                        <div className="card-body">
                            <h2 className='text-success  ' >{singleproduct.product_name}</h2>
                            <p  >{singleproduct.product_description}</p>
                            <b className='text-success ' > ksh{singleproduct.product_cost}</b><br />
                            <button className='btn btn-warning fw-bold w-100' onClick={() => navigate("/makepayment", { state: { singleproduct } })}>purchase now</button>
                        </div>
                    </div>
                </div>
            ))}
            {/* load more button here  */}
            <div className='text-center mt-4'>
                {visibleCount < filtered_products.length && (

                    <button
                        className='btn btn-primary w-40 mt-2 fw-bold rounded-3'
                        onClick={() => setVisibleCount(visibleCount + 8)}
                    >
                        Load More

                    </button>
                )}
                
            </div>
            <Footer />


        </div>

    )
}
export default Getproduct