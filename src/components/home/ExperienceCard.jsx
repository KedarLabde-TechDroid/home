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
            width: '400px',  // 3 units
            height: '300px', // 4 units
            objectFit: 'cover', // Fills the container while maintaining aspect ratio, cropping if necessary
            borderRadius: '8px', // Optional: adds rounded corners
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