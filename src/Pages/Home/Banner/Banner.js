import React from 'react';
import Grid from '@mui/material/Grid';
import { Typography, Button, Container, Box } from '@mui/material';
import chair from '../../../images/chair.png'
import bg from '../../../images/bg.png'

const bannerBg = {
    background: `url(${bg})`

}
const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 450
}
const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={6}>
                    <Box>
                        <Typography variant="h3">
                            Your new Smile <br />
                            Start Here
                        </Typography>
                        <Typography variant='h6' sx={{ fontSize: 13, my: 5, fontWeight: 300, color: 'gray' }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus obcaecati esse maiores voluptate, in a nobis totam dolore. Unde, minima?
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#5CE7ED' }}>Get Appointment</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter}>
                    <img style={{ width: '350px' }} src={chair} alt="" />
                </Grid>
            </Grid>

        </Container>
    );
};

export default Banner;