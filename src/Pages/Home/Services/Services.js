import React, { useEffect, useState } from 'react';
import './Services.css';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    // load data
    useEffect(() => {
        fetch("https://morning-mesa-04735.herokuapp.com/services")
            .then(res => res.json())
            .then(data => setServices(data))
    })    
    return (
        <div id="services">
            <h2 className="fw-bold">Checkout Our Services</h2>
            <div className="service-container">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>
                    )
                }
            </div>  
        </div>
    );
};

export default Services;