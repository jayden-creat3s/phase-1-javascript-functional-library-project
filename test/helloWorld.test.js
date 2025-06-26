const assert = require('assert');

describe('index.js', () => {
    describe('myEach', () => {
        it('calls alert with each element passed', () => {
            // Test implementation
        });
        it('calls alert properly on object values', () => {
            // Test implementation
        });
        it('returns the original collection', () => {
            // Test implementation
        });
    });

    describe('myMap', () => {
        it('successfully returns a correctly populated array', () => {
            // Test implementation
        });
        it('does not modify the original array', () => {
            // Test implementation
        });
        it('successfully returns a correctly populated array from modified object values', () => {
            // Test implementation
        });
        it('does not modify the original object', () => {
            // Test implementation
        });
    });

    describe('myReduce', () => {
        it('returns the correct reduced value when passed an initial value', () => {
            // Test implementation
        });
        it('returns the correct reduced value when not passed an initial value', () => {
            // Test implementation
        });
        it('does not modify the original array', () => {
            // Test implementation
        });
        it('returns the correct reduced value from object values', () => {
            const result = myReduce({ a: 10, b: 18 }, (acc, val) => acc + val, 0);
            assert.strictEqual(result, 28);
        });
        it('does not modify the original object', () => {
            // Test implementation
        });
    });

    describe('myFind', () => {
        it('returns the value if found', () => {
            // Test implementation
        });
        it('does not traverse the whole array if the value is found early', () => {
            let callCount = 0;
            const result = myFind([1, 2, 3, 4], (value) => {
                callCount++;
                return value === 2;
            });
            assert.strictEqual(callCount, 3);
        });
        it('returns undefined if the value is not present', () => {
            // Test implementation
        });
    });

    describe('myFilter', () => {
        it('correctly filters for values that the callback evaluates as true', () => {
            // Test implementation
        });
        it('correctly returns an empty array if no matching values are found', () => {
            // Test implementation
        });
    });

    describe('mySize', () => {
        it('correctly returns the size of the collection when an array is passed', () => {
            // Test implementation
        });
        it('correctly returns the size of the collection (amount of keys) when an object is passed', () => {
            // Test implementation
        });
    });

    describe('myFirst', () => {
        it('returns the first element of the collection', () => {
            // Test implementation
        });
        it('returns the first n elements of the collection when the second optional argument (n) is provided', () => {
            // Test implementation
        });
    });

    describe('myLast', () => {
        it('returns the last element of the collection', () => {
            // Test implementation
        });
        it('returns the last n elements of the collection when the second optional argument (n) is provided', () => {
            // Test implementation
        });
    });

    describe('myKeys', () => {
        it('retrieves all the names of the object\'s own enumerable properties', () => {
            // Test implementation
        });
        it('does not modify the original object', () => {
            // Test implementation
        });
    });

    describe('myValues', () => {
        it('retrieves all the values of the object\'s own properties', () => {
            // Test implementation
        });
        it('does not modify the original object', () => {
            // Test implementation
        });
    });
});