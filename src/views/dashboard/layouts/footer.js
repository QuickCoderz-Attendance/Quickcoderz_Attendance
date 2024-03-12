import { Box } from "@mui/material"
import Grid from '@mui/material/Grid';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Footer = () => {
    return(
        <Box component="footer" sx={{boxShadow: '0 0 20px rgba(89, 102, 122, 0.1)', padding: '15px', marginLeft: '252px', backgroundColor: 'background.main'}}>
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    Copyright 2024 © Quickcoderz
                </Grid>
                <Grid item xs={6} sx={{textAlign: 'right'}}>
                    Hand crafted & made with <FavoriteIcon />
                </Grid>
            </Grid>
        </Box>
    )
}

export default Footer