import { Api } from "@mui/icons-material"
import { Box, Grid } from "@mui/material"
import { height } from "@mui/system"
import { useEffect, useState } from "react"
import { apiConfig } from "../../api/apiConfig"
import tmdbApi, { category } from "../../api/tmdbApi"
import { LinearProgress }from "@mui/material"
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
                setLoadingProgress(false)
            } catch (error) {
                alert(error)
            }
        }
        getSearchResults()
    }, [homepageSearch])


    return (
        <Box> 
            {
                isLoading ? < LinearProgress sx={{ color: "#e71d60" }} color="inherit" /> : 
                <Grid container spacing={{ xs: 2, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {searchResults.map((results) => (
                        
                        <Grid item xs={6} sm={2} md={3} key={results.id}>
                            <Link to={`../${category.movie}/${results.id}`}> 
                            <div style={{ width: '100%', height: '100%', }}>
                                <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={results.poster_path ? apiConfig.w300Image(results.poster_path) : noImgPoster } alt="searched movies" />
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