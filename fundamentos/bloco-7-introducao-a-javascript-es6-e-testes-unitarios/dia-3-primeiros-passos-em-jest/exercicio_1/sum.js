function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }
  
  return a + b;
}

module.exports = sum;

// npm init -y -> creat package.json
// npm install --save-dev -> install jest in directory