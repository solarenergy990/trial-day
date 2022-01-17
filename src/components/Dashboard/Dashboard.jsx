import { useState } from 'react';
import ApplicationList from '../ApplicationList/ApplicationList';
import InterviewList from '../InterviewList/InterviewList';
// import AccepedList from "../AcceptedList/AcceptedList"
import ApplicantForm from '../ApplicantForm/ApplicantForm';

import shortid from 'shortid';

import initialApplicants from '../../components/Dashboard/applicants.json';
// import useLocalStorage from '../../hooks/useLocalStorage';

const Dashboard = () => {
  // const [applicants, setApplicants] = useLocalStorage('applicants', initialApplicants);
  const [applicants, setApplicants] = useState(initialApplicants);
  const [filter, setFilter] = useState('');

  console.log('applicants from storage:', applicants);
  const addApplicant = data => {
    const { name, number, desiredPosition } = data;

    const applicant = {
      id: shortid.generate(),
      name,
      number,
      desiredPosition,
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
      <div>
        <ApplicantForm onSubmit={addApplicant} />
      </div>

      <div>
        <ApplicationList
          applicants={visibleApplicants}
          onApplicantDelete={deleteApplicant}
        />
      </div>
      <div>
        <InterviewList />
      </div>

      {/* <AccepedList /> */}
    </>
  );
};

export default Dashboard;
