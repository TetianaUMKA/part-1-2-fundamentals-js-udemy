function printForecast(arr) {
  let concatenatedString = '';
  for (let i = 0; i < arr.length; i++) {
    let daylyString;
    if (typeof arr[i] !== 'number') continue;
    if (i === 0) {
      daylyString = `... ${arr[i]}ºC in ${i + 1} days`;
      concatenatedString += daylyString;
      continue;
    }
    daylyString = ` ... ${arr[i]}ºC in ${i + 1} days`;
    concatenatedString += daylyString;
    console.log(daylyString);
  }
  console.log(concatenatedString);
}

printForecast([17, 21, 23]); //  ... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days
printForecast([12, 5, -5, 0, 'errors', 4]); //  ... 12ºC in 1 days ... 5ºC in 2 days ... -5ºC in 3 days ... 0ºC in 4 days ... 4ºC in 5 days

function printForecast2(arr) {
  let concatenatedString = '';
  for (let i = 0; i < arr.length; i++) {
    concatenatedString += `${arr[i]}ºC in ${i + 1} days ... `;
  }
  console.log('... ' + concatenatedString);
}

printForecast2([17, 21, 23]); //  ... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days
printForecast2([12, 5, -5, 0, 4]); //  ... 12ºC in 1 days ... 5ºC in 2 days ... -5ºC in 3 days ... 0ºC in 4 days ... 4ºC in 5 days
