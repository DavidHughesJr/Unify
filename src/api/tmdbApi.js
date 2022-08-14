import { type } from "@testing-library/user-event/dist/type";
import { apiConfig } from "./apiConfig";


export const category = {
    movie: 'movie',
    tv: 'tv',
    popular: 'popularity.desc',
    releaseTv: 'first_air_date.desc',
    releaseMovie: 'release_date.desc'
}
export const person = 'person'

export const movieType = {
    upcoming: 'upcoming',
    popular: 'popular',
    top_rated: 'top_rated',
    now_playing: 'now_playing',

}
export const tvType = {
    popular: 'popular',
    top_rated: 'top_rated',
    airing_today: 'airing_today',
    on_the_air: 'on_the_air',
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
        const url = `https://api.themoviedb.org/3/${category}/${id}/watch/providers?api_key=e9ad43fd1d98a5d8435f4d49f1ec2644`
        return fetch(url)
    }),
    getDetails: ((category, id) => {
        const url = `https://api.themoviedb.org/3/${category}/${id}?api_key=e9ad43fd1d98a5d8435f4d49f1ec2644&language=en-US`
        return fetch(url)
    }),
    getCredits: ((category, id) => {
        const url = `https://api.themoviedb.org/3/${category}/${id}/credits?api_key=e9ad43fd1d98a5d8435f4d49f1ec2644&language=en-US`
        return fetch(url)
    }),
    getPeopleInfo: ((id) => {
        const url = `https://api.themoviedb.org/3/person/${id}?api_key=${apiConfig.apiKey}&language=en-US&append_to_response=movie_credits,tv_credits,images`
        return fetch(url)
    }),
    getMoreLikeThis: ((category, id) => {
        const url = `https://api.themoviedb.org/3/${category}/${id}/similar?api_key=e9ad43fd1d98a5d8435f4d49f1ec2644&language=en-US&page=1`
        return fetch(url)
    }),
    getVideos: ((category, id) => {
        const url = `https://api.themoviedb.org/3/${category}/${id}/videos?api_key=e9ad43fd1d98a5d8435f4d49f1ec2644&language=en-US`
        return fetch(url)
    }),
    getSearchResults: (async (searchQuery, cate, pageNum) => {
        const url = `${apiConfig.baseUrl}search/${category[cate]}?api_key=${apiConfig.apiKey}&language=en-US&query=${searchQuery}&page=${pageNum}&include_adult=false`
        return await fetch(url)
    }),
    getSearchFilter: ((category, id, pageNum) => {
        const url = `https://api.themoviedb.org/3/discover/tv?api_key=e9ad43fd1d98a5d8435f4d49f1ec2644&language=en-US&sort_by=${category}&page=${pageNum}&timezone=America%2FNew_York&&with_genres=${id}`
        return fetch(url)
    }),
    getGenre: ((cate) => {
        const url = `${apiConfig.baseUrl}genre/${category[cate]}/list?api_key=${apiConfig.apiKey}&language=en-US`
        return fetch(url)
    }),
    getReviews: ((category, id) => {
        const url = `https://api.themoviedb.org/3/${category}${id}/reviews?api_key=e9ad43fd1d98a5d8435f4d49f1ec2644&language=en-US`
        return fetch(url)
    }),
    getStreamingMovies: ((category, id, pageNum) => {
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=e9ad43fd1d98a5d8435f4d49f1ec2644&language=en-US&sort_by=${category}&include_adult=false&include_video=true&page=${pageNum}&with_watch_providers=${id}&watch_region=US`
        return fetch(url)
    }),
    getStreamingTvShows: ((category, id, id2, pageNum) => {
        const url = `https://api.themoviedb.org/3/discover/tv?api_key=e9ad43fd1d98a5d8435f4d49f1ec2644&language=en-US&sort_by=${category}&page=${pageNum}&timezone=America%2FNew_York&with_networks=${id}&with_watch_providers=${id2}`
        return fetch(url)
    }),
    getMoviesGenres: ((category, pageNum, id, date) => {
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=e9ad43fd1d98a5d8435f4d49f1ec2644&language=en-US&sort_by=${category}&page=${pageNum}&timezone=America%2FNew_York&&with_genres=${id}&primary_release_date.lte=${date}`
        return fetch(url)
    }),
    getTvShowGenres: ((category, pageNum, id, date) => {
        const url = `https://api.themoviedb.org/3/discover/tv?api_key=e9ad43fd1d98a5d8435f4d49f1ec2644&language=en-US&sort_by=${category}&page=${pageNum}&timezone=America%2FNew_York&with_genres=${id}&primary_release_date.lte=${date}`
        return fetch(url)
    }),
}


export default tmdbApi; 