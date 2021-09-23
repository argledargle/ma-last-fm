const getLastFmData = (searchTerm, callback) => {
  fetch(
    `http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${searchTerm}&api_key=${process.env.REACT_APP_APIKEY}&format=json`
  )
    .then(response => response.json())
    .then(data => callback(data))
}

module.exports = getLastFmData
