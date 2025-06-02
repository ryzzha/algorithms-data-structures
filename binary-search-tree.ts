class TreeNode<T> {
    value: T;
    left: TreeNode<T> | null = null;
    right: TreeNode<T> | null = null;
  
    constructor(value: T) {
      this.value = value;
    }
  }
  
  class BinarySearchTree<T> {
    root: TreeNode<T> | null = null;
  
    insert(value: T): void {
      const newNode = new TreeNode(value);
      if (!this.root) {
        this.root = newNode;
        return;
      }
  
      let current = this.root;
      while (true) {
        if (value === current.value) return;
        if (value < current.value) {
          if (!current.left) {
            current.left = newNode;
            return;
          }
          current = current.left;
        } else {
          if (!current.right) {
            current.right = newNode;
            return;
          }
          current = current.right;
        }
      }
    }
  
    search(value: T): boolean {
      let current = this.root;
      while (current) {
        if (value === current.value) return true;
        current = value < current.value ? current.left : current.right;
      }
      return false;
    }
  
    inOrderTraversal(node = this.root): void {
      if (!node) return;
      this.inOrderTraversal(node.left);
      console.log(node.value);
      this.inOrderTraversal(node.right);
    }
  }
  