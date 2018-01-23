var playlist = {artist: "titles"
}

function updatePlaylist(playlist, artist, titles){
  return object.assign({}, playlist, {[artist]:titles})
}

function removeFromPlaylist(playlist, artist){
  delete playlist.artist
  return playlist
}
