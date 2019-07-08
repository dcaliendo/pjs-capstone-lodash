const _ = {
  clamp(number, lower, upper) {
    const lowerClampedValue = Math.max(number, lower);
    const clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },
  
  inRange(number, start, end){
    if(end === undefined){
      end = start
      start = 0
    } if(start > end){
      var temp = end
      end = start
      start = temp
    }
    var isInRange = start <= number && number < end
    return isInRange
  },
  
  words(string){
    const words = string.split(' ');
    return words;
  },
  
  pad(string, length){
    if(string.length >= length){
      return string;
    };
    const startPaddingLength = Math.floor((length - string.length) / 2);
    const endPaddingLength = length - string.length - startPaddingLength;
  const paddedString =' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
return paddedString;
  },
  
  has(object, key){
    const hasValue = object[key];
    if(hasValue != undefined){
      return true;
    } return false;
  },
  
  invert(object){
    let invertObject = {};
    for(let key in object){
      const originalValue = object[key];
      invertObject = {originalValue : key}
    }
    return invertObject;
  },
  
  findKey(object, predicate){
    for(let key in object){
      let value = object[key];
      let predicateReturnValue = predicate(value);
      if(predicateReturnValue){
        return key;
      };
    };
  undefined
  return undefined;
  },
  
  drop(array, number){
    if(number === undefined){
      number = 1;
    }
    let droppedArray = array.slice(number, array.length);
    return droppedArray;
  },
  
  dropWhile(array, predicate){
    const callBack = (element, index) => {
      return !predicate(element, index, array);
    };
    let dropNumber = array.findIndex(callBack);
    let droppedArray = this.drop(array, dropNumber);
    return droppedArray;
  },
  
  chunk(array, size){
    if(size === undefined){
      size = 1;
    }
    let arrayChunks = [];
    for(let i = 0; i < array.length; i+= size){
      let arrayChunk = array.slice(i, i+size);
      arrayChunks.push(arrayChunk);
    }
    return arrayChunks
  }
  
};





// Do not write or modify code below this line.
module.exports = _;