import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material/';

import { localApiOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';

import image1 from '../assets/images/back.png'
import image2 from '../assets/images/chest.png'

const Exercises = ({ exercises, setExercises, bodyPart }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const exercisesPerPage = 9;

    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

    const paginate = (e, value) => {
        setCurrentPage(value);

        window.scrollTo({ top: 1800, behavior: 'smooth' })
    }

    useEffect(() => {
        const fetchExercisesData = async () => {
            try {
                let exercisesData = [];
    
                if (bodyPart === 'all') {
                    exercisesData = await fetchData('http://localhost:4000/api/exercises', localApiOptions);
                } else {
                    exercisesData = await fetchData(`http://localhost:4000/api/exercises/bodyPart/${bodyPart}`, localApiOptions);
                }
    
                setExercises(exercisesData);
            } catch (error) {
                console.error("Failed to fetch exercises:", error);
            }
        };
    
        fetchExercisesData();
    }, [bodyPart]);
    
    

    return (
        <Box id="exercises"
            sx={{ mt: { lg: '110px' } }}
            mt="50px"
            p="20px"
        >
            <Typography variant="h3" mb="46px">
                Showing Results
            </Typography>
            <Stack direction="row" sx={{ gap: { lg: '110px', xs: '50px' } }}
                flexWrap="wrap" justifyContent="center">
                {currentExercises.map((exercise, index) => (
                    <ExerciseCard key={index} exercise={exercise} />
                ))}
            </Stack>
            <Stack mt="100px" alignItems="center">
                {exercises.length > 9 && (
                    <Pagination
                        color="standard"
                        shape="rounded"
                        defaultPage={1}
                        count={Math.ceil(exercises.length / exercisesPerPage)}
                        page={currentPage}
                        onChange={paginate}
                        size="large"
                    />
                )}
            </Stack>
        </Box>
    )
}

export default Exercises