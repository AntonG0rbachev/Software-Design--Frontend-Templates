class Node {
    constructor(element) {
        this.element = element;
        this.moveNext = null;
        this.movePrevious = null;
    }
}
export class LinkedList {
    constructor() {
        var length = 0;
        var head = null;
        this.size = function () {
            return length;
        };
        this.head = function () {
            return head;
        };
        this.add = function (element) {
            var node = new Node(element);
            if (head == null) {
                head = node;
            } else {
                var currentNode = head;
                while (currentNode.moveNext) {
                    currentNode = currentNode.moveNext;
                }
                currentNode.moveNext = node;
            }
            length++;
        };
        this.addAll = function (array) {
            if (!(array instanceof Array)) {
                throw new Error('cannot add elements from non Array structure')
            }
            array.forEach(node => this.add(node))
        }
        this.remove = function (element) {
            var currentNode = head;
            var previousNode;
            if (currentNode.element === element) {
                head = currentNode.moveNext;
            } else {
                while (currentNode.element !== element) {
                    previousNode = currentNode;
                    currentNode = currentNode.moveNext;
                }
                previousNode.moveNext = currentNode.moveNext;
            }
            length--;
        };
        this.isEmpty = function () {
            return length === 0;
        };
        this.indexOf = function (element) {
            var currentNode = head;
            var index = -1;
            while (currentNode) {
                index++;
                if (currentNode.element === element) {
                    return index;
                }
                currentNode = currentNode.moveNext;
            }
            return -1;
        };
        this.elementAt = function (index) {
            var currentNode = head;
            var count = 0;
            while (count < index) {
                count++;
                currentNode = currentNode.moveNext;
            }
            return currentNode.element;
        };
        this.addAt = function (index, element) {
            var node = new Node(element);
            var currentNode = head;
            var previousNode;
            var currentIndex = 0;
            if (index > length) {
                return false;
            }
            if (index === 0) {
                node.moveNext = currentNode;
                head = node;
            } else {
                while (currentIndex < index) {
                    currentIndex++;
                    previousNode = currentNode;
                    currentNode = currentNode.moveNext;
                }
                node.moveNext = currentNode;
                previousNode.moveNext = node;
            }
            length++;
        };
        this.removeAt = function (index) {
            var currentNode = head;
            var previousNode;
            var currentIndex = 0;
            if (index < 0 || index >= length) {
                return null;
            }
            if (index === 0) {
                head = currentIndex.moveNext;
            } else {
                while (currentIndex < index) {
                    currentIndex++;
                    previousNode = currentNode;
                    currentNode = currentNode.moveNext;
                }
                previousNode.moveNext = currentNode.moveNext;
            }
            length--;
            return currentNode.element;
        };

        this.moveNext = function() {
            nextNode = this.head.next;
            this.head = nextNode;
        }
        this.getNext = function() {
            return this.head.next;
        }

        this.movePrevious = function() {
            previousNode = this.head.previous;
            this.head = previousNode;
        }
        this.getPrevious = function() {
            return this.head.previous;
        }

        this.setHeadAtStart = function() {
            if (this.head != null) {
                while(this.getPrevious != null) {
                    this.movePrevious
                }
            }
        }
    }
}