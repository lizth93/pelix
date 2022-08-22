import Card from "react-bootstrap/Card";

function RenderCard(props) {
  const variant = "Dark";
  return (
    <Card
      bg={variant.toLowerCase()}
      key={variant}
      text={variant.toLowerCase() === "light" ? "dark" : "white"}
      style={{ width: "18rem" }}
      className="mb-2"
      onClick={props.onClick}
    >
      <Card.Img variant="Secondary " src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.name}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default RenderCard;
