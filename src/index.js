
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = [];
  let tempArr = [];

  if(!matrix) return [];

  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[i].length; j++) {
      if(i % 2) {
        tempArr.push(matrix[i][j]);
        if(j === matrix[i].length - 1) {
          arr.push(...tempArr.reverse());
          tempArr = [];
        }
      }
      else {
        arr.push(matrix[i][j]);
      }
    }
  }

  return arr;
}
