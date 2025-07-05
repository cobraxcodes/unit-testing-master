import {describe, expect, it} from 'vitest'

describe('Math operations', () =>{
    it('should add together correctly', () =>{
        const result = 2 + 3
        expect(result).toBe(5)
    })

    it('should minus together', () =>{
        const minus = 5 - 3
        expect(minus).toBe(2)
    })
})

// Challenge 1: Basic Arithmetic
// ✅ Write a test that checks if 4 * 2 equals 8.
describe('basic arithmetic', ()=>{
    it('should give the product correclty', () =>{
        const product = 4 * 2
        expect(product).toBe(8)
    })
})

// Challenge 2: Simple Function
// ✅ Write a function isEven(num) that returns true if a number is even, false otherwise.
// Then write 2 tests:
// One to check isEven(4) is true
// One to check isEven(5) is false
function isEven(num){
    if(num % 2 === 0){
        return true
    }else{
        return false
    }
}

describe('even checker', () =>{
    it('tests for even numbers', () =>{
        expect(isEven(4)).toBe(true)
    })
})


// Challenge 3: String Contains
// ✅ Test if the string 'Hello world' includes the word 'world'.

describe('string contains', () =>{
    let string = 'hello world'
    it('checks if a word is included in a string', () =>{
        expect(string).toContain('world')
    })
})


// Challenge 4: Array Includes
// ✅ Test if the array ['apple', 'banana', 'cherry'] contains 'banana'.
describe('array includes', ()=>{
    let array = ['apple', 'banana', 'cherry']
    it('tests array if it includes a word', ()=>{
        expect(array).toContain('banana')
    })
})

// Challenge 5: Capitalize Function
// ✅ Write a function capitalize(word) that returns the same word with the first letter capitalized.
// Test it with 'cobra' to check that it returns 'Cobra'.

function capitalize(word){
  let capital = word.slice(0,1).toUpperCase()
  let reset = word.slice(1)
  return capital + reset
}

describe(' capitalize function ', () =>{
    it('checks if first letter is capitalized', ()=>{
        expect(capitalize('hello')).toBe("Hello")
    })
})

// Challenge 6: Object Property Check
// ✅ Create an object:
// const user = { name: 'Melrose', age: 30 }
// Write a test to check if the object has a property name with value 'Melrose'.

const user = { name: 'Melrose', age: 30 }
describe('object property check', () =>{
    it('checks if object contains a value', ()=>{
        expect(user).toHaveProperty('name', "Melrose")
    })
})


// Challenge 7: Negative Test
// ✅ Write a test to check that 10 / 2 is not equal to 3.
describe('negative test',()=>{
    let division = 10 / 2
    it('tests to check that number is not equal', ()=>{
        expect(division).not.toBe(3)
    })
})

// Challenge 8: Length Check
// ✅ Test if the length of the string 'vitest' is 6.
describe('length check', ()=>{
    let string = 'vitest'
    it('tests length of a string', ()=>{
        expect(string.length).toBe(6)
    })
})

// Challenge 9: Array Length Test
// ✅ Test that the array [1, 2, 3, 4, 5] has a length of 5.
describe('array length test', ()=>{
    let arr = [1, 2, 3, 4, 5]
    it('tests the length of an array', ()=>{
        expect(arr.length).toBe(5)
    })
})

// Challenge 10: Function Throws Error
// ✅ Write a function throwError() that throws an error with message 'Something went wrong'.
// Write a test to check that it throws when called.
// Example:
function throwError() {
  throw new Error('Something went wrong');
}

describe('function throws errr', () =>{
    it('expects a function to throw an error', ()=>{
        expect(throwError).toThrow('Something went wrong')
    })
})

