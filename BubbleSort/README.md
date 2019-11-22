# Bubble Sort

Iterate through an array comparing two elements at a time and swapping their position in the array if they are out of ascending order. Repeat iterations until all elements are sorted from smallest to greatest. 

        // repeat until no swaps
		// for i from 0 to n-2
		// 	if i'th and i+1'th elements are out of order
        // 		swap them


### Java Implementation: 
#### Repeat iteration until no swaps remain using a swapped boolean flag that is updated to true each time a new swap is done. For each element in the array up until the second from the last element, compare the current/i-th element with the next/i+1th element and swap them if they are not in ascending order. 