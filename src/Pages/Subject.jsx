import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import RecordingCard from "../components/RecordingCard/RecordingCard";

const Subject = () => {
  const [subjectData, setSubjectData] = useState();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();

  useEffect(() => {
    setIsLoading(true)
    fetch(`https://dinuka-mit-backend.herokuapp.com/${params.id}`)
      .then((response) => response.json())
      .then((data) => {
        setSubjectData(data[0]);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsError(true);
        setIsLoading(false);
      });
  }, [params.id]);

  return (
   !isError && !isLoading && subjectData ? <Container className="mb-3 mt-4 mt-lg-0">
      <h2 className="my-4 text-blue fw-bold ">{subjectData && subjectData.name}</h2>

      <div>
        <h5 className="mt-lg-3 text-gray ">Recordings</h5>
        <Row>
          {subjectData &&
            !isError &&
            subjectData.recordings.map((recording, index) => (
              <Col sm={12} md={6} lg={4} key={index}>
                <RecordingCard {...recording} />
              </Col>
            ))}
        </Row>
      </div>

      <div className="mt-5 mt-lg-0">
        <h5 className="mt-lg-3 ">Notes</h5>
        <Row>
          {subjectData &&
            !isError &&
            subjectData.notes.map((recording, index) => (
              <Col lg={4} key={index}>
                <RecordingCard {...recording} />
              </Col>
            ))}
        </Row>
      </div>

      <div className="mt-5 mt-lg-0">
        <h5 className="mt-lg-3 ">CAL</h5>
        <Row>
          {subjectData && !isError && (
            <Col lg={4}>
              <RecordingCard title="Cal Page" link={subjectData.calLink} />
            </Col>
          )}
        </Row>
      </div>
    </Container>:<LoadingSpinner/>
  );
};

export default Subject;
