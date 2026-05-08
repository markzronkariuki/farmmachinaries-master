
import React,{useEffect,useState} from 'react'

const Navbar = () => {
    const [user, setUser]=useState(null);
    useEffect(()=>{
        const loggedUser=JSON.parse(localStorage.getItem("user"));
        setUser(loggedUser);
    
    },[]);
    const Logout =()=>{
        localStorage.removeItem("user");
        useState(null)
    };
  return (
          <section class="row">
            <div class="col-md-12">
                {/* <!-- a nav with navbar content  -->  */}
                <nav class="navbar navbar-expand-md bg-light">
                    <a href="" class="navbar-brand text-warning fw-bold fst-italic">Premium Farm machinery</a>
                    <button class="navbar-toggler" data-bs-target="#navbarcollapse" data-bs-toggle="collapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    {/* <!-- division containing the links  -->  */}
                    <div class="collapse navbar-collapse" id="navbarcollapse">
                        <div class="navbar-nav">
                            <a href="/" class="nav-link">Home</a>
                            <a href="/addproduct" class="nav-link">Add product</a>

                            {user ?(
                                <>
                                <span className='nav-link'> Welcome {user.name} </span>
                                <button onClick={Logout} className='btn btn-danger'>Logout</button>
                                
                                </>
                            ):(
                                <>

                            <a href="/signin" class="nav-link">Sign in</a>
                            <a href="/signup" class="nav-link">Sign up</a>
                            <a href="" class="nav-link">Help</a>
                                </>
                            )}

                        </div>
                    </div>
                </nav>
            </div>
        </section>
  )
}

export default Navbar
   