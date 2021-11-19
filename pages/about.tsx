import React from 'react';
import { Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { handExitComplete } from '../src/utils/handleTransition';
import { StyledImage, StyledSection } from './index';

export const AboutButton = styled(Button)(({ theme }) => ({
  width: 210,
  position: 'relative',
  left: 'calc(50% - 105px)',

  [theme.breakpoints.up('md')]: {
    position: 'absolute',
    bottom: 30,
  },
  zIndex: 4,
}));

export default function About() {
  return (
    <>
      <StyledSection sectionPosition={'left'}>
        <StyledImage
          src={'/images/profile.jpg'}
          layout={'responsive'}
          height={150}
          width={150}
        />
      </StyledSection>
      <StyledSection sectionPosition={'right'}>
        <Typography variant={'body1'} color={'textPrimary'}>
          Vystudoval jsem Vysokou školu ekonomickou v Praze, během studií jsem
          se věnoval marketingu, nejprve průzkumu trhu v Komerční bance a
          následně online marketingu konzultant v rámci reklamní skupiny
          Publicis Groupe. Programování bylo vždy mým koníčkem a tak jsem se v
          roce 2018 rozhodl se tomuto oboru věnovat naplno. Prozatím jsem se
          věnoval spíše práci na týmových projektech, ať už například aplikace
          Effento nebo v poslední době především Alza.cz. Rád bych se ale také
          věnoval projektům, které mohu s klienty napřímo.
        </Typography>
      </StyledSection>
      <AboutButton
        variant={'outlined'}
        color='primary'
        onClick={() => handExitComplete('#services')}
      >
        Služby
      </AboutButton>
    </>
  );
}
