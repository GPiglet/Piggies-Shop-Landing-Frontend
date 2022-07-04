import { styled, alpha } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const ProductDesc = styled(Typography)(({ theme }) => ({
    color: '#000',
    fontFamily: 'Quicksand',
    fontSize: '1rem',
    textAlign: 'left'
}));

export default ProductDesc;