// Video PlayBtn hide after play video

var vid1 = document.getElementById("video1");
function playVid1() {
  vid1.play();
}

var vid2 = document.getElementById("video2");
function playVid2() {
  vid2.play();
}


//if video is playing
$('video').bind('play', function (e) {
  var videoid = $(this).attr('id');
  document.getElementById(videoid).addEventListener('playing', function(){
      $(".bi-play-fill").fadeOut();
      $(".overlay").fadeOut();
  });
});


// stop video in modal when close
jQuery('.modal')
    .on('hidden.bs.modal', function () {
        var $video = jQuery('video', jQuery(this));
        $video[0].pause();
});

//stop youtube (iframe) in modal when close
$('.modal').on('hidden.bs.modal', function (e) {
  $('iframe').attr("src", $("iframe").attr("src"));
});
