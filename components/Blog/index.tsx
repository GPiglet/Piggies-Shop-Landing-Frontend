import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

const ArticleWrapper = styled(Box)(({ theme }) => ({
  boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.15)',
  borderRadius: 14,
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#5F6C37',
    '& p': {
      color: '#fff'
    }
  },
}));

const ArticleImageWrapper: any = styled(Box)(({ theme }) => ({
  width: '100%',
  position: 'relative',
  borderRadius: '12px 12px 0 0',

}));

const ArticleContentWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(3),
}));

const ArticleTitle = styled(Typography)(({ theme }) => ({
  color: '#5F6C37',
  fontFamily: 'Old Standard TT',
  fontWeight: 700,
  fontSize: '1.5rem',
  textAlign: 'left',
}));

const ArticleContent = styled(Typography)(({ theme }) => ({
  color: '#242914',
  fontFamily: 'Quicksand',
  width: '100%',
  height: '3rem',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  textAlign: 'left',
}));

const Blog = (props: any) => {
  const articles = [
    {title: 'How to create your own essential oil diffuser blends', content: 'As you begin creating your own diffuser blends, it’s important to keep a few. Celebrate the mom in your life with these simple, handcrafted, heartfelt gifts!', image: '/article1.png'},
    {title: '7 easy oil-infused Mother’s Day gift ideas', content: 'Celebrate the mom in your life with these simple, handcrafted, heartfelt gifts!', image: '/article2.png'},
    {title: 'Geranium Bourbon: Fresh, floral, sweet', content: 'Fill your space with a fresh, uplifting aroma reminiscent of a greenhouse in full', image: '/article3.png'},
  ]
  return (
    <Box
      sx={{
        p: 12,
        textAlign: 'center'
      }}
    >
      <CssBaseline />
      <Typography
        sx={{
          color: props.theme.palette.primary.main,
          fontFamily: 'Abril Fatface',
          fontSize: '3rem',
          fontWeight: 700,
          lineHeight: .9,
          mb: 6,
        }}
      >
        Blog
      </Typography>
      <Grid container spacing={2}>
        {articles.map((article, index) => {
          return (
            <Grid item key={index} xs={12} md={4} lg={4}>
              <ArticleWrapper>
                <ArticleImageWrapper
                  component="img"
                  alt={article.title}
                  src={article.image}
                />
                <ArticleContentWrapper>
                  <ArticleTitle>
                    {article.title}
                  </ArticleTitle>
                  <Divider 
                    sx={{
                      mt: 1,
                      mb: 2
                    }}
                  />
                  <ArticleContent>
                    {article.content}
                  </ArticleContent>
                </ArticleContentWrapper>
              </ArticleWrapper>
            </Grid>
          )
        })}
        
      </Grid>
      <Button variant="outlined"
        sx={{mt: 4, padding: '10px 48px', borderRadius: '8px'}}
      >
        See All
      </Button>
    </Box>
  );
};
export default Blog;
