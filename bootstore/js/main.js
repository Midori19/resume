$('.container .wrap').click(function() {
    // 取得 data-* 的值用 .dataset
    // $('.container .wrap:nth-child(1)')[0].dataset
    // console.log(this.dataset)
})

$('#header .caption').hover(function() {
    // console.log(this.innerHTML.split(''))
    $(this).css('transform','translateY(-10px)')
}, function(){
    $(this).css('transform','translateY(0px)')
})

// 文字特效
$('#header #storeName').each(function(index,val){
    var tt = $(val).text()
    var allhtml=""
    var mpos={x: screen.width/2,y: screen.height/2}

    for(var i=0;i<tt.length;i++)
        allhtml+="<span class='spc' id='sc"+i+"'>"+tt[i]+"</span>"
    $(val).html(allhtml)
    for(var i=0;i<tt.length;i++){
        $("#sc"+i).css({
            "bottom": (Math.random()*100+50),
            "opacity":0,
            "transition-duration": (0.5+Math.random()*1)+"s",
            "transition-delay": Math.random()*(1)+"s"
        })
    }
    setTimeout(function(){
        for(var i=0;i<tt.length;i++)
            $("#sc"+i).css({
                "bottom":"0px",
                "opacity":"1",
                "left":"0px"
            })
    },10)

    setTimeout(function(){
        for(var i=0;i<tt.length;i++)
            $("#sc"+i).css({
                "left": (100-Math.random()*200)+"px",
                "bottom": (100-Math.random()*200)+"px",
                "opacity":"0",
                "transition-delay": 0+"s"
            })
    },3000)

    setTimeout(function(){
        $('#header .caption').css('opacity','1')
        $('#header .caption').css('transform','translateY(0)')
    },4500)
})

// 開啟購物清單
$('#header .buylist').click(function(){
    $('.reduction').css('display','flex')
    $('#header').css('position','fixed')
                .css('z-index','1')
                .css('height','100vh')
    $('#header .caption').css('opacity','0')
                         .css('display','none')
    $('.buyListWrap').css('opacity','1')
                     .css('z-index','1')
                     .css('transition','ease-in-out 1.3s')
                     .css('position','relative')

    // 1 秒後關掉 .container 不然會影響到 .buylist 的高度
    setTimeout(function(){
        $('.container').css('display','none')
    },1000)
})
// 返回頁面
$('.reduction').click(function(){
    $('.reduction').css('display','none')
    $('#header').css('position','relative')
                .css('z-index','1')
                .css('height','5vh')
    $('#header .caption').css('opacity','1')
                         .css('display','inline-block')
    $('.buyListWrap').css('opacity','0')
                     .css('z-index','initial')
                     .css('transition','ease-in-out .3s')
                     .css('position','fixed')

    setTimeout(function(){
        $('.container').css('display','flex')
    },1)
})

$('.container .wrap').hover(function() {
    var self = $(this)
    self.css('opacity','.6')
    self.click(function() {
        setTimeout(function(){
            self.css('opacity','1')
        },1)
        setTimeout(function(){
            self.css('opacity','.6')
            self.addClass('hide')
        },150)
    })
}, function() {
    var self = $(this)
    self.css('opacity','1')
    self.removeClass('hide')
})