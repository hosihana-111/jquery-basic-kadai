// loadされた場合
$(window).on('load', () => {
    console.log ('loadイベントが発生しました！');
  });

$(function() {
  $(window).on( {
        // scrollされた場合
        'scroll': () => {
          console.log('scrollイベントが発生しました！');
        },
      });
   });
   
  