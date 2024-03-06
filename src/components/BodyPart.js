import React from 'react';
import { Stack, Typography } from '@mui/material';

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
    const extractName = path => path.split('/').pop().split('.')[0].split(/[\d-_]+/)[0]
                                .replace(/_/g, ' ').replace(/-/g, ' ')
                                .split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    const displayName = extractName(item);

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
                window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
            }}
        >
            <img src={item} alt="Body part icon" style={{ width: '80px', height: '80px' }} />
            <Typography fontSize="24px" fontWeight="bold" color="#3A1212" textTransform="capitalize">
                {displayName}
            </Typography>
        </Stack>
    );
};

export default BodyPart;
