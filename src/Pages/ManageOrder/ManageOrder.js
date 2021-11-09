import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';

const ManageOrder = () => {
    const [orders, setOrders] = useState([]);
    const[status, setStatus] = useState("");

    const handleStatus = (e) => {
        setStatus(e.target.value);
    }
    console.log(status);

    const handleUpdate = (id) => {
        fetch(`http://localhost:5000/updateStatus/${id}`, {
            method: "PUT",
            headers: {"content-type": "application/json"},
            body: JSON.stringify({status})
        })
        console.log(id)
    }
    useEffect(() => {
        fetch("http://localhost:5000/allOrders")
            .then(res => res.json())
            .then(data => setOrders(data))
    } ,[]);

    return (
        <div>
            <h1  className="mt-5 mb-3">Total Orders: {orders.length}</h1>
            <Table striped border hover>
                    <thead>
                        <tr>
                            <th>Count</th>
                            <th>Event Title</th>
                            <th>Event Description</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {orders?.map((pd, index) => (
                        <tbody>
                            <tr>
                                <td>{index+1}</td>
                                <td>{pd.name}</td>
                                <td>{pd.description}</td>
                                <td>
                                    <input type="text" onChange={handleStatus} defaultValue={pd.status} />
                                </td>
                                <td>
                                <Button
                                    onClick = {() => handleUpdate(pd._id)}
                                    className= "btn btn-success p-2"
                                >
                                    Update
                                </Button>
                                </td>
                            </tr>
                        </tbody>
                    ))}
                </Table>
        </div>
    );
};

export default ManageOrder;