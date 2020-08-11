function chooseMultiplesOfThree(collection) {
  // TODO 1: 在这里写实现代码
  return collection.filter(it => it % 3 === 0);
}

function chooseNoRepeatNumber(collection) {
  // TODO 2: 在这里写实现代码
  // return collection.filter((it, index) => collection.indexOf(it) === index);
  return [...new Set(collection)];
}

export { chooseMultiplesOfThree, chooseNoRepeatNumber };
