
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix || matrix.length == 0) return [];
    
  matrix.map((item, index, arr) => {
    if (index % 2 !== 0) item.reverse();
      
  });

  matrix = matrix.join(',').split(',');
  return matrix.map(item => +item);;
}
