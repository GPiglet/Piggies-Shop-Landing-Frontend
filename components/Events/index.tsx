import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

const Events = (props: any) => {
  return (
    <Box
      sx={{
        background: 'url(/texture.png)',
        backgroundColor: '#CCDB99',
        textAlign: 'center'
      }}
    >
      <CssBaseline />
      <Grid container>
        <Grid item xs={12} md={6}
          sx={{
            display: 'flex',
            alignItems: 'center',
            p: 8,
          }}
        >
          <div>
            <Typography
              sx={{
                color: props.theme.palette.primary.main,
                textAlign: {md: 'left'},
                fontFamily: 'Abril Fatface',
                fontSize: {xs: '2rem', lg: '3rem'},
                fontWeight: 700,
                lineHeight: .9,
              }}
            >
              Our luxury soaps are 100% natural providing nourishing benefits for your skin.
            </Typography>
            <Button variant="outlined" sx={{m: 2, padding: '10px 48px', borderRadius: '8px'}} >
              SHOP ALL
            </Button>
          </div>
        </Grid> 
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            sx={{
              width: '100%',
            }}
            alt="intro"
            src="/product-details1.png"
          />
        </Grid>                 
      </Grid>
    </Box>
  );
};
export default Events;
