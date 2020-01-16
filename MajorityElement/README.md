# Searches an array of length N to determine if there is a majority element (defined as having more than N/2 repetitions)

### JavaScript implementation takes as input the length N and an array of N elements and determines if any element in the array is a majority; i.e.: is repeated more than N/2 times within the array. 

This is done by creating an array of at least N elements (since each element in the input array could potentially be unique) and fills the array values with 0. Each element in the input array causes an increment in the results array at the corresponding value's index and if at any time a results array value is at least N/2 then that value is a majority. 