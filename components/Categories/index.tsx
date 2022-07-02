import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';

const CategoryWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: '#FFFDF5',
  boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.15)',
  borderRadius: '0px 20px',
  padding: '72px 0',
  marginTop: 12,
  minWidth: 300,
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#5F6C37',
    '& > p': {
      color: '#fff'
    }
  },
}));

const CategoryTitle = styled(Typography)(({ theme }) => ({
  color: '#5F6C37',
  fontFamily: 'Old Standard TT',
  fontWeight: 700,
  fontSize: '1.5rem',
}));

const Categories = (props: any) => {
  const categories = [
    {title: 'Essential oils', icon: '/category1.png', alt: 'Essential oils'},
    {title: 'Natural cosmetics', icon: '/category2.png', alt: 'Natural cosmetics'},
    {title: 'Diffusers', icon: '/category3.png', alt: 'Diffusers'},
    {title: 'Aromatherapy', icon: '/category4.png', alt: 'Aromatherapy'},
  ]
  return (
    <Box
      sx={{
        p: 12,
        mt: 24,
        background: 'url(/texture.png)',
        backgroundColor: '#f1f1f1',
        textAlign: 'center'
      }}
    >
      <CssBaseline />
      <Grid container>
        {categories.map((category, index) => {
          return (
            <Grid item key={index} xs={12} md={6} lg={3}>
              <CategoryWrapper>
                <Box
                  component="img"
                  alt={category.alt}
                  src={category.icon}
                />
                <CategoryTitle>
                  {category.title}
                </CategoryTitle>
              </CategoryWrapper>
            </Grid>
          )
        })}
        
      </Grid>
    </Box>
  );
};
export default Categories;
