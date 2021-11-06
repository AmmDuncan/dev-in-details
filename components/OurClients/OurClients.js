import React from "react";
import { OurClientsRoot, Testimonial } from "./styles";
import { Container } from "../../styles/common";

const OurClients = () => {
  return (
    <OurClientsRoot>
      <div className="bg" aria-hidden="true" />
      <Container>
        <header>
          <h2>What our clients say about us</h2>
          <p>We've worked with a growing list of clients and here is what they have to say about us.</p>
        </header>

        <Testimonial>
          <div className="content">
            <p>
              I love the first one already. Especially the part about what we've done before. It's as though you knew
              what I wanted to say.
            </p>
          </div>
          <div className="profile">
            <div className="container">
              <div className="image">
                <span />
              </div>
              <div className="text">
                <p className="name">Gertrude</p>
                <p className="org">AbosseyOkai Spares</p>
              </div>
            </div>
          </div>
        </Testimonial>
      </Container>
    </OurClientsRoot>
  );
};

export default OurClients;
