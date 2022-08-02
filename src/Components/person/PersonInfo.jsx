import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import tmdbApi from "../../api/tmdbApi";
import PersonInfoCard from "./PersonInfoCard"
import PersonInfoBio from "./PersonInfoBio"
import PersonInfoGallery from "./PersonInfoGallery"
import { Box, Paper } from "@mui/material";


export default function PersonInfo() {

    let { id } = useParams()



    const [personInfo, setPersonInfo] = useState([])
    const [personImages, setPersonImages] = useState([])

    useEffect(() => {

        const getPersonData = async () => {
            try {
                const resPerson = await tmdbApi.getPeopleInfo(id)
                const personDetailsData = await resPerson.json()
                setPersonInfo(personDetailsData)
                setPersonImages(personDetailsData.images.profiles)
            } catch (error) {
                console.error(error);
            }
        }
        getPersonData()
    }, [])


    return (
        <Box sx={{ backgroundColor: '#e5eaf5;', display: 'flex', width: '100%', padding: '2rem', gap: '1rem', overflow: 'hidden'}}>
            <PersonInfoCard info={personInfo} />
            <Paper elevation={2} variant="outlined" sx={{width: '80%',}}>
                <PersonInfoGallery images={personImages}/>
                <PersonInfoBio info={personInfo} />
            </Paper>
        </Box>
    )

}