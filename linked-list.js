"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
var Node = /** @class */ (function () {
    function Node(data, next) {
        if (next === void 0) { next = null; }
        this.data = data;
        this.next = next;
    }
    return Node;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList(initialValue) {
        this.head = new Node(initialValue);
    }
    LinkedList.prototype.insert = function (value, index) {
        if (index === void 0) { index = 0; }
        var newNode = new Node(value);
        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
        }
        else {
            var prev = this.find(index - 1);
            if (!prev)
                throw new Error("Index out of bounds");
            newNode.next = prev.next;
            prev.next = newNode;
        }
        return index;
    };
    LinkedList.prototype.delete = function (index) {
        if (index === void 0) { index = 0; }
        if (!this.head)
            return -1;
        if (index === 0) {
            this.head = this.head.next;
        }
        else {
            var prev = this.find(index - 1);
            if (!prev || !prev.next)
                throw new Error("Index out of bounds");
            prev.next = prev.next.next;
        }
        return index;
    };
    LinkedList.prototype.read = function (index) {
        if (index === void 0) { index = 0; }
        var node = this.find(index);
        return node === null || node === void 0 ? void 0 : node.data;
    };
    LinkedList.prototype.indexOf = function (value) {
        var current = this.head;
        var i = 0;
        while (current) {
            if (current.data === value)
                return i;
            current = current.next;
            i++;
        }
        return undefined;
    };
    LinkedList.prototype.each = function (callback) {
        var current = this.head;
        while (current) {
            callback(current.data);
            current = current.next;
        }
    };
    LinkedList.prototype.find = function (index) {
        var current = this.head;
        var i = 0;
        while (current && i < index) {
            current = current.next;
            i++;
        }
        return current !== null && current !== void 0 ? current : null;
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
var list = new LinkedList('first');
list.insert('second');
list.insert('third');
console.log(list.read(2)); // "first"
console.log(list.indexOf('sdf')); // undefined
console.log(list.indexOf('first')); // 2
list.each(function (el) { return console.log(el); }); // third, second, first
console.log('====');
list.delete(1); // видаляє "second"
list.each(function (el) { return console.log(el); }); // third, first
