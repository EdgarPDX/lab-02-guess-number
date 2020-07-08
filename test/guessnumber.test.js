// IMPORT MODULES under test here:
import {compareNumbers} from '../guess.utils.js';
// import example from '../example.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const guess = 5
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = false;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.compareNumbers(actual, expected);
});
