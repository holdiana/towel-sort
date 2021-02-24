
// You should implement your task here.

module.exports = function towelSort (matrix) {
  m = [];
  for( let i = 0; i < matrix.length; i++){
    if( matrix === [] || matrix.length === 0){
      return [];
    } else if(i % 2 !== 0){
      m.push(matrix[i].reverse());
    } else m.push(matrix[i]);
  }
  return m.flat();
}
