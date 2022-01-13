import ApplicantCard from "../ApplicantCard/ApplicantCard"

const ApplicationList = ({ applicants, onApplicantDelete }) => { 
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
                            onClickRemove={() => onApplicantDelete(id)}
                        />
                    );
                })}
            </ul>
        </div>
    
    </>
}

export default ApplicationList