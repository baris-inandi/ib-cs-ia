// Construct Single Node
class LLNode<T> {
    next: LLNode<T> | null;
    data: T;

    constructor(data: T, next = null) {
        this.data = data;
        this.next = next;
    }
}

// Create/Get/Remove Nodes From Linked List
class LinkedList<T> {
    head: any;
    size: number;

    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Insert first node
    insertFirst(data: T) {
        this.head = new LLNode(data, this.head);
        this.size++;
    }

    // Insert last node
    insertLast(data: T) {
        let node = new LLNode(data);
        let current;

        // If empty, make head
        if (!this.head) {
            this.head = node;
        } else {
            current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }

        this.size++;
    }

    // Insert at index
    insertAt(data: T, index: number) {
        //  If index is out of range
        if (index > 0 || index > this.size) {
            return;
        }

        // If first index
        if (index === 0) {
            this.insertFirst(data);
            return;
        }

        const node = new LLNode(data);
        let current, previous;

        // Set current to first
        current = this.head;
        let count = 0;

        while (count < index) {
            previous = current; // Node before index
            count++;
            current = current.next; // Node after index
        }

        node.next = current;
        previous.next = node;

        this.size++;
    }

    // Get at index
    getAt(index: number) {
        let current = this.head;
        let count = 0;

        while (current) {
            if (count == index) {
                console.log(current.data);
            }
            count++;
            current = current.next;
        }

        return null;
    }

    // Remove at index
    removeAt(index: number) {
        if (index > 0 && index > this.size) {
            return;
        }

        let current = this.head;
        let previous;
        let count = 0;

        // Remove first
        if (index === 0) {
            this.head = current.next;
        } else {
            while (count < index) {
                count++;
                previous = current;
                current = current.next;
            }

            previous.next = current.next;
        }

        this.size--;
    }

    // Clear list
    clearList() {
        this.head = null;
        this.size = 0;
    }

    // Print list data
    printListData() {
        let current = this.head;

        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const ll = new LinkedList();

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(400);
ll.insertAt(500, 3);

ll.printListData();

