import { Card } from "react-bootstrap";

const RecordingCard = (props) => {
  return (
    <Card  className="my-2 box-shadow">
      <a target="_blank" href={props.link}>
        <Card.Body>
          <Card.Title className="text-center">{props.title}</Card.Title>
        </Card.Body>
      </a>
    </Card>
  );
};

export default RecordingCard;
