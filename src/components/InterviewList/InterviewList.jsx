import React from 'react';
import ApplicantCard from '../ApplicantCard/ApplicantCard';
import s from './InterviewList.module.css';

const InterviewList = ({ applicants, onApplicantDelete }) => {
  return (
    <>
      <div className={s.list}>
        <h2 className={s.title}>Interview</h2>

        <ul>
          {applicants.map(applicant => {
            const { id, name, number, desiredPosition, status } = applicant;

            if (status === 'interview') {
              return (
                <div className={s.card} key={id}>
                  <ApplicantCard
                    applicantName={name}
                    applicantNumber={number}
                    applicantDesiredPosition={desiredPosition}
                    onClickRemove={() => onApplicantDelete(id)}
                  />
                </div>
              );
            }
          })}
        </ul>

        {/* <div className={s.button}>
          <Button
            type="button"
            variant="btn btn-success"
            onClick={() => setActive(true)}
          >
            +
          </Button>
        </div> */}
      </div>
    </>
  );
};

export default InterviewList;
