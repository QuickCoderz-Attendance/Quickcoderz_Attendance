import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Paper, Table } from '@mui/material';

import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {makeStyles} from '@mui/styles';


const CopyrightText = {
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


const CopyrightText1 = {
  fontSize: '14px',
  color: '#145858',
  letterSpacing: '0.5px',
  lineHeight: '1.8',
  textAlign: 'center',
  background:'#E9EFEF',
  border: '1px solid #2B6868',
  padding:'7px 31px',
  borderRadius:'5px',
}


const useStyles1 = makeStyles({
    root:{
       
        '& .MuiTableRow-head th':{
            color: '#000',
            fontWeight: 700,
            fontSize: '14px',
            lineHeight:'21px',
            padding:'16px 25px',
            
        },
        
        
       
    }
  })


export default function Activemembers() {
    const classes = useStyles1()
  return (
    
    
    <Paper sx={{ margin:'40px 0px 40px 0px',maxWidth:'641px',boxShadow:'0px 9px 20px rgba(46, 35, 94, 0.07)',borderRadius:'10px',padding:'0px 0px 0px 0px',background:'#fff' }}>
        <Typography sx={{ background:'#fff',padding:'20px 25px',fontSize:'20px',lineHeight:'24px',color:'rgba(0, 0, 0, 0.8)',fontWeight:'600',borderRadius:'10px' }}>Active Members</Typography>
        <Table className={`footer-top ${classes.root}`}>
        <TableHead >
            <TableRow sx={{ background:'#f4f7f9' }}>
            <TableCell  >Member Profile </TableCell>
            <TableCell >Today’s hrours</TableCell>
            <TableCell sx={{ textAlign:'center' }}>Status</TableCell>

           
          
            </TableRow>
        </TableHead>
         <TableBody>
           <TableRow>
           <TableCell>
           <List sx={{ width: '100%', maxWidth: 360,  }}>
      <ListItem sx={{ padding:'0' }} alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp"  />
        </ListItemAvatar>
        <ListItemText
          primary="
          Joshua Wood"
          secondary={
          
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                UI/UX Designer
              </Typography>
              
           
          }
        />
      </ListItem>
      
      
    </List>
    

    
    
           </TableCell>
           <TableCell>123</TableCell>
           <TableCell><Typography style={CopyrightText1}>	
Working</Typography></TableCell>
           
           </TableRow>
           <TableRow>
           <TableCell>
           <List sx={{ width: '100%', maxWidth: 360, }}>
      <ListItem sx={{ padding:'0px' }} alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp"  />
        </ListItemAvatar>
        <ListItemText 
          primary="
          Joshua Wood"
          secondary={
          
              <Typography
                sx={{ display: 'inline',color:'rgba(0, 0, 0, 0.5)',fontSize:'14px',lineHeight:'11px',fontWeight:'400' }}
                component="span"
                variant="body2"
                color="#000"
               
              >
                UI/UX Designer
              </Typography>
              
           
          }
        />
      </ListItem>
      
      
    </List>
    

    
    
           </TableCell>
           <TableCell>123</TableCell>
           <TableCell><Typography style={CopyrightText }>	
Away</Typography ></TableCell>
           
           </TableRow>
           <TableRow>
           <TableCell>
           <List sx={{ width: '100%', maxWidth: 360,  }}>
      <ListItem sx={{ padding:'0' }} alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp"  />
        </ListItemAvatar>
        <ListItemText
          primary="
          Joshua Wood"
          secondary={
          
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                UI/UX Designer
              </Typography>
              
           
          }
        />
      </ListItem>
      
      
    </List>
    

    
    
           </TableCell>
           <TableCell>123</TableCell>
           <TableCell><Typography style={CopyrightText}>	
Away</Typography></TableCell>
           
           </TableRow>
        </TableBody>
        </Table>
    </Paper>
  );
}