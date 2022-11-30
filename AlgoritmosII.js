//Print 1 to x

function printUpTo(x) {
    // your code here
    if (x>=0){
      for (var i=1; i<=x;i++){
        console.log(i);
      }
    }
    else if (x<0) {
      console.log("número negativo");
      return "false"
    }
  }
  printUpTo(1000); // debería imprimir todos los enteros de 1 to 1000
  y = printUpTo(-10); // debería imprimir false
  console.log(y); // debería imprimir false

  //Printsum

  function printSum(x) {
    var sum = 0;
    //your code here
    for (var i=1; i<=x;i++){
        console.log(i);
        sum += i;
        console.log(sum);
    }
     return sum
  }
  y = printSum(255) // debería imprimir todos los enteros de 0 a 255 y que cada entero imprima la suma parcial.
  console.log(y) // // debería imprimir 32640


  //PrintSmArray

  function printSumArray(x) {
    var sum = 0;
    for(var i=0; i<x.length; i++) {
      //your code here
      sum += x[i];
    }
    return sum;
  }
  console.log( printSumArray([1,2,3]) ); // debería imprimir 6


  //LargestElement
  function LargestElement(x) {
    var max = 0;
    for(var i=0; i<x.length; i++) {
      if (max < x[i]){
        max = x[i];
      }
    }
    return max;
  }
  console.log( LargestElement([1,30,5,7]) ); // debería imprimir 30

