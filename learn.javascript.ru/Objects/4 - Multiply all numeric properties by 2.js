/*
  Title:
    Multiply all numeric properties by 2.

  Description:
    Create a multiplyNumeric(obj) function that multiplies all numeric properties of an obj object by 2.
    Note that multiplyNumeric does not need to return anything. You should change the object directly.
    P.S. Use typeof to check that the property value is numeric.

  Examples: 
    // before calling the function
    let menu = {
      width: 200,
      height: 300,
      title: "My menu"
    };

    multiplyNumeric(menu);

    // after calling the function
    menu = {
      width: 400,
      height: 600,
      title: "My menu"
    };   

  Kata Link:
    https://learn.javascript.ru/task/multiply-numeric
*/

function multiplyNumeric(obj) {
  for (let key in obj) {
    if ( isFinite(obj[key]) ) {
      obj[key] = obj[key] * 2;
    }
  }
}
