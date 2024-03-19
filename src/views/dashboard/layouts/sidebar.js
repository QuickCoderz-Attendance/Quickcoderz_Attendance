import * as React from 'react';
import { styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import ChecklistRtlOutlinedIcon from '@mui/icons-material/ChecklistRtlOutlined';

import logo from "../../../assets/images/quickcoderz_logo.png";

import Header from './header';
import EventsCalendarSidebar from '../../pages/similar-modules/home/eventsCalendar';
import Home from '../../pages/admin/Home';


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
  // necessary for content to be below app bar
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
            <img src={logo} alt="logo" />
            <Typography variant="h5" sx={{color: '#fff', fontWeight: '500', fontSize: '19px', lineHeight: '21px', marginLeft: '6px'}}>QuickCoderz</Typography>
          </DrawerHeader>
          <Divider />


          {/* sidebar list items */}
          <List>
            {['Dashboard', 'Project', 'Tasks', 'Attendance'].map((text, index) => (
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
                    {index === 0 ? <HomeOutlinedIcon /> : index === 1 ? <AccountTreeOutlinedIcon /> : index === 2 ? <AssignmentTurnedInOutlinedIcon /> : <ChecklistRtlOutlinedIcon />}
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
          <Home />

        </Box>

      </Box>
    )
}

export default Sidebar