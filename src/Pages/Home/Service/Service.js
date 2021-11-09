import React from 'react';
import './Service.css';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const {_id, name, image, description, price } = service;
    return (
        <div className="service">
            <Card border="light" className="card-body mx-3 mt-5 shadow p-3 mb-5 bg-body rounded-3" >
                <Card.Img className="pt-3" variant="top" src={image}/>
                <Card.Body>
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <h4>Cost: {price}</h4>
                    <Link to={`/booking/${_id}`}><Button className="text-dark mt-3" variant="outline-info">Add to Cart</Button>{' '}</Link>
                </Card.Body>
            </Card> 
        </div>
    );
};

export default Service;