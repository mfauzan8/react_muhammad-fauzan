import React from 'react'
import logo from '../img/Logo.png'

const Footer = () => {
    return (
        <div className="container-fluid p-0">
            <footer className="text-center text-lg-start text-white">
                <div className="container text-center text-md-start p-2">
                    <div className="row mt-3">
                        <div className="col-lg-1 mx-auto mb-4">
                            <img src={logo} alt="Logo" style={{ width: "90px" }} />
                        </div>
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h4 className="text-uppercase fw-bold">Nafa Resto</h4>
                            <hr className="mb-4 mt-0 d-inline-block mx-auto" />
                            <h5>MEET, EAT & ENJOY THE GOOD TASTE</h5>
                            <p style={{ fontSize: "13px" }}>We deliver 100% Fresh Food and drink. You can order right now! Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, consequatur.</p>
                            <form className="row g-2">
                                <div className="col-9">
                                    <label htmlFor="email" className="visually-hidden">Email</label>
                                    <input type="email" className="form-control" placeholder="email" />
                                </div>
                                <div className="col-3">
                                    <button type="submit" className="btn btn-danger mb-3">Send</button>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold">Social Media</h6>
                            <hr className="mb-4 mt-0 d-inline-block mx-auto" />
                            <p>
                                <a href="https://www.instagram.com/mfauzan8/" className="text-white" style={{ textDecoration: "none" }}><i className="bi bi-instagram"></i> Instagram</a>
                            </p>
                            <p>
                                <a href="https://www.linkedin.com/in/mhmmdfauzan/" className="text-white" style={{ textDecoration: "none" }}><i className="bi bi-linkedin"></i> Linkedin</a>
                            </p>
                            <p>
                                <a href="https://twitter.com/fauzanzanzan_" className="text-white" style={{ textDecoration: "none" }}><i className="bi bi-twitter"></i> Twitter</a>
                            </p>
                        </div>
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold">Come and Say Hello</h6>
                            <hr className="mb-4 mt-0 d-inline-block mx-auto" />
                            <p><i className="bi bi-geo-alt"></i> Buaran 1 Jakarta-Timur</p>
                            <p><i className="bi bi-envelope"></i> mhmmdfauzan@gmail.com</p>
                            <p><i className="bi bi-telephone"></i> 083872369708</p>
                        </div>
                    </div>
                </div>
                <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>© 2022 Copyright Muhammad Fauzan</div>
            </footer>
        </div>
    )
}

export default Footer