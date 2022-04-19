import { Card } from "react-bootstrap";
import {useTheme} from '../../context/ThemeProvider';

const RecordingCard = (props) => {

  const isDark = useTheme();

  const dynamicStyles = isDark?'darkLecInfo':''

  return (
    <Card  className={`my-2 box-shadow ${dynamicStyles}`}>
      <a target="_blank" href={props.link} className={dynamicStyles}>
        <Card.Body>
          <Card.Title className="text-center">{props.title}</Card.Title>
        </Card.Body>
      </a>
    </Card>
  );
};

export default RecordingCard;
