/*
  AVL Tree

  Name you class/function (anything we can call new on) Tree

  I would suggest making a Node class as well (it will help _a lot_ with AVL trees) Whereas with BSTs we
  could get away with most of the logic living in the Tree class, that will be a lot tougher with AVL
  trees dues how the function calls must be recursive in order to get the balancing correct.

  Tree must a method called add that takes a value and adds it to the tree and then correctly balances the
  tree. There is only one correct structure for any given order of adding numbers and the unit tests enforce
  that structure.

  If you have any questions conceptually about balancing the tree, refer to the class website.

  There is a tree visualization engine that should run automatically. Make sure you are calling the properties
  of the Nodes as follows:
  value - integer - the value being store in the tree
  left  - Node    - the subtree containing Node's with values less than the current Node's value
  right - Node    - the subtree containing Node's with values greater than the current Node's value

  As always, you can rename describe to xdescribe to prevent the unit tests from running and the visualization
  from displaying

*/

type Height = [number, number]

enum Direction {
  left = 'left',
  right = 'right'
}

class Tree {
  private value: number | null = null;
  private left: Tree | null = null;
  private right: Tree | null = null;

  public add(value: number): void {
  }

  private _add(value: number,  ): Array<number> {
    let height = [ 0, 0, 0]
    if (!this.value) {
      this.value = value;
    }else if (value <= this.value) {
      if (!this.left) this.left = new Tree();
      height = this.left._add(value);
      if (this.right) {
        height = [height[0] + 1, 0, height[1]];
      } else {
        height = [height[0] + 1, -1, height[1]];
      }
    } else {
      if (!this.right) this.right = new Tree();
      height =this.right._add(value);
      if (this.left) {
        height = [ height[0] + 1, 0, height[1] ];
      } else {
        height = [ height[0] + 1, 1, height[1] ];
      }
    }
    return height;
  }

  private _rotate(direction: Direction) {
    const oppositeDirection: Direction = direction === 'left' ? 'right' : 'left';
    // swap the values of nodes A and B
    const value = this.value;
    const oppositeChild = this[oppositeDirection];
    this.value = this[direction].value;
    this[direction].value = value;
    // make node B the left child of node A
    this[oppositeDirection] = this[direction];
    // make node C the right child of node A
    this[direction] = this[oppositeDirection][direction]
    // move node B's left!! child to its tight!! child
    this[oppositeDirection][direction] = this[direction][direction]
    // make node A's _original_ left child (which was null in this case) the left child of node B
    this[oppositeDirection][oppositeDirection] = oppositeChild;
    // update the heights of all the nodes involved
  }

}
