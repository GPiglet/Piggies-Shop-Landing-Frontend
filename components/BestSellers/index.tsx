import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import CircleIcon from '@mui/icons-material/Circle';
import Stack from '@mui/material/Stack';

const ProductWrapper = styled(Box)(({ theme }) => ({
  marginTop: 12,
  maxWidth: 383,
  cursor: 'pointer',
  '&:hover': {
    '& > p': {
      color: theme.palette.primary.main
    }
  },
}));

const ProductTitle = styled(Typography)(({ theme }) => ({
  color: '#5F6C37',
  fontFamily: 'Old Standard TT',
  fontWeight: 700,
  fontSize: '1.5rem',
  textAlign: 'left'
}));

const ProductDesc = styled(Typography)(({ theme }) => ({
  color: '#000',
  fontFamily: 'Quicksand',
  fontSize: '1rem',
  textAlign: 'left'
}));

const ProductPrice = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontFamily: 'Old Standard TT',
  fontSize: '2rem',
  fontWeight: 700,
  textAlign: 'right'
}));

const BestSellers = (props: any) => {
  const products = [
    {title: 'Aroma Diffuser', icon: '/product1.png', alt: 'Aroma Diffuser', desc: 'Original product comes in three styles of color, usb charger', price: 20},
    {title: 'Lux Aroma Diffuser', icon: '/product2.png', alt: 'Lux Aroma Diffuser', desc: 'Beautiful decorative object, perfumes the space with your favorite fragrance.', price: 15},
    {title: 'Diffusers', icon: '/category3.png', alt: 'Diffusers'},
    {title: 'Aromatherapy', icon: '/category4.png', alt: 'Aromatherapy'},
  ];
  const colors = ['#E29696', '#A1E296', '#82D2EC', '#9E9DF1'];
  return (
    <Box
      sx={{
        p: 12,
        mt: 16,
        background: 'url(/best-seller-left.png) no-repeat',
        backgroundSize: 'auto',
        backgroundPositionX: 'left',
        backgroundPositionY: 'bottom',
        backgroundColor: '#f1f1f1',
        textAlign: 'center'
      }}
    >
      <CssBaseline />
      <Grid container>
        <Grid item xs={12} md={4} 
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
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
            Best Sellers
          </Typography>
          <Button variant="contained" sx={{m: 2, padding: '10px 48px', borderRadius: '8px'}} >
            Shop All
          </Button>
          </div>
        </Grid>
        {products.slice(0, 2).map((product, index) => {
          return (
            <Grid item key={index} xs={12} md={4}
              sx={{
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <ProductWrapper>
                <Box
                  sx={{
                    width: '100%'
                  }}
                  component="img"
                  alt={product.alt}
                  src={product.icon}
                />
                <ProductTitle>
                  {product.title}
                </ProductTitle>
                <ProductDesc>
                  {product.desc}
                </ProductDesc>
                <Grid container>
                  <Grid item xs={6} sx={{display: 'flex', alignItems: 'center'}}>
                    <Stack direction="row">
                      <CircleIcon sx = {{color: colors[Math.floor(Math.random() * colors.length)]}}/>
                      <CircleIcon sx = {{color: colors[Math.floor(Math.random() * colors.length)]}}/>
                      <CircleIcon sx = {{color: colors[Math.floor(Math.random() * colors.length)]}}/>
                    </Stack>
                  </Grid>
                  <Grid item xs={6}>
                    <ProductPrice>
                      ${product.price}
                    </ProductPrice>
                  </Grid>
                </Grid>
              </ProductWrapper>
            </Grid>
          )
        })}
        
      </Grid>
    </Box>
  );
};
export default BestSellers;
