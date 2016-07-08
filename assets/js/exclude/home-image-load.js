function setPicture(winSize) {
    var landscape = "http://lhaley.com/images/home_landscape.jpg";
    var portrait = "http://lhaley.com/images/home_portrait.jpg";
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
