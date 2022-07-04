import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';

const ProductImageWrapper = styled(Box)(({ theme }) => ({
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center'
  
}));

export default ProductImageWrapper;