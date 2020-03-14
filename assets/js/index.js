
$("ul").on("click", "li", function(){
// CSSファイルにある機能適応
  $(this).toggleClass("completed");  
});

// Xをクリックした時にリストにあるものを削除

$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500, function(){
      $(this).remove();
  });
  event.stopPropagation();
})

// リスト追加の動き
$("input[type= 'text']").keypress(function(event){
  if(event.which === 13){
    // inputから新しいtodoリストへの追加
    var todoText = $(this).val();
    $(this).val("");
    // リスト追加
    $("ul").append("<li><span><i class='fa fa-trash-alt'></i></span> " + todoText + "</li>");
  }

});

$(".fa fa-plus").click(function(){
  $("input = [type= 'text']").fadeToggle();
});
