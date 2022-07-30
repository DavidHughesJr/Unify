import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, style } from "@mui/system";
import tmdbApi from "../../api/tmdbApi";
import { apiConfig } from "../../api/apiConfig";
import { Typography } from "@mui/material";




export default function DetailsMoreLikeThis() {
    const [moreLikeThis, setMoreLikeThis] = useState([])
    let { category, id } = useParams();


    useEffect(() => {

        const getMoreLikeThis = async () => {
            try {
                const [resMore, resGenre] = await Promise.all([tmdbApi.getMoreLikeThis(category, id), tmdbApi.getGenre(category.movie)])
                const moreLikeThisData = await resMore.json()
                const genres = await resMore.json()
                console.log(moreLikeThisData)
                setMoreLikeThis(moreLikeThisData.results)
            } catch (error) {
                console.error(error);
            }
        }
        getMoreLikeThis()
    }, [])
console.log(moreLikeThis)

    return (

        <Box sx={{ width: '100%', height: '100%' }} >
            <Box>
              {
                moreLikeThis.map((more) => {
                    console.log(more)
                    return (
                        <Box> {more.title} </Box>
                    )
                })
              }
            </Box>


        </Box>

    )
}