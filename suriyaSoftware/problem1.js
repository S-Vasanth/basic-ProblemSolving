// mark = [65,43,99,66,30]
// period=[4,3,5,6,4]
// find the two largest Number in mark Array, according to that position and add the value of the position
// in grade
//ex:two max elements are 99,66 thier position are 2,3 and sum the value among the position in period array
//5+6=11//output

function maxTwoEle(mark, period) {
  let firstMax = mark[0];
  let secMax = -999999;
  let firstPos, secPos;
  for (let i = 0; i < mark.length; i++) {
    if (mark[i] > firstMax) {
      secMax = firstMax;
      firstMax = mark[i];
      firstPos = i;
    } else if (mark[i] > secMax && mark[i] < firstMax) {
      secMax = mark[i];
      secPos = i;
    }
  }
  return period[firstPos] + period[secPos];
}
console.log(maxTwoEle([65, 43, 99, 77, 30], [4, 3, 5, 6, 4]));
