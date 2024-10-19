# Leetcode

Array

1.container with most water
    two pointer method
    let's consider left as staring index and right last index -
    check which has minimum height and take that as height and calculate stating and ending to get a width
    area = (height * width) if width is greater than initial width update the value
    next if left pointer height is lesser then right more left pointer else move right pointer

2.two sum 
    hashmap method
    let's initialize the empty map, for every iteration subtract the current value with target value(target-value).
    now check the value with map whether resulted value is presented, if not set the current value with index in the map.
    if its present get the index for the value which we stored in map and also take our current iteration index, then break
    the loop and return the value 