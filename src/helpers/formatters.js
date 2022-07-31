
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

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});