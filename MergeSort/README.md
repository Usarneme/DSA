# Merge Sort

Break an array of elements down into single elements (single element is by definition already sorted) then re-combine the broken-down sections in order. 

if the size of array < 2
        return array 
    else
    sort left subarray
    sort right subarray
    combine them

### JavaScript Implementation
#### MergeSort function takes as a parameter/input an array. If the length of the array is greater than 2 then MergeSort breaks the array down by cutting it in half and calls itself recursively with each of the halves. Once the array has been broken down to size < 2 it recombines the left and right halves by passing them to the merge function. The merge function combines the two arrays in order by looping through the elements and creating a new array with all of the elements sorted. 