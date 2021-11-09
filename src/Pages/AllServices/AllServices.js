import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';

const AllServices = () => {
    const [services, setServices] = useState([]);
    const [control, setControl] = useState(false);

    useEffect(() => {
        fetch("https://morning-mesa-04735.herokuapp.com/services")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [control]);

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
        console.log(id);
    }

    console.log(services)
    return (
        <div>
            <div>
                <h1 className="mt-5 mb-3">Manage Services</h1>
                <Table striped border hover>
                    <thead>
                        <tr>
                            <th>Count</th>
                            <th>Service Title</th>
                            <th>Description</th>
                            <th>Image Link</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {services?.map((pd, index) => (
                        <tbody>
                            <tr>
                                <td>{index+1}</td>
                                <td>{pd.name}</td>
                                <td>{pd.description}</td>
                                <td>{pd.image}</td>
                                <td>
                                <Button
                                    onClick = {() => handleDelete(pd._id)}
                                    className= "btn btn-danger p-2"
                                >
                                    Delete
                                </Button>
                                </td>
                            </tr>
                        </tbody>
                    ))}
                </Table>
                
            </div>
        </div>
    );
};

export default AllServices;