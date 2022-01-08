import React from 'react';
import Typography from '@material-ui/core/Typography';
import LinkOther from '@material-ui/core/Link';

export const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <LinkOther color="inherit" 
            href="https://uenishi.cloud/"
            target="_blank"
            rel="noopener">
        uenishi
      </LinkOther>
    </Typography>
  );
}