{
    $(document).ready(function() {
        $('html, body').animate({scrollTop: 0}, 1000)
    })

    setInterval ("running()", 1000)
    setInterval ("addBanner()", 1500)
    function running() {
        $(".loadPage").css("width","20%")
        $(".loadPage").css("height","20vh")
        $(".loadPage").css("opacity","0")
    }
    function addBanner() {
        // 透過增加類別來修改 ::before, ::after
        $(".banner").addClass("before")
        $(".banner").addClass("after")
        $(".banner p").css("bottom","0")
    }

    let getTwoScroll = $(".banner").height() + $(".one").height()
    let spotHeig = $(".two .spotlight:nth-child(1)").height()
    let getTwoScrollnth = getTwoScroll + spotHeig
    $(window).scroll(function(event){
        if ($(window).scrollTop() >= (getTwoScroll - 150)) {
            $(".two .spotlight:nth-child(1) .content p").css("transform","translateX(0)")
            $(".two .spotlight:nth-child(1) .content p").css("opacity","1")
        }
        if ($(window).scrollTop() >= (getTwoScrollnth - 150)) {
            $(".two .spotlight:nth-child(2) .content p").css("transform","translateX(0)")
            $(".two .spotlight:nth-child(2) .content p").css("opacity","1")
        }
        if ($(window).scrollTop() >= (getTwoScrollnth + spotHeig - 150)) {
            $(".two .spotlight:nth-child(3) .content p").css("transform","translateX(0)")
            $(".two .spotlight:nth-child(3) .content p").css("opacity","1")
        }
    })
}

{
    let count = 0;
    $(".inner h2").click(function() {
        if ((count%2)==0) {
            count+=1
            $(".banner .top").css("width","100%")
            $(".banner .bottom").css("width","100%")
        } else {
            count+=1
            $(".banner .top").css("width","0")
            $(".banner .bottom").css("width","0")
        }
    })
}