export const searchArtists = async (searchTerm: string, callback: Function) => {
  await fetch(
    `http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${searchTerm}&api_key=${process.env.REACT_APP_APIKEY}&format=json`
  )
    .then(response => response.json())
    .then(data => callback(data))
}
