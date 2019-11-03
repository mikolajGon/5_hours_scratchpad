"use strict";
/*
  ArrayList

We are going to approximate an implementation of ArrayList.In JavaScript terms, that means we are
going to implement an array using objects.You should not use arrays at all in this exercise, just
objects.Make a class (or constructor function; something you can call new on) called ArrayList.
ArrayList should have the following properties(in addition to whatever properties you create):

length - integer - How many elements in the array
push - function - accepts a value and adds to the end of the list
pop - function - removes the last value in the list and returns it
get - function - accepts an index and returns the value at that position
delete - function - accepts an index, removes value from list, collapses,
  and returns removed value

As always, you can change describe to xdescribe to prevent the unit tests from running while
  you work
*/
class ArrayList {
    constructor() {
        this.length = 0;
        this.data = {};
    }
    checkIndex(index) {
        if (index >= this.length || index < 0) {
            throw Error('Incorrect Index');
        }
    }
    deleteLastItem() {
        this.length--;
        delete this.data[this.length];
    }
    push(value) {
        this.data[this.length] = value;
        this.length++;
    }
    pop() {
        const poppedData = this.data[this.length - 1];
        this.deleteLastItem();
        return poppedData;
    }
    get(index) {
        this.checkIndex(index);
        return this.data[index];
    }
    delete(index) {
        this.checkIndex(index);
        for (let i = index + 1; i < this.length; i++) {
            this.data[i - 1] = this.data[i];
        }
        this.deleteLastItem();
    }
}
//# sourceMappingURL=ArrayMap.js.map