import React from "react";
import PropTypes from "prop-types";

import urls from "utils/constants/urls";

import {
  Section,
  FlexStart,
  FlexCenter,
  Div,
  HideSection,
} from "components/core/Grid";
import {
  Title,
  Paragraph,
  SubTitle,
  Color,
  Link,
} from "components/core/Typography";
import { Photo } from "./AboutStyle";

const About = ({ showSection, setShowSection }) => (
  <Section>
    <FlexStart>
      <HideSection>
        <SubTitle
          primaryColor
          pointer
          onClick={() => setShowSection(!showSection)}
        >
          {"< close />"}
        </SubTitle>
      </HideSection>

      <FlexCenter row={true}>
        <Div width="30%">
          <Photo />

          <Div margin="2rem 0">
            <FlexCenter>
              <SubTitle primaryColor margin="1rem 0" textAlign="center">
                Connect with me:
              </SubTitle>

              <Link
                href={urls.LINKS.linkedin}
                target="_blank"
                display="block"
                margin="1rem 0"
              >
                {"<Linkedin />"}
              </Link>

              <Link href={urls.LINKS.github} target="_blank" display="block">
                {"<Github />"}
              </Link>

              <Link
                href={urls.LINKS.medium}
                target="_blank"
                display="block"
                margin="1rem 0"
              >
                {"<Medium />"}
              </Link>
            </FlexCenter>
          </Div>
        </Div>

        <Div margin="0 2rem">
          <Title margin="4rem 0">
            about me<Color color="white">.</Color>
          </Title>

          <Paragraph>
            I'm graduated in Systems Analysis and Development, passionate about
            technology and Front-End development.
          </Paragraph>

          <Paragraph>
            I'm a developer since 2016 and I currently work at{" "}
            <Link href={urls.LINKS.work} noPadding>
              @iFood.
            </Link>{" "}
            I currently live in Belo Horizonte - MG, but my big dream is to have
            a career in Canada =)
          </Paragraph>

          <Div margin="2rem 0 0 0">
            <SubTitle primaryColor margin="1rem 0">
              What I know:
            </SubTitle>
            <Paragraph>
              ReactJs, React Native, Styled Components, Hooks, Redux, Jest,
              React Testing Library, Javascript, Typescript, HTML5, CSS/SASS,
              Swift.
            </Paragraph>
          </Div>

          <Div margin="2rem 0 0">
            <FlexStart>
              <SubTitle primaryColor margin="1rem 0">
                Some cool things:
              </SubTitle>

              <Paragraph>- I have a beautiful 70s blue beetle</Paragraph>

              <Paragraph>- I have a great passion for Canada</Paragraph>

              <Paragraph>
                - I collect miniatures of games and drawings
              </Paragraph>

              <Paragraph>- I'm a big fan of Pink Floyd</Paragraph>

              <Paragraph>- I love creating drawings with CSS</Paragraph>
            </FlexStart>
          </Div>
        </Div>
      </FlexCenter>
    </FlexStart>
  </Section>
);

About.propTypes = {
  setShowSection: PropTypes.func.isRequired,
  showSection: PropTypes.bool,
};

About.defaultProps = {
  showSection: true,
};

export default About;
