var callback_standart = function(a, callback){
  var result = "hoge";
  callback(result + a);
};

var callback_each = function(a, callback){
  var result = "js";
  var i;
  for(i = 0;i < 10; ++i){
    callback(result + a + i)
  }
};

global.callback_standart = callback_standart;
global.callback_each = callback_each;