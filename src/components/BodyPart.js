import React from 'react';
import { Stack, Typography } from '@mui/material';

// Import images
import chest from '../assets/images/chest.png';
import tricep from '../assets/images/tricep.png';
import back from '../assets/images/back.png';
import bicep from '../assets/images/bicep.png';
import shoulder from '../assets/images/shoulder.png';
import legs from '../assets/images/leg.png';
import all from '../assets/images/all.png'; // Ensure this is the correct path

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
    // Mapping from body part names to images, including 'All'
    const bodyPartImages = {
        all: all, // Add 'All' here
        chest: chest,
        tricep: tricep,
        back: back,
        bicep: bicep,
        shoulder: shoulder,
        legs: legs
    };

    // Function to extract and capitalize the display name
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
            <img src={bodyPartImages[item.toLowerCase()]} alt={`${displayName} icon`} style={{ width: '80px', height: '80px' }} />
            <Typography fontSize="24px" fontWeight="bold" color="#3A1212" textTransform="capitalize">
                {displayName}
            </Typography>
        </Stack>
    );
};

export default BodyPart;
