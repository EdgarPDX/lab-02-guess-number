// IMPORT MODULES under test here:
import { compareNumbers } from '../guess.utils.js';
// import example from '../example.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const guess = 5;
    const correctNumber = 5; 
    
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(guess, correctNumber);

    //Expect
    const expected = 0;
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
