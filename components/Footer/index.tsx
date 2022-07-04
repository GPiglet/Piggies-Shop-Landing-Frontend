import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import Button from '@mui/material/Button';
import ListSubheader from '@mui/material/ListSubheader';
import Avatar from '@mui/material/Avatar';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Stack from '@mui/material/Stack';

const BackgroundWrapper = styled('div')(({ theme }) => ({
  backgroundColor: '#CCDB99',
  padding: '10px 20px',
  [theme.breakpoints.up('md')]: {
    padding: '30px 60px',
  },
}));

const FooterWrapper = styled('div')(({ theme }) => ({
  backgroundColor: '#F9DE80',
  padding: '10px 20px',
  [theme.breakpoints.up('md')]: {
    padding: '10px 150px',
  },
}));

const Footer = (props: any) => {
  const menus = [
    {header: 'Customer Support', spacing: 2, items: ['Shipping', 'Free Returns', 'Track Your Order', 'Gift Cards']},
    {header: 'About Us', spacing: 2, items: ['Our Values', 'Sustainability', 'Brand Ambassadors', 'Fitness Professionals', 'Gap Inc. Sustainability']},
    {header: 'Customer Service', spacing: 4, items: ['Help', 'Leader Support', 'Pleasant Grove Product Center', 'Recall—Important Safety Information']},
  ]
  return (
    <>
    <BackgroundWrapper>
      <CssBaseline />
      <Container maxWidth="xl" sx={{pl: {sm: 10}, pr: {sm: 10}}} disableGutters>
        <Grid container>
          <Grid item xs={12} md={4} sx={{display: 'flex', alignItems: 'center'}}>
            <List
              component="nav"
              subheader={
                <ListSubheader component="div" sx={{backgroundColor: 'transparent', fontSize: '3rem', color: '#424B25', p: 0}}>
                  Piggies Shop
                </ListSubheader>
              }
            >
              <ListItemText sx={{color: '#000', mt: 4, width: '80%'}} primaryTypographyProps={{fontSize: '1rem'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, sit risus mattis erat fermentum.</ListItemText>
            </List>
          </Grid>
          {
            menus.map((menu, i) => {
              return (
                <Grid item key={i} xs={3} md={menu.spacing}>
                  <List
                    component="nav"
                    subheader={
                      <ListSubheader component="div" sx={{backgroundColor: 'transparent', fontSize: '18px', color: '#424B25'}}>
                        {menu.header}
                      </ListSubheader>
                    }
                  >
                    {menu.items.map((submenu, ii) => {
                      return (
                        <ListItemButton key={ii} sx={{color: '#32391C'}}>{submenu}</ListItemButton>
                      )
                    })}
                  </List>
                </Grid>
              )
            })
          }
        </Grid>
      </Container>
    </BackgroundWrapper>
    <FooterWrapper>
      <Grid container textAlign={'center'}>
        <Grid item xs={12} md={8} sx={{display: 'flex', alignItems: 'center'}}>
          <Typography sx={{color: '#32391C', textAlign: {md: 'left'}}}>© 2022 Piggies Shop All rights reserved. |  Terms and Conditions | Return policy</Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Stack direction='row' spacing={1} sx={{justifyContent: {xs: 'center', md: 'flex-end'}}}>
          <Avatar sx={{bgcolor: 'transparent'}}><TwitterIcon sx={{color: "#424B25"}}/></Avatar>
          <Avatar sx={{bgcolor: 'transparent'}}><InstagramIcon sx={{color: "#424B25"}}/></Avatar>
          <Avatar sx={{bgcolor: 'transparent'}}><FacebookIcon sx={{color: "#424B25"}}/></Avatar>
          <Avatar sx={{bgcolor: 'transparent'}}><LinkedInIcon sx={{color: "#424B25"}}/></Avatar>
          </Stack>
        </Grid>
      </Grid>
    </FooterWrapper>
    </>
  );
};
export default Footer;
