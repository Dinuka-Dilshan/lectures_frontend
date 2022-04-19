import { Card } from "react-bootstrap";
import {useTheme} from '../../context/ThemeProvider';

const LecInfoCard = ({ name, recordings, src }) => {

  const isDark = useTheme();

  const dynamicStyles= isDark?'darkLecInfo':''

  return (
    <Card className= {`m-2 borderc ${dynamicStyles}`}  >
      <img
        src={src}
        style={{
          height: "12rem",
          width: "100%",
          objectFit: "cover",
          borderTopLeftRadius: "0.4rem",
          borderTopRightRadius: "0.4rem",
        }}
        alt=""
      />
      <Card.Body>
        <Card.Title className="text-center">{name}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default LecInfoCard;
