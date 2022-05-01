import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { LeftSection, RightSection, Sections, Img } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <Sections>
      <LeftSection>
        <SectionTitle main center>
          Hi! I'm Hemesh...
          <br />a developer based in Austin, TX.
        </SectionTitle>
        <SectionText>
          I love building meaningful digital experiences (and eating pizza 🍕)!
        </SectionText>
      </LeftSection>
      <RightSection>
        <Img src={"/images/hemesh.jpeg"} />
      </RightSection>
    </Sections>
  </Section>
);

export default Hero;
