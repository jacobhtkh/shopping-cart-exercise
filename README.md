# Shopping Cart Exercise

A checkout system which takes a list of items scanned at the till and outputs the total cost.

The shop only sells Apples and Oranges.

Includes two offers on items:

- Buy one, get one free on Apples
- 3 for the price of 2 on Oranges

## Installation

### Requirements

Make sure you have [Node](https://nodejs.org/en/) and [npm](https://nodejs.org/en/) installed.

Use npm to install the typescript and ts-node packages to compile and run the Typescript file.

```bash
npm install -g typescript ts-node
```

Check for a successful typescript module install by running the command and seeing the options without an error.

```bash
tsc —help
```

## Usage

Compile the checkout.ts file and run it.

```bash
ts-node checkout.ts # returns the total cost as a string e.g £2.05 along with a console.log of the output
```

Check the console logs to see the output, they're present for demo purposes.<br>
Change the array in checkout.ts by adding or removing Apples and/or Oranges and rerun the command to see a different total cost output.
