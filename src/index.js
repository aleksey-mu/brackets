  module.exports = function check(str, bracketsConfig) {
    const bracketsPattern = [];
    const maxCount = str.length / 2;
    bracketsConfig.forEach(element => {
      bracketsPattern.push(element.join(''));
    });

    let count = 0; 

    while (count < maxCount) {
      for (pattern of bracketsPattern) {
        str = str.replace(pattern, '');
      }
      count += 1;
    }

    return str.length ? false : true;
  }
