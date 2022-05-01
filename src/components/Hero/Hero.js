import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi! I'm Hemesh...
        <br />a developer based in Austin, TX.
      </SectionTitle>
      <SectionText>
        I love building meaningful digital experiences (and eating pizza 🍕)!
      </SectionText>
      {/*<Button onClick={() => (window.location = "https://google.com")}>*/}
      {/*  Learn more*/}
      {/*</Button>*/}
    </LeftSection>
  </Section>
);

export default Hero;
