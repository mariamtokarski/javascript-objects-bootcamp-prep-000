var playlist = {
  neilYoung:"harvest moon",
  brockhampton:"face",
  aliciaKeys:"lesson learned",
  goapele:"closer"
  kanye:"Gold Digger"
}


function updatePlaylist(playlist, artist, titles){
  playlist["Phil Ochs"] = "Here's to the State of Mississippi"
  return playlist
}

function removeFromPlaylist(playlist, artist){
  delete playlist["Kanye"]
  return playlist
}
