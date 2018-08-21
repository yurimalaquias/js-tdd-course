export const search = (query, type) => 
  fetch(`https://api.spotify.com/v1/search?q=${query}&type=${type}`)
    .then(data => data.json())

export const searchAlbums = () => 
  fetch(`https://spotify.com`)
  // fetch(`https://api.spotify.com/v1/search?q=${query}&type=album`)


export const searchArtists = (query) => 
  fetch(`https://api.spotify.com/v1/search?q=${query}&type=artist`)

export const searchTracks = () => {};
export const searchPlaylists = () => {};
