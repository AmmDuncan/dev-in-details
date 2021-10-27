import React from "react";
import { CallToActions, HeroContent, HeroIllustration, HeroRoot } from "./styles";
import SetupAnalyticsIllus from "../../assets/SetupAnalyticsIllus";
import { Container } from "../../styles/common";
import { Button, ButtonOutlined } from "../Button/Button";
import Rocket from "../../assets/Rocket";
import GoogleG from "../../assets/GoogleG";
import MoneyBag from "../../assets/MoneyBag";

const Hero = () => {
  return (
    <HeroRoot>
      <div className="bg" aria-hidden="true" />
      <Container>
        <HeroContent>
          <h1>websites that work for you</h1>
          <p>We design websites that produce actual business value.</p>
          <CallToActions>
            <Button>Contact us</Button>
            <ButtonOutlined>View our process</ButtonOutlined>
          </CallToActions>
        </HeroContent>

        <HeroIllustration>
          <SetupAnalyticsIllus />
          <section className="highlights">
            <article className="highlight">
              <Rocket /> <span>Boost Conversion Rates</span>
            </article>
            <article className="highlight">
              <GoogleG /> <span>Rank higher on search engines</span>
            </article>
            <article className="highlight">
              <MoneyBag /> <span>Attract actual paying clients</span>
            </article>
          </section>
        </HeroIllustration>
      </Container>
    </HeroRoot>
  );
};

export default Hero;
