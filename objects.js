


var playlist = { 'Slowdive': "Alison", 'My Bloody Valentine': "Sometimes" };

function updateplaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { ['Phil Ochs']: 'Here`s to the State of Mississippi'});
}


function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
  return playlist;
}


var  = new Object ({})

var obj = { prop: 1 }
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({},obj,{[key]:value})
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}
function deleteFromObjectByKey(object, key) {
  delete object.key;
  return obj
}
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.key
  return object
}