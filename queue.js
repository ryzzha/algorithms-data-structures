var Queue = /** @class */ (function () {
    function Queue() {
        this.items = [];
    }
    Queue.prototype.enqueue = function (item) {
        this.items.push(item);
    };
    Queue.prototype.dequeue = function () {
        return this.items.shift();
    };
    Queue.prototype.front = function () {
        return this.items[0];
    };
    Queue.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    Queue.prototype.size = function () {
        return this.items.length;
    };
    Queue.prototype.clear = function () {
        this.items = [];
    };
    return Queue;
}());
var CallCenterQueue = /** @class */ (function () {
    function CallCenterQueue() {
        this.callQueue = new Queue();
    }
    CallCenterQueue.prototype.receiveCall = function (clientName) {
        console.log("\uD83D\uDCDE Incoming call from: ".concat(clientName));
        this.callQueue.enqueue(clientName);
    };
    CallCenterQueue.prototype.answerCall = function () {
        if (this.callQueue.isEmpty()) {
            console.log("✅ No calls in queue");
            return;
        }
        var client = this.callQueue.dequeue();
        console.log("\uD83C\uDFA7 Answering call from: ".concat(client));
    };
    CallCenterQueue.prototype.showWaiting = function () {
        console.log("\uD83D\uDC65 Waiting calls: ".concat(this.callQueue.size()));
    };
    return CallCenterQueue;
}());
var center = new CallCenterQueue();
center.receiveCall("Anna");
center.receiveCall("Bohdan");
center.receiveCall("Iryna");
center.showWaiting();
center.answerCall();
center.answerCall();
center.showWaiting();
center.answerCall();
center.answerCall();
