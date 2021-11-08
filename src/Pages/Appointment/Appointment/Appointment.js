import React from 'react';
import Navigation from '../../Sheaed/Navigation/Navigation';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import AvalabaleAppointment from '../AvalabaleAppointment/AvalabaleAppointment';

const Appointment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Navigation></Navigation>
            <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
            <AvalabaleAppointment date={date}></AvalabaleAppointment>
        </div>
    );
};

export default Appointment;