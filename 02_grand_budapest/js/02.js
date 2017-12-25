// youtubePlayer
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '100%',
        width: '100%',
        playerVars: {
            rel: 0,
            loop: 1,
            start: 4,
            autoplay: 1, // debug 寫完後刪除
            controls: 0,
            showinfo: 0,
            autohide: 0,
            modestbranding: 1,
            playlist: '1Fg5iWmQjwk',
        },
        videoId: '1Fg5iWmQjwk',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}
function onPlayerReady(event) {
    event.target.playVideo(); // debug 寫完後刪除
    // player.mute();
}
var done = false;

function onPlayerStateChange(event) {

}
function playVideo() {
    player.playVideo();
}
function pauseVideo() {
    player.pauseVideo();
}
function stopVideo() {
    player.stopVideo();
}

{
    $(document).ready(function() {
        $('html, body').animate({scrollTop: 0}, 1500);
    })
}

{
    let clickCount = 0;
    $(".slideWrapper").click(function(){
        if ((clickCount%2)==0) {
            clickCount++;
            $("body").css("overflow","visible");
            $(".main").css("transform","translateX(0)");
            $(".slideLeft").css("transform","translateX(0)");
            pauseVideo();
        } else {
            clickCount++;
            $("body").css("overflow","hidden");
            $(".main").css("transform","translateX(-100%)");
            $(".slideLeft").css("transform","translateX(-70%)");
            playVideo();
            $('html, body').animate({scrollTop: 0}, 900);
        }
    })
}

{
    let leftCount = 0;
    let rightCount = 0;
    $(".homeLeft").click(function(){
        if ((leftCount%2)==0) {
            leftCount++;
            $(".homeRight").css("width","0");
            $(".homeLeft").css("width","100%");
        } else {
            leftCount++;
            $(".homeRight").css("width","50%");
            $(".homeLeft").css("width","50%");
        }
    });
    $(".homeRight").click(function(){
        if ((rightCount%2)==0) {
            rightCount++;
            $(".homeLeft").css("width","0");
            $(".homeRight").css("width","100%");
        } else {
            rightCount++;
            $(".homeLeft").css("width","50%");
            $(".homeRight").css("width","50%");
        }
    });
}

{
    let getWinHeight = $(window).height();
    let getRes = $(window).resize();
    $(window).scroll(function(event){
        if ($(window).scrollTop() > ((getWinHeight*2)-50) ) {
            $(".intro p").css("bottom","0em");
            
        } else {
            $(".intro p").css("bottom","-1.7em");
        }
    });

    $(window).scroll(function(event){
        if ($(window).scrollTop() > ((getWinHeight*3)-200) ) {
            $(".info .infoPwrapper:nth-child(1) .infoP p").css("bottom","0em");
        } else {
            $(".info .infoPwrapper:nth-child(1) .infoP p").css("bottom","-1.7em");
        }
    });

    $(window).scroll(function(event){
        if ($(window).scrollTop() > ((getWinHeight*3)+200) ) {
            $(".info .infoPwrapper:nth-child(2) .infoP p").css("bottom","0em");
        } else {
            $(".info .infoPwrapper:nth-child(2) .infoP p").css("bottom","-1.7em");
        }
    });

    $(window).scroll(function(event){
        if ($(window).scrollTop() > ((getWinHeight*4)-100) ) {
            $(".info .infoImgTwo").css("top","53em");
            $(".info .infoImgTwo").css("width","90%");
            $(".info .infoImgTwo").css("height","600px");
        } else {
            $(".info .infoImgTwo").css("top","60em");
            $(".info .infoImgTwo").css("width","87%");
            $(".info .infoImgTwo").css("height","550px");
        }
    });



    // testCode //////////////////////////////////////////////////////////////////////

    $(window).resize(function() {
        let getWinHeight = $(window).height();
        $(window).scroll(function(event){
            if ($(window).scrollTop() > (getWinHeight*2) ) {
                $(".intro p").css("bottom","0em");
            } else {
                $(".intro p").css("bottom","-1.7em");
            }
        });

        $(window).scroll(function(event){
            if ($(window).scrollTop() > ((getWinHeight*3)-200) ) {
                $(".info .infoPwrapper:nth-child(1) .infoP p").css("bottom","0em");
            } else {
                $(".info .infoPwrapper:nth-child(1) .infoP p").css("bottom","-1.7em");
            }
        });

        $(window).scroll(function(event){
            if ($(window).scrollTop() > ((getWinHeight*3)+200) ) {
                $(".info .infoPwrapper:nth-child(2) .infoP p").css("bottom","0em");
            } else {
                $(".info .infoPwrapper:nth-child(2) .infoP p").css("bottom","-1.7em");
            }
        });

        $(window).scroll(function(event){
            if ($(window).scrollTop() > ((getWinHeight*4)-100) ) {
                $(".info .infoImgTwo").css("top","53em");
                $(".info .infoImgTwo").css("width","90%");
                $(".info .infoImgTwo").css("height","600px");
            } else {
                $(".info .infoImgTwo").css("top","60em");
                $(".info .infoImgTwo").css("width","87%");
                $(".info .infoImgTwo").css("height","550px");
            }
        });
    })
    // test end

}