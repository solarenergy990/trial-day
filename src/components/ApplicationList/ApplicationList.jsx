import ApplicantCard from "../ApplicantCard/ApplicantCard"

const ApplicationList = ({ applicants }) => { 
    console.log(applicants)
    return <>
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
                            
                        />
                    );
                })}
            </ul>
        </div>
    
    </>
}

export default ApplicationList