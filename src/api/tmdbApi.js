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
    now_playing: 'now_playing',

}
export const tvType = {
    popular: 'popular',
    top_rated: 'top_rated',
    on_the_air: 'on_the_air'
}

const tmdbApi = {
    getMoviesList: ((type, pageNum) => {
        const url = `${apiConfig.baseUrl}movie/${movieType[type]}?api_key=${apiConfig.apiKey}&language=en-US&page=${pageNum}`   
        return fetch(url)
    }),
    getTvList: ((type, pageNum) => {
        const url = `${apiConfig.baseUrl}tv/${tvType[type]}?api_key=${apiConfig.apiKey}&language=en-US&page=${pageNum}`
        return fetch(url)
    }),
    getWatchProviders: ((category, id) => {
        const url = `https://api.themoviedb.org/3/${category}/${id}?api_key=e9ad43fd1d98a5d8435f4d49f1ec2644&language=en-US`
        return fetch(url)
    }),
    getDetails: ((category, id) => {
        const url = `https://api.themoviedb.org/3/${category}/${id}?api_key=e9ad43fd1d98a5d8435f4d49f1ec2644&language=en-US`
        return fetch(url)
    }),
    getReviews: ((movieId) => {
        const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=e9ad43fd1d98a5d8435f4d49f1ec2644&language=en-US`
        return fetch(url)
    }),
    getVideos: ((movieId) => {
        const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=e9ad43fd1d98a5d8435f4d49f1ec2644&language=en-US`
        return fetch(url)
    }),
    getSearchResults: (async (searchQuery, cate, pageNum) => {
        const url = `${apiConfig.baseUrl}search/${category[cate]}?api_key=${apiConfig.apiKey}&language=en-US&query=${searchQuery}&page=${pageNum}&include_adult=false`
        return await fetch(url)
    }),
    getGenre: ((cate) => {
        const url = `${apiConfig.baseUrl}genre/${category[cate]}/list?api_key=${apiConfig.apiKey}&language=en-US`
        return fetch(url)
    })
}


export default tmdbApi; 