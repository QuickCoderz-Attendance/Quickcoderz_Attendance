import React from 'react';
import { styled} from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import {Box, List, Typography, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import ChecklistRtlOutlinedIcon from '@mui/icons-material/ChecklistRtlOutlined';
import { FiUsers } from "react-icons/fi";
import {Link} from 'react-router-dom';

import logo from "../../../assets/images/quickcoderz_logo.png";

import Header from './header';
import AllRoutes from '../../../routes/allRoutes';

const drawerWidth = 252;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: '80px',
  [theme.breakpoints.up('sm')]: {
    width: '80px',
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  padding: '0 20px',
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  width: 'calc(100% - 80px)',
  boxShadow: '0px 8px 30px 0px rgba(255, 255, 255, 0.1)',
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    backgroundImage: 'none',
  }),
}));

export {AppBar}

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const Sidebar = () => {

    const [open, setOpen] = React.useState(true);
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };

    return(
      <Box sx={{ display: 'flex' }}>

        {/* header */}
        <Header open={open} handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose} />

        {/* sidebar start*/}
        <Drawer variant="permanent" open={open}>

          {/* sidebar top logo row*/}
          <DrawerHeader>
            <Link to="/" style={{display: 'flex', alignItems: 'center', textDecoration: 'none'}}>
              <img src={logo} alt="logo" />
              {
                open ? 
                <Typography variant="h5" sx={{color: '#fff', fontWeight: '500', fontSize: '19px', lineHeight: '21px', marginLeft: '6px'}}>QuickCoderz</Typography>
                :null
              }
            </Link>
          </DrawerHeader>
          <Divider />


          {/* sidebar list items */}
          <List>
            {['Dashboard', 'Project', 'Tasks', 'Attendance', 'Employees'].map((text, index) => (
              <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                      color: '#fff'
                    }}
                  >
                    {
                      index === 0 ? <HomeOutlinedIcon /> 
                      : index === 1 ? <AccountTreeOutlinedIcon /> 
                      : index === 2 ? <AssignmentTurnedInOutlinedIcon /> 
                      : index === 3 ? <ChecklistRtlOutlinedIcon />
                      : <FiUsers />
                    }
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 , color: '#fff'}} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
        {/* sidebar end */}

        
        <Box component="main" sx={{ flexGrow: 1, p: 3, minHeight: 'calc(100vh - 61px)'}}>
          <DrawerHeader />

          {/* pages */}
          <AllRoutes />

        </Box>

      </Box>
    )
}

export default Sidebar