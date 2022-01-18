import { useState } from 'react';
import ApplicationList from '../ApplicationList/ApplicationList';
import InterviewList from '../InterviewList/InterviewList';
import Modal from '../Modal/Modal';
import ApplicantForm from '../ApplicantForm/ApplicantForm';

import shortid from 'shortid';

import initialApplicants from '../../components/Dashboard/applicants.json';

const Dashboard = () => {
  const [applicants, setApplicants] = useState(initialApplicants);
  const [filter, setFilter] = useState('');
  const [modalActive, setModalActive] = useState(false);

  // console.log('applicants from storage:', applicants);

  const addApplicant = data => {
    const { name, number, desiredPosition, status } = data;

    const applicant = {
      id: shortid.generate(),
      name,
      number,
      desiredPosition,
      status,
    };

    const checkedApplicantsNames = applicants.map(applicant => {
      return applicant.name.toLowerCase();
    });

    if (!checkedApplicantsNames.includes(name.toLowerCase())) {
      setApplicants(prevApplicants => {
        return [...prevApplicants, applicant];
      });
    } else {
      alert(`${name} is already in list`);
    }
  };

  const deleteApplicant = applicantId => {
    setApplicants(applicants.filter(applicant => applicant.id !== applicantId));
  };

  const getVisibleApplicants = () => {
    const normalizedFilter = filter.toLowerCase();

    return applicants.filter(applicant =>
      applicant.name.toLowerCase().includes(normalizedFilter),
    );
  };

  const visibleApplicants = getVisibleApplicants();

  console.log('list of applicants:', visibleApplicants);

  return (
    <>
      <Modal active={modalActive} setActive={setModalActive}>
        <ApplicantForm onSubmit={addApplicant} setActive={setModalActive} />
      </Modal>

      <ApplicationList
        applicants={visibleApplicants}
        onApplicantDelete={deleteApplicant}
        setActive={setModalActive}
      />

      <div>
        <InterviewList
          applicants={visibleApplicants}
          onApplicantDelete={deleteApplicant}
        />
      </div>
    </>
  );
};

export default Dashboard;
