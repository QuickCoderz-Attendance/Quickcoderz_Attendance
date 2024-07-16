import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import React from "react";
import Checkbox from '@mui/material/Checkbox';
import CircularProgress from '@mui/material/CircularProgress';
import {Avatar} from "@mui/material";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const recentprojects={
    color:"rgba(0, 0, 0, 0.8)",
    fontSize:'16px',
    lineHeight:'11px',
    fontWeight:'600',
    border:'0',
    padding:'15px',
    
}

const Recentprojects=()=>{

    // const [progress, setProgress] = React.useState(0);
  
    // React.useEffect(() => {
    //   const timer = setInterval(() => {
    //     setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    //   }, 800);
  
    //   return () => {
    //     clearInterval(timer);
    //   };
    // }, []);

    return(
      <>
        <Typography variant="h4">Recent Projects</Typography>
        <Table sx={{ marginTop:'20px' }} aria-label="simple table">

          <TableHead>
            <TableRow sx={{ background:'rgba(90, 138, 138, 0.07)' }} > 
              <TableCell sx={{ border:'0' }}>  <Checkbox  {...label} /></TableCell>
              <TableCell  style={recentprojects}  >Task </TableCell>
              <TableCell style={recentprojects}   align="left">Name</TableCell>
              <TableCell   style={recentprojects}  align="left">Team</TableCell>
              <TableCell   style={recentprojects}  align="left">Started</TableCell>
              <TableCell   style={recentprojects}  align="left">Finished</TableCell>
              <TableCell   style={recentprojects}  align="left">Progress</TableCell>
              <TableCell  style={recentprojects}   align="left">Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow sx={{ borderBottom:'1px dashed rgba(0, 0, 0, 0.22)',padding:'16px 0' }}>
            <TableCell sx={{ border:'0' }}>  <Checkbox  {...label} /></TableCell>
            <TableCell sx={{ border:'0' }}  align="left">Behance Post  </TableCell>
            <TableCell sx={{ border:'0' }}   ><Typography>Completed</Typography>  </TableCell>
            <TableCell sx={{ border:'0' }}   ><Avatar  />  </TableCell>
            <TableCell sx={{ border:'0' }}    ><Typography >05Jan23</Typography>  </TableCell>
            <TableCell sx={{ border:'0' }}    > <Typography>12Jan23</Typography>  </TableCell>
            <TableCell sx={{ border:'0' }}>  <CircularProgress variant="determinate" value={75} /><Typography >75%</Typography></TableCell>
            <TableCell sx={{ border:'0' }}   > <Typography>...</Typography>  </TableCell>
          </TableRow>
          </TableBody>

        </Table>
      </>
    )
}
 export default Recentprojects