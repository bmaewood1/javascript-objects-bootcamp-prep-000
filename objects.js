
var playlist = new Object ({ 'Slowdive': "Alison", 'My Bloody Valentine': "Sometimes" });


function updateplaylist(object, key, value) {
  return Object.assign({},object,{[key]: value})
}

updateplaylist(playlist, 'Phil Ochs', 'Here`s to the State of Mississippi');

function removeFromPlaylist(object, key) {
  delete playlist.Slowdive;
  return playlist;
}




