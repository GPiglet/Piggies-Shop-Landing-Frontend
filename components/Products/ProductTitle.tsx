import { styled, alpha } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const ProductTitle = styled(Typography)(({ theme }) => ({
    color: '#5F6C37',
    fontFamily: 'Old Standard TT',
    fontWeight: 700,
    fontSize: '1.5rem',
    textAlign: 'left'
}));

export default ProductTitle;