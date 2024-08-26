import React from 'react';
import { Col } from 'react-bootstrap';

const ExperienceCard = ({ data }) => {
  return (
    <Col lg="6">
      <div className="pb-5 text-center">
        <img 
          className="bg-white mb-3" 
          src={data.companylogo} 
          alt="" 
          style={{ 
            width: '300px',  // Width of the image container
            height: '400px', // Height of the image container (3:4 ratio)
            objectFit: 'contain', // Ensure the image fits inside without being cut
            borderRadius: '8px', // Optional: adds rounded corners
            backgroundColor: '#f8f9fa', // Optional: background color for better visibility
          }} 
        />
        <p className="lead">
          {data.role}
          <br />
          {data.date}
        </p>
      </div>
    </Col>
  );
};

export default ExperienceCard;