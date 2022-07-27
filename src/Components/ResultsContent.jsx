import { Api } from "@mui/icons-material"
import { Box, Grid } from "@mui/material"
import { height } from "@mui/system"
import { useEffect, useState } from "react"
import { apiConfig } from "../api/apiConfig"
import tmdbApi, { category } from "../api/tmdbApi"

const ResultsContent = ({ homepageSearch }) => {
    const [searchResults, setSearchResults] = useState([])

    useEffect(() => {
        const getSearchResults = async (pageNum = 1) => {
            try {
                const response = await tmdbApi.getSearchResults(homepageSearch, category.movie, pageNum)
                const searchData = await response.json()
                setSearchResults(searchData.results)
            } catch (error) {
                console.log(error)
            }
        }
        getSearchResults()
    }, [homepageSearch])


    return (
        <Grid container spacing={{ xs: 2, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {searchResults.map((results) => (
                <Grid item xs={6} sm={2} md={3} key={results.id}>
                    <div style={{width: '100%', height: '100%'}}>
                        <img  style={{width: '100%', height: '100%', objectFit: 'cover'}} src={apiConfig.w300Image(results.poster_path)} alt="" />
                    </div>
                </Grid>
            ))}
        </Grid>
    )
}

export default ResultsContent