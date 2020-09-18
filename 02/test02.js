(function($, window) {
  $(function() {
    // この中に処理を書きます
    $('h2').remove();
    $('#index').append("<li>メソッド</li>");
    
      $('#index').find('li').each(function() {
      // ループ内の処理
      console.log($(this).text().length);
      var mozi = $(this).text();
      var mozi2 = mozi + "[" + mozi.length + "文字]";
      $(this).text(mozi2);
    });
      
    
    
  });
})(jQuery, window);