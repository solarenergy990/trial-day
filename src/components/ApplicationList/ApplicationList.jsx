import ApplicantCard from "../ApplicantCard/ApplicantCard"

const ApplicationList = ({ applicants }) => { 
    console.log(applicants)
    return <>
        <h2>Applications</h2>
        <div>
            <ul>
                {}
            </ul>
        </div>
    <ApplicantCard />
    </>
}

export default ApplicationList