import React from "react";
import axios from "axios";
import { Box, Container, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ThemeModeContext } from "../../../../../store/theme";
import { useContext } from "react";


// icons
import UpcomingOutlinedIcon from '@mui/icons-material/UpcomingOutlined';
// import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
// import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';
// import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';

const useStyles = makeStyles({
    root:{
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'space-between', 
        gridRowGap:'25px', 
        padding:'0 !important',

        '& .MuiPaper-elevation': {
            borderRadius:'10px',
            boxShadow:'unset',
            padding:'20px 40px',
            textAlign: 'center',

            '& .MuiSvgIcon-root': {
                borderRadius:'50px',
                padding:'15px',
                fontSize:'55px',
                display:'block',
                margin:'auto' 
            }
        }
    }
})

const ProjectStatus=()=>{

    const [Projects, setProjects] = React.useState();

    React.useEffect(() => {
        axios.get("http://localhost:3000/projects")
        .then((res) => {
            setProjects(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])

    const classes = useStyles();

    const {darkMode} = useContext(ThemeModeContext);

    return(
        <Box>
            <Typography variant="h4">Project Status</Typography>
            <Container className={classes.root}>
                {
                    Projects ? 
                    Projects.map((project, index) => {

                        return(
                            <Paper key={index} sx={{backgroundColor:`global_light_color.${project.bg_color}`}}>
                                <UpcomingOutlinedIcon sx={{ backgroundColor: `global_dark_color.${project.bg_color}`, color: darkMode === false ? '#fff' : `icon_color.${project.bg_color}`}} />
                                <Typography variant="h6"  sx={{color: darkMode === false ? '#00000080' : '#FFFFFFBA', margin: '12px 0 5px 0'}}>{project.status}</Typography>
                                <Typography variant="subtitle1" sx={{color: darkMode === false ? '#000000CC' : '#FFFFFFCC', margin: '12px 0 5px 0'}}>{project.projects_counts} Projects</Typography>
                            </Paper>
                        )
                    })
                    :null
                }
            </Container>
        </Box>
    )
}
export default ProjectStatus