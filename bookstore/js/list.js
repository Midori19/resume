var shopList={}

shopList.name = "MyBuyList 購物清單"
shopList.time = "2017.03.07"
shopList.list = []

var dataUrl = "https://midori19.github.io/data/buyListData.txt"
$.ajax({
  url: dataUrl,
  success: function(res) {
    shopList.list = JSON.parse(res)
    showList()
  }
})

var itemHtml = '<li id={{id}} class="buyItem">{{num}}.{{item}}<div class="price">{{price}}</div><div id={{del_id}} data-del-id={{delid}} class="delBtn">X</div></li>'

var totalHtml = '<li class="buyItem total">總價<div class="price">{{price}}</div></li>'

// 如果把 totalPrice 在外部定義的話，會導致每次迴圈都是總數在加上新的價錢，導致總數錯誤
// var totalPrice = 0

function showList(){
  // 將 #itemList 的 html 元素替換成 ""(空) 物件
  $("#itemList").html("")
  // 在每次迴圈開始前，將 totalPrice 歸零
  var totalPrice = 0
  for (var i=0; i<shopList.list.length; i++) {
    var item = shopList.list[i]
    var itemId = "buyItem_"+i
    var delItemId = "delItem_"+i
    totalPrice += parseInt(item.price)
    var currentItemHtml = 
        itemHtml.replace("{{id}}",itemId)
                .replace("{{num}}",i+1)
                .replace("{{item}}",item.name)
                .replace("{{price}}",item.price)
                .replace("{{delid}}",i)
                .replace("{{del_id}}",delItemId)
    
    $("#itemList").append(currentItemHtml)
    $("#"+delItemId).click(
      function(){
        removeItem($(this).attr("data-del-id"))
      }
    )
  }
  var currentTotalHtml =
      totalHtml.replace("{{price}}",totalPrice)
      $("#itemList").append(currentTotalHtml)
}
showList()

// 寫完這段後並不會直接顯示在購物清單裡面，必須將上面得 for 迴圈再執行一次才能顯示在購物清單，能將上面的 for 迴圈變成 function ，再將 function 放到這段的最後去執行，就能顯示在購物清單裡
$(".addBtn").click(
  function(){
    // 如果輸入空字串，把 #inputPrice 設定為 0
    if ($("#inputName").val()=="") { alert("請輸入名稱"); return false}
    if ($("#inputPrice").val()==""){
      // $("#inputPrice").val(0)
      // 或直接不執行該動作
      // return false
      // 或顯示提示訊息
      alert("請輸入價錢")
      return false
    } else if (Number(isNaN($("#inputPrice").val()))){
      // 重製 $("#inputPrice").val
      $("#inputPrice").val("")
      alert("價錢請輸入數字")
      return false
    }
    shopList.list.push(
      {
        name:$("#inputName").val(),
        price:$("#inputPrice").val(),
      }
    )
    $("#inputName").val("")
    $("#inputPrice").val("")
    // 在這新增 function ，顯示購物清單
    showList()
  }
)

function removeItem(num) {
  shopList.list.splice(num,1)
  showList()
}

$('.container .wrap').click(
  function(){
    shopList.list.push({
      name: this.dataset.name,
      price: this.dataset.price,
    })
    showList()
  }
)