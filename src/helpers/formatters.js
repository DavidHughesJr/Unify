
export const formatDataDate = (movieDate) => {
    const dateToFormat = new Date(movieDate);
    return dateToFormat
}
export const formatMergeGenre = ((arr1, arr2) => {
    const formattedGenreList = []
    arr1.forEach((genreId) => {
        arr2.forEach((genreList) => {
            if (genreId === genreList.id) {
                formattedGenreList.push({ ...genreId, ...genreList })
            }
        })
    })
    return formattedGenreList
})

export const moneyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});
