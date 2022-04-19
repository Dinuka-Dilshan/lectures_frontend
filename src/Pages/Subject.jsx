import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import RecordingCard from "../components/RecordingCard/RecordingCard";
import {FiBookOpen} from 'react-icons/fi';
import {BiVideoRecording} from 'react-icons/bi';
import {BsBookmarkCheck} from 'react-icons/bs';
import {SiWebmoney} from 'react-icons/si';
 
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
   !isError && !isLoading && subjectData ? <Container className="pb-5 mt-4 mt-lg-0">
      <div className="my-4 text-second text-center fs-3 fw-bold "><FiBookOpen/> {subjectData && subjectData.name}</div>

      <div>
        <h5 className="mt-lg-3  text-yellow"><BiVideoRecording className="pb-1 pe-1" size={25}/>Recordings</h5>
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

      <div className="mt-3 mt-lg-0">
        <h5 className="mt-lg-3 text-green"><BsBookmarkCheck className="pb-1 pe-1"/>Notes</h5>
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

      <div className="mt-3 mt-lg-0">
        <h5 className="mt-lg-3 text-main"><SiWebmoney className="pb-1"/> CAL</h5>
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
