import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import CircleIcon from '@mui/icons-material/Circle';
import Stack from '@mui/material/Stack';
import ProductWrapper from '../Products/ProductWrapper';
import ProductImageWrapper from '../Products/ProductImageWrapper';
import ProductTitle from '../Products/ProductTitle';
import ProductDesc from '../Products/ProductDesc';
import ProductPrice from '../Products/ProductPrice';
import ProductAddCart from '../Products/ProductAddCart';
import Container from '@mui/material/Container';

const Trends = (props: any) => {
  const products = [
    {title: 'Basket INNER BEAUTY', image: '/product3.png', desc: 'Luminescent Nutritive Serum, Rose Petal Hydrosol Mist  and Nourish Mud Cleanser. ', price: 6495},
    {title: 'Uplift Handcrafted Soap Bar', image: '/product4.png', desc: 'Is a peaceful and balancing bar topped with calendula, dried rose petals and lavender.', price: 7},
    {title: 'Diffusers', image: '/category3.png'},
    {title: 'Aromatherapy', image: '/category4.png'},
  ];
  const colors = ['#E29696', '#A1E296', '#82D2EC', '#9E9DF1'];
  return (
    <Container maxWidth="xl" disableGutters>
      <CssBaseline />
      <Box
        sx={{
          p: 12,
          background: 'url(/trends-left.png) no-repeat',
          backgroundSize: 'auto',
          backgroundPositionX: 'left',
          backgroundPositionY: 'bottom',
          backgroundColor: '#f1f1f1',
          textAlign: 'center'
        }}
      >
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
              Trends
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
                  <ProductImageWrapper>
                    <ProductAddCart variant="contained" color="secondary">
                      Add To Cart
                    </ProductAddCart>
                    <Box
                      sx={{
                        width: '100%'
                      }}
                      component="img"
                      alt={product.title}
                      src={product.image}
                    />
                  </ProductImageWrapper>
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
    </Container>
  );
};
export default Trends;
