import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import tmdbApi, { category } from "../../api/tmdbApi";
import { Box, Typography, Paper} from "@mui/material";
import { height } from "@mui/system";

export default function ShowAllGenres() {
    const [genres, setGenres] = useState([])

    let { navItems } = useParams()

    useEffect(() => {
        const getGenres = async () => {
            const res1 = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=e9ad43fd1d98a5d8435f4d49f1ec2644&language=en-US`)
            const data1 = await res1.json()
            const res2 = await fetch(`https://api.themoviedb.org/3/genre/tv/list?api_key=e9ad43fd1d98a5d8435f4d49f1ec2644&language=en-US`)
            const data2 = await res2.json()
            const mergeGenres = data1.genres.filter(item => {
                // filter if names don't match return the items that do not match
                if (!data2.genres.some(item2 => item.name == item2.name)) {
                    return item
                }
            }).concat(data2.genres) // add item that do not match to tv genres array
            setGenres(mergeGenres)
        }
        getGenres()
    }, [])


    return (
        <Box>
           {
            genres.map((genre) => {
                return (
                    <Link style={{textDecoration: 'none'}} to={`../genre/${genre.name.toLowerCase().replace(/\s+/g, '')}/${genre.id}`} >
                        <Box sx={{ padding: '1rem'}}>
                            <Paper sx={{ padding: '1rem'} }>
                                <Typography variant="subtitle2"> {genre.name}</Typography>
                            </Paper>
                        </Box>
                    </Link>
                )
            })
           }
        </Box>
    )
}