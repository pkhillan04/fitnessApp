import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { localApiOptions, fetchData, youtubeOptions } from '../utils/fetchData';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';

const ExerciseDetail = () => {
    const [exerciseDetail, setExerciseDetail] = useState({});
    const [exerciseVideos, setexerciseVideos] = useState([]);
    const [targetMuscleExercises, settargetMuscleExercises] = useState([]);
    const [equipmentExercises, setequipmentExercises] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchExercisesData = async () => {
            const exerciseDbUrl = 'http://localhost:4000/api';
            const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

            const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, localApiOptions);
            setExerciseDetail(exerciseDetailData);

            const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetail.name}`, youtubeOptions);
            setexerciseVideos(exerciseVideosData.contents)

            // const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exereciseDetailData.target}`, localApiOptions);
            // settargetMuscleExercises(targetMuscleExercisesData);

            // const equipmentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exereciseDetailData.equipment}`, localApiOptions);
            // setequipmentExercises(equipmentExercisesData);

        }
        fetchExercisesData();
    }, [id]);

    return (
        <Box>
            <Detail exerciseDetail={exerciseDetail} />
            <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
            <SimilarExercises targetMuscleExercises={targetMuscleExercises}
            equipmentExercises={equipmentExercises}/>
        </Box>
    )
}

export default ExerciseDetail