function info(link){
  window.location.href = `${link}`;
}


function play(link){
  var video = `<video width="100%" height="600" controls><source src="${link}" type="video/mp4"></video>"`;

  document.body.insertBefore('carrousel-movies') += video;
}