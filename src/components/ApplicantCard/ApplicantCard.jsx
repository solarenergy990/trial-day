import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ApplicantCard = ({
  applicantName,
  applicantNumber,
  applicantDesiredPosition,
  onClickRemove,
  onClickToInterview,
  onClickToApprove,
  applicantStatus,
}) => {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Candidate</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {applicantName}
          </Card.Subtitle>
          <Card.Text>
            Candidates desired position: {applicantDesiredPosition}
          </Card.Text>
          <Card.Text>Candidates number: {applicantNumber}</Card.Text>

          <Button type="button" variant="danger" onClick={onClickRemove}>
            Delete
          </Button>
          {applicantStatus === 'application' && (
            <Button
              type="button"
              variant="success"
              onClick={onClickToInterview}
            >
              Make appointment
            </Button>
          )}
          {applicantStatus === 'interview' && (
            <Button type="button" variant="success" onClick={onClickToApprove}>
              Approve Candidate
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default ApplicantCard;
