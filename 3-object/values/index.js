export default function countTypesNumber(source) {
  // TODO 6: 在这里写实现代码
  let sum = 0;
  const valuelist = Object.values(source);
  valuelist.forEach(it => (sum += parseInt(it)));
  return sum;
}
