
class Node<T> {
    constructor(
      public data: T,
      public next: Node<T> | null = null
    ) {}
}

export class LinkedList<T> {
    private head: Node<T> | null;

    constructor(initialValue: T) {
        this.head = new Node(initialValue);
    }

    insert(value: T, index: number = 0): number {
        const newNode = new Node(value);
    
        if (index === 0) {
          newNode.next = this.head;
          this.head = newNode;
        } else {
          const prev = this.find(index - 1);
          if (!prev) throw new Error("Index out of bounds");
    
          newNode.next = prev.next;
          prev.next = newNode;
        }
    
        return index;
      }

      delete(index: number = 0): number {
        if (!this.head) return -1;
    
        if (index === 0) {
          this.head = this.head.next;
        } else {
          const prev = this.find(index - 1);
          if (!prev || !prev.next) throw new Error("Index out of bounds");
    
          prev.next = prev.next.next;
        }
    
        return index;
      }
    
      read(index: number = 0): T | undefined {
        const node = this.find(index);
        return node?.data;
      }
    
      indexOf(value: T): number | undefined {
        let current = this.head;
        let i = 0;
    
        while (current) {
          if (current.data === value) return i;
          current = current.next;
          i++;
        }
    
        return undefined;
      }
    
      each(callback: (data: T) => void): void {
        let current = this.head;
    
        while (current) {
          callback(current.data);
          current = current.next;
        }
      }
    
      private find(index: number): Node<T> | null {
        let current = this.head;
        let i = 0;
    
        while (current && i < index) {
          current = current.next;
          i++;
        }
    
        return current ?? null;
      }
}

const list = new LinkedList('first');
list.insert('second');
list.insert('third');

console.log(list.read(2));           
console.log(list.indexOf('sdf'));      
console.log(list.indexOf('first'));    

list.each((el) => console.log(el));   

console.log('====');

list.delete(1);                     

list.each((el) => console.log(el));   