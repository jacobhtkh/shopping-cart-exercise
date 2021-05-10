enum Fruits {
  Apple = 'Apple',
  Orange = 'Orange',
}

enum FruitsPrice {
  Apple = 60,
  Orange = 25,
}

const numOfFruit = (fruits, name) => {
  return fruits.filter((fruit) => fruit === name).length;
};

const totalCost = (numOfApples, numOfOranges) => {
  return (
    (numOfApples * FruitsPrice.Apple + numOfOranges * FruitsPrice.Orange) /
    100
  ).toFixed(2);
};

const checkout = (fruits: string[]) => {
  const numOfApples = numOfFruit(fruits, Fruits.Apple);
  const numOfOranges = numOfFruit(fruits, Fruits.Orange);
  console.log(`Number of Apples: ${numOfApples}`);
  console.log(`Number of Oranges: ${numOfOranges}`);
  console.log(`Total Cost: £${totalCost(numOfApples, numOfOranges)}`);
  return `£${totalCost(numOfApples, numOfOranges)}`;
};

checkout(['Apple', 'Apple', 'Orange', 'Apple']);
