var playlist = {
  neilYoung:"harvest moon",
  brockhampton:"face",
  aliciaKeys:"lesson learned",
  goapele:"closer"
}


function updatePlaylist(playlist, artist, titles){
  playlist.chopin = "nocturne in c minor"
  return playlist
}

function removeFromPlaylist(playlist, artist){
  delete playlist.aliciaKeys
  return playlist
}
