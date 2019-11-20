// 11/20/2019 -------------------------------------------------------

/*
Write a function that always returns 5
Sounds easy right? Just bear in mind that you can't use any of the
following characters: 0123456789*+-/
*/

const unusualFive = () => ["a", "b", "c", "d", "e"].length



// ------------------------------------------------------------------



/*
Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.

Examples
removeSmallest([1,2,3,4,5]) = [2,3,4,5]
removeSmallest([5,3,2,1,4]) = [5,3,2,4]
removeSmallest([2,2,1,2,1]) = [2,2,2,1]
*/

const removeSmallest = (numbers) => {
    //Return the empty array if length is 0
    if (numbers.length === 0) return numbers
    else {
        // Because .splice modifies the original array,
        // Duplicate the array to keep the original intact
        let nums = numbers.slice()

        // Starting at the indexOf the lowest value, remove ONE element; the lowest value
        nums.splice(nums.indexOf(Math.min(...nums)), 1)

        return nums
    }
}