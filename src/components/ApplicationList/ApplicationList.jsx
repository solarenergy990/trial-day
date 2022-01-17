import ApplicantCard from '../ApplicantCard/ApplicantCard';

import { Button } from 'react-bootstrap';

const ApplicationList = ({ applicants, onApplicantDelete, setActive }) => {
  console.log(setActive);
  return (
    <>
      <h2>Applications</h2>
      <div>
        <ul>
          {applicants.map(applicant => {
            const { id, name, number, desiredPosition } = applicant;

            return (
              <ApplicantCard
                key={id}
                applicantName={name}
                applicantNumber={number}
                applicantDesiredPosition={desiredPosition}
                onClickRemove={() => onApplicantDelete(id)}
              />
            );
          })}
        </ul>

        <Button
          type="button"
          variant="btn btn-success"
          onClick={() => setActive(true)}
        >
          +
        </Button>
      </div>
    </>
  );
};

export default ApplicationList;
