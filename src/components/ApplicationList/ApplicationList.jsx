import ApplicantCard from '../ApplicantCard/ApplicantCard';
import s from './ApplicationList.module.css';
import { Button } from 'react-bootstrap';

const ApplicationList = ({ applicants, onApplicantDelete, setActive }) => {
  console.log(setActive);
  return (
    <>
      <div className={s.list}>
        <h2 className={s.title}>Applications</h2>

        <ul>
          {applicants.map(applicant => {
            const { id, name, number, desiredPosition } = applicant;

            return (
              <div className={s.card}>
                <ApplicantCard
                  key={id}
                  applicantName={name}
                  applicantNumber={number}
                  applicantDesiredPosition={desiredPosition}
                  onClickRemove={() => onApplicantDelete(id)}
                />
              </div>
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
