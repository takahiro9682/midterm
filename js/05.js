function fizzbuzz(c){
  if(c % 3 == 0 && c % 5 == 0){
    return "fizzbuzz";
  } else if(c % 3 == 0){
    return "fizz";
  } else if(c % 5 == 0){
    return "buzz";
  }
  return c;
}
