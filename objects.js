var playlist = new Object ({
  "neilYoung": "harvest moon",
  "brockhampton": "face",
  "aliciaKeys": "lesson learned",
  "goapele": "closer"
  "chopin": "nocturne in c minor"
})

function updatePlaylist(playlist, artist, titles){
  return object.assign({}, playlist, {[artist]:titles})
}

function removeFromPlaylist(playlist, artist){
  delete playlist.artist
  return playlist
}
