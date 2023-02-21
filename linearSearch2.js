var linearsearch = (arr, num) => {
  var new_arr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == num) new_arr.push(i);
  }
  return [new_arr, num];
};

var [result, num] = linearsearch([2, 7, 5, 7, 8, 6], 7);

if (result.length > 0) {
  for (let j = 0; j < result.length; j++) {
    console.log(`${num} is found at index ${result[j]} `);
  }
} else {
  console.log(`Number not found`);
}
