function isPrime(num){
  for(var i = 2; i<num/2;i++){
    if(num%i == 0){
      return false;
    }
  }
  return true;
}

function sumOfNPrimes(num){
  var sum = 0;
  var count = 0;
  var cur_num = 2;
  while(count < num){
    if(isPrime(cur_num)){
      sum += cur_num;
      count += 1;
    }
    cur_num += 1;
  }
  return sum;
}

console.log(isPrime(5));
console.log(isPrime(10));
console.log(isPrime(15485863));
console.log(isPrime(3548563));

console.log(sumOfNPrimes(0));
console.log(sumOfNPrimes(1));
console.log(sumOfNPrimes(4));
