import { Api } from "@mui/icons-material"
import { Box, Grid } from "@mui/material"
import { useEffect, useState } from "react"
import { apiConfig } from "../../api/apiConfig"
import tmdbApi, { category, movieType } from "../../api/tmdbApi"
import { LinearProgress } from "@mui/material"
import { Link } from "react-router-dom"
import InfoGrid from "../common/InfoGrid"
import Pagination from '@mui/material/Pagination';

const PopularMovies = () => {
    const [popular, setPopular] = useState([])
    const [isLoading, setLoadingProgress] = useState(true)
    const [pageNum, setPageNum] = useState(1)


    useEffect(() => {
        const getPopularMovies = async () => {
            try {
                const response = await tmdbApi.getTvList(movieType.popular, pageNum)
                const searchData = await response.json()
                setPopular(searchData.results)
                setPageNum(searchData.page)
                setLoadingProgress()
            } catch (error) {
                console.error(error);
            }
        }
        getPopularMovies()
    }, [pageNum])

    const handleChangePage = (e, value) => {
        setPageNum(value)
    }

    return (
        <Box>
            {
                isLoading ? < LinearProgress sx={{ color: "#e71d60" }} color="inherit" /> :
                    <Box>
                        <InfoGrid data={popular} />
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '1rem' }}>
                            <Pagination onChange={handleChangePage} count={100} />
                        </Box>
                    </Box>
            }

        </Box>
    )
}

export default PopularMovies