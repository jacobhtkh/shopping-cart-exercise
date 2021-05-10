# Shopping Cart Exercise

A checkout system which takes a list of items scanned at the till and outputs the total cost.

The shop only sells Apples and Oranges.

Includes two offers on items:

- Buy one, get one free on Apples
- 3 for the price of 2 on Oranges

## Environment Setup

Make sure you have [Node](https://nodejs.org/en/) and [npm](https://nodejs.org/en/) installed.

Install the typescript and ts-node npm packages to compile and run the Typescript files.

```bash
npm install -g typescript ts-node
```

Check for successful typescript module install by running the command and seeing the options without an error.

```bash
tsc —help
```

## Usage

Compile the checkout.ts file and run it.

```bash
ts-node checkout.ts
```

Check the console logs to see the output, they're present for demo purposes.
Change the array in checkout.ts by adding or removing Apples and/or Oranges and rerun the command to see a different total cost output.
