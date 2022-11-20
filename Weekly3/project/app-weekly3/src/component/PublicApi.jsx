import React from 'react'
import { Spinner } from 'react-bootstrap'

const PublicApi = ({ cats, loading }) => {
    return (
        <div className='publicApi'>
            <div className="container">
                <div className="d-flex flex-column justify-content-center align-items-center p-4 text-white">
                    <h1 className='p-4'>Fetch Data Public API</h1>
                    <div className="row">
                        {loading ? <Spinner animation="grow" /> :
                            cats.map((cat, idx) =>
                                <div className="col-4">
                                    <div className="card mb-3 bg-transparent border-light overflow-auto" style={{ minWidth: "350px", height: "100px" }} key={cat.idx} >
                                        <div className="row g-0">
                                            <div className="col-md-4">
                                                <img src={cat.url} className="img-fluid rounded-start" alt="..." />
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <h5 className="card-title" style={{ fontSize: "15px" }}>{cat.title}</h5>
                                                    <p className="card-text" style={{ fontSize: "12px", color: "grey" }}>{cat.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default PublicApi