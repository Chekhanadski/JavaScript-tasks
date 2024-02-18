/*
Title:
  Decimal Time Conversion

Description:
  Write two functions, one that converts standard time to decimal time and one that converts decimal time to standard time.

  One hour has 100 minutes (or 10,000 seconds) in decimal time, yet its duration is the same as in standard time. Thus a decimal minute consists of 36 standard seconds, which is 1/100 of an hour.
  Working time is usually rounded to integer decimal minutes. Thus one standard minute equals 0.02 decimal hours, while two standard minutes equal 0.03 decimal hours and so on.
  The terms "normal time" and "standard time" are considered synonymous in this kata.
  toIndustrial(time) should accept either the time in minutes as an integer or a string of the format "h:mm". Minutes will always consist of two digits in the tests (e.g., "0:05"); hours can have more. Return a double that represents decimal hours (e.g. 1.75 for 1h 45m). Round to a precision of two decimal digits - do not simply truncate!
  toNormal(time) should accept a double representing decimal time in hours. Return a string that represents standard time in the format "h:mm".
  There will be no seconds in the tests. We'll neglect them for the purpose of this kata.

Examples:
  toIndustrial(1) => 0.02
  toNormal(0.33) => "0:20"
  toIndustrial("1:45") => 1.75

Kata Link:
  https://www.codewars.com/kata/6397b0d461067e0030d1315e/train/javascript
*/

function toIndustrial(time) {
  const arrTime = time.toString().split(":");
  if (arrTime[1]) {
    let industrialOurs = +arrTime[0];
    let industrialMinutes = Math.round((+arrTime[1] / 60) * 100) / 100;
    let industrialTime = industrialOurs + industrialMinutes;
    return +industrialTime;
  } else {
    let industrialMinutes = Math.round((+arrTime[0] / 60) * 100) / 100;
    return industrialMinutes;
  }
}

function toNormal(time) {

  const arrTime = time.toString().split(".");

  let industrialMinutes = arrTime[1];

  if (industrialMinutes.length < 2) {
    industrialMinutes = arrTime[1] * 10;
  } else {
    industrialMinutes = arrTime[1];
  }

  let normalOurs = Number(arrTime[0]);
  let normalMinutes = Math.round((industrialMinutes * 60) / 100);

  if (normalMinutes.toString().length === 1) {
    normalMinutes = "0" + normalMinutes;
  } else if (normalMinutes.toString().length > 2) {
    normalMinutes = Math.round (
      normalMinutes / Math.pow(10, (normalMinutes.toString().length - 2)));    
  }

  if(60 <= normalMinutes ) {
    normalMinutes -= 60;
    normalOurs += 1;
  }

  if (normalMinutes.toString().length === 1) {
    normalMinutes = "0" + normalMinutes;
  }

  let normalTime = `${normalOurs}:${normalMinutes}`;  
  return normalTime;
}

console.log(toIndustrial("69:59"));
console.log(toNormal(69.99373876));
