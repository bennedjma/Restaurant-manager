var i = 0;
var slidesImage = ["01.jpg","02.jpg","03.jpg"];

var slideShow = function(){
    document.slideshow.src=slidesImage[i];
    if (i < slidesImage.length - 1){
        i++ ;
    }
    else{
        i = 0 ;
    }
    setTimeout("slideShow()",2000);
    
}
slideShow()