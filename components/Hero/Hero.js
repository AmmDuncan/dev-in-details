import React from "react";
import {
  CallToActions,
  HeroContent,
  HeroIllustration,
  HeroRoot,
} from "./styles";
import SetupAnalyticsIllus from "../../assets/SetupAnalyticsIllus";
import { Container } from "../../styles/globalStyle";
import { Button, ButtonOutlined } from "../Button/Button";
import { above } from "../../theme/ThemeProvider";

const Hero = () => {
  console.log(above("mobM"));

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
        </HeroIllustration>
      </Container>
    </HeroRoot>
  );
};

export default Hero;
