var playlist = {artist: "titles"
}

function updatePlaylist(playlist, artist, titles){
  playlist.artist = titles
  return playlist
}

function removeFromPlaylist(playlist, artist){
  delete playlist.artist
  return playlist
}
