import React from "react";
import { Avatar, Box, ListItem, ListItemAvatar, ListItemText, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import {styled} from "@mui/material";





const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#145858' : '#145858',
    },
  }));




const Completed={
    fontSize:'14px',
    lineHeight:'20px',
    letterSpacing:'0.7px',
    fontWeight:'500',
    color:'#145858',
    border:'1px solid #145858',
    textAlign:'center',
    padding:'5px 7px',
    borderRadius:'3px',
    maxWidth: 'max-content',
   
    
}
const  tasklist={
    fontSize:'18px',
    fontWeight:'600',
    color:'rgba(0, 0, 0, 0.8)',
    lineHeight:'11px',
    padding:'21px 25px',
    border:'0',

 }
 const tabledata={
    padding:'21px 25px',
    maxWidth:'228px',
    fontSize:'14px',
    lineHeight:'17px',
    color:'#3D434A',
    border:'0'
    
 }
const Tasklists=()=>{
    return(
        <Box>
            <Box sx={{ padding:'0px 15px' }}>
            <Typography variant="h4">Task List</Typography>
           
            <ListItem sx={{padding:'39px 0px 25px 0px',alignItems:'center',gridGap:'2px',gridColumnGap:'30px'}}>
            <Box sx={{ display:'flex',alignItems:'center' }}>
            <ListItemAvatar><Avatar></Avatar></ListItemAvatar>
            <ListItemText> Sarah Smith</ListItemText>
            </Box>
            <Box sx={{ display:'flex',alignItems:'center' }}>
            <ListItemAvatar><Avatar></Avatar></ListItemAvatar>
            <ListItemText> Sarah Smith</ListItemText>
            </Box>
            <Box sx={{ display:'flex',alignItems:'center' }}>
            <ListItemAvatar><Avatar></Avatar></ListItemAvatar>
            <ListItemText> Sarah Smith</ListItemText>
            </Box>
        </ListItem>
        </Box>
        <Table    sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead  >
          <TableRow sx={{ background:'rgba(90, 138, 138, 0.07)' }} > 
            
            <TableCell style={tasklist}  >Task </TableCell>
            <TableCell style={tasklist}  align="left">Status</TableCell>
            <TableCell style={tasklist}  align="left">Manager</TableCell>
            <TableCell style={tasklist}  align="left">Progress</TableCell>
            
          
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow>
        <TableCell style={tabledata} align="left">Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </TableCell>
        <TableCell sx={{ border:'0' }}  ><Typography  style={Completed}>Completed</Typography>  </TableCell>
        <TableCell style={tabledata} sx={{ border:'0' }}  ><Typography >John Doe</Typography>  </TableCell>
        <TableCell  sx={{ border:'0',padding:'25px' }}  > <BorderLinearProgress sx={{ background:'#145858' }} variant="determinate" value={50} />  </TableCell>
        </TableRow>

        <TableRow>
        <TableCell style={tabledata} align="left">Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </TableCell>
        <TableCell sx={{ border:'0' }}  ><Typography style={Completed}>Completed</Typography>  </TableCell>
        <TableCell style={tabledata} sx={{ border:'0' }}  ><Typography >John Doe</Typography>  </TableCell>
        <TableCell  sx={{ border:'0',padding:'25px' }}  > <BorderLinearProgress  variant="determinate" value={100} />  </TableCell>
        </TableRow>
        
        
        
        </TableBody>
      </Table>
        </Box>
    )
}
export default Tasklists;