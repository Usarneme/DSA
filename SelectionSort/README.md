# Select Sort

Iterate through an array of elements searching for the lowest value and holding that value and index for comparison.

When a lower value is found, update the value and index.

At the end of the array, swap the first element in the array with the value of the lowest by using a temporary variable to hold the first value, place the lowest value in the first index, and then place the temporary value in the index of the replaced item. 

The first element is now sorted. Move to the next element in the array and repeat the above steps. 

### Two implementations in Java: 
#### 1st: using a while loop to hold the index currently being compared (starting at 0) and a single for loop to traverse the rest of the array. At each swap the while loop index is updated until we have reached the second from the last item in the array. 
#### 2nd: using two for loops to hold the index currently being compared as we move through the rest of the array in the second loop. At each swap the outside loop is progressed forward one element. 