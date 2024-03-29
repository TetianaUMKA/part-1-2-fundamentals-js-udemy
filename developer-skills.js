// 1. Remember, we're gonna use strict mode in in all scripts now, but if use "type = 'module'" we can avoid it.
'use strict';
// 2. Create .prettierrc for your formatting settings preferences

// 3. Create Configure User Snippets in Preferences I named it 'console.code-snippets'
//cl
console.log();

// 4. Install TODO Highlight and configure it in settings ->settings.json FIND FIX

// 5. Problem-solving

/// first solving - use function to different arrays
const temperatures = [3, -2, -6, 'error', 9, 13, 17, 15, 14, 9, 5];
const temperatures2 = [-7, -3, 6, 'error', -1, 0, 5, 'error', 7, 12, 8];

function determineHighestLowest(arr) {
  let min = 0;
  let max = 0;
  let cleanedArr = [];
  for (const value of arr) {
    if (typeof value !== 'number') {
      continue;
    }
    cleanedArr.push(value);
  }
  console.log(cleanedArr);
  min = Math.min(...cleanedArr);
  max = Math.max(...cleanedArr);
  console.log(min, max);
  return max - min;
}

const amplitude = determineHighestLowest(temperatures);
console.log(amplitude);

let amplitudeCurrentMonth;
amplitudeCurrentMonth = determineHighestLowest(temperatures);
amplitudeCurrentMonth = determineHighestLowest(temperatures2);

/// second solving - use function to different arrays
const calcTempAmplitude = function (temps) {
  let min = temps[0];
  let max = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== 'number') {
      continue;
    } else if (temps[i] < min) {
      min = temps[i];
    } else if (temps[i] > max) {
      max = temps[i];
    }
  }
  console.log(min, max);
  return max - min;
};

const amplitude2 = calcTempAmplitude(temperatures);
console.log(amplitude2);

let amplitudeCurrentMonth2;
amplitudeCurrentMonth2 = determineHighestLowest(temperatures);
amplitudeCurrentMonth2 = determineHighestLowest(temperatures2);

/// third solving - put two arrays together into function
function determineHighestLowest2(arr1, arr2) {
  const arr = arr1.concat(arr2);
  console.log(arr);
  let min = 0;
  let max = 0;
  let cleanedArr = [];

  for (const value of arr) {
    if (typeof value !== 'number') continue;
    cleanedArr.push(value);
  }
  console.log(cleanedArr);
  min = Math.min(...cleanedArr);
  max = Math.max(...cleanedArr);
  console.log(min, max);
  return max - min;
}
const amplitudeTwoArr = determineHighestLowest2(temperatures, temperatures2);
console.log(amplitudeTwoArr);

// Debugging
/* We can use: 
1) console.warm();
   console.error();
   console.table(); for looking deeply
2) by testing a needed code in the dev-tool debugger (sources -> needed script -> needed breakpoint)
3) we can write in our script 'debugger;' and this will direct us to the breakpoint where we made it
*/
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // value: Number(prompt('Degrees celsius:')), // FIND AND FIX (added Number because I need to return typeof 'number')
    value: 5,
  };
  const kelvin = measurement.value + 273;
  return kelvin;
};
console.log(measureKelvin());
