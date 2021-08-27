import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          <p>Hello! I'm</p>
          Shubham Sethi <br />
          Web Developer.
        </SectionTitle>
        <SectionText>
        I create bespoke websites to help people further go online.
        </SectionText>
        <Button onClick= {() => window.location = 'mailto:sethishubh0007@gmail.com'}>Let's work together</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;