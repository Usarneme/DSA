# DSA 200x Dynamic Programming Challenge #1

## Compute the minimum number of coins needed to give exact change given a change amount (money) and an array of possible coin denominations. 

Part of Data Structures and Algorithms 200x edX course; module on Dynamic Programming. Initial approach to solve this problem used either nested loops (O(n^2)) or a greedy algorithm. The greedy algorithm solved the problem from right to left, ie using a divide and conquer approach which broke the problem down and then called the same function on the smaller subproblem. This approach on relatively small inputs created billions-trillions of recursive calls and was untenable. 

The final implementation here creates an indexed array so each iteration can use a lookup of an existing value in order to compute the next value.  