$(function(e) {
	$.ajax({
		url: 'https://opendata2.epa.gov.tw/AQI.json',
        type: 'GET',
        success: function(data) {
            for (var i in data) {
                // 把值撈出來放在 select
        		var twoStr = '<option value="' + data[i].SiteName + '">' + data[i].SiteName + '</option>'
        		$('#county').append(twoStr)

                var pm25 = data[i].SiteName+' PM2.5 濃度：'+data[i]["PM2.5"]+'<br>空氣品質指標(AQI)為 ' + data[i].AQI
                var str = '<li>'+ data[i].SiteName + '<div class="block">'+pm25+'</div></li>'
				var quality = data[i].AQI
				if (quality <= 50) {
					$('.good').append(str)
				} else if (quality <= 100 && quality > 50) {
					$('.moderate').append(str)
				} else if (quality <= 150 && quality > 100) {
					$('.sensitive').append(str)
				} else if (quality <= 200 && quality > 150) {
					$('.unhealthy').append(str)
				} else if (quality <= 300 && quality > 200) {
                    $('.vUnhealthy').append(str)
                }
            }
            if ($('.unhealthy li').length == 0) {
                $('.unhealthy').append('<p>無城市達到紅標範圍</p>')
            }
            if ($('.vUnhealthy li').length == 0) {
                $('.vUnhealthy').append('<p>無城市達到紫標範圍</p>')
            }
            var lastUpDate = '<p>最後更新時間：'+ data[i].PublishTime +'</p>'
            $('.update').append(lastUpDate)
        }
	})

	// 撈資料
    $('.search').on('click', function(event) {

        event.preventDefault()
        $.ajax({
            url: 'https://opendata2.epa.gov.tw/AQI.json',
            type: 'GET',
            success: function(data) {
                // console.log(data[0]["PM2.5"])
                var county = $('#county').val()

                //內容清空
                $('#list').html('')
                $('#list').removeClass()


                // 跑 for 迴圈撈資料      
                for (i = 0; data.length > i; i++) {

                    if (county == data[i].SiteName) {
                        // var pm25 = '<p>PM2.5 達到 '+data[i]["PM2.5"]+'</p>'
                        var str = '<p>'+ data[i].SiteName +'空氣品質指標(AQI)為 ' + data[i].AQI + '</p>'
                        var quality = data[i].AQI
						if (quality <= 50) {
							$('#list').addClass('green')
							$('#list').append('<p>空氣品質為良好，污染程度低或無污染。</p>')
						} else if (quality <= 100 && quality > 50) {
							$('#list').addClass('yellow')
							$('#list').append('<p>空氣品質普通；但對非常少數之極敏感族群產生輕微影響。</p>')
						} else if (quality <= 150 && quality > 100) {
							$('#list').addClass('orange')
							$('#list').append('<p>空氣污染物可能會對敏感族群的健康造成影響，但是對一般大眾的影響不明顯。</p>')
						} else if (quality <= 200 && quality > 150) {
							$('#list').addClass('red')
							$('#list').append('<p>對所有人的健康開始產生影響，對於敏感族群可能產生較嚴重的健康影響。</p>')
						} else if (quality <= 300 && quality > 200) {

						}
                        $('#list').prepend(str)
                    }
                }
            }
        })
    	$('#list').css('padding','.5rem')
    })

    let cont = 0
    // let getWidt = $(window).width()
    // let getHei = $(window).height()
    // $(".menuFixed").css("width",getWidt.toString())
    // $(".menuFixed").css("height",getHei.toString())
    function funcClick(){
      if ((cont%2) == 0) {
        cont+=1;
        $(".menuIcon").addClass("open")
        $(".menuCover").addClass("open")
        $(".mainImg").addClass("open")
      } else {
        cont+=1;
        $(".menuIcon").removeClass("open")
        $(".menuCover").removeClass("open")
        $(".mainImg").removeClass("open")
      }
    }
    $(".menuIcon").click(funcClick)
})