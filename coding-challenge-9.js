// a easy version of the challenge

function printForecast2(arr) {
  let concatenatedString = '';
  for (let i = 0; i < arr.length; i++) {
    concatenatedString += `${arr[i]}ºC in ${i + 1} days ... `;
  }
  console.log('... ' + concatenatedString);
}

printForecast2([17, 21, 23]); //  ... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days
printForecast2([12, 5, -5, 0, 4]); //  ... 12ºC in 1 days ... 5ºC in 2 days ... -5ºC in 3 days ... 0ºC in 4 days ... 4ºC in 5 days

// a difficult version of the challenge

function printForecast(arr) {
  let concatenatedString = '';
  for (let i = 0, n = 0; i < arr.length; i++, n++) {
    let dailyString;
    if (typeof arr[i] !== 'number') {
      n -= 1;
      continue;
    }
    if (i === 0) {
      dailyString = `... ${arr[i]}ºC in ${n + 1} days`;
      concatenatedString += dailyString;
      continue;
    }
    dailyString = ` ... ${arr[i]}ºC in ${n + 1} days`;
    concatenatedString += dailyString;
    console.log(dailyString);
  }
  console.log(concatenatedString);
}

printForecast([17, 21, 23]); //  ... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days
printForecast([12, 5, -5, 0, 'errors', 4]); //  ... 12ºC in 1 days ... 5ºC in 2 days ... -5ºC in 3 days ... 0ºC in 4 days ... 4ºC in 5 days
