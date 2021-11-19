import React, { PropsWithChildren } from 'react';
import { Box, styled, SvgIcon, Typography } from '@mui/material';
import theme from '../../styles/theme';

interface IContactItemProps {
  itemName: string;
  itemValue: string;
}

const StyledContactItemWrapper = styled(Box)({
  display: 'flex',
  marginBottom: 10,
  alignItems: 'flex-start',
});

const StyledSvgIcon = styled(SvgIcon)({
  height: '1.5em',
  color: theme.palette.primary.main,
  marginRight: 10,
});

export const ContactItem = ({
  children,
  itemName,
  itemValue,
}: PropsWithChildren<IContactItemProps>): JSX.Element => {
  return (
    <StyledContactItemWrapper>
      <StyledSvgIcon fontSize={'large'}>{children}</StyledSvgIcon>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography variant={'h6'}>{itemName}</Typography>
        <Typography variant={'subtitle2'}>{itemValue}</Typography>
      </Box>
    </StyledContactItemWrapper>
  );
};
