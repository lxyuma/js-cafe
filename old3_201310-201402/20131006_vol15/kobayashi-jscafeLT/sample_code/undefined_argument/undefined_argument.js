var mutable_argument = function(a, b, c){
  var result = "";
  if(c){
	result = a + b +c;
  }else{
	console.log(c);
    result = a + b;
  }
  return result;
};

global.mutable_argument = mutable_argument;