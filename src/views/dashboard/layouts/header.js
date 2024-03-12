import React from "react";
import { Box } from "@mui/material"
import { styled } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MoreIcon from '@mui/icons-material/MoreVert';
import CloseIcon from '@mui/icons-material/Close';
import BedtimeOutlinedIcon from '@mui/icons-material/BedtimeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

import { useContext } from "react";
import { ThemeModeContext } from "../../../store/theme";


import {AppBar} from './sidebar'

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '50px',
    backgroundColor: theme.palette.icon.bg,
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: theme.palette.secondary.main,
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

const Header = (prop) => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  
    const handleProfileMenuOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleMobileMenuClose = () => {
      setMobileMoreAnchorEl(null);
    };
  
    const handleMenuClose = () => {
      setAnchorEl(null);
      handleMobileMenuClose();
    };
  
    const handleMobileMenuOpen = (event) => {
      setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        id={menuId}
        keepMounted
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        open={isMenuOpen}
        onClose={handleMenuClose}
        >
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
        >
        <MenuItem>
            <IconButton size="large" aria-label="show 17 new notifications" color="icon.main">
            <Badge badgeContent={17} color="error">
                <NotificationsNoneOutlinedIcon />
            </Badge>
            </IconButton>
            <p>Notifications</p>
        </MenuItem>
        <MenuItem>
            <IconButton size="large" color="icon.main">
              <LightModeOutlinedIcon />
            </IconButton>
            <p>Dark Mode / Night Mode</p>
        </MenuItem>
        <MenuItem>
            <IconButton size="large" aria-label="show 4 new mails" color="icon.main">
            <Badge badgeContent={4} color="error">
                <MailOutlineOutlinedIcon />
            </Badge>
            </IconButton>
            <p>Messages</p>
        </MenuItem>
        <MenuItem onClick={handleProfileMenuOpen}>
            <IconButton size="large" aria-label="account of current user" aria-controls="primary-search-account-menu" aria-haspopup="true" color="icon.main">
            <AccountCircle />
            </IconButton>
            <p>Profile</p>
        </MenuItem>
        </Menu>
    );

    const {darkMode, setDarkMode} = useContext(ThemeModeContext)

    return(
      <>
        <AppBar position="fixed"  open={prop.open} sx={{backgroundColor: 'background.main'}}>
          <Toolbar>
            {
              prop.open === true ?
              <IconButton size="large" edge="start" color="icon.main" sx={{backgroundColor: 'icon.bg', mr: 2 }} aria-label="open drawer" onClick={prop.handleDrawerClose}>
                <MenuOpenIcon />
              </IconButton>
              :
              <IconButton size="large" edge="start" color="icon.main" sx={{backgroundColor: 'icon.bg', mr: 2 }} aria-label="close drawer" onClick={prop.handleDrawerOpen}>
                <CloseIcon />
              </IconButton>
            }
            
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="text.primary" href="/">
                <HomeOutlinedIcon />
              </Link>
              <Typography color="text.primary">Dashboard</Typography>
              <Typography color="primary.main">Default</Typography>
            </Breadcrumbs>

            <Box sx={{ flexGrow: 1 }} />

            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

            <Search>
              <SearchIconWrapper>
                <SearchIcon sx={{color: 'icon.main'}} />
              </SearchIconWrapper>
              <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
            </Search>

              <IconButton size="large" aria-label="show 17 new notifications" color="icon.main" sx={{backgroundColor: 'icon.bg', margin: '0 5px'}}>
                <Badge badgeContent={17} color="error">
                  <NotificationsNoneOutlinedIcon />
                </Badge>
              </IconButton>

              <IconButton size="large" color="icon.main" sx={{backgroundColor: 'icon.bg', margin: '0 5px'}} onClick={() => (setDarkMode(!darkMode))}>
                <Badge>
                  { darkMode ? <BedtimeOutlinedIcon /> : <LightModeOutlinedIcon /> }
                </Badge>
              </IconButton>
              
              <IconButton size="large" aria-label="show 4 new mails" color="icon.main" sx={{backgroundColor: 'icon.bg', margin: '0 5px'}}>
                <Badge badgeContent={4} color="error">
                  <MailOutlineOutlinedIcon />
                </Badge>
              </IconButton>

              <IconButton size="large" edge="end" aria-label="account of current user" aria-controls={menuId} aria-haspopup="true" onClick={handleProfileMenuOpen} color="icon.main" sx={{backgroundColor: 'icon.bg', marginLeft: '10px'}}>
                <AccountCircle />
              </IconButton>

            </Box>

            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton size="large" aria-label="show more" aria-controls={mobileMenuId} aria-haspopup="true" onClick={handleMobileMenuOpen} color="icon.main">
                <MoreIcon />
              </IconButton>
            </Box>

          </Toolbar>

        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </>
    )
}

export default Header