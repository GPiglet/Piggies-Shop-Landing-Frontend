import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import styles from '../../styles/Home.module.css';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

const CoverWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  paddingTop: 220,
  paddingBottom: 120,
  alignItems: 'center',
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    alignItems: 'flex-start',
    textAlign: 'left'
  },
}));

const Intro = (props: any) => {
  return (
    <Box>
      <CssBaseline />
      <img src="/intro-overlay.svg" alt="overlay" width={774} height={879} className={styles.overlay} />
      <Container maxWidth="xl" sx={{pl: {sm: 10}, pr: {sm: 10}}} disableGutters>
        <Grid container>
          <Grid item xs={12} md={5}>
            <CoverWrapper>
              <Typography 
                sx={{
                  p: '0px 12px', 
                  fontFamily: 'Old Standard TT', 
                  fontSize: 30,
                  fontWeight: 700,
                  color: props.theme.palette.primary.main, 
                  bgcolor: '#F9DE80',
                  borderRadius: 0,
                }}
              >
              NEW
              </Typography>
              <Typography
                sx={{
                  color: props.theme.palette.primary.main,
                  fontFamily: 'Abril Fatface',
                  fontSize: '6rem',
                  fontWeight: 700,
                  lineHeight: .9,
                  m: 1,
                }}
              >
                Pear <br/>kiwi & Mint
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Quicksand',
                  fontSize: '1.2rem',
                  fontWeight: 500,
                  color: '#363D1E', 
                  ml: 1,
                  mb: 9
                }}
              >
                They say that home is where the heart is. Perhaps that’s why a feeling of loss is so apparent when you are far from the ones you love. 
              </Typography>
              <Button variant="contained" sx={{ml: 1, padding: '10px 48px', borderRadius: '8px'}} >
                SHOW NOW
              </Button>
            </CoverWrapper>
          </Grid>
          <Grid item xs={12} md={7}>
            <Box
              component="img"
              sx={{
                display: {xs: 'none', md: 'block'},
                position: 'relative',
                left: '58px',
                top: '180px',
                width: '100%',
                objectFit: 'cover'
              }}
              alt="intro"
              src="/intro-right.png"
            />
          </Grid>
        </Grid>
      </Container>
      
    </Box>
  );
};
export default Intro;
