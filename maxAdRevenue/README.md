# Maximum Advertising Revenue (similar to the Knapsack Problem)

## Maximimizing Ad Revenue determines how much money can be made given a limited number of advertising locations and a series of ad's per-click and avg-clicks-per-day values.  

MaxAdRevenue.js takes as inputs a number of available ad locations on a website, an array of profits per click, and an array of average number of clicks per day. It gives as output the maximum daily return on placing some or all of the ads on the web page. This is calculated by first determining which ad has the best value (profits per click * avg clicks per day) and then placing the best-value ad until there are no more slots available. It keeps track of the value of each ad placed and returns the sum after exhausting ad-space. 