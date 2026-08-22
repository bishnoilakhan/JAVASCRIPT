function printForecast(arr){


  let result="";
  for (let i = 0; i < arr.length; i++) {
    result+=`${arr[i]} in ${i+1} days ... `
    
    
  }

  return result;

}

