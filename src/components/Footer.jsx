import React from 'react'

const Footer = () => {
    return (
        <div>
            <section class="row bg-warning p-3">
                {/* <!-- child 1  --> */}
                <div class="col-md-4">
                    <h2 class="text-center text-white">About us</h2>
                    <p class="text-white">Farm machinery projects and services in Kenya and East Africa are focused on enhancing agricultural productivity through mechanization, transitioning from manual labor to efficient, technology-driven solutions. Key areas include the sale, rental, maintenance, and operation of tractors, implements, and irrigation systems.
                        </p>
                </div>
                {/* <!-- child 2  --> */}
                <div class="col-md-4">
                    <h2 class="text-center text-white">Contuct us</h2>
                    <form action="">
                        <input type="email" placeholder="Enter your email" class="form-control" /><br /><br />
                        <textarea name="" id="" class="form-control" placeholder="leave a comment"></textarea><br />
                        <input type="submit" value="send message" class="btn btn-outline-danger" />
                    </form>
                </div>
                {/* <!-- chld 3  --> */}
                <div class="col-md-4">
                    <h2 class="text-center text-white">Stay connected</h2>
                    <a href="https://facebook.com">
                        <img src="images/fb.png" alt="fb" />
                    </a>
                    <a href="https://instagram.com">
                        <img src="images/in.png" alt="ig" />
                    </a>
                    <a href="https://twiter.com">
                        <img src="images/x.png" alt="twiter" />
                    </a>
                    <p class="text-white text-center">The social media platforms helps you to stay connected to us in the
                        entire world</p>
                </div>
            </section>
        </div>
    )
}

export default Footer