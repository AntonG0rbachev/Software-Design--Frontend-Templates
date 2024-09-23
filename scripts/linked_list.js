class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
        this.previous = null;
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
                while (currentNode.next) {
                    currentNode = currentNode.next;
                }
                currentNode.next = node;
                node.previous = currentNode;
            }
            length++;
        };
        this.addAll = function (array) {
            if (!(array instanceof Array)) {
                throw new Error('cannot add elements from non Array structure')
            }
            array.forEach(node => {
                this.add(node)
            })
        }
        this.remove = function (element) {
            var currentNode = head;
            var previousNode;
            if (currentNode.element === element) {
                head = currentNode.next;
            } else {
                while (currentNode.element !== element) {
                    previousNode = currentNode;
                    currentNode = currentNode.next;
                }
                previousNode.moveNext = currentNode.next;
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
                currentNode = currentNode.next;
            }
            return -1;
        };
        this.elementAt = function (index) {
            var currentNode = head;
            var count = 0;
            while (count < index) {
                count++;
                currentNode = currentNode.next;
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
                node.next = currentNode;
                head = node;
            } else {
                while (currentIndex < index) {
                    currentIndex++;
                    previousNode = currentNode;
                    currentNode = currentNode.next;
                }
                node.next = currentNode;
                previousNode.next = node;
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
                head = currentIndex.next;
            } else {
                while (currentIndex < index) {
                    currentIndex++;
                    previousNode = currentNode;
                    currentNode = currentNode.next;
                }
                previousNode.next = currentNode.next;
            }
            length--;
            return currentNode.element;
        };

        this.moveNext = function() {
            var nextNode = head.next != null ? head.next : null;
            head = nextNode;
        }
        this.getNext = function() {
            return head.next;
        }

        this.movePrevious = function() {
            var previousNode = head.previous != null ? head.previous : null;
            head = previousNode;
        }
        this.getPrevious = function() {
            return head.previous;
        }

        this.setHeadAtStart = function() {
            if (head != null) {
                while(this.getPrevious() != null) {
                    this.movePrevious()
                }
            }
        }

        this.toString = function() {
            var result = 'List is:\n';
            const currentNode = head;
            this.setHeadAtStart();
            result += `HEAD: ${head.element}\n`;
            var index = 0;
            while (this.getNext() != null) {
                this.moveNext();
                result += `node ${index}: ${head.element}`;
            }
            head = currentNode;
            return result;
        }
    }
}

export class FormsLinkedList {
    constructor() {
        var list = new LinkedList();
        list.addAll([
            '/forms/login/login.html',
            '/forms/signup/signup.html',
        ]);
        list.setHeadAtStart();
    }
}