import React from "react";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import ProjectStatus from "./components/projects_Status";
import Notifications from "./components/notifications";
import Tasklists from "./components/taskslists";
import Recentprojects from "./components/recentsprojects";
import Activemembersnew from "./components/activemembersnew";
import EventsCalendarSidebar from "../../similar-modules/home/eventsCalendar";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  padding: '25px',
  height: '100%',
  boxShadow: '0px 3px 4px 1px rgba(0, 0, 0, 0.05)'
}));


const Home=()=>{
    return(
        <Box sx={{ flexGrow: 1 }}>

          {/* first grid section */}
          <Grid container spacing={2}>

              <Grid item xs={9}>
                  <Grid container spacing={2} alignItems="stretch" height="100%">
                      <Grid item xs={4}>
                          <Item> <ProjectStatus /> </Item>
                      </Grid>
                      <Grid item xs={8}>
                          <Item> <Recentprojects /> </Item>
                      </Grid>
                      <Grid item xs={4}>
                          <Item> <Notifications /> </Item>
                      </Grid>
                      <Grid item xs={8}>
                          <Item> <Activemembersnew /> </Item>
                      </Grid>
                  </Grid>
              </Grid>
              
              <Grid item xs={3}>
                  <Grid container spacing={2} >
                      <Grid item xs={12}>
                          <Item>
                              <EventsCalendarSidebar />
                          </Item>
                      </Grid>

                  </Grid>
              </Grid>

          </Grid>

          {/* second grid section */}
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Item><Tasklists /></Item>
            </Grid>
            <Grid item xs={6}></Grid>
          </Grid>

      </Box>
    )
}
export default Home;