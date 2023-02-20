# JavaScript Katas with TDD, Express, and Postman

This project is a collection of JavaScript katas that are developed using test-driven development (TDD) principles. The code is then integrated with Express to create an API that can be tested using Postman.

## Technologies Used

- JavaScript
- Node.js
- Express.js
- Postman

## Installation

Clone this repository to your local machine
Navigate to the project directory in your terminal
Install the required dependencies using `'npm install'`

# Usage

### Running the Tests

To run the tests, run the command `npm test`. This will run all the tests located in the test directory.

### Starting the Server

To start the Express server, run the command `npm start`. This will start the server on port 3000 by default.

### Using the API with Postman

The API contains several endpoints that can be tested using Postman.

<br>

| **Endpoint**                               | **Description**                                                          | **Example**                                                                                                                                 |
| ------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------- |
| GET /strings/hello/:string                 | Returns the string "Hello, " concatenated with the given string.         | GET /strings/hello/world returns { "result": "Hello, world" }                                                                               |
| GET /strings/upper/:string                 | Returns the given string converted to all uppercase.                     | GET /strings/upper/hello returns { "result": "HELLO" }                                                                                      |
| GET /strings/lower/:string                 | Returns the given string converted to all lowercase.                     | GET /strings/lower/HELLO returns { "result": "hello" }                                                                                      |
| GET /strings/first-characters/:string      | Returns the first character of the given string.                         | GET /strings/first-characters/hello returns { "result": "h" }                                                                               |
| GET /strings/first-characters/:string/:n   | Returns the first n characters of the given string.                      | GET /strings/first-characters/hello/2 returns { "result": "he" }                                                                            |
| GET /numbers/add/:a/:b                     | Returns the sum of a and b                                               | GET /numbers/add/1/2 returns { "result": 3 }                                                                                                |
| GET /numbers/subtract/:a/:b                | Returns the difference between a and b.                                  | GET /numbers/subtract/5/2 returns { "result": 3 }                                                                                           |
| POST /numbers/multiply                     | Returns the product of a and b.                                          | POST /numbers/multiply with body { "a": 5, "b": 2 } returns { "result": 10 }                                                                |
| POST /numbers/divide                       | Returns the quotient of a and b.                                         | POST /numbers/divide with body { "a": 10, "b": 2 } returns { "result": 5 }                                                                  |
| POST /numbers/remainder                    | Returns the remainder of dividing a by b.                                | POST /numbers/remainder with body { "a": 5, "b": 2 } returns { "result": 1 }                                                                |
| GET /arrays/element-at-index/:index?array= | Returns the element at the given index in the array.                     | GET /arrays/element-at-index/2?array=1,2,3,4 returns { "result": 3 }                                                                        |
| POST /arrays/to-string                     | Returns the given array as a comma-separated string.                     | POST /arrays/to-string with body { "array": [1,2,3,4] } returns { "result": "1,2,3,4" }                                                     |
| POST /arrays/starts-with-vowel             | Returns an array of elements in the given array that start with a vowel. | POST /arrays/starts-with-vowel with body { "array": ["apple", "orange", "banana", "eggplant"] } returns { "result": ["apple", "eggplant"] } |

## Conclusion

This project provides a great example of how to develop JavaScript katas using TDD principles, and then integrate them into an Express API that can be tested using Postman.
