var options_function = function(a, b, options){
  var default_options = {
    hoge: "hogehoge",
  };
  //extend第一引数のオブジェクトに第二引数のオブジェクトのkeyを追加する
  //keyが同じ場合第二引数のkeyの値が上書きされる

  var hash = {};
  if(options){
    hash = _.extend(default_options, options);
  }
  var result = "";
  if(hash.fuga){
    result = a + b + hash.hoge + hash.fuga;
  }else{
    result = a + b + hash.hoge;
  }
  return result;
};

global.options_function = options_function;