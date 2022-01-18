import React from 'react';
import ApplicantCard from '../ApplicantCard/ApplicantCard';
import s from './ApprovedList.module.css';

const ApprovedList = ({ applicants, onApplicantDelete }) => {
  return (
    <>
      <div className={s.list}>
        <h2 className={s.title}>Approved</h2>

        <ul>
          {applicants.map(applicant => {
            const { id, name, number, desiredPosition, status } = applicant;

            if (status === 'approved') {
              return (
                <div className={s.card} key={id}>
                  <ApplicantCard
                    applicantName={name}
                    applicantNumber={number}
                    applicantDesiredPosition={desiredPosition}
                    onClickRemove={() => onApplicantDelete(id)}
                    applicantStatus={status}
                  />
                </div>
              );
            }
          })}
        </ul>
      </div>
    </>
  );
};

export default ApprovedList;
