import React from 'react'
import { Col, Row, Spinner } from 'react-bootstrap'
import profile from '../img/profile.jpg'

const AboutUs = ({ users, loading }) => {
    return (
        <>
            <div id="aboutus">
                <div className="container">
                    <Row>
                        <div className="d-flex flex-column align-items-center justify-content-center">
                            <h1>About Us</h1>
                            <img src={profile} className="rounded-circle mb-2" alt="profile" style={{ width: "100px" }} />
                            <h5>Muhammad Fauzan</h5>
                            <p>React JS | GraphQL | PHP | Figma</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate obcaecati facilis ipsa. Ccepturi provident totam molestiae exercitationem temporibus ratione maxime! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Officiis nisi reprehenderit impedit expedita, mollitia in. Provident, ducimus ut? Totam, tempora.
                            </p>
                        </div>
                        <h3 className='text-center'>Data Fetching With Hasura</h3>
                        <div className="d-flex flex-row">
                            {loading ? <Spinner animation="grow" /> :
                                users.map((user) =>
                                    <div className='container'>
                                        <img src={user.avatar} className="rounded-circle mb-2" alt="profile" style={{ width: "100px" }} />
                                        <h6>{user.name}</h6>
                                        <p style={{ fontSize: "12px", color: "#FF6B7A" }}>{user.address}</p>
                                    </div>

                                )}
                        </div>
                    </Row>
                </div>
            </div>
        </>
    )
}

export default AboutUs