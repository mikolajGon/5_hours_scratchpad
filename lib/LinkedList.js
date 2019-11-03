"use strict";
/*
  LinkedList

  Name your class / constructor (something you can call new on) LinkedList

  LinkedList is made by making nodes that have two properties, the value that's being stored and a pointer to
  the next node in the list. The LinkedList then keep track of the head and usually the tail (I would suggest
  keeping track of the tail because it makes pop really easy.) As you may have notice, the unit tests are the
  same as the ArrayList; the interface of the two are exactly the same and should make no difference to the
  consumer of the data structure.

  I would suggest making a second class, a Node class. However that's up to you how you implement it. A Node
  has two properties, value and next.

  length - integer  - How many elements in the list
  push   - function - accepts a value and adds to the end of the list
  pop    - function - removes the last value in the list and returns it
  get    - function - accepts an index and returns the value at that position
  delete - function - accepts an index, removes value from list, collapses,
                      and returns removed value

  As always, you can change describe to xdescribe to prevent the unit tests from running while
  you work
*/
class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._data = {};
    }
    _getPointer() {
        return Math.floor(Math.random() * (10 ^ 10));
    }
    _getValuesPointersByIndex(index) {
        if (this.length <= index)
            return [null, null];
        let previousPointer = null;
        let currentPointer = this._head;
        for (let i = 0; i < index; i++) {
            previousPointer = currentPointer;
            currentPointer = this._data[currentPointer].next;
        }
        return [currentPointer, previousPointer];
    }
    delete(index) {
        const [indexPointer, previousIndexPointer] = this._getValuesPointersByIndex(index);
        if (!indexPointer)
            return void 0;
        const valueToReturn = this._data[indexPointer].value;
        if (!previousIndexPointer) {
            this._head = null;
            return valueToReturn;
        }
        this._data[previousIndexPointer].next = this._data[indexPointer].next;
        this.length--;
        delete this._data[indexPointer];
        return valueToReturn;
    }
    get(index) {
        const [valuePointer] = this._getValuesPointersByIndex(index);
        if (!valuePointer)
            return void 0;
        return this._data[valuePointer].value;
    }
    pop() {
        return this.delete(this.length - 1);
    }
    push(value) {
        const pointer = this._getPointer();
        if (!this._head) {
            this._head = pointer;
        }
        else {
            const [valuePointer] = this._getValuesPointersByIndex(this.length - 1);
            this._data[valuePointer].next = pointer;
        }
        this.length++;
        this._data[pointer] = {
            next: null,
            value
        };
    }
}
//# sourceMappingURL=LinkedList.js.map