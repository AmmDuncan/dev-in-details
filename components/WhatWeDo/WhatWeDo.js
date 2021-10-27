import { WhatWeDoRoot } from "./styles";
import { Container } from "../../styles/common";
import CardList from "./CardList";

const WhatWeDo = () => {
  return (
    <WhatWeDoRoot id="what-we-do">
      <Container>
        <header>
          <h2>What we do</h2>
          <p>We provide digital marketing services. And here are the services we focus on and do best at.</p>
        </header>
        <CardList />
      </Container>
    </WhatWeDoRoot>
  );
};

export default WhatWeDo;
