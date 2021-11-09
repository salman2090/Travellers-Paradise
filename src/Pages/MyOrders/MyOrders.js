import React, { useEffect, useState } from 'react';
import './MyOrder.css';
import { Button, Card } from 'react-bootstrap';

const MyOrders = () => {
    const email = sessionStorage.getItem("email");
    const [services, setServices] = useState([]);
    const [control, setControl] = useState(false);

    useEffect(() => {
        fetch(`https://morning-mesa-04735.herokuapp.com/myOrder/${email}`)
            .then(res => res.json())
            .then(data => setServices(data))
    },[control])

    const handleDelete = (id) => {
        fetch(`https://morning-mesa-04735.herokuapp.com/deleteOrder/${id}`,{
            method:"DELETE",
        })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount) {
                    setControl(!control);
                }
            });
    }
    return (
        <div>
            <h2 className="mt-5">My Orders</h2>
            <div className="orders-container">
                {services?.map((service) =>(
                    <div>
                        <Card border="light" className="card-body mx-3 mt-5 shadow p-3 mb-5 bg-body rounded-3" >
                            <Card.Img className="pt-3" variant="top" src={service?.image}/>
                            <Card.Body>
                                <h3>{service?.name}</h3>
                                <p>{service?.description}</p>
                                <p>Cost: {service?.price}</p>
                            <Button onClick={() => handleDelete(service._id)} className=" mt-3" variant="outline-danger">Cancel</Button>
                            </Card.Body>
                        </Card> 
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyOrders;