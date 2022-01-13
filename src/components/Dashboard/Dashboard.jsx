import ApplicationList from "../ApplicationList/ApplicationList"
import InterviewList from "../InterviewList/InterviewList"
// import AccepedList from "../AcceptedList/AcceptedList"

import shortid from "shortid";

import initialApplicants from '../../components/Dashboard/applicants.json';
import useLocalStorage from '../../hooks/useLocalStorage';

const Dashboard = () => { 
    const [applicants, setApplicants] = useLocalStorage('applicants', initialApplicants);

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

    return <>
        <ApplicationList />
        <InterviewList />
        {/* <AccepedList /> */}
    </>
}

export default Dashboard