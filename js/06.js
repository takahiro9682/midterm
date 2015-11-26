function isPrimeNumber(number){
  if(number < 2){
    return false;
  }
  var i = 1;
  while(i < number / 2){
    i = i + 1;
    if(number % i == 0){
       return false;
    }
  }
  return true;
}
