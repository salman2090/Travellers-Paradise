import React, { useEffect, useState } from 'react';
import './Booking.css';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';

const Booking = () => {
    const {serviceId} = useParams();
    const [service, setService] = useState({});

    const email = sessionStorage.getItem("email");

    useEffect(() => {
        fetch(`http://localhost:5000/singleService/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, []);
    console.log(service);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        data.email = email;
        data.status = "pending";

        fetch("http://localhost:5000/confirmOrder", {
            method: "POST",
            headers: {"content-type": "application/json",},
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => console.log(result));
        console.log(data);
    }
    return (
        <div>
            <h1 className="text-center mt-5 mb-3">Please Book</h1>
            <div className="booking-container mt-5 mb-5">
                <div>
                    <img className="w-75 mb-3" src={service?.image} alt="" />
                    <h2>{service?.name}</h2>
                    <p>{service?.description}</p>
                    <h3>{service?.price}</h3>
                </div>

                <div>
                    <h3 className="text-center">Details</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        
                        <input {...register("name", { required: true})} defaultValue={service?.name} className="p-2 m-2 w-50"/>
                        <br />

                        <input {...register("description", { required: true})} defaultValue={service?.description} className="p-2 m-2 w-50"/>
                        <br />

                        <input {...register("price", { required: true})} defaultValue={service?.price}  className="p-2 m-2 w-50"/>

                        <input {...register("image", { required: true})} defaultValue={service?.image}  className="p-2 m-2 w-50"/>
                        <br />
                        
                        {errors.exampleRequired && <span>This field is required</span>}
                        
                        <input type="submit" value="Order" className="btn btn-success mb-5"/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Booking;