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

type Pointer = number | null;
type LinkedListNode<T> = {
  next: Pointer
  value: T
}
type LinkedListData<T> = {
  [k: number]: LinkedListNode<T>
}

class LinkedList {
  public length: number = 0;
  private _head: Pointer = null;
  private _data: LinkedListData<any> = {};

  private _getPointer() {
    return Math.floor(Math.random() * (10^10));
  }

  private _getValuesPointersByIndex(index: number): Array<Pointer> {
    if (this.length <= index) return [ null, null ];
    let previousPointer: Pointer = null;
    let currentPointer = this._head;
    for (let i = 0; i < index; i++) {
      previousPointer = currentPointer;
      currentPointer = this._data[currentPointer!].next;
    }
    return [ currentPointer, previousPointer ];
  }

  public delete<T>(index: number): T | void  {
    const [indexPointer, previousIndexPointer] = this._getValuesPointersByIndex(index);
    if (!indexPointer) return void 0;
    const valueToReturn: T = this._data[indexPointer].value;
    if (!previousIndexPointer) {
      this._head = null;
      return valueToReturn;
    }
    this._data[previousIndexPointer].next = this._data[indexPointer].next;
    this.length--;
    delete this._data[indexPointer];
    return valueToReturn;
  }

  public get<T>(index: number): T | void {
    const [valuePointer] = this._getValuesPointersByIndex(index);
    if (!valuePointer) return void 0;
    return this._data[valuePointer].value;
  }

  public pop<T>(): T | void {
    return this.delete(this.length - 1);
  }

  public push<T>(value: T) {
    const pointer = this._getPointer();
    if(!this._head) {
      this._head = pointer;
    } else {
      const [valuePointer] = this._getValuesPointersByIndex(this.length - 1);
      this._data[valuePointer!].next = pointer;
    }
    this.length++;
    this._data[pointer] = {
      next: null,
      value
    }
  }


}