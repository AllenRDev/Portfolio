import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
    <SectionTitle main center>
    Hi I'm <br />
    Allen Roberts
    </SectionTitle>
    <SectionText>
      I'm a web developer trying to hone my skills in modern front end frameworks, primarily React.
    </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;