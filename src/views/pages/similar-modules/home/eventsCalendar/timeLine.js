import { Typography } from "@mui/material"
import React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import EditCalendarOutlinedIcon from '@mui/icons-material/EditCalendarOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';

const TimeLine = () => {

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return(
        <>
            <Typography variant="h4">Time Line</Typography>
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab icon={<TextsmsOutlinedIcon />} iconPosition="start" label="Meetings" value="1" />
                            <Tab icon={<EditCalendarOutlinedIcon />} iconPosition="start" label="Events" value="2" />
                            <Tab icon={<WbSunnyOutlinedIcon />} iconPosition="start" label="Holidays" value="3" />
                        </TabList>
                    </Box>
                    <TabPanel value="1"> Meetings</TabPanel>
                    <TabPanel value="2"> Events</TabPanel>
                    <TabPanel value="3"> Holidays</TabPanel>
                </TabContext>
            </Box>
        </>
    )

}

export default TimeLine