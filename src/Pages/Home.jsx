import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import LecInfoCard from "../components/LecInfoCard/LecInfocard";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

const Home = () => {
  const [subjects, setSubjects] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://dinuka-mit-backend.herokuapp.com")
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setSubjects(data);
      })
      .catch((err) => {
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  return (
    <Container className="mt-3 mt-lg-5">
      {subjects && !isError && !isLoading && (
        <Row>
          {!isError &&
            subjects.map((subject) => (
              <Col sm={12} md={6} lg={3} key={subject._id}>
                <Link key={subject.id} to={`/${subject._id}`}>
                  <LecInfoCard {...subject} />
                </Link>
              </Col>
            ))}
        </Row>
      )}

      {!isError && isLoading && <LoadingSpinner />}
    </Container>
  );
};

export default Home;
