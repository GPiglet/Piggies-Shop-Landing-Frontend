import { styled, alpha } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const ProductPrice = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.main,
    fontFamily: 'Old Standard TT',
    fontSize: '2rem',
    fontWeight: 700,
    textAlign: 'right'
}));

export default ProductPrice;