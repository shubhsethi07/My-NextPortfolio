import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './AboutStyles';


const About = () => {
 return (
    <Section id="about">
      <SectionDivider divider />
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
      Hello!
					<br/> <br/>
					I'm Shubham Sethi , a passionate person and a Web developer based in Ujjain , India. I am a Electrical Engineering graduate and later switched to the awesome world of web development.
						<br/>
						<br/>
					Always ready to dive in something new ,
					    <br/>	
					Constantly learning and evolving.
					<br/><br/>
      </SectionText>
      <SectionTitle>Skills</SectionTitle>
      <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            <br />
           JavaScript, ES6
            <br />
            HTML
            <br />
            CSS , SCSS
            <br />
            React.js
            <br/>
            Next.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            <br />
            Node.js
            <br/>
            Express.js
            <br/>
            Python
            <br/>
            MySQL
            <br/>
            MongoDB 
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Others</ListTitle>
          <ListParagraph>
            <br />
            GSAP
            <br/>
            Framer motion
            <br/>
            Git
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    </Section>
  );
};

export default About;