# Singly Linked List

A linked list is a data structure for holding a linear collection of elements in non-consecutive memory space (e.g.: not an array and thus it is not required to know how many elements the list will contain when allocating memory space).

Each element or node in the linked list contains a data value and a pointer to the memory location of the next item in the linked list. This allows for adding elements to the head/start immediately as well as adding or removing elements throughout with a single traversal to the point of addition/removal. 

### JavaScript Implementation
#### Defines a data structure called a Node which consists of a data value and a pointer to the next Node. Defines a JS prototype called singlyLinkedList which consists of 0 or more Nodes. A singlyLinkedList contains methods for adding an element/Node to the end of the list of Nodes, removing a node at a given position, or getting the value of the data held in a Node at a given position. 