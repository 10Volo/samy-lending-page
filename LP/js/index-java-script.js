var videoIframe = $('#yt');

$("#btn-player-show").click(function () {
    if (videoIframe.attr('src') === '') {
        videoIframe.attr('src','https://player.vimeo.com/video/241240228?autoplay=1');
        setTimeout(function(){ $("#yt").show(); }, 200);
    }
});

$("#btn-player-hide").click(function () {
    videoIframe.attr('src','');
    setTimeout(function(){ $("#yt").hide(); }, 200);
});
