import React, { useState } from 'react';
import AddService from '../AddService/AddService';
import AllServices from '../AllServices/AllServices';
import ManageOrder from '../ManageOrder/ManageOrder';
import './Admin.css';
const Admin = () => {
    const [control, setControl] = useState("addService");
    return (
        <div className="admin-container">
                <div className="text-light bg-dark pt-5">
                    <h4 className="mb-5">Dashboard</h4>
                    <div>
                        <li 
                            onClick={() => setControl("addService")}
                            className="p-2"
                        >
                            Add Service
                        </li>
                        <li
                            onClick={() => setControl("allServices")}
                            className="p-2"
                        >
                            Manage Services
                        </li>
                        <li
                            onClick={() => setControl("manageOrder")}
                            className="p-2"
                        >
                            Manage orders
                        </li>
                    </div>
                </div>
                <div>
                    {control === "addService" && <AddService></AddService>}
                    {control === "manageOrder" && <ManageOrder></ManageOrder>}
                    {control === "allServices" && <AllServices></AllServices>}
                </div>
        </div>
    );
};

export default Admin;