import React from 'react';
import { Box, Divider, Typography, useTheme } from '@mui/material';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MapIcon from '@mui/icons-material/Map';
import { QueryForm } from '../src/components/queryForm/queryForm';
import { ContactItem } from '../src/components/molecules/contactItem';
import { StyledSection } from './index';

export default function Contact() {
  const theme = useTheme();

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}>
      <Divider textAlign={'left'} sx={{ width: '100%' }}>
        <Typography
          variant={'h4'}
          component={'h2'}
          align={'left'}
          sx={{ fontWeight: 'bold' }}
        >
          Kontakt
        </Typography>
      </Divider>
      <StyledSection sectionPosition={'left'}>
        <Box>
          <ContactItem
            itemName={'Adresa'}
            itemValue={'Andělská Hora 236, Andělská Hora, 364 71 - Bochov'}
          >
            <MapIcon sx={{ fill: theme.palette.primary.main }} />
          </ContactItem>
          <ContactItem itemName={'E-mail'} itemValue={'honza@honzadudek.cz'}>
            <AlternateEmailIcon sx={{ fill: theme.palette.primary.main }} />
          </ContactItem>
          <ContactItem itemName={'Telefon'} itemValue={'+420 728 956 965'}>
            <LocalPhoneIcon sx={{ fill: theme.palette.primary.main }} />
          </ContactItem>
        </Box>
      </StyledSection>
      <StyledSection sectionPosition={'right'}>
        <QueryForm />
      </StyledSection>
    </Box>
  );
}
