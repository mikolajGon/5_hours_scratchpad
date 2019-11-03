/*

Binary Search Tree!

Name your class Tree.

I'd suggest making another class called Node. You don't have to; you can make them all plain JS objects

Here you'll make a BST. Your Tree class will have keep track of a root which will be the first item added
to your tree. From there, if the item is less than the value of that node, it will go into its left subtree
and if greater it will go to the right subtree.

There is a tree visualization helper. It will tell show you how your tree looks as you create it. In order
for this to work and for the unit tests to pass you, you must implement a Tree .toObject function that returns
your tree as a series of nested objects. Those nested objects must use the following names for their properties

value - integer     - value being contained in the node
left  - Node/object - the left node which itself may be another tree
right - Node/object - the right node which itself may be another tree

As always, you can change describe to xdescribe to prevent the unit tests from running

*/

class Tree {
  private value: number | null = null;
  private left: Tree | null = null;
  private right: Tree | null = null;

  public add(value: number): void {
    if (!this.value) {
      this.value = value;
      return void 0;
    }
    if (value <= this.value ) {
      if (!this.left) this.left = new Tree();
      this.left.add(value);
    } else {
      if (!this.right) this.right = new Tree();
      this.right.add(value);
    }
    return void 0;
  }

}

/* correct tests

describe('Binary Search Tree', function () {
  it('creates a correct tree', () => {
    const nums = [3, 7, 4, 6, 5, 1, 10, 2, 9, 8];
    const tree = new Tree();
    nums.map(num => tree.add(num));
    // const objs = tree.toObject();
    render(tree, nums);

        expect(tree.value).toEqual(3);

        expect(tree.left.value).toEqual(1);
        expect(tree.left.left).toBeNull();

        expect(tree.left.right.value).toEqual(2);
        expect(tree.left.right.left).toBeNull();
        expect(tree.left.right.right).toBeNull();

        expect(tree.right.value).toEqual(7);

        expect(tree.right.left.value).toEqual(4);
        expect(tree.right.left.left).toBeNull();

        expect(tree.right.left.right.value).toEqual(6);
        expect(tree.right.left.right.left.value).toEqual(5);
        expect(tree.right.left.right.left.right).toBeNull();
        expect(tree.right.left.right.left.left).toBeNull();

        expect(tree.right.right.value).toEqual(10);
        expect(tree.right.right.right).toBeNull();

        expect(tree.right.right.left.value).toEqual(9);
        expect(tree.right.right.left.right).toBeNull();

        expect(tree.right.right.left.left.value).toEqual(8);
        expect(tree.right.right.left.left.right).toBeNull();
        expect(tree.right.right.left.left.left).toBeNull();
  });
});
*/