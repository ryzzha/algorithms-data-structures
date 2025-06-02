class MaxHeap {
    private data: number[] = [];
  
    insert(value: number): void {
      this.data.push(value);
      this.trickleUp();
    }
  
    delete(): number | undefined {
      if (this.data.length === 0) return undefined;
      const max = this.data[0];
      const last = this.data.pop();
      if (this.data.length > 0 && last !== undefined) {
        this.data[0] = last;
        this.trickleDown();
      }
      return max;
    }
  
    private trickleUp(): void {
      let index = this.data.length - 1;
      while (index > 0) {
        const parentIndex = Math.floor((index - 1) / 2);
        if (this.data[index] <= this.data[parentIndex]) break;
        [this.data[index], this.data[parentIndex]] = [this.data[parentIndex], this.data[index]];
        index = parentIndex;
      }
    }
  
    private trickleDown(): void {
      let index = 0;
      const length = this.data.length;
  
      while (true) {
        const left = 2 * index + 1;
        const right = 2 * index + 2;
        let largest = index;
  
        if (left < length && this.data[left] > this.data[largest]) {
          largest = left;
        }
        if (right < length && this.data[right] > this.data[largest]) {
          largest = right;
        }
        if (largest === index) break;
        [this.data[index], this.data[largest]] = [this.data[largest], this.data[index]];
        index = largest;
      }
    }
  
    getHeap(): number[] {
      return this.data;
    }
  }
  