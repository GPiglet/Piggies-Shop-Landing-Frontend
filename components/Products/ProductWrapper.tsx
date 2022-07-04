import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';

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

export default ProductWrapper; 

  
