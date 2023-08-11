import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
    console.log(item);
    item.toLowerCase();
    return (
        <Stack
            type="button"
            alignItems="center"
            justifyContent="center"
            className="bodyPart-card"
            sx={{
                borderTop: bodyPart === item ? '4px solid #ff2625' : '',
                backgroundColor: '#fff',
                borderBottomLeftRadius: '20px',
                width: '270px',
                height: '280px',
                cursor: 'pointer',
                gap: '47px'
            }}
            onClick={() => {
                setBodyPart(item);
                window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' })
            }}
        >
            <img src={Icon} alt="dumbbell" style={{ width: '40px', height: '40px' }} />
            <Typography fontSize="12px" fontWeight="bold" color="#3A1212" textTransform="capitalize">{item.toLowerCase()}
            <img src={item} style={{width: '2.5rem'}}/>
            </Typography>
        </Stack>
    )
}

export default BodyPart