import React from 'react';
import './Feedback.css';
import { Card } from 'react-bootstrap';

const Feedback = () => {
    return (
        <div>
                <h2 className="feedback-heading">Our Happy Clients</h2>
                <div className="card-display">
                    <Card className="card-decoration shadow p-3 mb-5 bg-white rounded" style={{ width: '18rem' }}>
                        <Card.Body> 
                            <p>Traveller's Paradise is very fast and efficient in responding to any emails and also with updating me with my travel itinerary. Loved being able to book everything in the one place.</p><br />                          
                            <h6>NAZMUN NAHAR MISTI</h6>
                        </Card.Body>
                    </Card>
                    
                    <Card className="card-decoration shadow p-3 mb-5 bg-white rounded" style={{ width: '18rem' }}>
                        <Card.Body>                           
                            <p>A great service to have when you don't have much time to plan holiday when you're always at work. Traveller's Paradice team always kept me updated with any changes to my itinerary.</p><br />                          
                            <h6>MIR AFTAB UDDIN</h6>
                        </Card.Body>
                    </Card>

                    <Card className="card-decoration shadow p-3 mb-5 bg-white rounded" style={{ width: '18rem' }}>
                        <Card.Body>                           
                            <p>Very friendly and easy communication. Prompt response to email questions. Kept me well informed about the trip. Thank you very much. Will definitely book my future trips with travelonline again.</p><br />                           
                            <h6>SABBIR AHMED SAZAL</h6>
                        </Card.Body>
                    </Card>
                </div>
                <hr className="hr-line" />
            </div>
    );
};

export default Feedback;