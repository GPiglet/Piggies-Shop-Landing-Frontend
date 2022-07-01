import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const pages = ['Home', 'About us', 'Shop', 'Contact'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const isLogin = false;

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  fontSize: '14px',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(2)})`,
    transition: theme.transitions.create('width'),
    width: '12ch',
    [theme.breakpoints.up('sm')]: {
      width: '0',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


const ResponsiveHeader = (props: any) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const stickyHeader = React.useRef<any>(null);
  const onScroll = () => {
    if ( stickyHeader.current )
    {
      if ( window.pageYOffset > 0 )
      {
        stickyHeader.current.style.backgroundColor = '#fff';
        stickyHeader.current.style.marginTop = 0;
      }
      else
      {
        stickyHeader.current.style.backgroundColor = 'transparent';
        stickyHeader.current.style.marginTop = '11px';
      }
    }
  }

  React.useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return ()=>window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AppBar position="fixed" color="transparent" ref={stickyHeader}
      sx = {{
        boxShadow: 0,
        transition: 'margin-top 250ms cubic-bezier(0.4, 0, 0.6, 1) 0ms, background-color 250ms cubic-bezier(0.4, 0, 0.6, 1) 0ms',
      }}
    >
      <Container maxWidth="xl" sx={{pl: {sm: 10}, pr: {sm: 10}}} disableGutters>
        <Toolbar disableGutters
          sx = {{
          }}
        >
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Arial',
              // fontWeight: 700,
              letterSpacing: '.1rem',
              textDecoration: 'none',
              color: props.theme.palette.primary.main,
            }}
          >
            PIGGIES
          </Typography>
          {/* mobile header */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            PIGGIES
          </Typography>

          {/* menus */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, ml: 6, justifyContent: 'flex-end' }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ color: props.theme.palette.primary.main, display: 'block', pl: 0.5, pr: 0.5 }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: 'flex'}}>
            <Search>
              <SearchIconWrapper>
                <Box
                  component="img"
                  sx={{
                    width: '100%',
                  }}
                  alt="search"
                  src="/search-icon.svg"
                />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search here..."
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <Box
              component="img"
              sx={{
                width: '25px',
                ml: 1,
                mr: 1,
                cursor: 'pointer'
              }}
              alt="favor"
              src="/favor-icon.svg"
            />
            <Box
              component="img"
              sx={{
                width: '26px',
                ml: 1,
                mr: 1,
                cursor: 'pointer'
              }}
              alt="user"
              src="/user-icon.svg"
            />
            <Box              
              component="img"
              sx={{
                width: '27px',
                ml: 2,
                mr: 1,
                cursor: 'pointer'
              }}
              alt="shopping cart"
              src="/cart-icon.svg"
            />
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveHeader;
