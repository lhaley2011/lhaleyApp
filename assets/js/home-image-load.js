function setPicture(winSize) {
    var landscape = "http://lhaley.com/images/home_landscape.gif";
    var portrait = "http://lhaley.com/images/home_portrait.gif";
    var img = $('#home-image')[0];
    if($(window).width() < winSize) {
        if(img.src != portrait) {
            console.log("change image portrait  " + img.src);
            img.attr("src", portrait);
        }
    }
    else {
        if(img.src != landscape) {
            console.log("change image landscape  " + img.src);
            img.attr("src", landscape);
        }
    }
}

(function($) {

  // io.socket.get("/home/image", function(res) {
  //   console.log(res);
  //   $('#home-image').attr("src", res)
  // });
    //setPicture(760);
    //$(window).resize(function() {
    //    setPicture(760);
    //});

})(jQuery);
