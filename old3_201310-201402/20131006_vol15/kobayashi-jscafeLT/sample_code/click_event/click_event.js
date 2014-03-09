var click_event = function(){
  var isShow = true;
  var all = $("#hoge");
  //こういう風にしてはダメ$("#click_event1");
  var click_event1 = all.find("#click_event1");
  click_event1.off();
  click_event1.on("click",function(){
	console.log("click");
    var clickButton = $(this);
	var image = all.find("#image");
	if(isShow){
      image.hide();
	  clickButton.html("クリックすると画像が表れます");
	  isShow = false;
    }else{
      image.show();
	  clickButton.html("クリックすると画像が消えます");
	  isShow = true;
	}
  });
};

global.click_event= click_event;