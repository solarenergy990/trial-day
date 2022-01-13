import React from 'react';
import {Card} from 'react-bootstrap';


const ApplicantCard = ({ applicantName, applicantNumber, applicantDesiredPosition}) => { 
    return    <div>
        <Card style={{ width: '18rem' }}>
            <Card.Body>
             <Card.Title>Candidate</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{ applicantName}</Card.Subtitle>
                <Card.Text>
            Candidates desired position: { applicantDesiredPosition}
          </Card.Text>
          <Card.Text>
            Candidates number: { applicantNumber}
                </Card.Text>
    {/* <Card.Link href="#">Delete Candidate</Card.Link> */}
    <Card.Link href="#">Move candidate further</Card.Link>
  </Card.Body>
</Card>
        </div>

    
}

export default ApplicantCard