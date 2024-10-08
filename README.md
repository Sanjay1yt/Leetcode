# Leetcode

Array

1.container with most water
    two pointer method
    let consider left as staring index and right last index -
    check which has minimum height and take that as height and calculate stating and ending to get a width
    area = (height * width) if width is greater than initial width update the value
    next if left pointer height is lesser then right more left pointer else move right pointer
