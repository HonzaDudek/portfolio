import React from 'react';
import { SvgIcon, SvgIconProps } from "@mui/material";

export const SeoIcon = (props: SvgIconProps): JSX.Element => {
  return (
    <SvgIcon
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 120.55 78.87'
      {...props}
      fill='none'
    >
      <path
        transform={'translate(14px, 0px)'}
        strokeWidth={2}
        stroke={props.stroke}
        d='M50.5,18.7A28.62,28.62,0,0,0,48,15.87,26.53,26.53,0,0,0,28.53,7.8,26.51,26.51,0,0,0,9.07,15.87,26.49,26.49,0,0,0,1,35.33,26.53,26.53,0,0,0,9.07,54.8a26.51,26.51,0,0,0,19.46,8.07A26.53,26.53,0,0,0,48,54.8l0,0a26.53,26.53,0,0,0,8-19.44c0-.89,0-1.77-.12-2.63M9.17,41.8l14.5-14.5L37.82,41.45,78.27,1H53.17m25.1,25.1V1M48,54.77l7.12,7.11L60,57,88.18,81.32h0l-13,13.05v0Q63,80.24,50.87,66.13l4.28-4.25M45.23,79.23a4.09,4.09,0,1,0,1.2,2.89A3.93,3.93,0,0,0,45.23,79.23ZM11.57,85a4.08,4.08,0,0,0,5.8,0,4.11,4.11,0,0,0-2.9-7,4.15,4.15,0,0,0-4.12,4.1A4,4,0,0,0,11.57,85Zm20.93-2.9a4.11,4.11,0,0,0-8.22,0A4,4,0,0,0,25.5,85a4.08,4.08,0,0,0,5.8,0A4,4,0,0,0,32.5,82.12Z'
      />
    </SvgIcon>
  );
};
