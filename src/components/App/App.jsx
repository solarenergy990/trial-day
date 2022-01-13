import Container from "../Container/Container";
import ApplicationList from "../ApplicationList/ApplicationList"
import InterviewList from "../InterviewList/InterviewList"
import AccepedList from "../AcceptedList/AcceptedList"

const App = () => {
  return (
    <Container>
      <ApplicationList />
      <InterviewList />
      <AccepedList />
    </Container>
  );
}

export default App;
