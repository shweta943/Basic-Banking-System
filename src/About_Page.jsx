import React from 'react';
import "./style.css";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const About_Page = () => {
    const setHomePage = () => {
        window.location.assign(`http://localhost:${window.location.port}/`)
    }
    const setViewPage = () => {
        window.location.assign(`http://localhost:${window.location.port}/view_customers`)
    }
    const setAboutPage = () => {
        window.location.assign(`http://localhost:${window.location.port}/about_page`)

    }


    return (
        <>
            {/*Navbar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" className="link1 m-3" onClick={setHomePage}>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" className="link1 m-3" onClick={setViewPage}>View Customers</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" className="link1 m-3" onClick={setAboutPage}>About Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <br />
            {/*Body */}
            <div className="mybackground">
                <h1 className="text-center text-light text-decoration-underline m-4">Why you should choose us ?</h1>
            </div>
            <br />
            <br />
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100">

                        <div className="card-body">
                            <h5 className="card-title">Do banking in just single click</h5>
                            <p className="card-text">You can check your transaction easily by one click.</p>
                            <button className="p-2 btn btn-primary">Check here</button>
                        </div>

                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">

                        <div className="card-body">
                            <h5 className="card-title">Check your Transaction.</h5>
                            <p className="card-text">We provide you best and secure networks to work.</p>
                            <button className="p-2 btn btn-primary">Check here</button>

                        </div>

                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">

                        <div className="card-body">
                            <h5 className="card-title">We are here for a service of trust.</h5>
                            <p className="card-text">Send your money easily from anywhere.</p>
                            <button className="p-2 btn btn-primary">Check here</button>

                        </div>

                    </div>
                </div>
            </div>
            <br />
            <br />

            {/*For displaying footer*/}

            <footer className="footer">
                <ul className="list2 p-4">
                    <li className="list2">Find us on Social media</li>
                    <li className="list-center">
                        <ul className="list2">
                            <li className="list3 m-2"><FacebookIcon /></li>
                            <li className="list3 m-2"><InstagramIcon /></li>
                            <li className="list3 m-2"><TwitterIcon /></li>
                            <li className="list3 m-2"><LinkedInIcon /></li>
                        </ul>
                    </li>
                </ul>
            </footer>



        </>
    )
}
export default About_Page;