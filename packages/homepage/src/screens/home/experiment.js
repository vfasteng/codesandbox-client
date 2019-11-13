import React from 'react';

import styled from 'styled-components';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { down } from 'styled-breakpoints';
import { H2, P } from '../../components/Typography';

import frameworks from '../../assets/images/frameworks.png';
import things from '../../assets/images/things.png';
import npm from '../../assets/images/npm.png';
import Tweet from '../../components/Tweet';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 304px;
  grid-gap: 2rem;
  position: relative;
  margin-top: 5rem;

  ${props => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
  }
`;

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 300px);
  grid-gap: 2rem;
  margin-top: 12.5rem;
  position: relative;
  z-index: 2;

  ${props => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
    justify-items: center;
    margin-top: 20rem;
  }
`;

const White = styled.span`
  color: white;
`;

const tweetStyle = `
  right: 1rem;
  left: auto;
  width: 25rem;
  margin-top: 1rem;
  height: 22rem;
  background: #151515
`;

const Experiment = ({ src, ...style }) => {
  const { scrollY } = useViewportScroll();
  const y = useTransform(scrollY, [0, -100], [0, 5], { clamp: false });

  return (
    <>
      <Grid>
        <div>
          <H2>Experiment Easily</H2>
          <P
            muted
            css={`
              margin-bottom: 2rem;
            `}
          >
            Try things out to see how they work in reality
          </P>
          <P muted>
            <White>Learn new frameworks</White> and test your understanding{' '}
          </P>
          <P muted>
            <White>Evaluate npm modules</White> to see what works for your
            project{' '}
          </P>
          <P muted>
            <White>Test out components</White> and create functional examples
          </P>
        </div>

        <Tweet
          style={tweetStyle}
          tweet={{
            username: 'gethackteam',
            job: 'Frontend Developer Hackteam',
            name: 'Roy Derks',
            quote:
              'I often use CodeSandbox to create demos or try out new JavaScript features or packages',
            url:
              'https://twitter.com/gethackteam/status/1173522963162959872?s=20',
          }}
        />
      </Grid>

      <motion.div style={{ ...style, y }}>
        <Section>
          <img src={frameworks} alt="Frameworks" />
          <img src={npm} alt="NPM Dependencies" />
          <img src={things} alt="Experiment" />
        </Section>
      </motion.div>
    </>
  );
};

export default Experiment;
