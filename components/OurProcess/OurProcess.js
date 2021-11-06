import React from "react";
import { Bullet, OurProcessRoot, LineLink, Steps } from "./styles";
import { Container } from "../../styles/common";
import Card from "./Card";

import cardData from "./data.json";

const OurProcess = () => {
  return (
    <OurProcessRoot>
      <Container>
        <header>
          <h2>Our Process</h2>
          <p>
            In order to make sure we cover all bases and solve your problem thoroughly we follow a robust roadmap to
            help you reach your destination.
          </p>
        </header>
        <Steps>
          {cardData.map((data) => (
            <div className="step" key={data.title}>
              <Bullet />
              <LineLink />
              <Card title={data.title} body={data.body} />
            </div>
          ))}
        </Steps>
      </Container>
    </OurProcessRoot>
  );
};

export default OurProcess;
