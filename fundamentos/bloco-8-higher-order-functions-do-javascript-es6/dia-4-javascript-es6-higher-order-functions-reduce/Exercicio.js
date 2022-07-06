// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/concat

const arrays = [["1", "2", "3"], [true], [4, 5, 6]];

function flatten(array) {
  return array.reduce((acc, curr) => {
    return acc.concat(curr);
  }, []);  
}

console.log(flatten(arrays));
