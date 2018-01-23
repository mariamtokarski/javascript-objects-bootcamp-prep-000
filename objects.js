var playlist = {artist: "titles"
}
var playlist = {
  neilYoung: "harvest moon",
  brockhampton: "face",
  aliciaKeys: "lesson learned",
  goapele: "closer",
  chopin: "nocturne in c minor"
}
function updatePlaylist(playlist, artist, titles){
  playlist.artist = titles
  return playlist
}

function removeFromPlaylist(playlist, artist){
  delete playlist.artist
  return playlist
}
