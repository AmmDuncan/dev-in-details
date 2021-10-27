import { CardContainer, CardRoot } from "./styles";
import cardContent from "./cardContent";

const Card = ({ heading, body }) => {
  return (
    <CardRoot>
      <header>
        {heading} <div className="bg" aria-hidden="true" />
      </header>
      <p>{body}</p>
    </CardRoot>
  );
};

const CardList = () => {
  return (
    <CardContainer>
      {cardContent.map(({ heading, body }) => (
        <Card key={heading} heading={heading} body={body} />
      ))}
    </CardContainer>
  );
};

export default CardList;
