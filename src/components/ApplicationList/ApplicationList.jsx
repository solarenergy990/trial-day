import ApplicantCard from '../ApplicantCard/ApplicantCard';
import s from './ApplicationList.module.css';
import { Button } from 'react-bootstrap';

const ApplicationList = ({
  applicants,
  onApplicantDelete,
  setActive,
  onApplicantToInterview,
}) => {
  // console.log(setActive);
  //   console.log(applicants);

  return (
    <>
      <div className={s.list}>
        <h2 className={s.title}>Applications</h2>

        <ul>
          {applicants.map(applicant => {
            const { id, name, number, desiredPosition, status } = applicant;

            if (status === 'application') {
              return (
                <div className={s.card} key={id}>
                  <ApplicantCard
                    applicantName={name}
                    applicantNumber={number}
                    applicantDesiredPosition={desiredPosition}
                    onClickRemove={() => onApplicantDelete(id)}
                    onClickToInterview={() =>
                      onApplicantToInterview(id, status)
                    }
                    applicantStatus={status}
                  />
                </div>
              );
            }
          })}
        </ul>

        <div className={s.button}>
          <Button
            type="button"
            variant="btn btn-success"
            onClick={() => setActive(true)}
          >
            +
          </Button>
        </div>
      </div>
    </>
  );
};

export default ApplicationList;
