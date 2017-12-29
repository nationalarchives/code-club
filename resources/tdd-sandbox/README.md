# TDD sandbox

This is a sandbox for experimenting with test-driven development (TDD) in JavaScript.

## Getting started 

There are many JavaScript testing frameworks available. For this repository we'll be using [Mocha](https://mochajs.org). Because this has already been set as a `devDependency` in the `package.json` you can install it on your machine by running this command from the `tdd-sandbox` directory: 

```bash
npm install 
```

Having installed Mocha you can run the tests contained in `/test/test.js` by running:

```bash
npm test
```

## Red, Green Refactor - an example

This sandbox is seeded with an example class that generates Roman Numerals from an integer. This was built using the 'Red, Green, Refactor' workflow:

- **RED** - do sufficient design thinking up-front to be able to identify a testable thing your code will need to do. Then right a test for this, which will fail because you've not yet written the code to make it pass
- **GREEN** - write just enough code to make the test pass
- **REFACTOR** - improve the code you've written (for example, by removing duplication)

## Get some practice

The best way of getting used to - and better at - a test-driven approach is to get practice at writing tests. Using the example from `roman.js` and `/test/test.js` you could get some experience by solving one of these Kata using the TDD 'Red, Green, Refactor' workflow

- **Fizz Buzz** - Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”
- **Minimum coins** - Write a program that accepts a monetary value (for example £10, or 10.00p, or 99p) and returns the minimum number of UK coins that can represent that amount.
