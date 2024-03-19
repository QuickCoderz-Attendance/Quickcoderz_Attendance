import { Avatar, Box,  List,  ListItem,  ListItemAvatar,  ListItemText,  Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import React from "react";
import {makeStyles} from '@mui/styles';

const useStyles1 = makeStyles({
    root:{
        '& .MuiTableBody-root tr:last-child':{
           border:0,
        },
    }
  })


const CopyrightText1 = {
    fontSize: '14px',
    color: '#F7B318',
    letterSpacing: '0.5px',
    lineHeight: '1.8',
    textAlign: 'center',
    background:'#FEF7E7',
    padding:'7px 31px',
    borderRadius:'5px',
    border:' 1px solid #F7B318',
  }
const membersprofile={
    fontSize:'18px',
    lineHeight:'11px',
    color:'rgba(0, 0, 0, 0.8)',
    border:'0',
    padding:'16px 25px',
    fontWeight:'600',
}
const membername={
    border:'0',
    padding:'17px 25px',
    
}
const mambernametext={
    fontSize:'14px',
    lineHeight:'11px',
    marginTop:'8px',
    color:'rgba(0, 0, 0, 0.5)',
    fontWeight:'400',
}
const Activemembersnew=()=>{
    const classes = useStyles1()

    return(
       <Box>
        <Typography variant="h4">Active Members</Typography>
        <Table className={` ${classes.root}`}>
            <TableHead>
                <TableRow sx={{ background:'rgba(90, 138, 138, 0.07)', }}>
                    <TableCell style={membersprofile}>Member Profile</TableCell>
                    <TableCell style={membersprofile}>Today’s hrours</TableCell>
                    <TableCell sx={{ textAlign:'center' }} style={membersprofile}>Status</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                 <TableRow sx={{ borderBottom:'1px dashed rgba(0, 0, 0, 0.22)' }}>
                    <TableCell style={membername}><List sx={{ width: '100%', maxWidth: 360,  }}>
      <ListItem sx={{ padding:'0' }} alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp"  />
        </ListItemAvatar>
        <ListItemText sx={{ color:'#000',fontSize:'18px',fontWeight:'400' }}  primary="Joshua Wood" secondary={
          
              <Typography
                style={mambernametext}
              >
                UI/UX Designer
              </Typography>
              
           
          }
        />
      </ListItem>
      
      
    </List></TableCell>
    <TableCell style={membername}>123</TableCell>
    <TableCell style={membername}><Typography style={CopyrightText1}>	
Working</Typography></TableCell>
                 </TableRow>
                 <TableRow sx={{ borderBottom:'1px dashed rgba(0, 0, 0, 0.22)' }}>
                    <TableCell style={membername}><List sx={{ width: '100%', maxWidth: 360,  }}>
      <ListItem sx={{ padding:'0' }} alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp"  />
        </ListItemAvatar>
        <ListItemText sx={{ color:'#000',fontSize:'18px',fontWeight:'400' }}  primary="Joshua Wood" secondary={
          
              <Typography
                style={mambernametext}
              >
                UI/UX Designer
              </Typography>
              
           
          }
        />
      </ListItem>
      
      
    </List></TableCell>
    <TableCell style={membername}>123</TableCell>
    <TableCell style={membername}><Typography style={CopyrightText1}>	
Working</Typography></TableCell>
                 </TableRow>
                 <TableRow sx={{ borderBottom:'1px dashed rgba(0, 0, 0, 0.22)' }}>
                    <TableCell style={membername}><List sx={{ width: '100%', maxWidth: 360,  }}>
      <ListItem sx={{ padding:'0' }} alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp"  />
        </ListItemAvatar>
        <ListItemText sx={{ color:'#000',fontSize:'18px',fontWeight:'400' }}  primary="Joshua Wood" secondary={
          
              <Typography
                style={mambernametext}
              >
                UI/UX Designer
              </Typography>
              
           
          }
        />
      </ListItem>
      
      
    </List></TableCell>
    <TableCell style={membername}>123</TableCell>
    <TableCell style={membername}><Typography style={CopyrightText1}>	
Working</Typography></TableCell>
                 </TableRow>
                 
            </TableBody>
        </Table>
       </Box>
    )
}
export default Activemembersnew