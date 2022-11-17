import React from 'react'
import { Col } from 'react-bootstrap'

const Home = () => {
    return (
        <div className="container text-white">
            <div className='d-flex flex-column align-items-center'>
                <h1>WELCOME TO OUR WEBSITE</h1>
                <Col md="8">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eius tenetur vitae facilis eum, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis aut, nostrum omnis nesciunt ex laboriosam. est beatae incidunt repellendus rem voluptate. Harum qui est reiciendis ea minima, doloribus impedit! Temporibus, quos.</p>
                </Col>
                <div className="btn btn-primary">Let's Go</div>
            </div>
        </div >
    )
}

export default Home