var devNumber = 1;
var devString = "1";
var devBoolean = true;
var devArray = [1, 2, 3];
var devObject = {name:"dev", age:20};

console.log(devNumber, typeof(devNumber)); // 1(숫자열) number
console.log(devString, typeof(devString)); // 1(문자열) string
console.log(devBoolean, typeof(devBoolean)); // true boolean
console.log(devArray, typeof(devArray)); // [1, 2, 3] object
console.log(devObject, typeof(devObject)); // {name:'dev', age:20} object

var wrapObject = {
  devNumber: 1,
  devString: "1",
  devBoolean: true,
  devArray: [1, 2, 3],
  devObject: {name: "dev", age: 20},
}

console.log(wrapObject.devNumber); // 1
console.log(wrapObject["devNumber"]); // 1