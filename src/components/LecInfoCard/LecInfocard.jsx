import { Card} from "react-bootstrap";

const LecInfoCard = ({name,recordings,src}) => {

  return (
    <Card className="m-2 text-dark ">
     <img src={src} style={{height:'12rem',width:'100%',objectFit:"cover"}} alt="" />
      <Card.Body>
          <Card.Title >
             {name}
          </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default LecInfoCard;
