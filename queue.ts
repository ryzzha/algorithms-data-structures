class Queue<T> {
    private items: T[] = [];
  
    enqueue(item: T): void {
      this.items.push(item);
    }
  
    dequeue(): T | undefined {
      return this.items.shift();
    }
  
    front(): T | undefined {
      return this.items[0];
    }
  
    isEmpty(): boolean {
      return this.items.length === 0;
    }
  
    size(): number {
      return this.items.length;
    }
  
    clear(): void {
      this.items = [];
    }
  }
  

  class CallCenterQueue {
    private callQueue = new Queue<string>();
  
    receiveCall(clientName: string): void {
      console.log(`📞 Incoming call from: ${clientName}`);
      this.callQueue.enqueue(clientName);
    }
  
    answerCall(): void {
      if (this.callQueue.isEmpty()) {
        console.log("✅ No calls in queue");
        return;
      }
  
      const client = this.callQueue.dequeue();
      console.log(`🎧 Answering call from: ${client}`);
    }
  
    showWaiting(): void {
      console.log(`👥 Waiting calls: ${this.callQueue.size()}`);
    }
  }

  const center = new CallCenterQueue();

center.receiveCall("Mark");
center.receiveCall("Tim");
center.receiveCall("Ira");

center.showWaiting(); 

center.answerCall();  
center.answerCall();  

center.showWaiting(); 

center.answerCall(); 
center.answerCall();