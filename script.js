const numbersArray = [2,4,6,8,10];

function calculateAverage(arrayOfNumbers){
  if(arrayOfNumbers.length === 0){
    return 0;
  }
  let sum = 0;

  for(let i =0; i< arrayOfNumbers.length; i++){
    sum += arrayOfNumbers[i];
  }
  const average = sum/arrayOfNumbers.length;

  console.log(average)
  
  return average;
}
 calculateAverage(numbersArray);