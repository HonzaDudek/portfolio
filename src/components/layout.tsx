import Head from 'next/head';
import React, { PropsWithChildren } from 'react';
import { Box, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

export const siteTitle = 'Jan Dudek - Web development';

interface LayoutProps {
  home?: boolean;
  isDark?: boolean;
}

const CustomizedRootContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: 20,
  position: 'relative',
  backgroundColor: '#FFFFFF',
}));

const CustomizedPageContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  padding: 0 !important;
  width: 100%;
  min-width: 100%;
  justify-content: space-evenly;
  z-index: 3;
`;

const Layout = ({
  children,
  isDark,
}: PropsWithChildren<LayoutProps>): JSX.Element => {
  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
        />
        <script
          src='https://kit.fontawesome.com/306260bfc2.js'
          crossOrigin='anonymous'
        />

        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/icon?family=Material+Icons'
        />
        <meta
          name='description'
          content='Learn how to build a personal website using Next.js'
        />
        <meta
          property='og:image'
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name='og:title' content={siteTitle} />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <CustomizedRootContainer>
        <CustomizedPageContainer>{children}</CustomizedPageContainer>
      </CustomizedRootContainer>
    </>
  );
};
export default Layout;
