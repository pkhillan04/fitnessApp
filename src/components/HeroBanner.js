import React from 'react';
import { Box, Typography, Button } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.jpg';
import { ForkRight } from '@mui/icons-material';

const HeroBanner = () => {
    return (
        <Box sx={{
            mt: { lg: '212px', xs: '70px' },
            ml: { sm: '50px' }
        }} position="relative" p="0px">
            <Typography color="#FF2625" fontWeight="600" fontSize="40px">
                Mighty-Moves
            </Typography>
            <Typography fontWeight={700}
                sx={{
                    fontSize: { lg: '44px', xs: '40px' }
                }}
                mb="23px" mt="30px"
            >
                Sweat, Smile <br /> and Repeat
            </Typography>
            <Typography fontSize={22} lineHeight="35px" mb={4}>
                Check out the most effective exercises
            </Typography>
            <Button variant="contained" color="error" href="#exercises"
                sx={{ backgroundColor: 'ff2625', padding: '10px' }}
            >Explore Exercises
            </Button>
            <Typography
                fontWeight={600}
                color="#FF2625"
                sx={{
                    opacity: 0.1,
                    display: { lg: 'block', md: 'block', sm: 'block', xs: 'none' },
                    mt: '55px'
                }}
                fontSize="200px"
            >
                Exercise
            </Typography>
            <Box
                component="img"
                src={HeroBannerImage}
                alt="banner"
                sx={{
                    width: '50%',
                    mx: 'auto',
                    height: 'auto',
                    display: 'block',
                    px: '70px',
                    position: 'relative',
                    bottom: '910px',
                    left: '25%'
                }}
            />
        </Box >
    );
}

export default HeroBanner;
