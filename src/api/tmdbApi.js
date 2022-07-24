import { type } from "@testing-library/user-event/dist/type";
import { apiConfig } from "./apiConfig";


export const category = {
    movie: 'movie',
    tv: 'tv'
}
export const movieType = {
    upcoming: 'upcoming',
    popular: 'popular',
    top_rated: 'top_rated',
    now_playing: 'now_playing'

}
export const tvType = {
    popular: 'popular',
    top_rated: 'top_rated',
    on_the_air: 'on_the_air'
}

const tmdbApi = {
    getMoviesList: ((type, pageNum) => {
        const url = `${apiConfig.baseUrl}movie/${movieType[type]}?api_key=${apiConfig.apiKey}&language=en-US&page=${pageNum}`
        console.log(url)
        return fetch(url)
    }),
    getTvList: ((type, pageNum) => {
        const url = `${apiConfig.baseUrl}tv/${tvType[type]}?api_key=${apiConfig.apiKey}&language=en-US&page=${pageNum}`
        console.log(url)
        return fetch(url)
    }),
    getWatchProviders: ((tvId) => {
        const url = `https://api.themoviedb.org/3/tv/${tvId}?api_key=e9ad43fd1d98a5d8435f4d49f1ec2644&language=en-US`
        return fetch(url).then(res => res.json()).then(data => console.log(data))
    }),
    getDetails: ((movieId) => {
        const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=e9ad43fd1d98a5d8435f4d49f1ec2644&language=en-US`
        return fetch(url).then(res => res.json()).then(data => console.log(data))
    }),
    
}


export default tmdbApi; 