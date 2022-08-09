import { Api } from "@mui/icons-material"
import { Box, Grid, Typography } from "@mui/material"
import { height } from "@mui/system"
import { useEffect, useState } from "react"
import { apiConfig } from "../../api/apiConfig"
import tmdbApi, { category } from "../../api/tmdbApi"
import { LinearProgress } from "@mui/material"
import noImgPoster from '../../Assets/imgs/no-img-poster.jpg'
import { Link } from "react-router-dom"

const ResultsContent = ({ homepageSearch }) => {
    const [searchResults, setSearchResults] = useState([])
    const [isLoading, setLoadingProgress] = useState(true)

    useEffect(() => {
        const getSearchResults = async (pageNum = 1) => {
            try {
                const response = await tmdbApi.getSearchResults(homepageSearch, category.movie, pageNum)
                const searchData = await response.json()
                setSearchResults(searchData.results)
                setLoadingProgress()
                if(searchData.total_results === 0){
                    setLoadingProgress(true)
                }
            } catch (error) {
                console.error(error);
            }
        }
        getSearchResults()
    }, [homepageSearch])


    console.log(homepageSearch)

    return (
        <Box>
            {
                isLoading ? <Box>  < LinearProgress sx={{ color: "#e71d60" }} color="inherit" />  <Box sx={{paddingTop: '1rem'}}> <Typography variant="subtitle"> Your data it still loading. Please wait or retype your search. It maybe spelled incorrectly. </Typography> </Box>  </Box>
                :
                    <Grid container spacing={{ xs: 2, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {searchResults.map((results) => (

                            <Grid item xs={6} sm={2} md={3} key={results.id}>
                                <Link to={`../${category.movie}/${results.id}`}>
                                    <div style={{ width: '100%', height: '100%', }}>
                                        <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={results.poster_path ? apiConfig.w300Image(results.poster_path) : noImgPoster} alt="searched movies" />
                                    </div>
                                </Link>
                            </Grid>

                        ))}
                    </Grid>
            }

        </Box>
    )
}

export default ResultsContent