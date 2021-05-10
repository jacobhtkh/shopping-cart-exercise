enum Fruits {
  Apple = 'Apple',
  Orange = 'Orange',
}

enum FruitPrices {
  Apple = 60,
  Orange = 25,
}

const numOfFruit = (fruits: string[], name: Fruits) => {
  return fruits.filter((fruit) => fruit === name).length;
};

const totalCost = (numOfApples: number, numOfOranges: number) => {
  let numOfOrangesOffer = numOfOranges === 3 ? numOfOranges - 1 : numOfOranges;

  return (
    (numOfApples * FruitPrices.Apple + numOfOrangesOffer * FruitPrices.Orange) /
    100
  ).toFixed(2);
};

const checkout = (fruits: string[]): string => {
  if (fruits.includes('Apple')) {
    console.log(
      `Number of Apples before offer: ${numOfFruit(fruits, Fruits.Apple)}`
    );

    fruits.push('Apple');

    console.log(
      `Number of Apples after offer: ${numOfFruit(fruits, Fruits.Apple)}`
    );
  }

  const numOfApples = numOfFruit(fruits, Fruits.Apple);
  const numOfOranges = numOfFruit(fruits, Fruits.Orange);

  console.log(`Number of Apples: ${numOfApples}`);
  console.log(`Number of Oranges: ${numOfOranges}`);
  console.log(`Total Cost: £${totalCost(numOfApples, numOfOranges)}`);

  return `£${totalCost(numOfApples, numOfOranges)}`;
};

// Buy one, get one free on Apples
console.log('Buy one, get one free on Apples');
checkout(['Apple', 'Apple', 'Orange', 'Apple']);
console.log('\n');

// Buy one, get one free on Apples
console.log('Buy one, get one free on Apples');
checkout(['Apple']);
console.log('\n');

// 3 for the price of 2 on Oranges
console.log('3 for the price of 2 on Oranges');
checkout(['Orange', 'Orange', 'Orange']);
