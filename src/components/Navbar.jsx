import React, { useEffect, useState } from 'react';

const Navbar = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const loggedUser = JSON.parse(localStorage.getItem("user"));
        setUser(loggedUser);
    }, []);

    const Logout = () => {
        localStorage.removeItem("user");
        setUser(null);
    };

    return (
        <section className="row">
            <div className="col-md-12">

                <nav className="navbar navbar-expand-md bg-light">

                    <a href="/" className="navbar-brand text-warning fw-bold fst-italic">
                        Premium Farm machinery
                    </a>

                    <button
                        className="navbar-toggler"
                        data-bs-target="#navbarcollapse"
                        data-bs-toggle="collapse"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarcollapse">
                        <div className="navbar-nav">

                            <a href="/" className="nav-link">Home</a>
                            <a href="/addproduct" className="nav-link">Add product</a>

                            {user ? (
                                <>
                                    <span className="nav-link">
                                        Welcome {user.name}
                                    </span>

                                    <button
                                        onClick={Logout}
                                        className="btn btn-danger"
                                    >
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <>
                                    <a href="/signin" className="nav-link">
                                        Sign in
                                    </a>

                                    <a href="/signup" className="nav-link">
                                        Sign up
                                    </a>
                                </>
                            )}

                        </div>
                    </div>
                </nav>
            </div>
        </section>
    );
};

export default Navbar;