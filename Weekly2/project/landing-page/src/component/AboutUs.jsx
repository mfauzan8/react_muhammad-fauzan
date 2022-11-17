import React from 'react'
import profile from '../img/profile.jpg'

const AboutUs = () => {
    return (
        <>
            <h1 className='wrap'>About Us</h1>
            <div className="aboutus">
                <div className="d-flex flex-column  align-items-center justify-content-center">
                    <img src={profile} className="rounded-circle mb-2" alt="profile" style={{ width: "100px" }} />
                    <h5>Muhammad Fauzan</h5>
                    <p>React JS | GraphQL | PHP | Figma</p>
                    <div className="col-6">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate obcaecati facilis ipsa. Ccepturi provident totam molestiae exercitationem temporibus ratione maxime! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Officiis nisi reprehenderit impedit expedita, mollitia in. Provident, ducimus ut? Totam, tempora.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs