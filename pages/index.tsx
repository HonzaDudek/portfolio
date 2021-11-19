import React, { useEffect, useState } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import { styled } from '@mui/material/styles';
import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Image, { ImageProps } from 'next/image';
import theme, { CustomTheme } from '../src/styles/theme';
import Layout from '../src/components/layout';
import { Navigation } from '../src/components/navigation';
import { handExitComplete } from '../src/utils/handleTransition';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import * as profilePicture from '../public/images/profile.jpg';
import About, { AboutButton } from './about';
import Services from './services';
import Contact from './contact';

const StyledCtaButton = styled(Button)(() => ({
  backgroundColor: theme.customTheme.colors.terciary,
  color: theme.palette.text.secondary,
  height: 60,
  width: 300,
  marginTop: 30,
}));

const StyledHighlightedText = styled(Typography)(({ theme: CustomTheme }) => ({
  color: theme.customTheme.colors.terciary,
}));

interface StyledSectionProps {
  sectionPosition: 'left' | 'right';
  reverseFlow?: boolean;
}

export const StyledSection = styled(Box)<StyledSectionProps>(
  ({ theme, sectionPosition, reverseFlow }) => ({
    margin: '100px auto 0 auto',
    width: '100%',

    display: 'flex',
    flexDirection: reverseFlow ? 'column-reverse' : 'column',
    justifyContent: 'center',
    alignItems: sectionPosition === 'left' ? 'flex-start' : 'center',

    [theme.breakpoints.up('md')]: {
      maxWidth: sectionPosition === 'left' ? 700 : 770,

      padding: 20,
      flexDirection: 'column',
    },
  })
);
export const StyledImage = styled(Image)<ImageProps>(({ theme }) => ({
  boxShadow: '1px 2px 3px rgba(0,0,0,0.5)',
  borderRadius: 20,
  minHeight: '0px !important',
}));

interface StyledPageProps {
  reverseFlow?: boolean;
  order: number;
}

const StyledPage = styled(Box)<StyledPageProps>(({ order, reverseFlow }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  paddingBottom: 100,
  margin: 'auto',
  position: 'relative',
  flexDirection: reverseFlow ? 'column-reverse' : 'column',
  minHeight: 600,

  [theme.breakpoints.up('md')]: {
    justifyContent: 'center',
    paddingBottom: 0,
    '&:not(.column)': {
      flexDirection: 'row',
    },
  },
  zIndex: 3,
}));

const StyledTextSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '0 50px',

  maxWidth: 450,

  '& h1': {
    margin: '0',
  },

  '& h4': {
    margin: '10px 0 0 0',
  },
}));

const ProfilePictureWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  borderRadius: '50%',
  boxShadow: '1px 2px 3px rgba(0,0,0,0.15)',
  padding: 20,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  '& img': {
    margin: 'auto',
    borderRadius: '50%',
  },

  [theme.breakpoints.up('md')]: {
    width: 450,
    height: 450,
  },
}));

function HomePage() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <>
      <ProfilePictureWrapper>
        <Image
          src={profilePicture}
          alt='Picture of the author'
          width={matches ? 430 : 230}
          height={matches ? 430 : 230}
        />
      </ProfilePictureWrapper>

      <StyledTextSection>
        <Typography variant={'h4'} align={'center'} color={'textPrimary'}>
          Frontent-developer
        </Typography>
        <StyledHighlightedText variant={'h2'} as={'h1'} align={'center'}>
          Jan Dudek
        </StyledHighlightedText>

        <Typography variant={'body1'} align={'center'} color={'textPrimary'}>
          Jsem front-end vývojář, s přesahem do Node.js. Dělám weby, které
          dávají smysl.
        </Typography>
      </StyledTextSection>
    </>
  );
}

const Home = (): JSX.Element => {
  return (
    <Layout home>
      <Navigation />
      <StyledPage id={'#home'} order={0} className={'dark'}>
        <ReactFullpage.Wrapper>
          <HomePage />
        </ReactFullpage.Wrapper>
      </StyledPage>
      <StyledPage id={'#services'} order={1} className={'column'}>
        <ReactFullpage.Wrapper>
          <Services />
        </ReactFullpage.Wrapper>
      </StyledPage>
      <StyledPage id={'#contact'} order={2}>
        <ReactFullpage.Wrapper>
          <Contact />
        </ReactFullpage.Wrapper>
      </StyledPage>
      {/*<StyledPage id={'#about'} order={2}>*/}
      {/*  <ReactFullpage.Wrapper>*/}
      {/*    <About />*/}
      {/*  </ReactFullpage.Wrapper>*/}
      {/*</StyledPage>*/}
    </Layout>
  );
};

export default Home;
