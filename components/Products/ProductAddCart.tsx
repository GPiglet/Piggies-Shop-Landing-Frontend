import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';

const ProductAddCart = styled(Button)(({ theme }) => ({
    position: 'absolute',
    width: '90%',
    color: '#fff',
    marginBottom: theme.spacing(8),
}));

export default ProductAddCart;