


var playlist = new Object ({ 'Slowdive': "Alison", 'My Bloody Valentine': "Sometimes" })


function updateplaylist(object, key, value) {
  object[key] = value
  return object
}

updateplaylist(playlist, 'Phil Ochs', 'Here`s to the State of Mississippi')

function removeFromPlaylist(object, key) {
  delete object.key;
  return object
}

removeFromPlaylist;


