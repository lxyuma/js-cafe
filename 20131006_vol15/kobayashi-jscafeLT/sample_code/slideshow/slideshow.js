//フェードイン、フェードアウトにかかる時間(ミリ秒)
var FADE_DURATION = 1000;
//画像が切り替わる間隔の時間(ミリ秒)
var IMAGE_INTERAL = 5000;

$(function(){
  var images = $(".image");
  var imageCount = images.length;
  //初期設定
  var currentNumber = lotImageNumber(0, imageCount);
  console.log(currentNumber);
  console.log(images[currentNumber]);
  images.each(function(){
    var target = $(this);
    if(target == images[currentNumber]){
      target.show();
    }else{
      target.hide();
    }
  });
  //設定した時間の感覚で
  setInterval(function(){
    var nextNumber = lotImageNumber(currentNumber, imageCount);
	var beforeImage = images[currentNumber];
	var afterImage = images[nextNumber];
	beforeImage.fadeOut(FADE_DURATION);
	afterImage.fadeIn(FADE_DURATION);
	currentNumber = nextNumber;
  }, IMAGE_INTERAL);
});

var lotImageNumber = function(currentNumber, totalCount){
  var number = 0;
  //ひとつ前のと同じにならないようにする
  while(number == currentNumber){
    number = Math.floor(Math.random() * totalCount);
  }
  return number;
};