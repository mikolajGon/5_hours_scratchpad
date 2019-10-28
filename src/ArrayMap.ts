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

type ArrayData<T = any> = {
  [k: string]: T
}

class ArrayList {
  public length: number = 0;
  private data: ArrayData = {};

  private checkIndex(index: number): void | Error {
    if (index >= this.length || index < 0) {
      throw Error('Incorrect Index')
    }
  }

  private deleteLastItem(): void {
    this.length--;
    delete this.data[this.length]
  }

  public push<T>(value: T):void {
    this.data[this.length] = value;
    this.length++;
  }

  public pop() {
    const poppedData = this.data[this.length - 1]
    this.deleteLastItem();
    return poppedData;
  }

  public get(index: number): any | Error {
    this.checkIndex(index);
    return this.data[index];
  }

  public delete(index: number): void | Error {
    this.checkIndex(index);
    for (let i = index + 1; i < this.length; i++) {
      this.data[i - 1] = this.data[i];
    }
    this.deleteLastItem()
  }
}