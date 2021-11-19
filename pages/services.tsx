import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Divider, Typography } from '@mui/material';
import { handExitComplete } from '../src/utils/handleTransition';
import { DevelopmentIcon } from '../public/images/svg/developmentIcon';
import theme from '../src/styles/theme';
import { OnlineMarketingIcon } from '../public/images/svg/onlineMarketingIcon';
import { SeoIcon } from '../public/images/svg/seoIcon';
import { AboutButton } from './about';

export const StyledService = styled(Box)(({ theme }) => ({
  display: 'flex',
  borderRadius: 10,
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  width: '100%',
  ':not(:last-of-type)': {
    marginBottom: 10,
  },

  '& h3': {
    width: 150,
    minWidth: 150,
    fontWeight: 700,
    margin: '0 15px',
    color: theme.palette.text.primary,
  },

  '& p': {
    color: theme.palette.text.primary,
    marginLeft: 15,
  },

  '& .MuiSvgIcon-root': {
    fill: 'none',
    width: 30,
    height: 30,
    stroke: theme.palette.primary.main,
  },

  [theme.breakpoints.up('md')]: {
    '& .MuiSvgIcon-root': {
      width: '30%',
      height: '30%',
    },
  },
}));

export const StyleServiceList = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'grid',
  gridTemplateColumns: '1fr',
  padding: 10,
  gap: 20,
  maxWidth: 1280,
  margin: '100px auto 0 auto',

  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: '1fr 1fr',
  },
}));

const ServicesData = [
  {
    icon: <SeoIcon />,
    name: 'Web Development',
    description:
      'Vytvořím vám webové stránky na míru podle vašeho návrhu nebo pro vás návrh sám zajistím.',
  },
  {
    icon: <DevelopmentIcon />,
    name: 'SEO',
    description:
      ' Tvorba stránek nekončí jejich spuštěním. Web má především vydělávat. Společně se postaráme o to, aby tomu tak skutečně bylo.',
  },
  {
    icon: <OnlineMarketingIcon />,
    name: 'Online marketing',
    description:
      'Občas pouze vyhledávání nestačí, v tu chvíli vám pomohu zkrotit sociální sítě a placenou reklamu ve vyhledávání.',
  },
  {
    icon: <OnlineMarketingIcon />,
    name: 'e-commerce',
    description:
      'Chcete prodávat své produkty online? Pomůžu vám s tvorbou vašeho nového e-shopu',
  },
];

const Service = props => {
  return (
    <StyledService>
      {props.icon}
      <Box>
        <Typography variant={'subtitle1'} component={'h3'} align={'left'}>
          {props.serviceName}
        </Typography>
        <Typography
          variant={'body1'}
          align={'left'}
          color={theme.palette.text.secondary}
        >
          {props.serviceDescription}
        </Typography>
      </Box>
    </StyledService>
  );
};

const Services = (): JSX.Element => {
  return (
    <>
      <Divider textAlign={'left'} sx={{ width: '100%' }}>
        <Typography
          variant={'h4'}
          component={'h2'}
          align={'left'}
          sx={{ fontWeight: 'bold' }}
        >
          Služby
        </Typography>
      </Divider>
      <StyleServiceList>
        {ServicesData.map((service, index) => (
          <Service
            icon={service.icon}
            key={`service_${service.name}_${index}`}
            serviceName={service.name}
            serviceDescription={service.description}
          />
        ))}
      </StyleServiceList>
    </>
  );
};

export default Services;
