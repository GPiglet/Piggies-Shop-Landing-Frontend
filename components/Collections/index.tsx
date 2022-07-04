import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

const Collections = (props: any) => {
  return (
    <Container maxWidth="xl" disableGutters>
      <CssBaseline />
        <Grid container>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              sx={{
                display: {xs: 'none', md: 'block'},
                position: 'relative',
                top: 50,
                width: '100%',
              }}
              alt="intro"
              src="/collection-left.png"
            />
          </Grid>
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
                  fontFamily: 'Abril Fatface',
                  fontSize: '3rem',
                  fontWeight: 700,
                  lineHeight: .9,
                  m: 1,
                }}
              >
                Improve your well-being with Aromatherapy
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Quicksand',
                  fontSize: '1.2rem',
                  fontWeight: 500,
                  color: '#363D1E', 
                  m: 2
                }}
              >
                Diffusing can be exactly what you need to add purpose and focus to your daily tasks. We've got tons of fun diffuser blends, with scents to suit every mood, day and situation.
              </Typography>
              <Button variant="outlined" sx={{m: 2, padding: '10px 48px', borderRadius: '8px'}} >
                EXPLORER THE COLLECTION
              </Button>
            </div>
          </Grid>          
        </Grid>
    </Container>
  );
};
export default Collections;
