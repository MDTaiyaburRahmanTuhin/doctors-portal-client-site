import { Button, Grid, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import React from 'react';
import BookingModel from '../BookingModel/BookingModel';

const Booking = ({ booking, date, setBookingSuccess }) => {
    const { name, time, space } = booking
    const [openBooking, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);
    return (
        <>
            <Grid item xs={12} sm={6} md={3}>
                <Paper elevation={3} sx={{ py: 5 }}>
                    <Typography sx={{ color: 'info.main', fontWeight: 600 }} variant='h5'>
                        {name}
                    </Typography>
                    <Typography variant='h6'>
                        {time}
                    </Typography>
                    <Typography variant='caption'>
                        {space} SPACES AVAILABLE
                    </Typography>
                    <Button onClick={handleBookingOpen} variant='contained'> BOOK APPOINTMENT</Button>
                </Paper>
            </Grid>
            <BookingModel
                date={date}
                booking={booking}
                openBooking={openBooking}
                setBookingSuccess={setBookingSuccess}
                handleBookingClose={handleBookingClose}
            >

            </BookingModel>
        </>


    );
};

export default Booking;