const MDB_API_KEY = `e9ad43fd1d98a5d8435f4d49f1ec2644`

export const apiConfig = {

  baseUrl: 'https://api.themoviedb.org/3/',
  apiKey: MDB_API_KEY,
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
  w300Image: (imgPath) => `https://image.tmdb.org/t/p/w300/${imgPath}`,

}
