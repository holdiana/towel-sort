
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if( !matrix ){
    return [];}

  const m = [];
  for( let i = 0; i < matrix.length; i++){
    if(i % 2){
      m.push(matrix[i].reverse());
    } else if(i % 2 == 0){
      m.push(matrix[i]);
    } 
  }
  return m.flat();
}
