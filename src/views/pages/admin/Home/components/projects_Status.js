import { Box, Container, Paper, Typography } from "@mui/material";
import React from "react";
import UpcomingIcon from '@mui/icons-material/Upcoming';


const boxheading={
    color:'rgba(0, 0, 0, 0.5)',
    fontSize:'14px',
    lineHeight:'20px',
    fontWeight:'500',
    letterSpacing:'0.7px',
    marginBottom:'5px',
    textAlign:'center',
    marginTop:'12px'
}

const  boxsubheading={

    color:'rgba(0, 0, 0, 0.8)',
    fontSize:'18px',
    lineHeight:'20px',
    fontWeight:'500',
    letterSpacing:'0.7px',
    textAlign:'center',
    
}
const ProjectStatus=()=>{
    return(
        <Box>
          <Typography variant="h4">Project Status</Typography>
           <Container sx={{ padding:'0 !important',display:'flex',justifyContent:'space-between', gridRowGap:'25px', flexWrap:'wrap' }}>
           <Paper sx={{ borderRadius:'10px',background:'#E9EFEF',boxShadow:'unset',padding:'20px 40px' }}>
             <UpcomingIcon sx={{ background:'#145858',color:'#fff',borderRadius:'50px',padding:'15px',fontSize:'55px',display:'block',margin:'auto' }} />
             <Typography  style={boxheading}>Upcomings</Typography>
             <Typography style={boxsubheading}>5 Projects</Typography>
             </Paper>
 
 
             <Paper sx={{ borderRadius:'10px',background:'#FEF7E7',boxShadow:'unset',padding:'20px 40px' }}>
             <UpcomingIcon sx={{ background:'#F7B318',color:'#fff',borderRadius:'50px',padding:'15px',fontSize:'55px',display:'block',margin:'auto' }} />
             <Typography  style={boxheading}>Upcomings</Typography>
             <Typography style={boxsubheading}>5 Projects</Typography>
             </Paper>
 
             <Paper sx={{ borderRadius:'10px',background:'#FBF1EC',boxShadow:'unset',padding:'20px 40px' }}>
             <UpcomingIcon sx={{ background:'#D77748',color:'#fff',borderRadius:'50px',padding:'15px',fontSize:'55px' ,display:'block',margin:'auto'}} />
             <Typography  style={boxheading}>Upcomings</Typography>
             <Typography style={boxsubheading}>5 Projects</Typography>
             </Paper>
 
 
             <Paper sx={{ borderRadius:'10px',background:'#F9EEEE',boxShadow:'unset',padding:'20px 40px' }}>
             <UpcomingIcon sx={{ background:'#C95E5E',color:'#fff',borderRadius:'50px',padding:'15px',fontSize:'55px',display:'block',margin:'auto' }} />
             <Typography  style={boxheading}>Upcomings</Typography>
             <Typography style={boxsubheading}>5 Projects</Typography>
             </Paper>
             </Container>
        
         </Box>
    )
}
export default ProjectStatus