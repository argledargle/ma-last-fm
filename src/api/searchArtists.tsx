export const searchArtists = async (searchTerm: string, callback: Function) => {
  await fetch(
    `http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${searchTerm}&api_key=6850c857aa62a615c85ecc093e32c107&format=json`
  )
    .then(response => response.json())
    .then(data => callback(data))
}
