import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import MailLockIcon from '@mui/icons-material/MailLock';


export default function Notifications() {

  const [projects, setProjects] = React.useState()
  React.useEffect(() => {
  axios.get("http://localhost:3000/projects")
  .then((res) => {
    setProjects(res.data)
    console.log(res.data)
  })
  .catch((err) => {
    console.log(err)
  })
}, []);

  return (


   

    <List>
        <Typography variant="h4">Notifications</Typography>
      <ListItem sx={{padding:'22px 0px',borderBottom:'1px dashed #000',alignItems:'center',gridGap:'2px'}}alignItems="flex-start">
        <ListItemAvatar sx={{ background:'#F9EEEE',borderRadius:'50px',width:'40px',height:'40px',minWidth:'40px',display:'flex',justifyContent:'center',alignItems:'center',color:'#C95E5E',marginRight:'6px' }} >
          <MailLockIcon sx={{ fontSize:'22px' }} alt="Remy Sharp"  />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
          
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
             
           
          }
        />
         <Typography sx={{ color:'#145858' }}>10 Sep,2024</Typography>
      </ListItem>
      <ListItem sx={{padding:'22px 0px',borderBottom:'1px dashed #000',alignItems:'center',gridGap:'2px'}}alignItems="flex-start">
      <ListItemAvatar sx={{ background:'#FEF7E7',borderRadius:'50px',width:'40px',height:'40px',minWidth:'40px',display:'flex',justifyContent:'center',alignItems:'center',color:'#F7B318',marginRight:'6px' }} >
          <MailLockIcon sx={{ fontSize:'22px' }} alt="Remy Sharp"  />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
          
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
             
           
          }
        />
         <Typography sx={{ color:'#145858' }}>10 Sep,2025</Typography>
      </ListItem>
      <ListItem sx={{padding:'22px 0px',borderBottom:'1px dashed #000',alignItems:'center',gridGap:'2px'}}alignItems="flex-start">
      <ListItemAvatar sx={{ background:'#E9EFEF',borderRadius:'50px',width:'40px',height:'40px',minWidth:'40px',display:'flex',justifyContent:'center',alignItems:'center',color:'#145858',marginRight:'6px' }} >
          <MailLockIcon sx={{ fontSize:'22px' }} alt="Remy Sharp"  />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
          
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
             
           
          }
        />
         <Typography sx={{ color:'#145858' }}>10 Sep,2024</Typography>
      </ListItem>
      <ListItem sx={{padding:'22px 0px',borderBottom:'0px dashed #000',alignItems:'center',gridGap:'2px'}}alignItems="flex-start">
      <ListItemAvatar sx={{ background:'#FBF1EC',borderRadius:'50px',width:'40px',height:'40px',minWidth:'40px',display:'flex',justifyContent:'center',alignItems:'center',color:'#D77748',marginRight:'6px' }} >
          <MailLockIcon sx={{ fontSize:'22px' }} alt="Remy Sharp"  />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
          
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
             
           
          }
        />
         <Typography sx={{ color:'#145858' }}>10 Sep,2024</Typography>
      </ListItem>


      {/* {
        projects ?
        projects.map((project, index) => {
          return(
            <div key={index}>
              {project.title}
            </div>
          )
        })
        :null
      } */}
      
      
    </List>
    
    
  );
}