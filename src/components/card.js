import BootstrapCard from "react-bootstrap/Card";

function Card(props) {
  const variant = "Dark";
  return (
    <BootstrapCard
      bg={variant.toLowerCase()}
      key={variant}
      text={variant.toLowerCase() === "light" ? "dark" : "white"}
      style={{ width: "18rem" }}
      className="mb-2"
      onClick={props.onClick}
    >
      <BootstrapCard.Img variant="Secondary " src={props.image} />
      <BootstrapCard.Body>
        <BootstrapCard.Title>{props.title}</BootstrapCard.Title>
        <BootstrapCard.Text>{props.name}</BootstrapCard.Text>
      </BootstrapCard.Body>
    </BootstrapCard>
  );
}

export default Card;
